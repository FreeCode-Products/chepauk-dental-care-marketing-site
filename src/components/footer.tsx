"use client";

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { buildWhatsAppLink, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-brand-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Gentle, modern dentistry for the whole family in the heart of
              Chepauk, Chennai.
            </p>
            <p className="mt-4 text-sm font-medium text-ink">
              {site.doctor.name}, {site.doctor.qualification}
            </p>
            <p className="text-xs text-muted">
              {site.doctor.title} · Reg. No {site.doctor.regNo}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={`tel:${site.phoneRaw}`}
                aria-label="Call"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={buildWhatsAppLink(`Hi ${site.name}!`)}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
              Popular services
            </h4>
            <ul className="mt-4 grid grid-cols-1 gap-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-brand-700"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-ink">
              Reach us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand-600" />
                <span>
                  {site.address.line}, {site.address.city}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-600" />
                <a href={`tel:${site.phoneRaw}`} className="hover:text-brand-700">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-600" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all hover:text-brand-700"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-brand-600" />
                <span>Mon–Sat 10 AM–8 PM · Sun by appointment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-100 pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <a href="#services" className="hover:text-brand-700">
              Services
            </a>
            <a href="#book" className="hover:text-brand-700">
              Book
            </a>
            <a href="#contact" className="hover:text-brand-700">
              Contact
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
