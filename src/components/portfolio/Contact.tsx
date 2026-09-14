import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

// Enhanced validation schema with security patterns
const suspiciousPatterns = /<script|javascript:|on\w+\s*=|data:|vbscript:|<iframe|<object|<embed|eval\(|expression\(/i;

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .refine(val => !suspiciousPatterns.test(val), "Invalid characters detected"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters")
    .refine(val => !val.includes('<') && !val.includes('>'), "Invalid email format"),
  subject: z.string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters")
    .refine(val => !suspiciousPatterns.test(val), "Invalid characters detected"),
  message: z.string()
    .trim()
    .min(1, "Message is required")
    .max(5000, "Message must be less than 5000 characters")
    .refine(val => !suspiciousPatterns.test(val), "Invalid characters detected"),
});

// Rate limiting on client side
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS = 3;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState(""); // Bot trap
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  
  // Rate limiting refs
  const submissionTimestamps = useRef<number[]>([]);
  const lastSubmitTime = useRef<number>(0);

  // Check client-side rate limit
  const isRateLimited = useCallback((): boolean => {
    const now = Date.now();
    // Clean old timestamps
    submissionTimestamps.current = submissionTimestamps.current.filter(
      ts => now - ts < RATE_LIMIT_WINDOW
    );
    return submissionTimestamps.current.length >= MAX_SUBMISSIONS;
  }, []);

  // Prevent rapid double submissions
  const preventDoubleSubmit = useCallback((): boolean => {
    const now = Date.now();
    if (now - lastSubmitTime.current < 2000) { // 2 second cooldown
      return true;
    }
    lastSubmitTime.current = now;
    return false;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (Object.prototype.hasOwnProperty.call(errors, name) && errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Check for double submission
    if (preventDoubleSubmit()) {
      toast({
        title: "Please wait",
        description: "Processing your previous request...",
        variant: "destructive",
      });
      return;
    }

    // Client-side rate limiting
    if (isRateLimited()) {
      toast({
        title: "Too many attempts",
        description: "Please wait a minute before sending another message.",
        variant: "destructive",
      });
      return;
    }

    // Honeypot check - should be empty
    if (honeypot) {
      // Silently fail for bots
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => { setIsSuccess(false); }, 3000);
      return;
    }

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    submissionTimestamps.current.push(Date.now());

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          honeypot,
          timestamp: Date.now(), // For replay attack prevention
        },
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast({
        title: "Message Sent! ✓",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (_error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-cyber-dark/30">
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
            Contact Me
            <span className="text-cyber-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-accent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="bg-cyber-dark/50 p-6 rounded-xl border border-cyber-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:rozinawalikhan@gmail.com" 
                    className="flex items-center gap-4 p-4 bg-cyber-primary/10 rounded-lg hover:bg-cyber-primary/20 transition-all group"
                  >
                    <div className="p-3 bg-cyber-primary/20 rounded-lg group-hover:bg-cyber-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-cyber-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground">rozinawalikhan@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+923235080980" 
                    className="flex items-center gap-4 p-4 bg-cyber-primary/10 rounded-lg hover:bg-cyber-primary/20 transition-all group"
                  >
                    <div className="p-3 bg-cyber-primary/20 rounded-lg group-hover:bg-cyber-primary/30 transition-colors">
                      <Phone className="w-5 h-5 text-cyber-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground">+92 323 5080980</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-cyber-primary/10 rounded-lg">
                    <div className="p-3 bg-cyber-primary/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-cyber-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Islamabad, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Note */}
              <div className="bg-cyber-primary/10 p-4 rounded-lg border border-cyber-primary/30">
                <p className="text-sm text-cyber-primary flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Your message is encrypted and securely transmitted. Protected against spam and attacks.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-cyber-dark/50 p-8 rounded-xl border border-cyber-primary/20">
              {/* Honeypot field - hidden from users, catches bots */}
              <div className="absolute left-[-9999px] opacity-0 pointer-events-none" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={honeypot}
                  onChange={(e) => { setHoneypot(e.target.value); }}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`bg-cyber-dark/50 border-cyber-primary/30 focus:border-cyber-primary ${errors.name ? 'border-destructive' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`bg-cyber-dark/50 border-cyber-primary/30 focus:border-cyber-primary ${errors.email ? 'border-destructive' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`bg-cyber-dark/50 border-cyber-primary/30 focus:border-cyber-primary ${errors.subject ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className={`bg-cyber-dark/50 border-cyber-primary/30 focus:border-cyber-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyber-primary hover:bg-cyber-primary/90 text-background font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
