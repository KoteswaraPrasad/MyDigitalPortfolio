import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const trainingDetails = {
  title: "Mobile Application Development using Flutter",
  institution: "Lovely Professional University",
  date: "July 2025",
  highlights: [
    "Completed a hands-on certification program focused on cross-platform Android app development using Flutter, achieving 90%+.",
    "Gained hands-on experience in Dart, widget-based UI design, and Flutter's architecture for responsive mobile apps.",
    "Designed responsive mobile interfaces using Flutter widgets, layout structures, and custom UI components.",
    "Built and deployed multiple Android modules, including CRUD applications and dashboard-based apps, improving development efficiency by 25%.",
  ],
};

const Training = () => (
  <section id="training" className="py-20 md:py-28 px-4">
    <div className="container mx-auto max-w-2xl">
      <SectionHeading title="Training" />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
        whileHover={{ boxShadow: "0 20px 60px -15px hsl(239 84% 67% / 0.12)", transition: { duration: 0.3 } }}
        className="mt-12 rounded-xl border border-border bg-card p-6 md:p-8 transition-colors hover:border-primary/30"
      >
        <div className="flex items-start gap-4 mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
          >
            <GraduationCap size={20} className="text-primary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-base font-semibold text-foreground">{trainingDetails.title}</h3>
            <p className="text-sm text-muted-foreground">{trainingDetails.institution} · {trainingDetails.date}</p>
          </motion.div>
        </div>
        <ul className="space-y-3">
          {trainingDetails.highlights.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
              className="flex items-start gap-3"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.12, type: "spring", stiffness: 300 }}
              >
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
              </motion.div>
              <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Training;
