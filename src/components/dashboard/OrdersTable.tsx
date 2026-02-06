'use client';

import { useState, useEffect } from 'react';
import {
    MessageCircle,
    ExternalLink,
    MoreVertical,
    Search,
    Filter
} from 'lucide-react';
import { formatPrice } from '@/lib/utils';

// Mock data
const mockOrders = [
    { id: 'ORD001', name: 'أحمد بن علي', phone: '0555123456', wilaya: 'الجزائر', model: 'iPhone 15 Pro', price: 2800, status: 'new', date: '2026-02-03' },
    { id: 'ORD002', name: 'سارة محمد', phone: '0666987654', wilaya: 'وهران', model: 'Galaxy S24 Ultra', price: 3300, status: 'confirmed', date: '2026-02-03' },
    { id: 'ORD003', name: 'ياسين بلال', phone: '0777112233', wilaya: 'سطيف', model: 'iPhone 13', price: 2500, status: 'cancelled', date: '2026-02-02' },
    { id: 'ORD004', name: 'فاطمة الزهراء', phone: '0550112233', wilaya: 'قسنطينة', model: 'Redmi Note 13', price: 2500, status: 'new', date: '2026-02-02' },
    { id: 'ORD005', name: 'مراد كمال', phone: '0661445566', wilaya: 'البليدة', model: 'iPhone 14 Pro Max', price: 3100, status: 'confirmed', date: '2026-02-01' },
];

export default function OrdersTable() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [orders, setOrders] = useState([...mockOrders]);

    useEffect(() => {
        // Load real orders from localStorage
        const storedOrders = JSON.parse(localStorage.getItem('caseify_orders') || '[]');
        setOrders([...storedOrders, ...mockOrders]);
    }, []);

    const filteredOrders = orders.filter(order => {
        const matchesSearch = (order.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (order.phone || '').includes(searchTerm) ||
            (order.id?.toLowerCase() || '').includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6">
            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="البحث بالاسم، الهاتف أو المعرف..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pr-12 pl-4 py-3 rounded-xl border-2 border-gray-100 focus:border-mint outline-none transition-colors"
                    />
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <Filter className="w-5 h-5 text-gray-400 shrink-0" />
                    {['all', 'new', 'confirmed', 'cancelled'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${filterStatus === status
                                ? 'bg-mint text-white shadow-lg shadow-mint/20'
                                : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
                                }`}
                        >
                            {status === 'all' ? 'الكل' :
                                status === 'new' ? 'جديد 🟡' :
                                    status === 'confirmed' ? 'مؤكد 🟢' : 'ملغى 🔴'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table Card */}
            <div className="card overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr className="text-gray-500 text-sm">
                                <th className="px-6 py-4 font-bold">المعرف</th>
                                <th className="px-6 py-4 font-bold">العميل</th>
                                <th className="px-6 py-4 font-bold">الولاية</th>
                                <th className="px-6 py-4 font-bold">الهاتف</th>
                                <th className="px-6 py-4 font-bold">الموديل</th>
                                <th className="px-6 py-4 font-bold">السعر</th>
                                <th className="px-6 py-4 font-bold">الحالة</th>
                                <th className="px-6 py-4 font-bold text-center">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                                        <td className="px-6 py-4 text-gray-700">{order.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{order.wilaya}</td>
                                        <td className="px-6 py-4 text-gray-600" dir="ltr">{order.phone}</td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">{order.model}</td>
                                        <td className="px-6 py-4 font-bold text-mint">{formatPrice(order.price)}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${order.status === 'new' ? 'bg-yellow-100 text-yellow-700' :
                                                order.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                {order.status === 'new' ? 'جديد 🟡' :
                                                    order.status === 'confirmed' ? 'مؤكد 🟢' : 'ملغى 🔴'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors" title="فتح التصميم">
                                                    <ExternalLink className="w-5 h-5" />
                                                </button>
                                                <a
                                                    href={`https://wa.me/213${order.phone.substring(1)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-gray-400 hover:text-green-500 transition-colors"
                                                    title="واتساب"
                                                >
                                                    <MessageCircle className="w-5 h-5" />
                                                </a>
                                                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                                    <MoreVertical className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={8} className="px-6 py-12 text-center text-gray-400">
                                        لا توجد طلبات تطابق بحثك.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
