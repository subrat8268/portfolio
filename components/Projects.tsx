"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import DisplayHeading from "@/components/DisplayHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  impact?: string[];
  inProgress?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "AU Small Finance Bank (DEPT®)",
    category: "Enterprise · BFSI · Production",
    description:
      "Engineered site-wide search and voice search for au.bank.in, serving millions of users. Built the Branch Locator with AEM components and interactive maps. Resolved 20+ production React/AEM bugs and lifted WCAG 2.1 accessibility compliance by ~35%.",
    technologies: ["AEM", "React", "HTML/CSS", "JavaScript", "DOM APIs", "WCAG 2.1", "Responsive"],
    impact: ["10M+ users", "WCAG +35%", "20+ prod bugs fixed"],
    liveUrl: "https://au.bank.in",
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "XPharms Xchange (Rejolut)",
    category: "Startup · Web3 · B2B SaaS",
    description:
      "Architected a Next.js marketing + onboarding platform for a blockchain-based B2B cannabis marketplace. SEO-optimised with Google Search Console integration, achieving 92+ Lighthouse scores and sub-2s load times. JWT authentication and role-based access for vetted trade partners.",
    technologies: ["Next.js", "JWT", "REST APIs", "SEO", "Google Search Console", "Vercel"],
    impact: ["92+ Lighthouse", "sub-2s load", "SSR SEO"],
    liveUrl: "https://xpharmsxchange.com",
    githubUrl: null,
    featured: false,
  },
  {
    id: 3,
    title: "Research Assist — AI Copilot (Rejolut × ICRA)",
    category: "Enterprise · BFSI · Internal Tool",
    description:
      "Built a Copilot-style internal chat tool for financial analysts at ICRA (India's leading credit rating agency). Integrated 5+ REST APIs for real-time research queries. Redux state management cut analyst Q&A turnaround by ~40% for a team of 15+.",
    technologies: ["React", "Redux", "GraphQL", "REST APIs"],
    impact: ["-40% Q&A time", "15+ analysts", "5+ API integrations"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: "IndiaFirst Life — KYC Flow (DEPT®)",
    category: "Enterprise · BFSI · Production",
    description:
      "Built KYC form flows across 3 stages for IndiaFirst Life insurance. Improved form validation by ~40% and reduced payment pipeline failures by 25% through thorough Jest + React Testing Library coverage.",
    technologies: ["React", "Jest", "React Testing Library"],
    impact: ["+40% validation", "-25% payment errors"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 5,
    title: "SNOX — E-commerce Platform",
    category: "Full Stack · Personal",
    description:
      "Full-stack e-commerce platform with real-time inventory management, secure payment processing, and an admin dashboard.",
    technologies: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS", "Firebase"],
    impact: [],
    liveUrl: "https://snox.in",
    githubUrl: "https://github.com/subrat8268/snox",
    featured: false,
  },
  {
    id: 6,
    title: "KreditBook",
    category: "Mobile · Fintech · Personal",
    description:
      "Cross-platform ledger app with WhatsApp integration, role-based access control, and a Super Admin dashboard. Built solo in React Native.",
    technologies: ["React Native", "Zustand", "Supabase", "JWT", "RBAC"],
    impact: [],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    inProgress: true,
  },
];

export default function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-[var(--color-bg)] py-[clamp(5rem,8vw,9rem)]">
      <div className="mx-auto max-w-6xl px-4">
        <RevealOnScroll>
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Projects
          </p>
          <DisplayHeading className="text-[clamp(2.75rem,6vw,4rem)]">
            Selected Work
          </DisplayHeading>
        </RevealOnScroll>

        {/* Featured — AU Bank */}
        <RevealOnScroll delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-12 grid overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] lg:grid-cols-[1fr_1fr]"
          >
            {/* Visual mockup */}
            <div className="relative flex min-h-[280px] flex-col justify-between bg-[var(--color-surface-offset)] p-8">
              <span className="inline-block self-start bg-[var(--color-accent)] px-2 py-1 text-[0.6rem] uppercase tracking-[0.15em] text-white">
                ★ Featured
              </span>
              {/* Browser mockup */}
              <div className="mx-auto mt-6 w-full max-w-xs overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">
                <div className="flex h-7 items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface-offset)] px-2">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />
                  <span className="ml-2 text-[0.6rem] text-[var(--color-text-muted)]">au.bank.in</span>
                </div>
                <div className="p-3 space-y-2">
                  {["Site-wide Search", "Voice Search", "Branch Locator", "WCAG 2.1 Compliant"].map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                      <span className="text-[0.6rem] text-[var(--color-text-muted)]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Impact pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.impact?.map((imp) => (
                  <span key={imp} className="rounded-sm bg-[var(--color-accent)]/10 px-2 py-1 text-[0.6rem] text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                    {imp}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {featured.category}
              </p>
              <h3 className="[font-family:var(--font-display)] text-[clamp(1.4rem,2.8vw,1.9rem)] leading-snug text-[var(--color-text)]">
                {featured.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.technologies.map((tech) => (
                  <span key={tech} className="rounded-sm border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-4">
                {featured.liveUrl ? (
                  <Link
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text)] transition-colors duration-200 hover:border-white/40"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Site
                  </Link>
                ) : (
                  <span className="text-xs italic text-[var(--color-text-muted)]">Internal — NDA</span>
                )}
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Secondary grid */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col"
              >
                {project.inProgress ? (
                  <span className="absolute right-3 top-3 z-10 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.1em] text-[var(--color-gold)]">
                    In Progress
                  </span>
                ) : null}

                {/* Minimal visual header */}
                <div className="flex min-h-[90px] items-center justify-center bg-[var(--color-surface-offset)] px-4 py-5">
                  <span className="text-center text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-[0.95rem] leading-snug text-[var(--color-text)] [font-family:var(--font-display)]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {project.description}
                  </p>
                  {project.impact && project.impact.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {project.impact.map((imp) => (
                        <span key={imp} className="rounded-sm bg-[var(--color-accent)]/10 px-2 py-0.5 text-[0.6rem] text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                          {imp}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-sm border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-4 pt-2">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text)] transition-colors duration-200 hover:border-white/40"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </Link>
                    ) : project.inProgress ? (
                      <span className="text-xs italic text-[var(--color-text-muted)]">In development</span>
                    ) : (
                      <span className="text-xs italic text-[var(--color-text-muted)]">Internal — NDA</span>
                    )}
                    {project.githubUrl ? (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source
                      </Link>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
