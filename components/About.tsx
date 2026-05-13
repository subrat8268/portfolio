"use client";

import Image from "next/image";

import DisplayHeading from "@/components/DisplayHeading";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg)] py-[clamp(5rem,8vw,9rem)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[40%_60%] lg:items-center">
        <div>
          <DisplayHeading className="text-[clamp(2.75rem,6vw,4rem)]">
            About Me
          </DisplayHeading>
          <div className="mt-6 space-y-5 text-[15px] leading-[1.7] text-[var(--color-text)] [font-family:var(--font-body)]">
            <p>
              I build modern web interfaces and also design the visual assets
              that support them. My workflow blends frontend engineering with
              practical design decisions so products feel consistent from first
              click to final launch.
            </p>
            <p>
              Most client work starts with strategy and structure, then moves
              into UI execution, campaign graphics, and identity refinements. I
              focus on clarity, hierarchy, and details that make a brand feel
              intentional.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="border border-[var(--color-border)] bg-white/5 p-3">
            {/* TODO: Replace with real personal photo */}
            <div className="relative aspect-[6/7] w-full overflow-hidden">
              <Image
                src="https://picsum.photos/seed/about1/600/700"
                alt="About photo one"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-[var(--color-accent)] p-3">
            {/* TODO: Replace with real personal photo */}
            <div className="relative aspect-[6/7] w-full overflow-hidden border border-white/20">
              <Image
                src="https://picsum.photos/seed/about2/600/700"
                alt="About photo two"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
