import { ArrowRight, Calendar, Banknote } from './Icons';
import ropeworksImage from '../../images/ropeworks.jpg';
import gallionsreachImage from '../../images/gallionsreach.jpg';

interface FeaturedProjectsProps {
  onNavigate: (section: string) => void;
}

export default function FeaturedProjects({ onNavigate }: FeaturedProjectsProps) {
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
    <section className="h-screen flex items-center bg-dark-950 py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xs font-medium text-accent-400 mb-3 uppercase tracking-wide">
            Portfolio
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif italic text-gray-100 leading-tight max-w-2xl">
              Featured Projects
              <span className="text-accent-500"> that define excellence</span>
            </h3>
            <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
              Delivering high-value construction management across the UK and UAE
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-dark-900 rounded-2xl overflow-hidden border border-dark-700 hover:border-accent-500/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent"></div>
                
                {/* Project Number Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center text-white font-bold text-base">
                    0{index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl lg:text-2xl font-serif italic text-white mb-1 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent-400 uppercase tracking-wide font-medium">{project.client}</p>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.scope}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-6 pt-4 border-t border-dark-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center">
                      <Banknote className="w-4 h-4 text-accent-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Value</p>
                      <p className="text-sm font-bold text-white">{project.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-accent-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Completed</p>
                      <p className="text-sm font-bold text-white">{project.completed}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
