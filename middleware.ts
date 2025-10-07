import { NextResponse } from "next/server";

// Simplified middleware - locale detection is handled via cookies in the root layout
export function middleware() {
  return NextResponse.next();
}

export const config = {
  // Match all pathnames except for static files, API routes, and _next
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
