import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Quote, Star } from 'lucide-react';

const clients = [
  'Berger Paints', 'Godrej', 'Mahindra', 'CEAT Tyres', 'Nilkamal', 'Lupin',
  'Honeywell', 'IBM', 'Fujitsu', 'Provogue', 'Rashi Peripherals', 'Lodha',
  'Solar Industries', 'Viraj Profiles', 'Sterlite', 'Total Energies',
];

const testimonials = [
  {
    quote: "KNooviq's SAP expertise transformed our entire supply chain operations. Their S/4HANA migration was seamless and delivered exceptional ROI within the first year.",
    author: 'Enterprise CIO',
    role: 'Manufacturing Sector',
    rating: 5,
  },
  {
    quote: "The team's deep understanding of retail processes made our SAP implementation a resounding success. Their consultants became an extension of our team.",
    author: 'VP Technology',
    role: 'Retail Industry',
    rating: 5,
  },
  {
    quote: "From cloud migration to AI automation, KNooviq delivered beyond our expectations. Their new-era technology services are truly transformative.",
    author: 'Digital Head',
    role: 'Energy & Utilities',
    rating: 5,
  },
];

const ClientsSection = () => (
  <section id="clients" className="py-24 lg:py-36 relative">
    <div className="absolute inset-0 bg-muted/30 dark:bg-transparent" />
    <div className="absolute inset-0 dark:opacity-100 opacity-0" style={{ background: 'var(--gradient-section)' }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.15em]">Our Clients</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
          Trusted by <span className="gradient-text">Industry Leaders</span>
        </h2>
      </AnimatedSection>

      {/* Marquee logos */}
      <AnimatedSection className="mb-20">
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 dark:from-[hsl(215,50%,10%)]" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 dark:from-[hsl(215,50%,10%)]" />
          <div className="marquee-track">
            {[...clients, ...clients].map((name, i) => (
              <div key={i} className="shrink-0 mx-4">
                <div className="glass-card px-8 py-4 whitespace-nowrap">
                  <span className="font-display font-bold text-muted-foreground">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-8 h-full relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] group-hover:bg-primary/10 transition-colors" />
              <Quote className="w-8 h-8 text-primary/30 mb-5" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic text-sm">"{t.quote}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-display font-bold text-sm">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
