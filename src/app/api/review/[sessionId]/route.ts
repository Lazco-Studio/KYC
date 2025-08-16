import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { auditAndDiscord } from "@/lib/audit-discord";

async function sendToWhmcs(payload: any) {
  const base = process.env.WHMCS_BASE_URL!;
  const url = `${base}/modules/addons/lazco_kyc/callback.php`;
  const body = JSON.stringify(payload);
  const sig = crypto
    .createHmac("sha256", process.env.WHMCS_WEBHOOK_SECRET!)
    .update(body)
    .digest("hex");

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Signature": sig },
    body,
  });

  const text = await res.text();
  await prisma.outboundWebhookLog.create({
    data: {
      kind: "WHMCS",
      targetUrl: url,
      event: "REVIEW_DECISION",
      payload,
      statusCode: res.status,
      responseBody: text.slice(0, 1000),
      error: res.ok ? null : "whmcs_failed",
      attempt: 1,
    },
  });
  return res.ok;
}

// ✅ 注意這裡：params 是 Promise
export async function POST(
  request: Request,
  context: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await context.params;
  const { status, reason } = await request.json();

  const s = await prisma.kycSession.findUnique({
    where: { id: sessionId },
    include: { applicant: true },
  });
  if (!s) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  await prisma.kycSession.update({ where: { id: s.id }, data: { status } });
  await prisma.decision.create({
    data: { sessionId: s.id, status, reason, decidedBy: "admin@example" },
  });

  await auditAndDiscord(
    {
      event: "REVIEW_DECISION",
      sessionId: s.id,
      applicantId: s.applicantId,
      whmcsClientId: s.applicant.whmcsClientId,
      message: `${status}${reason ? " - " + reason : ""}`,
    },
    { status, reason }
  );

  await sendToWhmcs({
    whmcsClientId: s.applicant.whmcsClientId,
    status,
    reason,
  });

  return NextResponse.json({ ok: true });
}

// 避免被快取
export const dynamic = "force-dynamic";
