import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Database, RefreshCw, Layers, GraduationCap, Bot, Settings, Headphones, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'SAP S/4HANA Migration',
    desc: 'Seamless transition from legacy SAP systems to S/4HANA with zero-downtime strategies.',
    features: ['Greenfield & Brownfield', 'Data Migration', 'System Conversion'],
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: RefreshCw,
    title: 'SAP Consulting & Outsourcing',
    desc: 'End-to-end SAP consulting covering implementation, optimization, and strategic roadmap.',
    features: ['Implementation', 'Optimization', 'Roadmap Planning'],
    gradient: 'from-cyan-500/10 to-teal-500/10',
  },
  {
    icon: Layers,
    title: 'Application Management',
    desc: 'Comprehensive SAP application management ensuring peak performance and continuous improvement.',
    features: ['24/7 Support', 'Performance Tuning', 'Improvement'],
    gradient: 'from-teal-500/10 to-emerald-500/10',
  },
  {
    icon: Bot,
    title: 'AI-Enabled Automation',
    desc: 'Leverage AI and machine learning to automate business processes and drive intelligent insights.',
    features: ['Process Automation', 'Analytics', 'Smart Workflows'],
    gradient: 'from-violet-500/10 to-blue-500/10',
  },
  {
    icon: Settings,
    title: 'Integration Services',
    desc: 'Seamless integration of SAP with third-party systems, APIs, and cloud platforms.',
    features: ['API Integration', 'Cloud Connect', 'Middleware'],
    gradient: 'from-orange-500/10 to-amber-500/10',
  },
  {
    icon: Headphones,
    title: 'SAP Support',
    desc: 'Optimize your resources with our broad range of SAP support and day-to-day operations management.',
    features: ['L1/L2/L3 Support', 'Incident Mgmt', 'SLA-Based'],
    gradient: 'from-pink-500/10 to-rose-500/10',
  },
  {
    icon: Smartphone,
    title: 'SAP Mobility',
    desc: 'Real-time business roles on all compatible devices with unmatched responsiveness.',
    features: ['Mobile Apps', 'Fiori UX', 'Responsive Design'],
    gradient: 'from-indigo-500/10 to-violet-500/10',
  },
  {
    icon: GraduationCap,
    title: 'SAP Corporate Training',
    desc: 'Expert-led training programs to upskill your workforce on latest SAP technologies.',
    features: ['Module Training', 'Certification', 'Workshops'],
    gradient: 'from-emerald-500/10 to-cyan-500/10',
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-36 relative">
    <div className="absolute inset-0 bg-muted/30 dark:bg-transparent" />
    <div className="absolute inset-0 dark:opacity-100 opacity-0" style={{ background: 'var(--gradient-section)' }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.15em]">Our Services</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
          Enterprise <span className="gradient-text">SAP Solutions</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Comprehensive SAP services designed to accelerate your digital transformation journey with excellence and precision.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.06} direction="scale">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="glass-card p-7 h-full group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((f) => (
                    <span key={f} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/8 text-primary font-semibold">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
