"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "Creative Designer",
      "Frontend Specialist",
      "Problem Solver",
    ];
    let currentRole = 0;
    let currentChar = 0;
    let isDeleting = false;

    function type() {
      if (!typedRef.current) return;

      const current = roles[currentRole];

      if (isDeleting) {
        typedRef.current.textContent = current.substring(0, currentChar - 1);
        currentChar--;
      } else {
        typedRef.current.textContent = current.substring(0, currentChar + 1);
        currentChar++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentChar === current.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold text-gray-900 leading-tight">
              {`Hi, I'm`}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Subrat Jena
              </span>
            </h1>
            <div className="text-2xl md:text-4xl font-poppins font-medium text-gray-700">
              {`I'm a`}
              <span
                ref={typedRef}
                className="typed-text text-purple-600 border-r-2 border-purple-600 pr-1"
              ></span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through
            innovative web development and thoughtful design. I transform ideas
            into reality with clean code and creative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#projects"
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <Link
              href="https://github.com/subrat8268"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-purple-600"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/subrat-jena-8a69a8194/"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-purple-600"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:subrato8268@gmail.com"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-purple-600"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
