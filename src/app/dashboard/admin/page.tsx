"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        fetch("/api/admin/stats")
            .then((res) => res.json())
            .then(setStats);
    }, []);

    if (!stats) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Users" value={stats.users} />
            <Card title="Orders" value={stats.orders} />
            <Card title="Revenue" value={`${stats.revenue} $`} />
        </div>
    );
}

function Card({ title, value }: any) {
    return (
        <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
    );
}
