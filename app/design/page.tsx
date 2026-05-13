"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { designItems } from "@/lib/design-work";
import Image from "next/image";
import Link from "next/link";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-28 pb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Design Gallery
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold md:max-w-3xl leading-tight">
          Visual design & Canva work that supports my frontend development.
        </h1>
        <p className="mt-4 text-sm md:text-base text-slate-300 md:max-w-2xl">
          I&apos;m a frontend developer first. But I also design logos, social media
          posts, brochures, and marketing visuals so that the products I build
          look as good as they feel to use.
        </p>
        <p className="mt-2 text-xs md:text-sm text-slate-400">
          This page focuses only on the creative side. For coding projects,
          revisit the <Link href="/" className="underline underline-offset-4">home page</Link>.
        </p>
      </section>

      {/* Featured strip */}
      <section className="max-w-5xl mx-auto px-4 pb-6">
        <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-300">
          <div className="border border-slate-800/70 rounded-xl p-4 bg-slate-900/40">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
              Approach
            </p>
            <p>
              Layouts built on simple grids, consistent spacing, and a clear
              visual rhythm that feels intentional rather than decorative.
            </p>
          </div>
          <div className="border border-slate-800/70 rounded-xl p-4 bg-slate-900/40">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
              Focus
            </p>
            <p>
              Fast, practical design work in Canva that founders and small teams
              can actually ship across web, social, and print.
            </p>
          </div>
          <div className="border border-slate-800/70 rounded-xl p-4 bg-slate-900/40">
            <p className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
              Bonus for dev
            </p>
            <p>
              When I build a product, I can also handle brand touchpoints like
              hero graphics, launch kits, and quick marketing collateral.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
            Selected work
          </h2>
          <p className="text-xs text-slate-500">
            Placeholders for now — replace thumbnails with your real Canva
            exports.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designItems.map((item) => (
            <article
              key={item.id}
              className="group border border-slate-800/70 bg-slate-900/40 rounded-xl overflow-hidden flex flex-col hover:border-slate-500/80 hover:bg-slate-900/80 transition-colors duration-200"
            >
              <div className="relative w-full h-44 bg-slate-900">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
                    {item.type}
                  </p>
                  <p className="text-[0.65rem] text-slate-500">
                    {item.tags.slice(0, 2).join(" • ")}
                  </p>
                </div>
                <h3 className="text-sm font-medium text-slate-50 line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 line-clamp-3">
                  {item.description}
                </p>
                <p className="mt-3 text-[0.65rem] text-slate-500">
                  Tools: {item.tools.join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="border border-slate-800/80 rounded-2xl bg-slate-900/60 px-6 py-8 md:px-8 md:py-10 text-sm">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">
            Next steps
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Need a developer who can also handle your visuals?
          </h2>
          <p className="text-slate-300 mb-4 max-w-2xl">
            For most projects, I focus on frontend development and product UI.
            But when needed, I can also design supporting assets — from logo
            concepts and hero banners to social launch kits.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full px-4 py-2 bg-slate-50 text-slate-900 font-medium hover:bg-slate-200 transition-colors"
            >
              Contact me about a project
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full px-4 py-2 border border-slate-600 text-slate-200 hover:border-slate-300 hover:text-slate-50 transition-colors"
            >
              View frontend projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
