const Footer = () => (
  <footer className="border-t border-border/50 py-12 bg-muted/20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">K</span>
            </div>
            <span className="font-display font-bold text-lg">KNooviq</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SAP Consulting & Solutions since 2006. Driving digital transformation for enterprises worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary transition-colors">SAP S/4HANA Migration</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">SAP Consulting</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">AI Automation</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Corporate Training</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Industries</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#industries" className="hover:text-primary transition-colors">Retail</a></li>
            <li><a href="#industries" className="hover:text-primary transition-colors">Metals & Mining</a></li>
            <li><a href="#industries" className="hover:text-primary transition-colors">Oil & Gas</a></li>
            <li><a href="#industries" className="hover:text-primary transition-colors">Manufacturing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>admin@knooviq.com</li>
            <li>+91-7900073410</li>
            <li>India • Global Delivery</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} KNooviq Industries Pvt. Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
