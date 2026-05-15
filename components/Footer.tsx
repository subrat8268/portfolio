import Link from "next/link";

import ScrollToTopButton from "@/components/ScrollToTopButton";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/subrat8268" },
  { name: "GitHub", href: "https://github.com/subrat8268" },
  { name: "Email", href: "mailto:subrato8268@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <Link
            href="/"
            className="text-2xl [font-family:var(--font-display)] text-[var(--color-text)]"
          >
            Subrat Jena
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {currentYear} Subrat Jena
          </p>
          
          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
}
