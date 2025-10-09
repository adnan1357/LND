import { Shield, Star, Handshake, Lightbulb, FileCheck, Heart } from './Icons';

export default function Values() {
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
    <section id="values" className="section-padding bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="card card-hover p-8"
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

        <div className="mt-16 gradient-accent rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Values in Action
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            These values aren't just words on a page—they are the foundation of how we operate,
            make decisions, and serve our clients every day. They ensure that LNDMS remains a
            trusted partner committed to delivering exceptional results with integrity and professionalism.
          </p>
        </div>
      </div>
    </section>
  );
}
