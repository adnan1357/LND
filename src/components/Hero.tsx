import { ArrowRight, Award, MapPin, Briefcase } from './Icons';
import landingImage from '../../images/landing.jpg';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Full Background Image */}
      <img
        src={landingImage}
        alt="Construction site with modern architecture"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      
      {/* Slide Indicators - Hidden on mobile */}
      <div className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex-col space-y-4 z-10">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-sm font-bold">01</div>
        <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <div className="mb-6 md:mb-8">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm text-white/90 font-medium">
              UK & UAE Coverage | 10+ Years Excellence
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif italic text-white leading-tight mb-6 md:mb-8">
            Where Every Project
            <br />
            <span className="text-accent-400">Tells a Story!</span>
          </h1>
          
          <div className="mb-8 md:mb-12">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm md:text-base text-white font-medium hover:bg-white/20 transition-all duration-300 group"
            >
              Schedule a consultation
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-8">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm text-white/90">
              Consultation
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm text-white/90">
              Cost Management
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm text-white/90">
              Project Planning
            </span>
          </div>
        </div>
      </div>


      {/* Social Icons - Bottom Right - Hidden on mobile, adjusted on tablet */}
      <div className="hidden md:block absolute bottom-4 md:bottom-8 right-4 md:right-8 z-10">
        <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
            <Award className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
            <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
        <p className="text-white/80 text-xs md:text-sm max-w-xs">
          We help you to manage your construction projects with precision and expertise. 
          Delivered by qualified professionals.
        </p>
      </div>
    </section>
  );
}
