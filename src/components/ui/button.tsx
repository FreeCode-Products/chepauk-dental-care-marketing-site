"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[var(--shadow-glow)] hover:bg-brand-700",
  ghost: "text-brand-700 hover:bg-brand-50",
  outline:
    "border border-brand-300 text-brand-700 hover:border-brand-500 hover:bg-brand-50",
};

export function Button({
  children,
  href = "#book",
  variant = "primary",
  className,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(base, styles[variant], className)}
    >
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute -inset-x-10 -top-1 h-full w-12 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[220%]" />
        </span>
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}
