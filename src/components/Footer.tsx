import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border/50 py-16 relative">
    <div className="absolute inset-0 bg-muted/20 dark:bg-transparent" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="font-display font-extrabold text-primary-foreground text-sm">K</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg block leading-tight">KNooviq</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">Industries Pvt Ltd</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            SAP Consulting & Solutions since 2006. Driving digital transformation for enterprises worldwide with cutting-edge technology.
          </p>
          <div className="flex gap-2">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {['SAP S/4HANA Migration', 'SAP Consulting', 'AI Automation', 'Cloud Migration', 'Corporate Training'].map(s => (
              <li key={s}><a href="#services" className="hover:text-primary transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Industries', href: '#industries' },
              { label: 'Our Team', href: '#team' },
              { label: 'Clients', href: '#clients' },
              { label: 'Career', href: '#contact' },
            ].map(l => (
              <li key={l.label}><a href={l.href} className="hover:text-primary transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-5">Contact Info</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>+91-7900073410</li>
            <li>admin@knooviq.com</li>
            <li>B15, Shree Siddhivinayak Plaza, Opp. City Mall, Off Link Road, Andheri(W), Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} KNooviq Industries Pvt. Ltd. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
