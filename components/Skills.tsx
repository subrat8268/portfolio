import DisplayHeading from "@/components/DisplayHeading";

const skillGroups = [
  {
    group: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Framer Motion",
    ],
  },
  {
    group: "Backend & Data",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "Firebase"],
  },
  {
    group: "Design & Visual",
    skills: [
      "Canva",
      "Figma (basic)",
      "UI/UX principles",
      "Brand identity",
      "Print design",
    ],
  },
  {
    group: "Tools & Workflow",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[var(--color-bg)] py-[clamp(5rem,8vw,9rem)]">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          Skills
        </p>
        <DisplayHeading className="text-[clamp(2.75rem,6vw,4rem)]">
          What I work with.
        </DisplayHeading>

        <dl className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {skillGroups.map(({ group, skills }) => (
            <div key={group}>
              <dt className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {group}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
