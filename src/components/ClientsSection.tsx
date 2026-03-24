import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Quote } from 'lucide-react';

const clients = ['Berger Paints', 'RP Tech', 'Rashi Peripherals', 'Hindware', 'Asian Paints', 'Tata Steel'];

const testimonials = [
  {
    quote: "KNooviq's SAP expertise transformed our entire supply chain operations. Their S/4HANA migration was seamless and delivered exceptional ROI.",
    author: 'Enterprise Client',
    role: 'CIO, Manufacturing Sector',
  },
  {
    quote: "The team's deep understanding of retail industry processes made our SAP implementation a resounding success. Highly recommended.",
    author: 'Retail Partner',
    role: 'VP Technology, Retail Sector',
  },
];

const ClientsSection = () => (
  <section id="clients" className="py-24 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Clients</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
          Trusted by <span className="gradient-text">Industry Leaders</span>
        </h2>
      </AnimatedSection>

      {/* Client logos */}
      <AnimatedSection className="mb-16">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {clients.map((name) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              className="glass-card px-8 py-4 flex items-center justify-center"
            >
              <span className="font-display font-semibold text-muted-foreground text-lg">{name}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="glass-card p-8 h-full">
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="font-display font-semibold">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
