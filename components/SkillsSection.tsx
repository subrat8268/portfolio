"use client";

import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "NodeJs",
  "mysql",
  "Tailwind",
  "Bootstrap",
  "Git",
  "Github",
  "MongoDB",
  "Vercel",
  "canva",
  "cplusplus",
  "python",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="container mx-auto max-w-[1200px] skill-container relative flex p-20 mb-36 gap-8 h-[460px] max-lg:flex-col max-lg:h-auto max-lg:p-12 max-lg:mb-20 max-md:p-5 max-md:mb-10"
    >
      <div className="skill-fade-text select-none text-[15em] text-gray-200 absolute -bottom-[34.5%] -right-[8%] overflow-hidden font-medium max-lg:text-[12em] max-md:text-[7em]">
        Skills
      </div>

      <div className="skill-container-left w-1/2 flex flex-col max-lg:w-full">
        <h2 className="skill-heading text-[50px] font-bold text-[#e84949] leading-[50px] max-lg:text-[35px] max-md:text-[20px] max-md:leading-[25px]">
          <span className="caps text-[90px] max-md:text-[50px]">M</span>e and
          <br />
          MyTech Stack
        </h2>

        <div className="skill-subHeading mt-4 w-[85%] text-justify max-md:w-full">
          <p className="mb-4 max-lg:text-[13px] max-md:text-[8.5px]">
            As a dedicated professional with a passion for innovation, I bring a
            unique blend of technical skills and problem-solving mindset with
            designing skills to the table. I am proficient in a wide range of
            technologies including HTML, CSS, JavaScript, ReactJS, and SQL. My
            expertise extends to C++, Git & GitHub, Data Structures &
            Algorithms, Java, Android Development, and MongoDB.
          </p>
          <p className="mb-4 max-lg:text-[13px] max-md:text-[8.5px]">
            I have experiences in creating content and designing many web pages.
            Familiar with many tools like Canva, Photoshop, Indesign and
            ChatGPT. My strength lies in my ability to translate business needs
            into practical technical solutions, and I am always excited to take
            on new challenges.
          </p>
          <p className="max-lg:text-[13px] max-md:text-[8.5px]">
            With my strong foundation in both front-end and back-end
            development, I am well-equipped to contribute significantly to any
            team. My dedication, coupled with my technical proficiency, makes me
            a strong candidate for roles requiring a blend of design and
            development skills.
          </p>
        </div>
      </div>

      <div className="skill-container-right flex flex-wrap w-1/2 relative gap-8 max-lg:w-full max-lg:mt-20 max-md:mt-5">
        <Image
          src="/images/userAsset/blob vector.png"
          alt="Background blob decoration"
          width={350}
          height={350}
          className="blob-style absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[40%] animate-pulse z-[-1]"
          style={{ animation: "blobAn 3s linear infinite" }}
        />

        {skills.map((skill) => (
          <Image
            key={skill}
            src={`/images/stack/${
              skill === "Javascript"
                ? "Javascript.svg"
                : skill === "NodeJs"
                ? "NodeJs.svg"
                : skill === "Bootstrap"
                ? "Bootstrap.svg"
                : skill === "Git"
                ? "Git.svg"
                : skill === "Github"
                ? "Github.svg"
                : skill === "MongoDB"
                ? "MongoDB.svg"
                : skill === "Vercel"
                ? "Vercel.svg"
                : skill === "canva"
                ? "canva.webp"
                : skill + ".png"
            }`}
            alt={`${skill} logo`}
            width={90}
            height={90}
            className="skill-logo cursor-pointer transition-transform duration-500 hover:scale-125 z-[1] max-lg:w-[75px] max-md:w-[30px]"
          />
        ))}
      </div>
    </section>
  );
}
