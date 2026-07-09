import {
  Anchor,
  Aperture,
  Baby,
  Braces,
  CircleMinus,
  Crown,
  Layers,
  Microscope,
  Paintbrush,
  Smile,
  SmilePlus,
  Sparkles,
  Syringe,
  Wand2,
  Zap,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Anchor,
  Aperture,
  Baby,
  Braces,
  CircleMinus,
  Crown,
  Layers,
  Microscope,
  Paintbrush,
  Smile,
  SmilePlus,
  Sparkles,
  Syringe,
  Wand2,
  Zap,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} />;
}
