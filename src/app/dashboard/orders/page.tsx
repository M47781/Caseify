import OrdersTable from '@/components/dashboard/OrdersTable';
import { ShoppingBag, Download } from 'lucide-react';

export default function OrdersPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <ShoppingBag className="w-8 h-8 text-mint" />
                        إدارة الطلبات
                    </h1>
                    <p className="text-gray-500 text-sm">تتبع وحالات الطلبات، والتواصل مع الزبائن.</p>
                </div>

                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                    <Download className="w-5 h-5" />
                    تصدير الطلبات (CSV)
                </button>
            </div>

            {/* Table Section */}
            <OrdersTable />
        </div>
    );
}
