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
  title: "Subrat Jena - Full Stack Developer & Creative Designer",
  description:
    "Innovative Full Stack Developer specializing in React, Node.js, and modern web technologies. Creating digital experiences that matter.",
  keywords:
    "Subrat Jena, Full Stack Developer, React Developer, Web Developer, Frontend Developer, Portfolio, JavaScript, Node.js, MongoDB, Web Design",
  authors: [{ name: "Subrat Jena" }],
  creator: "Subrat Jena",
  openGraph: {
    title: "Subrat Jena - Full Stack Developer & Creative Designer",
    description:
      "Innovative Full Stack Developer creating digital experiences that matter.",
    url: "https://subratjena.com",
    siteName: "Subrat Jena Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subrat Jena - Full Stack Developer & Creative Designer",
    description:
      "Innovative Full Stack Developer creating digital experiences that matter.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
