"use client";

import { Code, Palette, Zap, Heart } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description:
        "Crafting beautiful, intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and seamless functionality.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description:
        "Bringing enthusiasm and dedication to every project, big or small.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-gray-900">
              Crafting Digital Experiences with Purpose
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with a keen eye for design
                and a love for creating meaningful digital experiences. With
                expertise spanning from frontend technologies like React and
                JavaScript to backend solutions with Node.js and MongoDB, I
                bring ideas to life through code.
              </p>
              <p>
                My journey in web development has been driven by curiosity and a
                constant desire to learn. I believe in writing clean,
                maintainable code and creating interfaces that not only look
                great but also provide exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I'm always excited to take on new
                challenges and collaborate on innovative projects.
              </p>
            </div>
          </div>

          {/* Right side - Feature grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
