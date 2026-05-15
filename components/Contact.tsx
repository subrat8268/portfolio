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

{/* Contact form */}
          <RevealOnScroll direction="right" delay={0.15}>
            <div className="bg-[var(--color-surface)] p-8 md:p-12">
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="inline-block h-2 w-2 rounded-full bg-green-400"
                  style={{ animation: "pulse 2s ease-in-out infinite" }}
                />
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Available for hire
                </p>
              </div>
              
              <form 
                action="mailto:subrato8268@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--color-accent)] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
              
              <p className="mt-4 text-xs text-[var(--color-text-muted)] text-center">
                Or reach out directly via{" "}
                <Link href="mailto:subrato8268@gmail.com" className="text-[var(--color-accent)] hover:underline">
                  email
                </Link>
                {" "}or{" "}
                <Link href="https://wa.me/918268017431" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                  WhatsApp
                </Link>
              </p>
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
