import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auditAndDiscord } from "@/lib/audit-discord";

export async function POST(req: NextRequest) {
  const { sessionId, type, objectKey, mime, bytes, sha256 } = await req.json();

  // 基礎驗證（確認 objectKey 屬於該 session）
  if (!objectKey?.startsWith(`${sessionId}/`))
    return NextResponse.json({ error: "bad_key" }, { status: 400 });

  // 只做暫存紀錄，正式入庫仍於 /api/submit 時再整體檢核一次
  await prisma.document.create({
    data: { sessionId, type, objectKey, mime, bytes, sha256 },
  });

  await auditAndDiscord(
    {
      event: "DOC_UPLOADED",
      message: "Client reported upload complete",
      sessionId,
    },
    { objectKey, mime, bytes }
  );

  return NextResponse.json({ ok: true });
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
