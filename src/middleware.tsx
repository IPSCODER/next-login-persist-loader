import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log(req)
  const res = NextResponse.next();

  // Add a custom header to indicate route loading
  res.headers.set("x-loading", "true");

  return res;
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
