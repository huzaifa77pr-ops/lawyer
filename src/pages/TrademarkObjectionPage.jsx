import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  HardDrive, Target, Eye
} from 'lucide-react';

const TrademarkObjectionPage = () => {
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
    document.title = "Trademark Objection Response UKIPO | H&S Co.";

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
      title: "Objection Analysis",
      desc: "Deep analysis of UKIPO concerns to identify core legal issues and application weaknesses.",
      points: ["UKIPO notice review", "Legal issue detection", "Adverse report analysis"],
      icon: Search,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Legal Argument Preparation",
      desc: "Developing structured and reasoned legal arguments to overcome perceived conflicts or lack of distinctiveness.",
      points: ["Structured reasoning", "Case law support", "Legal justifications"],
      icon: Search,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Evidence & Justification",
      desc: "Collation and presentation of supporting materials to strengthen your position and justify registration.",
      points: ["Evidence gathering", "Usage proof", "Market justification"],
      icon: ShieldCheck,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Response Drafting",
      desc: "Clear, professional, and UKIPO-compliant documentation drafted to the highest legal standards.",
      points: ["Professional drafting", "Submission format", "Technical accuracy"],
      icon: Send,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { step: "01", title: "Review Objection Notice", desc: "We meticulously analyse the specific concerns and grounds raised by the UKIPO." },
    { step: "02", title: "Strategy Development", desc: "We define the most effective legal approach to address and overcome the objection." },
    { step: "03", title: "Drafting Response", desc: "We prepare a detailed, cited legal reply for your review and approval." },
    { step: "04", title: "Final Submission Support", desc: "We guide you through the submission process to ensure your response is recorded." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
           @keyframes fade-in-top-left {
            from { opacity: 0; transform: translate(-30px, -30px); }
            to { opacity: 1; transform: translate(0, 0); }
          }
          @keyframes fade-in-top-right {
            from { opacity: 0; transform: translate(30px, -30px); }
            to { opacity: 1; transform: translate(0, 0); }
          }
          @keyframes fade-in-bottom-left {
            from { opacity: 0; transform: translate(-30px, 30px); }
            to { opacity: 1; transform: translate(0, 0); }
          }
          @keyframes fade-in-bottom-right {
            from { opacity: 0; transform: translate(30px, 30px); }
            to { opacity: 1; transform: translate(0, 0); }
          }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
          .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
          .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards; }
          .animate-fade-in-top-left { animation: fade-in-top-left 1s ease-out forwards; }
          .animate-fade-in-top-right { animation: fade-in-top-right 1s ease-out forwards; }
          .animate-fade-in-bottom-left { animation: fade-in-bottom-left 1s ease-out forwards; }
          .animate-fade-in-bottom-right { animation: fade-in-bottom-right 1s ease-out forwards; }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-700 { animation-delay: 0.7s; }
        `}
      </style>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/aa.jpg" alt="Trademark Objection Hero" className="w-full h-full object-cover opacity-20 grayscale" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/40 to-[#2A454E]"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold">Defence + Strategy</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-left animation-delay-200">
                Trademark Objection <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Response Services (UKIPO).</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
                Professional legal responses to UKIPO objections, designed to strengthen your application and improve approval chances. We analyse objections and respond with clear, structured legal arguments.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-right animation-delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Respond to Trademark Objection</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-widest mb-1">Expert Analyst Support</p>
                   <p className="text-white/40 text-[10px] italic">Verified Approval Strategies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS A TRADEMARK OBJECTION? */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#1B2D33] overflow-hidden border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'} order-2 lg:order-1`}>
                    <div className="relative group">
                       <img src="/co1.jpg" alt="Objection Notice" className="rounded-2xl md:rounded-3xl shadow-biggest w-full h-[300px] md:h-[600px] object-cover" />
                       <div className="absolute inset-0 border border-white/10 rounded-2xl md:rounded-3xl m-4 md:m-8"></div>
                    </div>
                </div>

                <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'} order-1 lg:order-2 space-y-12`}>
                   <div>
                      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight leading-tight uppercase">
                        Understanding <br />
                        <span className="italic font-light text-[#A07A41]">Trademark Objections.</span>
                      </h2>
                      <p className="text-gray-300 font-light text-base md:text-lg mb-8 leading-relaxed italic px-4 md:px-0">
                        A trademark objection occurs when the UK Intellectual Property Office raises concerns about your application's validity.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Similarity to existing trademarks",
                          "Lack of distinctiveness",
                          "Incorrect classification",
                          "Descriptive or generic terms"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 p-5 bg-[#2A454E]/40 border border-white/5 rounded-xl hover:border-[#A07A41]/20 transition-all group">
                              <AlertCircle className="h-5 w-5 text-[#A07A41] shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-white text-sm font-medium group-hover:text-[#A07A41] transition-colors">{item}</span>
                           </div>
                        ))}
                      </div>
                   </div>

                   <div className="border-t border-white/10 pt-12 text-center lg:text-left">
                      <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-8 leading-tight">
                        Why Responding <br />
                        <span className="italic font-light text-[#A07A41]">Properly Is Critical.</span>
                      </h2>
                      <div className="space-y-4 mb-10 px-4 md:px-0 inline-block text-left">
                        {[
                          "Application rejection & loss of fees",
                          "Significant brand development delays",
                          "Legal complications & litigation risk"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 text-gray-400 group">
                             <AlertCircle className="h-5 w-5 text-[#A07A41] shrink-0 group-hover:rotate-12 transition-transform" />
                             <span className="text-sm md:text-base font-light italic">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-8 bg-[#2A454E] border-r-4 border-[#A07A41] rounded-l-2xl shadow-xl">
                         <p className="text-white font-serif italic text-lg leading-relaxed">A strong response can overcome objections and secure final registration approval.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-16 md:py-24 bg-[#2A454E] relative overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-12 md:mb-20 ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight uppercase leading-tight">
                   Our Response <span className="italic font-light text-[#A07A41]">Services.</span>
                </h2>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
               {coreServices.map((item, i) => (
                 <div key={i} className={`group p-8 md:p-10 bg-[#1B2D33]/40 border border-white/5 rounded-2xl md:rounded-3xl hover:border-[#A07A41]/30 transition-all duration-700 ${visibleSections.services ? item.anim : 'opacity-0'}`}>
                    <div className="mb-8 md:mb-10 w-14 h-14 md:w-20 md:h-20 bg-[#1B2D33] rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-[#A07A41] transition-all duration-500 mx-auto">
                        <item.icon className="h-6 w-6 md:h-10 md:w-10 text-[#A07A41] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight group-hover:text-[#A07A41] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 md:mb-10 font-light italic">{item.desc}</p>
                    <div className="space-y-3 pt-6 md:pt-8 border-t border-white/5 text-left">
                      {item.points.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
                           <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#A07A41]/50" />
                           {p}
                        </div>
                      ))}
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. OUR PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-24 bg-[#1B2D33] border-y border-white/5 relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="space-y-6">
                   {processSteps.map((step, i) => (
                     <div key={i} className={`p-8 bg-[#2A454E]/40 border border-white/10 rounded-2xl flex items-center gap-8 group hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                        <div className="text-4xl font-serif font-black text-[#A07A41]/20 group-hover:text-black/20 transition-all italic">{step.step}</div>
                        <div className="text-left">
                           <h4 className="text-xl font-serif font-bold text-white group-hover:text-black transition-colors mb-1">{step.title}</h4>
                           <p className="text-gray-500 group-hover:text-black/70 font-sans font-light text-sm italic leading-snug">{step.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className={`lg:col-span-7 ${visibleSections.process ? 'animate-fade-in-right' : 'opacity-0'} order-1 lg:order-2`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">
                   How We Handle <br />
                   <span className="italic font-light text-[#A07A41]">Trademark Objections.</span>
                </h2>
                <div className="relative group overflow-hidden rounded-[3rem]">
                   <img src="/co5.jpg" alt="Review Process" className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent opacity-60"></div>
                </div>
             </div>
          </div>
        </section>

        {/* 5. WHO THIS SERVICE IS FOR */}
        <section ref={sectionRefs.who} data-section="who" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 tracking-tight leading-tight ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Who Needs <br />
              <span className="italic font-light text-[#A07A41]">Objection Response Support?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { t: "Startups & Entrepreneurs", d: "Securing your foundation early." },
                { t: "E-commerce Brands", d: "Protecting digital market presence." },
                { t: "Pending Applicants", d: "Overcoming UKIPO concerns now." },
                { t: "Agencies & Owners", d: "Professional support for clients." }
              ].map((item, i) => (
                <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-3xl hover:border-[#A07A41]/40 group transition-all duration-700 ${visibleSections.who ? 'animate-fade-in-bottom-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="h-2 w-12 bg-[#A07A41] mb-8 group-hover:w-full transition-all duration-1000"></div>
                   <span className="text-white font-serif font-bold text-lg block tracking-wide mb-2">{item.t}</span>
                   <p className="text-gray-500 text-xs font-light italic">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE OUR RESPONSES */}
        <section ref={sectionRefs.reliable} data-section="reliable" className="py-24 bg-[#1B2D33] relative overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-20 ${visibleSections.reliable ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6">
                   Why Choose Our <br />
                   <span className="italic font-light text-[#A07A41]">Objection Responses.</span>
                </h2>
             </div>
             <div className="flex flex-wrap justify-center gap-8">
                {[
                  "Clear legal reasoning",
                  "Structured arguments",
                  "UKIPO-focused approach",
                  "Practical & strategic thinking",
                  "Professional drafting"
                ].map((item, i) => (
                  <div key={i} className={`p-8 bg-[#2A454E]/40 border border-white/5 rounded-2xl flex items-center gap-5 hover:bg-[#A07A41] group transition-all duration-500 ${visibleSections.reliable ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                     <CheckCircle className="h-6 w-6 text-[#A07A41] group-hover:text-black" />
                     <span className="text-white group-hover:text-black font-serif font-black text-sm uppercase tracking-widest">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
                   Benefits of Professional <br />
                   <span className="italic font-light text-[#A07A41]">Objection Responses.</span>
                </h2>
                <div className="space-y-6 mb-12">
                  {[
                    "Improved application approval chances",
                    "Significantly reduced risk of final rejection",
                    "Faster resolution with UKIPO officials",
                    "Stronger long-term legal position for the brand",
                    "Permanently protect your professional application"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                       <ShieldCheck className="h-6 w-6 text-[#A07A41] shrink-0" />
                       <span className="text-xl font-light text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative group">
                   <img src="/hd2.jpg" alt="Final Approval" className="rounded-3xl shadow-biggest w-full h-[600px] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-transparent to-transparent opacity-60"></div>
                </div>
             </div>
          </div>
        </section>

        {/* 8. FORM SECTION */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
             <div className={`bg-[#2A454E]/60 p-12 sm:p-20 rounded-[3rem] shadow-biggest border border-white/5 relative backdrop-blur-3xl overflow-hidden ${visibleSections.form ? 'animate-fade-in-up' : 'opacity-0'}`}>
                
                <div className="text-center mb-16 relative z-10">
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight uppercase tracking-[0.2em]">
                      Request <span className="text-[#A07A41]">Response.</span>
                   </h2>
                </div>

                <form className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Full Name</label>
                        <input type="text" className="w-full bg-[#1B2D33] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41] transition-all font-sans text-sm" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Contact Details</label>
                        <input type="text" className="w-full bg-[#1B2D33] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41] transition-all font-sans text-sm" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Trademark Details (Name/Number)</label>
                     <input type="text" className="w-full bg-[#1B2D33] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41] transition-all font-sans text-sm" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Brief Description of the objection</label>
                     <textarea rows="5" className="w-full bg-[#1B2D33] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41] transition-all font-sans text-sm"></textarea>
                  </div>
                  
                  <button className="w-full py-6 bg-[#A07A41] text-black font-black uppercase tracking-[0.3em] text-sm rounded transition-all hover:bg-white flex items-center justify-center gap-5 mt-4 group">
                    <span>Submit Your Request</span>
                    <Send className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                  
                  <div className="pt-10 flex flex-col items-center">
                    <p className="text-center text-[10px] text-gray-600 font-bold uppercase tracking-[0.25em] leading-relaxed italic">All information is handled securely and with total professional confidentiality.</p>
                  </div>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#2A454E]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <div className="mb-20">
                 <h2 className={`text-3xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Frequently Asked <br />
                    <span className="italic font-light text-[#A07A41]">Questions.</span>
                 </h2>
              </div>
              <div className="space-y-4 text-left">
                {[
                  { q: "What is a trademark objection?", a: "An objection is a concern formally raised by the UKIPO during the examination of your trademark application, often regarding distinctiveness or similarity to existing marks." },
                  { q: "Can objections be resolved?", a: "Yes. Many objections can be overcome by providing structured legal arguments, submitting evidence of use, or amending the scope of the application." },
                  { q: "Do you draft responses?", a: "Yes. We specialize in analyzing the objection and drafting comprehensive, professional legal replies ready for UKIPO submission." },
                  { q: "What if my application is rejected?", a: "If an application is formally refused, we can advise on your options, including appeals or filing a modified application." },
                  { q: "Is my information confidential?", a: "Absolutely. All communication, documents, and objection notices provided to H&S Co. are held under strict legal confidentiality standards." }
                ].map((faq, i) => (
                   <div key={i} className={`border border-white/10 rounded-2xl bg-[#1B2D33]/40 backdrop-blur-sm overflow-hidden group hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-10 flex items-center justify-between group">
                      <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-[#A07A41] transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="border-t border-white/5 pt-10 text-gray-400 text-lg leading-relaxed font-light italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/lawhero.jpg" alt="Final CTA Legal" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.1] tracking-tight">
                Don’t Let an Objection <br />
                <span className="italic font-light text-[#A07A41]">Stop Your Trademark.</span>
              </h2>
              <p className="text-gray-400 mb-16 max-w-2xl mx-auto font-light text-xl leading-relaxed">Respond with strategy and confidence. Protect the time and investment you’ve put into your brand.</p>
              
              <button className="px-14 py-6 bg-[#A07A41] text-black font-black tracking-[0.4em] uppercase text-xs md:text-sm rounded shadow-biggest transition-all hover:bg-white hover:scale-110 flex items-center justify-center gap-6 mx-auto group">
                 <span>Get Professional Objection Support Today</span>
                 <ArrowRight className="h-7 w-7 group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default TrademarkObjectionPage;
