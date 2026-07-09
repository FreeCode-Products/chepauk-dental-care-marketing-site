"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { buildWhatsAppLink, site } from "@/lib/site";

export function FloatCTA() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 600));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={buildWhatsAppLink(
            `Hi ${site.name}, I'd like to book a dental appointment.`
          )}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3.5 font-semibold text-white shadow-[var(--shadow-glow)]"
          aria-label="Book on WhatsApp"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-30" />
          <MessageCircle className="relative h-5 w-5" />
          <span className="relative hidden sm:inline">Book on WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
