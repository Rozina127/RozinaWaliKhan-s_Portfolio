import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const roles = [
  "ISO/IEC 27001:2022 Implementation & Audit",
  "Risk Registers & Control Mapping",
  "VAPT — Vulnerability Assessment & Penetration Testing",
];

const stats = [
  { value: "8+", label: "Certifications" },
  { value: "20+", label: "Projects" },
  { value: "99.97%", label: "Scam Shield Accuracy" },
  { value: "4+", label: "Years Hands-On" },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => { clearInterval(id); };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-cyber-dark">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-cyber-primary/50 shadow-2xl shadow-cyber-primary/30 mx-auto">
                <img 
                  src={profileImage} 
                  alt="Rozina Wali Khan - Cybersecurity Specialist" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cyber-primary/20 blur-2xl rounded-full -z-10 scale-110" />
              {/* Shield badge */}
              <div className="absolute -bottom-2 -right-2 bg-cyber-dark p-2 rounded-full border-2 border-cyber-primary">
                <Shield className="w-6 h-6 text-cyber-primary" />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-primary bg-clip-text text-transparent">
              Rozina Wali Khan
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-3">
              GRC | VAPT | Cybersecurity Engineer
            </p>
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg text-cyber-primary font-mono"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-2 text-cyber-primary mt-3">
              <MapPin className="w-4 h-4" />
              <span>Islamabad, Pakistan</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="px-6 py-3 rounded-2xl bg-cyber-dark/60 border border-cyber-primary/20 backdrop-blur-sm hover:border-cyber-primary/60 transition-all"
                >
                  <p className="text-2xl font-bold text-cyber-primary">{s.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <a href="tel:+923235080980" className="flex items-center gap-2 px-4 py-2 bg-cyber-dark/50 rounded-full border border-cyber-primary/30 hover:border-cyber-primary transition-all hover:scale-105">
              <Phone className="w-4 h-4 text-cyber-primary" />
              <span className="text-sm">+92 323 5080980</span>
            </a>
            <a href="mailto:rozinawalikhan@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-cyber-dark/50 rounded-full border border-cyber-primary/30 hover:border-cyber-primary transition-all hover:scale-105">
              <Mail className="w-4 h-4 text-cyber-primary" />
              <span className="text-sm">rozinawalikhan@gmail.com</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 mb-12"
          >
            <a href="https://www.linkedin.com/in/rozina-khan-613737261" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-3 bg-cyber-dark/50 rounded-xl border border-cyber-primary/30 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all">
                <Linkedin className="w-6 h-6 text-cyber-primary group-hover:scale-110 transition-transform" />
              </div>
            </a>
            <a href="https://github.com/Rozina127" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-3 bg-cyber-dark/50 rounded-xl border border-cyber-primary/30 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all">
                <Github className="w-6 h-6 text-cyber-primary group-hover:scale-110 transition-transform" />
              </div>
            </a>
            <a href="https://www.fiverr.com/sellers/rozinawali/edit" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-3 bg-cyber-dark/50 rounded-xl border border-cyber-primary/30 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all">
                <ExternalLink className="w-6 h-6 text-cyber-primary group-hover:scale-110 transition-transform" />
              </div>
            </a>
            <a href="https://www.upwork.com/freelancers/~01b25a9c4d54118238" target="_blank" rel="noopener noreferrer" className="group">
              <div className="p-3 bg-cyber-dark/50 rounded-xl border border-cyber-primary/30 hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all">
                <ExternalLink className="w-6 h-6 text-cyber-primary group-hover:scale-110 transition-transform" />
              </div>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-cyber-primary hover:bg-cyber-primary/90 text-background font-semibold px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyber-primary/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-cyber-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
