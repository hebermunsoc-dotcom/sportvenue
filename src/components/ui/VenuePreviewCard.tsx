import Image from "next/image";
import { MapPin, Star } from "lucide-react";
export default function VenuePreviewCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
      <div className="relative mb-4 h-40 overflow-hidden rounded-2xl">
  <Image
    src="/images/public/turfs/football-turf.jpg"
    alt="Football Turf"
    fill
    className="object-cover"
  />
</div>

      <h3 className="mb-2 text-xl font-bold text-slate-900">
        Elite Football Arena
      </h3>

      <div className="mb-3 flex items-center gap-2 text-slate-600">
        <MapPin className="h-4 w-4" />
        Chennai
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-current text-yellow-500" />
          <span>4.8</span>
        </div>

        <span className="font-semibold text-emerald-600">
          ₹1200/hr
        </span>
      </div>
    </div>
  );
}