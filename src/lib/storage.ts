// lib/storage.ts
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  HeadObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const endpoint = `${
  process.env.MINIO_USE_SSL === "true" ? "https" : "http"
}://${process.env.MINIO_ENDPOINT}`;

export const s3 = new S3Client({
  region: "auto",
  endpoint,
  forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY!,
    secretAccessKey: process.env.MINIO_SECRET_KEY!,
  },
});

const BUCKET_NAME = process.env.MINIO_BUCKET!;

// 原有的預簽名 URL 函數（移除加密）
export async function presignPut({
  Key,
  ContentType,
  expiresIn = 60,
}: {
  Key: string;
  ContentType: string;
  expiresIn?: number;
}) {
  const Bucket = process.env.MINIO_BUCKET!;
  const cmd = new PutObjectCommand({
    Bucket,
    Key,
    ContentType,
    // 移除 ServerSideEncryption
  });
  const url = await getSignedUrl(s3, cmd, { expiresIn });
  return { url, Bucket, Key };
}

// 新增：直接上傳函數（移除加密）
export async function uploadToStorage({
  Key,
  Body,
  ContentType,
}: {
  Key: string;
  Body: Uint8Array;
  ContentType: string;
}) {
  try {
    // console.log("Starting direct upload to S3/MinIO:", {
    //   Key,
    //   ContentType,
    //   size: Body.length,
    // });

    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key,
      Body: Buffer.from(Body),
      ContentType,
      // 移除 ServerSideEncryption
    });

    const result = await s3.send(command);
    // console.log("S3/MinIO upload result:", result);

    return {
      success: true,
      etag: result.ETag,
      bucket: BUCKET_NAME,
      key: Key,
      size: Body.length,
    };
  } catch (error: any) {
    console.error("uploadToStorage error:", error);
    throw new Error(`S3/MinIO 上傳失敗: ${error.message}`);
  }
}

// 新增：獲取文件 URL（如果需要）
export async function getFileUrl(Key: string, expiresIn: number = 3600) {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key,
    });
    const url = await getSignedUrl(s3, command, { expiresIn });
    return url;
  } catch (error) {
    console.error("getFileUrl error:", error);
    throw error;
  }
}

// 新增：刪除文件（如果需要）
export async function deleteFile(Key: string) {
  try {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key,
    });
    await s3.send(command);
    return { success: true };
  } catch (error) {
    console.error("deleteFile error:", error);
    throw error;
  }
}

// 新增：檢查文件是否存在
export async function fileExists(Key: string): Promise<boolean> {
  try {
    const command = new HeadObjectCommand({
      Bucket: BUCKET_NAME,
      Key,
    });
    await s3.send(command);
    return true;
  } catch (error) {
    return false;
  }
}

// 新增：列出文件（如果需要）
export async function listFiles(prefix: string) {
  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: prefix,
    });
    const result = await s3.send(command);
    return result.Contents || [];
  } catch (error) {
    console.error("listFiles error:", error);
    throw error;
  }
}
