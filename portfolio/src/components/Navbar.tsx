import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Sun, Moon, Sparkles, Menu, X, Home, User, Code, Briefcase, Award, GraduationCap, BookOpen, Mail } from "lucide-react";

const navItems = [
  { name: "Skills", icon: Code },
  { name: "Projects", icon: Briefcase },
  { name: "Certifications", icon: Award },
  { name: "Education", icon: GraduationCap },
  { name: "Training", icon: BookOpen },
  { name: "Contact", icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const scrollTo = (id: string) => {
    setActive(id);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-2xl" 
            : "bg-transparent"
        }`}
      >
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KP
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-1 -right-3 text-[10px]"
                >
                  <Sparkles size={12} className="text-primary" />
                </motion.span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = active === item.name;
                const isHovered = hoveredIndex === idx;
                
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollTo(item.name)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-4 py-2 rounded-xl transition-all duration-300 group"
                  >
                    {/* Hover Background */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isHovered || isActive ? 1 : 0,
                        scale: isHovered || isActive ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                    />
                    
                    <div className="relative flex items-center gap-2">
                      <motion.div
                        animate={{
                          rotate: isHovered ? [0, -10, 10, 0] : 0,
                          scale: isActive ? [1, 1.1, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon 
                          size={16} 
                          className={`transition-colors duration-300 ${
                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        />
                      </motion.div>
                      <span 
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}

                    {/* Floating Particle Effect on Hover */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute -top-1 -right-1"
                      >
                        <Sparkles size={10} className="text-primary" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}

              {/* Theme Toggle */}
              <motion.button
                onClick={() => setDark(!dark)}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className="relative ml-2 w-10 h-10 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center overflow-hidden group"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {dark ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, y: 20, rotate: -90 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, y: -20, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} className="text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, y: 20, rotate: 90 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      exit={{ opacity: 0, y: -20, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} className="text-purple-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 2, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                onClick={() => setDark(!dark)}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-purple-500" />}
              </motion.button>
              <MobileMenu items={navItems} onSelect={scrollTo} />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary z-50 origin-left"
        style={{ scaleX: scrollY.get() / (document.body.scrollHeight - window.innerHeight) }}
      />
    </>
  );
};

const MobileMenu = ({ items, onSelect }: { items: typeof navItems; onSelect: (id: string) => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border/50 flex items-center justify-center"
        aria-label="Menu"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute top-12 right-0 w-64 bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl p-2 z-50"
            >
              {items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => {
                      onSelect(item.name);
                      setOpen(false);
                    }}
                    whileHover={{ x: 8, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
                  >
                    <Icon size={16} className="text-primary" />
                    <span>{item.name}</span>
                  </motion.button>
                );
              })}
              
              {/* Decorative Element */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 my-2"
              />
              
              <div className="px-4 py-2">
                <p className="text-[10px] text-muted-foreground/50 text-center">
                  Navigate with style ✨
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;