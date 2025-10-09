import { ArrowRight, Award, MapPin, Briefcase } from './Icons';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Full Background Image */}
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Construction site with modern architecture"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      
      {/* Slide Indicators */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 space-y-4 z-10">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-sm font-bold">01</div>
        <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 font-medium">
              UK & UAE Coverage | 10+ Years Excellence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif italic text-white leading-tight mb-8">
            Where Every Project
            <br />
            <span className="text-accent-400">Tells a Story!</span>
          </h1>
          
          <div className="mb-12">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 group"
            >
              Schedule a consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90">
              Consultation
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90">
              Cost Management
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90">
              Project Planning
            </span>
          </div>
        </div>
      </div>


      {/* Social Icons - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="flex gap-4 mb-4">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
            <Award className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
            <Briefcase className="w-5 h-5" />
          </div>
        </div>
        <p className="text-white/80 text-sm max-w-xs">
          We help you to manage your construction projects with precision and expertise. 
          Delivered by qualified professionals.
        </p>
      </div>
    </section>
  );
}
