import Head from 'next/head';
import Link from 'next/link';
import AnimatedSection from '../../components/AnimatedSection';

export default function Blog() {
  // In a real implementation, this would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "Why Bahrain is Perfect for Podcasting",
      excerpt: "Discover why the diverse culture and strategic location of Bahrain makes it an ideal hub for podcast content creation in the Gulf region.",
      image: "/images/blog/bahrain-podcasting.jpg",
      date: "March 15, 2023",
      author: "Shareef Ali",
      slug: "why-bahrain-is-perfect-for-podcasting"
    },
    {
      id: 2,
      title: "Tips for Hotel Room Recordings",
      excerpt: "Learn how to transform your hotel room into a professional recording studio with these simple yet effective techniques.",
      image: "/images/blog/hotel-recording.jpg",
      date: "April 22, 2023",
      author: "Ahmed Khan",
      slug: "tips-for-hotel-room-recordings"
    },
    {
      id: 3,
      title: "Choosing the Right Microphone for Your Podcast",
      excerpt: "A comprehensive guide to selecting the perfect microphone based on your podcast format, voice, and recording environment.",
      image: "/images/blog/microphone-selection.jpg",
      date: "May 10, 2023",
      author: "Sarah Johnson",
      slug: "choosing-the-right-microphone"
    },
    {
      id: 4,
      title: "Multi-Camera Setups for Dynamic Podcast Videos",
      excerpt: "Elevate your podcast's visual appeal with professional multi-camera techniques that engage viewers and add production value.",
      image: "/images/blog/multi-camera.jpg",
      date: "June 5, 2023",
      author: "Shareef Ali",
      slug: "multi-camera-setups"
    },
    {
      id: 5,
      title: "Podcast Marketing Strategies for Bahrain and GCC Audiences",
      excerpt: "Targeted marketing approaches to help your podcast reach and resonate with listeners across Bahrain and the wider Gulf region.",
      image: "/images/blog/podcast-marketing.jpg",
      date: "July 18, 2023",
      author: "Fatima Al-Sayed",
      slug: "podcast-marketing-gcc"
    },
    {
      id: 6,
      title: "The Rise of Business Podcasts in the Middle East",
      excerpt: "How corporate and business-focused podcasts are transforming communications and thought leadership in the Middle Eastern market.",
      image: "/images/blog/business-podcasts.jpg",
      date: "August 30, 2023",
      author: "Mohammed Al-Dossary",
      slug: "business-podcasts-middle-east"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog - Bahrain Nights Podcast Studio</title>
        <meta name="description" content="Professional Podcast filming in Bahrain! Expert filmmaker creates high-quality video podcasts for Creators & Businesses. Book now for studio or on-location shoots!" />
      </Head>

      {/* Header Banner */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold">Podcast Insights</h1>
          <p className="text-xl max-w-3xl mx-auto">Tips, trends, and inspiration for podcasters in Bahrain and beyond</p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col border border-gray-800">
                  <div className="h-48 bg-gray-800 relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => e.target.src = `https://via.placeholder.com/600x400?text=${post.title.replace(/\s+/g, '+')}`} 
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-gray-300 hover:text-gold transition duration-300 shadow-sm">
                      <Link href={`/blog/${post.slug}`}>
                        <span>{post.title}</span>
                      </Link>
                    </h2>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <span className="text-gold font-semibold hover:underline inline-flex items-center">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg mb-8">Stay updated with the latest podcast tips, trends, and Bahrain Nights news.</p>
              <form 
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.elements.email.value;
                  
                  if (!email) {
                    alert('Please enter your email address');
                    return;
                  }
                  
                  // Create mailto link to send the subscription
                  const subject = 'New Newsletter Subscription';
                  const body = `New subscription request from: ${email}`;
                  const mailtoLink = `mailto:shareef@eventsbahrain.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  
                  // Open email client
                  window.open(mailtoLink, '_blank');
                  
                  // Reset form
                  e.target.reset();
                  alert('Thank you for subscribing to our newsletter!');
                }}
              >
                <input 
                  type="email"
                  name="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-full flex-grow focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
} 