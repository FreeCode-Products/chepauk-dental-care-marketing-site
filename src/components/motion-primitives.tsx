"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import {
  useEffect,
  useMemo,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------- */
/*  Reveal — fades + slides children in when scrolled into view          */
/* -------------------------------------------------------------------- */
type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 44 },
  down: { x: 0, y: -44 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  once?: boolean;
  as?: ElementType;
}) {
  const MotionTag = useMemo(() => motion.create(as), [as]);
  const { x, y } = offset[direction];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      {children}
    </MotionTag>
  );
}

/* -------------------------------------------------------------------- */
/*  Stagger — parent that reveals children one after another             */
/* -------------------------------------------------------------------- */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Stagger({
  children,
  className,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------- */
/*  Counter — counts up to a value when scrolled into view               */
/* -------------------------------------------------------------------- */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const spring = useSpring(value, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + v.toFixed(decimals) + suffix;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

/* -------------------------------------------------------------------- */
/*  Parallax — translates content on scroll                              */
/* -------------------------------------------------------------------- */
export function Parallax({
  children,
  className,
  amount = 80,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------- */
/*  ScrollProgress — top progress bar bound to page scroll               */
/* -------------------------------------------------------------------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={cn(
        "fixed left-0 top-0 z-[60] h-1 w-full origin-left",
        "bg-gradient-to-r from-brand-500 via-brand-400 to-gold-500"
      )}
    />
  );
}
