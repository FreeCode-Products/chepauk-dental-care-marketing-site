import { Sparkles } from "lucide-react";
import { services } from "@/lib/site";

export function Ticker() {
  const items = [...services, ...services];
  return (
    <div className="relative overflow-hidden border-y border-brand-100 bg-brand-900 py-4">
      <div className="flex w-max animate-marquee items-center gap-8">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-lg font-semibold text-brand-100">
              {s.title}
            </span>
            <Sparkles className="h-4 w-4 text-sky-400" />
          </span>
        ))}
      </div>
    </div>
  );
}
