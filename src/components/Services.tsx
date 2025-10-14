import { useState } from 'react';
import { ChevronDown, ChevronUp, ClipboardList, Calculator, FileText, TrendingUp, Shield, ArrowRight } from './Icons';

interface ServicesProps {
  onNavigate?: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-100 leading-tight mb-8 font-serif italic">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Comprehensive Consultancy Services
            </h2>
          </div>

        <div className="mb-16 bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At LNDMS, we provide end-to-end consultancy services that ensure your projects are delivered
            on time, within budget, and to the highest quality standards. Our team of BSc Honours, MCIOB,
            and MRICS qualified professionals brings over 10 years of experience managing projects valued
            between £5-20 million for local authorities, Tier 1 contractors, and medium-sized sub-contractors.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="card card-hover overflow-hidden"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-dark-800 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-100 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="ml-4">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-dark-700 bg-dark-800">
                    <div className="pt-6 pl-18">
                      <h4 className="text-lg font-semibold text-gray-100 mb-4">
                        Service Includes:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 gradient-accent rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Building Safety Regulations 2022 Expertise
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
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
