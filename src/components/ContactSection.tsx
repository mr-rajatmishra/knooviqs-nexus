import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, hsl(195 100% 50%), transparent 70%)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.15em]">Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
            Start Your <span className="gradient-text">SAP Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to transform your enterprise? Reach out for a free consultation with our experts.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <AnimatedSection className="lg:col-span-2 space-y-5" direction="left">
            {[
              { icon: Mail, title: 'Email', info: 'admin@knooviq.com' },
              { icon: Phone, title: 'Phone', info: '+91-7900073410' },
              { icon: MapPin, title: 'Address', info: 'B15, Shree Siddhivinayak Plaza, Andheri(W), Mumbai, India' },
            ].map((item) => (
              <motion.div key={item.title} whileHover={{ x: 4 }} className="glass-card p-5 flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3" delay={0.15} direction="right">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: 'Name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-sm font-semibold mb-2 block font-display">{field.label}</label>
                    <input
                      required
                      type={field.type}
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block font-display">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block font-display">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glow-button w-full inline-flex items-center justify-center gap-2 text-sm"
              >
                {submitted ? (
                  <><CheckCircle className="w-4 h-4" /> Message Sent!</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
