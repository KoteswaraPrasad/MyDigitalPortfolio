import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const certs = [
  { name: "Cloud Computing", issuer: "NPTEL", date: "October 2025", link: "#" },
  { name: "Mobile Application Development", issuer: "Lovely Professional University", date: "July 2025", link: "#" },
  { name: "Fundamentals of Network Communication", issuer: "Coursera", date: "October 2024", link: "#" },
];

const Certifications = () => (
  <section id="certifications" className="py-20 md:py-28 px-4">
    <div className="container mx-auto max-w-2xl">
      <SectionHeading title="Certifications" />
      <div className="space-y-4 mt-12">
        {certs.map((cert, i) => (
          <motion.a
            key={cert.name}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 100, damping: 14 }}
            whileHover={{ x: 8, scale: 1.02, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 hover:bg-secondary/50 hover:border-primary/30 transition-all group cursor-pointer"
          >
            <motion.div
              initial={{ rotate: -20, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.2, type: "spring", stiffness: 200 }}
            >
              <Award size={20} className="text-primary shrink-0" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{cert.name}</p>
              <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
            </div>
            <ExternalLink size={14} className="text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
          </motion.a>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xs text-muted-foreground/50 text-center mt-6"
      >
        Links to certificates will be added soon
      </motion.p>
    </div>
  </section>
);

export default Certifications;
