import Projects from '../components/Projects';

export default function ProjectsPage() {
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

  return (
    <div>
      <Projects onNavigate={handleNavigate} />
    </div>
  );
}
