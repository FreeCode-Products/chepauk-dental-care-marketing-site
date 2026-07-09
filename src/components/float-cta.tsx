"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { buildWhatsAppLink, site } from "@/lib/site";

export function FloatCTA() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 250));

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
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] font-semibold text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.7)] sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3.5"
          aria-label="Book on WhatsApp"
        >
          <span className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
          <WhatsAppIcon className="relative h-7 w-7 sm:h-6 sm:w-6" />
          <span className="relative hidden sm:inline">Book on WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
