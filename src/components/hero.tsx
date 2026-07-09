"use client";

import { motion } from "motion/react";
import {
  CalendarCheck,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink, site } from "@/lib/site";

const word = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headline = ["Gentle", "care", "for", "a", "healthier", "smile."];

export function Hero() {
  /* ---- reusable pieces, arranged differently on mobile vs desktop ---- */
  const badge = (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700"
    >
      <ShieldCheck className="h-4 w-4" />
      {site.tagline}
    </motion.span>
  );

  const heading = (
    <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
      <motion.span
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}
        className="flex flex-wrap gap-x-3 sm:gap-x-4"
      >
        {headline.map((w, i) => (
          <motion.span
            key={i}
            variants={word}
            className={w === "healthier" || w === "smile." ? "text-gradient" : ""}
          >
            {w}
          </motion.span>
        ))}
      </motion.span>
    </h1>
  );

  const paragraph = (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
    >
      {site.name} in Chepauk, Chennai — modern, painless dentistry led by{" "}
      <span className="font-semibold text-ink">
        {site.doctor.name}, {site.doctor.qualification}
      </span>
      . From routine checkups to complete smile makeovers, all under one gentle
      roof.
    </motion.p>
  );

  const actions = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.6 }}
      className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
    >
      <Button href="#book" className="w-full sm:w-auto">
        <CalendarCheck className="h-4 w-4" />
        Book Appointment
      </Button>
      <Button
        href={buildWhatsAppLink(
          `Hi ${site.name}, I'd like to book a dental appointment.`
        )}
        variant="outline"
        className="w-full sm:w-auto"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us
      </Button>
    </motion.div>
  );

  const chips = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.6 }}
      className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
    >
      <a
        href={site.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-[var(--shadow-soft)]"
      >
        <MapPin className="h-4 w-4 shrink-0 text-brand-600" />
        {site.address.line}
      </a>
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-[var(--shadow-soft)]">
        <Clock className="h-4 w-4 shrink-0 text-brand-600" />
        Mon–Sat · 10 AM – 8 PM
      </span>
    </motion.div>
  );

  const card = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative mx-auto w-full max-w-sm sm:max-w-md"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-1 shadow-[var(--shadow-glow)]">
        <div className="flex h-full w-full flex-col justify-between rounded-[2.3rem] bg-gradient-to-br from-brand-700 to-brand-900 p-7 text-white sm:p-8">
          <div className="flex items-center justify-between">
            <LogoMark className="h-12 w-12 text-brand-200 sm:h-14 sm:w-14" />
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100">
              Reg. No {site.doctor.regNo}
            </span>
          </div>
          <div>
            <p className="text-brand-100">Your dentist</p>
            <p className="mt-1 font-display text-2xl font-bold sm:text-3xl">
              {site.doctor.name}
            </p>
            <p className="mt-1 text-sm font-medium text-sky-400">
              {site.doctor.qualification}
            </p>
            <p className="mt-3 text-sm text-brand-100/90">{site.doctor.title}</p>
          </div>
        </div>
      </div>

      {/* Floating cards — desktop only (avoid mobile overlap) */}
      <div className="animate-float glass absolute -left-6 top-16 hidden items-center gap-3 rounded-2xl p-3 shadow-[var(--shadow-soft)] lg:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">Painless</p>
          <p className="text-xs text-muted">Comfort-first care</p>
        </div>
      </div>

      <div className="animate-float absolute -right-4 bottom-12 hidden items-center gap-3 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] [animation-delay:2s] lg:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white">
          <CalendarCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">Same-day</p>
          <p className="text-xs text-muted">Appointments</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-12 pt-28 lg:flex lg:min-h-screen lg:items-center lg:pb-0"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-blob absolute -left-24 top-10 h-96 w-96 rounded-full bg-brand-200/60 blur-3xl" />
        <div className="animate-blob absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-brand-100/70 blur-3xl [animation-delay:4s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl [animation-delay:8s]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(31,102,184,0.14) 1px, transparent 0)",
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      {/* Mobile: image → address/timing → button → paragraph → heading → badge */}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 lg:hidden">
        {card}
        {chips}
        {actions}
        {paragraph}
        {heading}
        <div>{badge}</div>
      </div>

      {/* Desktop: text left, doctor card right */}
      <div className="mx-auto hidden w-full max-w-6xl grid-cols-[1.1fr_0.9fr] items-center gap-12 px-4 lg:grid">
        <div className="space-y-6">
          {badge}
          {heading}
          {paragraph}
          {actions}
          {chips}
        </div>
        {card}
      </div>
    </section>
  );
}
