import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  // return NextResponse.redirect(new URL("/", req.url));
  // if (!req.nextauth.token) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
  // if (req.nextUrl.pathname.startsWith("/Dashboard") && !req.nextauth.token) {
  //   return NextResponse.rewrite(new URL("/api/auth/signin", req.url));
  // }
});

export const config = {
  matcher: ["/api/:path*", "/Dashboard"],
};

// export const config = {
//   matcher: ["/api/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
