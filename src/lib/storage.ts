import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
const endpoint = `${
  process.env.MINIO_USE_SSL === "true" ? "https" : "http"
}://${process.env.MINIO_ENDPOINT}`;
export const s3 = new S3Client({
  endpoint,
  forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY!,
    secretAccessKey: process.env.MINIO_SECRET_KEY!,
  },
});
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
    ServerSideEncryption: "AES256",
  });
  const url = await getSignedUrl(s3, cmd, { expiresIn });
  return { url, Bucket, Key };
}
