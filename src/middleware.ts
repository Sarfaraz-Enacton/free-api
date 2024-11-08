import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./api/auth";
import { routes } from "./routes-config";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const user = await getUser();
  const isLoggedIn = (await cookies()).get("auth_token")?.value;

  const loginPath = routes.login;
  const registerPath = routes.register;
  // console.log(isLoggedIn);
  if (isLoggedIn) {
    // If the user is logged in, you might want to redirect them away from login/register
    if (
      request.nextUrl.pathname === loginPath ||
      request.nextUrl.pathname === registerPath
    ) {
      return NextResponse.redirect(new URL(routes.home, request.url)); // Redirect to dashboard or another page
    }
  } else {
    // If the user is not logged in, you can redirect them to a different page
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/about-2", request.url)); // Redirect to about-2 if trying to access dashboard
    }
  }

  return NextResponse.next();
}
