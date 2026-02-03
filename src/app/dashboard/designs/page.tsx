'use client';

import { useState } from 'react';
import DesignCard from '@/components/dashboard/DesignCard';
import { ImageIcon, Grid, List, Search } from 'lucide-react';

// Mock data
const mockDesigns = [
    { id: 'DES001', orderId: 'ORD001', imageUrl: '', model: 'iPhone 15 Pro', caseType: 'Silicone', finish: 'Smooth', date: '2026-02-03' },
    { id: 'DES002', orderId: 'ORD002', imageUrl: '', model: 'Galaxy S24 Ultra', caseType: 'Hard Case', finish: 'Textured', date: '2026-02-03' },
    { id: 'DES003', orderId: 'ORD003', imageUrl: '', model: 'iPhone 13', caseType: 'Silicone', finish: 'Smooth', date: '2026-02-02' },
    { id: 'DES004', orderId: 'ORD004', imageUrl: '', model: 'Redmi Note 13', caseType: 'Silicone', finish: 'Smooth', date: '2026-02-02' },
    { id: 'DES005', orderId: 'ORD005', imageUrl: '', model: 'iPhone 14 Pro Max', caseType: 'Hard Case', finish: 'Smooth', date: '2026-02-01' },
    { id: 'DES006', orderId: 'ORD006', imageUrl: '', model: 'iPhone 15', caseType: 'Silicone', finish: 'Textured', date: '2026-01-31' },
];

export default function DesignsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDesigns = mockDesigns.filter(design =>
        design.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        design.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        design.orderId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <ImageIcon className="w-8 h-8 text-mint" />
                        التصاميم المرفوعة
                    </h1>
                    <p className="text-gray-500 text-sm">إدارة وتحميل صور التصاميم الخاصة بالزبائن.</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="البحث بالمعرف أو الموديل..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pr-10 pl-4 py-2 rounded-xl border border-gray-100 focus:border-mint outline-none text-sm transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex bg-white border border-gray-100 rounded-xl p-1 shadow-sm">
                        <button className="p-1 px-2 rounded-lg bg-gray-50 text-mint">
                            <Grid className="w-4 h-4" />
                        </button>
                        <button className="p-1 px-2 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
                            <List className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDesigns.length > 0 ? (
                    filteredDesigns.map((design) => (
                        <DesignCard key={design.id} design={design} />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-gray-400">
                        لا توجد تصاميم تطابق بحثك.
                    </div>
                )}
            </div>
        </div>
    );
}
