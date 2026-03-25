import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="border-t border-border py-8 text-center"
  >
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} Koteswara Prasad. Built with React & Tailwind.
    </p>
  </motion.footer>
);

export default Footer;
