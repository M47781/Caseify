import { Smartphone, Palette, Camera, Truck, Shield, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    const values = [
        {
            icon: Palette,
            title: 'تصميم فريد',
            description: 'صمّم كيس هاتفك بأسلوبك الخاص',
        },
        {
            icon: Camera,
            title: 'تقنية AR',
            description: 'جرّب الكيس قبل الشراء بالواقع المعزز',
        },
        {
            icon: Shield,
            title: 'جودة عالية',
            description: 'طباعة احترافية تدوم طويلاً',
        },
        {
            icon: Truck,
            title: 'توصيل لكل الولايات',
            description: 'نوصل لـ 58 ولاية جزائرية',
        },
    ];

    return (
        <div className="min-h-screen pt-20 pb-12">
            {/* Hero */}
            <section className="py-16 gradient-hero">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-20 h-20 gradient-mint rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Smartphone className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        من نحن؟
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Caseify هي منصة جزائرية حديثة لتصميم كيسات الهواتف المخصصة
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">قصتنا</h2>
                        <div className="prose prose-lg text-gray-600 space-y-4">
                            <p>
                                <strong>Caseify</strong> is a modern Algerian platform for custom phone case design.
                                Users can design, preview, and try cases using augmented reality before ordering.
                            </p>
                            <p>
                                بدأنا Caseify برؤية بسيطة: نخلي كل واحد يعبّر عن شخصيته من خلال كيس هاتفه.
                                مع تقنية المعاينة المباشرة والواقع المعزز، نوفرولك تجربة فريدة
                                تخليك تشوف تصميمك قبل ما تطلبو.
                            </p>
                            <p>
                                نفتخر بكوننا منصة جزائرية 100%، نوفر منتجات عالية الجودة مع توصيل لكل ولايات الوطن.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        ليش تختارنا؟
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="card text-center">
                                <div className="w-14 h-14 gradient-mint rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-mint to-green rounded-3xl p-8 md:p-12 text-white">
                        <Heart className="w-12 h-12 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-4">جاهز تجرّب؟</h2>
                        <p className="opacity-90 mb-6">ابدأ الآن وصمّم كيس هاتفك الفريد</p>
                        <Link
                            href="/customizer"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            ابدأ التصميم
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
