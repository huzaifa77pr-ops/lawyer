import React, { useEffect, useState, useRef } from 'react';
import {
   ArrowRight, ShieldCheck, CheckCircle, XCircle,
   ChevronDown, FileText, AlertTriangle,
   Search, ClipboardCheck, Layout,
   Scale, HelpCircle, Shield, Users
} from 'lucide-react';

const PropertyComplianceDocsPage = () => {
   const [activeFaq, setActiveFaq] = useState(null);

   const [visibleSections, setVisibleSections] = useState({
      hero: true,
      what: false,
      why: false,
      types: false,
      todo: false,
      process: false,
      who: false,
      choose: false,
      legal: false,
      faq: false,
      cta: false
   });

   const sectionRefs = {
      hero: useRef(null),
      what: useRef(null),
      why: useRef(null),
      types: useRef(null),
      todo: useRef(null),
      process: useRef(null),
      who: useRef(null),
      choose: useRef(null),
      legal: useRef(null),
      faq: useRef(null),
      cta: useRef(null)
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Property Compliance Documents UK | Landlord Legal Support | H&S Co.";

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

   const faqs = [
      {
         q: "Are compliance documents mandatory?",
         a: "Some are legally required (like Gas Safety Certificates, EPCs, and EICRs), while others are strongly recommended to protect your legal position and ensure the safety of occupants."
      },
      {
         q: "Can you check existing documents?",
         a: "Yes, we provide a thorough review and audit of your existing paperwork to identify any gaps, expired certifications, or compliance risks."
      },
      {
         q: "How long does this take?",
         a: "Typically 1–3 business days depending on the volume of documentation and the specific requirements of your property type."
      },
      {
         q: "Is this for landlords only?",
         a: "No, tenants and property businesses also benefit from ensuring all compliance paperwork is in order to verify their rights and obligations."
      }
   ];

   return (
      <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
         <style>
            {`
          @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-down { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          
          .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
         </style>

         <main className="flex-grow">

            {/* 1. HERO SECTION */}
            <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-screen flex items-center pt-32 pb-24 bg-[#1B2D33] overflow-hidden">
               <div className="absolute inset-0 z-0">
                  <img src="/5hero.jpg" alt="Property Compliance Documents UK" className="w-full h-full object-cover opacity-10 grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-[#1B2D33]"></div>
               </div>
               
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full text-center">
                  <div className="flex justify-center items-center gap-4 mb-8 animate-fade-in-down">
                     <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                     <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Regulatory Standard & Assurance</span>
                     <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-up animation-delay-200 uppercase">
                     Property Compliance <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D] italic font-light">Documents Services UK.</span>
                  </h1>

                  <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400 italic">
                     Ensure your property meets legal requirements with properly prepared compliance documents for landlords, tenants, and property businesses.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20 animate-fade-in-up animation-delay-600">
                     <button className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-[#A07A41] text-black font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-500 hover:bg-white hover:scale-105 shadow-[0_0_40px_rgba(160,122,65,0.2)]">
                        <span className="relative z-10">Get Compliance Documents</span>
                        <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                     </button>
                     <button className="px-12 py-6 border border-white/20 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-500 hover:bg-white/5 flex items-center justify-center gap-3">
                        Book Consultation
                     </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/5 pt-12 animate-fade-in-up animation-delay-600">
                     {[
                        { t: "UK property compliance focus", s: "Local Expertise" },
                        { t: "Structured documentation support", s: "Organized Records" },
                        { t: "Risk and regulation awareness", s: "Compliance Safety" }
                     ].map((item, i) => (
                        <div key={i} className="space-y-2">
                           <span className="text-white font-serif font-bold text-lg block">{item.t}</span>
                           <span className="text-[#A07A41]/60 text-[10px] font-black uppercase tracking-[0.2em]">{item.s}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 2. WHAT ARE THEY */}
            <section ref={sectionRefs.what} data-section="what" className="py-24 md:py-32 bg-[#2A454E] overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight uppercase">
                        What are <br />
                        <span className="italic font-light text-[#A07A41]">Compliance Documents?</span>
                     </h2>
                     <div className="space-y-8 text-gray-400 text-base md:text-lg font-sans font-light leading-relaxed border-l-4 border-white/5 pl-8 italic mb-12">
                        <p>Property compliance documents are legally required or recommended documents that ensure a property meets regulatory standards for rental, leasing, or sale.</p>
                        <p>These documents are essential for legal compliance with housing regulations, protecting landlords and tenants, and avoiding penalties or disputes.</p>
                     </div>
                     <div className="flex items-center gap-6 p-10 bg-[#1B2D33] rounded-3xl border border-white/5 group hover:border-[#A07A41]/30 transition-all shadow-biggest">
                        <AlertTriangle className="h-10 w-10 text-red-500 animate-pulse" />
                        <span className="text-white font-serif text-xl italic leading-tight">Missing or incorrect documents can lead to serious legal consequences.</span>
                     </div>
                  </div>
                  <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <div className="relative">
                        <img src="/doc.jpg" alt="Legal Documentation" className="rounded-[4rem] shadow-biggest h-[500px] w-full object-cover grayscale" />
                        <div className="absolute inset-0 border-[20px] border-[#A07A41]/10 rounded-[4rem] -m-4"></div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 3. WHY IT MATTERS */}
            <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#1B2D33] border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
                  <div className={`mb-16 md:mb-24 ${visibleSections.why ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                        Why Property Compliance <br /><span className="italic font-light text-[#A07A41]">Is Critical.</span>
                     </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                     <div className={`p-12 bg-[#2A454E]/30 rounded-[3rem] text-left border border-white/5 ${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h4 className="text-red-500 font-black text-xs uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
                           <div className="h-[2px] w-8 bg-red-500/30"></div>
                           Risk of Non-Compliance
                        </h4>
                        <div className="space-y-8">
                           {[
                              "Legal penalties or heavy fines",
                              "Invalid tenancy agreements",
                              "Disputes with tenants",
                              "Delays in property transactions"
                           ].map((item, i) => (
                              <div key={i} className="flex gap-6 group">
                                 <XCircle className="h-6 w-6 text-red-900 group-hover:text-red-500 transition-colors shrink-0" />
                                 <span className="text-gray-400 font-serif text-xl italic group-hover:text-white transition-colors">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className={`p-12 bg-[#2A454E]/30 rounded-[3rem] text-left border border-[#A07A41]/20 ${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <h4 className="text-[#A07A41] font-black text-xs uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
                           <div className="h-[2px] w-8 bg-[#A07A41]/30"></div>
                           The Compliance Advantage
                        </h4>
                        <div className="space-y-8">
                           {[
                              "Complete legal protection",
                              "Smooth property operations",
                              "Reduced risk of disputes",
                              "Enhanced property value reputation"
                           ].map((item, i) => (
                              <div key={i} className="flex gap-6 group">
                                 <ShieldCheck className="h-6 w-6 text-[#A07A41]/30 group-hover:text-[#A07A41] transition-colors shrink-0" />
                                 <span className="text-gray-300 font-serif text-xl italic group-hover:text-white transition-colors">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 4. TYPES WE ASSIST WITH */}
            <section ref={sectionRefs.types} data-section="types" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className={`${visibleSections.types ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <div className="relative group">
                        <img src="/saa1.jpg" alt="Property Safety" className="rounded-[4rem] h-[600px] w-full object-cover grayscale brightness-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <Shield className="h-32 w-32 text-[#A07A41]/20 group-hover:text-[#A07A41]/40 transition-all duration-1000 group-hover:scale-110" />
                        </div>
                     </div>
                  </div>
                  <div className={`${visibleSections.types ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight uppercase leading-tight">
                        Compliance Documents <br />
                        <span className="italic font-light text-[#A07A41]">We Assist With.</span>
                     </h2>
                     <div className="grid gap-4">
                        {[
                           "Tenancy-related compliance documents",
                           "Property safety certificates (Gas, EPC)",
                           "Right to Rent documentation",
                           "Property inventory and inspection reports",
                           "Lease and tenancy compliance paperwork"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-8 p-6 bg-[#1B2D33] rounded-[2rem] border border-white/5 hover:border-[#A07A41] transition-all group">
                              <ClipboardCheck className="h-6 w-6 text-[#A07A41] group-hover:scale-110 transition-transform" />
                              <span className="text-white font-bold text-lg leading-tight uppercase tracking-tight">{item}</span>
                           </div>
                        ))}
                     </div>
                     <div className="mt-12 text-center lg:text-left">
                        <p className="text-[#A07A41] font-black text-xl italic uppercase tracking-wider">👉 This is not just paperwork—it’s legal protection.</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 5. WHAT WE DO */}
            <section ref={sectionRefs.todo} data-section="todo" className="py-24 md:py-32 bg-[#1B2D33] border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-24 ${visibleSections.todo ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">What We Do For <br /><span className="italic font-light text-[#A07A41]">Property Compliance.</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                     {[
                        { t: "Requirement ID", d: "Identifying required compliance documents.", i: Search },
                        { t: "Drafting", d: "Preparing and structuring documentation.", i: FileText },
                        { t: "Gap Review", d: "Reviewing existing documents for gaps.", i: Layout },
                        { t: "Organization", d: "Organizing records for easy access.", i: ClipboardCheck },
                        { t: "Verification", d: "Ensuring documentation completeness.", i: ShieldCheck }
                     ].map((item, i) => (
                        <div key={i} className={`p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl hover:border-[#A07A41] transition-all group ${visibleSections.todo ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                           <item.i className="h-10 w-10 text-[#A07A41] mb-8 group-hover:rotate-6 transition-transform" />
                           <h4 className="text-white font-serif font-bold text-xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight uppercase">{item.t}</h4>
                           <p className="text-gray-500 text-sm font-light leading-relaxed italic">{item.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 6. OUR PROCESS */}
            <section ref={sectionRefs.process} data-section="process" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-24 ${visibleSections.process ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Our Compliance <span className="italic font-light text-[#A07A41]">Process.</span></h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
                     <div className="absolute top-10 left-0 w-full h-[1px] bg-white/5 hidden md:block"></div>
                     {[
                        { t: "Property Assessment", d: "We review your property type and requirements." },
                        { t: "Compliance Audit", d: "We identify missing or incomplete documents." },
                        { t: "Documentation Preparation", d: "Required documents are prepared or updated." },
                        { t: "Review & Verification", d: "We ensure accuracy and completeness." },
                        { t: "Final Delivery", d: "You receive a structured compliance document set." }
                     ].map((step, i) => (
                        <div key={i} className={`flex flex-col items-center text-center group z-10 ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                           <div className="w-20 h-20 rounded-full bg-[#1B2D33] border border-white/10 flex items-center justify-center font-serif font-black text-3xl text-[#A07A41] mb-8 group-hover:bg-[#A07A41] group-hover:text-black transition-all shadow-biggest">0{i + 1}</div>
                           <h4 className="text-white font-serif font-bold text-xl mb-4 group-hover:text-[#A07A41] transition-colors uppercase tracking-wider leading-tight">{step.t}</h4>
                           <p className="text-gray-500 text-sm font-light leading-relaxed italic">{step.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 7. WHO NEEDS IT */}
            <section ref={sectionRefs.who} data-section="who" className="py-24 md:py-32 bg-[#1B2D33] border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className={`${visibleSections.who ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight uppercase">
                        Who Needs <br />
                        <span className="italic font-light text-[#A07A41]">Compliance Services?</span>
                     </h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                           "Landlords renting properties",
                           "Property managers",
                           "Real estate investors",
                           "Businesses leasing property",
                           "Tenants needing clarity"
                        ].map((v, i) => (
                           <div key={i} className="flex items-center gap-6 p-6 bg-[#2A454E]/30 rounded-3xl border border-white/5 hover:border-[#A07A41] transition-all group">
                              <Users className="h-6 w-6 text-[#A07A41]/40 group-hover:text-[#A07A41]" />
                              <span className="text-gray-400 font-bold text-base md:text-lg group-hover:text-white transition-colors">{v}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className={`${visibleSections.who ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <div className="p-16 bg-[#2A454E] rounded-[4rem] border-l-8 border-[#A07A41] shadow-biggest text-center">
                        <HelpCircle className="h-20 w-20 text-[#A07A41]/20 mx-auto mb-10" />
                        <p className="text-white font-serif text-3xl italic leading-relaxed">
                           "If you’re unsure about compliance, you’re already at risk."
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 8. WHY CHOOSE US */}
            <section ref={sectionRefs.choose} data-section="choose" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-24 ${visibleSections.choose ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Why Choose Our <br /><span className="italic font-light text-[#A07A41]">Compliance Expertise?</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                        { t: "UK Property Focus", d: "Deep knowledge of UK-specific housing and rental regulations.", i: Scale },
                        { t: "Structured Organization", d: "Documentation that is easy to navigate and audit-ready.", i: Layout },
                        { t: "Risk-Focused", d: "Designed to proactively prevent legal issues before they arise.", i: ShieldCheck },
                        { t: "Strategic Approach", d: "We look for compliance gaps most landlords miss.", i: Search }
                     ].map((item, i) => (
                        <div key={i} className={`p-12 bg-[#1B2D33]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.choose ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                           <item.i className="h-10 w-10 text-[#A07A41] mb-10 group-hover:scale-110 transition-transform" />
                           <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight uppercase tracking-tight">{item.t}</h4>
                           <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed">{item.d}</p>
                        </div>
                     ))}
                  </div>
                  <div className="mt-20 text-center animate-fade-in-up">
                     <p className="text-white/30 italic text-xl">Most people only realize compliance gaps after problems occur.</p>
                  </div>
               </div>
            </section>

            {/* 9. LEGAL & COMPLIANCE NOTE */}
            <section ref={sectionRefs.legal} data-section="legal" className="py-24 md:py-32 bg-[#1B2D33] border-y border-white/5 relative overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                     <div className={`space-y-8 ${visibleSections.legal ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Compliance Standards <br /><span className="text-[#A07A41] italic">& Compliance.</span></h2>
                        <div className="space-y-6">
                           {[
                              "Documentation aligns with property practices",
                              "No critical compliance requirements overlooked",
                              "Clear and structured records",
                              "Support for enforcement and legal clarity"
                           ].map((v, i) => (
                              <div key={i} className="flex items-center gap-6 group">
                                 <CheckCircle className="h-6 w-6 text-[#A07A41]/30 group-hover:text-[#A07A41] transition-colors" />
                                 <span className="text-gray-400 font-light text-xl italic group-hover:text-white transition-colors">{v}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className={`p-12 md:p-16 bg-[#2A454E]/30 border border-[#A07A41]/10 rounded-[4rem] shadow-biggest ${visibleSections.legal ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <p className="text-gray-300 font-sans font-light text-lg md:text-xl leading-relaxed italic mb-8">
                           Our broader legal services also include <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and assistance in <strong>intellectual property dispute UK</strong> matters requiring structured <strong>legal response trademark UK</strong> documentation and <strong>trademark application support UK</strong>.
                        </p>
                        <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 10. FAQ Section */}
            <section ref={sectionRefs.faq} data-section="faq" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[60rem] mx-auto text-center">
                  <div className={`mb-24 ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase">
                        Frequently Asked <br /><span className="italic font-light text-[#A07A41]">Questions.</span>
                     </h2>
                  </div>
                  <div className="space-y-6 text-left">
                     {faqs.map((faq, i) => (
                        <div key={i} className={`border border-white/5 rounded-[2.5rem] bg-[#1B2D33]/60 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                           <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-10 flex items-center justify-between group">
                              <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                              <div className={`p-3 rounded-full border border-white/10 transition-all duration-500 ${activeFaq === i ? 'bg-[#A07A41] border-[#A07A41]' : ''}`}>
                                 <ChevronDown className={`h-6 w-6 text-white transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                              </div>
                           </button>
                           <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                              <p className="border-t border-white/5 pt-10 text-gray-400 text-lg leading-relaxed font-light italic">{faq.a}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 11. FINAL CTA */}
            <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden">
               <div className="absolute inset-0 z-0">
                  <img src="/lawhero.jpg" alt="Property Compliance" className="w-full h-full object-cover opacity-10" />
               </div>
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
                  <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-[1] tracking-tight uppercase">
                        Ensure Your Property <br />
                        <span className="italic font-light text-[#A07A41]">Is Fully Compliant.</span>
                     </h2>
                     <p className="text-gray-400 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg font-sans leading-relaxed italic border-l-4 border-[#A07A41]/40 pl-8 text-center">
                        Avoid legal risks and operational issues by ensuring your property documentation is complete and properly structured.
                     </p>

                     <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
                        <button className="group relative flex items-center justify-center gap-4 px-12 py-7 bg-[#A07A41] text-black font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-500 hover:bg-white hover:scale-105 shadow-[0_0_50px_rgba(160,122,65,0.3)] overflow-hidden">
                           <span className="relative z-10">Start Compliance Check</span>
                           <ArrowRight className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                           <p className="text-white font-serif italic text-3xl mb-1 group-hover:text-[#A07A41] transition-colors leading-none">Book Consultation</p>
                           <div className="h-[2px] w-0 bg-[#A07A41] group-hover:w-full transition-all duration-500"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

         </main>
      </div>
   );
};

export default PropertyComplianceDocsPage;
