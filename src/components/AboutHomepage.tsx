export default function AboutHomepage() {
  return (
    <section id="about" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-dark-700">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                alt="Modern construction site with professional team"
                className="w-full h-[600px] object-cover"
              />
              {/* Dark overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="lg:pl-8">
            <h2 className="text-sm font-medium text-accent-400 mb-6 uppercase tracking-wide">
              Our Story
            </h2>
            
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-serif italic text-gray-100 leading-tight mb-8">
              We're a UK-based construction management agency that 
              <span className="text-accent-500"> specializes in sustainable project delivery.</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
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
