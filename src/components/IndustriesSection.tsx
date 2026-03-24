import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { ShoppingCart, Pickaxe, Fuel, Factory } from 'lucide-react';

const industries = [
  { icon: ShoppingCart, title: 'Retail', desc: 'Omnichannel retail solutions with real-time inventory, POS integration, and customer analytics.', color: 'from-blue-500/20 to-cyan-500/20' },
  { icon: Pickaxe, title: 'Metals & Mining', desc: 'Optimized operations for mining companies with asset management, quality control, and supply chain visibility.', color: 'from-amber-500/20 to-orange-500/20' },
  { icon: Fuel, title: 'Oil & Gas', desc: 'Upstream, midstream, and downstream solutions with HSE compliance and resource planning.', color: 'from-emerald-500/20 to-teal-500/20' },
  { icon: Factory, title: 'Manufacturing', desc: 'Smart manufacturing with MES integration, production planning, and quality management.', color: 'from-violet-500/20 to-purple-500/20' },
];

const IndustriesSection = () => (
  <section id="industries" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Industries</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
          Sector <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Deep domain knowledge across key industries powering enterprise digital transformation
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <AnimatedSection key={ind.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300 h-full"
              style={{ perspective: '1000px' }}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${ind.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ind.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
