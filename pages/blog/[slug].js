import Link from 'next/link';
import AnimatedSection from '../../components/AnimatedSection';
import Seo from '../../components/Seo';
import { blogSlugs, getBlogPost } from '../../data/blog';
import { blogPostJsonLd } from '../../lib/structured-data';

/**
 * Every post is statically generated with its own title, description,
 * canonical and social card.
 *
 * This page previously looked up the post from `router.query` inside the
 * component. During server-side rendering the query is empty, so Next.js
 * rendered the "Loading..." branch and shipped a page with no <title>, no
 * description, no canonical and no og tags at all. Search engines were served
 * an empty document for all six posts.
 *
 * getStaticPaths + getStaticProps make the metadata part of the prerendered
 * HTML, so each post has a real title and canonical the moment it is deployed.
 */
export function getStaticPaths() {
  return {
    paths: blogSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}

export default function BlogPost({ post }) {
  return (
    <>
      <Seo
        title={post.seoTitle || `${post.title} - Podcast Bahrain by Premiera Live`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        imageAlt={post.title}
        imageWidth={post.imageWidth}
        imageHeight={post.imageHeight}
        type="article"
        jsonLd={blogPostJsonLd(post)}
      />

      {/* Header Banner with Featured Image */}
      <div className="relative h-80 md:h-96 bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-70"
            onError={(e) => { e.target.onerror = null; e.target.src = '/images/video-poster.jpg'; }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <AnimatedSection>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gold text-shadow">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-300 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none text-white">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </AnimatedSection>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-gold">Share This Article</h3>
              <div className="flex space-x-4">
                <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${post.title}`} target="_blank" rel="noopener noreferrer" className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href={`https://wa.me/?text=${post.title}%20${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-12">
              <Link href="/blog">
                <span className="inline-flex items-center text-gold hover:underline">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                  </svg>
                  Back to Blog
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gold text-black">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your own podcast?</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">Get professional equipment, expert technicians, and world-class production for your podcast with Premiera Live.</p>
            <Link href="/booking">
              <span className="bg-black text-gold font-bold py-3 px-8 rounded-full inline-block hover:bg-gray-800 transition duration-300">Book Your Session</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
} 