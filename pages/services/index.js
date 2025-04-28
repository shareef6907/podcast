import Head from 'next/head';
import AnimatedSection from '../../components/AnimatedSection';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Bahrain Nights Podcast Studio</title>
        <meta name="description" content="Professional podcast recording services with premium equipment and expert support anywhere in Bahrain." />
      </Head>

      {/* Header Banner */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Podcast Services</h1>
          <p className="text-xl max-w-3xl mx-auto">Experience the convenience and premium quality of our mobile podcasting services.</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="/images/podcast-setup.jpg" 
                alt="Professional Podcast Setup" 
                className="rounded-lg shadow-xl w-full"
                onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Podcast+Setup'} 
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold mb-6">Professional Studio, Anywhere You Need</h2>
              <p className="text-lg mb-6">
                At Bahrain Nights, we bring the entire professional podcast setup to your preferred location. 
                Whether you're in a hotel room, office, or outdoor venue, our team transforms any space 
                into a fully equipped recording studio.
              </p>
              <p className="text-lg">
                You focus on creating amazing content—we handle all the technical aspects to ensure 
                studio-quality results without the studio constraints.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Equipment Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Our Professional Equipment</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-6">
                  <img 
                    src="/images/1.jpg" 
                    alt="Sony Cinema Cameras" 
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Sony+Cinema+Cameras'} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Sony Cinema Cameras</h3>
                <p className="text-gray-600">
                  Capture stunning 4K video with our professional Sony cinema cameras, delivering 
                  cinematic color grading and exceptional image quality that elevates your podcast's visual appeal.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-6">
                  <img 
                    src="/images/2.jpg" 
                    alt="Blackmagic ATEM Mini ISO Extreme" 
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Blackmagic+ATEM'} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Blackmagic ATEM Mini ISO Extreme</h3>
                <p className="text-gray-600">
                  Our Blackmagic ATEM Mini ISO Extreme switching system enables seamless 
                  multi-camera production, perfect for interviews and panel discussions with professional transitions and effects.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-6">
                  <img 
                    src="/images/3.jpg" 
                    alt="Professional Microphones" 
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Professional+Microphones'} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Microphones</h3>
                <p className="text-gray-600">
                  Our selection of broadcast-quality microphones ensures crystal-clear audio, 
                  capturing rich vocal tones while minimizing background noise for professional sound quality.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Setup Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Flexible Recording Locations</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/images/hotel-setup.jpg" 
                  alt="Hotel Room Setup" 
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Hotel+Setup'} 
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-2">Hotel Rooms</h3>
                    <p>Convert your hotel room into a professional recording studio without leaving your accommodation.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/images/office-setup.jpg" 
                  alt="Office Setup" 
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Office+Setup'} 
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-2">Offices & Conference Rooms</h3>
                    <p>Transform your workplace into a podcast studio for corporate content and team discussions.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/images/outdoor-setup.jpg" 
                  alt="Outdoor Setup" 
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Outdoor+Setup'} 
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-2">Scenic Outdoor Locations</h3>
                    <p>Record against Bahrain's beautiful backdrops for unique and engaging podcast content.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Expert Technical Support</h2>
              <p className="text-lg mb-6">
                Our team of skilled technicians handles every aspect of the setup, recording, and post-production process. 
                You can focus entirely on your content while we manage:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Equipment setup and testing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Audio and video calibration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Multi-camera operation and switching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Sound monitoring and adjustments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gold mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>File management and backup</span>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img 
                src="/images/technician.jpg" 
                alt="Expert Technician" 
                className="rounded-lg shadow-xl w-full"
                onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Expert+Technician'} 
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 text-black">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Customization Options</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-3">Additional Cameras</h3>
                <p>Enhance your visual setup with extra camera angles for dynamic content.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-3">Professional Lighting</h3>
                <p>Add studio-quality lighting for a polished, professional look.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-3">Custom Backgrounds</h3>
                <p>Brand your podcast with custom backdrop options and green screens.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold mb-3">Post-Production</h3>
                <p>Professional editing, mixing, and mastering services for your episodes.</p>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.5}>
            <div className="text-center mt-12">
              <a href="/booking" className="bg-black text-white font-bold py-3 px-8 rounded-full inline-block hover:bg-gray-800 transition duration-300">
                Get a Custom Quote
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
} 