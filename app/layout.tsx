import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mysjportfolio.vercel.app"),
  title: "Subrat Jena — Frontend Developer",
  description:
    "Frontend developer with 2 years building production React and Next.js interfaces for BFSI clients at AU Small Finance Bank and ICRA. Based in Mumbai.",
  alternates: {
    canonical: "/",
  },
  themeColor: "#0a0a0a",
  openGraph: {
    title: "Subrat Jena — Frontend Developer",
    description:
      "Frontend developer with BFSI enterprise experience. Based in Mumbai.",
    url: "https://mysjportfolio.vercel.app",
    siteName: "Subrat Jena",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Subrat Jena — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subrat Jena — Frontend Developer",
    description:
      "Frontend developer with BFSI enterprise experience. Based in Mumbai.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} app-shell font-inter antialiased`}
      >
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
