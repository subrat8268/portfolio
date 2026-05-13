import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Visual Design Work — Subrat Jena",
  description:
    "Logos, event banners, invitations, and social media graphics by Subrat Jena, a Mumbai-based frontend developer with a strong visual design side.",
};

export default function DesignLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
