"use client";

import { motion } from "motion/react";
import { Award, BadgeCheck, GraduationCap, Stethoscope } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { site } from "@/lib/site";

const creds = [
  { icon: GraduationCap, text: `${site.doctor.qualification} qualified` },
  { icon: Stethoscope, text: site.doctor.title },
  { icon: BadgeCheck, text: `Dental Council Reg. No ${site.doctor.regNo}` },
  { icon: Award, text: "Oral medicine & radiology specialist" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 lg:grid-cols-2">
        {/* Visual */}
        <Parallax amount={36} className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 to-brand-900 p-10 text-white">
            <LogoMark className="h-16 w-16 text-brand-200" />
            <p className="mt-6 font-display text-2xl font-bold leading-snug">
              {site.doctor.name}
            </p>
            <p className="text-sky-400">{site.doctor.qualification}</p>
            <p className="mt-2 max-w-xs text-brand-100/90">
              {site.doctor.title}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "15+", v: "Treatments offered" },
                { k: "6", v: "Days a week open" },
                { k: "Digital", v: "On-site X-rays" },
                { k: "ISO", v: "Sterilisation" },
              ].map((c, i) => (
                <motion.div
                  key={c.v}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-2xl bg-white/10 p-4 backdrop-blur"
                >
                  <p className="font-display text-2xl font-bold">{c.k}</p>
                  <p className="mt-0.5 text-xs text-brand-100">{c.v}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="animate-float absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-[var(--shadow-glow)]">
            Trusted neighbourhood clinic
          </div>
        </Parallax>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              About the clinic
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Expert dentistry, delivered with{" "}
              <span className="text-gradient">warmth</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              {site.name} is a modern dental clinic in the heart of Chepauk,
              Chennai. Led by {site.doctor.name}, an oral physician and
              maxillofacial radiologist, we combine advanced diagnostics with
              a calm, comfortable experience for every patient — from toddlers
              to grandparents.
            </p>
          </Reveal>

          <Stagger className="mt-8 space-y-4">
            {creds.map((c) => (
              <StaggerItem key={c.text}>
                <div className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="font-medium text-ink">{c.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
