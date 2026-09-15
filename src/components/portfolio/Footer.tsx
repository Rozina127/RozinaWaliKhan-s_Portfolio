import { Shield, Github, Linkedin, ExternalLink, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-gradient-to-b from-background to-cyber-dark/80 border-t border-cyber-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="relative">
                <Shield className="w-10 h-10 text-cyber-primary" />
                <div className="absolute inset-0 bg-cyber-primary/20 blur-lg rounded-full" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyber-primary to-cyber-accent bg-clip-text text-transparent">
                  Rozina Wali Khan
                </h3>
                <p className="text-sm text-muted-foreground">Cybersecurity Specialist</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Securing digital assets and building robust applications with security-first approach.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {['about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => { scrollToSection(item); }}
                  className="text-muted-foreground hover:text-cyber-primary transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3 items-center md:items-end mb-4">
              <a href="mailto:rozinawalikhan@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyber-primary transition-colors">
                <Mail className="w-4 h-4" />
                rozinawalikhan@gmail.com
              </a>
              <a href="tel:+923235080980" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyber-primary transition-colors">
                <Phone className="w-4 h-4" />
                +92 323 5080980
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <a
                href="https://www.linkedin.com/in/rozina-khan-613737261"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cyber-dark/50 rounded-lg border border-cyber-primary/20 hover:border-cyber-primary hover:bg-cyber-primary/10 hover:scale-110 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-cyber-primary" />
              </a>
              <a
                href="https://github.com/Rozina127"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cyber-dark/50 rounded-lg border border-cyber-primary/20 hover:border-cyber-primary hover:bg-cyber-primary/10 hover:scale-110 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-cyber-primary" />
              </a>
              <a
                href="https://www.fiverr.com/sellers/rozinawali/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cyber-dark/50 rounded-lg border border-cyber-primary/20 hover:border-cyber-primary hover:bg-cyber-primary/10 hover:scale-110 transition-all"
                aria-label="Fiverr Profile"
              >
                <ExternalLink className="w-5 h-5 text-cyber-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-cyber-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rozina Wali Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
