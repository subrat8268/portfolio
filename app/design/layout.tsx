import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Design Work — Subrat Jena",
  description:
    "Logos, event banners, invitations, and social graphics for real clients. Frontend developer with a design side, based in Mumbai.",
  alternates: {
    canonical: "/design",
  },
  openGraph: {
    title: "Visual Design Work — Subrat Jena",
    description:
      "Logos, event banners, invitations, and social graphics for real clients. Frontend developer with a design side, based in Mumbai.",
    url: "https://mysjportfolio.vercel.app/design",
    images: [
      {
        url: "/og-design.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
