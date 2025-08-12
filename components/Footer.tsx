"use client";

import Link from "next/link";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com/subrat8268" },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/subrat-jena-8a69a8194/",
      },
      { name: "Email", href: "mailto:subrato8268@gmail.com" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-poppins font-bold text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Subrat Jena
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
              Full Stack Developer passionate about creating exceptional digital
              experiences through innovative web development and thoughtful
              design.
            </p>
            <div className="mt-6">
              <Link
                href="mailto:subrato8268@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                subrato8268@gmail.com
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Subrat Jena</span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
