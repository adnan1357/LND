import { ClipboardList, Calculator, FileText, TrendingUp, Shield, ArrowRight } from './Icons';

interface ServicesProps {
  onNavigate?: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
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

  return (
    <div className="bg-dark-950">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center bg-dark-950">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - Title and Description */}
            <div>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-100 leading-tight mb-8 font-serif">
                Our Services
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                Expert quantity surveying and cost management solutions tailored to deliver 
                exceptional value across your project lifecycle. Our comprehensive consultancy 
                services ensure your projects are delivered on time, within budget, and to the 
                highest quality standards.
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
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Cost management planning"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Project analysis"
                    className="w-full h-64 object-cover"
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 font-serif">
              Comprehensive Consultancy Services
            </h2>
          </div>

        <div className="mb-16 bg-dark-900 border border-dark-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-100 mb-4 font-serif">Our Approach</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            At LNDMS, we provide end-to-end consultancy services that ensure your projects are delivered
            on time, within budget, and to the highest quality standards. Our team of BSc Honours, MCIOB,
            and MRICS qualified professionals brings over 10 years of experience managing projects valued
            between £5-20 million for local authorities, Tier 1 contractors, and medium-sized sub-contractors.
          </p>
        </div>

        <div>
          {/* First 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-dark-900 border border-dark-800 rounded-xl p-8 hover:border-accent-600 transition-all duration-300 flex flex-col relative overflow-hidden min-h-[500px]"
                >
                  {/* Large Number in Corner */}
                  <div className="absolute top-4 right-4 text-8xl font-bold text-gray-800/30 leading-none">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <Icon className="w-16 h-16 text-accent-500" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-100 mb-4 uppercase tracking-wide relative z-10">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed relative z-10 flex-grow">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="relative z-10 mb-6">
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Colored Accent Circle at Bottom */}
                  <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-500 rounded-full opacity-80"></div>
                </div>
              );
            })}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-8">
            {services.slice(3).map((service, index) => {
              const Icon = service.icon;
              const actualIndex = index + 3;

              return (
                <div
                  key={actualIndex}
                  className="bg-dark-900 border border-dark-800 rounded-xl p-8 hover:border-accent-600 transition-all duration-300 flex flex-col relative overflow-hidden min-h-[500px] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                >
                  {/* Large Number in Corner */}
                  <div className="absolute top-4 right-4 text-8xl font-bold text-gray-800/30 leading-none">
                    {actualIndex + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <Icon className="w-16 h-16 text-accent-500" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-100 mb-4 uppercase tracking-wide relative z-10">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed relative z-10 flex-grow">
                    {service.description}
                  </p>

                  {/* Service Details */}
                  <div className="relative z-10 mb-6">
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Colored Accent Circle at Bottom */}
                  <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-500 rounded-full opacity-80"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-dark-900 border border-dark-800 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-100 font-serif">
            Building Safety Regulations 2022 Expertise
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
