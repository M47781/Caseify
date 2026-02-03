import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Caseify - صمّم كيس هاتفك",
  description: "صمّم كيس هاتفك الخاص بتصميم فريد. معاينة مباشرة وتجربة بتقنية الواقع المعزز قبل الطلب.",
  keywords: "phone case, custom case, Algeria, كيس هاتف, تصميم, الجزائر",
  openGraph: {
    title: "Caseify - صمّم كيس هاتفك",
    description: "صمّم كيس هاتفك الخاص بتصميم فريد",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
