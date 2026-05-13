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
              Frontend developer with 2 years building production React and
              Next.js applications for BFSI clients — including AU Small
              Finance Bank and ICRA. I focus on performance, accessibility, and
              clean component architecture.
            </p>
            <p className="mt-4">
              I also bring design sensibility to every interface I ship. Logos,
              banners, and social graphics are a side skill — built for real
              clients using Canva. Both disciplines inform how I think about
              UI.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="border border-[var(--color-border)] bg-white/5 p-3">
            {/* TODO: Replace with real personal photo */}
            <div className="relative aspect-[6/7] w-full overflow-hidden">
              <Image
                src="/about/photo-1.svg"
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
                src="/about/photo-2.svg"
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
