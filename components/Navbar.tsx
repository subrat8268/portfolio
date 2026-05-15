"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "/design", label: "Design Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDesignRoute = pathname === "/design";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = document.documentElement.getAttribute("data-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    const nextTheme =
      stored === "light" || stored === "dark" ? stored : preferred;
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-200 ${
          isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link
            href="/"
            className="text-sm text-white/95 [font-family:var(--font-body)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Subrat Jena
          </Link>

          <nav className="hidden items-center gap-8 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[13px] uppercase tracking-[0.1em] text-white [font-family:var(--font-body)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/subrat-cv.pdf"
              download
              className="inline-flex items-center gap-1 rounded-sm border border-[var(--color-border)] px-3 py-1.5 text-[12px] uppercase tracking-[0.1em] text-white/70 transition-colors duration-200 hover:border-white/40 hover:text-white"
            >
              ↓ CV
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1 rounded-sm border border-[var(--color-border)] px-3 py-1.5 text-[12px] uppercase tracking-[0.1em] text-white/70 transition-colors duration-200 hover:border-white/40 hover:text-white"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsMobileOpen(true)}
            className="sm:hidden text-2xl leading-none text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            ☰
          </button>
        </div>
      </header>

      {isMobileOpen ? (
        <div className="fixed inset-0 z-[60] bg-[var(--color-bg)]">
          <div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white [font-family:var(--font-body)]">
                Subrat Jena
              </span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl leading-none text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                ×
              </button>
            </div>

            <nav className="mt-16 flex flex-1 flex-col justify-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl uppercase tracking-[0.1em] text-white [font-family:var(--font-display)]"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/subrat-cv.pdf"
                download
                className="text-2xl uppercase tracking-[0.1em] text-[var(--color-text-muted)]"
              >
                ↓ Download CV
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="text-2xl uppercase tracking-[0.1em] text-[var(--color-text-muted)]"
              >
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
            </nav>
          </div>
        </div>
      ) : null}

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 text-[11px] tracking-[0.08em] text-[var(--color-text-muted)] uppercase [font-family:var(--font-body)]">
          <span>
            {isDesignRoute
              ? "Design Work"
              : "Frontend Developer · React · Next.js · React Native"}
          </span>
          <span>{isDesignRoute ? "2026" : new Date().getFullYear()}</span>
        </div>
      </div>
    </>
  );
}
