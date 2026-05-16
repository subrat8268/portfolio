import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceStrip from "@/components/ExperienceStrip";
import About from "@/components/About";
import Projects from "@/components/Projects";
import DesignTeaser, { DesignMarquee } from "@/components/DesignTeaser";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="app-main min-h-screen page-enter">
      <Navbar />
      <Hero />
      <ExperienceStrip />
      <About />
      <Projects />
      <DesignMarquee />
      <DesignTeaser />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
