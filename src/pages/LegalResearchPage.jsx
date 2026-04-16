import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileSearch, Database, BookOpen, Info, Inbox
} from 'lucide-react';

// Help icons mapping for internal list
const XCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
);
const TrendingDownIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
);
const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const GavelIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gavel"><path d="m14 5 3-3 5 5-3 3-5-5Z"/><path d="m14 5-8 8-3-3 8-8 3 3Z"/><path d="m2 21 6-6"/><path d="m5 18 3 3"/><path d="m2 18 3 3"/><path d="M7 10h10M12 14v7"/></svg>
);
const InfoIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

const LegalResearchPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Initialize as true to ensure content shows even if observer fails
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    why: true,
    services: true,
    process: true,
    areas: true,
    reliability: true,
    benefits: true,
    form: true,
    faq: true,
    cta: true
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    services: useRef(null),
    process: useRef(null),
    areas: useRef(null),
    reliability: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Legal Research Services | H&S Co.";

    // Re-trigger observer if needed, but we start with everything visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            setVisibleSections(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    }, { threshold: 0.1 });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const coreServices = [
    {
      title: "Case Law Research",
      desc: "Identifying relevant UK court decisions, analyzing precedents, and providing robust support for legal arguments.",
      points: ["Court decision identification", "Precendent analysis", "Argument support"],
      icon: Search,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Statutory Research",
      desc: "Comprehensive navigation of UK laws, legislative interpretation, and their direct application to your specific case facts.",
      points: ["UK law navigation", "Legislative interpretation", "Applied research"],
      icon: Landmark,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Regulatory & Compliance",
      desc: "In-depth review of industry-specific requirements, compliance frameworks, and identification of legal risks.",
      points: ["Compliance frameworks", "Risk identification", "Industry requirements"],
      icon: Shield,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Legal Opinion & Analysis",
      desc: "Structured legal insights and outcome evaluations to support your overall case strategy and risk management.",
      points: ["Structured insights", "Outcome evaluation", "Strategy support"],
      icon: FileSearch,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { step: "01", title: "Understanding the Issue", desc: "We define the legal problem and set clear objectives for the research phase." },
    { step: "02", title: "Data Collection", desc: "We gather relevant statutes, case law, and primary legal materials from top UK databases." },
    { step: "03", title: "Legal Analysis", desc: "We interpret and synthesize findings to apply them directly to your unique legal situation." },
    { step: "04", title: "Report Delivery", desc: "You receive a structured, professional report with clear legal conclusions." }
  ];

  const benefits = [
    { t: "Stronger case preparation", d: "Build your strategy on a foundation of verified legal authority.", i: TrendingUp },
    { t: "Better decision-making", d: "Move forward with confidence backed by detailed legal intelligence.", i: Scale },
    { t: "Reduced legal risk", d: "Identify potential pitfalls and precedents before they become liabilities.", i: ShieldCheck },
    { t: "Improved success rate", d: "High-quality research significantly increases strength of submissions.", i: Gavel },
    { t: "Clear legal position", d: "Gain a definitive understanding of where your case stands under UK law.", i: Landmark }
  ];

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative pt-48 pb-32 bg-[#1B2D33]">
          <div className="absolute inset-0 opacity-10">
             <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" alt="Legal" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="max-w-4xl animate-fade-in-up">
              <div className="flex items-center gap-6 mb-10"><div className="h-[2px] w-12 bg-[#A07A41]"></div><span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold">Reliable Intelligence</span></div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                Professional Legal <br />
                <span className="italic font-light text-[#A07A41]">Research Services.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 font-sans font-light leading-relaxed max-w-2xl mb-12">
                In-depth, accurate, and evidence-based legal research to support strong case strategies and informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-[#A07A41] text-black font-bold tracking-widest uppercase text-xs rounded transition-all hover:bg-white shadow-2xl">
                  Request Legal Research
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-white/5">
                  Consult a Legal Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY LEGAL RESEARCH MATTERS */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 lg:py-48 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-24 items-center">
             <div className="animate-fade-in-left">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10">
                  Why Legal Research <br />
                  <span className="italic font-light text-[#A07A41]">Is Critical.</span>
                </h2>
                <div className="space-y-4">
                  {["Weak legal arguments", "Misinterpretation of law", "Failed claims or defences", "Poor legal strategy", "Missed precedents"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded-xl"><AlertCircle className="h-5 w-5 text-[#A07A41]" /><span className="text-gray-200">{item}</span></div>
                  ))}
                </div>
             </div>
             <div className="aspect-video rounded-[3rem] overflow-hidden border border-[#A07A41]/10 shadow-big animate-fade-in-right"><img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80" alt="Authority" className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-[2s]" /></div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-24 lg:py-48 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="text-center mb-24 animate-fade-in-down">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
                  Our Legal Research <span className="italic font-light text-[#A07A41]">Services.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {coreServices.map((service, i) => (
                 <div key={i} className={`p-10 bg-[#2A454E]/30 border border-white/5 rounded-[2.5rem] hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 animate-fade-in-up`} style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-16 h-16 bg-[#16272D] rounded-2xl flex items-center justify-center mb-8 border border-white/5 shadow-xl"><service.icon className="h-8 w-8 text-[#A07A41]" /></div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>
                    <ul className="space-y-2 pt-6 border-t border-white/5">{service.points.map((p, idx) => (<li key={idx} className="flex items-center gap-3 text-xs text-gray-400 font-bold uppercase tracking-widest"><div className="w-1 h-1 rounded-full bg-[#A07A41]"></div>{p}</li>))}</ul>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. OUR PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-24 lg:py-48 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-24 items-center">
             <div className="animate-fade-in-left">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
                  How Our Legal <br />
                  <span className="italic font-light text-[#A07A41]">Research Works.</span>
                </h2>
             </div>
             <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className="p-10 bg-[#16272D] border border-white/5 rounded-[2.5rem] flex items-center gap-10 hover:border-[#A07A41]/40 transition-all animate-fade-in-right" style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="text-5xl font-serif font-black text-white/5">{step.step}</div>
                     <div><h4 className="text-2xl font-serif font-bold text-white mb-2">{step.title}</h4><p className="text-gray-400 font-sans font-light">{step.desc}</p></div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. AREAS OF LAW */}
        <section ref={sectionRefs.areas} data-section="areas" className="py-24 lg:py-48 bg-[#1B2D33] border-b border-white/10">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-20 animate-fade-in-down">
              Areas of <span className="italic font-light text-[#A07A41]">Legal Research.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Civil law", "Commercial law", "Employment law", "Property law", "Personal injury law", "Immigration law"].map((item, i) => (
                <div key={i} className="p-10 bg-[#2A454E]/40 border border-white/5 rounded-[2rem] flex items-center gap-8 hover:bg-[#A07A41] group transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-14 h-14 rounded-2xl bg-[#1B2D33] flex items-center justify-center border border-white/10 group-hover:bg-black transition-colors shrink-0"><Scale className="h-6 w-6 text-[#A07A41]" /></div>
                  <span className="text-white group-hover:text-black font-serif font-bold text-xl md:text-2xl transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. REQUEST FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 lg:py-48 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto"><div className="bg-[#2A454E]/40 rounded-[5rem] p-10 lg:p-24 border border-[#A07A41]/10 backdrop-blur-3xl shadow-biggest grid lg:grid-cols-2 gap-24">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-tight transition-all">
                Request <br /><span className="italic font-light text-[#A07A41]">Research.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">Secure professional legal insights today. Provide case details for confidential evaluation.</p>
              <div className="p-8 bg-black/20 border border-white/5 rounded-3xl inline-flex items-center gap-6">
                <ShieldCheck className="h-8 w-8 text-[#A07A41]" />
                <span className="text-white font-serif italic text-lg opacity-80">Strict Confidentiality Assured.</span>
              </div>
            </div>
            <form className="space-y-6 animate-fade-in-bottom-right">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full name" className="w-full bg-black/20 border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41]" />
                <input type="text" placeholder="Contact Details" className="w-full bg-black/20 border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41]" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <select className="w-full bg-black/20 border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41] appearance-none"><option>Select Area</option></select>
                <div className="relative">
                  <input type="file" className="hidden" id="file-up" />
                  <label htmlFor="file-up" className="flex items-center justify-between w-full bg-black/20 border border-white/10 rounded-xl p-5 text-gray-400 cursor-pointer hover:border-[#A07A41]">
                    <span>Upload Documents</span>
                    <Inbox className="h-5 w-5 text-[#A07A41]" />
                  </label>
                </div>
              </div>
              <textarea rows="4" placeholder="Description of Legal Issue" className="w-full bg-black/20 border border-white/10 rounded-3xl p-6 text-white outline-none focus:border-[#A07A41] resize-none"></textarea>
              <button className="w-full py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-4">
                <span>Submit Your Request</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div></div>
        </section>

        {/* 9. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 lg:py-48 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[60rem] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-20 animate-fade-in-up">FAQs.</h2>
            <div className="space-y-4 text-left">
            {[
              { q: "What is legal research?", a: "Analysing statutes, cases, and regulations to support legal decisions." },
              { q: "How long does it take?", a: "Depends on complexity, usually a few business days." },
              { q: "Can I use this in court?", a: "Yes, it supports legal arguments and preparation." },
              { q: "Is the research confidential?", a: "Yes, all work is handled securely and privately." }
            ].map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-2xl bg-[#1B2D33] overflow-hidden"><button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-8 flex items-center justify-between group"><span className={`text-xl font-serif font-bold ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span><ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} /></button><div className={`transition-all duration-500 px-8 ${activeFaq === i ? 'max-h-48 pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}><p className="text-gray-400 text-lg font-light leading-relaxed border-t border-white/5 pt-6">{faq.a}</p></div></div>
            ))}
          </div></div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-24 lg:py-60 bg-[#16272D] text-center">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="max-w-6xl mx-auto p-16 lg:p-32 bg-[#2A454E]/40 border-2 border-[#A07A41]/10 rounded-[5rem] backdrop-blur-3xl animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-tight">
                Get Clear, Reliable Legal <br />
                <span className="italic font-light text-[#A07A41]">Insights Today.</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-sans font-light max-w-3xl mx-auto mb-16 italic">
                "Knowledge is your strongest legal advantage."
              </p>
              <button className="px-10 py-5 bg-[#A07A41] text-black font-black uppercase tracking-[0.3em] text-xs md:text-sm rounded hover:bg-white transition-all flex items-center justify-center gap-6 mx-auto group shadow-2xl">
                <span>Request Professional Legal Research</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-4 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default LegalResearchPage;
