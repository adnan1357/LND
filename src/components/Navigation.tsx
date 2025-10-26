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

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-3"
          >
            <img 
              src="/images/logo.png" 
              alt="LNDMS Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Centered Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-white'
                    : isScrolled ? 'text-white/80 hover:text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info - Right */}
        <div className="flex items-center">
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col text-right">
              <span className="text-sm whitespace-nowrap text-white/80">🇬🇧 +44 7539 866877</span>
              <span className="text-sm whitespace-nowrap text-white/80">🇦🇪 +971 50 439 5060</span>
            </div>
            <button
              onClick={() => handleMobileMenuClose()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
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
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors ml-4"
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
                onClick={handleNavClick}
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
