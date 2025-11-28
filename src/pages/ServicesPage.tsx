import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Services from '../components/Services';

export default function ServicesPage() {
  const location = useLocation();

  const handleNavigate = (section: string) => {
    // Navigate to the specified section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If section doesn't exist on current page, navigate to home page with hash
      window.location.href = `/#${section}`;
    }
  };

  // Handle hash changes when already on the page
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const scrollToElement = () => {
        const element = document.getElementById(hash);
        if (element) {
          // Use offset scrolling to account for any fixed headers
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        } else {
          // Retry if element not found
          setTimeout(scrollToElement, 100);
        }
      };
      setTimeout(scrollToElement, 300);
    }
  }, [location.hash]);

  return (
    <div>
      <Services onNavigate={handleNavigate} />
    </div>
  );
}
