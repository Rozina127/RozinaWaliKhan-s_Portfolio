import { motion } from "framer-motion";
import { Briefcase, Award, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "GRC Analyst & Security Engineer — MicroMerger (Pvt.) Ltd. (Past)",
      company:
        "ISO/IEC 27001:2022 aligned documentation, risk registers, control mapping, gap analysis and audit-ready evidence packages",
      icon: Briefcase,
    },
    {
      title: "Research Assistant & Intern (Aug 2026 – Present)",
      company: "Edith Cowan University (ECU), Australia — agentic AI systems, multimodal AI security, cyber-physical healthcare",
      icon: Briefcase,
    },
    {
      title: "Lab Demonstrator (Aug 2025 – June 2026)",
      company: "FAST-NUCES, Islamabad — AI & Programming for AI labs, mentored 30+ students per session",
      icon: Users,
    },
    {
      title: "Web Development Remote Intern (2024)",
      company: "Paisol Technology (SPS) — React, Next.js, 3+ live client projects",
      icon: Briefcase,
    },
    {
      title: "Student Ambassador",
      company: "MAANZ AI",
      icon: Award,
    },
    {
      title: "Security Team Member (2023 – Present)",
      company: "DEEN Fest, FQSS Society, FAST-NUCES — security ops for 500+ attendee events",
      icon: Users,
    },
    {
      title: "Event Organizer",
      company: "Job Fair - FAST (Certificate for Outstanding Contribution)",
      icon: Award,
    },
    {
      title: "Team Member",
      company: "CyberFest - FAST Society (CSL)",
      icon: Users,
    },
  ];

  const activities = [
    "Member of FAST NUCES's Society FQSS (2023–Present)",
    "Member of FAST NUCES's Society CSL (2025–Present)",
    "Member of 'Let's Help' Welfare Organization (2024–Present)",
    "Participant NaScon 2024 (Qirat Competition)",
    "Participant NaScon 2025 (CTF Competition)",
  ];

  return (
    <section id="experience" className="py-20 bg-cyber-dark/30">
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
            Experience & Activities
            <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-cyber-primary" />
              Work Experience
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-4 bg-cyber-dark/50 rounded-xl border border-cyber-primary/20 hover:border-cyber-primary/40 transition-all">
                    <div className="p-2 bg-cyber-primary/10 rounded-lg group-hover:bg-cyber-primary/20 transition-colors">
                      <exp.icon className="w-5 h-5 text-cyber-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-cyber-primary" />
              Activities & Memberships
            </h3>
            <div className="bg-cyber-dark/50 p-6 rounded-xl border border-cyber-primary/20">
              <ul className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.li
                    key={activity}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyber-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{activity}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
