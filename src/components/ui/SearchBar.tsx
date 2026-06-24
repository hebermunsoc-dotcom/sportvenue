import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search venues, sports, or locations..."
        className="w-full rounded-2xl border border-slate-300 py-3 pl-12 pr-4 text-slate-900 outline-none transition-all focus:border-emerald-500"
      />
    </div>
  );
}