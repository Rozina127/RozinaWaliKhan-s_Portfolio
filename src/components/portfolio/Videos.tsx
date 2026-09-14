import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      id: "6ZNw3Sb8IHA",
      title: "ScamShield — Real-Time Phishing Detection Extension",
      description: "Final year project demo: browser extension detecting phishing sites in real time.",
    },
    {
      id: "ijfXOXtxd8A",
      title: "AI-Driven Vulnerability Prioritization Dashboard",
      description: "Demo of an AI pipeline that classifies CVEs by severity and suggests mitigations.",
    },
    {
      id: "1xw_a3PPsX4",
      title: "Brain Tumor Detection Project",
      description: "Deep learning based medical imaging project walkthrough.",
    },
    {
      id: "Losk2t3Ojpw",
      title: "Fillmception",
      description: "Project demo and feature walkthrough.",
    },
  ];

  return (
    <section id="videos" className="py-20 bg-cyber-dark/30">
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
            Project Videos
            <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-cyber-dark/50 rounded-xl border border-cyber-primary/20 overflow-hidden hover:border-cyber-primary/50 transition-all"
            >
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-popups-to-escape-sandbox"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@beautifulgirl9898"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyber-primary/40 text-cyber-primary hover:bg-cyber-primary/10 transition-all"
          >
            <Youtube className="w-5 h-5" />
            Visit YouTube Channel
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
