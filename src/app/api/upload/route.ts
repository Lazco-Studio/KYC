import { NextRequest, NextResponse } from "next/server";
import { uploadToStorage } from "@/lib/storage";
import { auditAndDiscord } from "@/lib/audit-discord";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { randomUUID as uuid } from "crypto";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "application/pdf"]);
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(req: NextRequest) {
  try {
    // console.log("=== Upload API Called ===");

    // 解析 FormData
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const sessionIdFromForm = formData.get("sessionId") as string;
    const docType = formData.get("docType") as string;

    // console.log("Upload parameters:", {
    //   fileName: file?.name,
    //   fileSize: file?.size,
    //   fileType: file?.type,
    //   sessionIdFromForm,
    //   docType,
    // });

    // 參數驗證
    if (!file || !docType) {
      console.error("Missing required parameters");
      return NextResponse.json(
        {
          success: false,
          error: "缺少必要參數",
        },
        { status: 400 }
      );
    }

    // 獲取當前 session（與其他 API 保持一致）
    const session = await getSession();
    if (!session) {
      console.error("No valid session");
      return NextResponse.json(
        {
          success: false,
          error: "無效的 session",
        },
        { status: 401 }
      );
    }

    const sessionId = session.id;
    // console.log("Using session ID:", sessionId);

    // 文件類型驗證
    if (!ALLOWED_TYPES.has(file.type)) {
      console.error("Invalid file type:", file.type);
      return NextResponse.json(
        {
          success: false,
          error: "不支援的檔案格式",
        },
        { status: 400 }
      );
    }

    // 文件大小驗證
    if (file.size <= 0 || file.size > MAX_SIZE) {
      console.error("Invalid file size:", file.size);
      return NextResponse.json(
        {
          success: false,
          error: "檔案大小必須在 1B 到 10MB 之間",
        },
        { status: 400 }
      );
    }

    // 生成文件路徑
    const ext =
      file.type === "application/pdf"
        ? "pdf"
        : file.type === "image/png"
        ? "png"
        : "jpg";
    const objectKey = `${sessionId}/${docType}/${uuid()}.${ext}`;

    // console.log("Generated object key:", objectKey);

    // 讀取文件內容
    const fileBuffer = await file.arrayBuffer();
    const fileBytes = new Uint8Array(fileBuffer);

    // console.log("File buffer size:", fileBytes.length);

    // 計算 SHA256
    const sha256Buffer = await crypto.subtle.digest("SHA-256", fileBuffer);
    const sha256 = Array.from(new Uint8Array(sha256Buffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // console.log("Calculated SHA256:", sha256);

    // 直接上傳到 MinIO
    // console.log("Uploading to storage...");
    const uploadResult = await uploadToStorage({
      Key: objectKey,
      Body: fileBytes,
      ContentType: file.type,
    });

    // console.log("Upload result:", uploadResult);

    // 直接插入資料庫，而不是調用另一個 API
    // console.log("Saving to database...");
    const document = await prisma.document.create({
      data: {
        sessionId,
        type: docType as any, // DocType enum
        objectKey,
        mime: file.type,
        bytes: file.size,
        sha256,
      },
    });

    // console.log("Document saved:", document.id);

    // 審計日誌
    try {
      await auditAndDiscord(
        {
          event: "FILE_UPLOADED",
          message: "File uploaded successfully",
          sessionId,
          severity: "INFO",
          ip: req.headers.get("x-forwarded-for"),
          ua: req.headers.get("user-agent"),
        },
        {
          objectKey,
          mime: file.type,
          bytes: file.size,
          sha256,
          fileName: file.name,
        }
      );
    } catch (auditError) {
      console.error("Audit failed:", auditError);
      // 不要因為審計失敗而返回錯誤
    }

    // console.log("Upload process completed successfully");

    return NextResponse.json({
      success: true,
      data: {
        objectKey,
        fileName: file.name,
        size: file.size,
        type: file.type,
        sha256,
      },
    });
  } catch (error: any) {
    console.error("=== Upload API Error ===");
    console.error("Error details:", error);
    console.error("Error stack:", error.stack);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "上傳失敗",
      },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
