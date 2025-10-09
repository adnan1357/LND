import { useState } from 'react';
import { ArrowRight } from './Icons';

interface AboutProps {
  onNavigate?: (section: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [expandedCard, setExpandedCard] = useState<number>(1);

  const handleCardClick = (cardId: number) => {
    if (cardId === expandedCard) return;
    setExpandedCard(cardId);
  };

  const whyChooseUsData = [
    {
      id: 1,
      title: "Experienced Builder",
      subtitle: "Expert Market",
      description: "At LND Management Services, we understand that a project is more than just four walls and a roof – it's the cornerstone of your life's journey. With our unwavering commitment to excellence and personalized service, we're dedicated to guiding you every step of the way on your construction adventure.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Expert Market Knowledge",
      subtitle: "Expert Market",
      description: "Our team brings deep market insights and industry expertise to every project. We understand local regulations, market trends, and cost dynamics to deliver optimal solutions for your construction needs.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Unrivaled Service",
      subtitle: "Unrivaled",
      description: "We provide exceptional service quality that sets us apart in the construction management industry. Our commitment to excellence ensures your project receives the attention and expertise it deserves.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Innovative Solutions",
      subtitle: "Innovative",
      description: "We leverage cutting-edge technology and innovative approaches to solve complex construction challenges. Our forward-thinking solutions ensure your project benefits from the latest industry advancements.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-dark-950">
      {/* Hero Section */}
      <section className="pt-64 pb-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - Title and Description */}
            <div>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-100 leading-tight mb-8 tracking-tight">
                ABOUT US
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                At LND Management Services, we understand that a project is more than just four walls and 
                a roof – it's the cornerstone of your life's journey. With our unwavering 
                commitment to excellence and personalized service, we're dedicated 
                to guiding you every step of the way on your construction adventure.
              </p>
            </div>

            {/* Right Content - Images and CTA */}
            <div className="space-y-6">
              {/* Talk to Us Button */}
              <div className="mb-8">
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-accent-500 text-accent-500 font-medium hover:bg-accent-500 hover:text-white transition-all duration-300 group"
                >
                  Talk to Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Professional team meeting"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Construction planning session"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif italic text-gray-100 leading-tight mb-8">
              <span className="text-accent-500">Transparency, integrity, and professionalism</span> are the pillars of
              our business philosophy. We prioritize clear communication and
              honest advice, ensuring that you're empowered to make informed
              decisions throughout the buying or selling process.
            </h2>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h3 className="text-sm font-medium text-accent-400 mb-6 uppercase tracking-wide">
              ✨ Why choose us
            </h3>
          </div>

          <div className="flex gap-4 h-96">
            {whyChooseUsData.map((item) => {
              const isExpanded = expandedCard === item.id;
              
              return (
                <div
                  key={item.id}
                  className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
                  style={{
                    width: isExpanded ? 'auto' : '80px',
                    flex: isExpanded ? '1 1 0%' : '0 0 80px'
                  }}
                  onClick={() => handleCardClick(item.id)}
                >
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    isExpanded 
                      ? 'bg-gradient-to-t from-black/80 via-black/40 to-black/20' 
                      : 'bg-black/60'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex items-center">
                    {isExpanded ? (
                      // Expanded view
                      <div className="w-full h-full flex flex-col justify-end">
                        <div className="text-6xl font-bold text-white mb-4">
                          {item.id.toString().padStart(2, '0')}.
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">
                          {item.title}
                        </h4>
                        <p className="text-gray-200 leading-relaxed max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      // Collapsed view - Horizontal number, vertical text
                      <div className="w-full h-full flex flex-col items-center justify-between py-8">
                        <div className="text-2xl font-bold text-white whitespace-nowrap">
                          {item.id.toString().padStart(2, '0')}.
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-gray-300 text-sm transform -rotate-90 whitespace-nowrap">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-24 bg-dark-900">
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
    </div>
  );
}