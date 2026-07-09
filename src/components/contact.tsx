"use client";

import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { buildWhatsAppLink, site } from "@/lib/site";

const cards = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phoneDisplay,
    href: `tel:${site.phoneRaw}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: buildWhatsAppLink(`Hi ${site.name}, I have a question.`),
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: `${site.address.line}, ${site.address.city}`,
    href: site.mapsUrl,
  },
];

const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.address.full
)}&z=16&output=embed`;

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Get in touch
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Easy to reach, <span className="text-gradient">easy to visit</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: cards + hours */}
          <div>
            <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cards.map((c) => (
                <StaggerItem key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex h-full items-start gap-4 rounded-3xl border border-brand-100 bg-white p-5 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white transition-transform duration-300 group-hover:scale-110">
                      <c.icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
                        {c.label}
                      </p>
                      <p className="mt-0.5 break-words font-medium text-ink">
                        {c.value}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Hours */}
            <Reveal delay={0.1} className="mt-4 rounded-3xl bg-brand-900 p-6 text-white">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-sky-400" />
                <h3 className="font-display text-lg font-bold">Opening hours</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {site.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">{h.day}</p>
                      <p className="text-xs text-brand-100">{h.note}</p>
                    </div>
                    <p className="whitespace-nowrap font-semibold text-sky-400">
                      {h.time}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: map */}
          <Reveal direction="left" className="flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[var(--shadow-soft)]">
              <iframe
                title={`Map to ${site.name}`}
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[320px] w-full"
              />
            </div>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:bg-brand-700"
            >
              <Navigation className="h-4 w-4" />
              Get directions
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
