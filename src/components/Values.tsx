import { Shield, Star, Handshake, Lightbulb, FileCheck, Heart, ArrowRight } from './Icons';

interface ValuesProps {
  onNavigate?: (section: string) => void;
}

export default function Values({ onNavigate }: ValuesProps) {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct our business with the highest ethical standards, ensuring transparency, honesty, and accountability in every interaction. Our reputation is built on trust and reliability.',
      color: 'from-accent-600 to-accent-500',
    },
    {
      icon: Star,
      title: 'Quality & Excellence',
      description: 'We are committed to delivering exceptional results that exceed expectations. Our attention to detail and pursuit of excellence drives continuous improvement in everything we do.',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We believe in building strong partnerships with our clients, contractors, and stakeholders. Through open communication and teamwork, we achieve superior project outcomes.',
      color: 'from-accent-600 to-accent-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies, methodologies, and creative solutions to tackle complex challenges. Innovation allows us to deliver efficient, cost-effective, and forward-thinking services.',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: FileCheck,
      title: 'Accountability',
      description: 'We take full ownership of our commitments and responsibilities. Our clients can depend on us to deliver on promises, meet deadlines, and maintain the highest standards of professional conduct.',
      color: 'from-accent-600 to-accent-500',
    },
    {
      icon: Heart,
      title: 'Client Focus',
      description: 'Our clients are at the heart of everything we do. We listen carefully to their needs, adapt to their requirements, and work tirelessly to ensure their success is our success.',
      color: 'from-accent-500 to-accent-600',
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
                Our Values
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                The principles that guide our work and define our commitment to excellence. 
                These values aren't just words—they are the foundation of how we operate, 
                make decisions, and serve our clients every day.
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
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Professional integrity"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Content Section */}
      <section id="values" className="section-padding bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 font-serif">
              Our Core Values
            </h2>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-dark-900 border border-dark-800 rounded-xl p-8 hover:border-accent-600 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-dark-900 border border-dark-800 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-100 font-serif">
            Values in Action
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            These values aren't just words on a page—they are the foundation of how we operate,
            make decisions, and serve our clients every day. They ensure that LNDMS remains a
            trusted partner committed to delivering exceptional results with integrity and professionalism.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
