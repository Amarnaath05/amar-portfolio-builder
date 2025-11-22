import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import MLSection from "@/components/sections/MLSection";
import Certifications from "@/components/sections/Certifications";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <MLSection />
        <Education />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
