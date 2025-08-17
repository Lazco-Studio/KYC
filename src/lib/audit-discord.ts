import { prisma } from "@/lib/prisma";
import { logAudit } from "@/lib/audit";
import { sendDiscord } from "@/lib/discord";

export async function auditAndDiscord(base: any, fields?: Record<string, any>) {
  const sev = base.severity || "INFO";
  await logAudit({ ...base, data: fields });

  let r: any;
  let statusCode: number | null = null;
  let responseBody: string | null = null;
  let error: string | null = null;

  try {
    r = await sendDiscord({
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

    // axios 回傳
    statusCode = r.status ?? null;
    responseBody =
      typeof r.data === "string"
        ? r.data.slice(0, 1000)
        : JSON.stringify(r.data).slice(0, 1000);
  } catch (e: any) {
    error = e.message || "discord_failed";
  }

  await prisma.outboundWebhookLog.create({
    data: {
      kind: "DISCORD",
      targetUrl: process.env.DISCORD_WEBHOOK_URL!,
      event: base.event,
      payload: fields || {},
      statusCode,
      responseBody,
      error,
      attempt: 1,
    },
  });
}
