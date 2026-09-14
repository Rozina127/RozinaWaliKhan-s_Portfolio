import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const HireMeButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      onClick={scrollToContact}
      className="fixed top-24 right-0 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-cyber-primary to-cyber-accent text-background font-bold rounded-l-full shadow-lg shadow-cyber-primary/30 hover:shadow-cyber-primary/50 hover:scale-105 transition-all duration-300 group"
      aria-label="Hire Me - Navigate to contact form"
    >
      <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span className="pr-1">Hire Me</span>
    </motion.button>
  );
};

export default HireMeButton;
