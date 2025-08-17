import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
export async function GET() {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "no_session" }, { status: 401 });
  return NextResponse.json({ id: s.id, residency: s.residency || "?" });
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
