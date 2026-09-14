import { motion } from "framer-motion";
import { Award, Trophy, Medal } from "lucide-react";

const Certifications = () => {
  const certifications = [
    "Google Cybersecurity Professional Certificate — Coursera",
    "CompTIA Security+ SY0-701 — Coursera",
    "Cybrary Pentest+ Certification",
    "Belkasoft Mastering Advanced Digital Forensics (2024)",
    "Belkasoft Windows Forensics Course (2025)",
    "Advanced SQLite Queries with Belkasoft (2026)",
    "ISO/IEC 27001:2022 Information Security Associate™ — SkillFront",
    "Foundations of Governance, Risk & Compliance (GRC) — ISC2",
    "AWS Academy Graduate – Cloud Security Foundations",
    "AWS Academy Graduate – Microservices and CI/CD Pipeline Builder",
    "AWS Academy Graduate – Cloud Web Application Builder",
    "Ethical Hacking & Web Application Hacking — Udemy",
    "API Security Fundamentals 2025 — APIsec University",
    "Cybersecurity Career Starter Certification (CCSC)",
    "Certified Cloud Security Professional (CCSP) — Coursera",
    "IBM Web Development Certification (2023)",
    "AWS Certified Cloud Practitioner — Exam Scheduled Aug 2026",
  ];

  const achievements = [
    {
      icon: Medal,
      title: "Research Paper Submitted",
      description: "ScamShield phishing detection — submitted, not yet published",
    },
    {
      icon: Trophy,
      title: "CTF Participant — NaSCon 2025",
      description: "FAST-NUCES",
    },
    {
      icon: Award,
      title: "Outstanding Contribution",
      description: "FAST Job Fair organization; Student Ambassador at MAANZ AI",
    },
  ];

  return (
    <section id="certifications" className="py-20">
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
            Certifications & Achievements
            <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto" />
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-cyber-primary/20 to-cyber-accent/10 p-6 rounded-xl border border-cyber-primary/30 text-center hover:border-cyber-primary/60 transition-all">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="p-2 bg-cyber-primary rounded-full">
                      <achievement.icon className="w-5 h-5 text-background" />
                    </div>
                  </div>
                  <h4 className="font-bold text-foreground mt-4 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Award className="w-5 h-5 text-cyber-primary" />
            Certifications ({certifications.length})
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-cyber-dark/50 rounded-lg border border-cyber-primary/20 hover:border-cyber-primary/40 transition-all group"
              >
                <div className="w-8 h-8 bg-cyber-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyber-primary/20 transition-colors">
                  <span className="text-cyber-primary font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
