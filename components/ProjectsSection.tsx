"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "SNOX",
    description:
      "The website is made with the help of React JS as a frontend and MongoDB as a backend with some help of firebase to store images in cloud for fast rendering.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Tailwind",
      "MongoDB",
      "Vercel",
    ],
    liveLink: "https://snox.in",
    githubLink: "https://github.com/subrat8268/snox",
    image: "/images/snoxportfolio.png",
    alignment: "left",
  },
  {
    id: 2,
    title: "Invoice Maker",
    description:
      "Its a simple invoice maker which provide you to make invoices in a very cool way. Framer Motion was used for each component Animation, Lottiefiles For Dashboard Widgets Icons, IndexedDB for Local Storage & ReactJS.",
    technologies: ["HTML", "CSS", "Javascript", "React", "NodeJs"],
    liveLink: "https://theinvoapp.netlify.app/",
    githubLink: "https://github.com/subrat8268/TheInvoApp",
    image: "/images/invoportfolio.png",
    alignment: "right",
  },
  {
    id: 3,
    title: "A Discord Design",
    description:
      "Its a adaption of the design of Discord website to grow the designing skills with pure basics.",
    technologies: ["HTML", "CSS", "Javascript", "Tailwind"],
    liveLink: "https://discordclonebysj.netlify.app/",
    githubLink: "https://github.com/subrat8268/discordClone",
    image: "/images/discordportfolio.png",
    alignment: "left",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="project-section bg-gray-200 mt-16">
      <h2 className="page-heading text-[#e84949] text-[90px] text-center pt-8 max-lg:text-[40px]">
        Projects
      </h2>

      <div className="project-container max-w-[1200px] mx-auto py-12 px-4 flex flex-col gap-32 max-lg:gap-16">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project-card h-[550px] w-[90%] bg-cover relative shadow-[0px_0px_40px_#1f1f1f] group cursor-pointer max-lg:w-full max-lg:h-[300px] ${
              project.alignment === "left"
                ? "ml-32 max-lg:ml-0"
                : "mr-32 self-end max-lg:mr-0 max-lg:self-start"
            }`}
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1f1f1f9a] group-hover:opacity-0 transition-opacity duration-400"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#343d68] via-[#343d68be] to-[#343d687c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"></div>

            {/* Project Number */}
            <div
              className={`project-number absolute text-[200px] font-semibold text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ${
                project.alignment === "left"
                  ? "-top-12 -right-10"
                  : "-top-12 -left-10"
              } max-lg:hidden`}
            >
              0{project.id}
            </div>

            {/* Project Content */}
            <div
              className={`project-content absolute flex flex-col text-white p-8 bottom-[20%] z-[5] gap-4 transition-transform duration-400 group-hover:scale-110 max-lg:scale-50 max-lg:bottom-0 max-lg:left-0 max-lg:right-0 max-lg:top-0 max-lg:group-hover:scale-[0.55] ${
                project.alignment === "left"
                  ? "left-[10%]"
                  : "right-[-20%] max-lg:right-0"
              }`}
            >
              <div className="project-skills-container w-[60%] flex gap-3 flex-wrap max-lg:w-full">
                {project.technologies.map((tech) => (
                  <Image
                    key={tech}
                    src={`/images/stack/${
                      tech === "Javascript"
                        ? "Javascript.svg"
                        : tech === "NodeJs"
                        ? "NodeJs.svg"
                        : tech === "MongoDB"
                        ? "MongoDB.svg"
                        : tech === "Vercel"
                        ? "Vercel.svg"
                        : tech + ".png"
                    }`}
                    alt={`${tech} technology`}
                    width={40}
                    height={40}
                    className="project-skill max-lg:w-[35%]"
                  />
                ))}
              </div>

              <h3 className="project-heading text-[50px] font-bold max-lg:text-[40px] max-lg:w-full">
                {project.title}
              </h3>
              <p className="project-subHeading w-[70%] text-base italic max-lg:w-full">
                {project.description}
              </p>

              <div className="btn-grp flex gap-4 items-center">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pink inline-block bg-[#e84949] text-white px-6 py-2 rounded-full text-sm font-bold no-underline hover:bg-[#d63939] transition-colors"
                >
                  Read More
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[35px] hover:text-[#e84949] transition-colors"
                >
                  <i className="fa-brands fa-github" title="GitHub Link"></i>
                </Link>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[35px] hover:text-[#e84949] transition-colors"
                >
                  <i className="fa-solid fa-link" title="Live Link"></i>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
