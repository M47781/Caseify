'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Phone, MapPin, Home, ShoppingCart, Loader2, CheckCircle } from 'lucide-react';
import { algerianWilayas, formatPrice, generateWhatsAppLink } from '@/lib/utils';

interface OrderData {
    model: string;
    caseType: string;
    finish: string;
    price: number;
    hasDesign: boolean;
}

export default function OrderPage() {
    const [orderData, setOrderData] = useState<OrderData | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        wilaya: '',
        address: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        // Get order data from session storage
        const stored = sessionStorage.getItem('caseifyOrder');
        if (stored) {
            setOrderData(JSON.parse(stored));
        }
    }, []);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'الرجاء إدخال الاسم الكامل';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'الرجاء إدخال رقم الهاتف';
        } else if (!/^(0)(5|6|7)[0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'الرجاء إدخال رقم هاتف جزائري صحيح';
        }

        if (!formData.wilaya) {
            newErrors.wilaya = 'الرجاء اختيار الولاية';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'الرجاء إدخال العنوان الكامل';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm() || !orderData) return;

        setIsSubmitting(true);

        // Generate WhatsApp link
        const whatsappLink = generateWhatsAppLink({
            name: formData.name,
            phone: formData.phone,
            wilaya: formData.wilaya,
            address: formData.address,
            phoneModel: orderData.model,
            caseType: orderData.caseType,
            finish: orderData.finish,
            price: orderData.price,
        });

        // Save order info for confirmation page
        sessionStorage.setItem('caseifyOrderComplete', JSON.stringify({
            ...formData,
            ...orderData,
        }));

        // Small delay for UX
        await new Promise(resolve => setTimeout(resolve, 500));

        // Open WhatsApp
        window.open(whatsappLink, '_blank');

        // Redirect to confirmation
        window.location.href = '/confirmation';
    };

    if (!orderData) {
        return (
            <div className="min-h-screen pt-20 pb-12 bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">لا يوجد طلب</h2>
                    <p className="text-gray-600 mb-6">ابدأ بتصميم كيسك أولاً</p>
                    <Link href="/customizer" className="btn-primary">
                        صمّم كيسك الآن
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 pb-12 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">أكمل طلبك</h1>
                    <p className="text-gray-600">أدخل معلوماتك وسنتواصل معاك عبر واتساب</p>
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">ملخص الطلب</h3>

                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">موديل الهاتف</span>
                            <span className="font-medium">{orderData.model}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">نوع الكيس</span>
                            <span className="font-medium">{orderData.caseType}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">التشطيب</span>
                            <span className="font-medium">{orderData.finish}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">تصميم مخصص</span>
                            <span className="font-medium">{orderData.hasDesign ? '✓ نعم' : '✗ لا'}</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                            <span className="text-lg font-bold">المجموع</span>
                            <span className="text-lg font-bold text-mint">{formatPrice(orderData.price)}</span>
                        </div>
                    </div>
                </div>

                {/* Order Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">معلومات التوصيل</h3>

                    <div className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <User className="w-4 h-4 inline ml-1" />
                                الاسم الكامل
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-mint'
                                    } outline-none`}
                                placeholder="محمد أمين"
                            />
                            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Phone className="w-4 h-4 inline ml-1" />
                                رقم الهاتف
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-mint'
                                    } outline-none`}
                                placeholder="0555 00 00 00"
                                dir="ltr"
                            />
                            {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                        </div>

                        {/* Wilaya */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <MapPin className="w-4 h-4 inline ml-1" />
                                الولاية
                            </label>
                            <select
                                value={formData.wilaya}
                                onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${errors.wilaya ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-mint'
                                    } outline-none appearance-none bg-white`}
                            >
                                <option value="">اختار الولاية</option>
                                {algerianWilayas.map((wilaya, index) => (
                                    <option key={index} value={wilaya}>{wilaya}</option>
                                ))}
                            </select>
                            {errors.wilaya && <p className="text-sm text-red-500 mt-1">{errors.wilaya}</p>}
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Home className="w-4 h-4 inline ml-1" />
                                العنوان الكامل
                            </label>
                            <textarea
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                rows={3}
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${errors.address ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-mint'
                                    } outline-none resize-none`}
                                placeholder="الحي، الشارع، رقم العمارة..."
                            />
                            {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-6 btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                جاري الإرسال...
                            </>
                        ) : (
                            <>
                                <CheckCircle className="w-5 h-5" />
                                تأكيد الطلب
                            </>
                        )}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        💵 الدفع عند الاستلام فقط
                    </p>
                </form>
            </div>
        </div>
    );
}
