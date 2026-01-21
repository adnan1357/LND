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
      <section className="relative w-full overflow-hidden bg-dark-950 hero-pattern-overlay">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent-500/90 font-semibold mb-5">
                Who We Are
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-8">
                About Us
              </h1>
              <p className="text-[17px] sm:text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
                At LND Management Services, we understand that a project is more than just four walls and
                a roof – it&apos;s the cornerstone of your life&apos;s journey. With our unwavering
                commitment to excellence and personalized service, we&apos;re dedicated
                to guiding you every step of the way on your construction adventure.
              </p>
              <button
                onClick={() => onNavigate?.('contact')}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-accent-500/80 text-accent-400 bg-accent-500/5 font-medium hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all duration-300"
              >
                Talk to Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Right Content - Images */}
            <div className="relative lg:pl-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative rounded-2xl overflow-hidden border border-dark-700/60 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Professional team meeting"
                    className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-dark-700/60 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Construction planning session"
                    className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-dark-900 values-pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-100 leading-tight mb-6 sm:mb-8">
              <span className="text-accent-500">Transparency, integrity, and professionalism</span> are the pillars of
              our business philosophy. We prioritize clear communication and
              honest advice, ensuring that you're empowered to make informed
              decisions throughout the buying or selling process.
            </h2>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-dark-950 grid-pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xs sm:text-sm font-medium text-accent-400 mb-4 sm:mb-6 uppercase tracking-wide">
              ✨ Why choose us
            </h3>
          </div>

          <div className="flex gap-2 sm:gap-4 h-64 sm:h-80 md:h-96 overflow-x-auto">
            {whyChooseUsData.map((item) => {
              const isExpanded = expandedCard === item.id;
              
              return (
                <div
                  key={item.id}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0"
                  style={{
                    width: isExpanded ? 'auto' : '60px',
                    flex: isExpanded ? '1 1 0%' : '0 0 60px',
                    minWidth: isExpanded ? '250px' : '60px'
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
                  <div className="relative z-10 p-3 sm:p-6 h-full flex items-center">
                    {isExpanded ? (
                      // Expanded view
                      <div className="w-full h-full flex flex-col justify-end">
                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
                          {item.id.toString().padStart(2, '0')}.
                        </div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
                          {item.title}
                        </h4>
                        <p className="text-gray-200 leading-relaxed max-w-2xl text-xs sm:text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      // Collapsed view - Horizontal number, vertical text
                      <div className="w-full h-full flex flex-col items-center justify-between py-4 sm:py-8">
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                          {item.id.toString().padStart(2, '0')}.
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-gray-300 text-xs sm:text-sm transform -rotate-90 whitespace-nowrap">
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

    </div>
  );
}