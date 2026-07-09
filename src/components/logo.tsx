import { cn } from "@/lib/utils";

/* Stylised tooth line-mark inspired by the clinic logo. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* left tooth lobe */}
      <path
        d="M31 15C26 6 15 5 10 12c-6 8-3 24 3 34 2 4 6 5 8 1 3-6 2-16 4-22 2-5 8-6 6-10Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* right tooth lobe */}
      <path
        d="M33 15c5-9 16-10 21-3 6 8 3 24-3 34-2 4-6 5-8 1-3-6-2-16-4-22-2-5-8-6-6-10Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* inner leaf */}
      <path
        d="M32 26c-4 4-5 12-1 20 4-8 3-16 1-20Z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <a href="#top" className={cn("group flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
          light
            ? "bg-white/15 text-white"
            : "bg-brand-800 text-brand-100 shadow-[var(--shadow-glow)]"
        )}
      >
        <LogoMark className="h-7 w-7" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-lg font-bold tracking-tight",
            light ? "text-white" : "text-brand-800"
          )}
        >
          CHEPAUK
        </span>
        <span
          className={cn(
            "block text-[0.62rem] font-semibold uppercase tracking-[0.32em]",
            light ? "text-brand-100" : "text-brand-500"
          )}
        >
          Dental Care
        </span>
      </span>
    </a>
  );
}
