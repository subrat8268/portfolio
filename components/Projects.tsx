"use client";

import Link from "next/link";
import Image from "next/image";
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
  image: string;
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "AU Small Finance Bank — Internal Tools",
    category: "Enterprise · BFSI",
    description:
      "Built and maintained internal web interfaces for AU Small Finance Bank's operations team. Worked on form-heavy data-entry tools, report dashboards, and UI components used by branch staff across India. Focused on performance, accessibility, and browser compatibility under enterprise constraints.",
    technologies: [
      "React",
      "JavaScript",
      "REST APIs",
      "HTML/CSS",
      "Internal Design System",
    ],
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "ICRA — Rating Report Interface",
    category: "Enterprise · FinTech",
    description:
      "Developed UI components for ICRA's internal rating report generation workflow. Worked on data-dense table layouts, print-optimised stylesheets, and accessibility improvements for screen reader compatibility.",
    technologies: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Print CSS",
      "Accessibility",
    ],
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 3,
    title: "SNOX — E-commerce Platform",
    category: "Full Stack",
    description:
      "Full-stack e-commerce platform with real-time inventory management, secure payment processing, and an admin dashboard built for a product business.",
    technologies: ["React", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://snox.in",
    githubUrl: "https://github.com/subrat8268/snox",
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.find((project) => project.featured)!;
  const rest = projects.filter((project) => !project.featured);

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

        <RevealOnScroll delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-12 grid overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] lg:grid-cols-[1fr_1fr]"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-surface-offset)]">
              <div className="relative h-full w-full overflow-hidden">
                <motion.div
                  className="h-full w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                </motion.div>
              </div>
              <span className="absolute left-3 top-3 bg-[var(--color-accent)] px-2 py-1 text-[0.6rem] uppercase tracking-[0.15em] text-white">
                ★ Featured
              </span>
            </div>

            <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {featured.category}
              </p>
              <h3 className="[font-family:var(--font-display)] text-[clamp(1.5rem,3vw,2rem)] leading-snug text-[var(--color-text)]">
                {featured.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                  >
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
                    Live Demo
                  </Link>
                ) : (
                  <div>
                    <span className="text-xs italic text-[var(--color-text-muted)]">
                      Internal — NDA
                    </span>
                    <span className="mt-1 block text-[0.65rem] italic text-[var(--color-text-muted)]">
                      Screenshots withheld — enterprise NDA
                    </span>
                  </div>
                )}
                {featured.githubUrl ? (
                  <Link
                    href={featured.githubUrl}
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
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-surface-offset)]">
                  <div className="relative h-full w-full overflow-hidden">
                    <motion.div
                      className="h-full w-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    {project.category}
                  </p>
                  <h3 className="text-lg text-[var(--color-text)] [font-family:var(--font-display)]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 flex items-center gap-4">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text)] transition-colors duration-200 hover:border-white/40"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </Link>
                    ) : (
                      <div>
                        <span className="text-xs italic text-[var(--color-text-muted)]">
                          Internal — NDA
                        </span>
                        <span className="mt-1 block text-[0.65rem] italic text-[var(--color-text-muted)]">
                          Screenshots withheld — enterprise NDA
                        </span>
                      </div>
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
