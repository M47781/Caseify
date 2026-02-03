'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    ShoppingBag,
    Image as ImageIcon,
    Tag,
    Settings,
    Smartphone,
    LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
    { icon: LayoutDashboard, label: 'الرئيسية', href: '/dashboard' },
    { icon: ShoppingBag, label: 'الطلبات', href: '/dashboard/orders' },
    { icon: ImageIcon, label: 'التصاميم', href: '/dashboard/designs' },
    { icon: Tag, label: 'الأسعار', href: '/dashboard/pricing' },
    { icon: Settings, label: 'الإعدادات', href: '/dashboard/settings' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-gray-900 text-white flex flex-col h-screen sticky top-0 border-l border-gray-800">
            {/* Brand */}
            <div className="p-6 border-b border-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 gradient-mint rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-mint to-green bg-clip-text text-transparent">
                    Caseify Admin
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 py-8 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-mint text-white shadow-lg shadow-mint/20"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn(
                                "w-5 h-5",
                                isActive ? "text-white" : "text-gray-400 group-hover:text-mint"
                            )} />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / User */}
            <div className="p-4 border-t border-gray-800">
                <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                    <LogOut className="w-5 h-5 text-red-400" />
                    <span>الخروج للموقع</span>
                </Link>
            </div>
        </aside>
    );
}
