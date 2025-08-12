"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto max-w-[1200px] px-4">
      <nav
        className="navbar flex justify-between items-center pt-4"
        style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
      >
        <div className="logo-container flex justify-center items-center">
          <Image
            src="/images/userAsset/NavLogo.jpg"
            alt="Subrat Jena Logo"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <div className="logo-text ml-2 tracking-wide text-[28px] font-semibold">
            ubrat Jena
          </div>
        </div>

        <div className="nav-items flex justify-center items-center gap-8 px-16 max-md:px-0 max-md:gap-4 max-md:flex-col max-md:mt-4">
          <div className="text-xl cursor-pointer max-md:text-[17px]">
            <Link
              href="#projects"
              className="text-black no-underline hover:font-bold hover:text-[#e84949] transition-all duration-1000"
            >
              Projects
            </Link>
          </div>
          <div className="text-xl cursor-pointer max-md:text-[17px]">
            <Link
              href="#skills"
              className="text-black no-underline hover:font-bold hover:text-[#e84949] transition-all duration-1000"
            >
              Skills
            </Link>
          </div>
          <div className="text-xl cursor-pointer max-md:text-[17px]">
            <Link
              href="mailto:subrato8268@gmail.com"
              className="text-black no-underline hover:font-bold hover:text-[#e84949] transition-all duration-1000"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
