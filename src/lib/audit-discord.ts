import { prisma } from "@/lib/prisma";
import { logAudit } from "@/lib/audit";
import { sendDiscord } from "@/lib/discord";
export async function auditAndDiscord(base: any, fields?: Record<string, any>) {
  const sev = base.severity || "INFO";
  await logAudit({ ...base, data: fields });
  const r: any = await sendDiscord({
    event: base.event,
    severity: sev,
    message: base.message,
    fields: {
      ...fields,
      environment: process.env.ENVIRONMENT,
      correlationId: base.correlationId,
      sessionId: base.sessionId,
      applicantId: base.applicantId,
      whmcsClientId: base.whmcsClientId,
    },
  });
  await prisma.outboundWebhookLog.create({
    data: {
      kind: "DISCORD",
      targetUrl: process.env.DISCORD_WEBHOOK_URL!,
      event: base.event,
      payload: fields || {},
      statusCode: r.status ?? null,
      responseBody: typeof r.body === "string" ? r.body.slice(0, 1000) : null,
      error: r.ok ? null : "discord_failed",
      attempt: 1,
    },
  });
}
