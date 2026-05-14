import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import DesignTeaser from "@/components/DesignTeaser";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen page-enter">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <DesignTeaser />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
