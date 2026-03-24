import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Database, RefreshCw, Layers, GraduationCap, Bot, Settings } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'SAP S/4HANA Migration',
    desc: 'Seamless transition from legacy SAP systems to S/4HANA with zero-downtime strategies and comprehensive data migration.',
    features: ['Greenfield & Brownfield', 'Data Migration', 'System Conversion'],
  },
  {
    icon: RefreshCw,
    title: 'SAP Consulting',
    desc: 'End-to-end SAP consulting services covering implementation, optimization, and strategic roadmap planning.',
    features: ['Implementation', 'Optimization', 'Roadmap Planning'],
  },
  {
    icon: Layers,
    title: 'Application Management',
    desc: 'Comprehensive SAP application management services ensuring peak performance and continuous improvement.',
    features: ['24/7 Support', 'Performance Tuning', 'Continuous Improvement'],
  },
  {
    icon: Bot,
    title: 'AI-Enabled Automation',
    desc: 'Leverage artificial intelligence and machine learning to automate business processes and drive intelligent insights.',
    features: ['Process Automation', 'Predictive Analytics', 'Smart Workflows'],
  },
  {
    icon: Settings,
    title: 'Integration Services',
    desc: 'Seamless integration of SAP with third-party systems, APIs, and cloud platforms for unified operations.',
    features: ['API Integration', 'Cloud Connect', 'Middleware Solutions'],
  },
  {
    icon: GraduationCap,
    title: 'SAP Corporate Training',
    desc: 'Expert-led training programs to upskill your workforce on the latest SAP technologies and best practices.',
    features: ['Module Training', 'Certification Prep', 'Custom Workshops'],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
          Enterprise <span className="gradient-text">SAP Solutions</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive SAP services designed to accelerate your digital transformation journey
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="glass-card p-8 h-full group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
