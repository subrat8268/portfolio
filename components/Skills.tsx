import Image from "next/image";

import DisplayHeading from "@/components/DisplayHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

type Skill = {
  name: string;
  icon: string;
  invert?: boolean;
};

type SkillCategory = {
  label: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs/000000",
        invert: true,
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      { name: "AEM", icon: "/icons/aem-icon.svg" },
    ],
  },
  {
    label: "Mobile & State",
    skills: [
      {
        name: "RN",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
      { name: "Zustand", icon: "https://cdn.simpleicons.org/npm/CB3837" },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
    ],
  },
  {
    label: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodejs/339933" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      {
        name: "Vercel",
        icon: "https://cdn.simpleicons.org/vercel/000000",
        invert: true,
      },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-b border-[var(--color-divider)] bg-[var(--color-surface)] py-[clamp(4rem,8vw,7rem)]"
    >
      <div className="mx-auto max-w-6xl px-4">
        <RevealOnScroll>
          <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--color-primary)]">
            Technical Skills
          </p>
          <DisplayHeading className="text-[clamp(2.5rem,5vw,3.5rem)]">
            What I build with.
          </DisplayHeading>
          <p className="mt-3 mb-10 max-w-[54ch] text-sm leading-relaxed text-[var(--color-text-muted)]">
            The stack behind the projects above.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <RevealOnScroll key={category.label} delay={catIndex * 0.08}>
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
                <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[var(--color-text-faint)]">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-icon-card flex min-w-[64px] cursor-default flex-col items-center gap-1 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-3 transition-all duration-[180ms]"
                    >
                      <Image
                        src={skill.icon}
                        alt=""
                        aria-hidden="true"
                        width={24}
                        height={24}
                        unoptimized
                        style={
                          skill.invert ? { filter: "invert(1)" } : undefined
                        }
                      />
                      <span className="whitespace-nowrap text-[10px] font-semibold text-[var(--color-text-muted)]">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
