'use client';

import { useState, useEffect } from 'react';
import {
    ShoppingBag,
    CheckCircle,
    Smartphone,
    ImageIcon,
    TrendingUp,
    Clock
} from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';

export default function DashboardOverview() {
    const [orders, setOrders] = useState<any[]>([]);
    const [stats, setStats] = useState([
        { label: 'إجمالي الطلبات', value: 0, icon: ShoppingBag, color: 'bg-blue-500' },
        { label: 'طلبات مؤكدة', value: 0, icon: CheckCircle, color: 'bg-green-500' },
        { label: 'أكثر موديل مطلوب', value: '...', icon: Smartphone, color: 'bg-purple-500' },
        { label: 'تصاميم مرفوعة', value: 0, icon: ImageIcon, color: 'bg-orange-500' },
    ]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('caseify_orders') || '[]');
        setOrders(stored.slice(0, 5));

        // Calculate basic stats
        const total = stored.length;
        const confirmed = stored.filter((o: any) => o.status === 'confirmed').length;

        setStats([
            { label: 'إجمالي الطلبات', value: total, icon: ShoppingBag, color: 'bg-blue-500' },
            { label: 'طلبات مؤكدة', value: confirmed, icon: CheckCircle, color: 'bg-green-500' },
            { label: 'أحدث طراز', value: stored[0]?.model || 'لا يوجد', icon: Smartphone, color: 'bg-purple-500' },
            { label: 'تصاميم جديدة', value: total, icon: ImageIcon, color: 'bg-orange-500' },
        ]);
    }, []);

    const recentOrders = orders.length > 0 ? orders : [
        { id: 'ORD001', name: 'أحمد بن علي', model: 'iPhone 15 Pro', status: 'new', date: 'منذ ساعتين', price: 2800 },
        { id: 'ORD002', name: 'سارة محمد', model: 'Galaxy S24 Ultra', status: 'confirmed', date: 'منذ 5 ساعات', price: 3300 },
    ];

    return (
        <div className="space-y-10">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">مرحباً بك، أدمن! 👋</h1>
                <p className="text-gray-500 text-sm">إليك ملخص أداء متجرك اليوم.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <StatCard
                        key={i}
                        label={stat.label}
                        value={stat.value}
                        icon={stat.icon}
                        colorClass={stat.color}
                    />
                ))}
            </div>

            {/* Middle Section: Recent Orders & Performance */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Recent Orders Table */}
                <div className="lg:col-span-2 card">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">أحدث الطلبات</h3>
                        <Link href="/dashboard/orders" className="text-mint text-sm font-bold hover:underline">
                            عرض الكل
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-right">
                            <thead>
                                <tr className="text-gray-400 text-sm border-b border-gray-100">
                                    <th className="pb-4 font-medium">المعرف</th>
                                    <th className="pb-4 font-medium">العميل</th>
                                    <th className="pb-4 font-medium">الموديل</th>
                                    <th className="pb-4 font-medium">السعر</th>
                                    <th className="pb-4 font-medium">الحالة</th>
                                    <th className="pb-4 font-medium">التاريخ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="group hover:bg-gray-50 transition-colors">
                                        <td className="py-4 font-medium text-gray-900">{order.id}</td>
                                        <td className="py-4 text-gray-600">{order.name}</td>
                                        <td className="py-4 text-gray-600">{order.model}</td>
                                        <td className="py-4 font-bold text-gray-900">{formatPrice(order.price)}</td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'new' ? 'bg-yellow-100 text-yellow-700' :
                                                order.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                {order.status === 'new' ? 'جديد' :
                                                    order.status === 'confirmed' ? 'مؤكد' : 'ملغى'}
                                            </span>
                                        </td>
                                        <td className="py-4 text-gray-400 text-xs">{order.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Sales Progress Card */}
                <div className="card gradient-mint text-white">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold">الأداء الشهري</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-2 opacity-90">
                                <span>الهدف الشهري (200 طلب)</span>
                                <span>62%</span>
                            </div>
                            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full bg-white w-[62%]" />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 space-y-4">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 opacity-70" />
                                <span className="text-sm opacity-90 text-right">آخر تحديث: الآن</span>
                            </div>
                            <p className="text-sm leading-relaxed opacity-90">
                                أداء ممتاز هذا الأسبوع! نسبة التأكيد ارتفعت بـ 15% مقارنة بالأسبوع الماضي.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
