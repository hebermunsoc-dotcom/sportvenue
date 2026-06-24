import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import Button from "./Button";
import Link from "next/link";
import ProtectedBookButton from "@/components/auth/ProtectedBookButton";

interface TurfCardProps {
  id: string | number;
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  tags: string[];
}

export default function TurfCard({
  id,
  name,
  location,
  price,
  rating,
  image,
  tags,
}: TurfCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/venues/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="mb-2 text-lg font-semibold text-slate-900">
            {name}
          </h3>

          <div className="mb-3 flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-4 flex items-center justify-between">
            <span className="font-semibold text-emerald-600">
              {price}
            </span>

            <div className="flex items-center gap-1 text-sm text-slate-600">
              <Star className="h-4 w-4 fill-current" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-5 pt-0">
       <ProtectedBookButton
  venueId={id}
/>
      </div>
    </div>
  );
}