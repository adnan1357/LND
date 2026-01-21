import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, ClipboardList, FileText, TrendingUp, Shield } from './Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServicesOverviewProps {
  onNavigate: (section: string) => void;
}

export default function ServicesOverview({ onNavigate }: ServicesOverviewProps) {
  const [activeService, setActiveService] = useState(0);
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const [contentRef, isContentVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });

  const services = [
    {
      id: 'project-management',
      icon: ClipboardList,
      title: 'Project Management',
      description: 'Comprehensive project oversight ensuring successful delivery from inception to completion.',
      details: 'Our project management approach focuses on strategic planning, resource coordination, and stakeholder communication. We ensure seamless navigation through complex regulatory requirements while maintaining the highest standards of professional conduct.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'cost-planning',
      icon: Calculator,
      title: 'Cost Planning & Management',
      description: 'Detailed financial planning and cost estimation to ensure budget certainty.',
      details: 'We provide comprehensive cost control and value engineering throughout your project lifecycle. Our expertise in Bills of Quantities preparation and whole life costing analysis ensures optimal financial outcomes.',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'procurement-tendering',
      icon: FileText,
      title: 'Procurement & Tendering',
      description: 'Strategic procurement advice and comprehensive tender management services.',
      details: 'Our procurement specialists guide you through complex tendering processes, contractor selection, and contract negotiations. We ensure competitive pricing while maintaining quality standards.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 'risk-value-management',
      icon: TrendingUp,
      title: 'Risk & Value Management',
      description: 'Proactive risk assessment and value optimization strategies.',
      details: 'We identify potential risks early and implement mitigation strategies while maximizing project value. Our approach ensures sustainable outcomes and long-term success.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
    },
    {
      id: 'risk-value-management',
      icon: Shield,
      title: 'Building Safety Compliance',
      description: 'Expert guidance on Building Safety Regulations 2022 and fire safety works.',
      details: 'Specialized knowledge in Building Safety Regulations 2022 compliance and fire safety remediation works. We ensure full regulatory compliance while managing costs effectively.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    },
  ];

  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 lg:pb-8 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-6 sm:mb-8 scroll-fade-up ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-100 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            We craft world-class construction management experiences that elevate your project 
            and drive results. From strategy to execution, we bring your vision 
            to life with creativity and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Left Side - Service List */}
          <div className={`space-y-3 sm:space-y-4 max-h-[500px] overflow-y-auto pr-2 scroll-slide-left ${isContentVisible ? 'visible' : ''}`}>
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;
              
              return (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-70 hover:opacity-90'
                  }`}
                >
                  <div className="flex flex-col">
                    <button
                      onClick={() => setActiveService(index)}
                      className="w-full text-left group"
                    >
                      <div className="flex items-start gap-2 sm:gap-3 mb-2">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                          isActive ? 'bg-accent-600' : 'bg-dark-800 group-hover:bg-dark-700'
                        }`}>
                          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-base sm:text-lg font-bold mb-1 transition-colors ${
                            isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </button>
                    
                    {isActive && (
                      <div className="ml-10 sm:ml-13 animate-in slide-in-from-top-2 duration-300">
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                          {service.details}
                        </p>
                        <Link
                          to={`/services#${service.id}`}
                          className="inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 text-xs font-semibold transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Image */}
          <div className={`relative scroll-slide-right ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-dark-700">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-6 sm:mt-8 scroll-fade-up ${isContentVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm"
          >
            View All Services
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}