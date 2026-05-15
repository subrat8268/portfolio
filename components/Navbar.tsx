"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
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
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm transition-all duration-200 ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
        style={{
          borderColor: "var(--border-subtle)",
          backgroundColor: isScrolled
            ? "color-mix(in oklab, var(--bg-page) 90%, transparent)"
            : "color-mix(in oklab, var(--bg-page) 78%, transparent)",
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-sm [color:var(--text-primary)] [font-family:var(--font-body)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
            >
              Subrat Jena
            </Link>
            <span className="text-[10px] uppercase tracking-[0.1em] [color:var(--text-muted)]">
              Frontend Developer
            </span>
          </div>

          <nav className="hidden items-center gap-8 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13px] uppercase tracking-[0.1em] [font-family:var(--font-body)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70 ${
                  item.href === "/design" && isDesignRoute
                    ? "[color:var(--text-primary)] after:w-full"
                    : "[color:var(--text-muted)] hover:[color:var(--text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/subrat-cv.pdf"
              download
              className="inline-flex items-center gap-1 rounded-sm border border-[var(--border-subtle)] px-3 py-1.5 text-[12px] uppercase tracking-[0.1em] [color:var(--text-muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:[color:var(--text-primary)]"
            >
              ↓ CV
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1 rounded-sm border border-[var(--border-subtle)] px-3 py-1.5 text-[12px] uppercase tracking-[0.1em] [color:var(--text-muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:[color:var(--text-primary)]"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsMobileOpen(true)}
            className="sm:hidden text-2xl leading-none [color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
          >
            ☰
          </button>
        </div>
      </header>

      {isMobileOpen ? (
        <div
          className="fixed inset-0 z-[60]"
          style={{ backgroundColor: "color-mix(in oklab, var(--bg-page) 95%, transparent)" }}
        >
          <div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm [color:var(--text-primary)] [font-family:var(--font-body)]">
                  Subrat Jena
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] [color:var(--text-muted)]">
                  Frontend Developer
                </span>
              </div>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileOpen(false)}
                className="text-2xl leading-none [color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
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
                  className="text-2xl uppercase tracking-[0.1em] [color:var(--text-primary)] [font-family:var(--font-display)]"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/subrat-cv.pdf"
                download
                className="text-2xl uppercase tracking-[0.1em] [color:var(--text-muted)]"
              >
                ↓ Download CV
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="text-2xl uppercase tracking-[0.1em] [color:var(--text-muted)]"
              >
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
            </nav>
          </div>
        </div>
      ) : null}

      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-sm"
        style={{
          borderColor: "var(--border-subtle)",
          backgroundColor: "color-mix(in oklab, var(--bg-elevated) 88%, transparent)",
        }}
      >
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 text-[11px] tracking-[0.08em] uppercase [color:var(--text-muted)] [font-family:var(--font-body)]">
          <span>{isDesignRoute ? "Design Work" : "Frontend Developer"}</span>
          <span>{isDesignRoute ? "2026" : new Date().getFullYear()}</span>
        </div>
      </div>
    </>
  );
}
