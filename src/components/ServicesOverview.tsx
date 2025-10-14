import { useState } from 'react';
import { ArrowRight, Calculator, ClipboardList, FileText, TrendingUp, Shield } from './Icons';

interface ServicesOverviewProps {
  onNavigate: (section: string) => void;
}

export default function ServicesOverview({ onNavigate }: ServicesOverviewProps) {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: ClipboardList,
      title: 'Project Management',
      description: 'Comprehensive project oversight ensuring successful delivery from inception to completion.',
      details: 'Our project management approach focuses on strategic planning, resource coordination, and stakeholder communication. We ensure seamless navigation through complex regulatory requirements while maintaining the highest standards of professional conduct.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: Calculator,
      title: 'Cost Planning & Management',
      description: 'Detailed financial planning and cost estimation to ensure budget certainty.',
      details: 'We provide comprehensive cost control and value engineering throughout your project lifecycle. Our expertise in Bills of Quantities preparation and whole life costing analysis ensures optimal financial outcomes.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
    },
    {
      icon: FileText,
      title: 'Procurement & Tendering',
      description: 'Strategic procurement advice and comprehensive tender management services.',
      details: 'Our procurement specialists guide you through complex tendering processes, contractor selection, and contract negotiations. We ensure competitive pricing while maintaining quality standards.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: TrendingUp,
      title: 'Risk & Value Management',
      description: 'Proactive risk assessment and value optimization strategies.',
      details: 'We identify potential risks early and implement mitigation strategies while maximizing project value. Our approach ensures sustainable outcomes and long-term success.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    },
    {
      icon: Shield,
      title: 'Building Safety Compliance',
      description: 'Expert guidance on Building Safety Regulations 2022 and fire safety works.',
      details: 'Specialized knowledge in Building Safety Regulations 2022 compliance and fire safety remediation works. We ensure full regulatory compliance while managing costs effectively.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <section className="h-screen py-16 bg-dark-950 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-100 mb-4">
            Our Services
          </h2>
          <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We craft world-class construction management experiences that elevate your project 
            and drive results. From strategy to execution, we bring your vision 
            to life with creativity and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Service List */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
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
                  <button
                    onClick={() => setActiveService(index)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-accent-600' : 'bg-dark-800 group-hover:bg-dark-700'
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 transition-colors ${
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
                    <div className="ml-13 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">
                        {service.details}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {/* Main large image */}
              <div className="col-span-2 rounded-xl overflow-hidden shadow-2xl border border-dark-700">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-48 object-cover transition-all duration-500"
                />
              </div>
              
              {/* Two smaller images */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-dark-700">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Construction planning"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg border border-dark-700">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Construction site"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}