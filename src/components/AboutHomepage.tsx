import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ukImage from '../../images/uk.jpg';

export default function AboutHomepage() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });
  const [imageRef, isImageVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="h-screen bg-dark-900 relative overflow-hidden"
    >
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* Left Content - Image fills the left side completely */}
        <div 
          ref={imageRef}
          className={`lg:w-1/2 order-2 lg:order-1 h-[50vh] lg:h-full scroll-slide-left ${isImageVisible ? 'visible' : ''}`}
        >
          <img
            src={ukImage}
            alt="Modern construction site with professional team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content - Text */}
        <div className="lg:w-1/2 order-1 lg:order-2 flex items-center">
          <div className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-16 scroll-slide-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            {/* Flags - centered in right section */}
            <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12 scroll-fade-up ${isVisible ? 'visible' : ''}`}>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-3xl sm:text-4xl">🇬🇧</span>
                <span className="text-gray-400 text-xs sm:text-sm font-medium">United Kingdom</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-dark-700"></div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-3xl sm:text-4xl font-sans">UAE</span>
                <span className="text-gray-400 text-xs sm:text-sm font-medium">United Arab Emirates</span>
              </div>
            </div>

            <h2 className="text-xs font-medium text-accent-400 mb-3 sm:mb-4 uppercase tracking-wide">
              Our Story
            </h2>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif italic text-gray-100 leading-tight mb-4 sm:mb-6">
              We're a UK-based construction management agency that 
              <span className="text-accent-500"> specializes in sustainable project delivery.</span>
            </h3>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>
                Welcome to LND Management Services, an international full-service 
                construction management company. Since 2014, we've been 
                creating exceptional, functional projects for clients across 
                the UK and UAE.
              </p>
              
              <p>
                We work closely with our clients to understand their needs, preferences, and project requirements, and 
                to develop personalized management solutions that reflect 
                their unique vision and objectives.
              </p>
              
              <p>
                Our expertise spans projects valued between £5-20 million, with particular specialization
                in Building Safety Regulations 2022 compliance and fire safety remediation works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
