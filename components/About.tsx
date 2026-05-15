import Image from "next/image";

import DisplayHeading from "@/components/DisplayHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg)] py-[clamp(5.5rem,9vw,10rem)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[40%_60%] lg:items-start">
        <div>
          <RevealOnScroll direction="left">
            <DisplayHeading className="text-[clamp(2.75rem,6vw,4rem)]">
              About Me
            </DisplayHeading>
          </RevealOnScroll>
          <div className="mt-6 max-w-[62ch] space-y-5 text-[15px] leading-[1.75] text-[var(--color-text)] [font-family:var(--font-body)]">
          <RevealOnScroll delay={0.1}>
            <p>
                Frontend developer with 2+ years building production React and
                Next.js interfaces for BFSI and product teams. I focus on
                performance, accessibility, and clean component architecture.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p>
                Previously at DEPT® and Rejolut. I bring design sensibility to
                every interface I ship, with practical experience across both
                product delivery and visual communication.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <ul className="space-y-2 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
              <li>XPharms Xchange - Next.js trading platform</li>
              <li>Research Assist - AI Copilot</li>
              <li>AU Small Finance Bank - AEM + WCAG</li>
              <li>IndiaFirst KYC flows - validation and payments</li>
              <li>Rejo AI - enterprise SaaS delivery</li>
              <li>CreditBook - React Native app</li>
            </ul>
          </RevealOnScroll>
          </div>

          {/* Experience tags */}
          <RevealOnScroll delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-2">
              {["DEPT®", "Rejolut", "BFSI", "Mumbai", "React", "Next.js"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-[var(--color-border)] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <RevealOnScroll direction="right" delay={0.05}>
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-[var(--shadow-lg)] sm:col-span-2">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 80% 10%, color-mix(in oklab, var(--accent) 28%, transparent) 0%, transparent 42%)",
                }}
              />
              <div className="relative grid gap-4 p-4 sm:grid-cols-[220px_1fr] sm:items-center sm:p-5">
                <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-offset)]">
                  <Image
                    src="/subrat-profile.jpg"
                    alt="Subrat Jena portrait"
                    width={520}
                    height={640}
                    className="h-[220px] w-full object-cover"
                    priority={false}
                  />
                </div>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--text-faint)]">
                    Profile
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    I design and ship production UIs that stay usable under real
                    business constraints, from BFSI compliance to performance budgets.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Frontend Developer",
                      "Mumbai, India",
                      "2+ Years",
                      "BFSI · Enterprise",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-offset)] px-3 py-1 text-[0.62rem] uppercase tracking-[0.1em] text-[var(--text-muted)]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.1}>
            <div className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex h-7 items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface-offset)] px-3">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-green-400/70" />
                <span className="ml-2 text-[0.6rem] text-[var(--color-text-muted)]">
                  Hero.tsx
                </span>
              </div>
              <pre
                className="p-4 text-[0.62rem] leading-[1.7] text-[var(--color-text-muted)] overflow-hidden"
                aria-label="Code snippet"
              >
                {`export default function Hero() {
  return (
    <section>
      <h1>Subrat Jena</h1>
      <p>Frontend Developer</p>
      <Stack>
        <Tag>React</Tag>
        <Tag>Next.js</Tag>
      </Stack>
    </section>
  );
}`}
              </pre>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.25}>
            <div className="bg-[var(--color-accent)] p-4 flex flex-col gap-4">
              <p className="text-[0.65rem] uppercase tracking-[0.15em] text-white/60">
                Currently building
              </p>
              <div className="space-y-2">
                {[
                  { name: "au.bank.in", desc: "AEM · React · WCAG" },
                  { name: "XPharms Xchange", desc: "Next.js · SEO · JWT" },
                  { name: "ICRA Copilot", desc: "React · Redux · APIs" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="border border-white/20 bg-white/5 px-3 py-2"
                  >
                    <p className="text-[0.68rem] text-white font-medium">
                      {p.name}
                    </p>
                    <p className="text-[0.6rem] text-white/50 mt-0.5">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
