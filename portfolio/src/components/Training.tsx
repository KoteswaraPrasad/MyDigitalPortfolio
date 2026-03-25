import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const trainingDetails = {
  title: "Mobile Application Development using Flutter",
  institution: "Lovely Professional University",
  date: "July 2025",
  highlights: [
    "Completed a hands-on certification program focused on cross-platform Android app development using Flutter, achieving 90%+.",
    "Gained hands-on experience in Dart, widget-based UI design, and Flutter architecture for responsive apps.",
    "Designed modern mobile interfaces using advanced Flutter UI components and layouts.",
    "Built and deployed multiple Android modules including CRUD systems and dashboards, improving efficiency by 25%.",
  ],
};

const Training = () => (
  <section id="training" className="py-24 px-4 relative">
    
    {/* Background Glow */}
    <div className="absolute inset-0 flex justify-center">
      <div className="w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>
    </div>

    <div className="container mx-auto max-w-3xl relative z-10">
      <SectionHeading title="Training" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.02 }}
        className="mt-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl transition-all"
      >
        {/* Header */}
        <div className="flex items-start gap-5 mb-8">

          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
          >
            <GraduationCap size={22} className="text-primary-foreground" />
          </motion.div>

          <div>
            <h3 className="text-lg font-semibold text-foreground leading-snug">
              {trainingDetails.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {trainingDetails.institution} · {trainingDetails.date}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6"></div>

        {/* Highlights */}
        <ul className="space-y-4">
          {trainingDetails.highlights.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 group"
            >
              <div className="mt-1">
                <CheckCircle2
                  size={18}
                  className="text-blue-500 group-hover:scale-110 transition"
                />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition">
                {point}
              </p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Training;