import DisplayHeading from "@/components/DisplayHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

const skillGroups = [
  {
    group: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Framer Motion", "React Native"],
  },
  {
    group: "Backend & Data",
    skills: ["Node.js", "Express", "MongoDB", "GraphQL", "REST APIs", "Firebase"],
  },
  {
    group: "State & Testing",
    skills: ["Redux", "Zustand", "Jest", "React Testing Library"],
  },
  {
    group: "Tools & Platform",
    skills: ["AEM", "Git", "GitHub", "Vercel", "Postman", "Google Search Console"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[var(--color-bg)] py-[clamp(5rem,8vw,9rem)]">
      <div className="mx-auto max-w-6xl px-4">
        <RevealOnScroll>
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Skills
          </p>
          <DisplayHeading className="text-[clamp(2.75rem,6vw,4rem)]">
            What I work with.
          </DisplayHeading>
        </RevealOnScroll>

        <dl className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {skillGroups.map(({ group, skills }, index) => (
            <RevealOnScroll key={group} delay={index * 0.08}>
              <div>
                <dt className="mb-4 text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {group}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {skills.map((skill) => {
                    const isPrimary =
                      group === "Frontend" &&
                      ["React", "Next.js", "TypeScript", "React Native"].includes(skill);
                    return (
                      <span
                        key={skill}
                        className={`rounded-sm border px-3 py-1.5 text-xs text-[var(--color-text-muted)] ${
                          isPrimary
                            ? "border-white/30 text-white/80"
                            : "border-[var(--color-border)]"
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </dd>
                {index < skillGroups.length - 1 ? (
                  <hr className="mt-8 border-[var(--color-border)]" />
                ) : null}
              </div>
            </RevealOnScroll>
          ))}
        </dl>
      </div>
    </section>
  );
}
