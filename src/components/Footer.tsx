import { Link, useLocation } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, ArrowRight } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleServiceClick = (e: React.MouseEvent, serviceId: string) => {
    if (location.pathname === '/services') {
      e.preventDefault();
      const element = document.getElementById(serviceId);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        window.dispatchEvent(new CustomEvent('highlightService', { detail: serviceId }));
      }
      window.history.pushState(null, '', `/services#${serviceId}`);
    }
  };

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/values', label: 'Our Values' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    { label: 'Project Management', id: 'project-management' },
    { label: 'Cost Planning', id: 'cost-planning' },
    { label: 'Procurement & Tendering', id: 'procurement-tendering' },
    { label: 'Post Contract Cost Management', id: 'post-contract-management' },
    { label: 'Risk & Value Management', id: 'risk-value-management' },
  ];

  const linkClass =
    'group flex items-center gap-2 text-sm text-gray-400 hover:text-accent-400 transition-all duration-200';

  return (
    <footer className="relative bg-dark-950 text-white overflow-hidden grid-pattern-overlay">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-20 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shadow-lg shadow-accent-600/20">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold tracking-tight text-white">
                  LNDMS
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-500/90 font-medium mt-0.5">
                  Cost & Project Management
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-6 max-w-xs">
              Expert Quantity Surveying and Cost Management consultancy serving clients across the UK and UAE.
            </p>
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <div className="w-8 h-8 rounded-lg bg-dark-800/80 flex items-center justify-center border border-dark-700/50">
                <MapPin className="w-4 h-4 text-accent-500" />
              </div>
              <span>London, England</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    <ArrowRight className="w-3.5 h-3.5 text-accent-500/70 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    onClick={(e) => handleServiceClick(e, service.id)}
                    className={linkClass}
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-accent-500/70 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-5">
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:Enquiries@lndms.ae"
                  className="group/contact flex items-start gap-4 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-dark-800/80 flex items-center justify-center border border-dark-700/50 flex-shrink-0 group-hover/contact:border-accent-500/30 group-hover/contact:bg-accent-500/5 transition-colors">
                    <Mail className="w-4 h-4 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">Email</p>
                    <p className="text-[15px]">Enquiries@lndms.ae</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+447539866877"
                  className="group/contact flex items-start gap-4 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-dark-800/80 flex items-center justify-center border border-dark-700/50 flex-shrink-0 group-hover/contact:border-accent-500/30 group-hover/contact:bg-accent-500/5 transition-colors">
                    <Phone className="w-4 h-4 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">Phone</p>
                    <p className="text-[15px]">+44 7539 866877</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Mon – Fri, 9:00 – 18:00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-800/80">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-[13px] text-center md:text-left order-2 md:order-1">
              © {currentYear} LND Management Services. All rights reserved.
            </p>
            <div className="flex items-center gap-8 order-1 md:order-2">
              <button className="text-gray-500 hover:text-accent-400 text-[13px] transition-colors duration-200">
                Privacy Policy
              </button>
              <span className="w-px h-4 bg-dark-700" />
              <button className="text-gray-500 hover:text-accent-400 text-[13px] transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
