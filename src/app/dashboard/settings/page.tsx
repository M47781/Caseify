'use client';

import { useState } from 'react';
import { Settings, Save, Smartphone, MessageCircle, Eye, Palette } from 'lucide-react';

export default function SettingsPage() {
    const [whatsapp, setWhatsapp] = useState('213555123456');
    const [messageTemplate, setMessageTemplate] = useState('سلام، حبيت نطلب كيس هاتف لموديل {model} بتصممي الخاص. السعر: {price}');
    const [arEnabled, setArEnabled] = useState(true);
    const [brandName, setBrandName] = useState('Caseify');

    const handleSave = () => {
        alert('تم حفظ الإعدادات بنجاح! (محاكاة)');
    };

    return (
        <div className="space-y-8 max-w-4xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Settings className="w-8 h-8 text-mint" />
                        إعدادات المتجر
                    </h1>
                    <p className="text-gray-500 text-sm">تحكم في التفضيلات العامة لمتجر Caseify.</p>
                </div>
                <button
                    onClick={handleSave}
                    className="btn-primary flex items-center gap-2"
                >
                    <Save className="w-5 h-5" />
                    حفظ الإعدادات
                </button>
            </div>

            <div className="grid gap-8">
                {/* Branding Section */}
                <div className="card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500">
                            <Palette className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">العلامة التجارية</h3>
                    </div>
                    <div className="space-y-4 max-w-md">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 text-right">اسم البراند</label>
                            <input
                                type="text"
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-mint outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* WhatsApp Integration */}
                <div className="card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-500">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">تكامل واتساب (WhatsApp)</h3>
                    </div>
                    <div className="space-y-6 max-w-2xl">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 text-right">رقم الواتساب (بدون +)</label>
                            <input
                                type="text"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                                placeholder="2135XXXXXXXX"
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-mint outline-none"
                                dir="ltr"
                            />
                            <p className="mt-1 text-xs text-gray-400">ستصلك الطلبات مباشرة على هذا الرقم.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 text-right">رسالة الطلب التلقائية</label>
                            <textarea
                                value={messageTemplate}
                                onChange={(e) => setMessageTemplate(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-mint outline-none resize-none"
                            />
                            <p className="mt-1 text-[10px] text-gray-400">استخدم المتغيرات: {'{model}'}, {'{price}'}, {'{caseType}'}</p>
                        </div>
                    </div>
                </div>

                {/* Features Toggle */}
                <div className="card">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
                            <Eye className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">إعدادات الميزات</h3>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                <Smartphone className="w-6 h-6 text-mint" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">ميزة الـ AR (الواقع المعزز)</p>
                                <p className="text-xs text-gray-500">تفعيل أو تعطيل تجربة الكاميرا للزبائن.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setArEnabled(!arEnabled)}
                            className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${arEnabled ? 'bg-mint' : 'bg-gray-300'}`}
                        >
                            <div className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ${arEnabled ? 'translate-x-6' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
