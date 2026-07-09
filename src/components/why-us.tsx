"use client";

import {
  Aperture,
  Clock,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";

const points = [
  {
    icon: HeartHandshake,
    title: "Comfort-first & painless",
    desc: "A calm, gentle approach that puts even the most anxious patients at ease.",
  },
  {
    icon: Aperture,
    title: "Advanced digital imaging",
    desc: "Low-radiation on-site X-rays for accurate, same-visit diagnosis.",
  },
  {
    icon: ShieldCheck,
    title: "Strict sterilisation",
    desc: "Hospital-grade hygiene and single-use protocols for your safety.",
  },
  {
    icon: Users,
    title: "Care for the whole family",
    desc: "From pediatric checkups to senior dentures — every age is welcome.",
  },
  {
    icon: Clock,
    title: "Open through the day",
    desc: "10 AM to 8 PM with no afternoon break, six days a week.",
  },
  {
    icon: Sparkles,
    title: "Transparent & honest",
    desc: "Clear treatment plans and upfront pricing — no surprises.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Why Chepauk Dental
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Care that feels <span className="text-gradient">effortless</span>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group flex h-full flex-col rounded-3xl bg-white p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-muted">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
