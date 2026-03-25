import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  "Scored 100% in Matriculation (Viswabharati High School)",
  "Scored 93% in Intermediate MPC (Narayana Junior College)",
  "Achieved 90%+ in Flutter Mobile App Development training",
];

const Achievements = () => (
  <section id="achievements" className="py-20 md:py-28 px-4">
    <div className="container mx-auto max-w-2xl">
      <SectionHeading title="Achievements" />
      <div className="space-y-4 mt-12">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
          >
            <Trophy size={18} className="text-accent shrink-0" />
            <span className="text-sm text-foreground">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
