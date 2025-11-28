import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ClipboardList, Calculator, FileText, TrendingUp, Shield, ArrowRight } from './Icons';

interface ServicesProps {
  onNavigate?: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const location = useLocation();
  const [highlightedService, setHighlightedService] = useState<string | null>(null);

  const services = [
    {
      id: 'project-management',
      icon: ClipboardList,
      title: 'Project Management',
      description: 'Comprehensive project oversight ensuring successful delivery from inception to completion.',
      details: [
        'Project planning and scheduling',
        'Resource allocation and coordination',
        'Progress monitoring and reporting',
        'Stakeholder communication management',
        'Quality assurance and compliance',
        'Building Safety Regulations 2022 compliance management',
      ],
      color: 'from-accent-600 to-accent-500',
    },
    {
      id: 'cost-planning',
      icon: Calculator,
      title: 'Cost Planning',
      description: 'Detailed financial planning and cost estimation to ensure budget certainty.',
      details: [
        'Bills of Quantities preparation',
        'Whole life costing analysis',
        'Cost control and monitoring',
        'Feasibility estimates and budget setting',
        'Cost benchmarking and analysis',
        'Value for money assessments',
      ],
      color: 'from-accent-500 to-accent-600',
    },
    {
      id: 'procurement-tendering',
      icon: FileText,
      title: 'Procurement & Tendering',
      description: 'Strategic procurement advice and comprehensive tender management services.',
      details: [
        'Contract document review and analysis',
        'Tender analysis and evaluation',
        'Strategic procurement advice',
        'Contractor selection support',
        'Pre-qualification assessment',
        'Negotiation support',
      ],
      color: 'from-accent-600 to-accent-500',
    },
    {
      id: 'post-contract-management',
      icon: TrendingUp,
      title: 'Post Contract Cost Management',
      description: 'Ongoing financial management and reporting throughout the project lifecycle.',
      details: [
        'Monthly valuations and certifications',
        'Financial reporting and forecasting',
        'Variation management and assessment',
        'Final account preparation and agreement',
        'Payment application review',
        'Cash flow forecasting',
      ],
      color: 'from-accent-500 to-accent-600',
    },
    {
      id: 'risk-value-management',
      icon: Shield,
      title: 'Risk and Value Management',
      description: 'Proactive risk identification and value optimization strategies.',
      details: [
        'Contract health checks',
        'Value engineering workshops',
        'Risk identification and assessment',
        'Risk mitigation strategy development',
        'Opportunity identification',
        'Cost optimization analysis',
      ],
      color: 'from-accent-600 to-accent-500',
    },
  ];

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Wait for the DOM to be ready and for any scroll-to-top to complete
      const scrollToService = () => {
        const element = document.getElementById(hash);
        if (element) {
          // Use offset scrolling to account for any fixed headers
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          // Highlight the card
          setHighlightedService(hash);
          // Remove highlight after 2 seconds
          setTimeout(() => {
            setHighlightedService(null);
          }, 2000);
        } else {
          // If element not found, try again after a short delay
          setTimeout(scrollToService, 100);
        }
      };
      
      // Initial delay to let the page render
      setTimeout(scrollToService, 500);
    } else {
      // Clear highlight if no hash
      setHighlightedService(null);
    }
  }, [location.hash, location.pathname]);

  // Listen for custom highlight event from footer clicks
  useEffect(() => {
    const handleHighlightService = (e: CustomEvent<string>) => {
      const serviceId = e.detail;
      setHighlightedService(serviceId);
      // Remove highlight after 2 seconds
      setTimeout(() => {
        setHighlightedService(null);
      }, 2000);
    };

    window.addEventListener('highlightService', handleHighlightService as EventListener);
    return () => {
      window.removeEventListener('highlightService', handleHighlightService as EventListener);
    };
  }, []);

  return (
    <div className="bg-dark-950">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-dark-950 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Content - Title and Description */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-100 leading-tight mb-6 sm:mb-8 font-serif">
                Our Services
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg">
                Expert quantity surveying and cost management solutions tailored to deliver 
                exceptional value across your project lifecycle. Our comprehensive consultancy 
                services ensure your projects are delivered on time, within budget, and to the 
                highest quality standards.
              </p>
            </div>

            {/* Right Content - Images and CTA */}
            <div className="space-y-4 sm:space-y-6">
              {/* Talk to Us Button */}
              <div className="mb-4 sm:mb-8">
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-accent-500 text-accent-500 font-medium hover:bg-accent-500 hover:text-white transition-all duration-300 group text-sm sm:text-base"
                >
                  Talk to Us
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Cost management planning"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Project analysis"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content Section */}
      <section id="services" className="section-padding bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-4 font-serif px-4">
              Comprehensive Consultancy Services
            </h2>
          </div>

        <div className="mb-12 sm:mb-16 bg-dark-900 border border-dark-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4 font-serif">Our Approach</h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
            At LNDMS, we provide end-to-end consultancy services that ensure your projects are delivered
            on time, within budget, and to the highest quality standards. Our team of BSc Honours, MCIOB,
            and MRICS qualified professionals brings over 10 years of experience managing projects valued
            between £5-20 million for local authorities, Tier 1 contractors, and medium-sized sub-contractors.
          </p>
        </div>

        <div>
          {/* First 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  id={service.id}
                  className={`bg-dark-900 border rounded-xl p-6 sm:p-8 hover:border-accent-600 transition-all duration-300 flex flex-col relative overflow-hidden min-h-[450px] sm:min-h-[500px] ${
                    highlightedService === service.id
                      ? 'border-accent-500 shadow-[0_0_30px_rgba(249,115,22,0.4)] animate-pulse-border'
                      : 'border-dark-800'
                  }`}
                >
                  {/* Large Number in Corner */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-6xl sm:text-8xl font-bold text-gray-800/30 leading-none">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-accent-500" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4 uppercase tracking-wide relative z-10">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed relative z-10 flex-grow text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Colored Accent Circle at Bottom */}
                  <div className="absolute -bottom-12 -left-12 w-24 h-24 sm:w-32 sm:h-32 bg-accent-500 rounded-full opacity-80"></div>
                </div>
              );
            })}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {services.slice(3).map((service, index) => {
              const Icon = service.icon;
              const actualIndex = index + 3;

              return (
                <div
                  key={actualIndex}
                  id={service.id}
                  className={`bg-dark-900 border rounded-xl p-6 sm:p-8 hover:border-accent-600 transition-all duration-300 flex flex-col relative overflow-hidden min-h-[450px] sm:min-h-[500px] w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.5rem)] ${
                    highlightedService === service.id
                      ? 'border-accent-500 shadow-[0_0_30px_rgba(249,115,22,0.4)] animate-pulse-border'
                      : 'border-dark-800'
                  }`}
                >
                  {/* Large Number in Corner */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-6xl sm:text-8xl font-bold text-gray-800/30 leading-none">
                    {actualIndex + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-accent-500" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4 uppercase tracking-wide relative z-10">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed relative z-10 flex-grow text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Colored Accent Circle at Bottom */}
                  <div className="absolute -bottom-12 -left-12 w-24 h-24 sm:w-32 sm:h-32 bg-accent-500 rounded-full opacity-80"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 bg-dark-900 border border-dark-800 rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-100 font-serif">
            Building Safety Regulations 2022 Expertise
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our team has specialist knowledge and extensive experience in Building Safety Regulations 2022
            compliance and fire safety remediation works. We guide clients through complex regulatory
            requirements, ensuring full compliance while managing costs effectively.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
