import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashToken } from "@/lib/token";
import crypto from "crypto";
import { auditAndDiscord } from "@/lib/audit-discord";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  if (!token)
    return NextResponse.json({ error: "missing_token" }, { status: 400 });
  // 嘗試找到對應 session（以 tokenHash 比對）
  const sessions = await prisma.kycSession.findMany({
    select: {
      id: true,
      tokenSalt: true,
      tokenHash: true,
      expiresAt: true,
      consumedAt: true,
      applicantId: true,
    },
    where: {},
  });
  const match = sessions.find(
    (s) => s.tokenHash === hashToken(token, s.tokenSalt)
  );
  if (!match || match.expiresAt < new Date() || match.consumedAt) {
    await auditAndDiscord({
      event: "SECURITY_BLOCKED",
      severity: "SECURITY",
      message: "Invalid or expired token",
    });
    return NextResponse.json({ error: "invalid_or_expired" }, { status: 400 });
  }
  await prisma.kycSession.update({
    where: { id: match.id },
    data: { consumedAt: new Date() },
  });
  const res = NextResponse.json({ ok: true, sessionId: match.id });
  res.cookies.set("ksid", match.id, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
  });
  await auditAndDiscord({
    event: "TOKEN_VERIFIED",
    sessionId: match.id,
    applicantId: match.applicantId,
    message: "Token verified",
  });
  return res;
}
