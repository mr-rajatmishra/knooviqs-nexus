import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
}

const CountUp = ({ end, suffix = '', duration = 2 }: Props) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: 18, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'SAP Consultants' },
  { value: 100, suffix: '+', label: 'Happy Clients' },
];

const typingTexts = [
  'SAP S/4HANA Migration',
  'AI-Enabled Automation',
  'Cloud Transformation',
  'Digital Innovation',
];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((p) => (p + 1) % typingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden section-dark">
      {/* Lazy-load 3D scene */}
      <HeroSceneLazy />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(ellipse at 20% 50%, hsl(195 100% 42% / 0.08) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(ellipse at 80% 30%, hsl(215 80% 50% / 0.06) 0%, transparent 50%)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-sm font-semibold tracking-wide" style={{ color: 'hsl(195, 100%, 65%)' }}>
              SAP Solutions Partner Since 2006
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold leading-[1.1] mb-4 tracking-tight"
          >
            Transform Your
            <br />
            Enterprise with
          </motion.h1>

          {/* Animated typed text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-8 h-[4rem] sm:h-[5rem] overflow-hidden"
          >
            <AnimatedTextCycle texts={typingTexts} currentIndex={textIndex} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ color: 'hsl(210, 20%, 65%)' }}
          >
            Unlock unparalleled growth with KNooviq's cutting-edge SAP consulting, 
            AI-enabled automation, and seamless S/4HANA migration services.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a href="#services" className="glow-button inline-flex items-center gap-2 text-sm group">
              Explore Services
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="inline-block">→</motion.span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-400 text-sm font-semibold backdrop-blur-sm"
              style={{ color: 'hsl(210, 20%, 80%)' }}
            >
              Learn More
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center sm:text-left group cursor-default"
              >
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary text-glow">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm mt-2 font-medium" style={{ color: 'hsl(210, 15%, 50%)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
};

const AnimatedTextCycle = ({ texts, currentIndex }: { texts: string[]; currentIndex: number }) => (
  <div className="relative">
    {texts.map((text, i) => (
      <motion.div
        key={text}
        initial={false}
        animate={{
          opacity: i === currentIndex ? 1 : 0,
          y: i === currentIndex ? 0 : 20,
          scale: i === currentIndex ? 1 : 0.95,
        }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0"
        style={{ pointerEvents: i === currentIndex ? 'auto' : 'none' }}
      >
        <span className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold gradient-text leading-[1.1] tracking-tight">
          {text}
        </span>
      </motion.div>
    ))}
  </div>
);

import { lazy, Suspense } from 'react';
const HeroSceneComponent = lazy(() => import('./HeroScene'));
const HeroSceneLazy = () => (
  <Suspense fallback={null}>
    <HeroSceneComponent />
  </Suspense>
);

export default HeroSection;
