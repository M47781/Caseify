'use client';

import { useState, useEffect } from 'react';
import { Shield, Lock, ArrowLeft, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('admin_token', data.token);
                localStorage.setItem('caseify_admin_auth', 'true');
                onLogin();
            } else {
                setError(data.message || 'فشل تسجيل الدخول');
            }
        } catch (err) {
            setError('حدث خطأ في الاتصال');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 gradient-mint rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-mint/20">
                        <Lock className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">لوحة التحكم</h1>
                    <p className="text-gray-400">يرجى إدخال كلمة المرور للوصول</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-[2rem] border border-gray-700 shadow-2xl space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 mr-1">البريد الإلكتروني</label>
                        <div className="relative">
                            <Shield className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@example.com"
                                className={`w-full bg-gray-900 border-2 py-4 pr-12 pl-4 rounded-2xl text-white outline-none transition-all ${error ? 'border-red-500 animate-shake' : 'border-gray-700 focus:border-mint'
                                    }`}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 mr-1">كلمة المرور</label>
                        <div className="relative">
                            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className={`w-full bg-gray-900 border-2 py-4 pr-12 pl-4 rounded-2xl text-white outline-none transition-all ${error ? 'border-red-500 animate-shake' : 'border-gray-700 focus:border-mint'
                                    }`}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mt-3 font-bold text-center">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-mint hover:bg-green-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-mint/20 flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'تسجيل الدخول'}
                    </button>

                    <Link href="/" className="flex items-center justify-center gap-2 text-gray-500 hover:text-white transition-colors text-sm pt-4">
                        <ArrowLeft className="w-4 h-4" />
                        العودة للمتجر
                    </Link>
                </form>
            </div>
        </div>
    );
}
