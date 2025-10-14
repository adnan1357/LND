import { ArrowRight } from './Icons';

interface ProjectsProps {
  onNavigate?: (section: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const projects = [
    {
      title: 'Fire Safety Remediation at Ropeworks Tower',
      category: 'BUILDING SAFETY',
      description: 'Complete fire safety remediation project for a 24-story residential tower in London. Implemented comprehensive fire-rated EWI system and cladding renewal, ensuring full compliance with Building Safety Regulations 2022...',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bgColor: 'from-slate-900/95 to-slate-800/90',
    },
    {
      title: 'Multi-Site Cladding Upgrade Programme',
      category: 'MAJOR WORKS',
      description: 'Galleons Reach is a large-scale development featuring extensive fire safety and cladding upgrade works across 6 residential complexes. The project demonstrates our capability in managing complex, multi-phase construction programmes...',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bgColor: 'from-emerald-800/90 to-emerald-700/85',
    },
    {
      title: 'Comprehensive Building Safety Transformation',
      category: 'BUILDING SAFETY',
      description: 'The project focused on comprehensive fire safety remediation and compliance upgrades for John Walsh & Fred Wigg towers. Our team implemented state-of-the-art safety systems while residents remained in occupation...',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80',
      bgColor: 'from-blue-900/90 to-blue-800/85',
    },
    {
      title: 'Modern Systems Integration Project',
      category: 'MECHANICAL & ELECTRICAL',
      description: 'Kirkstead Court required a complete heating and sprinkler system upgrade to meet Building Safety Regulations 2022. The project showcases our expertise in integrating modern MEP systems into existing residential buildings...',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
      bgColor: 'from-amber-800/90 to-orange-700/85',
    },
  ];

  return (
    <div className="bg-dark-950 min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 mb-4 font-serif italic">
            Case Studies
          </h1>
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-dark-800 hover:border-dark-700 transition-all duration-300 h-[500px]"
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
                <div className="relative h-full flex flex-col justify-between p-8 md:p-10 text-white">
                  {/* Top Content */}
                  <div>
                    <span className="inline-block px-4 py-2 bg-accent-600/90 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide mb-6">
                      {project.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                      {project.title}
                    </h2>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                      {project.description}
                    </p>
                    <button 
                      onClick={() => onNavigate?.('contact')}
                      className="inline-flex items-center gap-2 text-accent-400 font-semibold text-sm uppercase tracking-wider hover:gap-3 hover:text-accent-300 transition-all duration-300"
                    >
                      READ MORE 
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-dark-900 border border-dark-800 rounded-2xl p-12 shadow-lg">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                Project Expertise
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                Our portfolio demonstrates extensive experience in managing complex building safety projects,
                particularly in fire safety remediation and Building Safety Regulations 2022 compliance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 hover:border-accent-600 transition-all duration-300">
                  <p className="text-4xl font-bold text-accent-500 mb-2">£85m+</p>
                  <p className="text-gray-300 font-medium">Total Project Value</p>
                </div>
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 hover:border-accent-600 transition-all duration-300">
                  <p className="text-4xl font-bold text-accent-500 mb-2">4</p>
                  <p className="text-gray-300 font-medium">Major Projects</p>
                </div>
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 hover:border-accent-600 transition-all duration-300">
                  <p className="text-4xl font-bold text-accent-500 mb-2">100%</p>
                  <p className="text-gray-300 font-medium">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
