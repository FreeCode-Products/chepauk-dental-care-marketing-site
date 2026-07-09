"use client";

import { motion } from "motion/react";
import { CalendarCheck, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion-primitives";
import {
  buildMailtoLink,
  buildWhatsAppLink,
  services,
  site,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type Form = {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const empty: Form = { name: "", phone: "", service: "", date: "", message: "" };

function composeMessage(f: Form) {
  return [
    `New appointment request — ${site.name}`,
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    f.service && `Service: ${f.service}`,
    f.date && `Preferred date: ${f.date}`,
    f.message && `Notes: ${f.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function Booking() {
  const [form, setForm] = useState<Form>(empty);
  const [sent, setSent] = useState(false);

  const valid = form.name.trim() !== "" && form.phone.trim().length >= 7;

  function update<K extends keyof Form>(key: K, value: Form[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!valid) return;
    window.open(buildWhatsAppLink(composeMessage(form)), "_blank");
    setSent(true);
  }

  const inputClass =
    "w-full rounded-2xl border border-brand-100 bg-brand-50/40 px-4 py-3 text-ink outline-none transition focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200";

  return (
    <section id="book" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 to-brand-900 p-2 shadow-[var(--shadow-glow)]">
          <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-[2.2rem] lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left promo */}
            <div className="relative flex flex-col justify-center p-8 text-white sm:p-10">
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <div className="animate-blob absolute -left-16 -top-10 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl" />
                <div className="animate-blob absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl [animation-delay:5s]" />
              </div>
              <div className="relative">
                <Reveal>
                  <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                    Book your visit in seconds
                  </h2>
                  <p className="mt-4 max-w-sm text-brand-100">
                    Fill the form and we&apos;ll confirm your slot on WhatsApp.
                    No account, no waiting rooms — just a friendly plan for a
                    healthier smile.
                  </p>
                </Reveal>
                <ul className="mt-8 space-y-3">
                  {[
                    "Free first consultation",
                    "Same-day appointments",
                    "Flexible EMI options",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-sky-400" />
                      <span className="text-brand-50">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right form card */}
            <div className="bg-white p-8 sm:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center gap-4 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    Almost there!
                  </h3>
                  <p className="max-w-sm text-muted">
                    We opened WhatsApp with your request pre-filled. Just press
                    send and we&apos;ll confirm your appointment shortly.
                  </p>
                  <div className="mt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={buildWhatsAppLink(composeMessage(form))}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Reopen WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setForm(empty);
                        setSent(false);
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
                    >
                      New request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">
                        Full name <span className="text-brand-500">*</span>
                      </span>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">
                        Phone <span className="text-brand-500">*</span>
                      </span>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="10-digit mobile"
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">
                        Service
                      </span>
                      <select
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        className={cn(inputClass, "appearance-none")}
                      >
                        <option value="">Select a treatment</option>
                        {services.map((s) => (
                          <option key={s.title} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">
                        Preferred date
                      </span>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-ink">
                      Notes
                    </span>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={3}
                      placeholder="Tell us about your concern (optional)"
                      className={cn(inputClass, "resize-none")}
                    />
                  </label>

                  <div className="mt-1 flex flex-wrap gap-3">
                    <button
                      type="submit"
                      disabled={!valid}
                      className={cn(
                        "inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition",
                        valid
                          ? "bg-brand-600 shadow-[var(--shadow-glow)] hover:bg-brand-700"
                          : "cursor-not-allowed bg-brand-300"
                      )}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Request via WhatsApp
                    </button>
                    <a
                      href={
                        valid
                          ? buildMailtoLink(
                              `Appointment request — ${form.name}`,
                              composeMessage(form)
                            )
                          : undefined
                      }
                      aria-disabled={!valid}
                      className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition",
                        valid
                          ? "border-brand-200 text-brand-700 hover:bg-brand-50"
                          : "pointer-events-none border-brand-100 text-brand-300"
                      )}
                    >
                      <Send className="h-4 w-4" />
                      Email
                    </a>
                  </div>
                  <p className="flex items-center gap-1.5 text-xs text-muted">
                    <CalendarCheck className="h-3.5 w-3.5" />
                    Or call us directly at {site.phoneDisplay}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
