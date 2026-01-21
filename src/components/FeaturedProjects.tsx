import { ArrowRight, Calendar, Banknote } from './Icons';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import ropeworksImage from '../../images/ropeworks.jpg';
import gallionsreachImage from '../../images/gallionsreach.jpg';

interface FeaturedProjectsProps {
  onNavigate: (section: string) => void;
}

export default function FeaturedProjects({ onNavigate }: FeaturedProjectsProps) {
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const [projectsRef, projectsVisible] = useStaggeredAnimation<HTMLDivElement>(2, { threshold: 0.15 });
  const projects = [
    {
      title: 'Ropeworks, London',
      client: 'Local Authority',
      value: '£20m',
      completed: 'September 2024',
      scope: 'Fire Rated EWI & Cladding renewal',
      image: ropeworksImage,
    },
    {
      title: 'Galleons Reach, London',
      client: 'Local Authority',
      value: '£25m',
      completed: 'December 2024',
      scope: 'Fire Rated EWI & Cladding upgrade across 6 residential complexes',
      image: gallionsreachImage,
    },
  ];

  return (
    <section className="min-h-screen flex items-center bg-dark-950 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mb-6 sm:mb-8 scroll-fade-up ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="text-xs font-medium text-accent-400 mb-2 sm:mb-3 uppercase tracking-wide">
            Portfolio
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-serif italic text-gray-100 leading-tight max-w-2xl">
              Featured Projects
              <span className="text-accent-500"> that define excellence</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
              Delivering high-value construction management across the UK and UAE
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-dark-900 rounded-2xl overflow-hidden border border-dark-700 hover:border-accent-500/30 transition-all duration-500 scroll-scale-in ${projectsVisible[index] ? 'visible' : ''}`}
            >
              {/* Image */}
              <div className="h-40 sm:h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
                
                {/* Project Number Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    0{index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif italic text-white mb-1 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent-400 uppercase tracking-wide font-medium">{project.client}</p>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {project.scope}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 sm:gap-6 pt-3 sm:pt-4 border-t border-dark-700">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0">
                      <Banknote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">Value</p>
                      <p className="text-xs sm:text-sm font-bold text-white">{project.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide">Completed</p>
                      <p className="text-xs sm:text-sm font-bold text-white truncate">{project.completed}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center scroll-fade-up ${projectsVisible[1] ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm sm:text-base text-white font-medium hover:bg-white/20 transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
