import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50 border-t border-gray-100">
            <Sidebar />
            <main className="flex-1 min-w-0 flex flex-col">
                <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-10">
                    <h2 className="text-xl font-bold text-gray-800">لوحة التحكم</h2>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-900">أدمن Caseify</p>
                            <p className="text-xs text-gray-500">مدير النظام</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
