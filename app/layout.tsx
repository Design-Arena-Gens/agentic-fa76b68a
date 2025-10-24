import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Luminous Locks Salon",
  description:
    "Experience bespoke hair care, cutting-edge styling, and indulgent treatments at Luminous Locks Salon.",
  openGraph: {
    title: "Luminous Locks Salon",
    description:
      "Experience bespoke hair care, cutting-edge styling, and indulgent treatments at Luminous Locks Salon.",
    url: "https://agentic-fa76b68a.vercel.app",
    siteName: "Luminous Locks Salon",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
        width: 1200,
        height: 630,
        alt: "Modern hair salon interior"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminous Locks Salon",
    description:
      "Experience bespoke hair care, cutting-edge styling, and indulgent treatments at Luminous Locks Salon.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} bg-stone-50`}
    >
      <body className="font-body text-stone-900 antialiased">{children}</body>
    </html>
  );
}
