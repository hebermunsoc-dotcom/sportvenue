interface SportFilterBarProps {
  selected: string;
  onSelect: (sport: string) => void;
}

const filters = [
  "All",
  "Football",
  "Cricket",
  "Badminton",
  "Tennis",
];

export default function SportFilterBar({
  selected,
  onSelect,
}: SportFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            selected === filter
              ? "bg-emerald-600 text-white"
              : "border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}