import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tntLogo from '@/assets/tnt-realty-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={tntLogo} alt="T&T Realty" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm opacity-90">
              Leading real estate consultancy in Delhi NCR since 2014. 
              Your trusted partner for premium properties and investments.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} />
                <span>+91 8088113333</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} />
                <span>info@tandtrealty.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Residential Properties</li>
              <li>Commercial Properties</li>
              <li>Retail Shops</li>
              <li>SCO Plots</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Visit Our Office</h4>
            <div className="flex items-start gap-2 text-sm opacity-90 mb-4">
              <MapPin size={16} className="mt-1" />
              <div>
                2nd Floor, Ameya One,<br />
                Golf Course Road, Sector 42,<br />
                Gurgaon, Haryana 122022
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div>HARERA No: /Ext1/2023/222</div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-4">
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-secondary">
                <Facebook size={16} />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-secondary">
                <Twitter size={16} />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-secondary">
                <Instagram size={16} />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-secondary">
                <Linkedin size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-90">
            Copyright © {currentYear} | T AND T REALTY | All Rights Reserved.
          </div>
          <div className="flex gap-4 text-sm mt-4 md:mt-0">
            <a href="/privacy-policy" className="opacity-90 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <span className="opacity-50">|</span>
            <a href="/terms-conditions" className="opacity-90 hover:opacity-100 transition-opacity">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;