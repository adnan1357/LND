import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from './Icons';

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/values', label: 'Our Values' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && (location.pathname === '/' || location.pathname === '/home')) {
      return true;
    }
    return location.pathname === path;
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* Logo - Left */}
        <div className="flex justify-start">
          <Link
            to="/"
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <Building2 className="w-7 h-7 text-gray-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">LNDMS</h1>
            </div>
          </Link>
        </div>

        {/* Centered Navigation */}
        <div className="flex justify-center">
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info - Right */}
        <div className="flex justify-end">
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-white/80 text-sm">+44 (0) 20 XXXX XXXX</span>
            <button
              onClick={() => handleMobileMenuClose()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                <Building2 className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden mx-6">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMobileMenuClose}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
