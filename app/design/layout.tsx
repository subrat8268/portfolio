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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Visual Design Work — Subrat Jena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual Design Work — Subrat Jena",
    description:
      "Logos, banners, invitations, and social graphics for real clients.",
    images: ["https://mysjportfolio.vercel.app/og-image.png"],
  },
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
