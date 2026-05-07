import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  HardDrive, Target, Eye
} from 'lucide-react';

const TrademarkSearchPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: false,
    services: false,
    process: false,
    who: false,
    reliable: false,
    benefits: false,
    form: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    services: useRef(null),
    process: useRef(null),
    who: useRef(null),
    reliable: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Trademark Search & UKIPO Support | H&S Co.";

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
      title: "Name Availability",
      desc: "Exact match checks and similar name analysis to ensure your brand identity remains unique.",
      points: ["Exact match", "Similar analysis", "Conflict detection"],
      icon: Search,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Logo & Mark Search",
      desc: "Comprehensive visual similarity review and design conflict analysis against local registers.",
      points: ["Visual review", "Design conflicts", "Graphic analysis"],
      icon: Eye,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Classification Check",
      desc: "Expert identification of the correct trademark classes for your goods and services.",
      points: ["Correct categories", "Class identification", "Strategic mapping"],
      icon: Target,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Risk Assessment",
      desc: "Analysis of potential conflicts and probability of rejection to minimize your legal exposure.",
      points: ["Conflict analysis", "Rejection likelihood", "Legal exposure"],
      icon: ShieldCheck,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { step: "01", title: "Brand Collection", desc: "We gather your name, logo, and intended use details for analysis.", anim: "animate-fade-in-left" },
    { step: "02", title: "Database Search", desc: "We search UKIPO and relevant international trademark databases.", anim: "animate-fade-in-right" },
    { step: "03", title: "Similarity Analysis", desc: "We analyse similar marks and potential legal conflicts.", anim: "animate-fade-in-left" },
    { step: "04", title: "Report & Actions", desc: "You receive a clear report with risk assessment and next steps.", anim: "animate-fade-in-right" }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0 text-left">
             <img src="/saa1.jpg" alt="Trademark Hero" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/50 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold">Comprehensive IP Investigation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-left animation-delay-200">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Trademark Search (UK).</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
                Identify potential conflicts, ensure your brand identity is unique, and protect your intellectual property with our comprehensive UK-focused trademark search services.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-right animation-delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Request Trademark Search</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-widest mb-1">UKIPO Support</p>
                   <p className="text-white/40 text-[10px] italic">Verified Search Results</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS TRADEMARK SEARCH & WHY IT MATTERS */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  What Is a <br />
                  <span className="italic font-light text-[#A07A41]">Trademark Search?</span>
                </h2>
                <p className="text-gray-300 font-light mb-8 max-w-xl">A trademark search checks whether your brand name, logo, or mark is already registered or confusingly similar to existing ones in the UK.</p>
                <div className="p-4 bg-[#1B2D33] border-l-4 border-[#A07A41] mb-8">
                   <p className="text-white text-sm italic">We work in strict compliance with UK Intellectual Property Office (UKIPO) standards.</p>
                </div>

                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-8">
                  Why Proper Search <br />
                  <span className="italic font-light text-[#A07A41]">Is Critical.</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Catastrophic application rejection",
                    "Immediate and costly legal disputes",
                    "Severe brand infringement issues",
                    "Substantial financial loss on branding",
                    "Total forced rebranding operations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <img src="/saa1.jpg" alt="Brand protection" className="rounded-2xl shadow-biggest w-full h-[600px] object-cover" />
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-12 md:mb-16 ${visibleSections.services ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 uppercase leading-tight">
                   Our Trademark <span className="italic font-light text-[#A07A41]">Search Services.</span>
                </h2>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
               {coreServices.map((item, i) => (
                 <div key={i} className={`p-8 bg-[#2A454E]/30 border border-white/5 rounded-2xl hover:border-[#A07A41]/30 transition-all ${visibleSections.services ? item.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <item.icon className="h-8 w-8 md:h-10 md:w-10 text-[#A07A41] mb-6" />
                    <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-4 leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                    <ul className="space-y-2 pt-6 border-t border-white/5">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest italic leading-tight">
                          <div className="w-1 h-1 rounded-full bg-[#A07A41] shrink-0"></div>
                          {p}
                        </li>
                      ))}
                    </ul>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-16 md:py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 text-left uppercase leading-tight">
                   How We Conduct <br />
                   <span className="italic font-light text-[#A07A41]">Trademark Searches.</span>
                </h2>
                <img src="/saa2.jpg" alt="Search logic" className="rounded-2xl md:rounded-3xl shadow-biggest w-full h-[300px] md:h-[400px] object-cover" />
             </div>
             <div className="space-y-4 md:space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className={`p-6 md:p-8 bg-[#1B2D33] border border-white/5 rounded-xl flex items-center gap-6 md:gap-8 group hover:border-[#A07A41]/50 transition-all ${visibleSections.process ? step.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="text-3xl md:text-4xl font-serif font-black text-[#A07A41]/20 group-hover:text-[#A07A41] transition-all leading-none">{step.step}</div>
                     <div className="text-left">
                        <h4 className="text-lg md:text-xl font-serif font-bold text-white mb-1 leading-tight group-hover:text-white transition-colors">{step.title}</h4>
                        <p className="text-gray-500 font-sans font-light text-xs md:text-sm italic">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. WHO THIS SERVICE IS FOR */}
        <section ref={sectionRefs.who} data-section="who" className="py-24 bg-[#1B2D33] border-b border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Who Needs <br />
              <span className="italic font-light text-[#A07A41]">Trademark Search?</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                "Startups/Entrepreneurs", 
                "New Brand Launches", 
                "E-commerce sellers", 
                "Agencies and designers", 
                "UK Market Expansion"
              ].map((item, i) => {
                 const diagonalAnims = ["animate-fade-in-top-left", "animate-fade-in-up", "animate-fade-in-top-right", "animate-fade-in-bottom-left", "animate-fade-in-bottom-right"];
                 return (
                    <div key={i} className={`p-8 bg-[#2A454E]/40 border border-white/5 rounded shadow-xl hover:bg-[#A07A41] group transition-all duration-700 ${visibleSections.who ? diagonalAnims[i % 5] : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                       <span className="text-white group-hover:text-black font-serif font-bold text-sm md:text-lg block tracking-wide">{item}</span>
                    </div>
                 );
              })}
            </div>
             <div className="mt-16 animate-fade-in-down animation-delay-500">
               <div className="text-[#A07A41] text-xs font-bold uppercase tracking-widest italic flex items-center justify-center gap-4">
                  <div className="w-10 h-[1px] bg-[#A07A41]"></div>
                  If you’re creating a brand, this step is essential.
                  <div className="w-10 h-[1px] bg-[#A07A41]"></div>
               </div>
            </div>
          </div>
        </section>

        {/* 6. WHAT MAKES OUR SEARCH RELIABLE */}
        <section ref={sectionRefs.reliable} data-section="reliable" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.reliable ? 'animate-fade-in-down' : 'opacity-0'}`}>
               Why Our Trademark <br />
               <span className="italic font-light text-[#A07A41]">Services Stand Out.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { t: "UKIPO Focused", d: "A search architecture designed specifically for UKIPO register standards.", anim: "animate-fade-in-left" },
                 { t: "Decision-Making Clarity", d: "We don’t just search—we provide the logic you need to move forward.", anim: "animate-fade-in-up" },
                 { t: "Business Guidance", d: "Practical legal and business advice tailored to your market positioning.", anim: "animate-fade-in-right" }
               ].map((item, i) => (
                  <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-3xl hover:border-[#A07A41]/50 transition-all ${visibleSections.reliable ? item.anim : 'opacity-0'}`}>
                     <HardDrive className="h-10 w-10 text-[#A07A41] mb-6 mx-auto" strokeWidth={2} />
                     <h4 className="text-xl font-serif font-bold text-white mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-500 text-sm font-light leading-relaxed italic">{item.d}</p>
                  </div>
               ))}
            </div>
             <div className="mt-16">
                <p className="text-[#A07A41] font-bold text-sm uppercase tracking-widest italic">👉 We ensure decision-making clarity</p>
            </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 text-left">
                  Benefits of Professional <br />
                  <span className="italic font-light text-[#A07A41]">Trademark Search.</span>
                </h2>
                <div className="space-y-6 mb-12 text-left">
                  {[
                    "Proactively avoid costly application rejection",
                    "Massively reduce overall legal and business risk",
                    "Permanently protect your unique brand identity",
                    "Significant savings in long-term legal costs",
                    "Enable fully informed strategic brand decisions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 text-gray-300">
                       <CheckCircle className="h-6 w-6 text-[#A07A41]" strokeWidth={3} />
                       <span className="text-lg font-light leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-[#2A454E]/40 border-r-4 border-[#A07A41] rounded-l-2xl text-right">
                   <p className="text-white font-serif italic text-xl opacity-90 leading-relaxed italic">"A small step now prevents big problems later."</p>
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <img src="/saa3.jpg" alt="Brand security" className="rounded-2xl shadow-biggest w-full aspect-[4/5] object-cover" />
             </div>
          </div>
        </section>

        {/* 8. FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[45rem] mx-auto">
             <div className={`bg-[#1B2D33] p-12 rounded shadow-biggest ${visibleSections.form ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center uppercase tracking-[0.2em]">
                   Request <span className="text-[#A07A41]">Search.</span>
                </h2>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                     <input type="text" placeholder="Full name" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                     <input type="text" placeholder="Contact Details" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                     <input type="text" placeholder="Brand Name / Logo" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                     <input type="text" placeholder="Business Type" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                  </div>
                  <textarea rows="4" placeholder="Description of Use (e.g. products/services)..." className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all"></textarea>
                  
                  <button className="w-full py-5 bg-[#A07A41] text-black font-black uppercase tracking-[0.25em] text-sm rounded shadow-2xl transition-all hover:bg-white flex items-center justify-center gap-4">
                    <span>Submit Your Request</span>
                    <Send className="h-5 w-5" />
                  </button>
                  <p className="text-center text-[11px] text-gray-600 font-bold uppercase tracking-[0.2em] mt-6 leading-relaxed">Your brand assets are handled securely and with total confidentiality.</p>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>FAQs.</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "What is UKIPO exactly?", a: "The UK Intellectual Property Office (UKIPO) is the official government body responsible for IP rights, including trademarks, designs, and patents in the UK." },
                  { q: "Is a trademark search really necessary?", a: "Absolutely. It identifies potential conflicts before you spend time and money on registration, drastically reducing your legal risk." },
                  { q: "Can you check names that are similar, not just identical?", a: "Yes, our search includes 'confusingly similar' marks which are the most common cause of registration failure and legal disputes." },
                  { q: "Do you provide actionable recommendations?", a: "Yes, every search report includes a clear risk assessment and recommended next steps for your brand." },
                  { q: "Will my brand idea be kept secure?", a: "Yes. Every piece of information and brand asset you share is protected by strict professional confidentiality protocols." }
                ].map((faq, i) => (
                   <div key={i} className={`border border-white/5 rounded-2xl bg-[#2A454E]/40 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-8 flex items-center justify-between group">
                      <span className={`text-lg md:text-xl font-serif font-bold transition-all ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-500 px-8 ${activeFaq === i ? 'max-h-56 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="text-gray-400 border-t border-white/5 pt-8 leading-relaxed italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-32 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0 text-left">
             <img src="/saa4.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                Protect Your Brand <br />
                <span className="italic font-light text-[#A07A41]">Before You Register.</span>
              </h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed">Don’t risk rejection or disputes. Protect your intellectual property with a proper trademark search today.</p>
              <button className="px-12 py-5 bg-[#A07A41] text-black font-black tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-5 mx-auto group">
                 <span>Request Trademark Search Today</span>
                 <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default TrademarkSearchPage;
