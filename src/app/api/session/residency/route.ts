import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { auditAndDiscord } from "@/lib/audit-discord";
export async function POST(req: NextRequest) {
  const { residency } = await req.json();
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "no_session" }, { status: 401 });
  await prisma.kycSession.update({ where: { id: s.id }, data: { residency } });
  await auditAndDiscord({
    event: "RESIDENCY_SELECTED",
    sessionId: s.id,
    message: `residency=${residency}`,
  });
  return NextResponse.json({ ok: true });
}
