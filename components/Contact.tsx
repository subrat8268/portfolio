"use client";

import { Github, Linkedin, Mail, Check } from "lucide-react";

import DisplayHeading from "@/components/DisplayHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

const contactItems = [
  {
    label: "Email",
    value: "subrato8268@gmail.com",
    href: "mailto:subrato8268@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/subrat8268",
    href: "https://www.linkedin.com/in/subrat8268",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/subrat8268",
    href: "https://github.com/subrat8268",
    icon: Github,
    external: true,
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
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Contact
              </p>
              <DisplayHeading className="mt-3 text-[clamp(2.75rem,6vw,4rem)]">
                Get in touch
              </DisplayHeading>
              <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-[var(--color-text)] [font-family:var(--font-body)]">
                Open to Frontend Developer roles at BFSI companies, product
                startups, and digital agencies. Available for full-time and
                contract work.
              </p>

              <ul className="mt-8 space-y-4">
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-surface-2)]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-offset)] text-[var(--color-primary)] transition-colors duration-200 group-hover:bg-[var(--color-primary-highlight)]">
                        <item.icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                          {item.label}
                        </span>
                        <span className="block truncate text-[15px] text-[var(--color-text)]">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.15}>
            <div className="bg-[var(--color-surface)] p-8 md:p-12">
              <div className="mb-6 flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-full bg-green-400"
                  style={{ animation: "pulse 2s ease-in-out infinite" }}
                />
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Available for new opportunities
                </p>
              </div>

              <p className="mb-6 text-sm leading-[1.7] text-[var(--color-text-muted)]">
                Looking for frontend developer roles where I can work on
                production systems at scale. Especially in BFSI, fintech, or
                enterprise product companies.
              </p>

              <div className="space-y-4">
                {[
                  "Full-time roles",
                  "Contract / freelance",
                  "Remote or Mumbai-based",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check
                      className="h-4 w-4 shrink-0 text-[var(--color-primary)]"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {item}
                    </span>
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
