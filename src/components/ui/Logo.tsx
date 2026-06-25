import { Goal } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-lg bg-emerald-600 p-2">
        <Goal className="h-5 w-5 text-white" />
      </div>

      <span className="text-xl font-bold text-slate-900">
        TurfSlots
      </span>
    </div>
  );
}