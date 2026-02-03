import Link from 'next/link';
import { Sparkles, Camera, Upload, Printer, Truck, MapPin, ArrowLeft } from 'lucide-react';

// Phone models data
const phoneModels = [
  { brand: 'iPhone', models: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 15 Pro'] },
  { brand: 'Samsung', models: ['Galaxy S21', 'Galaxy S22', 'Galaxy S23', 'Galaxy A52', 'Galaxy A53', 'Galaxy A54'] },
  { brand: 'Xiaomi', models: ['Redmi Note 11', 'Redmi Note 12', 'Redmi Note 13', 'Poco X5', 'Poco X6', 'Mi 13'] },
];

const features = [
  {
    icon: Sparkles,
    title: 'معاينة مباشرة',
    description: 'شوف تصميمك على الكيس في الوقت الحقيقي',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Upload,
    title: 'رفع صورتك',
    description: 'ارفع أي صورة أو شعار تحبو',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Camera,
    title: 'تجربة بالكاميرا',
    description: 'جرّب الكيس على هاتفك بتقنية AR',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Printer,
    title: 'طباعة عالية الجودة',
    description: 'طباعة احترافية تدوم طويلاً',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Truck,
    title: 'الدفع عند الاستلام',
    description: 'ادفع كي توصلك السلعة',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: MapPin,
    title: 'توصيل لكل الولايات',
    description: 'نوصل لـ 58 ولاية جزائرية',
    color: 'from-rose-500 to-pink-500',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-mint/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-right animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-mint/10 text-mint px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>جديد - تقنية الواقع المعزز</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                <span className="text-gray-900">صمّم كيس هاتفك…</span>
                <br />
                <span className="bg-gradient-to-r from-mint to-green bg-clip-text text-transparent">
                  وجرّبو قبل ما تطلبو
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Custom phone cases with live preview and AR camera try-on.
                <br />
                صمّم، شوف، وجرّب كيسك قبل ما تشريه!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/customizer" className="btn-primary text-lg">
                  صمّم الآن
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link href="/ar-preview" className="btn-secondary text-lg">
                  <Camera className="w-5 h-5" />
                  جرّب بالكاميرا (AR)
                </Link>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="phone-mockup w-72 animate-float">
                  <div className="phone-screen aspect-[9/19] flex items-center justify-center">
                    <div className="absolute inset-4 rounded-3xl overflow-hidden bg-gradient-to-br from-mint via-green to-mint-dark flex items-center justify-center">
                      <div className="text-center text-white">
                        <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <p className="text-xl font-bold">تصميمك هنا</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 gradient-mint rounded-2xl flex items-center justify-center animate-pulse-glow">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center shadow-xl">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">اكتشف المزيد</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-mint rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ليش تختار <span className="text-mint">Caseify</span>؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدملك تجربة فريدة لتصميم كيس هاتفك مع ميزات ما تلقاهاش في أي مكان آخر
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Models Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              الموديلات المدعومة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نوفرولك كيسات لأشهر موديلات الهواتف
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {phoneModels.map((brand, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 gradient-mint rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{brand.brand[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{brand.brand}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {brand.models.map((model, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-mint hover:text-white transition-colors cursor-pointer"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-mint">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            جاهز تصمّم كيسك الخاص؟
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            ابدأ الآن وصمّم كيس هاتفك بتصميم فريد يعبّر عن شخصيتك
          </p>
          <Link href="/customizer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
            ابدأ التصميم
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
