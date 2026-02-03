'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
    Upload, RotateCcw, ZoomIn, ZoomOut, Move, Trash2,
    ShoppingCart, Smartphone, Check, ChevronDown
} from 'lucide-react';
import { phoneModels, getModelsByBrand } from '@/lib/phoneModels';
import { formatPrice } from '@/lib/utils';

// Pricing configuration
const pricing = {
    base: 2500,
    caseType: {
        silicone: 0,
        hardCase: 500,
    },
    finish: {
        smooth: 0,
        textured: 300,
    },
};

export default function CustomizerPage() {
    const [selectedModel, setSelectedModel] = useState(phoneModels[0]);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [caseType, setCaseType] = useState<'silicone' | 'hardCase'>('silicone');
    const [finish, setFinish] = useState<'smooth' | 'textured'>('smooth');
    const [imageTransform, setImageTransform] = useState({ x: 0, y: 0, scale: 1, rotation: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [showModelDropdown, setShowModelDropdown] = useState(false);

    const canvasRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const brandModels = getModelsByBrand();

    // Calculate total price
    const totalPrice = pricing.base + pricing.caseType[caseType] + pricing.finish[finish];

    // Handle file upload
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setUploadedImage(event.target?.result as string);
                setImageTransform({ x: 0, y: 0, scale: 1, rotation: 0 });
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle drag events
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!uploadedImage) return;
        setIsDragging(true);
        setDragStart({ x: e.clientX - imageTransform.x, y: e.clientY - imageTransform.y });
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        setImageTransform(prev => ({
            ...prev,
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        }));
    }, [isDragging, dragStart]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    // Handle touch events for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!uploadedImage) return;
        const touch = e.touches[0];
        setIsDragging(true);
        setDragStart({ x: touch.clientX - imageTransform.x, y: touch.clientY - imageTransform.y });
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        setImageTransform(prev => ({
            ...prev,
            x: touch.clientX - dragStart.x,
            y: touch.clientY - dragStart.y,
        }));
    };

    // Zoom controls
    const handleZoomIn = () => {
        setImageTransform(prev => ({ ...prev, scale: Math.min(prev.scale + 0.1, 3) }));
    };

    const handleZoomOut = () => {
        setImageTransform(prev => ({ ...prev, scale: Math.max(prev.scale - 0.1, 0.3) }));
    };

    // Rotation
    const handleRotate = () => {
        setImageTransform(prev => ({ ...prev, rotation: prev.rotation + 90 }));
    };

    // Reset
    const handleReset = () => {
        setImageTransform({ x: 0, y: 0, scale: 1, rotation: 0 });
    };

    // Clear image
    const handleClear = () => {
        setUploadedImage(null);
        setImageTransform({ x: 0, y: 0, scale: 1, rotation: 0 });
    };

    // Proceed to order
    const handleOrder = () => {
        const orderData = {
            model: selectedModel.name,
            caseType: caseType === 'silicone' ? 'سيليكون' : 'هارد كيس',
            finish: finish === 'smooth' ? 'ناعم' : 'محبب',
            price: totalPrice,
            hasDesign: !!uploadedImage,
        };

        // Store in session storage for order page
        sessionStorage.setItem('caseifyOrder', JSON.stringify(orderData));

        // Navigate to order page
        window.location.href = '/order';
    };

    return (
        <div className="min-h-screen pt-20 pb-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        صمّم كيسك الخاص
                    </h1>
                    <p className="text-gray-600">
                        اختار موديل هاتفك، ارفع صورتك، وشوف النتيجة في الوقت الحقيقي
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Preview Panel */}
                    <div className="order-1 lg:order-2">
                        <div className="sticky top-24">
                            <div className="bg-white rounded-3xl p-8 shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">معاينة مباشرة</h3>

                                {/* Phone Case Mockup */}
                                <div className="flex justify-center">
                                    <div
                                        ref={canvasRef}
                                        className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-[40px] overflow-hidden cursor-move"
                                        style={{
                                            width: selectedModel.dimensions.width * 1.5,
                                            height: selectedModel.dimensions.height * 1.5,
                                        }}
                                        onMouseDown={handleMouseDown}
                                        onTouchStart={handleTouchStart}
                                        onTouchMove={handleTouchMove}
                                        onTouchEnd={() => setIsDragging(false)}
                                    >
                                        {/* Case Background */}
                                        <div
                                            className={`absolute inset-2 rounded-[35px] ${caseType === 'hardCase'
                                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                                                    : 'bg-gradient-to-br from-gray-300 to-gray-400'
                                                } ${finish === 'textured' ? 'opacity-90' : ''}`}
                                        />

                                        {/* Safe Print Area */}
                                        <div className="absolute inset-6 print-area flex items-center justify-center">
                                            {uploadedImage ? (
                                                <div
                                                    className="w-full h-full flex items-center justify-center overflow-hidden"
                                                >
                                                    <img
                                                        src={uploadedImage}
                                                        alt="Your design"
                                                        className="max-w-full max-h-full object-contain select-none pointer-events-none"
                                                        style={{
                                                            transform: `translate(${imageTransform.x}px, ${imageTransform.y}px) scale(${imageTransform.scale}) rotate(${imageTransform.rotation}deg)`,
                                                            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                                                        }}
                                                        draggable={false}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="text-center text-gray-400">
                                                    <Upload className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                                    <p className="text-sm">ارفع صورتك هنا</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Camera Cutout */}
                                        <div className="absolute top-4 right-4 w-16 h-16 bg-gray-900 rounded-2xl opacity-50" />
                                    </div>
                                </div>

                                {/* Image Controls */}
                                {uploadedImage && (
                                    <div className="flex justify-center gap-2 mt-6">
                                        <button onClick={handleZoomIn} className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors" title="تكبير">
                                            <ZoomIn className="w-5 h-5 text-gray-700" />
                                        </button>
                                        <button onClick={handleZoomOut} className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors" title="تصغير">
                                            <ZoomOut className="w-5 h-5 text-gray-700" />
                                        </button>
                                        <button onClick={handleRotate} className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors" title="تدوير">
                                            <RotateCcw className="w-5 h-5 text-gray-700" />
                                        </button>
                                        <button onClick={handleReset} className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors" title="إعادة تعيين">
                                            <Move className="w-5 h-5 text-gray-700" />
                                        </button>
                                        <button onClick={handleClear} className="p-3 rounded-xl bg-red-100 hover:bg-red-200 transition-colors" title="حذف">
                                            <Trash2 className="w-5 h-5 text-red-600" />
                                        </button>
                                    </div>
                                )}

                                <p className="text-center text-xs text-gray-400 mt-4">
                                    اسحب الصورة لتحريكها داخل منطقة الطباعة
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Controls Panel */}
                    <div className="order-2 lg:order-1 space-y-6">
                        {/* Phone Model Selector */}
                        <div className="bg-white rounded-3xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Smartphone className="w-5 h-5 text-mint" />
                                اختار موديل هاتفك
                            </h3>

                            <div className="relative">
                                <button
                                    onClick={() => setShowModelDropdown(!showModelDropdown)}
                                    className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-mint transition-colors flex justify-between items-center"
                                >
                                    <span className="font-medium">{selectedModel.name}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showModelDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showModelDropdown && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-10 max-h-80 overflow-y-auto">
                                        {Object.entries(brandModels).map(([brand, models]) => (
                                            <div key={brand}>
                                                <div className="px-4 py-2 bg-gray-50 text-sm font-bold text-gray-500">{brand}</div>
                                                {models.map((model) => (
                                                    <button
                                                        key={model.id}
                                                        onClick={() => {
                                                            setSelectedModel(model);
                                                            setShowModelDropdown(false);
                                                        }}
                                                        className={`w-full px-4 py-3 text-right hover:bg-mint/10 transition-colors flex items-center justify-between ${selectedModel.id === model.id ? 'bg-mint/10 text-mint' : ''
                                                            }`}
                                                    >
                                                        {model.name}
                                                        {selectedModel.id === model.id && <Check className="w-4 h-4" />}
                                                    </button>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Image Upload */}
                        <div className="bg-white rounded-3xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Upload className="w-5 h-5 text-mint" />
                                ارفع صورتك
                            </h3>

                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileUpload}
                                accept="image/png,image/jpeg,image/jpg,image/webp"
                                className="hidden"
                            />

                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full p-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-mint hover:bg-mint/5 transition-all group"
                            >
                                <Upload className="w-10 h-10 mx-auto mb-3 text-gray-400 group-hover:text-mint transition-colors" />
                                <p className="text-gray-600 group-hover:text-mint transition-colors">
                                    اضغط لرفع صورة
                                </p>
                                <p className="text-xs text-gray-400 mt-2">PNG, JPG, WEBP</p>
                            </button>
                        </div>

                        {/* Case Type */}
                        <div className="bg-white rounded-3xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">نوع الكيس</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setCaseType('silicone')}
                                    className={`p-4 rounded-xl border-2 transition-all ${caseType === 'silicone'
                                            ? 'border-mint bg-mint/10'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${caseType === 'silicone' ? 'text-mint' : 'text-gray-900'}`}>
                                            سيليكون
                                        </div>
                                        <div className="text-sm text-gray-500">ناعم ومرن</div>
                                    </div>
                                </button>

                                <button
                                    onClick={() => setCaseType('hardCase')}
                                    className={`p-4 rounded-xl border-2 transition-all ${caseType === 'hardCase'
                                            ? 'border-mint bg-mint/10'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${caseType === 'hardCase' ? 'text-mint' : 'text-gray-900'}`}>
                                            هارد كيس
                                        </div>
                                        <div className="text-sm text-gray-500">صلب ومتين +{formatPrice(500)}</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Finish */}
                        <div className="bg-white rounded-3xl p-6 shadow-lg">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">التشطيب</h3>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setFinish('smooth')}
                                    className={`p-4 rounded-xl border-2 transition-all ${finish === 'smooth'
                                            ? 'border-mint bg-mint/10'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${finish === 'smooth' ? 'text-mint' : 'text-gray-900'}`}>
                                            ناعم
                                        </div>
                                        <div className="text-sm text-gray-500">Smooth</div>
                                    </div>
                                </button>

                                <button
                                    onClick={() => setFinish('textured')}
                                    className={`p-4 rounded-xl border-2 transition-all ${finish === 'textured'
                                            ? 'border-mint bg-mint/10'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${finish === 'textured' ? 'text-mint' : 'text-gray-900'}`}>
                                            محبب
                                        </div>
                                        <div className="text-sm text-gray-500">Textured +{formatPrice(300)}</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Price & Order */}
                        <div className="bg-gradient-to-r from-mint to-green rounded-3xl p-6 text-white">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg opacity-90">السعر الإجمالي</span>
                                <span className="text-3xl font-bold">{formatPrice(totalPrice)}</span>
                            </div>

                            <button
                                onClick={handleOrder}
                                className="w-full bg-white text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                اطلب الآن
                            </button>

                            <p className="text-center text-sm opacity-75 mt-3">
                                الدفع عند الاستلام • توصيل لكل الولايات
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
