import { motion, useInView } from "framer-motion";
import { Code2, Users, Sparkles, TrendingUp, Database, Cloud, Layout, Server, Terminal, Star, Award, Zap, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const technicalSkills = [
  { 
    category: "Languages", 
    skills: ["C++", "C", "Java", "JavaScript", "PHP"],
    icon: Terminal,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    description: "Core programming languages for building robust applications"
  },
  { 
    category: "Frontend", 
    skills: ["React.js", "Tailwind CSS", "Material UI", "HTML", "CSS"],
    icon: Layout,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    description: "Creating beautiful, responsive user interfaces"
  },
  { 
    category: "Backend", 
    skills: ["Node.js", "Express.js"],
    icon: Server,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    description: "Scalable server-side applications and APIs"
  },
  { 
    category: "Databases", 
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    icon: Database,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    description: "Efficient data storage and management"
  },
  { 
    category: "DevOps & Tools", 
    skills: ["Docker", "Jenkins", "Maven", "Kubernetes", "Git", "GitHub", "Postman", "VS Code"],
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    description: "Modern development and deployment tools"
  },
];

const softSkills = [
  { name: "Problem Solving", icon: Star, color: "from-yellow-500 to-orange-500", description: "Creative solutions to complex challenges" },
  { name: "Team Management", icon: Users, color: "from-green-500 to-teal-500", description: "Leading and collaborating effectively" },
  { name: "Adaptability", icon: Zap, color: "from-red-500 to-pink-500", description: "Quick learning and flexibility" },
  { name: "Communication", icon: TrendingUp, color: "from-blue-500 to-indigo-500", description: "Clear and effective interaction" },
  { name: "Critical Thinking", icon: Award, color: "from-purple-500 to-violet-500", description: "Analytical decision making" },
];

// Optimized Skill Chip with premium hover effects
const SkillChip = ({ skill, index, categoryColor }: { skill: string; index: number; categoryColor?: string }) => {
  const chipRef = useRef(null);
  const isInView = useInView(chipRef, { once: false, amount: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      ref={chipRef}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-default"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 0.6 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      />
      
      <motion.div
        className="relative bg-gradient-to-br from-card to-secondary/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2.5 overflow-hidden"
        animate={{
          y: isHovered ? -2 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <span className="relative z-10 text-sm font-medium text-foreground">
          {skill}
        </span>
        
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Animated bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Corner sparkle */}
        {isHovered && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute top-0 right-0 w-6 h-6 bg-primary/30 rounded-full blur-sm"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

// Category Card with premium effects
const CategoryCard = ({ category, index }: { category: typeof technicalSkills[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.2 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = category.icon;
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div 
        className="relative bg-gradient-to-br from-card to-secondary/30 rounded-2xl border border-border/50 overflow-hidden"
        animate={{
          y: isHovered ? -4 : 0,
          borderColor: isHovered ? "rgba(99, 102, 241, 0.4)" : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0`}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-2xl`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 0.3 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  rotate: isHovered ? [0, -5, 5, 0] : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md flex-shrink-0`}
              >
                <Icon size={18} className="text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{category.description}</p>
              </div>
            </div>
            
            {/* Mobile expand button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden p-1 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} className="text-muted-foreground" />
              </motion.div>
            </button>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {category.skills.map((skill, i) => (
              <SkillChip key={skill} skill={skill} index={i} categoryColor={category.color} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Premium Soft Skill Card
const SoftSkillCard = ({ skill, index }: { skill: typeof softSkills[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className="relative bg-gradient-to-br from-card to-secondary/30 rounded-xl border border-border/50 overflow-hidden"
        animate={{
          y: isHovered ? -5 : 0,
          borderColor: isHovered ? "rgba(99, 102, 241, 0.4)" : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-2xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative p-5">
          {/* Icon with animation */}
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 shadow-md`}
          >
            <Icon size={20} className="text-white" />
          </motion.div>
          
          <h3 className="text-base font-bold text-foreground mb-1.5">{skill.name}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
          
          {/* Animated border */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Corner shine */}
          {isHovered && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/30 to-transparent rounded-full"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section id="skills" className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Static background gradients - no animation for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and abilities I've mastered"
        />
        
        <div ref={sectionRef} className="max-w-6xl mx-auto mt-12">
          {/* Technical Skills Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
              >
                <Code2 size={18} className="text-white" />
              </motion.div>
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technical Arsenal
              </h2>
            </div>
            
            <div className="space-y-5">
              {technicalSkills.map((category, idx) => (
                <CategoryCard key={category.category} category={category} index={idx} />
              ))}
            </div>
          </div>
          
          {/* Soft Skills Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center"
              >
                <Users size={18} className="text-white" />
              </motion.div>
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Soft Skills
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {softSkills.map((skill, idx) => (
                <SoftSkillCard key={skill.name} skill={skill} index={idx} />
              ))}
            </div>
          </div>
          
          {/* Animated footer note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Sparkles size={12} className="text-primary" />
              </motion.div>
              <p className="text-xs text-muted-foreground">
                Continuously learning and expanding my skill set
              </p>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Sparkles size={12} className="text-secondary" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;