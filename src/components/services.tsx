"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/motion-primitives";
import { services, serviceGroups } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Services() {
  const [group, setGroup] = useState<(typeof serviceGroups)[number]>("All");
  const filtered =
    group === "All" ? services : services.filter((s) => s.group === group);

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Our services
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Complete care under{" "}
            <span className="text-gradient">one gentle roof</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            15 specialist treatments — from cleaning to implants — backed by
            digital imaging and a promise of comfort at every step.
          </p>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {serviceGroups.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                group === g ? "text-white" : "text-brand-700 hover:bg-brand-50"
              )}
            >
              {group === g && (
                <motion.span
                  layoutId="service-pill"
                  className="absolute inset-0 rounded-full bg-brand-600 shadow-[var(--shadow-glow)]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{g}</span>
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.article
                key={s.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                whileHover={{ y: -8 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {s.group}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-brand-500">{s.tamil}</p>
                  <p className="mt-2 text-muted">{s.desc}</p>
                  <a
                    href="#book"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    Book this →
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
