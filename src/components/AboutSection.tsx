import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Shield, Cpu, Users, Globe, Target, Award } from 'lucide-react';

const highlights = [
  { icon: Shield, title: 'SAP Certified', desc: 'Certified expertise across all SAP modules and technologies' },
  { icon: Cpu, title: 'AI-Powered', desc: 'Intelligent automation and predictive analytics solutions' },
  { icon: Users, title: '50+ Experts', desc: 'Seasoned consultants with deep domain knowledge' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving enterprises across continents' },
  { icon: Target, title: 'On-Time Delivery', desc: 'Consistent track record of deadline excellence' },
  { icon: Award, title: 'Quality First', desc: 'Non-negotiable standards in every project' },
];

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-36 relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03]" 
      style={{ background: 'radial-gradient(circle, hsl(195 100% 50%), transparent 70%)' }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
        <div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.15em]">Who We Are</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 tracking-tight">
              Your Trusted{' '}
              <span className="gradient-text">SAP Consulting</span>{' '}
              Partner
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                KNooviq Industries, established in 2006, delivers comprehensive SAP Consulting and Solutions 
                with strong technical skills and excellent domain expertise.
              </p>
              <p>
                We have successfully served enterprises across project management, application development, 
                customized solutions, manpower outsourcing, and augmentation. Our implementation exposure 
                across industries like Retail, Metals & Mining, Oil & Gas, and Manufacturing has proven our 
                credentials in the market.
              </p>
              <p>
                We recognized quality of services, on-time delivery, and expertise in turnkey business 
                solutions as our forte. KNooviq gives Organization Strategies to key sectors including 
                Automotive, Manufacturing, Trading & Distribution, and many more.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="right" delay={0.2}>
          <div className="relative">
            {/* Main visual card */}
            <div className="glass-card p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'linear-gradient(135deg, hsl(195 100% 50%), hsl(215 80% 40%))' }} />
              <div className="relative space-y-8">
                <div>
                  <div className="font-display text-6xl font-extrabold text-primary mb-2">2006</div>
                  <div className="text-muted-foreground font-medium">Year Established</div>
                </div>
                <div className="h-px bg-border" />
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">14+</div>
                    <div className="text-sm text-muted-foreground">Industries Served</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">25+</div>
                    <div className="text-sm text-muted-foreground">SAP Modules</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">99%</div>
                    <div className="text-sm text-muted-foreground">Client Retention</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10 animate-float" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-primary/5 -z-10 animate-float-delayed" />
          </div>
        </AnimatedSection>
      </div>

      {/* Highlights grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {highlights.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08} direction="scale">
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="glass-card p-6 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
