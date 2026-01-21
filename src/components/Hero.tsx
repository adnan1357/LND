import { useEffect, useState } from 'react';
import { ArrowRight } from './Icons';
import landingImage from '../../images/landing.jpg';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-serif italic text-white leading-tight mb-6 md:mb-8 transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Where Every Project
            <br />
            <span className="text-accent-400">Tells a Story!</span>
          </h1>
          
          <div className={`flex flex-col items-start gap-3 mb-8 md:mb-12 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block px-4 py-2 md:px-5 md:py-2.5 bg-white/[0.06] backdrop-blur-md border border-white/25 border-l-2 border-l-accent-400 rounded-full text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-white">
              UK & UAE Coverage <span className="text-white/50 mx-1">|</span> 10+ Years Excellence
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm text-white font-medium hover:bg-white/20 transition-all duration-300 group"
            >
              Schedule a consultation
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>


      {/* Service Tags - Bottom Right - Hidden on mobile */}
      <div className={`hidden md:block absolute bottom-4 md:bottom-8 right-4 md:right-8 z-10 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4 justify-end">
          <span className="px-2 py-1 md:px-2.5 md:py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] md:text-xs text-white/90">
            Consultation
          </span>
          <span className="px-2 py-1 md:px-2.5 md:py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] md:text-xs text-white/90">
            Cost Management
          </span>
          <span className="px-2 py-1 md:px-2.5 md:py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] md:text-xs text-white/90">
            Project Planning
          </span>
        </div>
        <p className="text-white/80 text-xs md:text-sm max-w-xs text-right">
          We help you to manage your construction projects with precision and expertise. 
          Delivered by qualified professionals.
        </p>
      </div>
    </section>
  );
}
