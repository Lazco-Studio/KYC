import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidTwId } from "@/lib/tw-id";
import { auditAndDiscord } from "@/lib/audit-discord";

export async function POST(req: NextRequest) {
  try {
    const { sessionId, residency, twIdNumber, docs, consent } =
      await req.json();
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
        return NextResponse.json(
          { error: "passport_required" },
          { status: 400 }
        );
    }

    // 檢查是否已有文件記錄，如果有就跳過 createMany
    const existingDocs = session.documents || [];
    // console.log("現有文件數量:", existingDocs.length);
    // console.log("前端發送的文件數量:", (docs || []).length);

    if (existingDocs.length === 0 && docs && docs.length > 0) {
      // 轉換前端資料格式以符合 Prisma schema
      const docsForPrisma = docs.map((d: any) => ({
        // 只包含 schema 中存在的欄位
        type: d.type,
        objectKey: d.objectKey,
        mime: d.mime,
        bytes: d.size, // 重要：前端傳 size，schema 要 bytes
        sha256: d.sha256,
        sessionId: sessionId,
        // 不包含 id（讓 Prisma 自動生成）
        // 不包含 uploadedAt（讓 Prisma 使用 @default(now())）
        // 不包含 fileName（schema 中沒有這個欄位）
      }));

      // console.log("轉換後的文件資料:", docsForPrisma);

      await prisma.document.createMany({
        data: docsForPrisma,
        skipDuplicates: true, // 防止重複插入
      });
    } else {
      // console.log("跳過文件插入：已有文件記錄或沒有新文件");
    }

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
  } catch (error) {
    console.error("Error in /api/submit:", error);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
