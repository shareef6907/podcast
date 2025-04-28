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
    packageType: 'standard',
    cameras: [],
    additionalServices: [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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
    
    // Prepare the email message
    const formattedMessage = `
      New Booking Request from ${formState.name}
      
      Contact Information:
      - Name: ${formState.name}
      - Email: ${formState.email}
      - Phone: ${formState.phone}
      
      Session Details:
      - Date: ${formState.date}
      - Time: ${formState.time}
      - Location: ${formState.location}
      - Duration: ${formState.duration} hours
      - Package: ${formState.packageType}
      - Cameras: ${formState.cameras.join(', ')}
      - Additional Services: ${formState.additionalServices.join(', ')}
      
      Message:
      ${formState.message}
    `;
    
    // The email would normally be sent via a backend service
    // This is a client-side workaround to open the user's email client
    const mailtoLink = `mailto:shareef@eventsbahrain.com?subject=Podcast Booking Request from ${formState.name}&body=${encodeURIComponent(formattedMessage)}`;
    
    // Also send to WhatsApp
    const whatsappMessage = `*New Booking Request*\n\nName: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nDate: ${formState.date}\nTime: ${formState.time}\nLocation: ${formState.location}\nDuration: ${formState.duration} hours\nPackage: ${formState.packageType}\nCameras: ${formState.cameras.join(', ')}\nAdditional Services: ${formState.additionalServices.join(', ')}\n\nMessage: ${formState.message}`;
    const whatsappLink = `https://wa.me/97339007750?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open the email client
    window.open(mailtoLink, '_blank');
    
    // After a brief delay, open WhatsApp
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
    }, 1000);
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        location: '',
        duration: '2',
        packageType: 'standard',
        cameras: [],
        additionalServices: [],
        message: ''
      });
    }, 1500);
  };

  // Enhanced date picker script (using the browser's native date/time pickers)
  useEffect(() => {
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    
    if (dateInput) {
      // Ensure calendar shows on click
      dateInput.addEventListener('click', () => {
        dateInput.showPicker();
      });
    }
    
    if (timeInput) {
      // Ensure time picker shows on click
      timeInput.addEventListener('click', () => {
        timeInput.showPicker();
      });
    }
    
    return () => {
      if (dateInput) {
        dateInput.removeEventListener('click', () => {});
      }
      if (timeInput) {
        timeInput.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Book Your Podcast Session - Bahrain Nights</title>
        <meta name="description" content="Professional Podcast filming in Bahrain! Expert filmmaker creates high-quality video podcasts for Creators & Businesses. Book now for studio or on-location shoots!" />
        <meta name="keywords" content="podcast booking bahrain, podcast studio booking, professional podcast recording, mobile podcast recording, podcast session bahrain" />
      </Head>

      {/* Header Banner */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold">Book Your Session</h1>
          <p className="text-xl max-w-3xl mx-auto">Reserve your professional podcast recording with our cinema-quality equipment. 12 hours delivery time guaranteed.</p>
        </div>
      </div>

      {/* Booking Form */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
                {!submitSuccess ? (
                  <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Personal Information */}
                      <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4 text-gold">Personal Information</h2>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-gold font-bold mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white"
                          placeholder="Your Name"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gold font-bold mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="phone" className="block text-gold font-bold mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white"
                          placeholder="+973 XXXX XXXX"
                        />
                      </div>
                      
                      <div className="mb-4 md:col-span-2">
                        <div className="border-b border-gray-800 my-8"></div>
                        <h2 className="text-2xl font-bold mb-4 text-gold">Session Details</h2>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="date" className="block text-gold font-bold mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formState.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white cursor-pointer"
                          min={new Date().toISOString().split('T')[0]}
                        />
                        <small className="text-gray-400 mt-1 block">Click to open calendar</small>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="time" className="block text-gold font-bold mb-2">Preferred Time *</label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formState.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white cursor-pointer"
                        />
                        <small className="text-gray-400 mt-1 block">Click to select time</small>
                      </div>
                      
                      <div className="mb-4 md:col-span-2">
                        <label htmlFor="location" className="block text-gold font-bold mb-2">Recording Location *</label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formState.location}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white"
                          placeholder="Hotel name, office address, or any location in Bahrain"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="duration" className="block text-gold font-bold mb-2">Session Duration (hours) *</label>
                        <select
                          id="duration"
                          name="duration"
                          value={formState.duration}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white"
                        >
                          <option value="1">1 hour</option>
                          <option value="2">2 hours</option>
                          <option value="3">3 hours</option>
                          <option value="4">4 hours</option>
                          <option value="6">6 hours</option>
                          <option value="8">Full day (8 hours)</option>
                        </select>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="packageType" className="block text-gold font-bold mb-2">Package Type *</label>
                        <select
                          id="packageType"
                          name="packageType"
                          value={formState.packageType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white"
                        >
                          <option value="standard">Standard (2 Cameras)</option>
                          <option value="premium">Premium (4+ Cameras)</option>
                          <option value="custom">Custom Setup</option>
                        </select>
                      </div>
                      
                      <div className="mb-4 md:col-span-2">
                        <label className="block text-gold font-bold mb-3">Camera Selection *</label>
                        <p className="text-gray-400 text-sm mb-3">Select your preferred cameras. Standard package includes 2 cameras, Premium includes 4+ cameras.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-black p-4 rounded-lg border border-gray-800">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name="cameras"
                                value="Sony A7s3"
                                checked={formState.cameras.includes('Sony A7s3')}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-gold"
                              />
                              <span className="ml-2 text-white">Sony A7s3</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name="cameras"
                                value="Sony Fx3"
                                checked={formState.cameras.includes('Sony Fx3')}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-gold"
                              />
                              <span className="ml-2 text-white">Sony Fx3</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name="cameras"
                                value="Sony Fx6"
                                checked={formState.cameras.includes('Sony Fx6')}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-gold"
                              />
                              <span className="ml-2 text-white">Sony Fx6</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name="cameras"
                                value="ARRI Alexa"
                                checked={formState.cameras.includes('ARRI Alexa')}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-gold"
                              />
                              <span className="ml-2 text-white">ARRI Alexa</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4 md:col-span-2">
                        <label className="block text-gold font-bold mb-2">Additional Services</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-black p-4 rounded-lg border border-gray-800">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name="additionalServices"
                                value="editing"
                                checked={formState.additionalServices.includes('editing')}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-gold"
                              />
                              <span className="ml-2 text-white">Post-production Editing</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name="additionalServices"
                                value="lighting"
                                checked={formState.additionalServices.includes('lighting')}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-gold"
                              />
                              <span className="ml-2 text-white">Professional Lighting</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name="additionalServices"
                                value="backdrop"
                                checked={formState.additionalServices.includes('backdrop')}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-gold"
                              />
                              <span className="ml-2 text-white">Custom Backdrop</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name="additionalServices"
                                value="distribution"
                                checked={formState.additionalServices.includes('distribution')}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-gold"
                              />
                              <span className="ml-2 text-white">Podcast Distribution</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4 md:col-span-2">
                        <label htmlFor="message" className="block text-gold font-bold mb-2">Additional Comments</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-white"
                          placeholder="Tell us about your podcast, special requirements, or any questions you have."
                        ></textarea>
                      </div>
                      
                      <div className="mb-4 md:col-span-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-3 px-6 rounded-full text-black font-bold ${isSubmitting ? 'bg-gray-500' : 'bg-gold hover:bg-darkgold'} transition duration-300`}
                        >
                          {isSubmitting ? 'Submitting...' : 'Book Your Session'}
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="p-8 text-center">
                    <div className="text-gold mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-gold">Booking Request Received!</h2>
                    <p className="text-lg mb-6 text-white">
                      Thank you for your booking request. Our team will contact you shortly to confirm your session and discuss any details.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="py-2 px-6 bg-gold text-black rounded-full hover:bg-darkgold transition duration-300 font-bold"
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

      {/* Quick Contact */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4 text-gold">Need immediate assistance?</h2>
            <p className="mb-6 text-white">Contact us directly via phone or WhatsApp for urgent bookings or inquiries.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+97339007750" className="flex items-center justify-center gap-2 bg-gold text-black py-2 px-6 rounded-full hover:bg-darkgold transition duration-300 font-bold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                +973 3900 7750
              </a>
              <a href="https://wa.me/97339007750" className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 font-bold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
} 