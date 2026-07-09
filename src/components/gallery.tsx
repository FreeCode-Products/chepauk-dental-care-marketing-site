"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";

type Shot = { src: string; caption: string; span?: string };

const shots: Shot[] = [
  {
    src: "/clinic-signboard.jpeg",
    caption: "Find us on Walajah Road, Chepauk",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { src: "/clinic-chair.jpeg", caption: "Modern, fully-equipped treatment room" },
  { src: "/clinic-sterilization.jpeg", caption: "Strict sterilisation & digital imaging" },
  { src: "/clinic-consultation.jpeg", caption: "Comfortable consultation space" },
  { src: "/flyer-doctor.jpeg", caption: "Led by Dr. C. Narmadha, BDS MDS" },
];

export function Gallery() {
  return (
    <section id="clinic" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Inside the clinic
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            A calm, modern space{" "}
            <span className="text-gradient">built for you</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Clean, air-conditioned rooms with the latest dental technology — see
            it before you visit.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[210px] lg:grid-cols-4">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-brand-100 shadow-[var(--shadow-soft)]",
                s.span
              )}
            >
              <Image
                src={s.src}
                alt={s.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/85 via-brand-900/30 to-transparent p-4 pt-10 text-sm font-medium text-white">
                {s.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
