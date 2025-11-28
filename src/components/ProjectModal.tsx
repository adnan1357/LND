import { X } from './Icons';

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

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-dark-900 border border-dark-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn scroll-smooth"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-dark-800/90 hover:bg-dark-700 rounded-full transition-all duration-200 border border-dark-600 hover:scale-110 hover:border-accent-600"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-300 hover:text-white transition-colors duration-200" />
        </button>

        {/* Project Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.projectName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-4 py-2 bg-accent-600/90 backdrop-blur-sm rounded-full text-xs font-semibold tracking-wide mb-3">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {project.projectName}
            </h2>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 sm:p-8">
          {/* Key Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 transition-all duration-200 hover:border-accent-600/50 hover:bg-dark-800/80">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Location</p>
              <p className="text-white font-medium">{project.location}</p>
            </div>
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 transition-all duration-200 hover:border-accent-600/50 hover:bg-dark-800/80">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Client</p>
              <p className="text-white font-medium">{project.client}</p>
            </div>
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 transition-all duration-200 hover:border-accent-600/50 hover:bg-dark-800/80">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Contract Sum</p>
              <p className="text-white font-medium">{project.contractSum}</p>
            </div>
            <div className="bg-dark-800 border border-dark-700 rounded-lg p-4 transition-all duration-200 hover:border-accent-600/50 hover:bg-dark-800/80">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Completion Date</p>
              <p className="text-white font-medium">{project.completionDate}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Additional Details */}
          <div className="space-y-4 border-t border-dark-700 pt-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">Our Services</p>
              <p className="text-white">{project.services}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Scope</p>
              <p className="text-white">{project.scope}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Contract Type</p>
              <p className="text-white">{project.contractType}</p>
            </div>
            {project.mainContractor && (
              <div>
                <p className="text-sm text-gray-400 mb-1">Main Contractor</p>
                <p className="text-white">{project.mainContractor}</p>
              </div>
            )}
            {project.architects && (
              <div>
                <p className="text-sm text-gray-400 mb-1">Architects</p>
                <p className="text-white">{project.architects}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

