import { useState, useEffect } from 'react';
import { ArrowRight } from './Icons';
import ProjectModal from './ProjectModal';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1920&q=85';

interface ProjectsProps {
  onNavigate?: (section: string) => void;
}

interface ProjectDetails {
  projectName: string;
  location: string;
  client: string;
  services: string;
  scope: string;
  contractSum: string;
  completionDate: string;
  contractType: string;
  mainContractor?: string;
  architects?: string;
  description: string;
  image: string;
  category: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  bgColor: string;
  details: ProjectDetails;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects: Project[] = [
    {
      title: 'Fire Safety Remediation at Ropeworks Tower',
      category: 'BUILDING SAFETY',
      description: 'Complete fire safety remediation project for a 24-story residential tower in London. Implemented comprehensive fire-rated EWI system and cladding renewal, ensuring full compliance with Building Safety Regulations 2022...',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bgColor: 'from-slate-900/95 to-slate-800/90',
      details: {
        projectName: 'Ropeworks',
        location: 'London, (UK)',
        client: 'Local Authority',
        services: 'Quantity Surveying',
        scope: 'Full Pre & Post Contract Cost Management',
        contractSum: '£20m',
        completionDate: 'September 2024',
        contractType: 'JCT Intermediate Contract with Contractor\'s Design Portion 2016',
        mainContractor: 'Guildmore Façades',
        architects: 'The DSC Surveyors',
        description: 'LND Management Services were appointed to provide Quantity Surveying and Project Management services for the renewal of the Fire Rated EWI and Cladding system, to meet the current Building Safety Regulation 2022.\n\nOur services included pre & post planning cost consultancy, tendering and procurement, and construction phase Quantity Surveying and Project Management. LNDMS acted as the full-time Quantity Surveyor on this project for our client.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        category: 'BUILDING SAFETY',
      },
    },
    {
      title: 'Multi-Site Cladding Upgrade Programme',
      category: 'MAJOR WORKS',
      description: 'Galleons Reach is a large-scale development featuring extensive fire safety and cladding upgrade works across 6 residential complexes. The project demonstrates our capability in managing complex, multi-phase construction programmes...',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bgColor: 'from-emerald-800/90 to-emerald-700/85',
      details: {
        projectName: 'Galleons Reach',
        location: 'London, (UK)',
        client: 'Local Authority',
        services: 'Quantity Surveying',
        scope: 'Full Pre & Post Contract Cost Management',
        contractSum: '£25m',
        completionDate: 'December 2024',
        contractType: 'JCT Intermediate Contract with Design & Build 2016',
        mainContractor: 'Guildmore Façades',
        architects: 'The DSC Surveyors',
        description: 'LND Management Services were appointed to provide Quantity Surveying and Project Management services for the upgrade of the Fire Rated EWI and Cladding system on six new residential apartment complexes to meet the current Building Safety Regulation 2022.\n\nOur services included pre & post planning cost consultancy, tendering and procurement, and construction phase Quantity Surveying and Project Management. LNDMS acted as the full-time Quantity Surveyor on this project for our client.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        category: 'MAJOR WORKS',
      },
    },
    {
      title: 'Comprehensive Building Safety Transformation',
      category: 'BUILDING SAFETY',
      description: 'The project focused on comprehensive fire safety remediation and compliance upgrades for John Walsh & Fred Wigg towers. Our team implemented state-of-the-art safety systems while residents remained in occupation...',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80',
      bgColor: 'from-blue-900/90 to-blue-800/85',
      details: {
        projectName: 'John Walsh & Fred Wigg',
        location: 'London, (UK)',
        client: 'Local Authority',
        services: 'Quantity Surveying / Project Management',
        scope: 'Full Pre & Post Contract Cost Management',
        contractSum: '£15-20m',
        completionDate: 'On-Going',
        contractType: 'Partnering Contract',
        description: 'LND Management Services has been appointed to provide Quantity Surveying and Project Management services for the upgrade of the Fire Rated EWI and Cladding system, Building Safety Works (Fire Stopping, Fire Doors, Sprinkler System, Fire Compartmentation, Fire Alarms and Emergency Lighting) on Two Number residential apartment complexes to meet the current Building Safety Regulation 2022.\n\nOur services included pre & post planning cost consultancy, tendering and procurement, monthly client valuations, management of all supply chain, variations and construction phase Quantity Surveying and Project Management.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80',
        category: 'BUILDING SAFETY',
      },
    },
    {
      title: 'Modern Systems Integration Project',
      category: 'MECHANICAL & ELECTRICAL',
      description: 'Kirkstead Court required a complete heating and sprinkler system upgrade to meet Building Safety Regulations 2022. The project showcases our expertise in integrating modern MEP systems into existing residential buildings...',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
      bgColor: 'from-amber-800/90 to-orange-700/85',
      details: {
        projectName: 'Kirkstead Court',
        location: 'London, (UK)',
        client: 'Local Authority',
        services: 'Quantity Surveying / Project Management',
        scope: 'Full Pre & Post Contract Cost Management',
        contractSum: '£5m',
        completionDate: 'On-Going',
        contractType: 'JCT Intermediate Contract with Design & Build 2016',
        description: 'LND Management Services has been appointed to provide Quantity Surveying and Project Management services for the upgrade heating and sprinkler system for Kirkstead Court. LND have assisted our client with the Estimating, Design and Pre-Construction Phase of the project. Now our client have appointed LND to manage the delivery phase of the project. This includes:\n- Procurement\n- Managing Site Set Up\n- Managing Supply Chain\n- Identifying Risks & Opportunities\n- Managing Variations\n- Monthly Financial Reports',
        image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
        category: 'MECHANICAL & ELECTRICAL',
      },
    },
  ];

  const handleReadMore = (project: Project) => {
    setSelectedProject(project.details);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <div className="bg-dark-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full overflow-hidden flex flex-col justify-center">
        <img
          src={HERO_IMAGE}
          alt="Construction and building projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-28">
          <div className="max-w-4xl">
            <span className={`inline-block px-4 py-2 md:px-5 md:py-2.5 bg-white/[0.06] backdrop-blur-md border border-white/25 border-l-2 border-l-accent-400 rounded-full text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-white mb-6 transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Case Studies
            </span>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold italic text-white leading-tight mb-6 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Where Every Project
              <br />
              <span className="text-accent-400">Tells a Story</span>
            </h1>
            <p className={`text-white/90 text-base sm:text-lg max-w-2xl mb-8 transition-all duration-700 delay-[400ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              From fire safety remediation to major works — explore the projects we&apos;ve delivered across the UK and UAE.
            </p>
            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <button
                onClick={() => document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium hover:bg-white/20 transition-all duration-300 group"
              >
                View case studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500/90 hover:bg-accent-500 text-white rounded-full text-sm font-medium transition-all duration-300"
                >
                  Start a project
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies — one section per project, alternating text left/right */}
      <div id="projects-grid">
        {projects.map((project, index) => {
          const textLeft = index % 2 === 0;
          return (
            <section
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 min-h-0 ${index > 0 ? 'border-t border-dark-800' : ''}`}
            >
              {/* Text block — first when textLeft; when textRight: first on mobile, second on lg */}
              <div
                className={`flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-16 ${!textLeft ? 'order-1 lg:order-2' : ''}`}
              >
                <div className="max-w-xl mx-auto lg:mx-0 w-full">
                  <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent-600/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold tracking-wide text-white mb-4 sm:mb-5">
                    {project.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                    {project.description}
                  </p>
                  <button
                    onClick={() => handleReadMore(project)}
                    className="inline-flex items-center gap-2 text-accent-400 font-semibold text-xs sm:text-sm uppercase tracking-wider hover:gap-3 hover:text-accent-300 transition-all duration-300"
                  >
                    READ MORE
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Image block — second when textLeft; when textRight: second on mobile, first on lg */}
              <div
                className={`relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden ${!textLeft ? 'order-2 lg:order-1' : ''}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </section>
          );
        })}
      </div>

      {/* Project Expertise — editorial block */}
      <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Copy — left */}
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent-500/80 font-semibold mb-4">
                By the Numbers
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-5">
                Project Expertise
              </h3>
              <p className="text-[15px] sm:text-base text-gray-400 leading-relaxed max-w-lg">
                Our portfolio demonstrates extensive experience in managing complex building safety
                projects, particularly in fire safety remediation and Building Safety Regulations 2022
                compliance.
              </p>
            </div>

            {/* Stats — right, typographic, no cards */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row sm:flex-wrap gap-10 sm:gap-0 sm:justify-between lg:justify-end lg:gap-x-16 xl:gap-x-20">
              <div className="sm:pr-8 lg:pr-0 sm:border-r border-dark-700/70 lg:border-r-0">
                <p className="font-serif text-4xl sm:text-5xl font-semibold text-white tabular-nums">£85m+</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-gray-500 mt-1.5">Total project value</p>
              </div>
              <div className="sm:px-8 lg:px-0 sm:border-r border-dark-700/70 lg:border-r-0">
                <p className="font-serif text-4xl sm:text-5xl font-semibold text-white tabular-nums">4</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-gray-500 mt-1.5">Major projects</p>
              </div>
              <div>
                <p className="font-serif text-4xl sm:text-5xl font-semibold text-white tabular-nums">100%</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-gray-500 mt-1.5">Client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
