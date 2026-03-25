import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Send, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const links = [
  { icon: Mail, label: "Email", href: "mailto:koteswaraprasad274@gmail.com", text: "koteswaraprasad274@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/KoteswaraPrasad", text: "github.com/KoteswaraPrasad" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/koteswara-prasad", text: "linkedin.com/in/koteswara-prasad" },
  { icon: Phone, label: "Phone", href: "tel:+919177769636", text: "+91-9177769636" },
];

const Contact = () => (
  <section id="contact" className="py-20 md:py-28 px-4 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
    </div>

    <div className="container mx-auto max-w-2xl relative z-10">
      <SectionHeading title="Let's Connect" subtitle="I'm always open to new opportunities and collaborations" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
        whileHover={{ boxShadow: "0 25px 60px -15px hsl(239 84% 67% / 0.15)", transition: { duration: 0.3 } }}
        className="rounded-2xl border border-border bg-card p-8 mb-8 text-center mt-12 transition-colors hover:border-primary/30"
      >
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Send size={32} className="text-primary mx-auto mb-4" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg font-semibold text-foreground mb-2"
        >
          Got a project in mind?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-sm text-muted-foreground mb-5 max-w-md mx-auto"
        >
          Whether it's a full-stack web app, mobile application, or just a chat about tech — feel free to reach out!
        </motion.p>
        <motion.a
          href="mailto:koteswaraprasad274@gmail.com"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <Mail size={16} /> Say Hello
        </motion.a>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.label !== "Phone" ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 120, damping: 14 }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97 }}
            className="group rounded-xl border border-border bg-card p-5 flex items-start gap-4 overflow-hidden transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.15, transition: { duration: 0.2 } }}
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors"
            >
              <link.icon size={18} className="text-primary" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-0.5 font-medium uppercase tracking-wider">{link.label}</p>
              <p className="text-sm text-foreground truncate">{link.text}</p>
            </div>
            <ArrowUpRight size={14} className="text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0 mt-1" />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
