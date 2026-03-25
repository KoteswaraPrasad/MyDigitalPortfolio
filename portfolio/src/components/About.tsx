import { motion, useInView } from "framer-motion";
import { Code2, Award, Brain, Sparkles } from "lucide-react";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const stats = [
    { value: "2+", label: "Projects Built", icon: Code2 },
    { value: "80+", label: "DSA Problems", icon: Brain },
    { value: "4+", label: "Certificates", icon: Award },
  ];

  return (
    <section id="about" className="bg-surface py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div ref={sectionRef} className="text-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              About
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Me</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 mb-10"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science student at Lovely Professional University, 
              specializing in Full Stack Web Development with a strong focus on the MERN stack.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I love building scalable, efficient applications — from real-time collaborative coding platforms 
              to civic issue management systems with complex role-based workflows.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm sharpening my DSA skills, exploring new frameworks, 
              or working on meaningful projects that make a difference.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl border border-border/50 p-6 text-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Decorative Sparkle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <div className="inline-flex items-center gap-1 text-xs text-muted-foreground/50">
              <Sparkles size={12} />
              <span>Building the future, one line of code at a time</span>
              <Sparkles size={12} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;