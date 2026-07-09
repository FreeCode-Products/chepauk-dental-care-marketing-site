/* ------------------------------------------------------------------ */
/*  Single source of truth for all clinic content.                     */
/*  Everything is frontend-only — booking builds a WhatsApp / mail      */
/*  deep-link, no backend required.                                     */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Chepauk Dental Care",
  tagline: "Gentle dentistry for the whole family",
  doctor: {
    name: "Dr. C. Narmadha",
    qualification: "BDS, MDS",
    title: "Oral Physician & Maxillofacial Radiologist",
    regNo: "21966",
  },
  phoneDisplay: "82483 95311",
  phoneRaw: "+918248395311",
  whatsapp: "918248395311",
  email: "chepaukdentalcare@gmail.com",
  address: {
    line: "8, Walajah Road, Chepauk",
    city: "Chennai — 600005",
    full: "8, Walajah Road, Chepauk, Chennai 600005",
  },
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 8:00 PM", note: "No afternoon break" },
    { day: "Sunday", time: "2:00 PM – 7:00 PM", note: "By appointment only" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Chepauk+Dental+Care+8+Walajah+Road+Chepauk+Chennai+600005",
} as const;

export type Service = {
  icon: string;
  title: string;
  desc: string;
  group: "Restore" | "Cosmetic" | "Care" | "Surgery";
};

export const services: Service[] = [
  {
    icon: "Crown",
    title: "All Ceramic Crowns",
    desc: "Metal-free, natural-looking crowns that blend perfectly with your smile.",
    group: "Restore",
  },
  {
    icon: "Paintbrush",
    title: "Tooth Coloured Restorations",
    desc: "Invisible, mercury-free fillings matched to your exact tooth shade.",
    group: "Restore",
  },
  {
    icon: "Smile",
    title: "Flexible Denture",
    desc: "Comfortable, clasp-free dentures that flex naturally as you chew.",
    group: "Restore",
  },
  {
    icon: "SmilePlus",
    title: "Complete Dentures",
    desc: "Full-arch dentures crafted for a secure fit and confident bite.",
    group: "Restore",
  },
  {
    icon: "Aperture",
    title: "Advanced Digital Imaging",
    desc: "Low-radiation digital X-rays for fast, precise diagnosis on-site.",
    group: "Care",
  },
  {
    icon: "Sparkles",
    title: "Cleaning & Polishing",
    desc: "Professional scaling that removes plaque and brightens your teeth.",
    group: "Care",
  },
  {
    icon: "Syringe",
    title: "Root Canal Treatment",
    desc: "Single-sitting, virtually painless RCT that saves your natural tooth.",
    group: "Restore",
  },
  {
    icon: "Braces",
    title: "Orthodontic Braces",
    desc: "Metal & ceramic braces to straighten teeth and correct your bite.",
    group: "Cosmetic",
  },
  {
    icon: "CircleMinus",
    title: "Tooth Extraction",
    desc: "Gentle, safe removal of damaged teeth with minimal discomfort.",
    group: "Surgery",
  },
  {
    icon: "Zap",
    title: "Laser Teeth & Gums",
    desc: "Precise laser therapy for healthier gums and faster healing.",
    group: "Care",
  },
  {
    icon: "Layers",
    title: "Clear Aligners",
    desc: "Invisible, removable aligners to straighten teeth discreetly.",
    group: "Cosmetic",
  },
  {
    icon: "Anchor",
    title: "Permanent Dental Implants",
    desc: "Titanium implants that look, feel and function like real teeth.",
    group: "Surgery",
  },
  {
    icon: "Baby",
    title: "Pediatric Dental Care",
    desc: "Gentle, playful dentistry that makes kids love their checkups.",
    group: "Care",
  },
  {
    icon: "Wand2",
    title: "Smile Designing",
    desc: "Full smile makeovers designed around your face and personality.",
    group: "Cosmetic",
  },
  {
    icon: "Microscope",
    title: "Oral Cancer Screening",
    desc: "Early, painless screening for peace of mind and timely care.",
    group: "Care",
  },
];

export const serviceGroups = ["All", "Restore", "Cosmetic", "Care", "Surgery"] as const;

/* ------------------------------------------------------------------ */
/*  Frontend-only booking → prefilled WhatsApp / mailto deep-links      */
/* ------------------------------------------------------------------ */
export function buildWhatsAppLink(msg: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export function buildMailtoLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
