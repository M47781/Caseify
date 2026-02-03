'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CheckCircle, MessageCircle, Home, Sparkles } from 'lucide-react';

export default function ConfirmationPage() {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setShowConfetti(true);
        const timer = setTimeout(() => setShowConfetti(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen pt-20 pb-12 flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-mint/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green/20 rounded-full blur-3xl" />

            {/* Confetti Animation */}
            {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-bounce"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 50}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${1 + Math.random()}s`,
                            }}
                        >
                            <Sparkles className="w-6 h-6 text-mint" />
                        </div>
                    ))}
                </div>
            )}

            <div className="relative max-w-lg mx-auto px-4 text-center">
                {/* Success Icon */}
                <div className="w-24 h-24 gradient-mint rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                    <CheckCircle className="w-12 h-12 text-white" />
                </div>

                {/* Message */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    شكرا على طلبك 🙏
                </h1>

                <p className="text-lg text-gray-600 mb-8">
                    راح نتواصلوا معاك قريبا لتأكيد الطلب والتوصيل
                </p>

                {/* Order Number */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 inline-block">
                    <p className="text-sm text-gray-500 mb-1">رقم الطلب</p>
                    <p className="text-2xl font-bold text-mint">
                        #{Math.random().toString(36).substring(2, 8).toUpperCase()}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://wa.me/213000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        <MessageCircle className="w-5 h-5" />
                        تواصل عبر واتساب
                    </a>

                    <Link href="/" className="btn-secondary">
                        <Home className="w-5 h-5" />
                        العودة للرئيسية
                    </Link>
                </div>

                {/* Info */}
                <div className="mt-12 p-6 bg-mint/10 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-3">الخطوات القادمة:</h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                        <li>✓ سنتصل بك لتأكيد الطلب خلال 24 ساعة</li>
                        <li>✓ سيتم تحضير كيسك المخصص</li>
                        <li>✓ التوصيل خلال 3-7 أيام عمل</li>
                        <li>✓ الدفع عند الاستلام</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
