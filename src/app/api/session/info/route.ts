import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "no_session" }, { status: 401 });

  try {
    // 獲取已上傳的文件記錄
    const uploadedDocs = await prisma.document.findMany({
      where: {
        sessionId: s.id,
      },
      select: {
        id: true,
        type: true,
        objectKey: true,
        mime: true,
        bytes: true,
        sha256: true,
        uploadedAt: true,
      },
      orderBy: {
        uploadedAt: "asc",
      },
    });

    // 轉換為前端期望的格式
    const docs = uploadedDocs.map((doc) => ({
      id: doc.id,
      type: doc.type,
      objectKey: doc.objectKey,
      fileName: extractFileNameFromObjectKey(doc.objectKey),
      mime: doc.mime,
      size: doc.bytes,
      sha256: doc.sha256,
      uploadedAt: doc.uploadedAt.toISOString(),
    }));

    return NextResponse.json({
      id: s.id,
      residency: s.residency || "?",
      docs: docs,
      docsCount: docs.length,
    });
  } catch (error) {
    console.error("獲取 session 信息錯誤:", error);
    // 如果查詢文件失敗，至少返回基本的 session 信息
    return NextResponse.json({
      id: s.id,
      residency: s.residency || "?",
      docs: [],
      docsCount: 0,
      error: "docs_fetch_failed",
    });
  }
}

// 輔助函數：從 objectKey 提取檔案名
function extractFileNameFromObjectKey(objectKey: string): string {
  const parts = objectKey.split("/");
  if (parts.length >= 3) {
    return parts[parts.length - 1];
  }
  return objectKey;
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
