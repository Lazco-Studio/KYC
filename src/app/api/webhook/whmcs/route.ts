import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  // 視需求處理，這裡僅示範回 200
  return NextResponse.json({ ok: true });
}
