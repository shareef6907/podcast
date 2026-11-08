import Link from 'next/link';
import AnimatedSection from '../../components/AnimatedSection';
import Seo from '../../components/Seo';
import { blogPosts } from '../../data/blog';
import { blogIndexJsonLd } from '../../lib/structured-data';

export default function Blog() {
  // In a real implementation, this would come from a CMS or API


  return (
    <>
      <Seo
        title="Blog - Podcast Bahrain by Premiera Live"
        description="Podcast production insights from Premiera Live: recording in Bahrain, equipment and microphone choices, multi-camera setups, and how to grow a podcast across the GCC."
        path="/blog"
        jsonLd={blogIndexJsonLd(blogPosts)}
      />

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
              <AnimatedSection key={post.slug} delay={index * 0.1}>
                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-full flex flex-col border border-gray-800">
                  <div className="h-48 bg-gray-800 relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error(`Failed to load image: ${post.image}`);
                        e.target.onerror = null;
                        e.target.src = '/images/grid.svg';
                      }} 
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
              <p className="text-lg mb-8">Stay updated with the latest podcast tips, trends, and Premiera Live news.</p>
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