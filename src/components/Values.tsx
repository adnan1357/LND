import { Shield, Star, Handshake, Lightbulb, FileCheck, Heart, ArrowRight } from './Icons';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface ValuesProps {
  onNavigate?: (section: string) => void;
}

export default function Values({ onNavigate }: ValuesProps) {
  // Animation hooks
  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const [imagesRef, imagesVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [sectionHeaderRef, sectionHeaderVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const [valuesGridRef, valuesVisible] = useStaggeredAnimation<HTMLDivElement>(6, { threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

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
    <div className="bg-dark-950 blueprint-overlay">
      {/* Blueprint decorative elements */}
      <div className="blueprint-corner blueprint-corner--tl" />
      <div className="blueprint-corner blueprint-corner--tr" />
      <div className="blueprint-corner blueprint-corner--bl" />
      <div className="blueprint-corner blueprint-corner--br" />
      
      {/* Blueprint circle markers */}
      <div className="blueprint-circle" style={{ top: '15%', left: '8%' }} />
      <div className="blueprint-circle" style={{ top: '35%', right: '5%' }} />
      <div className="blueprint-circle" style={{ top: '55%', left: '3%' }} />
      <div className="blueprint-circle" style={{ top: '75%', right: '8%' }} />
      <div className="blueprint-circle" style={{ bottom: '12%', left: '12%' }} />
      
      {/* Blueprint cross markers */}
      <div className="blueprint-cross" style={{ top: '25%', right: '12%' }} />
      <div className="blueprint-cross" style={{ top: '45%', left: '6%' }} />
      <div className="blueprint-cross" style={{ top: '65%', right: '4%' }} />
      <div className="blueprint-cross" style={{ bottom: '25%', left: '5%' }} />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left Content */}
            <div ref={heroRef}>
              <p className={`text-[11px] uppercase tracking-[0.25em] text-accent-500/90 font-semibold mb-5 scroll-fade-up ${heroVisible ? 'visible' : ''}`}>
                What We Stand For
              </p>
              <h1 className={`font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-8 scroll-fade-up stagger-2 ${heroVisible ? 'visible' : ''}`}>
                Our Values
              </h1>
              <p className={`text-[17px] sm:text-lg text-gray-400 leading-relaxed max-w-xl mb-10 scroll-fade-up stagger-3 ${heroVisible ? 'visible' : ''}`}>
                The principles that guide our work and define our commitment to excellence.
                These values aren&apos;t just words—they are the foundation of how we operate,
                make decisions, and serve our clients every day.
              </p>
              <button
                onClick={() => onNavigate?.('contact')}
                className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-accent-500/80 text-accent-400 bg-accent-500/5 font-medium hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all duration-300 scroll-fade-up stagger-4 ${heroVisible ? 'visible' : ''}`}
              >
                Talk to Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Right Content - Images */}
            <div ref={imagesRef} className="relative lg:pl-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className={`relative rounded-2xl overflow-hidden border border-dark-700/60 shadow-2xl scroll-scale-in ${imagesVisible ? 'visible' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration"
                    className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                  />
                </div>
                <div className={`relative rounded-2xl overflow-hidden border border-dark-700/60 shadow-2xl scroll-scale-in stagger-2 ${imagesVisible ? 'visible' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional integrity"
                    className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={sectionHeaderRef} className="text-center mb-16 lg:mb-20">
            <p className={`text-[11px] uppercase tracking-[0.2em] text-accent-500/80 font-semibold mb-4 scroll-fade-up ${sectionHeaderVisible ? 'visible' : ''}`}>
              The Principles That Guide Us
            </p>
            <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight scroll-fade-up stagger-2 ${sectionHeaderVisible ? 'visible' : ''}`}>
              Our Core Values
            </h2>
          </div>

          <div ref={valuesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const ordinal = String(index + 1).padStart(2, '0');
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border border-dark-700/50 bg-gradient-to-b from-dark-900/90 via-dark-900/70 to-dark-800/80 p-8 lg:p-9 shadow-lg shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-900/20 scroll-fade-up ${valuesVisible[index] ? 'visible' : ''}`}
                >
                  {/* Top-edge highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60" />
                  {/* Left accent bar - appears on hover */}
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-gradient-to-b from-accent-500 to-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Ordinal */}
                  <span className="absolute top-6 right-6 font-mono text-[11px] font-medium uppercase tracking-widest text-accent-500/40">
                    {ordinal}
                  </span>
                  {/* Icon container - refined with ring and hover glow */}
                  <div
                    className={`relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} shadow-lg shadow-accent-600/20 ring-1 ring-white/10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-500/25 group-hover:ring-accent-400/20`}
                  >
                    <Icon className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {/* Title with underline accent */}
                  <h3 className="relative font-serif text-xl lg:text-2xl font-semibold tracking-tight text-white mb-3">
                    {value.title}
                  </h3>
                  <div className="mb-4 h-px w-12 bg-gradient-to-r from-accent-500/60 to-transparent rounded-full" />
                  <p className="text-[15px] leading-relaxed text-gray-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Values in Action */}
          <div ref={ctaRef} className={`mt-20 lg:mt-24 relative rounded-2xl overflow-hidden border border-dark-800/80 bg-gradient-to-br from-dark-900/90 via-dark-900/70 to-dark-900/90 scroll-fade-up ${ctaVisible ? 'visible' : ''}`}>
            <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-gradient-to-b from-accent-500/80 to-accent-600/60" />
            <div className="py-14 sm:py-16 lg:py-20 px-8 sm:px-12 lg:px-20 pl-10 sm:pl-14">
              <p className={`text-[11px] uppercase tracking-[0.2em] text-accent-500/80 font-semibold mb-4 scroll-fade-up stagger-2 ${ctaVisible ? 'visible' : ''}`}>
                Our Commitment
              </p>
              <h3 className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 tracking-tight max-w-3xl scroll-fade-up stagger-3 ${ctaVisible ? 'visible' : ''}`}>
                Values in Action
              </h3>
              <p className={`text-[17px] sm:text-lg lg:text-xl text-gray-400 max-w-3xl leading-relaxed scroll-fade-up stagger-4 ${ctaVisible ? 'visible' : ''}`}>
                These values aren&apos;t just words on a page—they are the foundation of how we
                operate, make decisions, and serve our clients every day. They ensure that LNDMS
                remains a trusted partner committed to delivering exceptional results with
                integrity and professionalism.
              </p>
              <p className={`mt-8 text-[13px] uppercase tracking-[0.15em] text-gray-500 font-medium scroll-fade-up stagger-5 ${ctaVisible ? 'visible' : ''}`}>
                — LND Management Services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
