import React, { useEffect, useState, useRef } from 'react';
import {
   ArrowRight, Search, CheckCircle,
   ChevronDown, ShieldCheck, Map,
   FileText, AlertTriangle, Users,
   BarChart, Gavel, HelpCircle
} from 'lucide-react';

const TitleSearchAssistancePage = () => {
   const [activeFaq, setActiveFaq] = useState(null);

   const [visibleSections, setVisibleSections] = useState({
      hero: true,
      what: false,
      why: false,
      checks: false,
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
      checks: useRef(null),
      process: useRef(null),
      who: useRef(null),
      choose: useRef(null),
      legal: useRef(null),
      faq: useRef(null),
      cta: useRef(null)
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Title Search Assistance UK | Property Ownership Verification | H&S Co.";

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
         q: "Is a title search mandatory?",
         a: "Not always legally required for every type of transaction, but it is absolutely essential for risk protection. Most lenders will require one before approving a mortgage, and cash buyers should never skip it."
      },
      {
         q: "How long does a title search take?",
         a: "Typically 1–3 business days depending on the complexity of the property's history and the responsiveness of local registries."
      },
      {
         q: "What if issues are found?",
         a: "You receive a detailed report highlighting the specific risks and possible next steps. This allows you to negotiate repairs, price reductions, or walk away from a problematic deal."
      },
      {
         q: "Can this prevent property disputes?",
         a: "It significantly reduces the risk by identifying issues like boundary overlaps or undisclosed easements early, allowing them to be resolved before they become legal battles."
      }
   ];

   const checkItems = [
      "Ownership history verification",
      "Existing claims, charges, or restrictions",
      "Legal disputes related to the property",
      "Encumbrances or liabilities",
      "Property boundary and usage records"
   ];

   const processSteps = [
      { t: "Property Details Collection", d: "We gather required information about the property." },
      { t: "Record Examination", d: "Public records and legal documents are reviewed." },
      { t: "Risk Identification", d: "Any issues, claims, or inconsistencies are identified." },
      { t: "Analysis & Verification", d: "Ownership and legal standing are confirmed." },
      { t: "Report Delivery", d: "You receive a clear summary of findings." }
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
          .animation-delay-800 { animation-delay: 0.8s; }

          .bg-glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); }
          .border-glass { border: 1px solid rgba(255, 255, 255, 0.05); }
        `}
         </style>

         <main className="flex-grow">

            {/* 1. HERO SECTION */}
            <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-[#1B2D33]">
               <div className="absolute inset-0 z-0">
                  <img src="/3hero.jpg" alt="Title Search Assistance UK" className="w-full h-full object-cover opacity-15" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33]/80 via-[#1B2D33]/40 to-[#2A454E]"></div>
               </div>
               
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
                  <div className="max-w-4xl">
                     <div className="flex items-center gap-4 mb-8 animate-fade-in-down">
                        <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                        <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] sm:text-xs font-bold font-sans">Property Protection & Verification</span>
                     </div>

                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                        Title Search <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Assistance Services UK.</span>
                     </h1>

                     <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up animation-delay-400 italic">
                        Verify property ownership, identify legal issues, and ensure a secure transaction with professional title search and verification support.
                     </p>

                     <div className="flex flex-col sm:flex-row gap-8 mb-20 animate-fade-in-right animation-delay-600">
                        <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#A07A41] text-black font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-white shadow-[0_0_30px_rgba(160,122,65,0.2)] overflow-hidden">
                           <span className="relative z-10">Request Title Search</span>
                           <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                        <a href="#consultation" className="flex flex-col justify-center border-l-2 border-[#A07A41]/20 pl-6 cursor-pointer group">
                           <p className="text-[#A07A41] text-[11px] font-black uppercase tracking-[0.3em] mb-1 group-hover:text-white transition-colors">Book Consultation</p>
                           <p className="text-white/40 text-[10px] italic">Expert Property Analysis</p>
                        </a>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/5 pt-12 animate-fade-in-up animation-delay-800">
                        {[
                           { t: "UK property research support", s: "Local Expertise" },
                           { t: "Ownership verification focus", s: "Due Diligence" },
                           { t: "Risk-based analysis", s: "Strategic Insight" }
                        ].map((item, i) => (
                           <div key={i} className="space-y-1 group">
                              <span className="text-white font-serif font-bold text-lg block group-hover:text-[#A07A41] transition-colors">{item.t}</span>
                              <span className="text-[#A07A41]/40 text-[10px] font-black uppercase tracking-widest leading-none">{item.s}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* 2. WHAT IS A TITLE SEARCH */}
            <section ref={sectionRefs.what} data-section="what" className="py-24 md:py-32 bg-[#2A454E] overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight uppercase">
                        What is a <br />
                        <span className="italic font-light text-[#A07A41]">Title Search?</span>
                     </h2>
                     <div className="space-y-8 text-gray-400 text-base md:text-lg font-light font-sans leading-relaxed border-l-4 border-[#A07A41]/20 pl-8 italic mb-12">
                        <p>A title search is the process of examining public records and legal documents to confirm the ownership of a property and identify any legal issues attached to it.</p>
                        <p>It ensures that the seller has legal ownership, there are no undisclosed claims or disputes, and the property can be transferred without complications.</p>
                     </div>
                     <div className="flex items-center gap-6 p-8 bg-[#1B2D33] rounded-3xl border border-[#A07A41]/10 group hover:border-[#A07A41]/40 transition-all shadow-xl">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-[#A07A41] flex items-center justify-center font-black text-black text-xl">👉</div>
                        <span className="text-white font-serif text-lg md:text-xl italic">This step is critical before any property transaction.</span>
                     </div>
                  </div>
                  <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <div className="relative group">
                        <img src="/h2.jpg" alt="Property Title Search UK" className="rounded-[3rem] shadow-2xl h-[400px] md:h-[600px] w-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100" />
                        <div className="absolute -bottom-10 -left-10 bg-[#A07A41] p-10 rounded-[2rem] hidden md:block border border-black/5 shadow-2xl">
                           <Search className="h-12 w-12 text-black" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 3. WHY TITLE SEARCH IS IMPORTANT */}
            <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#1B2D33] border-y border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A07A41]/5 blur-[120px] rounded-full translate-x-1/2"></div>
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center relative z-10">
                  <div className={`mb-16 md:mb-24 ${visibleSections.why ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                        Why Title Search <br /><span className="italic font-light text-[#A07A41]">Is Essential.</span>
                     </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                     <div className={`p-10 md:p-16 bg-[#2A454E]/30 border border-red-900/20 rounded-[3rem] hover:border-red-500/30 transition-all duration-500 text-left ${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <div className="flex items-center gap-4 mb-8">
                           <AlertTriangle className="text-red-500 h-8 w-8" />
                           <h3 className="text-white font-serif font-bold text-2xl uppercase tracking-wider">The Risks of Skipping</h3>
                        </div>
                        <ul className="space-y-6">
                           {[
                              "Buying property with ownership disputes",
                              "Hidden legal claims or liens",
                              "Boundary or usage conflicts",
                              "Delays or failure in property transfer"
                           ].map((item, i) => (
                              <li key={i} className="flex gap-4 text-gray-400 italic">
                                 <div className="h-[1px] w-4 bg-red-500/50 mt-3"></div>
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div className={`p-10 md:p-16 bg-[#2A454E]/30 border border-[#A07A41]/20 rounded-[3rem] hover:border-[#A07A41]/50 transition-all duration-500 text-left ${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <div className="flex items-center gap-4 mb-8">
                           <ShieldCheck className="text-[#A07A41] h-8 w-8" />
                           <h3 className="text-white font-serif font-bold text-2xl uppercase tracking-wider">The Benefits of Verification</h3>
                        </div>
                        <ul className="space-y-6">
                           {[
                              "Clear ownership verification",
                              "Reduced transaction risk",
                              "Confidence before purchase",
                              "Land registry search UK compliance"
                           ].map((item, i) => (
                              <li key={i} className="flex gap-4 text-gray-300 italic group">
                                 <CheckCircle className="h-5 w-5 text-[#A07A41] shrink-0 mt-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </section>

            {/* 4. WHAT WE CHECK */}
            <section ref={sectionRefs.checks} data-section="checks" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                     <div className={`${visibleSections.checks ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <div className="relative group">
                           <img src="/h3.jpg" alt="Land Registry Search UK" className="rounded-[4rem] h-[500px] w-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-700" />
                           <div className="absolute inset-0 flex flex-col justify-end p-12 text-left">
                              <p className="text-[#A07A41] font-black text-4xl italic mb-4">"Hidden Risks"</p>
                              <p className="text-white/60 text-lg font-light max-w-sm italic">This is where most property transaction issues are found before they escalate.</p>
                           </div>
                        </div>
                     </div>
                     <div className={`${visibleSections.checks ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight uppercase leading-tight">
                           What We Check <br />
                           <span className="italic font-light text-[#A07A41]">During a Search.</span>
                        </h2>
                        <div className="space-y-4">
                           {checkItems.map((item, i) => (
                              <div key={i} className="flex items-center gap-6 p-6 bg-[#1B2D33] rounded-2xl border border-white/5 group hover:bg-[#A07A41] transition-all duration-500">
                                 <Map className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                                 <span className="text-gray-200 group-hover:text-black font-bold text-base md:text-lg transition-colors">{item}</span>
                              </div>
                           ))}
                        </div>
                        <div className="mt-12 p-8 border-l-2 border-[#A07A41] bg-white/5 rounded-r-3xl">
                           <p className="text-white/80 italic text-lg">
                              Our expertise includes <strong>property ownership verification UK</strong> and deep <strong>title deed search UK</strong> analysis.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 5. OUR PROCESS */}
            <section ref={sectionRefs.process} data-section="process" className="py-24 md:py-32 bg-[#1B2D33] relative">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-24 ${visibleSections.process ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Our Title Search <span className="italic font-light text-[#A07A41]">Process.</span></h2>
                     <p className="text-gray-400 max-w-xl mx-auto font-light text-base md:text-lg font-sans italic">Structured, thorough, and transparent from start to finish.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                     {processSteps.map((step, i) => (
                        <div key={i} className={`flex flex-col group ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                           <div className="relative mb-10">
                              <div className="w-16 h-16 rounded-2xl bg-[#2A454E] flex items-center justify-center font-serif font-black text-2xl text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all relative z-10 shadow-xl">0{i + 1}</div>
                              {i < 4 && <div className="absolute top-1/2 left-full w-full h-[1px] bg-white/5 hidden md:block -translate-y-1/2"></div>}
                           </div>
                           <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 group-hover:text-[#A07A41] transition-colors uppercase tracking-wider">{step.t}</h4>
                           <p className="text-gray-500 text-sm font-light leading-relaxed italic group-hover:text-gray-300 transition-colors">{step.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 6. WHO NEEDS IT */}
            <section ref={sectionRefs.who} data-section="who" className="py-24 md:py-32 bg-[#2A454E] border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                     <div className={`${visibleSections.who ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 uppercase tracking-tight leading-tight">
                           Who Needs <br /><span className="italic font-light text-[#A07A41]">These Services?</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           {[
                              { t: "Property Buyers", d: "Essential check before completing any purchase." },
                              { t: "Real Estate Investors", d: "Protecting large portfolios from hidden claims." },
                              { t: "Landlords", d: "Verification before acquiring new rental units." },
                              { t: "Businesses", d: "Security for commercial leasing or acquisitions." },
                              { t: "Legal Professionals", d: "Outsourced verification support for firms." }
                           ].map((item, i) => (
                              <div key={i} className="p-8 bg-[#1B2D33]/50 border border-white/5 rounded-[2rem] hover:border-[#A07A41]/30 transition-all group">
                                 <Users className="h-6 w-6 text-[#A07A41] mb-6 group-hover:scale-110 transition-transform" />
                                 <h4 className="text-white font-bold text-xl md:text-2xl mb-2">{item.t}</h4>
                                 <p className="text-gray-500 text-xs italic font-light">{item.d}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className={`relative ${visibleSections.who ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <div className="bg-[#1B2D33] p-16 rounded-[4rem] border border-[#A07A41]/10 text-center relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-[#A07A41]/10 blur-3xl rounded-full"></div>
                           <h3 className="text-[#A07A41] font-serif italic text-4xl mb-10">Critical Warning</h3>
                           <p className="text-gray-300 text-xl font-light leading-relaxed mb-10 italic">
                              "If money is involved, skipping this step is reckless. A few hundred pounds in verification can save tens of thousands in future legal fees."
                           </p>
                           <div className="inline-flex items-center gap-4 px-8 py-4 bg-red-950/20 border border-red-500/20 rounded-full text-red-400 text-sm font-bold tracking-widest uppercase">
                              <AlertTriangle className="h-4 w-4" />
                              Zero Margin for Error
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 7. WHY CHOOSE US */}
            <section ref={sectionRefs.choose} data-section="choose" className="py-24 md:py-32 bg-[#1B2D33]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-24 ${visibleSections.choose ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Why Choose Our <br /><span className="italic font-light text-[#A07A41]">Verification Expertise?</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                        { t: "Structured Process", d: "Thorough verification from property details to final report." },
                        { t: "Risk Focus", d: "We identify problems, not just collect data entries." },
                        { t: "Clear Reporting", d: "Understandable insights for non-legal professionals." },
                        { t: "UK Specialization", d: "Deep understanding of UK land registry and property laws." }
                     ].map((item, i) => (
                        <div key={i} className={`p-12 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.choose ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                           <BarChart className="h-10 w-10 text-[#A07A41] mb-10 group-hover:rotate-12 transition-transform" />
                           <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight uppercase tracking-tight">{item.t}</h4>
                           <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed">{item.d}</p>
                        </div>
                     ))}
                  </div>
                  <div className="mt-20 text-center">
                     <p className="text-white/40 italic text-xl max-w-3xl mx-auto">
                        "Most people only check ownership—they don’t check the legal problems attached to it. We bridge that gap."
                     </p>
                  </div>
               </div>
            </section>

            {/* 8. LEGAL & COMPLIANCE */}
            <section ref={sectionRefs.legal} data-section="legal" className="py-24 md:py-32 bg-[#2A454E] border-y border-white/5 relative overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                     <div className={`space-y-8 ${visibleSections.legal ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Legal Accuracy <br /><span className="text-[#A07A41] italic">& Compliance.</span></h2>
                        <div className="space-y-6">
                           {[
                              "Proper review of official records",
                              "Accurate interpretation of findings",
                              "Identification of legal risks",
                              "Alignment with UK property processes"
                           ].map((v, i) => (
                              <div key={i} className="flex items-center gap-6 group">
                                 <Gavel className="h-6 w-6 text-[#A07A41]/30 group-hover:text-[#A07A41] transition-colors" />
                                 <span className="text-gray-400 font-light text-xl italic group-hover:text-white transition-colors">{v}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className={`p-12 md:p-16 bg-[#1B2D33] border border-[#A07A41]/10 rounded-[4rem] shadow-2xl relative ${visibleSections.legal ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <FileText className="h-12 w-12 text-[#A07A41]/20 absolute top-12 right-12" />
                        <p className="text-gray-300 font-sans font-light text-lg md:text-xl leading-relaxed italic relative z-10">
                           Our broader legal support also includes <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and assistance in <strong>intellectual property dispute UK</strong> matters requiring structured <strong>legal response trademark UK</strong> documentation and <strong>trademark application support UK</strong>.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 9. FAQ Section */}
            <section ref={sectionRefs.faq} data-section="faq" className="py-24 md:py-32 bg-[#1B2D33]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[60rem] mx-auto text-center">
                  <div className={`mb-24 ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase">
                        Frequently Asked <br /><span className="italic font-light text-[#A07A41]">Questions.</span>
                     </h2>
                  </div>
                  <div className="space-y-6 text-left">
                     {faqs.map((faq, i) => (
                        <div key={i} className={`border border-white/5 rounded-[2.5rem] bg-[#2A454E]/40 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
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

            {/* 10. FINAL CTA */}
            <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#2A454E] text-center overflow-hidden">
               <div className="absolute inset-0 z-0">
                  <img src="/h4.jpg" alt="Verify Before You Invest" className="w-full h-full object-cover opacity-10 grayscale" />
               </div>
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
                  <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-[1] tracking-tight uppercase">
                        Verify Before <br />
                        <span className="italic font-light text-[#A07A41]">You Invest.</span>
                     </h2>
                     <p className="text-gray-400 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg font-sans leading-relaxed italic border-l-4 border-[#A07A41]/40 pl-8">
                        Property transactions involve significant financial commitment. Ensure everything is legally clear before proceeding.
                     </p>

                     <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                        <button className="group relative flex items-center justify-center gap-4 px-12 py-7 bg-[#A07A41] text-black font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-500 hover:bg-white hover:scale-105 shadow-[0_0_50px_rgba(160,122,65,0.3)] overflow-hidden">
                           <span className="relative z-10">Start Title Search</span>
                           <ArrowRight className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <a href="#consultation" className="flex flex-col items-center sm:items-start group cursor-pointer">
                           <p className="text-white font-serif italic text-3xl mb-1 group-hover:text-[#A07A41] transition-colors">Book Consultation</p>
                           <div className="h-[2px] w-0 bg-[#A07A41] group-hover:w-full transition-all duration-500"></div>
                        </a>
                     </div>
                  </div>
               </div>
            </section>

         </main>
      </div>
   );
};

export default TitleSearchAssistancePage;
