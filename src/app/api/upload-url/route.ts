import { NextRequest, NextResponse } from "next/server";
import { presignPut } from "@/lib/storage";
import { auditAndDiscord } from "@/lib/audit-discord";
import { randomUUID as uuid } from "crypto";

const ALLOWED = new Set(["image/jpeg", "image/png", "application/pdf"]);

export async function GET(req: NextRequest) {
  try {
    // 添加詳細日誌
    // console.log("=== Upload URL API Called ===");
    // console.log("URL:", req.nextUrl.toString());

    const sessionId = req.nextUrl.searchParams.get("sessionId")!;
    const docType = req.nextUrl.searchParams.get("docType")!;
    const mime = req.nextUrl.searchParams.get("mime")!;
    const bytes = Number(req.nextUrl.searchParams.get("bytes") || "0");

    // console.log("Parameters:", { sessionId, docType, mime, bytes });

    // 參數驗證
    if (!sessionId || !docType || !mime) {
      console.error("Missing required parameters");
      return NextResponse.json({ error: "missing_params" }, { status: 400 });
    }

    if (!ALLOWED.has(mime)) {
      console.error("Invalid mime type:", mime);
      return NextResponse.json({ error: "bad_mime" }, { status: 400 });
    }

    if (bytes <= 0 || bytes > 10 * 1024 * 1024) {
      console.error("Invalid file size:", bytes);
      return NextResponse.json({ error: "size_limit" }, { status: 400 });
    }

    const ext =
      mime === "application/pdf" ? "pdf" : mime === "image/png" ? "png" : "jpg";

    const Key = `${sessionId}/${docType}/${uuid()}.${ext}`;
    // console.log("Generated Key:", Key);

    // 嘗試生成預簽名 URL
    // console.log("Calling presignPut...");
    const result = await presignPut({
      Key,
      ContentType: mime,
      expiresIn: 60,
    });
    // console.log("presignPut result:", result);

    const { url } = result;

    // 嘗試審計日誌（如果這個失敗，至少返回 URL）
    try {
      // console.log("Calling auditAndDiscord...");
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
      // console.log("auditAndDiscord completed");
    } catch (auditError) {
      console.error("auditAndDiscord failed:", auditError);
      // 不要因為審計失敗而阻止返回結果
    }

    const response = {
      url,
      key: Key,
      bucket: process.env.MINIO_BUCKET,
    };

    // console.log("API Success:", response);
    return NextResponse.json(response);
  } catch (error: any) {
    console.error("=== Upload URL API Error ===");
    console.error("Error details:", error);
    console.error("Error stack:", error.stack);

    return NextResponse.json(
      {
        error: "internal_error",
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
