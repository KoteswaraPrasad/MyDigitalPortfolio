import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Citizen Road Feedback Management",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Material-UI", "Tailwind CSS", "JWT", "Cloudinary"],
    description:
      "A full-stack civic issue management platform to digitally report, track, and resolve road infrastructure problems with geolocated reports, image uploads, and role-based access control (Citizen, Staff, Admin).",
    github: "https://github.com/KoteswaraPrasad/Citizen_Road_Feedback_Management",
    date: "November 2025",
    accent: "from-primary/20 to-accent/10",
    icon: "🛣️",
  },
  {
    title: "Collaborative Knowledge Sharing Platform",
    tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "AJAX"],
    description:
      "An e-learning website providing 10+ programming tutorials across six languages, with a community discussion module for Q&A, voting, and accepted solutions. Features bcrypt authentication and responsive AJAX-powered UI.",
    github: "https://github.com/KoteswaraPrasad/Knowledge-Sharing-Platform",
    date: "November 2024",
    accent: "from-accent/20 to-primary/10",
    icon: "📚",
  },
  {
    title: "Mobile App Development (Flutter)",
    tech: ["Flutter", "Dart", "Android"],
    description:
      "Completed hands-on training building cross-platform Android apps using Flutter — including CRUD applications and dashboard-based apps, achieving 90%+ in the certification program.",
    github: "https://github.com/KoteswaraPrasad/Weather-Application",
    date: "July 2025",
    accent: "from-primary/15 to-primary/5",
    icon: "📱",
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60,
    rotateX: 15,
    scale: 0.9,
    filter: "blur(4px)",
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  }),
};

const Projects = () => (
  <section id="projects" className="py-20 md:py-28 px-4">
    <div className="container mx-auto">
      <SectionHeading title="Projects" subtitle="Some things I've built" />
      <div className="grid md:grid-cols-3 gap-6 mt-12" style={{ perspective: "1000px" }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
            className="group rounded-xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 flex flex-col"
          >
            {/* Gradient header with emoji icon */}
            <div className={`h-32 bg-gradient-to-br ${project.accent} flex items-center justify-center relative overflow-hidden`}>
              <motion.span
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                className="text-5xl relative z-10"
              >
                {project.icon}
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 text-[10px] text-muted-foreground font-medium bg-card/80 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
                <Calendar size={10} /> {project.date}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, ti) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: i * 0.1 + ti * 0.03 + 0.4 }}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    <Code2 size={10} className="text-primary/60" /> {t}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors group/link"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github size={14} />
                </motion.div>
                View on GitHub
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink size={12} />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
