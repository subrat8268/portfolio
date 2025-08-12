"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="container mx-auto max-w-[1200px] px-4">
      <section className="hero-section relative flex justify-center items-center gap-20 my-16 px-4 pb-32 max-md:gap-5 max-md:pb-16 max-md:flex-col">
        <div className="faded-text select-none text-[7em] text-gray-200 absolute -bottom-[18%] -left-[5%] font-bold transition-all duration-[3s] max-md:text-[3.5em] max-md:-bottom-[10%]">
          Subrat Jena
        </div>

        <div className="hero-section-left flex flex-col justify-center gap-8 max-md:gap-5">
          <h1 className="hero-section-heading text-[35px] text-[#343d68] font-medium max-md:text-[15px]">
            Hi!! Subrat Jena
          </h1>
          <div className="hero-section-sub-heading text-[45px] leading-[45px] max-md:text-[20px] max-md:leading-[25px]">
            I am a <span className="role text-[#4e45d5] font-extrabold"></span>
          </div>
          <p className="hero-section-desc mt-4 w-[70%] font-medium max-md:text-[10px] max-md:w-[90%]">
            I&apos;m a software developer and here is my portfolio website. Here
            you&apos;ll learn about my journey as a software developer
          </p>
          <Link
            href="https://www.linkedin.com/in/subrat-jena-8a69a8194/"
            className="btn-pink inline-block w-[220px] h-[25px] tracking-[0.5em] text-center bg-[#e84949] py-3 px-9 text-[#faebd7] cursor-pointer font-extrabold text-lg shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] relative z-[1] rounded-[50px] uppercase overflow-hidden no-underline hover:text-white transition-colors duration-1000 max-md:w-[50px] max-md:h-5 max-md:text-[11px] max-md:py-1 max-md:px-2"
            style={{
              background:
                "linear-gradient(45deg, #e84949 0%, #e84949 50%, #44caf7 50%, #44caf7 100%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "right bottom",
              transition: "all 1s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = "left bottom";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = "right bottom";
            }}
          >
            Hire me
          </Link>
        </div>

        <div className="hero-section-right relative">
          {/* Animated Icons */}
          <div className="absolute icons icon-dots z-[9] -bottom-4 right-0 animate-bounce">
            <Image
              src="/images/userAsset/dots.png"
              alt="Decorative dots"
              width={50}
              height={50}
            />
          </div>
          <div
            className="absolute icons icon-cube z-[9] -top-3 right-4 animate-spin"
            style={{ animationDuration: "4s" }}
          >
            <Image
              src="/images/userAsset/cube.png"
              alt="Decorative cube"
              width={32}
              height={32}
            />
          </div>
          <div className="absolute icons icon-circle z-[9] -bottom-3 left-4 animate-pulse">
            <Image
              src="/images/userAsset/circle.png"
              alt="Decorative circle"
              width={16}
              height={16}
            />
          </div>
          <div className="absolute icons icon-zigzag z-[9] top-4 -left-1 animate-pulse">
            <Image
              src="/images/userAsset/zigzags.png"
              alt="Decorative zigzag"
              width={80}
              height={80}
            />
          </div>
          <div className="absolute icons icon-plus z-[9] -top-4 left-1/2 animate-bounce">
            <Image
              src="/images/userAsset/plus.png"
              alt="Decorative plus"
              width={24}
              height={24}
            />
          </div>

          <div className="userImage p-8 grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-110 max-md:p-2">
            <Image
              src="/images/userAsset/UserImage.png"
              alt="Subrat Jena - Full Stack Developer"
              width={256}
              height={256}
              className="w-64 h-auto max-md:w-32"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
