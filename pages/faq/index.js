import Head from 'next/head';
import { useState } from 'react';
import AnimatedSection from '../../components/AnimatedSection';

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "How do I book a podcast recording session?",
      answer: "You can book a session through our online booking form, or by contacting us directly via phone or WhatsApp at +973 3900 7750. We recommend booking at least one week in advance to ensure availability, though we can accommodate last-minute requests when possible."
    },
    {
      id: 2,
      question: "What's included in your standard setup?",
      answer: "Our standard setup includes one Sony cinema camera, two professional microphones, all necessary audio interfaces and monitoring equipment, basic lighting, and technical support throughout your session. You'll receive the raw audio and video files after recording."
    },
    {
      id: 3,
      question: "Do you only service Bahrain, or can you travel to other countries?",
      answer: "While we're primarily based in Bahrain, we do offer our services in neighboring areas in Saudi Arabia, including Dammam, Khobar, Dhahran, and Jubail. For other international locations, please contact us directly to discuss options and additional travel fees."
    },
    {
      id: 4,
      question: "How much space do you need for the setup?",
      answer: "Our minimal setup requires approximately 3x3 meters of space, though more space is preferable for optimal results. We can adapt to various environments, but a quiet room with minimal echo is best for audio quality."
    },
    {
      id: 5,
      question: "How long does it take to set up the equipment?",
      answer: "Our team typically arrives 60-90 minutes before your scheduled recording time to set up and test all equipment. The exact setup time depends on the complexity of your chosen package and location specifications."
    },
    {
      id: 6,
      question: "Can you help with podcast editing and publishing?",
      answer: "Yes, we offer post-production services including audio editing, video editing, color grading, intro/outro addition, and podcast distribution assistance. These services can be added to any recording package for an additional fee."
    },
    {
      id: 7,
      question: "What types of payment do you accept?",
      answer: "We accept bank transfers, credit/debit cards, and cash payments. For most bookings, we require a 50% deposit to secure your date, with the balance due on the day of recording."
    },
    {
      id: 8,
      question: "What if I need to cancel or reschedule my booking?",
      answer: "We understand plans change. Cancellations made more than 48 hours before your session are eligible for a full refund or rescheduling without fees. Cancellations within 48 hours may incur a 25% fee or can be rescheduled for a small administration charge."
    },
    {
      id: 9,
      question: "Can you accommodate multiple guests or panel discussions?",
      answer: "Absolutely! Our premium and professional packages include multiple microphones and camera setups specifically designed for interviews and panel discussions. Let us know how many participants you'll have when booking so we can prepare accordingly."
    },
    {
      id: 10,
      question: "I've never recorded a podcast before. Can you provide guidance?",
      answer: "Yes, our team is experienced in working with first-time podcasters. We provide technical guidance during setup and recording, and can offer basic content and presentation tips if desired. We aim to make the experience comfortable and professional for podcasters of all experience levels."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Bahrain Nights Podcast Studio</title>
        <meta name="description" content="Find answers to common questions about our mobile podcast recording services in Bahrain." />
      </Head>

      {/* Header Banner */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">Find answers to the most common questions about our podcast recording services</p>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-lg text-center mb-12">
                If you can't find the answer to your question here, please feel free to <a href="/contact" className="text-gold hover:underline">contact us</a> directly.
              </p>
            </AnimatedSection>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={faq.id} delay={index * 0.05}>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="flex justify-between items-center w-full p-5 bg-white hover:bg-gray-50 transition duration-200"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-lg font-semibold text-left text-black">{faq.question}</h3>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 text-black ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    <div 
                      className={`px-5 pt-0 overflow-hidden transition-all duration-300 bg-white ${
                        activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-800">{faq.answer}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team is ready to help you with any specific questions or to discuss your podcast recording needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+97339007750" className="bg-black text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Call Us
              </a>
              <a href="mailto:shareef@eventsbahrain.com" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
} 