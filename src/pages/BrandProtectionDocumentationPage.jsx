import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  Target, Eye, Link as LinkIcon, HardDrive
} from 'lucide-react';

const BrandProtectionDocumentationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: false,
    critical: false,
    types: false,
    process: false,
    where: false,
    why: false,
    legal: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    critical: useRef(null),
    types: useRef(null),
    process: useRef(null),
    where: useRef(null),
    why: useRef(null),
    legal: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Brand Protection Documentation Services UK | IP Support | H&S Co.";

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

  const docTypes = [
    { t: "Ownership Proof", d: "Rigorous verification files for copyright & trademark assets.", i: ShieldCheck, a: "animate-fade-in-left" },
    { t: "Usage Documentation", d: "Documenting trademark presence across all digital channels.", i: Target, a: "animate-fade-in-up" },
    { t: "Cease & Desist", d: "Professionally drafted notices for immediate legal impact.", i: Send, a: "animate-fade-in-right" },
    { t: "DMCA Packages", d: "Platform-ready reporting documents to minimize rejection.", i: HardDrive, a: "animate-fade-in-left" },
    { t: "Evidence Vault", d: "Structured screenshots, URLs, and legal timestamps.", i: Eye, a: "animate-fade-in-up" },
    { t: "Submission Docs", d: "Customized documents for specific platform requirements.", i: LinkIcon, a: "animate-fade-in-right" }
  ];

  const processSteps = [
    { s: "01", t: "Asset Review", d: "We assess your intellectual property and existing digital protections." },
    { s: "02", t: "Documentation Audit", d: "Identifying missing, weak, or non-compliant documentation." },
    { s: "03", t: "Preparation", d: "All required documents are professionally drafted and organized." },
    { s: "04", t: "Compliance Alignment", d: "Ensuring documents meet platform and international legal standards." },
    { s: "05", t: "Delivery", d: "Handover of ready-to-use documentation for enforcement and reporting." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <style>
        {`
          @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-down { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-top-left { from { opacity: 0; transform: translate(-40px, -40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-bottom-right { from { opacity: 0; transform: translate(40px, 40px); } to { opacity: 1; transform: translate(0, 0); } }
          
          .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-top-left { animation: fade-in-top-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-bottom-right { animation: fade-in-bottom-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-800 { animation-delay: 0.8s; }
        `}
      </style>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-[#1B2D33]">
          <div className="absolute inset-0 z-0">
             <img src="/hero.jpg" alt="Documentation Hero" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/80 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Evidence + Compliance</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                Brand Protection <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Documentation Services UK.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up animation-delay-400">
                Secure your brand with professionally prepared documentation for intellectual property enforcement, platform reporting, and legal protection against infringement.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-right animation-delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Get Documentation Support</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Request Consultation</p>
                   <p className="text-white/40 text-[10px] italic">Strategic IP Structuring</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/10 pt-12 animate-fade-in-up animation-delay-800">
                 {[
                   { t: "UK-focused IP support", s: "Local Expert Knowledge" },
                   { t: "Multi-platform compliance", s: "Platform Ready Docs" },
                   { t: "Structured legal documentation", s: "Evidence Optimized" }
                 ].map((item, i) => (
                   <div key={i} className="space-y-1 group">
                      <span className="text-white font-serif font-bold text-lg block group-hover:text-[#A07A41] transition-colors">{item.t}</span>
                      <span className="text-[#A07A41]/50 text-[10px] font-black uppercase tracking-widest">{item.s}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS BRAND PROTECTION DOCUMENTATION */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight leading-tight">
                  What is <br />
                  <span className="italic font-light text-[#A07A41]">Brand Protection Documentation?</span>
                </h2>
                <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed">
                   <p>Brand protection documentation refers to the structured legal and supporting materials required to prove ownership, enforce rights, and take action against intellectual property violations.</p>
                   <p className="bg-[#1B2D33]/60 p-6 md:p-8 rounded-2xl border-l-4 border-[#A07A41] italic">
                      Without proper documentation, most enforcement actions fail or get ignored by platforms and legal authorities.
                   </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[
                     { t: "Copyright enforcement", i: ShieldCheck },
                     { t: "Trademark protection", i: Target },
                     { t: "Infringement reporting", i: Search },
                     { t: "Legal disputes & claims", i: AlertCircle }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33] border border-white/5 rounded-xl hover:border-[#A07A41]/30 transition-all">
                         <item.i className="h-5 w-5 text-[#A07A41]" />
                         <span className="text-white text-sm font-bold">{item.t}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative group">
                   <img src="/agg.jpg" alt="Documentation Audit" className="rounded-3xl shadow-biggest h-[300px] md:h-[550px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                   <div className="absolute inset-0 border border-[#A07A41]/10 rounded-3xl m-4"></div>
                </div>
             </div>
          </div>
        </section>

        {/* 3. WHY DOCUMENTATION MATTERS (CRITICAL SECTION) */}
        <section ref={sectionRefs.critical} data-section="critical" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5 relative text-center lg:text-left">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-12 md:mb-20 ${visibleSections.critical ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">
                   Why Proper Documentation <br />
                   <span className="italic font-light text-[#A07A41]">Is Essential.</span>
                </h2>
                <div className="h-1 w-24 bg-[#A07A41] mx-auto rounded-full mt-6 md:mt-10"></div>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                <div className={`p-8 md:p-12 bg-[#2A454E]/20 border border-red-500/10 rounded-3xl backdrop-blur-md ${visibleSections.critical ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <span className="text-red-500 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-8 md:mb-10 block">The Consequence of Weak Evidence</span>
                   <div className="space-y-4">
                      {[
                        "Rejected takedown requests upon submission",
                        "Failed infringement reports on major platforms",
                        "Massive delays in legal enforcement windows",
                        "Significant loss of brand credibility"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 md:gap-6 group">
                           <div className="w-2 h-2 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-all"></div>
                           <span className="text-gray-400 text-base md:text-lg font-light italic">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className={`p-8 md:p-12 bg-[#2A454E]/40 border border-[#A07A41]/10 rounded-3xl backdrop-blur-md ${visibleSections.critical ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-8 md:mb-10 block">The Professional Advantage</span>
                   <div className="space-y-4">
                      {[
                        "Faster approvals on digital platforms",
                        "Significantly higher success in removal requests",
                        "Aggressive legal position in formal disputes",
                        "Seamless escalation during brand protection"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 md:gap-6 group">
                           <CheckCircle className="h-5 w-5 text-[#A07A41] transition-all" />
                           <span className="text-gray-200 text-base md:text-lg font-bold">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 4. TYPES OF DOCUMENTATION WE PROVIDE */}
        <section ref={sectionRefs.types} data-section="types" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-12 md:mb-20 ${visibleSections.types ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
                   Types of Brand Protection <br />
                   <span className="italic font-light text-[#A07A41]">Documents We Prepare.</span>
                </h2>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
                {docTypes.map((item, i) => (
                  <div key={i} className={`p-8 md:p-12 bg-[#1B2D33] border border-white/5 rounded-3xl group hover:border-[#A07A41]/40 transition-all duration-700 ${visibleSections.types ? item.a : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="mb-8 md:mb-10 w-14 h-14 md:w-16 md:h-16 bg-[#2A454E] rounded-2xl flex items-center justify-center group-hover:bg-[#A07A41] transition-all duration-500 border border-white/10">
                        <item.i className="h-6 w-6 md:h-8 md:w-8 text-[#A07A41] group-hover:text-black" />
                     </div>
                     <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                     <p className="text-gray-500 text-xs md:text-sm font-light italic leading-relaxed">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. OUR DOCUMENTATION PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5 relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <h2 className="text-3xl md:text-7xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight leading-none uppercase">Our <br /><span className="text-[#A07A41] italic">Process.</span></h2>
                   <img src="/doc.jpg" alt="Documentation Process" className="rounded-2xl md:rounded-3xl brightness-50 w-full h-[300px] md:h-[400px] object-cover skew-y-1" />
                </div>
                <div className="space-y-4">
                  {processSteps.map((item, i) => (
                    <div key={i} className={`p-8 md:p-10 bg-[#2A454E]/30 rounded-2xl md:rounded-3xl group hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                       <div className="flex justify-between items-center mb-6">
                          <span className="text-[#A07A41] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] group-hover:text-black">{item.s}</span>
                          <span className="text-white/20 font-serif font-black text-3xl md:text-4xl group-hover:text-black/10 transition-colors italic">{i+1}</span>
                       </div>
                       <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 tracking-tight group-hover:text-black">{item.t}</h4>
                       <p className="text-gray-400 font-sans font-light text-sm md:text-base italic group-hover:text-black/80">{item.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* 6. WHERE THIS DOCUMENTATION IS USED */}
        <section ref={sectionRefs.where} data-section="where" className="py-16 md:py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-12 md:mb-20 ${visibleSections.where ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-tight uppercase">
                  Applied <span className="italic font-light text-[#A07A41]">Environments.</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed italic border-x border-[#A07A41]/30 px-6 md:px-10">Our documentation is meticulously designed to work across all legal and digital enforcement verticals.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {[
                   "DMCA takedown notices",
                   "IP infringement reporting",
                   "Trademark enforcement",
                   "Platform complaint submissions",
                   "Legal disputes and claims"
                ].map((item, i) => (
                  <div key={i} className={`p-8 md:p-12 bg-[#1B2D33] border border-white/5 rounded-2xl md:rounded-3xl hover:border-[#A07A41] transition-all group ${visibleSections.where ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                     <Target className="h-8 w-8 md:h-10 md:w-10 text-[#A07A41]/20 group-hover:text-[#A07A41] mx-auto mb-6 md:mb-8 transition-colors" />
                     <span className="text-white group-hover:text-[#A07A41] font-serif font-bold text-base md:text-lg leading-tight transition-colors">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE OUR SERVICES */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#1B2D33] overflow-hidden border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col items-center">
             <div className={`text-center mb-20 ${visibleSections.why ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight leading-tight uppercase">
                   Why Documentation <br />
                   <span className="italic font-light text-[#A07A41]">Infrastructure Matters.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { t: "Professionally Structured", d: "Legally sound, exhaustive materials." },
                 { t: "Platform-Ready Formats", d: "Zero friction during submissions." },
                 { t: "Universal Protection", d: "Covers logo, content, and code." },
                 { t: "Enforcement Oriented", d: "Designed for immediate results." }
               ].map((item, i) => (
                 <div key={i} className={`p-10 bg-[#2A454E]/20 border border-white/10 rounded-2xl hover:bg-[#A07A41] group transition-all duration-700 ${visibleSections.why ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <ShieldCheck className="h-8 w-8 text-[#A07A41] group-hover:text-black mb-10 transition-colors" />
                    <h4 className="text-xl font-serif font-black text-white group-hover:text-black mb-4 leading-tight">{item.t}</h4>
                    <p className="text-gray-500 group-hover:text-black/80 font-sans font-light text-sm italic">{item.d}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 8. LEGAL & COMPLIANCE */}
        <section ref={sectionRefs.legal} data-section="legal" className="py-16 md:py-24 bg-[#2A454E]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.legal ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Legal Compliance <span className="text-[#A07A41] italic">& Accuracy.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div className="relative animate-fade-in-left">
                    <img src="/aa.jpg" alt="Compliance" className="rounded-[2.5rem] md:rounded-[4rem] h-[300px] md:h-[500px] w-full object-cover blur-[1px] opacity-40 shadow-biggest" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-12 bg-[#1B2D33]/40 rounded-[2.5rem] md:rounded-[4rem]">
                       <span className="text-[#A07A41] font-black text-xl md:text-2xl uppercase tracking-[0.4em] mb-4">Precision First</span>
                       <p className="text-white text-base md:text-lg font-light italic leading-relaxed text-center">We ensure all documentation meets legal and platform-specific standards to avoid inconsistencies or weak claims.</p>
                    </div>
                 </div>
                 <div className="space-y-8 md:space-y-10 text-left animate-fade-in-right px-4 md:px-0">
                    <div className="space-y-4">
                       {[
                         "Meets legal & platform-specific standards",
                         "Avoids inconsistencies or weak claims",
                         "Supports enforcement actions effectively",
                         "Aligns with UK and international frameworks"
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-4 md:gap-6 border-b border-white/5 pb-4 last:border-0 hover:bg-white/5 transition-colors p-2 rounded">
                            <CheckCircle className="h-5 w-5 text-[#A07A41] shrink-0" />
                            <span className="text-gray-300 font-light text-base md:text-lg">{v}</span>
                         </div>
                       ))}
                    </div>
                    <div className="p-8 md:p-10 bg-[#1B2D33] rounded-3xl border border-white/5 shadow-2xl">
                       <p className="text-gray-400 font-sans font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-6 md:pl-8">
                          We also assist with <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and broader <strong>intellectual property dispute UK</strong> matters, ensuring your documentation supports every <strong>legal response trademark UK</strong> requirement.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. FAQ Section */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <div className="mb-20">
                 <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Information <span className="italic font-light text-[#A07A41]">Archive.</span>
                 </h2>
              </div>
              <div className="space-y-4 text-left">
                {[
                  { q: "Do I need documentation before filing a DMCA notice?", a: "Yes, strong proof of ownership increases success rates significantly. Platforms are much more likely to act when evidence is structured professionally." },
                  { q: "Can you help if I don’t have a registered trademark?", a: "Yes, but documentation strength may vary depending on the case. We find alternative evidence to build a strong enforcement package." },
                  { q: "Is this required for platform reporting?", a: "Yes, most major platforms (Amazon, Google, Meta) require clear proof of ownership and evidence of violation before taking action." },
                  { q: "How long does documentation preparation take?", a: "Typically 1–3 business days depending on complexity and the number of assets involved." }
                ].map((faq, i) => (
                   <div key={i} className={`border border-white/5 rounded-3xl bg-[#2A454E]/40 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
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
             <img src="/lawhero.jpg" alt="Final CTA Brand" className="w-full h-full object-cover opacity-10 blur-[2px]" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tight uppercase">
                Strengthen Your Brand <br />
                <span className="italic font-light text-[#A07A41]">Protection Documentation.</span>
              </h2>
              <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-8">
                 Without proper documentation, enforcement actions fail. Build a strong legal foundation for your brand protection strategy with our expert team.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                   <span className="relative z-10">Request Documentation</span>
                   <ArrowRight className="h-6 w-6 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                   <p className="text-[#A07A41] font-black text-2xl italic mb-1 group-hover:text-white transition-colors">Speak With an Expert</p>
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

export default BrandProtectionDocumentationPage;
