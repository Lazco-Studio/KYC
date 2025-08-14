import crypto from "crypto";
export function newKycToken() {
  const raw = crypto.randomBytes(16).toString("hex"); // 32 hex
  return raw.match(/.{1,8}/g)!.join("_");
}
export function hashToken(token: string, salt: string) {
  return crypto.createHash("sha256").update(`${token}${salt}`).digest("hex");
}
