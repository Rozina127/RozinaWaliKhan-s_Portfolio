import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BS in Cybersecurity (Graduated)",
      institution: "FAST-NUCES, Islamabad",
      period: "Aug 2022 - June 2026",
      majors: [
        "Penetration Testing & OSINT",
        "Vulnerability Assessment & Ethical Hacking",
        "Digital Forensics",
        "Cloud Security",
        "Computer Networks & Database",
        "Secure Software Design & Information Assurance",
        "Artificial Intelligence & Machine Learning",
      ],
    },
    {
      degree: "F.Sc (Physics, Computer Science, Mathematics)",
      institution: "Superior Group of Colleges, Rawalpindi",
      period: "2019 - 2021",
      majors: [],
    },
    {
      degree: "Matriculation (Physics, Chemistry, Computer Science)",
      institution: "Dr. AQ Khan School System, Rawalpindi",
      period: "2018",
      majors: [],
    },
  ];

  return (
    <section id="education" className="py-20">
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
            Education
            <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-cyber-primary to-transparent" />
              )}

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyber-primary/20 rounded-full flex items-center justify-center border-2 border-cyber-primary">
                    <GraduationCap className="w-6 h-6 text-cyber-primary" />
                  </div>
                </div>

                <div className="flex-grow bg-cyber-dark/50 p-6 rounded-xl border border-cyber-primary/20 hover:border-cyber-primary/40 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-cyber-primary">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground bg-cyber-dark/50 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>

                  {edu.majors.length > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-cyber-primary" />
                        <span className="text-sm font-semibold text-cyber-primary">Major Areas</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.majors.map((major) => (
                          <span
                            key={major}
                            className="text-xs px-3 py-1 bg-cyber-primary/10 text-cyber-primary rounded-full border border-cyber-primary/30"
                          >
                            {major}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
