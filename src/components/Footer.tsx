import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/values', label: 'Our Values' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Project Management',
    'Cost Planning',
    'Procurement & Tendering',
    'Cost Management',
    'Risk & Value Management',
  ];

  return (
    <footer className="gradient-dark text-white border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-accent rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">LNDMS</h3>
                <p className="text-xs sm:text-sm text-gray-400">Cost & Project Management</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Expert Quantity Surveying and Cost Management consultancy serving clients across the UK and UAE.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0" />
              <span>London, England</span>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm sm:text-base text-gray-300 hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-sm sm:text-base text-gray-300 hover:text-accent-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-gray-300">Enquiries@lndms.ae</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-gray-300">+44 7539 866877</p>
                  <p className="text-xs sm:text-sm text-gray-400">Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} LND Management Services. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <button className="text-gray-400 hover:text-accent-500 transition-colors text-xs sm:text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-accent-500 transition-colors text-xs sm:text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
