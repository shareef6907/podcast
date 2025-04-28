import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AnimatedSection from '../../components/AnimatedSection';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // In a real app, this would come from a CMS or API
  // This is a mock database of blog posts
  const blogPosts = {
    'why-bahrain-is-perfect-for-podcasting': {
      title: "Why Bahrain is Perfect for Podcasting",
      excerpt: "Discover why the diverse culture and strategic location of Bahrain makes it an ideal hub for podcast content creation in the Gulf region.",
      image: "/images/blog/bahrain-podcasting.jpg",
      date: "March 15, 2023",
      author: "Shareef Ali",
      content: `
        <p class="mb-4">Bahrain's unique position in the Gulf makes it an ideal location for podcast production and content creation. With its blend of traditional values and modern outlook, the island kingdom offers creators a rich cultural backdrop for their audio stories.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Cultural Diversity</h3>
        <p class="mb-4">As a cultural melting pot, Bahrain brings together influences from across the Arab world, South Asia, and Western expatriate communities. This diversity provides podcast creators with access to a wide range of perspectives, stories, and experiences – all within a small geographical area.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Strategic Location</h3>
        <p class="mb-4">Located at the heart of the Gulf, Bahrain serves as a convenient hub for bringing together guests from across the GCC region. Its proximity to Saudi Arabia, UAE, and other Gulf nations makes it an excellent base for regional content creation.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Technological Infrastructure</h3>
        <p class="mb-4">With excellent internet connectivity and a tech-savvy population, Bahrain offers the digital infrastructure necessary for podcast production and distribution. The kingdom's investment in digital transformation has created an environment where content creators can thrive.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Growing Audience</h3>
        <p class="mb-4">The podcast medium is gaining tremendous popularity across the Gulf region, with listeners hungry for local content that addresses their specific interests and cultural context. Bahrain's diverse population offers a ready audience for various podcast genres.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Supportive Business Environment</h3>
        <p class="mb-4">Bahrain's business-friendly regulations and support for digital entrepreneurship make it easier to establish and grow podcast-related businesses. The kingdom's economic development board actively encourages creative industries, offering various incentives for content creators.</p>
        
        <p class="mb-4">With Bahrain Nights' mobile podcast studio solutions, creators can take full advantage of these favorable conditions without the need to invest in expensive equipment or dedicated space. Our professional setup can transform any location in Bahrain – from hotel rooms to beachside venues – into a world-class recording environment.</p>
      `
    },
    'tips-for-hotel-room-recordings': {
      title: "Tips for Hotel Room Recordings",
      excerpt: "Learn how to transform your hotel room into a professional recording studio with these simple yet effective techniques.",
      image: "/images/blog/hotel-recording.jpg",
      date: "April 22, 2023",
      author: "Ahmed Khan",
      content: `
        <p class="mb-4">Recording a podcast in a hotel room presents unique challenges, but with the right approach, you can achieve professional-quality results. Here are our top tips for getting the best sound in hotel environments.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Room Selection</h3>
        <p class="mb-4">If possible, request a room away from elevators, ice machines, and high-traffic hallways. Corner rooms often have fewer shared walls with other guests, reducing potential noise interference. Higher floors typically experience less street noise.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Acoustic Treatment</h3>
        <p class="mb-4">Hotel rooms are usually designed for comfort, not acoustics. Use pillows, blankets, and towels to dampen sound reflections. Place pillows behind microphones to reduce room echo, and hang extra blankets on walls to minimize sound bounce.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">HVAC Management</h3>
        <p class="mb-4">Air conditioning and heating systems can create unwanted background noise. If possible, temporarily turn off the HVAC during recording sessions. If that's not an option, position microphones away from vents and use directional microphones that reject off-axis sound.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Furniture Arrangement</h3>
        <p class="mb-4">Create a makeshift recording booth by arranging furniture to create a more intimate space. Use the closet as a vocal booth in extreme cases - the hanging clothes provide excellent sound absorption.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Time Your Sessions</h3>
        <p class="mb-4">Be aware of peak activity times in hotels. Early mornings and late evenings are typically quieter, while mid-day might bring cleaning staff and more guest movement.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Professional Equipment</h3>
        <p class="mb-4">Using professional equipment makes a significant difference in challenging environments. This is where Bahrain Nights' mobile podcast studio service shines - we bring cinema-quality cameras, professional microphones, and proper acoustic treatment directly to your hotel room.</p>
        
        <p class="mb-4">With our expertise and equipment, you can transform any hotel room in Bahrain into a professional podcast studio without compromising on quality or convenience.</p>
      `
    },
    'choosing-the-right-microphone': {
      title: "Choosing the Right Microphone for Your Podcast",
      excerpt: "A comprehensive guide to selecting the perfect microphone based on your podcast format, voice, and recording environment.",
      image: "/images/blog/microphone-selection.jpg",
      date: "May 10, 2023",
      author: "Sarah Johnson",
      content: `
        <p class="mb-4">The microphone is arguably the most important piece of equipment for your podcast. Here's how to choose the right one for your specific needs.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Dynamic vs. Condenser Microphones</h3>
        <p class="mb-4">Dynamic microphones are more forgiving in untreated rooms and noisy environments. They're robust, require no external power, and work well for most voice types. We recommend the Shure SM7B, Electro-Voice RE20, or Rode PodMic for podcasters.</p>
        <p class="mb-4">Condenser microphones capture more detail and nuance but also pick up more room noise and require phantom power. In treated spaces, they deliver exceptional clarity. Consider the Audio-Technica AT2020, Rode NT1, or Neumann TLM 103 if recording in a controlled environment.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Polar Patterns</h3>
        <p class="mb-4">Cardioid patterns reject sound from behind the microphone, making them ideal for single-person recording or noisy environments. Omnidirectional mics pick up sound from all directions, useful for roundtable discussions in treated rooms. Bidirectional (figure-8) patterns work well for two-person face-to-face interviews.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">USB vs. XLR</h3>
        <p class="mb-4">USB microphones connect directly to your computer, offering simplicity and convenience for beginners. XLR microphones require an audio interface but provide superior sound quality, more upgrade options, and better control over your audio.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Voice Matching</h3>
        <p class="mb-4">Different microphones complement different voice types. Deeper voices often benefit from microphones with less bass emphasis to prevent muddiness. Higher voices may benefit from microphones with presence boosts to add warmth. Testing different models can help find the perfect match for your voice.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Budget Considerations</h3>
        <p class="mb-4">Quality microphones range from $100 to $3,000+. For beginners, the Rode PodMic ($99) or Audio-Technica ATR2100x ($99) offer excellent value. As you grow, consider investing in higher-end options like the Shure SM7B ($399) or Electro-Voice RE20 ($449).</p>
        
        <p class="mb-4">At Bahrain Nights, our mobile podcast studio comes equipped with a selection of professional-grade microphones suitable for different voice types and recording scenarios. Our expert technicians can help select the perfect microphone for each speaker, ensuring optimal sound quality without the heavy investment in equipment.</p>
      `
    },
    'multi-camera-setups': {
      title: "Multi-Camera Setups for Dynamic Podcast Videos",
      excerpt: "Elevate your podcast's visual appeal with professional multi-camera techniques that engage viewers and add production value.",
      image: "/images/blog/multi-camera.jpg",
      date: "June 5, 2023",
      author: "Shareef Ali",
      content: `
        <p class="mb-4">In today's digital landscape, many podcasts are consumed on video platforms like YouTube. A multi-camera setup transforms your podcast from a simple recording to a visually engaging production. Here's how to implement effective multi-camera setups.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Camera Positioning</h3>
        <p class="mb-4">The primary camera should capture a wide shot showing all participants. Secondary cameras provide medium shots of individual speakers, while tertiary cameras can capture close-ups or interesting angles. For a standard two-person podcast, a three-camera setup is ideal: wide shot, and one camera per person.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Camera Selection</h3>
        <p class="mb-4">For professional results, cinema cameras like the Sony FX3, Sony A7S III, or Blackmagic Pocket Cinema cameras deliver exceptional image quality. These cameras offer features like high dynamic range, beautiful color science, and shallow depth of field for a cinematic look.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Matching Your Cameras</h3>
        <p class="mb-4">When using multiple camera models, ensure they're color-matched for consistent footage. Record in the same picture profile (like S-Log3 or Rec.709) across all cameras. Using the same lens family also helps maintain visual consistency.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Lighting for Multiple Cameras</h3>
        <p class="mb-4">With multiple angles, lighting becomes more complex. Use three-point lighting (key, fill, and backlight) for each participant to ensure they look good from all angles. Avoid casting shadows that might be visible from certain camera positions.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Switching and Monitoring</h3>
        <p class="mb-4">A video switcher like the Blackmagic ATEM Mini allows live switching between cameras and recording all feeds simultaneously. This enables both live streaming and post-production flexibility. Proper monitoring with a multi-view display helps ensure all cameras are correctly framed and exposed.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Post-Production Workflow</h3>
        <p class="mb-4">In editing, the wide shot serves as your master shot while cutting to individual cameras for reactions and emphasizing speakers. Dynamic switching between angles maintains viewer engagement. Software like Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve makes multi-camera editing straightforward.</p>
        
        <p class="mb-4">At Bahrain Nights, we specialize in professional multi-camera setups with our cinema-quality equipment. Our packages include Sony FX6, FX3, and A7S III cameras with the Blackmagic ATEM Mini ISO Extreme for sophisticated switching and recording. We handle all technical aspects, allowing you to focus entirely on your content.</p>
      `
    },
    'podcast-marketing-gcc': {
      title: "Podcast Marketing Strategies for Bahrain and GCC Audiences",
      excerpt: "Targeted marketing approaches to help your podcast reach and resonate with listeners across Bahrain and the wider Gulf region.",
      image: "/images/blog/podcast-marketing.jpg",
      date: "July 18, 2023",
      author: "Fatima Al-Sayed",
      content: `
        <p class="mb-4">Creating great podcast content is only half the battle; effectively marketing your show to Bahrain and GCC audiences requires strategic approaches tailored to regional preferences and behaviors.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Bilingual Approach</h3>
        <p class="mb-4">Consider publishing in both Arabic and English to maximize your reach. This could mean creating separate episodes in each language or providing bilingual descriptions and transcripts. The Gulf region has strong bilingual communities, and catering to both Arabic and English speakers significantly expands your potential audience.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Regional Distribution Platforms</h3>
        <p class="mb-4">While global platforms like Apple Podcasts and Spotify are important, don't overlook regional platforms like Deezer (popular in MENA), Anghami, and IHeart. These platforms often have better regional targeting and recommendation algorithms for Gulf audiences.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Social Media Strategy</h3>
        <p class="mb-4">Instagram and Twitter are highly effective for podcast promotion in the GCC. Instagram in particular has exceptionally high usage rates across the Gulf states. Create audiograms (audio clips with waveform visualization), quote cards, and behind-the-scenes content to drive engagement. WhatsApp sharing is also crucial for content distribution in the region.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Timing Considerations</h3>
        <p class="mb-4">Be mindful of prayer times, religious holidays, and regional work weeks when scheduling releases and promotional activities. During Ramadan, for instance, listening habits shift significantly, and content consumption often peaks in the evening hours.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Local Partnerships</h3>
        <p class="mb-4">Collaborate with local businesses, cultural institutions, and influencers for cross-promotion. Gulf societies are relationship-driven, so building a network of supporters and partners can significantly boost your podcast's visibility and credibility.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Video Content</h3>
        <p class="mb-4">GCC audiences show a strong preference for video content. Publishing video versions of your podcast on YouTube and Instagram can significantly increase your reach. High-quality video production adds professionalism that's especially valued in Gulf markets.</p>
        
        <p class="mb-4">At Bahrain Nights, our professional video podcast services help you create visually appealing content that resonates with Gulf audiences. Our understanding of local cultural nuances and consumption habits helps position your podcast for success in this unique market.</p>
      `
    },
    'business-podcasts-middle-east': {
      title: "The Rise of Business Podcasts in the Middle East",
      excerpt: "How corporate and business-focused podcasts are transforming communications and thought leadership in the Middle Eastern market.",
      image: "/images/blog/business-podcasts.jpg",
      date: "August 30, 2023",
      author: "Mohammed Al-Dossary",
      content: `
        <p class="mb-4">Across the Middle East, corporations and business leaders are increasingly turning to podcasting as a powerful medium for communication, thought leadership, and brand building. This trend reflects the unique advantages podcasts offer in the regional business context.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Internal Communication</h3>
        <p class="mb-4">Middle Eastern companies with dispersed teams across multiple countries are using private podcasts for internal communications. These audio briefings help maintain consistent messaging and company culture across borders, particularly valuable in a region where relationship-building is central to business success.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Thought Leadership</h3>
        <p class="mb-4">Business leaders throughout the Gulf are leveraging podcasts to establish themselves as thought leaders in their industries. The long-form format allows for nuanced discussion of complex regional business trends, regulatory environments, and market opportunities that aren't easily communicated through shorter formats.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Client Education</h3>
        <p class="mb-4">Professional service firms in banking, legal, consulting, and technology sectors are creating educational podcasts that address the specific challenges and opportunities in Middle Eastern markets. These serve both as valuable resources for clients and as subtle marketing tools.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Investor Relations</h3>
        <p class="mb-4">Public companies in the region are pioneering the use of podcasts for investor relations, providing detailed analysis of quarterly results and business strategies. This approach resonates well in a culture that values transparency and direct communication from leadership.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Cross-Border Business</h3>
        <p class="mb-4">As Middle Eastern businesses expand globally, podcasts provide an effective channel for explaining regional business practices to international partners and showcasing regional expertise to global audiences. English-language business podcasts from Gulf experts are finding listeners worldwide.</p>
        
        <h3 class="text-xl font-bold mb-3 text-gold">Video Integration</h3>
        <p class="mb-4">The most successful business podcasts in the region incorporate professional video elements, recognizing the region's preference for visual media. These video podcasts are shared across multiple platforms, from traditional podcast apps to YouTube, LinkedIn, and Instagram.</p>
        
        <p class="mb-4">Bahrain Nights specializes in producing executive-quality business podcasts that meet the high presentation standards expected in Gulf business circles. Our professional studio equipment, experienced production team, and understanding of business communication needs make us the ideal partner for corporations entering the podcasting space.</p>
      `
    }
  };

  const post = blogPosts[slug];

  // If the post doesn't exist, this will be an empty page until the data loads
  // In a real app, you might want to redirect to a 404 page
  if (!post && typeof window !== 'undefined') {
    router.push('/blog');
    return null;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Bahrain Nights Podcast Studio</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      {/* Header Banner with Featured Image */}
      <div className="relative h-80 md:h-96 bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-70"
            onError={(e) => e.target.src = 'https://via.placeholder.com/1200x600?text=Bahrain+Nights+Podcast'} 
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
            <p className="text-lg mb-6 max-w-3xl mx-auto">Get professional equipment, expert technicians, and world-class production for your podcast with Bahrain Nights.</p>
            <Link href="/booking">
              <span className="bg-black text-gold font-bold py-3 px-8 rounded-full inline-block hover:bg-gray-800 transition duration-300">Book Your Session</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
} 