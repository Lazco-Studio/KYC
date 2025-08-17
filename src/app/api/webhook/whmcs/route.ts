import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  // 視需求處理，這裡僅示範回 200
  return NextResponse.json({ ok: true });
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
