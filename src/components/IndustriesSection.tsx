import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { ShoppingCart, Pickaxe, Fuel, Factory, Building2, Pill, Atom, GraduationCap, Truck, Car, Shirt, Zap as ZapIcon, Clapperboard, Warehouse } from 'lucide-react';

const industries = [
  { icon: ShoppingCart, title: 'Retail' },
  { icon: Pickaxe, title: 'Metals & Mining' },
  { icon: Fuel, title: 'Oil & Gas' },
  { icon: Factory, title: 'Manufacturing' },
  { icon: Building2, title: 'Construction' },
  { icon: Pill, title: 'Pharmaceutical' },
  { icon: Atom, title: 'Chemical' },
  { icon: GraduationCap, title: 'Education' },
  { icon: ZapIcon, title: 'Energy & Utilities' },
  { icon: Clapperboard, title: 'Entertainment' },
  { icon: Shirt, title: 'Textiles' },
  { icon: Truck, title: 'Logistics' },
  { icon: Car, title: 'Automotive' },
  { icon: Warehouse, title: 'Warehouse' },
];

const IndustriesSection = () => (
  <section id="industries" className="py-24 lg:py-36 relative">
    <div className="absolute inset-0 bg-muted/30 dark:bg-transparent" />
    <div className="absolute inset-0 dark:opacity-100 opacity-0" style={{ background: 'var(--gradient-section)' }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.15em]">Industries We Serve</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
          Deep <span className="gradient-text">Domain Expertise</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Proven track record across 14+ industries powering enterprise digital transformation
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {industries.map((ind, i) => (
          <AnimatedSection key={ind.title} delay={i * 0.04} direction="scale">
            <motion.div
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="glass-card p-5 text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <ind.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xs font-bold leading-tight">{ind.title}</h3>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
