import React, { useEffect, useState, useRef } from 'react';
import { 
  Clock, Zap, Forward, CheckCircle, ArrowRight, Shield, 
  Hourglass, Rocket, ChevronDown, ChevronUp, Timer 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import BlogInsights from '../components/BlogInsights';

const FastTurnaroundPage = () => {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    capabilities: false,
    methodology: false,
    whyChooseUs: false,
    faqs: false,
    testimonials: false,
    blogs: false,
    cta: false
  });

  const [openFaq, setOpenFaq] = useState(null);

  const sectionRefs = {
    hero: useRef(null),
    capabilities: useRef(null),
    methodology: useRef(null),
    whyChooseUs: useRef(null),
    faqs: useRef(null),
    testimonials: useRef(null),
    blogs: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            setVisibleSections(prev => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      q: "What is your fastest guaranteed turnaround time?",
      a: "For urgent research or minor drafting tasks, we offer a 12-hour express turnaround. Most standard projects on the 'Urgent Track' are delivered within 24 hours."
    },
    {
      q: "Is there an additional fee for urgent projects?",
      a: "Yes. Our 'Emergency Support' track involves a premium surcharge to prioritize your project over our standard queue, ensuring immediate dedicated resources."
    },
    {
      q: "How do you maintain quality when working under tight deadlines?",
      a: "Speed does not compromise our standards. Our 'Rapid-Response' team consists of our most senior paralegals who utilize optimized templates and AI-assisted cross-referencing to ensure accuracy at speed."
    },
    {
      q: "Can you handle large bundles with overnight turnaround?",
      a: "We have a specialized night-shift team dedicated specifically to overnight bundling and pagination, allowing you to submit documentation at close of business and receive court-ready files by 9:00 AM."
    },
    {
      q: "Do you offer 24/7 client support for urgent matters?",
      a: "Indeed. Clients on our premium fast-track have a dedicated point of contact available via priority channels for real-time updates on urgent filings."
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-hidden">
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* SEO Structure */}
        <header className="hidden">
          <h1>Express Legal Support & Fast Turnaround UK - H&S Co.</h1>
          <p>Urgent paralegal services, overnight trial bundles, and express legal drafting for UK solicitors with tight deadlines.</p>
        </header>

        {/* Hero Section */}
        <section 
          ref={sectionRefs.hero} 
          data-section="hero"
          className="relative px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mb-20 lg:mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 transform ${visibleSections.hero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[50vw]'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.3em] text-xs font-bold font-sans underline decoration-[#A07A41]/30">URGENT SUPPORT</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
                Rapid-Response <br />
                <span className="italic font-light text-[#A07A41]">Legal Logistics.</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-10">
                In litigation, time is the scarcest resource. Our specialized 'Flash Team' provides immediate assistance for last-minute court filings, overnight bundles, and emergency research when every second counts.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium tracking-wide border border-white/10 px-5 py-3 rounded-full bg-white/5">
                  <Zap className="h-4 w-4 text-[#A07A41]" />
                  12-Hour Express Delivery
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium tracking-wide border border-white/10 px-5 py-3 rounded-full bg-white/5">
                  <Timer className="h-4 w-4 text-[#A07A41]" />
                  Overnight Bundle Prep
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 transform hidden lg:block ${visibleSections.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50vw]'}`}>
              <div className="relative aspect-square max-w-md ml-auto overflow-hidden rounded-2xl border border-white/10 shadow-big group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2D33] via-transparent to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                  alt="Urgent Legal Deadlines" 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <div className="p-6 bg-[#A07A41] text-white rounded-lg shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs uppercase tracking-widest font-bold mb-2">Service Speed</p>
                    <p className="text-3xl font-serif font-bold">24/7 Availability</p>
                    <p className="text-sm opacity-80 italic">For High-Priority Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section 
          ref={sectionRefs.capabilities} 
          data-section="capabilities"
          className="bg-[#1B2D33] py-24 lg:py-32 border-y border-white/5 relative overflow-hidden"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`max-w-3xl mb-20 transition-all duration-1000 transform ${visibleSections.capabilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Emergency Track <span className="text-[#A07A41]">Solutions.</span></h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                When you hit a deadline wall, we provide the scale and speed to get your documents over the finish line—without any loss in technical quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Overnight Bundling', desc: 'Transforming massive discovery sets into court-ready indexed bundles while you sleep.', icon: Rocket },
                { title: 'Urgent Filing Support', desc: 'Immediate preparation of N244 applications and time-sensitive procedural forms.', icon: Forward },
                { title: 'Flash Research', desc: 'Accelerated case law searches for upcoming hearings or emergency applications.', icon: Hourglass },
                { title: 'Priority Drafting', desc: 'Skip the queue drafting for witness statements and letters of claim.', icon: Clock }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-8 bg-[#2A454E]/50 border border-white/5 hover:border-[#A07A41]/40 transition-all duration-1000 transform rounded-lg group ${visibleSections.capabilities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <item.icon className="h-10 w-10 text-[#A07A41] mb-6 transform group-hover:-translate-y-1 transition-transform duration-300" />
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section 
          ref={sectionRefs.methodology} 
          data-section="methodology"
          className="py-24 lg:py-40 overflow-hidden"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`order-2 lg:order-1 relative transition-all duration-1000 transform ${visibleSections.methodology ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[30vw]'}`}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <div className="aspect-[4/5] bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50 transition-opacity hover:opacity-100 duration-700" alt="Fast Work 1" />
                    </div>
                    <div className="aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Fast Work 2" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Fast Work 3" />
                    </div>
                    <div className="aspect-[4/5] bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Fast Work 4" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#A07A41]/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
              </div>

              <div className={`order-1 lg:order-2 transition-all duration-1000 transform ${visibleSections.methodology ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[30vw]'}`}>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                  Our Express <br />
                  <span className="italic font-light text-[#A07A41]">Delivery Model.</span>
                </h2>
                <div className="space-y-10">
                  {[
                    { step: '01', title: 'Instant Triage', text: 'Project assignment within 15 minutes of receiving the brief to the closest available senior specialist.' },
                    { step: '02', title: 'Dedicated Resource', text: 'Locking in dedicated paralegals who only work on your matter until the urgent deadline is met.' },
                    { step: '03', title: 'Agile QA', text: 'Real-time quality checks conducted by a secondary reviewer as each section of the document or bundle is completed.' },
                    { step: '04', title: 'Secure Dispatch', text: 'Encrypted, high-speed delivery of files to all instructing parties and court servers simultaneously.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-8 group">
                      <span className="text-3xl font-serif italic text-white/10 group-hover:text-[#A07A41]/40 transition-colors duration-500">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2 tracking-wide uppercase">{item.title}</h4>
                        <p className="text-gray-400 font-light leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <div ref={sectionRefs.whyChooseUs} data-section="whyChooseUs" className={`transition-all duration-1000 transform ${visibleSections.whyChooseUs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <WhyChooseUs />
        </div>

        {/* FAQ Section */}
        <section 
          ref={sectionRefs.faqs} 
          data-section="faqs"
          className="py-24 lg:py-32 bg-[#2A454E]/30 relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center mb-16 transition-all duration-1000 transform ${visibleSections.faqs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Frequently Asked <span className="text-[#A07A41]">Questions.</span></h2>
              <p className="text-gray-400 font-light">How we manage speed without sacrificing legal precision.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-500 ${visibleSections.faqs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left bg-[#1B2D33]/40 hover:bg-[#1B2D33]/60 transition-colors"
                  >
                    <span className="text-white font-medium text-lg leading-relaxed pr-8">{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="h-5 w-5 text-[#A07A41]" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                  </button>
                  <div className={`transition-all duration-500 overflow-hidden ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed bg-[#1B2D33]/40">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <div ref={sectionRefs.testimonials} data-section="testimonials" className={`transition-all duration-[1500ms] transform ${visibleSections.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <Testimonials />
        </div>

        {/* Blog Insights Section */}
        <div ref={sectionRefs.blogs} data-section="blogs" className={`transition-all duration-1000 transform ${visibleSections.blogs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <BlogInsights />
        </div>

        {/* Final CTA Section */}
        <section 
          ref={sectionRefs.cta} 
          data-section="cta"
          className="px-4 pb-12"
        >
          <div className={`max-w-6xl mx-auto bg-[#1B2D33] rounded-3xl p-12 lg:p-20 border border-[#A07A41]/20 relative overflow-hidden text-center transition-all duration-1000 transform ${visibleSections.cta ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 text-[20rem] font-serif font-bold text-white/5 select-none leading-none">H&S</div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <CheckCircle className="h-16 w-16 text-[#A07A41] mb-8" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
                Beat The Clock <br />
                <span className="italic font-light text-[#A07A41]">Before It Strikes.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                No deadline is too tight. Get the elite support you need right when you need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/#consultation" className="flex items-center justify-center gap-3 px-10 py-5 bg-[#A07A41] text-[#1B2D33] font-bold tracking-widest uppercase text-sm rounded transition-all hover:bg-white hover:scale-105 shadow-xl">
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/#contact" className="flex items-center justify-center gap-3 px-10 py-5 bg-transparent border border-white/20 text-white font-bold tracking-widest uppercase text-sm rounded transition-all hover:bg-white/5">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default FastTurnaroundPage;
