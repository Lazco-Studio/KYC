import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { newKycToken, hashToken } from "@/lib/token";
import crypto from "crypto";
import { auditAndDiscord } from "@/lib/audit-discord";

export async function POST(req: NextRequest) {
  const raw = await req.text();
  const { whmcsClientId, email } = JSON.parse(raw || "{}");

  if (req.headers.get("x-api-key") !== process.env.WHMCS_API_KEY) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const token = newKycToken();
  const salt = crypto.randomBytes(16).toString("hex");
  const tokenHash = hashToken(token, salt);
  const expiresAt = new Date(Date.now() + 7 * 24 * 3600 * 1000);

  let applicant = await prisma.applicant.findFirst({
    where: { whmcsClientId, email },
  });

  if (!applicant) {
    applicant = await prisma.applicant.create({
      data: { whmcsClientId, email },
    });
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


  return NextResponse.json({ verifyUrl, expiresAt });
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
