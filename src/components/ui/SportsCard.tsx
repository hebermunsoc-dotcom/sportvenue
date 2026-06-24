import { LucideIcon } from "lucide-react";

interface SportsCardProps {
  name: string;
  icon: LucideIcon;
}

export default function SportsCard({
  name,
  icon: Icon,
}: SportsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex justify-center">
        <Icon className="h-10 w-10 text-emerald-600" />
      </div>

      <h3 className="font-semibold text-slate-900">
        {name}
      </h3>
    </div>
  );
}