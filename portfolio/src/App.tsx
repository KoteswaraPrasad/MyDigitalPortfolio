import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

const App = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        {/* <Achievements /> */}
        <Training />
        <Education />
        <Contact />
      </motion.div>

      <Footer />
    </div>
  );
};

export default App;