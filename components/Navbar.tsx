"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Download } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "/design", label: "Design Work" },
  { href: "#contact", label: "Contact" },
];

const RING_R = 22;
const CIRCUMFERENCE = 2 * Math.PI * RING_R;

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
function ArrowRightSmIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const drawerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const nextTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : preferredTheme;
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    setIsMounted(true);

    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const sy = window.scrollY;
        setIsScrolled(sy > 50);
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(docH > 0 ? Math.min(sy / docH, 1) : 0);
        const sectionIds = navItems
          .map((i) => i.href.replace("#", ""))
          .filter((h) => !h.startsWith("/"));
        let current = "";
        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (el && sy >= el.offsetTop - 120) current = id;
        });
        setActiveSection(current);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && isMobileOpen) closeDrawer(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMobileOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  const openDrawer = () => setIsMobileOpen(true);
  const closeDrawer = () => setIsMobileOpen(false);
  const isActive = (href: string) => href === `#${activeSection}`;

  const ringOffset = CIRCUMFERENCE * (1 - scrollProgress);
  const ringVisible = scrollProgress > 0.05;
  const pct = Math.round(scrollProgress * 100);

  return (
    <>
      {/* ── SCROLL PROGRESS LINE ── */}
      <div
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        className="fixed left-0 top-16 z-[51] h-[2px] origin-left will-change-[width]"
        style={{
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(90deg, var(--accent) 0%, #ff9a8b 100%)",
          boxShadow:
            "0 0 10px 2px color-mix(in oklab, var(--accent) 60%, transparent)," +
            "0 0 22px 4px color-mix(in oklab, var(--accent) 22%, transparent)",
          borderRadius: "0 2px 2px 0",
          transition: "width 120ms cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      />

      {/* ── RING FAB ── */}
      <button
        type="button"
        aria-label={`Back to top — ${pct}% read`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group fixed bottom-6 right-6 z-[60] h-12 w-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
        style={{
          opacity: ringVisible ? 1 : 0,
          transform: ringVisible ? "scale(1) translateY(0)" : "scale(0.82) translateY(10px)",
          pointerEvents: ringVisible ? "all" : "none",
          transition:
            "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)," +
            "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform, opacity",
        }}
      >
        <svg
          width="48" height="48"
          viewBox="0 0 48 48"
          className="rotate-[-90deg]"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r={RING_R} fill="none" stroke="var(--border-subtle)" strokeWidth="3" />
          <circle
            cx="24" cy="24" r={RING_R}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={ringOffset}
            style={{
              transition: "stroke-dashoffset 120ms cubic-bezier(0.25, 1, 0.5, 1)",
              filter: "drop-shadow(0 0 5px color-mix(in oklab, var(--accent) 50%, transparent))",
              willChange: "stroke-dashoffset",
            }}
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center [color:var(--text-muted)] transition-opacity duration-200 group-hover:opacity-0"
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 13V3M3 8l5-5 5 5" />
          </svg>
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center text-[0.58rem] font-semibold [color:var(--text-primary)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden="true"
        >
          {pct}%
        </span>
      </button>

      {/* ── HEADER ── */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "shadow-[0_12px_34px_color-mix(in_oklab,var(--color-bg)_62%,transparent),0_2px_0_color-mix(in_oklab,var(--color-primary)_22%,transparent)]"
            : ""
        }`}
        style={{
          borderColor: "color-mix(in oklab, var(--border-subtle) 70%, var(--text-faint) 30%)",
          backgroundColor: isScrolled
            ? "color-mix(in oklab, var(--bg-page) 90%, transparent)"
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

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[0.72rem] font-medium uppercase tracking-[0.13em] [font-family:var(--font-body)] transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-[var(--accent)] after:transition-all after:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70 ${
                  isActive(item.href)
                    ? "[color:var(--text-primary)] after:w-full"
                    : "[color:var(--text-muted)] after:w-0 hover:[color:var(--text-primary)] hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isMounted ? (theme === "dark" ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] [color:var(--text-muted)] transition-all duration-200 hover:border-[var(--accent)] hover:[color:var(--text-primary)] active:scale-90"
            >
              {isMounted && (theme === "dark" ? <SunIcon /> : <MoonIcon />)}
            </button>
            <a
              href="/subrat-cv.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--accent)] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white shadow-[0_2px_8px_color-mix(in_oklab,var(--accent)_22%,transparent)] transition-all duration-200 hover:-translate-y-px hover:bg-[var(--accent-hover,#ff7460)] hover:shadow-[0_6px_16px_color-mix(in_oklab,var(--accent)_32%,transparent)] active:translate-y-0"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isMounted ? (theme === "dark" ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] [color:var(--text-muted)] transition-all duration-200 hover:border-[var(--accent)] hover:[color:var(--text-primary)] active:scale-90"
            >
              {isMounted && (theme === "dark" ? <SunIcon /> : <MoonIcon />)}
            </button>
            <button
              type="button"
              aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-drawer"
              onClick={isMobileOpen ? closeDrawer : openDrawer}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] [color:var(--text-primary)] transition-colors duration-200 hover:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70"
            >
              <div className="flex flex-col gap-[5px] w-[18px]">
                <span className="block h-[1.5px] w-full rounded-sm bg-current origin-center transition-transform duration-300" style={{ transform: isMobileOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
                <span className="block h-[1.5px] w-full rounded-sm bg-current transition-all duration-200" style={{ opacity: isMobileOpen ? 0 : 1, transform: isMobileOpen ? "scaleX(0)" : "none" }} />
                <span className="block h-[1.5px] w-full rounded-sm bg-current origin-center transition-transform duration-300" style={{ transform: isMobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* ── BACKDROP ── */}
      <div
        aria-hidden="true"
        onClick={closeDrawer}
        className="fixed inset-0 top-16 z-[48] transition-opacity duration-300 md:hidden"
        style={{
          background: "oklch(0 0 0 / 0.45)",
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? "all" : "none",
        }}
      />

      {/* ── MOBILE SLIDE-DOWN DRAWER ── */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed left-0 right-0 top-16 z-[49] border-b border-[var(--border-subtle)] backdrop-blur-xl transition-[transform,opacity] duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden"
        style={{
          backgroundColor: "color-mix(in oklab, var(--bg-page) 97%, transparent)",
          transform: isMobileOpen ? "translateY(0)" : "translateY(-8px)",
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? "all" : "none",
          maxHeight: "calc(100dvh - 64px)",
          overflowY: "auto",
        }}
      >
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-6">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDrawer}
                className={`group flex items-center justify-between border-b py-4 [font-family:var(--font-display)] text-[1.6rem] tracking-[-0.01em] transition-all duration-200 last:border-none hover:pl-1 ${
                  isActive(item.href)
                    ? "[color:var(--accent)] border-[color-mix(in_oklab,var(--border-subtle)_50%,transparent)]"
                    : "[color:var(--text-primary)] border-[color-mix(in_oklab,var(--border-subtle)_50%,transparent)] hover:[color:var(--accent)]"
                }`}
                style={{
                  opacity: isMobileOpen ? 1 : 0,
                  transform: isMobileOpen ? "none" : "translateX(-10px)",
                  transition: `color 200ms, padding 200ms, opacity 250ms cubic-bezier(0.16,1,0.3,1) ${60 + i * 40}ms, transform 250ms cubic-bezier(0.16,1,0.3,1) ${60 + i * 40}ms`,
                }}
              >
                {item.label}
                <span className="text-[var(--text-faint)] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                  <ArrowRightSmIcon />
                </span>
              </Link>
            ))}
          </nav>
          <a
            href="/subrat-cv.pdf"
            download
            onClick={closeDrawer}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_4px_16px_color-mix(in_oklab,var(--accent)_28%,transparent)] transition-all duration-200 hover:bg-[var(--accent-hover,#ff7460)] active:scale-95"
            style={{
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? "translateY(0)" : "translateY(6px)",
              transition: `opacity 250ms cubic-bezier(0.16,1,0.3,1) 280ms, transform 250ms cubic-bezier(0.16,1,0.3,1) 280ms, background 200ms`,
            }}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
