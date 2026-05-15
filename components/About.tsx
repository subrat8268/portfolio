import Image from "next/image";

import DisplayHeading from "@/components/DisplayHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg)] py-[clamp(3.5rem,6vw,6rem)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:items-start">
        <div>
          <RevealOnScroll direction="left">
            <DisplayHeading className="text-[clamp(2.35rem,5.2vw,3.45rem)]">
              About Me
            </DisplayHeading>
          </RevealOnScroll>
          <div className="mt-4 max-w-[62ch] space-y-4 text-[14px] leading-[1.72] text-[var(--color-text)] [font-family:var(--font-body)]">
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
              <div className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5 sm:p-4">
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--text-faint)]">
                  What drives me
                </p>
                <p className="mt-2.5 text-[13px] leading-[1.7] text-[var(--color-text-muted)]">
                  I care about building interfaces that feel invisible — where the user focuses on the task, not the tool. Coming from a design background, I believe the best code is the kind that makes complex flows feel simple. That&apos;s what keeps me up at night: solving the hard problems so users never have to think about them.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.4}>
            <div className="mt-6 flex flex-wrap gap-2">
              {["DEPT®", "Rejolut", "BFSI", "Mumbai", "React", "Next.js"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/45 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-primary)_22%,transparent)]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-[1.1fr_0.9fr] sm:gap-4">
          <RevealOnScroll direction="right" delay={0.05}>
            <div className="group relative overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)] transition-transform duration-300 hover:-translate-y-1">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 85% 8%, color-mix(in oklab, var(--color-primary) 18%, transparent) 0%, transparent 45%)",
                }}
              />
              <div className="relative grid gap-3 p-3.5 sm:p-4">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)]">
                  <Image
                    src="/subrat-profile.jpg"
                    alt="Subrat Jena portrait"
                    width={520}
                    height={640}
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-[248px]"
                    priority={false}
                  />
                </div>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--text-faint)]">
                    Profile / Frontend
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--text-muted)]">
                    Design-sensitive frontend developer shipping production UI.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {[
                      "React",
                      "Next.js",
                      "AEM",
                      "WCAG",
                      "BFSI",
                      "Mumbai",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.1em] text-[var(--text-muted)]"
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
            <div className="relative overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)] transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-8 items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface-offset)] px-3">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-green-400/70" />
                <span className="ml-2 text-[0.6rem] text-[var(--color-text-muted)]">
                  RevealOnScroll.tsx
                </span>
              </div>
              <pre
                className="overflow-hidden p-3 text-[0.55rem] leading-[1.62]"
                aria-label="Code snippet"
              >
                <span className="text-[var(--color-text-muted)]">const ref = useRef&lt;HTMLDivElement&gt;(null)</span>
                <br />
                <span className="text-[var(--color-text-muted)]">const isInView = useInView(ref, {'{'}</span>
                <br />
                <span className="text-[var(--color-text-muted)]">  once: true,</span>
                <br />
                <span className="text-[var(--color-text-muted)]">  margin: &quot;-80px&quot;</span>
                <br />
                <span className="text-[var(--color-text-muted)]">{'}'})</span>
                <br />
                <span className="text-[var(--color-primary)]">return</span>
                <span className="text-[var(--color-text-muted)]"> (</span>
                <br />
                <span className="text-[var(--color-text-muted)]">  &lt;motion.div</span>
                <br />
                <span className="text-[var(--color-text-muted)]">    ref={'{'}{'ref}'}</span>
                <br />
                <span className="text-[var(--color-text-muted)]">    animate={'{'}</span>
                <br />
                <span className="text-[var(--color-text-muted)]">      isInView ? </span>
                <span className="text-[var(--color-text)]">{'{'}</span>
                <span className="text-[var(--color-text)]">opacity: 1</span>
                <span className="text-[var(--color-text-muted)]">{'}'}</span>
                <span className="text-[var(--color-text-muted)]"> : ...</span>
                <br />
                <span className="text-[var(--color-text-muted)]">  {'}'}</span>
                <br />
                <span className="text-[var(--color-text-muted)]">  &gt;{'{'}children{'}'}&lt;/motion.div&gt;</span>
                <br />
                <span className="text-[var(--color-text-muted)]">)</span>
                <span className="code-cursor ml-1 inline-block h-[11px] w-[1px] bg-[var(--color-primary)] align-middle" />
              </pre>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.25}>
            <div className="overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface-2)] shadow-[var(--shadow-md)] transition-transform duration-300 hover:-translate-y-1 sm:col-span-2 hover:shadow-[0_14px_30px_oklch(0_0_0_/_0.3),0_0_0_1px_color-mix(in_oklab,var(--color-primary)_20%,transparent)]">
              <div className="h-[2px] w-full bg-[var(--color-primary)]" />
              <div className="p-3.5">
                <p className="text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-primary)]">
                Currently building
                </p>
                <div className="mt-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-offset)] p-3 transition-all duration-200 hover:border-[var(--color-primary)]/45 hover:bg-[var(--color-surface)]">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[0.8rem] font-semibold text-[var(--color-text)]">
                      KreditBook
                    </p>
                    <span className="rounded-full border border-[var(--color-primary)]/35 bg-[var(--color-primary-highlight)] px-2 py-0.5 text-[0.56rem] font-medium uppercase tracking-[0.08em] text-[var(--color-primary)]">
                      In Progress
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.63rem] leading-relaxed text-[var(--color-text-muted)]">
                    Cross-platform ledger app with WhatsApp sharing, Super Admin dashboard, JWT auth, and role-based access.
                  </p>
                  <p className="mt-2 text-[0.58rem] uppercase tracking-[0.08em] text-[var(--text-faint)]">
                    React Native, Zustand, Supabase, JWT, WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
