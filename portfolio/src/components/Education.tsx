import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    institution: "Lovely Professional University, Punjab",
    year: "August 2023 – Present",
    description: "CGPA: 7.43 — Focused on software engineering, data structures, and full-stack development.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College, Vijayawada",
    year: "July 2021 – April 2023",
    description: "Percentage: 93% — Mathematics, Physics, and Chemistry with distinction.",
  },
  {
    degree: "Matriculation",
    institution: "Viswabharati High School, Gudivada",
    year: "June 2020 – April 2021",
    description: "Percentage: 100% — Achieved perfect score.",
  },
];

const Education = () => (
  <section id="education" className="bg-background py-16 md:py-24 px-4">
    <div className="container mx-auto max-w-2xl">
      <SectionHeading title="Education" />
      <div className="relative mt-12">
        {/* Animated timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-[19px] top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent origin-top"
        />
        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 100, damping: 15 }}
              className="relative pl-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                className="absolute left-0 top-1 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center"
              >
                <GraduationCap size={18} className="text-primary" />
              </motion.div>
              <motion.div
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
              >
                <p className="text-xs text-muted-foreground mb-1">{edu.year}</p>
                <h3 className="font-semibold text-foreground mb-0.5">{edu.degree}</h3>
                <p className="text-xs text-primary/70 mb-1">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
