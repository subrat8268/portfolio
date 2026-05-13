import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen page-enter">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* Design crosslink */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)] py-14">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-muted)] mb-2">
              Also
            </p>
            <h3 className="[font-family:var(--font-display)] text-[clamp(1.5rem,3vw,2rem)] text-[var(--color-text)]">
              I also design.
            </h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)] max-w-md">
              Logos, event banners, invitations, and social graphics — built for real clients.
            </p>
          </div>
          <Link
            href="/design"
            className="shrink-0 inline-flex items-center gap-2 border border-[var(--color-border)] px-5 py-2.5 text-sm text-[var(--color-text)] hover:border-white/40 hover:text-white transition-all duration-200"
          >
            View Design Work →
          </Link>
        </div>
      </section>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
