import { motion } from "framer-motion";
import { Code, Shield, ShieldCheck, Briefcase, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      skills: [
        "Python", "C++", "JavaScript", "C#", "HTML", "CSS", "React.js",
        "SQL", "MongoDB", "Socket Programming", "Data Structures & Algorithms",
        "Arrays", "Linked Lists", "Trees (Binary, AVL)", "Graphs",
        "Sorting Algorithms", "Dynamic Programming"
      ],
    },
    {
      icon: ShieldCheck,
      title: "GRC Skills",
      skills: [
        "ISO/IEC 27001:2022", "Risk Assessment & Registers", "Internal Audit",
        "Gap Analysis", "Control Mapping", "Policy & Procedure Writing",
        "Evidence & Audit Readiness", "NIST CSF", "SOC 2", "GDPR",
        "Third-Party Risk", "Business Continuity"
      ],
    },
    {
      icon: Shield,
      title: "VAPT & Cybersecurity Skills",
      skills: [
        "Vulnerability Assessment", "Penetration Testing", "Nessus", "OpenVAS",
        "Metasploit Framework", "Burp Suite", "Nmap", "OWASP Top 10",
        "Web & Network Pentesting", "Wireshark", "TCP/IP Protocol Analysis",
        "Cloud Security (AWS)", "Threat Detection", "Security Hardening"
      ],
    },
    {
      icon: Briefcase,
      title: "Professional Skills",
      skills: [
        "Leadership", "Critical Thinking", "Technical Writing",
        "Policy & Report Writing", "Stakeholder Communication", "Fundamentals of Management"
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        "Compliance Documentation", "Risk Registers", "Security Awareness",
        "Network Security", "Packet Analysis", "OSINT", "Ethical Hacking",
        "Incident Response"
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
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
            Skills & Tools
            <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-cyber-dark/50 p-6 rounded-xl border border-cyber-primary/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyber-primary/20 rounded-lg">
                    <category.icon className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.02 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 bg-cyber-primary/10 text-cyber-primary rounded-lg text-sm border border-cyber-primary/20 hover:border-cyber-primary/50 hover:bg-cyber-primary/20 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-cyber-dark/50 p-6 rounded-xl border border-cyber-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Languages</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Pashto", "Urdu", "English"].map((lang) => (
                <div key={lang} className="px-6 py-3 bg-gradient-to-r from-cyber-primary/20 to-cyber-accent/20 rounded-full border border-cyber-primary/30">
                  <span className="text-cyber-primary font-semibold">{lang}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
