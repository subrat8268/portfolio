import Link from "next/link";

import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Design Work", href: "/design" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/subrat8268",
      },
      { name: "GitHub", href: "https://github.com/subrat8268" },
      { name: "Email", href: "mailto:subrato8268@gmail.com" },
    ],
  };

  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-3xl [font-family:var(--font-display)] text-[var(--color-text)]"
            >
              Subrat Jena
            </Link>
            <p className="mt-4 max-w-md leading-relaxed text-[var(--color-text-muted)]">
              Frontend Developer — React · Next.js · TypeScript · React Native
            </p>
            <p className="mt-2 max-w-md leading-relaxed text-[var(--color-text-muted)]">
              Building production interfaces for BFSI clients. Based in Mumbai.
            </p>
            <div className="mt-6">
              <Link
                href="mailto:subrato8268@gmail.com"
                className="text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
              >
                subrato8268@gmail.com
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg [font-family:var(--font-display)]">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg [font-family:var(--font-display)]">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-[var(--color-border)] pt-8 md:flex-row">
          <div className="text-[var(--color-text-muted)]">
            <p>&copy; {currentYear} Subrat Jena</p>
            <p className="mt-1">Made with ❤️ by Subrat Jena</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
