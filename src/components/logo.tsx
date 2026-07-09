import Image from "next/image";
import { cn } from "@/lib/utils";

/* Stylised tooth line-mark — used on dark/navy backgrounds where the
   raster logo (light background) would not sit cleanly. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M31 15C26 6 15 5 10 12c-6 8-3 24 3 34 2 4 6 5 8 1 3-6 2-16 4-22 2-5 8-6 6-10Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 15c5-9 16-10 21-3 6 8 3 24-3 34-2 4-6 5-8 1-3-6-2-16-4-22-2-5-8-6-6-10Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

/* Primary logo — the real clinic logo image. For light backgrounds. */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Chepauk Dental Care — home"
      className={cn("group flex items-center", className)}
    >
      <Image
        src="/logo.jpeg"
        alt="Chepauk Dental Care"
        width={200}
        height={200}
        priority
        className="h-12 w-auto rounded-xl transition-transform duration-300 group-hover:scale-105"
      />
    </a>
  );
}
