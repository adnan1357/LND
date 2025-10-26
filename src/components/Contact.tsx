import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    });
  };

  return (
    <div className="bg-dark-950 min-h-screen flex flex-col">
      {/* Header Section */}
      <section className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 flex-shrink-0">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold text-accent-400 uppercase tracking-wider mb-2">
            CONTACT US
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-2 sm:mb-3">
            Get in touch with us
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Fill out the form below or schedule a meeting with us at your convenience.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="flex-1 px-4 sm:px-6 pb-6 sm:pb-8 overflow-auto">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 h-full">
            {/* Left Side - Form */}
            <div className="flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-dark-900 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-gray-100 placeholder-gray-500 text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-dark-900 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-gray-100 placeholder-gray-500 text-sm"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-dark-900 border border-dark-700 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all resize-none text-gray-100 placeholder-gray-500 text-sm"
                    placeholder="Enter Your Message"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    required
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 bg-dark-900 border-dark-700 rounded focus:ring-2 focus:ring-accent-500 text-accent-600"
                  />
                  <label htmlFor="agree" className="text-xs text-gray-400">
                    I agree with{' '}
                    <a href="#" className="text-accent-400 hover:text-accent-300 underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-dark-800 hover:bg-dark-700 text-gray-100 rounded-lg font-semibold transition-all border border-dark-700 hover:border-accent-600 text-sm"
                >
                  Send Your Request
                </button>
              </form>

              {/* Contact Methods */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-100 mb-2 sm:mb-3">
                  You can also Contact Us via
                </h3>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3">
                  <a
                    href="mailto:Enquiries@lndms.ae"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-dark-900 border border-dark-700 rounded-lg hover:border-accent-600 transition-all text-sm"
                  >
                    <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs">Enquiries@lndms.ae</span>
                  </a>
                  <a
                    href="tel:+447539866877"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-dark-900 border border-dark-700 rounded-lg hover:border-accent-600 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs">+44 7539 866877</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits & Locations */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-100 mb-3 sm:mb-4">
                  With our services you can
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">Expert quantity surveying and cost management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">Building Safety Regulations 2022 compliance expertise</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">Comprehensive project management from inception to completion</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">Proven track record with £85m+ in project value</span>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-dark-900 border border-dark-700 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-accent-400" />
                    <h4 className="font-semibold text-gray-100 text-xs sm:text-sm">UK</h4>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    London, England<br />
                    United Kingdom
                  </p>
                </div>

                <div className="bg-dark-900 border border-dark-700 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-accent-400" />
                    <h4 className="font-semibold text-gray-100 text-xs sm:text-sm">UAE</h4>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Dubai<br />
                    United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




