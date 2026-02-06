import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("admin_token")?.value;
    const { pathname } = req.nextUrl;

    // Avoid infinite redirect loop for the login page
    if (pathname === "/dashboard/admin/login") {
        return NextResponse.next();
    }

    if (!token) {
        return NextResponse.redirect(new URL("/dashboard/admin/login", req.url));
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
        await jose.jwtVerify(token, secret);
        return NextResponse.next();
    } catch (error) {
        console.error("Middleware JWT verification failed:", error);
        return NextResponse.redirect(new URL("/dashboard/admin/login", req.url));
    }
}

export const config = {
    matcher: ["/dashboard/admin/:path*"],
};
