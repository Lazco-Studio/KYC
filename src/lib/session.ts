import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
export const SESSION_COOKIE = "ksid";
export async function getSession() {
  const id = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!id) return null;
  return prisma.kycSession.findUnique({
    where: { id },
    include: { applicant: true, documents: true },
  });
}
