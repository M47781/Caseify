// Algerian wilayas (states) list
export const algerianWilayas = [
    'أدرار', 'الشلف', 'الأغواط', 'أم البواقي', 'باتنة', 'بجاية', 'بسكرة', 'بشار',
    'البليدة', 'البويرة', 'تمنراست', 'تبسة', 'تلمسان', 'تيارت', 'تيزي وزو', 'الجزائر',
    'الجلفة', 'جيجل', 'سطيف', 'سعيدة', 'سكيكدة', 'سيدي بلعباس', 'عنابة', 'قالمة',
    'قسنطينة', 'المدية', 'مستغانم', 'المسيلة', 'معسكر', 'ورقلة', 'وهران', 'البيض',
    'إليزي', 'برج بوعريريج', 'بومرداس', 'الطارف', 'تندوف', 'تيسمسيلت', 'الوادي', 'خنشلة',
    'سوق أهراس', 'تيبازة', 'ميلة', 'عين الدفلى', 'النعامة', 'عين تموشنت', 'غرداية', 'غليزان',
    'تيميمون', 'برج باجي مختار', 'أولاد جلال', 'بني عباس', 'عين صالح', 'عين قزام', 'توقرت', 'جانت', 'المغير', 'المنيعة'
];

// Utility to format price in DZD
export function formatPrice(price: number): string {
    return `${price.toLocaleString('ar-DZ')} دج`;
}

// Utility for generating WhatsApp message
export function generateWhatsAppLink(orderData: {
    name: string;
    phone: string;
    wilaya: string;
    address: string;
    phoneModel: string;
    caseType: string;
    finish: string;
    price: number;
    designUrl?: string;
}): string {
    const message = `🛒 طلب جديد من Caseify

👤 الاسم: ${orderData.name}
📞 الهاتف: ${orderData.phone}
📍 الولاية: ${orderData.wilaya}
🏠 العنوان: ${orderData.address}

📱 موديل الهاتف: ${orderData.phoneModel}
📦 نوع الكيس: ${orderData.caseType}
✨ التشطيب: ${orderData.finish}
💰 السعر: ${formatPrice(orderData.price)}

${orderData.designUrl ? `🎨 التصميم: ${orderData.designUrl}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/213000000000?text=${encodedMessage}`;
}

// Utility for class names
export function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}
