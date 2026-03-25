import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <ScrollProgress />
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Certifications />
    <Training />
    <Education />
    <Contact />
    <Footer />
  </div>
);

export default Index;
