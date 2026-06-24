import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function BenefitCard({
  title,
  description,
  icon: Icon,
}: BenefitCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg">
      <div className="mb-4">
        <Icon className="h-10 w-10 text-emerald-600" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
}