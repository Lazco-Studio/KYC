import { NextRequest, NextResponse } from "next/server";
import { presignPut } from "@/lib/storage";
import { auditAndDiscord } from "@/lib/audit-discord";
import { randomUUID as uuid } from "crypto";

const ALLOWED = new Set(["image/jpeg", "image/png", "application/pdf"]);

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("sessionId")!;
  const docType = req.nextUrl.searchParams.get("docType")!;
  const mime = req.nextUrl.searchParams.get("mime")!;
  const bytes = Number(req.nextUrl.searchParams.get("bytes") || "0");

  if (!ALLOWED.has(mime))
    return NextResponse.json({ error: "bad_mime" }, { status: 400 });
  if (bytes <= 0 || bytes > 10 * 1024 * 1024)
    return NextResponse.json({ error: "size_limit" }, { status: 400 });

  const ext =
    mime === "application/pdf" ? "pdf" : mime === "image/png" ? "png" : "jpg";

  const Key = `${sessionId}/${docType}/${uuid()}.${ext}`;
  const { url } = await presignPut({
    Key,
    ContentType: mime,
    expiresIn: 60,
  });

  await auditAndDiscord(
    {
      event: "UPLOAD_URL_ISSUED",
      message: "Issued presigned PUT",
      sessionId,
      severity: "INFO",
      ip: req.headers.get("x-forwarded-for"),
      ua: req.headers.get("user-agent"),
    },
    { Key, mime, bytes }
  );

  return NextResponse.json({
    url,
    key: Key,
    bucket: process.env.MINIO_BUCKET,
  });
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
