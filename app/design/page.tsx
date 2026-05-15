"use client";

import Image from "next/image";
import Link from "next/link";

import DisplayHeading from "@/components/DisplayHeading";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { DesignGallery } from "@/components/DesignGallery";
import { designItems } from "@/lib/design-work";

const heroPreviews = designItems.filter(item => item.featured).slice(0, 3);

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4">
        <section className="pt-28 max-w-4xl">
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Visual Design Work
          </p>
          <DisplayHeading className="mt-3 text-[clamp(2.5rem,6vw,4.5rem)]">
            Design as a second language.
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-sm md:text-base leading-6 text-[var(--color-text-muted)]">
            I&apos;m a frontend developer who also designs. These are logos,
            banners, invitations, and social media graphics made for real
            clients, mostly in Canva.
          </p>
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">
            For my coding work, visit the{" "}
            <Link href="/" className="underline-offset-4 hover:underline hover:text-[var(--color-text)]">
              home page →
            </Link>
          </p>
          
          <div className="mt-8 flex gap-3">
            {heroPreviews.map((item) => (
              <div
                key={item.id}
                className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-[var(--color-border)]"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, 128px"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="border border-[var(--color-border)] px-4 py-4 sm:grid sm:grid-cols-3">
            <div className="py-2 sm:px-4 sm:border-r sm:border-[var(--color-border)]">
              <p className="text-sm font-medium text-[var(--color-text)]">Real client work</p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                Logos, Banners, Invitations
              </p>
            </div>
            <div className="py-2 sm:px-4 sm:border-r sm:border-[var(--color-border)]">
              <p className="text-sm font-medium text-[var(--color-text)]">Canva</p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">Primary tool</p>
            </div>
            <div className="py-2 sm:px-4">
              <p className="text-sm font-medium text-[var(--color-text)]">Mumbai</p>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">Based in</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <DesignGallery items={designItems} />
        </section>

        <section className="pb-20 pt-8">
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Need a developer who can also design?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
              I design and build — logos, launch graphics, and full UI components.
              One person, zero handoff.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 font-medium text-white transition-all duration-200 hover:bg-[var(--color-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                Get in touch
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-2 font-medium text-[var(--color-text)] transition-all duration-200 hover:border-white/40 hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                View frontend projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
