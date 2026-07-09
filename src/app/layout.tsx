import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chepauck-dental-care.vercel.app"),
  title: "Chepauk Dental Care — Dr. C. Narmadha | Dentist in Chepauk, Chennai",
  description:
    "Gentle, modern dental care in Chepauk, Chennai by Dr. C. Narmadha (BDS, MDS). Implants, root canal, braces, clear aligners, crowns, kids dentistry & more. Book on WhatsApp.",
  keywords: [
    "dentist Chepauk",
    "dental clinic Chennai",
    "Dr Narmadha dentist",
    "dental implants Chennai",
    "root canal Chepauk",
    "clear aligners Chennai",
    "Chepauk Dental Care",
  ],
  openGraph: {
    title: "Chepauk Dental Care — Dentist in Chepauk, Chennai",
    description:
      "Modern, painless dentistry by Dr. C. Narmadha (BDS, MDS). Book your appointment on WhatsApp.",
    images: ["/clinic-signboard.jpeg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
