import { motion } from "framer-motion";
import { Shield, Brain, Database, Globe, Gamepad2, Network, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const fyp = {
    title: "Scam Shield – Real-Time Phishing Detection Extension",
    description: "Built a browser extension that monitors URLs in real time and detects phishing using a Random Forest model trained on the LegitPhish dataset with 17 URL-based features, achieving 99.97% accuracy and 99.96% F1-score.",
    features: [
      "Blacklist checks",
      "Heuristic rules",
      "ML-based risk scoring",
      "Safe preview mode using Selenium",
      "Explainable risk dashboard",
    ],
    tech: ["Chrome", "Python", "Machine Learning", "Random Forest"],
    icon: Shield,
  };

  const projects = [
    {
      title: "Brain Tumor Segmentation",
      description: "Developed a brain tumor detection model using YOLOv11 and SAM2 in Python, automating tumor detection and segmentation in MRI images.",
      tech: ["Python", "YOLOv11", "SAM2", "Deep Learning"],
      icon: Brain,
    },
    {
      title: "AI-Driven Vulnerability System",
      description: "Developed an AI-driven system for vulnerability prioritization and remediation, integrating NLP and ML to classify CVEs and suggest mitigation strategies.",
      tech: ["Python", "NLP", "Machine Learning"],
      icon: Shield,
    },
    {
      title: "Multi-Core Neural Network Simulation",
      description: "Simulated a neural network architecture using OS-level constructs with IPC via pipes and synchronization using mutexes and semaphores.",
      tech: ["C#", "Ubuntu", "IPC", "Threading"],
      icon: Brain,
    },
    {
      title: "Shamir's Secret Sharing",
      description: "Implemented threshold cryptography for secure secret distribution and recovery using finite field arithmetic and polynomial interpolation.",
      tech: ["Python", "Cryptography"],
      icon: Lock,
    },
    {
      title: "Filmception Project",
      description: "Designed AI-driven summarization and Text-to-Speech to transform film analysis into an audio-based interactive platform.",
      tech: ["Python", "NLTK", "gTTS", "scikit-learn"],
      icon: Brain,
    },
    {
      title: "Cyber Security Portal",
      description: "Built a full-stack website with user authentication and real-time threat alerts.",
      tech: ["Full-Stack", "Auth", "Real-time"],
      icon: Shield,
    },
    {
      title: "Chess Game",
      description: "Developed a two-player chess game with move validation, check/checkmate logic, and console-based UI.",
      tech: ["C++"],
      icon: Gamepad2,
    },
    {
      title: "MBR Recovery Tool",
      description: "Engineered a tool to analyze and restore corrupted Master Boot Records.",
      tech: ["Digital Forensics"],
      icon: Database,
    },
    {
      title: "Portfolio Website",
      description: "Built a responsive personal portfolio with animations, dark mode, and project showcases.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Globe,
    },
    {
      title: "Network Simulation",
      description: "Modeled subnetting, RIP/EIGRP/OSPF routing, and DNS/DHCP configurations.",
      tech: ["Cisco Packet Tracer"],
      icon: Network,
    },
    {
      title: "Gym Management System",
      description: "Developed a desktop app for member registrations, payments, and workout tracking.",
      tech: ["SQL", "C#"],
      icon: Database,
    },
    {
      title: "Automated Timetable System",
      description: "Designed an AI-driven scheduling system for automatic university timetable generation.",
      tech: ["Python", "AI"],
      icon: Brain,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-cyber-dark/30">
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
            Projects
            <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto" />
        </motion.div>

        {/* FYP - Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-cyber-dark/80 to-cyber-dark/40 p-8 rounded-2xl border-2 border-cyber-primary/40 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-cyber-primary text-background">Final Year Project</Badge>
                <Badge variant="outline" className="border-cyber-accent text-cyber-accent">Research & Development</Badge>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-cyber-primary/20 rounded-xl">
                  <fyp.icon className="w-10 h-10 text-cyber-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{fyp.title}</h3>
                  <p className="text-muted-foreground">{fyp.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-cyber-primary font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {fyp.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-cyber-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-cyber-primary font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {fyp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-cyber-primary/10 text-cyber-primary rounded-full text-sm border border-cyber-primary/30">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-cyber-primary/10 rounded-lg">
                    <p className="text-cyber-primary font-bold text-2xl">99.97%</p>
                    <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-cyber-dark/50 p-6 rounded-xl border border-cyber-primary/20 hover:border-cyber-primary/50 transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-cyber-primary/10 rounded-lg group-hover:bg-cyber-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-cyber-primary/10 text-cyber-primary rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
