import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import GRC from "@/components/portfolio/GRC";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import Videos from "@/components/portfolio/Videos";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import HireMeButton from "@/components/portfolio/HireMeButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HireMeButton />
      <Navbar />
      <Hero />
      <About />
      <GRC />
      <Education />
      <Projects />
      <Videos />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
