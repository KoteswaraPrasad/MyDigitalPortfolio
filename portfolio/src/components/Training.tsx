import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Clock, BookOpen, Star, TrendingUp, Zap } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const trainingDetails = {
  title: "Mobile Application Development using Flutter",
  institution: "Lovely Professional University",
  date: "July 2025",
  duration: "8 Weeks",
  grade: "90%+",
  certificate: "Professional Certification",
  highlights: [
    "Completed a hands-on certification program focused on cross-platform Android app development using Flutter, achieving 90%+.",
    "Gained hands-on experience in Dart, widget-based UI design, and Flutter architecture for responsive apps.",
    "Designed modern mobile interfaces using advanced Flutter UI components and layouts.",
    "Built and deployed multiple Android modules including CRUD systems and dashboards, improving efficiency by 25%.",
  ],
  skills: ["Flutter", "Dart", "Android", "UI/UX Design", "State Management", "REST APIs"],
};

const Training = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  return (
    <section id="training" className="bg-surface py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"
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
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl"
        />
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeading 
          title="Professional Training" 
          subtitle="Continuous learning & skill development"
        />
        
        <div ref={sectionRef} className="mt-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Stats & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* Main Info Card */}
                <div className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl border border-border/50 p-6 backdrop-blur-sm">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5 mx-auto"
                  >
                    <GraduationCap size={28} className="text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-center text-foreground mb-2">
                    {trainingDetails.title}
                  </h3>
                  <p className="text-sm text-center text-muted-foreground mb-4">
                    {trainingDetails.institution}
                  </p>
                  
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="text-foreground font-medium flex items-center gap-1">
                        <Clock size={14} className="text-primary" />
                        {trainingDetails.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Grade</span>
                      <span className="text-foreground font-medium flex items-center gap-1">
                        <Star size={14} className="text-yellow-500" />
                        {trainingDetails.grade}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Certificate</span>
                      <span className="text-foreground font-medium flex items-center gap-1">
                        <Award size={14} className="text-green-500" />
                        {trainingDetails.certificate}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Date</span>
                      <span className="text-foreground font-medium">{trainingDetails.date}</span>
                    </div>
                  </div>
                </div>

                {/* Skills Card */}
                <div className="bg-card/50 rounded-2xl border border-border/50 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen size={16} className="text-primary" />
                    <h4 className="text-sm font-semibold text-foreground">Skills Acquired</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trainingDetails.skills.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl border border-border/50 p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp size={18} className="text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Key Achievements</h3>
                </div>
                
                <div className="space-y-4">
                  {trainingDetails.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      onMouseEnter={() => setActiveHighlight(idx)}
                      onMouseLeave={() => setActiveHighlight(null)}
                      className="group relative"
                    >
                      <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-secondary/20">
                        {/* Icon */}
                        <motion.div
                          animate={{
                            scale: activeHighlight === idx ? 1.2 : 1,
                            rotate: activeHighlight === idx ? [0, -5, 5, 0] : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="mt-0.5"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Zap size={14} className="text-primary" />
                          </div>
                        </motion.div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                            {highlight}
                          </p>
                        </div>
                        
                        {/* Decorative Line */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: activeHighlight === idx ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/50 to-transparent"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Achievement Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="mt-8 pt-6 border-t border-border/50 grid grid-cols-3 gap-4"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">90%+</div>
                    <div className="text-xs text-muted-foreground">Achievement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">8</div>
                    <div className="text-xs text-muted-foreground">Weeks Training</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">25%</div>
                    <div className="text-xs text-muted-foreground">Efficiency Boost</div>
                  </div>
                </motion.div>
              </div>

              {/* Certificate Callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Award size={20} className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Certificate Available</p>
                      <p className="text-sm font-medium text-foreground">Professional Certification in Flutter Development</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    View Certificate
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;