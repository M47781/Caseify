import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const admin = await prisma.admin.findUnique({
            where: { email },
        });

        if (!admin) {
            return NextResponse.json({ message: "Admin not found" }, { status: 401 });
        }

        const valid = await bcrypt.compare(password, admin.password);
        if (!valid) {
            return NextResponse.json({ message: "Wrong password" }, { status: 401 });
        }

        const token = jwt.sign(
            { id: admin.id, role: admin.role },
            process.env.JWT_SECRET!,
            { expiresIn: "1d" }
        );

        const response = NextResponse.json({ token });

        response.cookies.set("admin_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 86400, // 1 day
            path: "/",
        });

        return response;
    } catch (e) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
