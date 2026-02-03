'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Camera, Smartphone, RefreshCw, X, AlertCircle, Sparkles } from 'lucide-react';

export default function ARPreviewPage() {
    const [cameraActive, setCameraActive] = useState(false);
    const [cameraError, setCameraError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [casePosition, setCasePosition] = useState({ x: 50, y: 50, scale: 1 });
    const [selectedDesign, setSelectedDesign] = useState(0);
    const [stream, setStream] = useState<MediaStream | null>(null);

    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const designs = [
        { id: 0, gradient: 'from-mint to-green', label: 'أخضر' },
        { id: 1, gradient: 'from-purple-500 to-pink-500', label: 'بنفسجي' },
        { id: 2, gradient: 'from-orange-500 to-red-500', label: 'برتقالي' },
        { id: 3, gradient: 'from-blue-500 to-cyan-500', label: 'أزرق' },
    ];

    const startCamera = async () => {
        setIsLoading(true);
        setCameraError(null);

        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment',
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                },
            });

            setStream(mediaStream);
            setCameraActive(true);
        } catch (error) {
            console.error('Camera error:', error);
            setCameraError('لم نتمكن من الوصول للكاميرا. تأكد من إعطاء الإذن واستخدام متصفح يدعم الكاميرا.');
        } finally {
            setIsLoading(false);
        }
    };

    // Attach stream to video element when it becomes available
    useEffect(() => {
        if (cameraActive && stream && videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play().catch(err => {
                console.error("Error playing video:", err);
            });
        }
    }, [cameraActive, stream]);

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
        setCameraActive(false);
    };

    // Handle touch/drag for positioning the case
    const handleContainerTouch = (e: React.TouchEvent | React.MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? (e as React.TouchEvent).touches[0].clientY : (e as React.MouseEvent).clientY;

        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;

        setCasePosition(prev => ({ ...prev, x, y }));
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [stream]);

    // Check if mobile
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }, []);

    if (!isMobile) {
        return (
            <div className="min-h-screen pt-20 pb-12 flex items-center justify-center bg-gray-50">
                <div className="max-w-lg mx-auto px-4 text-center">
                    <div className="w-20 h-20 gradient-mint rounded-full flex items-center justify-center mx-auto mb-6">
                        <Smartphone className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        هذه الميزة متاحة على الموبايل فقط
                    </h1>
                    <p className="text-gray-600 mb-8">
                        افتح هذه الصفحة من هاتفك لتجربة الكيس بتقنية الواقع المعزز
                    </p>
                    <Link href="/customizer" className="btn-primary">
                        جرّب المصمم العادي
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-16 bg-black relative overflow-hidden">
            {/* Header */}
            <div className="absolute top-16 left-0 right-0 z-20 p-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                        <X className="w-5 h-5 text-white" />
                    </Link>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setCasePosition(prev => ({ ...prev, scale: Math.min(prev.scale + 0.1, 2) }))}
                            className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-xl"
                        >
                            +
                        </button>
                        <button
                            onClick={() => setCasePosition(prev => ({ ...prev, scale: Math.max(prev.scale - 0.1, 0.5) }))}
                            className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white text-xl"
                        >
                            -
                        </button>
                    </div>
                </div>
            </div>

            {/* Camera View */}
            <div
                ref={containerRef}
                className="relative w-full h-screen"
                onTouchMove={handleContainerTouch}
                onClick={handleContainerTouch}
            >
                {cameraActive ? (
                    <>
                        {/* Video Feed */}
                        <video
                            ref={videoRef}
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            playsInline
                            muted
                        />

                        {/* Phone Case Overlay */}
                        <div
                            className="absolute transition-all duration-100 pointer-events-none"
                            style={{
                                left: `${casePosition.x}%`,
                                top: `${casePosition.y}%`,
                                transform: `translate(-50%, -50%) scale(${casePosition.scale})`,
                            }}
                        >
                            <div className="w-40 h-80 rounded-[30px] bg-black/30 backdrop-blur border-4 border-gray-800 overflow-hidden relative">
                                {/* Case Design */}
                                <div className={`absolute inset-2 rounded-[24px] bg-gradient-to-br ${designs[selectedDesign].gradient} flex items-center justify-center`}>
                                    <div className="text-center text-white">
                                        <Sparkles className="w-10 h-10 mx-auto mb-2 opacity-80" />
                                        <p className="text-sm font-medium opacity-80">تصميمك</p>
                                    </div>
                                </div>

                                {/* Camera Cutout */}
                                <div className="absolute top-2 right-2 w-12 h-12 bg-black rounded-xl" />
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="absolute bottom-32 left-0 right-0 text-center">
                            <div className="inline-block bg-black/50 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
                                اضغط على الشاشة لتحريك الكيس
                            </div>
                        </div>
                    </>
                ) : (
                    /* Start Camera Screen */
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                        <div className="text-center px-4">
                            {cameraError ? (
                                <>
                                    <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <AlertCircle className="w-10 h-10 text-red-500" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-3">{cameraError}</h2>
                                    <button
                                        onClick={startCamera}
                                        className="btn-primary mt-4"
                                    >
                                        <RefreshCw className="w-5 h-5" />
                                        إعادة المحاولة
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="w-24 h-24 gradient-mint rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                                        <Camera className="w-12 h-12 text-white" />
                                    </div>
                                    <h1 className="text-2xl font-bold text-white mb-3">
                                        جرّب الكيس بالكاميرا
                                    </h1>
                                    <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                                        وجّه الكاميرا لهاتفك وشوف الكيس مركّب عليه
                                    </p>
                                    <button
                                        onClick={startCamera}
                                        disabled={isLoading}
                                        className="btn-primary text-lg"
                                    >
                                        {isLoading ? (
                                            <>
                                                <RefreshCw className="w-5 h-5 animate-spin" />
                                                جاري التحميل...
                                            </>
                                        ) : (
                                            <>
                                                <Camera className="w-5 h-5" />
                                                افتح الكاميرا
                                            </>
                                        )}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Controls */}
            {cameraActive && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    {/* Design Selector */}
                    <div className="flex justify-center gap-3 mb-6">
                        {designs.map((design) => (
                            <button
                                key={design.id}
                                onClick={() => setSelectedDesign(design.id)}
                                className={`w-12 h-12 rounded-full bg-gradient-to-br ${design.gradient} border-2 transition-all ${selectedDesign === design.id ? 'border-white scale-110' : 'border-transparent'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                        <button
                            onClick={stopCamera}
                            className="flex-1 py-3 rounded-full bg-white/20 text-white font-medium"
                        >
                            إغلاق
                        </button>
                        <Link
                            href="/customizer"
                            className="flex-1 py-3 rounded-full gradient-mint text-white font-medium text-center"
                        >
                            صمّم كيسك
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
