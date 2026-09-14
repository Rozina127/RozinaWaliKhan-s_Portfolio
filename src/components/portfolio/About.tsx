import { motion } from "framer-motion";
import { Target, Shield, Code, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "GRC Specialist",
      description: "ISO 27001 audits, risk registers, policy & compliance",
    },
    {
      icon: Code,
      title: "VAPT",
      description: "Vulnerability assessment & penetration testing with Nessus, Burp, Nmap, Metasploit",
    },
    {
      icon: Brain,
      title: "Cybersecurity Engineer",
      description: "Secure architecture, hardening, and threat detection",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Critical thinking and innovative security solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-cyber-dark/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-primary">&lt;</span>
            About Me
            <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-cyber-dark/50 p-8 rounded-2xl border border-cyber-primary/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyber-primary mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Results-driven GRC Specialist and Cybersecurity Engineer with hands-on expertise in
                ISO/IEC 27001:2022 implementation, risk management, compliance and audit readiness,
                backed by strong VAPT skills across vulnerability assessment and penetration testing.
                I help organizations strengthen their security posture through structured governance
                and practical, risk-focused solutions.
              </p>
              <div className="mt-6 p-4 bg-cyber-primary/10 rounded-lg border-l-4 border-cyber-primary">
                <p className="text-sm text-foreground">
                  Graduated with a <span className="text-cyber-primary font-semibold">BS in Cybersecurity</span> from
                  FAST-NUCES, Islamabad (Aug 2022 – June 2026)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-cyber-dark/50 p-6 rounded-xl border border-cyber-primary/20 hover:border-cyber-primary/50 transition-all hover:scale-105">
                  <item.icon className="w-10 h-10 text-cyber-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
