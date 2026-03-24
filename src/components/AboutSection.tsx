import AnimatedSection from './AnimatedSection';
import { Shield, Cpu, Users, Globe } from 'lucide-react';

const highlights = [
  { icon: Shield, title: 'SAP Gold Partner', desc: 'Certified expertise across all SAP modules' },
  { icon: Cpu, title: 'AI-Enabled Solutions', desc: 'Intelligent automation and predictive analytics' },
  { icon: Users, title: '50+ SAP Experts', desc: 'Seasoned consultants with domain expertise' },
  { icon: Globe, title: 'Global Delivery', desc: 'Serving clients across continents' },
];

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Your Trusted <span className="gradient-text">SAP Consulting</span> Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              KNooviq Industries, established in 2006, delivers comprehensive SAP Consulting and Solutions. 
              With strong technical skills and excellent domain expertise, we have successfully served 
              enterprises across project management, application development, manpower outsourcing, 
              and digital transformation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of 50+ certified SAP consultants brings deep industry knowledge in Retail, 
              Metals & Mining, Oil & Gas, and Manufacturing sectors, enabling seamless digital 
              transformation journeys for our clients.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
