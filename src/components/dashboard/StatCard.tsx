import { LucideIcon } from 'lucide-react';

interface StatCardProps {
    label: string;
    value: string | number;
    icon: LucideIcon;
    trend?: {
        value: string;
        isUp: boolean;
    };
    colorClass?: string;
}

export default function StatCard({ label, value, icon: Icon, trend, colorClass = "bg-mint" }: StatCardProps) {
    return (
        <div className="card flex items-center gap-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${colorClass} text-white`}>
                <Icon className="w-8 h-8" />
            </div>
            <div className="flex-1">
                <p className="text-gray-500 text-sm mb-1">{label}</p>
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                    {trend && (
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend.isUp ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                            }`}>
                            {trend.isUp ? '↑' : '↓'} {trend.trend}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
