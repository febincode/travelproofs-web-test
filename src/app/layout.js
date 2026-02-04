import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TravelProofs | Visa Document Preparation SaaS",
  description:
    "TravelProofs.com helps travelers and visa agencies create visa-ready cover letters and supporting documents in minutes.",
  metadataBase: new URL("https://travelproofs.com"),
  openGraph: {
    title: "TravelProofs | Visa Document Preparation SaaS",
    description:
      "Generate professional visa cover letters and supporting documents quickly and securely.",
    url: "https://travelproofs.com",
    siteName: "TravelProofs",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

const legalLinks = [
  {
    href: "/terms",
    label: "Terms",
    footerLabel: "Terms & Conditions",
  },
  {
    href: "/privacy",
    label: "Privacy",
    footerLabel: "Privacy Policy",
  },
  {
    href: "/refund",
    label: "Refund",
    footerLabel: "Refund Policy",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200 bg-white">
            <div className="custom-mx flex h-20 items-center justify-between gap-6">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="TravelProofs"
                  width={150}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              <nav className="flex items-center gap-3 text-sm font-medium text-slate-600">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
                <details className="group relative">
                  <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden">
                    Legal
                    <span aria-hidden="true" className="text-xs">
                      ▾
                    </span>
                  </summary>
                  <div className="absolute right-0 mt-3 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                    {legalLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </nav>
              <Link
                href="/#contact"
                className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-blue-600 md:inline-flex"
              >
                Request Access
              </Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-slate-50 py-10">
            <div className="custom-mx flex flex-col gap-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-800">
                  © 2025 TravelProofs.com · All rights reserved.
                </p>
                <p className="mt-1">Secure visa documentation platform for agencies and travelers.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    {link.footerLabel}
                  </Link>
                ))}
                <a
                  href="mailto:support@travelproofs.com"
                  className="font-medium text-slate-700 transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  support@travelproofs.com
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
