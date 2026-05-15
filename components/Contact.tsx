"use client";

import Link from "next/link";

import DisplayHeading from "@/components/DisplayHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

const contactItems = [
  {
    label: "Email",
    value: "subrato8268@gmail.com",
    href: "mailto:subrato8268@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/subrat8268",
    href: "https://www.linkedin.com/in/subrat8268",
  },
  {
    label: "WhatsApp",
    value: "+91 82680 17431",
    href: "https://wa.me/918268017431",
  },
  {
    label: "GitHub",
    value: "github.com/subrat8268",
    href: "https://github.com/subrat8268",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-bg)] py-[clamp(5.5rem,9vw,10rem)]"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid overflow-hidden border border-[var(--color-border)] lg:grid-cols-2">
          <RevealOnScroll direction="left">
            <div className="bg-[var(--color-bg)] p-8 md:p-12">
              <DisplayHeading className="text-[clamp(2.75rem,6vw,4rem)]">
                Contact
              </DisplayHeading>
              <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-[var(--color-text)] [font-family:var(--font-body)]">
                Open to frontend roles at BFSI companies and product startups.
                Let&apos;s build something meaningful.
              </p>

              <ul className="mt-8 space-y-5 border-l-2 border-[var(--border-subtle)] pl-5">
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                      {item.label}
                    </p>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-[15px] text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
                    >
                      {item.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Availability card — replaces picsum contact image */}
          <RevealOnScroll direction="right" delay={0.15}>
             <div className="flex min-h-[360px] flex-col justify-between bg-[var(--color-accent)] p-8 md:p-12">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block h-2 w-2 rounded-full bg-green-400"
                    style={{ animation: "pulse 2s ease-in-out infinite" }}
                  />
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/70">
                    Available for hire
                  </p>
                </div>
                <p className="mt-6 text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-snug text-white [font-family:var(--font-display)]">
                  Frontend Developer
                </p>
                <p className="mt-2 text-sm text-white/70">
                  React · Next.js · TypeScript · React Native
                </p>
              </div>
              <div className="mt-10 space-y-3">
                {[
                  { label: "Experience", value: "2+ years production" },
                  { label: "Domain", value: "BFSI · Fintech · B2B SaaS" },
                  { label: "Previous", value: "DEPT® · Rejolut" },
                  { label: "Location", value: "Mumbai, India" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between border-b border-white/10 pb-2"
                  >
                    <span className="text-[0.65rem] uppercase tracking-[0.12em] text-white/50">
                      {row.label}
                    </span>
                    <span className="text-sm text-white/90">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
