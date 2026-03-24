import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Cloud, Brain, Workflow, Shield, Zap, BarChart3, Lock, Rocket } from 'lucide-react';

const techServices = [
  { icon: Cloud, title: 'Cloud Migration', desc: 'SAP on AWS, Azure, and GCP with hybrid cloud strategies' },
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Predictive analytics, NLP, and intelligent process automation' },
  { icon: Workflow, title: 'Robotic Process Automation', desc: 'Bot-driven workflows eliminating manual repetitive tasks' },
  { icon: Shield, title: 'Cybersecurity Solutions', desc: 'Enterprise-grade security audits, SOC, and compliance' },
  { icon: Zap, title: 'IoT & Edge Computing', desc: 'Smart sensors, real-time monitoring, and connected factories' },
  { icon: BarChart3, title: 'Business Intelligence', desc: 'SAP Analytics Cloud, dashboards, and data visualization' },
  { icon: Lock, title: 'Blockchain Solutions', desc: 'Supply chain transparency and secure digital transactions' },
  { icon: Rocket, title: 'Low-Code / No-Code', desc: 'Rapid application development with SAP BTP and AppGyver' },
];

const TechServicesSection = () => (
  <section id="technologies" className="py-24 lg:py-36 relative overflow-hidden">
    {/* Animated background grid */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: 'linear-gradient(hsl(195 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50%) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <AnimatedSection className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
          <Zap className="w-3.5 h-3.5 text-primary" />
          <span className="text-primary font-bold text-xs uppercase tracking-[0.15em]">New Era of Technology</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
          Stepping Into the{' '}
          <span className="gradient-text">Future</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-4">
          Beyond SAP — we've evolved into a full-spectrum technology partner. Explore our next-generation 
          services that combine cutting-edge innovation with enterprise reliability.
        </p>
      </AnimatedSection>

      {/* Upgrade banner */}
      <AnimatedSection className="mb-16" delay={0.1}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass-card p-8 lg:p-10 text-center relative overflow-hidden animated-bg"
          style={{ background: 'linear-gradient(135deg, hsl(215 50% 10%), hsl(200 45% 14%), hsl(195 50% 12%), hsl(215 50% 10%))' }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, hsl(195 100% 50%), transparent 50%), radial-gradient(circle at 70% 50%, hsl(215 80% 50%), transparent 50%)',
          }} />
          <div className="relative z-10">
            <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3" style={{ color: 'hsl(0 0% 95%)' }}>
              🚀 We've Upgraded to the{' '}
              <span className="gradient-text">Next Generation</span>
            </div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(210 20% 65%)' }}>
              From SAP specialists to complete digital transformation partners — 
              Cloud, AI, Cybersecurity, IoT, and beyond.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {techServices.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.06} direction="scale">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="glass-card p-6 h-full group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechServicesSection;
