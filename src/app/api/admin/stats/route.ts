import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const users = await prisma.user.count();
        const orders = await prisma.order.count();
        const revenue = await prisma.order.aggregate({
            _sum: { total: true },
        });

        return NextResponse.json({
            users,
            orders,
            revenue: revenue._sum.total || 0,
        });
    } catch (error) {
        console.error("Stats API error:", error);
        return NextResponse.json(
            { message: "Failed to fetch stats" },
            { status: 500 }
        );
    }
}
