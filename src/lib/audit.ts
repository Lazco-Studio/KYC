import { prisma } from "@/lib/prisma";
export type Severity = "INFO" | "WARN" | "ERROR" | "SECURITY";
export type ActorType = "SYSTEM" | "USER" | "ADMIN" | "WHMCS" | "CRON";
export async function logAudit(input: any) {
  await prisma.auditLog.create({
    data: {
      ...input,
      actorId: input.actorId ? String(input.actorId) : null,
      severity: input.severity || "INFO",
      actorType: input.actorType || "SYSTEM",
    },
  });
}
