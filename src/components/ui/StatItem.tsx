interface StatItemProps {
  value: string;
  label: string;
}

export default function StatItem({
  value,
  label,
}: StatItemProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="text-sm text-slate-600">
        {label}
      </p>
    </div>
  );
}