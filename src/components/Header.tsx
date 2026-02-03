'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Smartphone, Palette, Camera, Info, MessageCircle } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'الرئيسية', icon: Smartphone },
        { href: '/customizer', label: 'صمّم كيسك', icon: Palette },
        { href: '/ar-preview', label: 'جرّب بالكاميرا', icon: Camera },
        { href: '/about', label: 'من نحن', icon: Info },
        { href: '/contact', label: 'اتصل بنا', icon: MessageCircle },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 gradient-mint rounded-xl flex items-center justify-center">
                            <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-mint to-green bg-clip-text text-transparent">
                            Caseify
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                            >
                                <link.icon className="w-4 h-4" />
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <Link href="/customizer" className="hidden md:flex btn-primary text-sm py-2 px-5">
                        صمّم الآن
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 glass-dark border-t border-white/10 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <nav className="flex flex-col p-4 gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                        >
                            <link.icon className="w-5 h-5" />
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/customizer"
                        onClick={() => setIsOpen(false)}
                        className="btn-primary mt-2 text-center"
                    >
                        صمّم الآن
                    </Link>
                </nav>
            </div>
        </header>
    );
}
