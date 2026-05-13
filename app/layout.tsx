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
  title: "Subrat Jena — Frontend Developer & Designer",
  description:
    "Frontend developer with BFSI enterprise experience at AU Small Finance Bank and ICRA. Based in Mumbai. Also a visual designer.",
  openGraph: {
    title: "Subrat Jena — Frontend Developer & Designer",
    description:
      "Frontend developer with BFSI enterprise experience. Based in Mumbai.",
    url: "https://subratjena.com",
    siteName: "Subrat Jena",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subrat Jena — Frontend Developer & Designer",
    description:
      "Frontend developer with BFSI enterprise experience. Based in Mumbai.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
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
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
