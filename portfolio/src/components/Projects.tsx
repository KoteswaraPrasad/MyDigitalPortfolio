import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Calendar, Sparkles, ArrowRight, Code, Globe, Cpu } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Citizen Road Feedback Management",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Material-UI", "Tailwind CSS"],
    description:
      "A full-stack civic issue management platform to digitally report, track, and resolve road infrastructure problems with geolocated reports, image uploads, and role-based access control.",
    github: "https://github.com/KoteswaraPrasad/Citizen_Road_Feedback_Management",
    date: "November 2025",
    gradient: "from-blue-600 to-indigo-600",
    gradientLight: "from-blue-500/20 to-indigo-500/20",
    icon: Globe,
    category: "Full Stack",
    featured: true,
  },
  {
    title: "Collaborative Knowledge Sharing Platform",
    tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "AJAX"],
    description:
      "An e-learning website providing 10+ programming tutorials across six languages, with a community discussion module for Q&A, voting, and accepted solutions.",
    github: "https://github.com/KoteswaraPrasad/Knowledge-Sharing-Platform",
    date: "November 2024",
    gradient: "from-purple-600 to-pink-600",
    gradientLight: "from-purple-500/20 to-pink-500/20",
    icon: Code,
    category: "Web App",
  },
  {
    title: "Mobile App Development (Flutter)",
    tech: ["Flutter", "Dart", "Android"],
    description:
      "Completed hands-on training building cross-platform Android apps using Flutter — including CRUD applications and dashboard-based apps.",
    github: "https://github.com/KoteswaraPrasad/Weather-Application",
    date: "July 2025",
    gradient: "from-green-600 to-emerald-600",
    gradientLight: "from-green-500/20 to-emerald-500/20",
    icon: Cpu,
    category: "Mobile App",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
        animate={{ opacity: isHovered ? 0.4 : 0 }}
      />
      
      {/* Card */}
      <div className="relative h-full bg-gradient-to-br from-card to-secondary/30 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden group-hover:border-primary/40 transition-all duration-500">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradientLight} rounded-full blur-3xl`} />
          <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${project.gradientLight} rounded-full blur-3xl`} />
        </div>

        {/* Content */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  rotate: isHovered ? [0, -5, 5, 0] : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
              >
                <Icon size={20} className="text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar size={12} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                </div>
              </div>
            </div>
            
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradientLight} text-foreground border border-border/50`}
            >
              {project.category}
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.35 }}
            className="text-sm text-muted-foreground mb-5 leading-relaxed flex-grow"
          >
            {project.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="flex flex-wrap gap-2 mb-5"
          >
            {project.tech.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.45 + idx * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-xs px-2.5 py-1 rounded-full bg-secondary/40 text-muted-foreground border border-border/50 backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="flex items-center justify-between pt-3 border-t border-border/50"
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/btn"
            >
              <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
              View Code
              <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </motion.a>
            
            {/* Decorative Sparkle */}
            <motion.div
              animate={{
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={14} className="text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Border Gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `linear-gradient(135deg, transparent 30%, ${project.gradient.split(' ')[0].replace('from-', '')}, transparent 70%)`,
            backgroundSize: '200% 200%',
          }}
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          title="Featured Work" 
          subtitle="Crafting digital experiences that matter"
        />
        
        <div ref={sectionRef} className="mt-16">
          {/* Featured Project - Larger Card */}
          {featuredProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${featuredProject.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="relative bg-gradient-to-br from-card to-secondary/30 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 w-fit"
                      >
                        <Sparkles size={12} className="text-primary" />
                        <span className="text-xs font-medium text-primary">Featured Project</span>
                      </motion.div>
                      
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.25 }}
                        className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
                      >
                        {featuredProject.title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-muted-foreground mb-6 leading-relaxed"
                      >
                        {featuredProject.description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.35 }}
                        className="flex flex-wrap gap-2 mb-6"
                      >
                        {featuredProject.tech.map((tech) => (
                          <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground border border-border/50">
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                      
                      <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        href={featuredProject.github}
                        target="_blank"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-primary font-medium group/btn w-fit"
                      >
                        View Project
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 }}
                      className="flex items-center justify-center"
                    >
                      <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${featuredProject.gradient} flex items-center justify-center relative overflow-hidden`}>
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Globe size={80} className="text-white/80" />
                        </motion.div>
                        
                        {/* Floating Particles */}
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/40 rounded-full"
                            initial={{
                              x: Math.random() * 200 - 100,
                              y: Math.random() * 200 - 100,
                            }}
                            animate={{
                              y: [null, Math.random() * 40 - 20],
                              x: [null, Math.random() * 40 - 20],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/KoteswaraPrasad"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-border/50 hover:border-primary/40 transition-all group"
          >
            <span className="text-sm font-medium">Explore More on GitHub</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            <Sparkles size={12} className="text-primary" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;