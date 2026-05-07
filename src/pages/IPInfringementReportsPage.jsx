import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  Target, Eye, Link as LinkIcon, HardDrive
} from 'lucide-react';

const IPInfringementReportsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: false,
    types: false,
    process: false,
    platforms: false,
    critical: false,
    why: false,
    legal: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    types: useRef(null),
    process: useRef(null),
    platforms: useRef(null),
    critical: useRef(null),
    why: useRef(null),
    legal: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "IP Infringement Reporting Services UK | H&S Co.";

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

  const reportingSteps = [
    { s: "Step 01", t: "Identification & Audit", d: "We detect and verify infringement instances across digital surfaces." },
    { s: "Step 02", t: "Evidence Documentation", d: "Capturing screenshots, URLs, timestamps, and ownership proof." },
    { s: "Step 03", t: "Platform-Specific Reporting", d: "Filing complaints on Google, marketplaces, and social media." },
    { s: "Step 04", t: "Legal Notice Submission", d: "Issuing formal notices where legally required." },
    { s: "Step 05", t: "Monitoring & Escalation", d: "Tracking responses and escalating unresolved cases." }
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
          @keyframes fade-in-bottom-right {
            from { opacity: 0; transform: translate(30px, 30px); }
            to { opacity: 1; transform: translate(0, 0); }
          }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
          .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
          .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards; }
          .animate-fade-in-top-left { animation: fade-in-top-left 1s ease-out forwards; }
          .animate-fade-in-bottom-right { animation: fade-in-bottom-right 1s ease-out forwards; }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
      </style>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/aa.jpg" alt="IP Hero" className="w-full h-full object-cover opacity-20 transition-transform duration-[10s] hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E] via-[#2A454E]/80 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-4xl transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Authority + Protection</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left">
                IP Infringement <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Reporting Services UK.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up animation-delay-200">
                Identify, report, and remove intellectual property violations including copyright, trademark misuse, impersonation, and brand abuse across digital platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-fade-in-left animation-delay-700">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Report Infringement</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs md:text-sm rounded transition-all hover:bg-white/10 hover:border-white/40">
                  Get Legal Assistance
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10 animate-fade-in-up animation-delay-600">
                 {[
                   { t: "UK-focused Support", icon: Search },
                   { t: "Multi-platform Enforcement", icon: ShieldCheck },
                   { t: "Fast Escalation", icon: CheckCircle }
                 ].map((item, i) => (
                   <div key={i} className="space-y-2 group">
                      <span className="text-[#A07A41] block font-black text-[10px] uppercase tracking-[0.3em] group-hover:translate-x-1 transition-transform">{item.t}</span>
                      <span className="text-white/30 text-[10px] italic">Priority Service</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS IP INFRINGEMENT */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#1B2D33] overflow-hidden border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">
                  What is <br />
                  <span className="italic font-light text-[#A07A41]">Intellectual Property Infringement?</span>
                </h2>
                <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed">
                   <p>Intellectual property (IP) infringement occurs when someone uses your protected content, brand identity, or creative assets without permission.</p>
                   <p className="bg-[#2A454E]/40 p-6 rounded-2xl border-l-4 border-[#A07A41] italic">
                      Unlike simple takedowns, IP infringement reporting involves identifying violations, filing structured complaints, and ensuring enforcement across multiple platforms.
                   </p>
                   <div className="grid grid-cols-2 gap-4 pt-6">
                      {[
                        "Copyright (content, images, videos)",
                        "Trademarks (logos, brand names)",
                        "Digital impersonation",
                        "Unauthorized commercial use"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <AlertCircle className="h-4 w-4 text-[#A07A41] shrink-0" />
                           <span className="text-sm font-medium text-white/80">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <div className="relative group">
                    <img src="/agg.jpg" alt="IP Monitoring" className="rounded-3xl shadow-biggest h-[550px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                    <div className="absolute inset-0 border-[15px] border-[#1B2D33] rounded-3xl pointer-events-none"></div>
                 </div>
             </div>
          </div>
        </section>

        {/* 3. TYPES OF IP INFRINGEMENT WE HANDLE */}
        <section ref={sectionRefs.types} data-section="types" className="py-16 md:py-24 bg-[#2A454E] relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-12 md:mb-20 ${visibleSections.types ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-tight uppercase">
                   Types of <span className="italic font-light text-[#A07A41]">IP Violations We Handle.</span>
                </h2>
                <p className="text-[#A07A41] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] bg-white/5 py-3 px-6 md:px-8 rounded-full w-fit mx-auto mt-6 md:mt-8 italic">Protecting your entire brand ecosystem</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left md:text-center">
                {[
                  { t: "Copyright infringement", d: "Content, images, and video theft.", i: Target },
                  { t: "Trademark misuse", d: "Logo and brand name violations.", i: ShieldCheck },
                  { t: "Fake Accounts", d: "Digital impersonation and theft.", i: Eye },
                  { t: "Counterfeit product listings", d: "Unauthorized marketplace sales.", i: Search },
                  { t: "Digital asset reselling", d: "Unauthorized resale of assets.", i: HardDrive },
                  { t: "Domain & Brand Abuse", d: "Protecting your web presence.", i: LinkIcon }
                ].map((item, i) => (
                  <div key={i} className={`p-8 md:p-10 bg-[#1B2D33]/60 border border-white/5 rounded-3xl group hover:border-[#A07A41]/50 transition-all duration-700 ${visibleSections.types ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                     <div className="mb-6 md:mb-8 w-14 h-14 md:w-16 md:h-16 bg-[#2A454E] rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-[#A07A41] transition-all duration-500 mx-auto">
                        <item.i className="h-6 w-6 md:h-8 md:w-8 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     <span className="text-white font-serif font-bold text-lg md:text-xl leading-tight block mb-4 group-hover:text-[#A07A41] transition-colors">{item.t}</span>
                     <p className="text-gray-500 text-xs md:text-sm font-light italic">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. OUR REPORTING & ENFORCEMENT PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-16 md:py-24 bg-[#1B2D33] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`mb-12 md:mb-20 text-center ${visibleSections.process ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 uppercase tracking-tighter">Our Reporting <span className="text-[#A07A41] italic">& Enforcement Process.</span></h2>
                <div className="h-1 w-24 bg-[#A07A41] mx-auto rounded-full"></div>
             </div>
             
             <div className="space-y-4">
                {reportingSteps.map((item, i) => (
                  <div key={i} className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 p-6 md:p-10 bg-[#2A454E]/30 border border-white/5 rounded-2xl md:rounded-3xl transition-transform duration-700 hover:translate-x-0 ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="text-4xl md:text-5xl font-serif font-black text-[#A07A41]/20 italic shrink-0 leading-none">{item.s}</div>
                     <div className="w-[1px] h-12 bg-[#A07A41]/20 hidden lg:block"></div>
                     <div className="text-center lg:text-left">
                        <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 tracking-tight group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                        <p className="text-gray-400 text-xs md:text-base font-light font-sans max-w-2xl">{item.d}</p>
                     </div>
                     <div className="lg:ml-auto flex items-center gap-4 text-[#A07A41]/40 pt-4 lg:pt-0">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Verified</span>
                        <CheckCircle className="h-5 w-5" />
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. PLATFORMS WE COVER */}
        <section ref={sectionRefs.platforms} data-section="platforms" className="py-16 md:py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className={`${visibleSections.platforms ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight leading-tight uppercase px-4 md:px-0">
                   Platforms <br />
                   <span className="italic font-light text-[#A07A41]">We Handle.</span>
                </h2>
                <p className="text-gray-300 font-light text-base md:text-lg mb-8 md:mb-12 italic leading-relaxed px-4 md:px-0">
                   We provide integrated enforcement and de-indexing services across the entire digital ecosystem.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[
                     { t: "Search Engines", d: "Google Page De-indexing" },
                     { t: "Social Media", d: "Facebook, IG, X, LinkedIn" },
                     { t: "Marketplaces", d: "E-commerce enforcement" },
                     { t: "Hosting Providers", d: "Direct server-level reports" },
                     { t: "Independent Sites", d: "Site owner communications" }
                   ].map((item, i) => (
                     <div key={i} className="p-6 md:p-8 bg-[#1B2D33] border border-white/5 rounded-2xl hover:border-[#A07A41]/30 transition-all shadow-xl group">
                        <Search className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41] mb-6 group-hover:scale-110 transition-transform" />
                        <span className="text-white font-bold block text-base md:text-lg mb-1">{item.t}</span>
                        <span className="text-gray-500 text-xs italic">{item.d}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className={`${visibleSections.platforms ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative group">
                   <img src="/saa3.jpg" alt="Platforms" className="rounded-2xl md:rounded-[4rem] shadow-biggest h-[350px] md:h-[650px] w-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E]/80 via-transparent to-transparent opacity-60 rounded-2xl md:rounded-[4rem]"></div>
                </div>
             </div>
          </div>
        </section>

        {/* 6. WHY IP INFRINGEMENT REPORTING IS CRITICAL */}
        <section ref={sectionRefs.critical} data-section="critical" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-12 md:mb-20 ${visibleSections.critical ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                  The Real Cost of <br /><span className="italic font-light text-[#A07A41]">Ignoring IP Violations.</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto font-light italic text-sm md:text-lg leading-relaxed px-4">This isn’t just legal—it’s critical business protection for your digital assets.</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { t: "Revenue Leakage", d: "Direct loss of sales to infringers.", i: AlertCircle },
                  { t: "Search Rankings", d: "Duplicate content damages SEO.", i: Search },
                  { t: "Brand Reputation", d: "Impersonators damage trust.", i: ShieldCheck },
                  { t: "Customer Confusion", d: "Mixed messaging hurts loyalty.", i: Eye }
                ].map((item, i) => (
                   <div key={i} className={`p-10 border border-white/10 rounded-3xl bg-[#2A454E]/20 hover:bg-[#A07A41] group transition-all duration-700 ${visibleSections.critical ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                      <item.i className="h-10 w-10 text-[#A07A41] group-hover:text-black mx-auto mb-8 transition-colors" />
                      <h4 className="text-white group-hover:text-black font-serif font-black text-xl mb-4 leading-tight">{item.t}</h4>
                      <p className="text-gray-400 group-hover:text-black/80 font-sans font-light text-sm italic">{item.d}</p>
                   </div>
                ))}
             </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <img src="/saa2.jpg" alt="Why Choose Us" className="rounded-[3rem] shadow-biggest h-[500px] w-full object-cover grayscale brightness-75 transition-all duration-1000 hover:grayscale-0 hover:brightness-100" />
             </div>
             <div className={`space-y-10 ${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                   Why Choose Our <br />
                   <span className="italic font-light text-[#A07A41]">IP Reporting Services?</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Multi-layer enforcement (not just one platform)",
                    "Accurate reporting reduces rejection risk",
                    "Faster resolution due to structured submissions",
                    "Covers both copyright and trademark issues"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-[#1B2D33]/60 rounded-2xl border-l-4 border-transparent hover:border-[#A07A41] transition-all">
                       <CheckCircle className="h-6 w-6 text-[#A07A41] shrink-0" />
                       <span className="text-lg font-light text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-[#1B2D33] border border-white/10 rounded-2xl">
                   <p className="text-gray-400 text-sm font-sans font-light leading-relaxed italic border-l-2 border-[#A07A41] pl-6">
                      Most businesses fail because they report incorrectly or incompletely. We ensure every report is built on a solid legal foundation.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* 8. LEGAL & COMPLIANCE */}
        <section ref={sectionRefs.legal} data-section="legal" className="py-24 bg-[#1B2D33] border-y border-white/5 relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-20 ${visibleSections.legal ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Legal Accuracy <span className="text-[#A07A41] italic">& Compliance.</span></h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { t: "Platform Alignment", d: "Meet platform-specific requirements." },
                  { t: "Evidence Integrity", d: "Avoid false or weak claims." },
                  { t: "Risk Reduction", d: "Eliminate risk of counter-action." },
                  { t: "IP Frameworks", d: "Align with UK/International laws." }
                ].map((item, i) => (
                   <div key={i} className={`p-10 bg-[#2A454E]/20 border border-white/10 rounded-3xl hover:border-[#A07A41]/40 transition-all ${visibleSections.legal ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                      <span className="text-white font-serif font-black text-lg block mb-4 border-b border-white/5 pb-4">{item.t}</span>
                      <p className="text-gray-500 text-sm leading-relaxed italic">{item.d}</p>
                   </div>
                ))}
             </div>
             <div className="mt-20 p-10 bg-[#2A454E] rounded-[2rem] border border-white/5 max-w-6xl mx-auto text-center animate-fade-in-up animation-delay-400">
                <p className="text-gray-300 font-sans font-light text-lg leading-relaxed italic">
                   Our expertise also extends to broader intellectual property matters, including <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and <strong>legal response trademark UK</strong>, ensuring complete support in any <strong>intellectual property dispute UK</strong>.
                </p>
             </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#2A454E]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <div className="mb-20">
                 <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Frequently Asked <span className="italic font-light text-[#A07A41]">Questions.</span>
                 </h2>
              </div>
              <div className="space-y-4 text-left">
                {[
                  { q: "What is the difference between DMCA and IP reporting?", a: "DMCA focuses specifically on copyright removal, while IP reporting covers broader violations including trademarks, impersonation, and brand abuse." },
                  { q: "How long does it take to remove infringing content?", a: "Typically 24–72 hours, depending on the platform's review speed and the complexity of the violation." },
                  { q: "Can fake social media accounts be removed?", a: "Yes, through structured reporting, identity verification, and platform-specific escalation processes." },
                  { q: "Do I need a registered trademark?", a: "Not always, but it strengthens your claim significantly and provides extra leverage on many global platforms." }
                ].map((faq, i) => (
                   <div key={i} className={`border border-white/10 rounded-2xl bg-[#1B2D33]/40 backdrop-blur-sm overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-10 flex items-center justify-between group">
                      <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-white' : ''}`} />
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
             <img src="/lawhero.jpg" alt="Final CTA IP" className="w-full h-full object-cover opacity-10 blur-[2px]" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[80rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tight uppercase">
                Report IP Infringement <br />
                <span className="italic font-light text-[#A07A41]">And Protect Your Brand Now.</span>
              </h2>
              <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed italic">
                 Every day an infringement remains active, it weakens your brand and authority. Take action with a structured, professional reporting process.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                   <span className="relative z-10">Report a Case</span>
                   <ArrowRight className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                   <p className="text-[#A07A41] font-black text-2xl italic mb-1 group-hover:text-white transition-colors">Speak with an Expert</p>
                   <div className="h-[2px] w-full bg-[#A07A41]/30 group-hover:bg-[#A07A41] transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default IPInfringementReportsPage;
