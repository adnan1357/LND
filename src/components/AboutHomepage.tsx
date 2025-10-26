import ukImage from '../../images/uk.jpg';

export default function AboutHomepage() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-dark-900 py-12 sm:py-16 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Flags */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl">🇬🇧</span>
            <span className="text-gray-400 text-xs sm:text-sm font-medium">United Kingdom</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-dark-700"></div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl">🇦🇪</span>
            <span className="text-gray-400 text-xs sm:text-sm font-medium">United Arab Emirates</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-dark-700">
              <img
                src={ukImage}
                alt="Modern construction site with professional team"
                className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
              />
              {/* Dark overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="lg:pl-8 order-1 lg:order-2">
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
