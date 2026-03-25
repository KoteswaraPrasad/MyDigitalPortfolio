import { motion } from "framer-motion";
import { Code2, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const technicalSkills = [
  { category: "Languages", skills: ["C++", "C", "Java", "JavaScript", "PHP"] },
  { category: "Frontend", skills: ["React.js", "Tailwind CSS", "Material UI", "HTML", "CSS"] },
  { category: "Backend", skills: ["Node.js", "Express.js"] },
  { category: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL"] },
  { category: "DevOps & Tools", skills: ["Docker", "Jenkins", "Maven", "Kubernetes", "Git", "GitHub", "Postman", "VS Code"] },
];

const softSkills = ["Problem Solving", "Team Management", "Adaptability"];

const chipVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -8 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.4, delay: i * 0.06, type: "spring" as const, stiffness: 200, damping: 15 },
  }),
};

const SkillChip = ({ skill, index }: { skill: string; index: number }) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={chipVariants}
    whileHover={{
      y: -6, scale: 1.08,
      boxShadow: "0 8px 30px -8px hsl(239 84% 67% / 0.25)",
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
    className="group relative cursor-default rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
  >
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
    >
      {skill}
    </motion.span>
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
    />
    <motion.div
      initial={{ width: "0%" }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
    />
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="py-20 md:py-28 px-4">
    <div className="container mx-auto">
      <SectionHeading title="Skills" subtitle="Technologies I work with" />
      <div className="max-w-4xl mx-auto mt-12">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Code2 size={16} className="text-primary" />
          </div>
          <h2 className="text-sm font-semibold text-primary tracking-wide uppercase">Technical Skills</h2>
        </motion.div>

        <div className="space-y-10 mb-16">
          {technicalSkills.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-semibold">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <SkillChip key={skill} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <Users size={16} className="text-accent" />
          </div>
          <h2 className="text-sm font-semibold text-accent tracking-wide uppercase">Soft Skills</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, type: "spring", stiffness: 180, damping: 14 }}
              whileHover={{
                y: -6, scale: 1.08,
                boxShadow: "0 8px 30px -8px hsl(187 92% 53% / 0.25)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative cursor-default rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              >
                {skill}
              </motion.span>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              />
              <motion.div
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
