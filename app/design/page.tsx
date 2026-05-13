"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { DesignGallery } from "@/components/DesignGallery";
import { designItems } from "@/lib/design-work";
import Link from "next/link";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4">
        <section className="pt-28 max-w-4xl">
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
            Visual Design Work
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Design as a second language.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base leading-6 text-slate-300">
            I&apos;m a frontend developer who also designs. These are logos,
            banners, invitations, and social media graphics made for real
            clients, mostly in Canva.
          </p>
          <p className="mt-3 text-sm text-slate-400">
            For my coding work, visit the{" "}
            <Link href="/" className="underline-offset-4 hover:underline hover:text-slate-200">
              home page →
            </Link>
          </p>
        </section>

        <section className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800/70 px-4 py-4">
            <p className="text-sm font-medium text-slate-50">5+ designs</p>
            <p className="mt-1 text-xs text-slate-400">
              Logos, Banners, Invites, Social
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/70 px-4 py-4">
            <p className="text-sm font-medium text-slate-50">Canva</p>
            <p className="mt-1 text-xs text-slate-400">Primary tool</p>
          </div>
          <div className="rounded-2xl border border-slate-800/70 px-4 py-4">
            <p className="text-sm font-medium text-slate-50">Mumbai</p>
            <p className="mt-1 text-xs text-slate-400">Based in</p>
          </div>
        </section>

        <section className="mt-14">
          <DesignGallery items={designItems} />
        </section>

        <section className="pb-20 pt-8">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">
              Need a developer who can also design?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              I can handle brand touchpoints alongside code work, from launch
              graphics to simple identity systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full bg-slate-50 px-4 py-2 font-medium text-slate-950 transition-all duration-200 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Get in touch
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 font-medium text-slate-200 transition-all duration-200 hover:border-slate-500 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
