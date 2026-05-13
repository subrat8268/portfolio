import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Design Work — Subrat Jena",
  description:
    "Logos, event banners, invitations, and social media graphics by Subrat Jena — a Mumbai-based frontend developer with a strong visual design side.",
  openGraph: {
    title: "Visual Design Work — Subrat Jena",
    description: "Logos, event banners, invitations, and social media graphics.",
    url: "https://subratjena.com/design",
  },
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
