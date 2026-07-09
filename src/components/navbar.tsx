"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Clinic", href: "#clinic" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
          scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
        )}
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-brand-700"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brand-700"
          >
            <Phone className="h-4 w-4 text-brand-600" />
            {site.phoneDisplay}
          </a>
          <Button href="#book" className="px-5 py-2.5">
            <CalendarCheck className="h-4 w-4" />
            Book
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-20 rounded-3xl border border-brand-100 bg-white p-5 shadow-[var(--shadow-soft)] md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-brand-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${site.phoneRaw}`}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-2xl px-4 py-3 text-base font-medium text-brand-700 hover:bg-brand-50"
            >
              <Phone className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
            <Button href="#book" className="mt-2 w-full">
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
