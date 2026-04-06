import React, { useEffect, useState, useRef } from 'react';
import { 
  Search, BookOpen, Scale, CheckCircle, ArrowRight, Shield, Database, Layout, 
  ChevronDown, ChevronUp 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import BlogInsights from '../components/BlogInsights';

const LegalResearchPage = () => {
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
      q: "What legal databases do you utilize for research?",
      a: "We use iron-clad, industry-standard UK databases including Westlaw UK, Lexis+ (formerly LexisNexis), BAILII, and the National Archives for primary legislation and secondary sources."
    },
    {
      q: "What is the typical turnaround time for a research memo?",
      a: "Our standard turnaround is 48-72 hours. However, we offer an 'Urgent Counsel' track for high-priority matters that require delivery within 24 hours."
    },
    {
      q: "How do you ensure the confidentiality of sensitive case details?",
      a: "All our paralegals operate under strict NDAs and SRA-aligned confidentiality protocols. We use encrypted communication channels and secure cloud environments for all work products."
    },
    {
      q: "Can you provide research for foreign jurisdictions?",
      a: "Yes, we have specialized researchers experienced in Commonwealth Law (Australia, Canada), EU directives, and US federal law comparison for cross-border litigation."
    },
    {
      q: "Do you provide skeleton arguments based on the research?",
      a: "Absolutely. Our 'Strategic Synthesis' phase involves drafting foundational skeleton arguments and chronologies that you can then refine for the courtroom."
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-hidden">
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
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
                <span className="text-[#A07A41] uppercase tracking-[0.3em] text-xs font-bold font-sans underline decoration-[#A07A41]/30">SPECIALIZED SERVICE</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
                Precision-Driven <br />
                <span className="italic font-light text-[#A07A41]">Legal Research.</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-10">
                In the complex landscape of UK Law, the strength of your argument depends on the depth of your research. We provide exhaustive analytical support, surfacing the precedents and statutes that define the margin of victory.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium tracking-wide border border-white/10 px-5 py-3 rounded-full bg-white/5">
                  <Database className="h-4 w-4 text-[#A07A41]" />
                  LexisNexis & Westlaw Certified
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium tracking-wide border border-white/10 px-5 py-3 rounded-full bg-white/5">
                  <Shield className="h-4 w-4 text-[#A07A41]" />
                  SRA Standards Compliant
                </div>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 transform hidden lg:block ${visibleSections.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50vw]'}`}>
              <div className="relative aspect-square max-w-md ml-auto overflow-hidden rounded-2xl border border-white/10 shadow-big group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2D33] via-transparent to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Legal Research Analysis" 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <div className="p-6 bg-[#A07A41] text-white rounded-lg shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs uppercase tracking-widest font-bold mb-2">Efficiency Metric</p>
                    <p className="text-3xl font-serif font-bold">40% Reduction</p>
                    <p className="text-sm opacity-80 italic">In Partner Research Time</p>
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
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Research <span className="text-[#A07A41]">Architecture.</span></h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                We don't just find information; we architect insight. Our team utilizes a multi-layered approach to ensure no case law or regulatory update is overlooked.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Case Law Precedents', desc: 'Deep dive into UK High Court, Court of Appeal, and Supreme Court rulings to find the winning argument.', icon: Search },
                { title: 'Statutory Analysis', desc: 'Detailed tracking of Primary and Secondary Legislation including the latest SIs and Regulatory changes.', icon: Layout },
                { title: 'Foreign Jurisdictions', desc: 'Comparative research across Commonwealth and International Law for cross-border litigation support.', icon: BookOpen },
                { title: 'Regulatory Audit', desc: 'Ensuring your client strategy aligns with the latest SRA, FCA, or industry-specific UK regulations.', icon: Scale }
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
                      <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50 transition-opacity hover:opacity-100 duration-700" alt="Process 1" />
                    </div>
                    <div className="aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Process 2" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Process 3" />
                    </div>
                    <div className="aspect-[4/5] bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="Process 4" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#A07A41]/10 rounded-full blur-[80px] -z-10 animate-pulse"></div>
              </div>

              <div className={`order-1 lg:order-2 transition-all duration-1000 transform ${visibleSections.methodology ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[30vw]'}`}>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                  The H&S Co. <br />
                  <span className="italic font-light text-[#A07A41]">Methodology.</span>
                </h2>
                <div className="space-y-10">
                  {[
                    { step: '01', title: 'Data Extraction', text: 'Scanning thousands of legal data points across subscription-only databases (Westlaw, Lexis+).' },
                    { step: '02', title: 'Critical Filtering', text: 'Distilling data into highly relevant case laws, stripping away noise to find core legal principles.' },
                    { step: '03', title: 'Strategic Synthesis', text: 'Connecting legal precedents to the unique facts of your client’s case for a winning perspective.' },
                    { step: '04', title: 'Brief Generation', text: 'Delivering a structured research memo ready for inclusion in your skeleton arguments.' }
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
              <p className="text-gray-400 font-light">Addressing your concerns about our Legal Research protocols.</p>
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
                Ready to Deepen Your <br />
                <span className="italic font-light text-[#A07A41]">Legal Strategy?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                Stop spending billable hours on foundational research. Let our experts provide the data you need to win. 
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

export default LegalResearchPage;
