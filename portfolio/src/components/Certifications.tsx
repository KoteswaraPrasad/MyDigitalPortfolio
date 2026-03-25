import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, Calendar, Building2, Sparkles } from "lucide-react";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const certs = [
  { 
    name: "Cloud Computing", 
    issuer: "NPTEL", 
    date: "October 2025", 
    link: "https://drive.google.com/file/d/1eeIu1TU1RHKfC-SpPaa-EYRWfC73254U/view?usp=drive_link",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: "☁️",
    skills: ["AWS", "Azure", "Cloud Architecture"]
  },
  { 
    name: "Mobile Application Development", 
    issuer: "Lovely Professional University", 
    date: "July 2025", 
    link: "https://drive.google.com/file/d/15gBL_7uNnMUM7AxSCBoN9JRTiwJhZAVW/view?usp=drive_link",
    color: "from-purple-500/20 to-pink-500/20",
    icon: "📱",
    skills: ["React Native", "Flutter", "iOS/Android"]
  },
  { 
    name: "Fundamentals of Network Communication", 
    issuer: "Coursera", 
    date: "October 2024", 
    link: "https://drive.google.com/file/d/1WXLWIAzh-U-qWBDANV9XG5sWQaL8y8B7/view?usp=drive_link",
    color: "from-green-500/20 to-emerald-500/20",
    icon: "🌐",
    skills: ["TCP/IP", "DNS", "Network Security"]
  },
];

const Certifications = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section id="certifications" className="bg-background py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading title="Certifications" />
        
        <div ref={containerRef} className="mt-16 grid gap-6 md:gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={false}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              
              {/* Main Card */}
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block relative bg-gradient-to-br from-card to-secondary/30 rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-5 md:gap-6">
                    {/* Icon with Animation */}
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={isInView ? { rotate: 0, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: i * 0.15 + 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 12
                      }}
                      className="relative"
                    >
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl md:text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        {cert.icon}
                      </div>
                      <motion.div
                        className="absolute -top-1 -right-1"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <Sparkles size={14} className="text-primary" />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {cert.name}
                        </h3>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: i * 0.15 + 0.3 }}
                          className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full"
                        >
                          <Calendar size={12} />
                          <span>{cert.date}</span>
                        </motion.div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Building2 size={14} className="shrink-0" />
                        <span>{cert.issuer}</span>
                      </div>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {cert.skills.map((skill, idx) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: i * 0.15 + 0.4 + idx * 0.05 }}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* External Link Icon */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.15 + 0.35 }}
                      className="shrink-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                        <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Animated Border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.5 }}
                />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Interactive Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <Award size={14} className="text-primary" />
            </motion.div>
            <p className="text-xs text-muted-foreground">
              Click on any certification to view the verified certificate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;