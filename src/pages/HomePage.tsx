import Hero from '../components/Hero';
import AboutHomepage from '../components/AboutHomepage';
import ServicesOverview from '../components/ServicesOverview';
import FeaturedProjects from '../components/FeaturedProjects';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };

  return (
    <div>
      <Hero onNavigate={handleNavigate} />
      <AboutHomepage />
      <ServicesOverview onNavigate={handleNavigate} />
      <FeaturedProjects onNavigate={handleNavigate} />
    </div>
  );
}
