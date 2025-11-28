import { useState } from 'react';
import { ArrowRight } from './Icons';
import ProjectModal from './ProjectModal';

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
      {/* Page Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-100 mb-4 font-serif">
            Case Studies
          </h1>
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-dark-800 hover:border-dark-700 transition-all duration-300 h-[400px] sm:h-[450px] md:h-[500px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} transition-opacity duration-300`}></div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 text-white">
                  {/* Top Content */}
                  <div>
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent-600/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold tracking-wide mb-4 sm:mb-6">
                      {project.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
                      {project.title}
                    </h2>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 max-w-xl">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-3 sm:mb-4">
                Project Expertise
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                Our portfolio demonstrates extensive experience in managing complex building safety projects,
                particularly in fire safety remediation and Building Safety Regulations 2022 compliance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 sm:p-8 hover:border-accent-600 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-accent-500 mb-2">£85m+</p>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">Total Project Value</p>
                </div>
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 sm:p-8 hover:border-accent-600 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-accent-500 mb-2">4</p>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">Major Projects</p>
                </div>
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 sm:p-8 hover:border-accent-600 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-accent-500 mb-2">100%</p>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
