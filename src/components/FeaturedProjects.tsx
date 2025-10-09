import { ArrowRight, Calendar, Banknote } from './Icons';

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
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Galleons Reach, London',
      client: 'Local Authority',
      value: '£25m',
      completed: 'December 2024',
      scope: 'Fire Rated EWI & Cladding upgrade across 6 residential complexes',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Delivering excellence across high-value construction projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card card-hover overflow-hidden"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-accent-300">{project.client}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Banknote className="w-5 h-5 text-accent-500" />
                    <span className="text-sm font-semibold">{project.value}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-5 h-5 text-accent-500" />
                    <span className="text-sm">{project.completed}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold">Scope:</span> {project.scope}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('projects')}
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
