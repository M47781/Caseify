'use client';

import { useState } from 'react';
import { Tag, Save, Plus, Trash2, DollarSign } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function PricingPage() {
    const [basePrice, setBasePrice] = useState(2500);
    const [caseMarkups, setCaseMarkups] = useState([
        { id: 'silicone', name: 'سليكون (Silicone)', price: 0 },
        { id: 'hard', name: 'كيس صلب (Hard Case)', price: 500 },
    ]);
    const [finishMarkups, setFinishMarkups] = useState([
        { id: 'smooth', name: 'أملس (Smooth)', price: 0 },
        { id: 'textured', name: 'خشن (Textured)', price: 300 },
    ]);

    const handleSave = () => {
        alert('تم حفظ تغييرات الأسعار بنجاح! (محاكاة)');
    };

    return (
        <div className="space-y-8 max-w-4xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Tag className="w-8 h-8 text-mint" />
                        إدارة الأسعار
                    </h1>
                    <p className="text-gray-500 text-sm">تحكم في السعر الأساسي والإضافات الخاصة بأنواع الأغطية.</p>
                </div>
                <button
                    onClick={handleSave}
                    className="btn-primary flex items-center gap-2"
                >
                    <Save className="w-5 h-5" />
                    حفظ التغييرات
                </button>
            </div>

            <div className="grid gap-8">
                {/* Base Price Card */}
                <div className="card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">السعر الأساسي</h3>
                    </div>
                    <div className="flex items-center gap-4 max-w-xs">
                        <input
                            type="number"
                            value={basePrice}
                            onChange={(e) => setBasePrice(Number(e.target.value))}
                            className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-mint outline-none font-bold text-xl"
                        />
                        <span className="text-gray-500 font-bold">دج</span>
                    </div>
                    <p className="mt-3 text-xs text-gray-400">هذا هو السعر الذي يبدأ به أي طلب قبل الإضافات.</p>
                </div>

                {/* Markups Sections */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Case Type Markups */}
                    <div className="card">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900">إضافات نوع الكيس</h3>
                            <button className="text-mint hover:bg-mint/5 p-2 rounded-lg transition-colors">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {caseMarkups.map((item, index) => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        value={item.name}
                                        className="flex-1 px-3 py-2 rounded-lg border border-gray-100 text-sm bg-gray-50 font-medium"
                                        readOnly
                                    />
                                    <div className="flex items-center gap-2 w-28">
                                        <input
                                            type="number"
                                            value={item.price}
                                            className="w-full px-2 py-2 rounded-lg border border-gray-100 text-sm font-bold text-center focus:border-mint outline-none"
                                        />
                                        <span className="text-[10px] font-bold text-gray-400">دج</span>
                                    </div>
                                    <button className="p-2 text-red-300 hover:text-red-500 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Finish Markups */}
                    <div className="card">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900">إضافات اللمسة (Finish)</h3>
                            <button className="text-mint hover:bg-mint/5 p-2 rounded-lg transition-colors">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {finishMarkups.map((item, index) => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        value={item.name}
                                        className="flex-1 px-3 py-2 rounded-lg border border-gray-100 text-sm bg-gray-50 font-medium"
                                        readOnly
                                    />
                                    <div className="flex items-center gap-2 w-28">
                                        <input
                                            type="number"
                                            value={item.price}
                                            className="w-full px-2 py-2 rounded-lg border border-gray-100 text-sm font-bold text-center focus:border-mint outline-none"
                                        />
                                        <span className="text-[10px] font-bold text-gray-400">دج</span>
                                    </div>
                                    <button className="p-2 text-red-300 hover:text-red-500 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Information Alert */}
                <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800 leading-relaxed">
                        <strong>ملاحظة:</strong> هذه الأسعار تظهر مباشرة للزبائن في صفحة المصمم (Customizer). تأكد من تحديثها بعناية حسب تكاليف الطباعة والشحن.
                    </p>
                </div>
            </div>
        </div>
    );
}
