"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "/design", label: "Design Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";
    const nextTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : preferredTheme;

    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "shadow-[0_10px_30px_color-mix(in_oklab,var(--color-bg)_65%,transparent)]"
            : ""
        }`}
        style={{
          borderColor: "color-mix(in oklab, var(--border-subtle) 70%, var(--text-faint) 30%)",
          backgroundColor: isScrolled
            ? "color-mix(in oklab, var(--bg-page) 88%, transparent)"
            : "color-mix(in oklab, var(--bg-page) 84%, transparent)",
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:px-5">
          <Link
            href="/"
            className="text-[1.03rem] tracking-[-0.01em] [color:var(--text-primary)] [font-family:var(--font-display)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
          >
            Subrat Jena
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[0.78rem] uppercase tracking-[0.12em] [font-family:var(--font-body)] [color:var(--text-muted)] transition-colors duration-200 hover:[color:var(--text-primary)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isMounted
                  ? theme === "dark"
                    ? "Switch to light theme"
                    : "Switch to dark theme"
                  : "Toggle theme"
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] [color:var(--text-muted)] transition-all duration-200 hover:border-[var(--accent)] hover:[color:var(--text-primary)]"
            >
              {isMounted && theme === "dark" ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <a
              href="/subrat-cv.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2 text-[0.7rem] uppercase tracking-[0.12em] [color:var(--text-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:[color:var(--text-primary)]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <button
            type="button"
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] [color:var(--text-primary)] transition-colors duration-200 hover:border-[var(--accent)] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

        </div>
      </header>

      {isMobileOpen ? (
        <div
          className="fixed inset-0 z-[60]"
          style={{ backgroundColor: "color-mix(in oklab, var(--bg-page) 95%, transparent)" }}
        >
          <div
            id="mobile-nav-menu"
            className="mx-auto flex h-full max-w-6xl flex-col px-4 py-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm [color:var(--text-primary)] [font-family:var(--font-body)]">
                Subrat Jena
              </span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] [color:var(--text-primary)] transition-colors duration-200 hover:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
              >
                <X className="h-5 w-5" aria-hidden="true" />
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
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex items-center gap-2 text-2xl uppercase tracking-[0.1em] [color:var(--text-muted)]"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download CV
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  isMounted
                    ? theme === "dark"
                      ? "Switch to light theme"
                      : "Switch to dark theme"
                    : "Toggle theme"
                }
                className="inline-flex items-center gap-2 text-2xl uppercase tracking-[0.1em] [color:var(--text-muted)]"
              >
                {isMounted && theme === "dark" ? (
                  <Sun className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Moon className="h-5 w-5" aria-hidden="true" />
                )}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
