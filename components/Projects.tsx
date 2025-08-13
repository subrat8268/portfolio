"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "SNOX",
      description:
        "A modern e-commerce platform built with React and MongoDB, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      longDescription:
        "SNOX is a comprehensive e-commerce solution that combines modern web technologies with user-centric design. Built with React for the frontend and MongoDB for data management, it features real-time inventory tracking, secure payment integration, and a powerful admin dashboard for business management.",
      technologies: [
        "React",
        "MongoDB",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Firebase",
      ],
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://snox.in",
      githubUrl: "https://github.com/subrat8268/snox",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Invoice Maker",
      description:
        "A sleek invoice generation tool with animated components, local storage capabilities, and professional PDF export functionality for small businesses.",
      longDescription:
        "Invoice Maker streamlines the billing process for freelancers and small businesses. Features include drag-and-drop invoice creation, automatic calculations, client management, and professional PDF generation with customizable templates.",
      technologies: ["React", "Framer Motion", "IndexedDB", "PDF.js", "CSS3"],
      image:
        "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://theinvoapp.netlify.app/",
      githubUrl: "https://github.com/subrat8268/TheInvoApp",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Discord Clone",
      description:
        "A pixel-perfect recreation of Discord's interface, showcasing advanced CSS skills and responsive design principles with modern web standards.",
      longDescription:
        "This Discord clone demonstrates mastery of modern CSS techniques and responsive design. Built with pure HTML, CSS, and JavaScript, it replicates Discord's complex layout system while maintaining perfect responsiveness across all devices.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      image:
        "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://discordclonebysj.netlify.app/",
      githubUrl: "https://github.com/subrat8268/discordClone",
      category: "Frontend",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of my recent work that showcases my skills in
            full-stack development, creative problem-solving, and attention to
            detail.
          </p>
        </div>

        {/* Main Project Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
              <Image
                src={currentProj.image}
                alt={currentProj.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentProj.category}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
                {currentProj.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {currentProj.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProj.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link
                  href={currentProj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
                <Link
                  href={currentProj.githubUrl}
                  className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={prevProject}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-purple-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Project Indicators */}
          <div className="flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-purple-600 scale-125"
                    : "bg-gray-300 hover:bg-purple-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-purple-600"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* All Projects Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-poppins font-bold text-center text-gray-900 mb-12">
            All Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  index === currentProject ? "ring-2 ring-purple-600" : ""
                }`}
                onClick={() => setCurrentProject(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-poppins font-bold text-xl text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
