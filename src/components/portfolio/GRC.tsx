import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, ClipboardList, Scale, Layers, Search, Quote } from "lucide-react";

const GRC = () => {
  const expertise = [
    { icon: ShieldCheck, label: "ISO 27001 Implementation & Audit" },
    { icon: ClipboardList, label: "Risk Management & Registers" },
    { icon: Scale, label: "Regulatory Compliance (GDPR, NIST, SOC 2)" },
    { icon: FileCheck, label: "Policy & Governance" },
    { icon: Layers, label: "Control Mapping & Evidence" },
    { icon: Search, label: "Internal Audit & Gap Analysis" },
  ];

  const achievements = [
    { title: "ISO/IEC 27001:2022", sub: "Information Security Associate" },
    { title: "Certified Cloud Security", sub: "Professional (CCSP)" },
    { title: "Foundations of Governance", sub: "Risk & Compliance (ISC2)" },
    { title: "AWS Academy Cloud Security", sub: "Foundations" },
    { title: "Google Cybersecurity", sub: "Professional Certificate" },
    { title: "Cybrary Pentest+", sub: "Certification" },
    { title: "CompTIA Security+", sub: "SY0-701" },
    { title: "Scam Shield", sub: "99.97% detection accuracy" },
  ];

  return (
    <section id="grc" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-cyber-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-xs tracking-[0.2em] uppercase rounded-full border border-cyber-primary/40 text-cyber-primary">
            Governance · Risk · Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-primary">&lt;</span>
            GRC Specialist
            <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-cyber-dark/50 p-8 rounded-2xl border border-cyber-primary/20 backdrop-blur-sm">
              <p className="text-lg text-muted-foreground leading-relaxed">
                GRC professional with a strong foundation in information security, risk management,
                and compliance. I help organizations strengthen their security posture through
                structured governance, audit-ready documentation, and practical risk-focused solutions.
              </p>
              <div className="mt-6 flex items-start gap-3 border-l-2 border-cyber-accent/60 pl-4">
                <Quote className="w-5 h-5 text-cyber-accent flex-shrink-0 mt-1" />
                <p className="italic text-foreground/90">
                  Bridging security, compliance, and governance to build trust and reduce risk.
                </p>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl border border-cyber-accent/40 bg-gradient-to-br from-cyber-dark/70 to-transparent">
              <h3 className="text-xl font-bold text-cyber-primary mb-3">
                Past Role — GRC Analyst &amp; Security Engineer, MicroMerger (Pvt.) Ltd.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At MicroMerger I translated technical controls into ISO/IEC 27001:2022 aligned
                documentation, built risk registers, and created audit-ready evidence packages that
                stand up to scrutiny.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-5">Key Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((item, i) => (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-cyber-dark/60 border border-cyber-primary/30 text-foreground hover:border-cyber-primary hover:bg-cyber-primary/10 transition-all"
                  >
                    <item.icon className="w-4 h-4 text-cyber-primary" />
                    {item.label}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-5">Key Achievements</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-cyber-dark/50 border border-cyber-primary/15 hover:border-cyber-primary/40 transition-all"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyber-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-tight">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GRC;
