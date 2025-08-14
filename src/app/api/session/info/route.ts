import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
export async function GET() {
  const s = await getSession();
  if (!s) return NextResponse.json({ error: "no_session" }, { status: 401 });
  return NextResponse.json({ id: s.id, residency: s.residency || "?" });
}
