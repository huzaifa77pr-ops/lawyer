import React, { useEffect, useState, useRef } from 'react';
import {
   ArrowRight, FileSearch, CheckCircle,
   ChevronDown, ShieldCheck, Zap,
   Users, ListChecks, FileText,
   AlertTriangle, Scale, HelpCircle
} from 'lucide-react';

const RealEstateContractSummariesPage = () => {
   const [activeFaq, setActiveFaq] = useState(null);

   const [visibleSections, setVisibleSections] = useState({
      hero: true,
      what: false,
      who: false,
      included: false,
      process: false,
      importance: false,
      choose: false,
      legal: false,
      faq: false,
      cta: false
   });

   const sectionRefs = {
      hero: useRef(null),
      what: useRef(null),
      who: useRef(null),
      included: useRef(null),
      process: useRef(null),
      importance: useRef(null),
      choose: useRef(null),
      legal: useRef(null),
      faq: useRef(null),
      cta: useRef(null)
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Real Estate Contract Summaries UK | Property Legal Insights | H&S Co.";

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
         q: "Is this the same as a legal review?",
         a: "No, this focuses on simplifying and highlighting key points rather than full legal analysis. A summary is designed for clarity and quick understanding, while a full review involves deep legal scrutiny and risk mitigation strategies."
      },
      {
         q: "How long does it take?",
         a: "Usually 1–2 business days, ensuring a thorough review of the document and precise extraction of key terms."
      },
      {
         q: "Can I ask questions about the summary?",
         a: "Yes, clarification support is available to ensure you fully understand every point highlighted in the summary."
      },
      {
         q: "Is this useful for commercial contracts?",
         a: "Yes, both residential and commercial agreements are covered, with the summary tailored to the specific context of the property type."
      }
   ];

   return (
      <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-x-hidden text-white font-sans">
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
            <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-[#2A454E] overflow-hidden">
               {/* Decorative Background Element */}
               <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#A07A41]/5 to-transparent z-0"></div>
               
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                  <div className="max-w-3xl">
                     <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
                        <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                        <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Strategic Document Analysis</span>
                     </div>

                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                        Real Estate Contract <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D] font-light italic">Summaries UK.</span>
                     </h1>

                     <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up animation-delay-400">
                        Clear, concise summaries of property contracts to help you understand key terms, risks, and obligations before making decisions.
                     </p>

                     <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-fade-in-left animation-delay-600">
                        <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] hover:text-black shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                           <span className="relative z-10">Get Contract Summary</span>
                           <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <div className="flex items-center gap-4 group cursor-pointer">
                           <div className="w-12 h-12 rounded-full border border-[#A07A41]/30 flex items-center justify-center group-hover:bg-[#A07A41] transition-all">
                              <HelpCircle className="h-5 w-5 text-[#A07A41] group-hover:text-black" />
                           </div>
                           <span className="text-white font-serif italic text-xl border-b border-transparent group-hover:border-[#A07A41] transition-all">Book Consultation</span>
                        </div>
                     </div>

                     <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-12 animate-fade-in-up animation-delay-600">
                        {[
                           { t: "UK property document expertise", s: "Local Legal Team" },
                           { t: "Risk-focused summaries", s: "Analysis Depth" },
                           { t: "Fast turnaround", s: "Delivery Speed" }
                        ].map((item, i) => (
                           <div key={i} className="space-y-1">
                              <span className="text-white font-serif font-bold text-sm md:text-base block leading-tight">{item.t}</span>
                              <span className="text-[#A07A41]/50 text-[9px] font-black uppercase tracking-widest">{item.s}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="relative hidden lg:block animate-fade-in-right animation-delay-400">
                     <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-biggest">
                        <img src="/heroo.jpg" alt="Contract Review" className="w-full h-[600px] object-cover grayscale brightness-50 transition-all duration-1000 hover:grayscale-0 hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-transparent to-transparent"></div>
                     </div>
                     {/* Floating Badge */}
                     <div className="absolute -bottom-10 -left-10 bg-[#A07A41] p-10 rounded-full shadow-2xl z-20 border border-black/10">
                        <Zap className="h-10 w-10 text-black animate-pulse" />
                     </div>
                  </div>
               </div>
            </section>

            {/* 2. WHAT IS A CONTRACT SUMMARY */}
            <section ref={sectionRefs.what} data-section="what" className="py-24 md:py-32 bg-[#1B2D33] overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight uppercase">
                        What is a <br />
                        <span className="italic font-light text-[#A07A41]">Contract Summary?</span>
                     </h2>
                     <div className="space-y-8 text-gray-400 text-base md:text-lg font-sans font-light leading-relaxed border-l-4 border-white/5 pl-8 italic mb-12">
                        <p>A real estate contract summary is a simplified breakdown of a property agreement, highlighting the key terms, obligations, and risks in a clear and understandable format.</p>
                        <p>Instead of reading complex legal language, you get a clear map of what you're agreeing to, ensuring no surprises down the line.</p>
                     </div>
                     <div className="flex items-center gap-6 p-8 bg-[#2A454E] rounded-[2.5rem] border border-white/5 group hover:border-[#A07A41]/30 transition-all shadow-biggest">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-[#A07A41] flex items-center justify-center font-black text-black">👉</div>
                        <span className="text-white font-serif text-xl italic leading-tight">This is about clarity—not just shortening text.</span>
                     </div>
                  </div>
                  <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <div className="grid grid-cols-2 gap-6">
                        {[
                           { t: "Key clauses explained", i: FileText },
                           { t: "Important obligations", i: Scale },
                           { t: "Risks highlighted", i: AlertTriangle },
                           { t: "Clear understanding", i: ShieldCheck }
                        ].map((item, i) => (
                           <div key={i} className="p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:bg-[#A07A41]/10 transition-all duration-500">
                              <item.i className="h-8 w-8 text-[#A07A41] mb-6" />
                              <span className="text-white font-bold text-lg leading-tight block uppercase tracking-tight">{item.t}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* 3. WHO NEEDS IT */}
            <section ref={sectionRefs.who} data-section="who" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`mb-16 md:mb-24 text-center ${visibleSections.who ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Who Needs <br /><span className="italic font-light text-[#A07A41]">Contract Summaries?</span></h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                     {[
                        { t: "Property Buyers", d: "Reviewing agreements clearly." },
                        { t: "Tenants", d: "Understanding rental contracts." },
                        { t: "Landlords", d: "Issuing complex agreements." },
                        { t: "Investors", d: "Handling multiple deals fast." },
                        { t: "Businesses", d: "Commercial property contracts." }
                     ].map((item, i) => (
                        <div key={i} className={`p-10 bg-[#1B2D33]/40 border border-white/5 rounded-[2rem] hover:border-[#A07A41] transition-all duration-500 text-center flex flex-col items-center ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                           <Users className="h-8 w-8 text-[#A07A41] mb-8" />
                           <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 leading-tight">{item.t}</h4>
                           <p className="text-gray-500 text-sm font-light leading-relaxed italic">{item.d}</p>
                        </div>
                     ))}
                  </div>
                  <div className="mt-20 text-center animate-fade-in-up">
                     <p className="text-white/40 italic text-2xl max-w-2xl mx-auto border-l-4 border-[#A07A41]/20 pl-8">"If you don’t fully understand a contract, you shouldn’t sign it."</p>
                  </div>
               </div>
            </section>

            {/* 4. WHAT WE INCLUDE */}
            <section ref={sectionRefs.included} data-section="included" className="py-24 md:py-32 bg-[#1B2D33] border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className={`${visibleSections.included ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight uppercase leading-tight">
                        What’s Included <br />
                        <span className="italic font-light text-[#A07A41]">In Your Summary.</span>
                     </h2>
                     <div className="space-y-4">
                        {[
                           "Key financial terms and payment obligations",
                           "Duration and renewal conditions",
                           "Termination and exit clauses",
                           "Responsibilities of each party",
                           "Potential risks and unfavorable terms",
                           "Important legal conditions"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-6 p-6 bg-[#2A454E]/50 rounded-2xl border border-white/5 group hover:bg-[#A07A41] transition-all duration-500">
                              <ListChecks className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                              <span className="text-gray-200 group-hover:text-black font-bold text-lg transition-colors">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className={`${visibleSections.included ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <div className="relative p-12 bg-[#2A454E] rounded-[4rem] border border-white/10 shadow-biggest">
                        <div className="absolute top-10 right-10 opacity-10">
                           <FileSearch className="h-32 w-32" />
                        </div>
                        <h3 className="text-white font-serif text-3xl italic mb-8 border-b border-[#A07A41]/30 pb-4">Insight Focus</h3>
                        <p className="text-gray-400 font-sans font-light text-lg md:text-xl leading-relaxed italic mb-8">
                           We don’t just summarize—we point out what matters. Our summaries are built for action, highlighting where you need to negotiate or seek further legal advice.
                        </p>
                        <div className="h-2 w-20 bg-[#A07A41]"></div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 5. OUR PROCESS */}
            <section ref={sectionRefs.process} data-section="process" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-24 ${visibleSections.process ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Our Summary <span className="italic font-light text-[#A07A41]">Process.</span></h2>
                  </div>

                  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12">
                     {/* Decorative Line */}
                     <div className="absolute top-12 left-0 w-full h-[1px] bg-[#A07A41]/10 hidden md:block"></div>
                     
                     {[
                        { t: "Document Submission", d: "You provide the contract or agreement." },
                        { t: "Detailed Review", d: "We analyze the document thoroughly." },
                        { t: "Key Point Extraction", d: "Important terms and risks are identified." },
                        { t: "Summary Preparation", d: "A clear, structured summary is created." },
                        { t: "Delivery & Explanation", d: "You receive the summary with optional clarification." }
                     ].map((step, i) => (
                        <div key={i} className={`flex flex-col items-center text-center group z-10 ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                           <div className="w-20 h-20 rounded-[2rem] bg-[#1B2D33] border border-white/5 flex items-center justify-center font-serif font-black text-3xl text-[#A07A41] mb-8 group-hover:bg-[#A07A41] group-hover:text-black group-hover:rotate-12 transition-all shadow-biggest">0{i + 1}</div>
                           <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 group-hover:text-[#A07A41] transition-colors uppercase tracking-tight">{step.t}</h4>
                           <p className="text-gray-500 text-sm font-light leading-relaxed italic">{step.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 6. WHY IT MATTERS */}
            <section ref={sectionRefs.importance} data-section="importance" className="py-24 bg-[#1B2D33] relative overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className={`${visibleSections.importance ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight uppercase">
                        Why Contract <br />
                        <span className="italic font-light text-[#A07A41]">Summaries Matter.</span>
                     </h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="space-y-6">
                           <h5 className="text-red-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">Common Pitfalls</h5>
                           {[
                              "Hidden obligations",
                              "Unclear clauses",
                              "Financial risks",
                              "Easy to overlook terms"
                           ].map((v, i) => (
                              <div key={i} className="flex gap-4 text-gray-500 italic group">
                                 <div className="h-[1px] w-4 bg-red-900/50 mt-3 group-hover:w-8 transition-all"></div>
                                 <span className="text-base">{v}</span>
                              </div>
                           ))}
                        </div>
                        <div className="space-y-6">
                           <h5 className="text-[#A07A41] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">The Risk of Blind Signing</h5>
                           {[
                              "Unfavorable agreements",
                              "Financial loss",
                              "Lengthy legal disputes",
                              "Contractual traps"
                           ].map((v, i) => (
                              <div key={i} className="flex gap-4 text-gray-300 italic group">
                                 <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5 opacity-40 group-hover:opacity-100" />
                                 <span className="text-base">{v}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className={`${visibleSections.importance ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <div className="p-16 bg-[#2A454E] rounded-[4rem] border-r-4 border-b-4 border-[#A07A41]/30">
                        <p className="text-white font-serif text-3xl italic leading-relaxed text-center">"Clarity before commitment is critical."</p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 7. WHY CHOOSE US */}
            <section ref={sectionRefs.choose} data-section="choose" className="py-24 md:py-32 bg-[#2A454E]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-24 ${visibleSections.choose ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Why Choose Our <br /><span className="italic font-light text-[#A07A41]">Summary Services?</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                        { t: "Focus on Risk", d: "We highlight critical issues, not just simplify text.", i: ShieldCheck },
                        { t: "Easy to Understand", d: "Summaries designed for human reading, not robots.", i: Zap },
                        { t: "Critical Insights", d: "Highlighting terms that often cause future disputes.", i: AlertTriangle },
                        { t: "UK Property Focus", d: "Tailored to the nuances of UK property legislation.", i: Scale }
                     ].map((item, i) => (
                        <div key={i} className={`p-12 bg-[#1B2D33]/60 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.choose ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                           <item.i className="h-10 w-10 text-[#A07A41] mb-10 group-hover:scale-110 transition-transform" />
                           <h4 className="text-white font-serif font-bold text-xl md:text-2xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight uppercase tracking-tight">{item.t}</h4>
                           <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed">{item.d}</p>
                        </div>
                     ))}
                  </div>
                  <div className="mt-20 text-center animate-fade-in-up">
                     <p className="text-white/30 italic text-xl">Most summaries fail because they remove detail instead of explaining it.</p>
                  </div>
               </div>
            </section>

            {/* 8. LEGAL DISCLAIMER */}
            <section ref={sectionRefs.legal} data-section="legal" className="py-24 md:py-32 bg-[#1B2D33] border-y border-white/5 relative overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className={`${visibleSections.legal ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight uppercase leading-tight">
                        Professional <br />
                        <span className="italic font-light text-[#A07A41]">Standards & Limitations.</span>
                     </h2>
                     <div className="space-y-6">
                        {[
                           "Simplify complex legal language",
                           "Highlight key risks and obligations",
                           "Support informed decision-making",
                           "Do not replace full legal advice"
                        ].map((v, i) => (
                           <div key={i} className="flex items-center gap-6 group">
                              <ShieldCheck className="h-6 w-6 text-[#A07A41]/30 group-hover:text-[#A07A41] transition-colors" />
                              <span className="text-gray-400 font-light text-xl italic group-hover:text-white transition-colors">{v}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className={`${visibleSections.legal ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <div className="p-12 md:p-16 bg-[#2A454E]/30 border border-[#A07A41]/10 rounded-[4rem] shadow-biggest">
                        <p className="text-gray-300 font-sans font-light text-lg md:text-xl leading-relaxed italic mb-8">
                           Our broader legal support also includes <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and assistance in <strong>intellectual property dispute UK</strong> matters requiring structured <strong>legal response trademark UK</strong> documentation.
                        </p>
                        <div className="h-[1px] w-full bg-[#A07A41]/20"></div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 9. FAQ SECTION */}
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

            {/* 10. FINAL CTA */}
            <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden">
               <div className="absolute inset-0 z-0">
                  <img src="/co1.jpg" alt="Clarity Before Commitment" className="w-full h-full object-cover opacity-10" />
               </div>
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
                  <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-[1] tracking-tight uppercase">
                        Understand <br />
                        <span className="italic font-light text-[#A07A41]">Before You Sign.</span>
                     </h2>
                     <p className="text-gray-400 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg font-sans leading-relaxed italic border-l-4 border-[#A07A41]/40 pl-8 text-center">
                        Don’t rely on assumptions when dealing with property contracts. Get a clear, structured summary before making decisions.
                     </p>

                     <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
                        <button className="group relative flex items-center justify-center gap-4 px-12 py-7 bg-[#A07A41] text-black font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-500 hover:bg-white hover:scale-105 shadow-[0_0_50px_rgba(160,122,65,0.3)] overflow-hidden">
                           <span className="relative z-10">Request Summary</span>
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

export default RealEstateContractSummariesPage;
