import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { newKycToken, hashToken } from "@/lib/token";
import crypto from "crypto";
import { auditAndDiscord } from "@/lib/audit-discord";

export async function POST(req: NextRequest) {
  // === API LOG START ===
  console.log("[API] /api/issue-link called");
  const raw = await req.text();
  console.log("[API] Raw body:", raw);
  // 重新 parse JSON
  const { whmcsClientId, email } = JSON.parse(raw || "{}");
  // === API LOG END ===

  if (req.headers.get("x-api-key") !== process.env.WHMCS_API_KEY) {
    console.log("[API] Unauthorized: bad API key");
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const token = newKycToken();
  const salt = crypto.randomBytes(16).toString("hex");
  const tokenHash = hashToken(token, salt);
  const expiresAt = new Date(Date.now() + 7 * 24 * 3600 * 1000);

  let applicant = await prisma.applicant.findFirst({
    where: { whmcsClientId },
  });
  if (!applicant) {
    applicant = await prisma.applicant.create({
      data: { whmcsClientId, email },
    });
    console.log("[API] Applicant created:", applicant.id);
  } else if (applicant.email !== email) {
    applicant = await prisma.applicant.update({
      where: { id: applicant.id },
      data: { email },
    });
    console.log("[API] Applicant updated:", applicant.id);
  }

  const session = await prisma.kycSession.create({
    data: { applicantId: applicant.id, tokenHash, tokenSalt: salt, expiresAt },
  });

  await prisma.applicant.update({
    where: { id: applicant.id },
    data: { latestSessionId: session.id },
  });

  const verifyUrl = `${process.env.PUBLIC_BASE_URL}?verify_token=${token}`;

  await auditAndDiscord(
    {
      event: "KYC_LINK_ISSUED",
      sessionId: session.id,
      applicantId: applicant.id,
      whmcsClientId,
      message: `to ${email}`,
    },
    { verifyUrl, expiresAt }
  );

  console.log("[API] Response:", { verifyUrl, expiresAt });

  return NextResponse.json({ verifyUrl, expiresAt });
}
