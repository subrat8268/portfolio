import Image from "next/image";
import Link from "next/link";

import DisplayHeading from "@/components/DisplayHeading";

const contactItems = [
  {
    label: "Email",
    value: "subrato8268@gmail.com",
    href: "mailto:subrato8268@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+91 82680 17431",
    href: "https://wa.me/918268017431",
  },
  {
    label: "Instagram",
    value: "@subrat.jena",
    href: "https://instagram.com/subrat.jena",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-bg)] py-[clamp(5rem,8vw,9rem)]"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid overflow-hidden border border-[var(--color-border)] lg:grid-cols-2">
          <div className="bg-[var(--color-bg)] p-8 md:p-12">
            <DisplayHeading className="text-[clamp(2.75rem,6vw,4rem)]">
              Contact
            </DisplayHeading>
            <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-[var(--color-text)] [font-family:var(--font-body)]">
              Let&apos;s build something meaningful where design direction and
              frontend execution stay in sync from day one.
            </p>

            <ul className="mt-8 space-y-5 border-l-2 border-white/30 pl-5">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {item.label}
                  </p>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-1 inline-block text-[15px] text-[var(--color-text)] hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--color-accent)] p-0">
            <div className="relative h-full min-h-[420px] w-full overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Contact visual"
                fill
                className="object-cover shadow-[-30px_0_50px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
