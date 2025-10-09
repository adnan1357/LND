import { MapPin, Calendar, Banknote, CheckCircle2, Clock } from './Icons';

export default function Projects() {
  const projects = [
    {
      title: 'Ropeworks, London',
      client: 'Local Authority',
      value: '£20m',
      status: 'completed',
      completed: 'September 2024',
      scope: 'Fire Rated EWI & Cladding renewal',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Galleons Reach, London',
      client: 'Local Authority',
      value: '£25m',
      status: 'completed',
      completed: 'December 2024',
      scope: 'Fire Rated EWI & Cladding upgrade across 6 residential complexes',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'John Walsh & Fred Wigg, London',
      client: 'Local Authority',
      value: '£15-20m',
      status: 'ongoing',
      scope: 'Building Safety Works including comprehensive fire safety remediation and compliance upgrades',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80',
    },
    {
      title: 'Kirkstead Court, London',
      client: 'Local Authority',
      value: '£5m',
      status: 'ongoing',
      scope: 'Heating & sprinkler system upgrade to meet Building Safety Regulations 2022',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Delivering excellence across high-value construction and building safety projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card card-hover overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                    {project.status === 'completed' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-300" />
                        <span className="text-sm text-white font-medium">Completed</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-4 h-4 text-amber-300" />
                        <span className="text-sm text-white font-medium">On-Going</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.client}</span>
                </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-dark-700">
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Banknote className="w-5 h-5 text-accent-500" />
                      <span className="text-sm font-medium">Project Value</span>
                    </div>
                    <p className="text-xl font-bold text-gray-100">{project.value}</p>
                  </div>
                  {project.completed && (
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <Calendar className="w-5 h-5 text-accent-500" />
                        <span className="text-sm font-medium">Completed</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-100">{project.completed}</p>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Scope of Work
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Project Expertise
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our portfolio demonstrates extensive experience in managing complex building safety projects,
              particularly in fire safety remediation and Building Safety Regulations 2022 compliance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <p className="text-3xl font-bold text-blue-900 mb-2">£85m+</p>
                <p className="text-gray-700">Total Project Value</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6">
                <p className="text-3xl font-bold text-amber-700 mb-2">4</p>
                <p className="text-gray-700">Major Projects</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <p className="text-3xl font-bold text-blue-900 mb-2">100%</p>
                <p className="text-gray-700">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
