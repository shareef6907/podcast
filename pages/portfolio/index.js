import Head from 'next/head';
import AnimatedSection from '../../components/AnimatedSection';
import { useState } from 'react';

export default function Portfolio() {
  // This would be replaced by actual image data in a real app
  const galleryItems = [
    { 
      id: 1, 
      image: '/images/portfolio/setup1.jpg', 
      title: 'Hotel Room Setup', 
      description: 'Professional podcast recording in a 5-star hotel suite' 
    },
    { 
      id: 2, 
      image: '/images/portfolio/setup2.jpg', 
      title: 'Office Conference Room', 
      description: 'Corporate podcast recording for a financial services company' 
    },
    { 
      id: 3, 
      image: '/images/portfolio/setup3.jpg', 
      title: 'Beachside Recording', 
      description: 'Outdoor podcast with stunning Gulf views' 
    },
    { 
      id: 4, 
      image: '/images/portfolio/setup4.jpg', 
      title: 'Multi-Camera Interview', 
      description: 'Three-camera setup for a panel discussion podcast' 
    },
    { 
      id: 5, 
      image: '/images/portfolio/setup5.jpg', 
      title: 'Private Villa Session', 
      description: 'Intimate podcast recording in a residential setting' 
    },
    { 
      id: 6, 
      image: '/images/portfolio/setup6.jpg', 
      title: 'Corporate Event Coverage', 
      description: 'Live podcast recording during a business conference' 
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "This service turned my hotel room into a professional studio—amazing quality and convenience!",
      author: "Sarah J., International Business Podcast",
      location: "Diplomat Hotel, Bahrain"
    },
    {
      id: 2,
      quote: "The equipment quality was exceptional, and the team handled all the technical aspects while I focused solely on my content.",
      author: "Ahmed K., Tech Innovators Podcast",
      location: "Downtown Office, Manama"
    },
    {
      id: 3,
      quote: "Recording by the sea with such professional equipment created a unique atmosphere for our travel show.",
      author: "Michael R., Global Wanderers Podcast",
      location: "Amwaj Islands, Bahrain"
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Head>
        <title>Our Portfolio - Bahrain Nights Podcast Studio</title>
        <meta name="description" content="See our previous setups and client testimonials from podcast recordings across Bahrain." />
      </Head>

      {/* Header Banner */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">See our professional podcast setups in action across Bahrain</p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <div 
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition duration-300 hover:shadow-2xl"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="h-64 bg-gray-200 relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => e.target.src = `https://via.placeholder.com/600x400?text=${item.title.replace(' ', '+')}`} 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-5xl w-full bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="w-full max-h-[70vh] object-contain"
              onError={(e) => e.target.src = `https://via.placeholder.com/1200x800?text=${selectedImage.title.replace(' ', '+')}`} 
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
              <button 
                className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Client Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-gold flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-800 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Featured Clients</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* These would be actual client logos in a real implementation */}
            <AnimatedSection delay={0.1}>
              <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gold text-lg font-bold">Media Co.</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gold text-lg font-bold">Gulf Business</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gold text-lg font-bold">Travel Talk</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gold text-lg font-bold">Tech Insights</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold text-black">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">Want to be our next success story?</h2>
            <p className="text-xl mb-8">Contact us today to discuss your podcast project.</p>
            <a 
              href="/booking" 
              className="bg-black text-white font-bold py-3 px-8 rounded-full inline-block hover:bg-gray-800 transition duration-300"
            >
              Book Your Session
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
} 