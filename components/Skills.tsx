"use client";

import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "HTML5", level: 95, icon: "🧡" },
        { name: "CSS3", level: 90, icon: "💙" },
        { name: "Tailwind CSS", level: 88, icon: "🎨" },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "⚡" },
        { name: "MongoDB", level: 82, icon: "🍃" },
        { name: "MySQL", level: 75, icon: "🐬" },
        { name: "REST APIs", level: 88, icon: "🔗" },
        { name: "GraphQL", level: 70, icon: "💜" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, icon: "📚" },
        { name: "GitHub", level: 88, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "Vercel", level: 85, icon: "▲" },
        { name: "Firebase", level: 78, icon: "🔥" },
      ],
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-2xl">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories[
            activeCategory as keyof typeof skillCategories
          ].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-poppins font-semibold text-gray-900">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-purple-600">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    transform: activeCategory
                      ? "translateX(0)"
                      : "translateX(-100%)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              {`Technology evolves rapidly, and so do I. I'm constantly exploring
              new frameworks, tools, and best practices to stay at the forefront
              of web development and deliver cutting-edge solutions.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
