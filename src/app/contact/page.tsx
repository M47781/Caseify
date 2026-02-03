import { MessageCircle, Instagram, Facebook, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
    const contactMethods = [
        {
            icon: MessageCircle,
            title: 'واتساب',
            description: 'تواصل معنا مباشرة',
            link: 'https://wa.me/213000000000',
            linkText: 'راسلنا الآن',
            color: 'bg-green-500',
        },
        {
            icon: Instagram,
            title: 'انستغرام',
            description: '@caseify.dz',
            link: 'https://instagram.com/caseify.dz',
            linkText: 'تابعنا',
            color: 'bg-gradient-to-r from-purple-500 to-pink-500',
        },
        {
            icon: Facebook,
            title: 'فيسبوك',
            description: 'Caseify DZ',
            link: 'https://facebook.com/caseify.dz',
            linkText: 'تابعنا',
            color: 'bg-blue-600',
        },
    ];

    return (
        <div className="min-h-screen pt-20 pb-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 pt-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">اتصل بنا</h1>
                    <p className="text-gray-600 max-w-lg mx-auto">
                        عندك سؤال أو استفسار؟ تواصل معنا وراح نردوا عليك في أقرب وقت
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card group hover:scale-105 transition-transform"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center mb-4`}>
                                <method.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{method.title}</h3>
                            <p className="text-gray-500 mb-4">{method.description}</p>
                            <span className="text-mint font-medium group-hover:underline">
                                {method.linkText} ←
                            </span>
                        </a>
                    ))}
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center shrink-0">
                                <Clock className="w-6 h-6 text-mint" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">ساعات العمل</h3>
                                <p className="text-gray-600 text-sm">
                                    السبت - الخميس: 9:00 - 18:00
                                    <br />
                                    الجمعة: عطلة
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-mint" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">الموقع</h3>
                                <p className="text-gray-600 text-sm">
                                    الجزائر 🇩🇿
                                    <br />
                                    نوصل لكل الولايات
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Preview */}
                <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">أسئلة شائعة</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">كيفاش نطلب؟</h3>
                            <p className="text-gray-600">صمّم كيسك، أكمل معلوماتك، وراح نتواصلوا معاك عبر واتساب لتأكيد الطلب.</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">شحال يوخذ التوصيل؟</h3>
                            <p className="text-gray-600">التوصيل يكون خلال 3-7 أيام عمل حسب الولاية.</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-2">كيفاش ندفع؟</h3>
                            <p className="text-gray-600">الدفع عند الاستلام فقط - تدفع كي توصلك السلعة.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
