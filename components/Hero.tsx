"use client";

import Image from "next/image";

import DisplayHeading from "@/components/DisplayHeading";
import { designItems } from "@/lib/design-work";

export default function Hero() {
  const heroImages = designItems.slice(0, 3);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[var(--color-bg)] pt-20">
      <div className="mx-auto flex min-h-[100dvh] max-w-5xl items-center justify-center px-4 pb-24">
        <div className="relative flex w-full flex-col items-center">
          <div className="relative h-[340px] w-[320px] sm:h-[420px] sm:w-[420px]">
            {heroImages.map((item, index) => {
              const rotates = ["-rotate-6", "rotate-0", "rotate-6"];
              const offsets = ["left-0 top-12", "left-[48px] top-0", "left-[108px] top-16"];

              return (
                <div
                  key={item.id}
                  className={`absolute h-[300px] w-[220px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl ${rotates[index] ?? "rotate-0"} ${offsets[index] ?? "left-0 top-0"}`}
                >
                  <Image
                    src={item.images[0] ?? item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={index === 1}
                  />
                </div>
              );
            })}

            <svg
              viewBox="0 0 100 100"
              className="absolute -right-14 top-6 h-[60px] w-[60px] text-white"
              aria-hidden="true"
            >
              <path
                d="M50 6 L58 34 L86 22 L66 44 L94 50 L66 56 L86 78 L58 66 L50 94 L42 66 L14 78 L34 56 L6 50 L34 44 L14 22 L42 34 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="-mt-10 text-center">
            <DisplayHeading className="text-[clamp(5rem,9vw,8rem)]">
              Creative
            </DisplayHeading>
            <DisplayHeading className="-mt-3 text-[clamp(5.5rem,10vw,8.8rem)]">
              Portfolio
            </DisplayHeading>
          </div>
        </div>
      </div>
    </section>
  );
}
