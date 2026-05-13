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
  const totalSkillCount = skillGroups.reduce(
    (acc, group) => acc + group.skills.length,
    0
  );

  return (
    <section id="skills" className="bg-[var(--color-bg)] py-[clamp(5rem,8vw,9rem)]">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          Skills
        </p>
        <DisplayHeading className="text-[clamp(2.75rem,6vw,4rem)]">
          What I work with.
        </DisplayHeading>

        <p className="mt-2 mb-8 text-[0.65rem] text-[var(--color-text-muted)]">
          {totalSkillCount} technologies &amp; tools
        </p>

        <dl className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {skillGroups.map(({ group, skills }, index) => (
            <div key={group}>
              <dt className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {group}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {skills.map((skill) => {
                  const isFrontendPrimary =
                    group === "Frontend" &&
                    ["React", "Next.js", "TypeScript"].includes(skill);

                  return (
                    <span
                      key={skill}
                      className={`rounded-sm border px-3 py-1.5 text-xs text-[var(--color-text-muted)] ${
                        isFrontendPrimary
                          ? "border-white/30"
                          : "border-[var(--color-border)]"
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </dd>
              {index < skillGroups.length - 1 ? (
                <hr className="my-2 border-[var(--color-border)]" />
              ) : null}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
