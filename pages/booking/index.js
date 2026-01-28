import Head from 'next/head';
import { useState, useEffect } from 'react';
import AnimatedSection from '../../components/AnimatedSection';

export default function Booking() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    location: '',
    duration: '2',
    packageType: 'professional',
    cameras: [],
    additionalServices: [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'cameras') {
        setFormState(prev => {
          if (checked) {
            return { ...prev, cameras: [...prev.cameras, value] };
          } else {
            return { ...prev, cameras: prev.cameras.filter(camera => camera !== value) };
          }
        });
      } else {
        setFormState(prev => {
          if (checked) {
            return { ...prev, additionalServices: [...prev.additionalServices, value] };
          } else {
            return { ...prev, additionalServices: prev.additionalServices.filter(service => service !== value) };
          }
        });
      }
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formattedMessage = `*New Booking Request*

Name: ${formState.name}
Email: ${formState.email}
Phone: ${formState.phone}

Session Details:
• Date: ${formState.date}
• Time: ${formState.time}
• Location: ${formState.location}
• Duration: ${formState.duration} hours
• Package: ${formState.packageType}
${formState.cameras.length > 0 ? `• Cameras: ${formState.cameras.join(', ')}` : ''}
${formState.additionalServices.length > 0 ? `• Additional Services: ${formState.additionalServices.join(', ')}` : ''}

Message: ${formState.message || 'No additional message'}`;

    const whatsappLink = `https://wa.me/97339007750?text=${encodeURIComponent(formattedMessage)}`;
    
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        location: '',
        duration: '2',
        packageType: 'professional',
        cameras: [],
        additionalServices: [],
        message: ''
      });
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Book Your Session | Podcast Bahrain - Professional Podcast Production</title>
        <meta name="description" content="Book your professional podcast recording session. Fill out the form or contact us directly via WhatsApp for instant booking." />
      </Head>

      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider text-gold bg-gold/10 border border-gold/30 rounded-full uppercase">
                Book Your Session
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Create Something <span className="text-gold">Amazing</span>
              </h1>
              <p className="text-xl text-gray-400">
                Fill out the form below and we'll get back to you within a few hours. 
                Or contact us directly for instant booking.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <a 
              href="https://wa.me/97339007750" 
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Instant Booking via WhatsApp
            </a>
            <a 
              href="tel:+97339007750" 
              className="flex items-center justify-center gap-3 bg-gold hover:bg-amber-500 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 flex-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call +973 3900 7750
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-gradient-to-b from-gray-900 to-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
                {!submitSuccess ? (
                  <form onSubmit={handleSubmit} className="p-8 md:p-12">
                    {/* Personal Information */}
                    <div className="mb-10">
                      <h2 className="text-2xl font-bold text-gold mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        Your Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white transition-all"
                            placeholder="+973 XXXX XXXX"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Session Details */}
                    <div className="mb-10">
                      <h2 className="text-2xl font-bold text-gold mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        Session Details
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Date *</label>
                          <input
                            type="date"
                            name="date"
                            value={formState.date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Time *</label>
                          <input
                            type="time"
                            name="time"
                            value={formState.time}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white transition-all"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-400 mb-2">Recording Location *</label>
                          <input
                            type="text"
                            name="location"
                            value={formState.location}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white transition-all"
                            placeholder="Hotel name, office address, or any location in Bahrain"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Session Duration</label>
                          <select
                            name="duration"
                            value={formState.duration}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white transition-all"
                          >
                            <option value="1">1 hour</option>
                            <option value="2">2 hours</option>
                            <option value="3">3 hours</option>
                            <option value="4">4 hours</option>
                            <option value="6">6 hours</option>
                            <option value="8">Full day (8 hours)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Package</label>
                          <select
                            name="packageType"
                            value={formState.packageType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white transition-all"
                          >
                            <option value="basic">Basic (BHD 280)</option>
                            <option value="professional">Professional (BHD 520)</option>
                            <option value="premium">Premium (BHD 840)</option>
                            <option value="custom">Custom Quote</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Options */}
                    <div className="mb-10">
                      <h2 className="text-2xl font-bold text-gold mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 bg-gold text-black rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        Additional Options
                      </h2>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-400 mb-3">Camera Preferences</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Sony FX6', 'Sony A7S3', 'Sony FX3', 'Any Available'].map((camera) => (
                            <label key={camera} className="flex items-center gap-3 p-3 bg-black border border-gray-700 rounded-xl cursor-pointer hover:border-gold/50 transition-all">
                              <input
                                type="checkbox"
                                name="cameras"
                                value={camera}
                                checked={formState.cameras.includes(camera)}
                                onChange={handleChange}
                                className="w-4 h-4 accent-gold"
                              />
                              <span className="text-sm text-white">{camera}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-400 mb-3">Additional Services</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            { value: 'editing', label: 'Post-production Editing' },
                            { value: 'lighting', label: 'Professional Lighting' },
                            { value: 'backdrop', label: 'Custom Backdrop' },
                            { value: 'distribution', label: 'Podcast Distribution' }
                          ].map((service) => (
                            <label key={service.value} className="flex items-center gap-3 p-3 bg-black border border-gray-700 rounded-xl cursor-pointer hover:border-gold/50 transition-all">
                              <input
                                type="checkbox"
                                name="additionalServices"
                                value={service.value}
                                checked={formState.additionalServices.includes(service.value)}
                                onChange={handleChange}
                                className="w-4 h-4 accent-gold"
                              />
                              <span className="text-sm text-white">{service.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div className="mb-10">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Additional Comments</label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-white transition-all resize-none"
                        placeholder="Tell us about your podcast, special requirements, or any questions..."
                      ></textarea>
                    </div>
                    
                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-gold hover:bg-amber-500 text-black hover:scale-[1.02]'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Submit Booking Request'
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="p-8 md:p-12 text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Booking Request Sent!</h2>
                    <p className="text-gray-400 mb-8">
                      Your booking request has been sent via WhatsApp. We'll confirm your session within a few hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="py-3 px-8 bg-gold text-black font-bold rounded-full hover:bg-amber-500 transition-all"
                    >
                      Book Another Session
                    </button>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
