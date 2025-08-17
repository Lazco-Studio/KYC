import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidTwId } from "@/lib/tw-id";
import { auditAndDiscord } from "@/lib/audit-discord";

export async function POST(req: NextRequest) {
  const { sessionId, residency, twIdNumber, docs, consent } = await req.json();
  if (!consent)
    return NextResponse.json({ error: "consent_required" }, { status: 400 });
  const session = await prisma.kycSession.findUnique({
    where: { id: sessionId },
    include: { applicant: true, documents: true },
  });
  if (!session)
    return NextResponse.json({ error: "bad_session" }, { status: 404 });
  if (!["DRAFT", "NEEDS_MORE_INFO"].includes(session.status))
    return NextResponse.json({ error: "invalid_status" }, { status: 400 });
  if (residency === "TW") {
    if (!isValidTwId(twIdNumber || ""))
      return NextResponse.json({ error: "invalid_tw_id" }, { status: 400 });
    const types = (docs || []).map((d: any) => d.type);
    if (!(types.includes("TW_ID_FRONT") && types.includes("TW_ID_BACK")))
      return NextResponse.json({ error: "tw_id_required" }, { status: 400 });
  } else {
    if (!(docs || []).some((d: any) => d.type === "OTHER_PASSPORT"))
      return NextResponse.json({ error: "passport_required" }, { status: 400 });
  }
  await prisma.document.createMany({
    data: (docs || []).map((d: any) => ({ ...d, sessionId })),
  });
  await prisma.kycSession.update({
    where: { id: sessionId },
    data: { residency, status: "PENDING" },
  });
  await auditAndDiscord(
    {
      event: "SUBMIT_PENDING",
      sessionId,
      applicantId: session.applicantId,
      whmcsClientId: session.applicant.whmcsClientId,
      message: "Applicant submitted",
    },
    { residency, docCount: (docs || []).length }
  );
  return NextResponse.json({ ok: true });
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
