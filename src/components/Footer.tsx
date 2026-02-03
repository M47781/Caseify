import Link from 'next/link';
import { Smartphone, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 gradient-mint rounded-xl flex items-center justify-center">
                                <Smartphone className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-mint to-green bg-clip-text text-transparent">
                                Caseify
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            صمّم كيس هاتفك الخاص بتصميم فريد. معاينة مباشرة وتجربة بتقنية الواقع المعزز قبل الطلب. نوصل لكل ولايات الجزائر.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://wa.me/213000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/caseify.dz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com/caseify.dz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/customizer" className="text-gray-400 hover:text-mint transition-colors">
                                    صمّم كيسك
                                </Link>
                            </li>
                            <li>
                                <Link href="/ar-preview" className="text-gray-400 hover:text-mint transition-colors">
                                    جرّب بالكاميرا
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-mint transition-colors">
                                    من نحن
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-mint transition-colors">
                                    اتصل بنا
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">الدعم</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-mint transition-colors">
                                    سياسة الخصوصية
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-mint transition-colors">
                                    الشروط والأحكام
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-400 hover:text-mint transition-colors">
                                    الأسئلة الشائعة
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        © 2026 Caseify. جميع الحقوق محفوظة.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        صُنع بـ <Heart className="w-4 h-4 text-red-500 fill-current" /> في الجزائر 🇩🇿
                    </p>
                </div>
            </div>
        </footer>
    );
}
