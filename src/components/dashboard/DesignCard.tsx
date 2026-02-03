'use client';

import { Download, Smartphone, Maximize2, Trash2 } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

// Mock types
interface DesignProps {
    id: string;
    orderId: string;
    imageUrl: string;
    model: string;
    caseType: string;
    finish: string;
    date: string;
}

export default function DesignCard({ design }: { design: DesignProps }) {
    return (
        <div className="card overflow-hidden group">
            {/* Image Preview */}
            <div className="relative aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full rounded-[20px] bg-white shadow-xl overflow-hidden relative border border-gray-100">
                        {/* Design on the case */}
                        <div className="absolute inset-2 rounded-[16px] bg-gradient-to-br from-mint/20 to-green/20 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-400">صورة التصميم</span>
                        </div>
                        {/* Camera cutout */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-gray-900 rounded-lg" />
                    </div>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform shadow-lg" title="توصيف">
                        <Maximize2 className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-mint hover:scale-110 transition-transform shadow-lg" title="تحميل">
                        <Download className="w-5 h-5" />
                    </button>
                </div>

                <div className="absolute bottom-4 right-4 left-4">
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 flex items-center justify-between shadow-sm">
                        <span className="text-[10px] font-bold text-gray-600">ID: {design.id}</span>
                        <span className="text-[10px] font-bold text-mint">{design.date}</span>
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-gray-400" />
                        <h4 className="text-sm font-bold text-gray-900">{design.model}</h4>
                    </div>
                    <span className="text-xs font-bold text-gray-400">طلب #{design.orderId}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-[10px] font-bold text-gray-600">
                        {design.caseType}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md text-[10px] font-bold text-gray-600">
                        {design.finish}
                    </span>
                </div>

                <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                    <button className="text-[10px] font-bold text-red-400 hover:text-red-500 flex items-center gap-1 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                        حذف
                    </button>
                    <button className="text-[10px] font-bold text-mint hover:underline">
                        تحميل التصميم (PNG)
                    </button>
                </div>
            </div>
        </div>
    );
}
