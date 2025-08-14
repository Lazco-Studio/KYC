import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  if (!req.headers.get("x-correlation-id")) {
    res.headers.set("x-correlation-id", crypto.randomUUID());
  }
  return res;
}
