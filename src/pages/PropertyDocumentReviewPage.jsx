import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, Send, 
  Target, Eye, FileText, ClipboardList, 
  Shield, Scale, Gavel
} from 'lucide-react';

const PropertyDocumentReviewPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: true,
    who: true,
    check: true,
    process: true,
    importance: true,
    whyChoose: true,
    legal: true,
    faq: true,
    cta: true
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    who: useRef(null),
    check: useRef(null),
    process: useRef(null),
    importance: useRef(null),
    whyChoose: useRef(null),
    legal: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Property Document Review Services UK | H&S Co.";

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

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <style>
        {`
          @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-down { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-top-left { from { opacity: 0; transform: translate(-40px, -40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-top-right { from { opacity: 0; transform: translate(40px, -40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-bottom-left { from { opacity: 0; transform: translate(-40px, 40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-bottom-right { from { opacity: 0; transform: translate(40px, 40px); } to { opacity: 1; transform: translate(0, 0); } }
          
          .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-top-left { animation: fade-in-top-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-top-right { animation: fade-in-top-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-bottom-left { animation: fade-in-bottom-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
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
             <img src="/saa2.jpg" alt="Property Review hero" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/70 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Real Estate Document Analysis</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight">
                Property Document <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Review Services UK.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12">
                Professional review of property agreements and legal documents to identify risks, clarify terms, and ensure compliance before you sign.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-right">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Request Document Review</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] mb-1 font-sans">Book Consultation</p>
                   <p className="text-white/40 text-[10px] italic">Strategic Analysis Call</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/10 pt-12 animate-fade-in-up">
                 {[
                   { t: "UK-focused legal review", s: "Local Compliance" },
                   { t: "Residential & commercial property", s: "Full Spectrum" },
                   { t: "Risk-focused analysis", s: "Precision Safety" }
                 ].map((item, idx) => (
                   <div key={idx} className="space-y-1">
                      <span className="text-white font-serif font-bold text-base md:text-lg block">{item.t}</span>
                      <span className="text-[#A07A41]/50 text-[10px] font-black uppercase tracking-widest leading-none">{item.s}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS PROPERTY DOCUMENT REVIEW */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-in-left">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight leading-tight uppercase">
                    What is Property <br />
                    <span className="italic font-light text-[#A07A41]">Document Review?</span>
                 </h2>
                 <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed border-l-4 border-white/5 pl-6 md:pl-8 italic mb-10 md:mb-12">
                   <p>Property document review involves analyzing legal agreements and documents related to property transactions to identify risks, unclear terms, and potential legal issues.</p>
                   <p>The goal is simple: know exactly what you’re agreeing to before it becomes legally binding.</p>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Lease agreements",
                      "Tenancy contracts",
                      "Sale and purchase agreements",
                      "Property-related legal documents"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-5 bg-[#1B2D33] rounded-2xl border border-white/5 group hover:border-[#A07A41]/30 transition-all">
                         <div className="w-8 h-8 shrink-0 rounded-full bg-[#2A454E] flex items-center justify-center font-serif font-black text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all text-xs">0{idx+1}</div>
                         <span className="text-gray-200 group-hover:text-white font-bold text-sm tracking-wide">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="animate-fade-in-right">
                 <div className="relative group">
                    <img src="/doc.jpg" alt="Review process" className="rounded-3xl shadow-biggest h-[300px] md:h-[550px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-[#A07A41] p-6 md:p-10 rounded-2xl md:rounded-3xl hidden md:block border border-black/10">
                       <Search className="h-6 w-6 md:h-10 md:w-10 text-black animate-pulse" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. WHO NEEDS THIS SERVICE */}
        <section ref={sectionRefs.who} data-section="who" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className="mb-12 md:mb-20 animate-fade-in-down">
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                   Who Needs <span className="italic font-light text-[#A07A41]">Property Review?</span>
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4 font-sans"> 👉 If you’re signing without review, you’re taking blind risk.</p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { t: "Buyers", d: "Prior to finalizing any property purchase.", ani: "animate-fade-in-top-left" },
                  { t: "Tenants", d: "Before signing residential or commercial agreements.", ani: "animate-fade-in-up" },
                  { t: "Landlords", d: "When issuing contracts to ensure enforceable terms.", ani: "animate-fade-in-down" },
                  { t: "Businesses", d: "Entering long-term commercial lease commitments.", ani: "animate-fade-in-right" },
                  { t: "Investors", d: "Managing risk across multiple property deals.", ani: "animate-fade-in-bottom-right" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-8 md:p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl hover:border-[#A07A41] transition-all duration-500 ${item.ani}`}>
                     <div className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 block font-serif italic tracking-widest leading-none">Risk Profile</div>
                     <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-400 text-sm font-light leading-relaxed italic">{item.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. WHAT WE CHECK */}
        <section ref={sectionRefs.check} data-section="check" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-in-bottom-left">
                 <img src="/h4.jpg" alt="Analyzing documents" className="rounded-[2.5rem] md:rounded-[4rem] h-[300px] md:h-[600px] w-full object-cover brightness-100 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
              </div>
              <div className="animate-fade-in-top-right font-sans">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase leading-tight font-sans">
                    What We Check in <br />
                    <span className="italic font-light text-[#A07A41] font-serif">Property Documents.</span>
                 </h2>
                 <p className="text-gray-500 text-sm italic mb-10 border-l-2 border-[#A07A41] pl-6 font-light">👉 This is where most people get trapped—terms they didn’t understand.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {[
                      { t: "Hidden Clauses", i: Search },
                      { t: "Payment Obligations", i: Scale },
                      { t: "Exit Conditions", i: ArrowRight },
                      { t: "Liability Terms", i: Shield },
                      { t: "Legal Standards", i: Gavel },
                      { t: "Ambiguity Removal", i: Target }
                    ].map((v, idx) => {
                      const Icon = v.i;
                      return (
                        <div key={idx} className="flex flex-col p-6 md:p-8 bg-[#1B2D33] rounded-2xl md:rounded-3xl group hover:bg-[#A07A41] transition-all duration-500">
                           <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41] group-hover:text-black mb-4 md:mb-6 transition-colors" />
                           <span className="text-white group-hover:text-black font-bold text-xs md:text-sm tracking-widest uppercase transition-colors">{v.t}</span>
                        </div>
                      );
                    })}
                 </div>
              </div>
           </div>
        </section>

        {/* 5. PROCESS WORKS */}
        <section ref={sectionRefs.process} data-section="process" className="py-16 md:py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center font-sans">
              <div className="mb-12 md:mb-20 animate-fade-in-down font-sans">
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight font-sans">Our <span className="italic font-light text-[#A07A41] font-serif">Review Workflow.</span></h2>
                 <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4 font-sans leading-relaxed tracking-wide uppercase">Precision analysis from submission to delivery.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-left font-sans">
                 {[
                   { t: "Doc Submission", d: "You provide the agreement or contract securely.", ani: "animate-fade-in-left" },
                   { t: "Detailed Review", d: "We analyze clauses, terms, and latent risk areas.", ani: "animate-fade-in-top-left" },
                   { t: "Risk Identification", d: "Problematic sections are highlighted clearly for you.", ani: "animate-fade-in-up" },
                   { t: "Expert Recommendation", d: "We suggest changes or tactical improvements.", ani: "animate-fade-in-top-right" },
                   { t: "Summary Delivery", d: "You receive a structured summary of all findings.", ani: "animate-fade-in-right" }
                 ].map((step, idx) => (
                   <div key={idx} className={`p-8 md:p-12 bg-[#2A454E]/20 border border-white/5 rounded-[2.5rem] relative overflow-hidden flex flex-col hover:border-[#A07A41] transition-all duration-500 ${step.ani}`}>
                      <div className="absolute top-0 right-0 p-8 text-[#A07A41]/10 text-4xl font-black italic">0{idx+1}</div>
                      <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight pr-8">{step.t}</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed italic">{step.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. WHY PROFESSIONAL REVIEW MATTERS */}
        <section ref={sectionRefs.importance} data-section="importance" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center font-sans">
              <div className="animate-fade-in-top-left font-sans">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase leading-tight font-sans">
                    Why Property <br />
                    <span className="italic font-light text-[#A07A41] font-serif">Review is Important.</span>
                 </h2>
                 <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                       <div className="p-8 bg-black/20 rounded-3xl border border-red-500/10 shadow-inner">
                          <h4 className="text-red-400 font-bold mb-4 uppercase tracking-[0.2em] text-[10px] leading-none italic font-black mb-4">The Danger</h4>
                          <p className="text-gray-500 text-sm font-light italic leading-relaxed">Signing unfavorable terms, hidden financial obligations, or entering difficult exit-locks.</p>
                       </div>
                       <div className="p-8 bg-black/20 rounded-3xl border border-green-500/10 shadow-inner">
                          <h4 className="text-[#A07A41] font-bold mb-4 uppercase tracking-[0.2em] text-[10px] leading-none italic font-black mb-4">The Advantage</h4>
                          <p className="text-gray-300 text-sm font-light italic leading-relaxed">Total clarity before commitment and a significantly stronger legal protection layer.</p>
                       </div>
                    </div>
                    {[
                      "Clarity before commitment",
                      "Risk awareness & mitigation",
                      "Stronger negotiation position",
                      "Better overall legal protection"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-center group animate-fade-in-right">
                         <CheckCircle className="h-5 w-5 text-[#A07A41] shrink-0 group-hover:scale-125 transition-transform" />
                         <span className="text-gray-300 font-serif font-bold text-lg group-hover:text-white transition-colors tracking-tight font-serif">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="animate-fade-in-bottom-right">
                 <div className="relative">
                    <img src="/h2.jpg" alt="Review impact" className="rounded-[2.5rem] md:rounded-[4rem] h-[500px] w-full object-cover grayscale opacity-40 shadow-big" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-center">
                       <Shield className="h-16 w-16 text-[#A07A41] mb-8" />
                       <p className="text-white text-2xl font-serif italic mb-2 tracking-tight">"Review before you sign."</p>
                       <p className="text-[#A07A41] uppercase tracking-widest text-[10px] font-black italic">Contract Risk Analysis</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section ref={sectionRefs.whyChoose} data-section="whyChoose" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center font-sans">
              <div className="mb-12 md:mb-20 animate-fade-in-down font-sans">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight font-sans">Why Choose Our <br /><span className="italic font-light text-[#A07A41] font-serif">Review Services?</span></h2>
                 <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4 font-sans tracking-wide leading-relaxed uppercase">Most people skim contracts. That’s exactly why problems happen.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left font-sans">
                {[
                  { t: "Clause-Level Analysis", d: "Detailed, itemized breakdown of every critical contract term.", ani: "animate-fade-in-left" },
                  { t: "Practical Advice", d: "Clear and actionable recommendations for document changes.", ani: "animate-fade-in-bottom-left" },
                  { t: "Risk Enforcement Focus", d: "We look at things from a dispute and enforceability perspective.", ani: "animate-fade-in-top-right" },
                  { t: "UK Property Intel", d: "Highly specialized understanding of the UK property sector dynamics.", ani: "animate-fade-in-right" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-10 bg-[#2A454E]/20 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${item.ani}`}>
                     <CheckCircle className="h-8 w-8 text-[#A07A41] mb-10 group-hover:rotate-12 transition-transform" />
                     <h4 className="text-white font-serif font-bold text-xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight font-serif">{item.t}</h4>
                     <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed font-sans">{item.d}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 8. LEGAL COMPLIANCE */}
        <section ref={sectionRefs.legal} data-section="legal" className="py-16 md:py-24 bg-[#2A454E] border-y border-white/5 font-sans">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center font-sans">
              <div className="mb-12 md:mb-20 animate-fade-in-down font-sans">
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight font-sans tracking-wide">Compliance <span className="text-[#A07A41] italic font-serif"> & Standards.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center font-sans text-left">
                 <div className="bg-[#1B2D33]/40 p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-left border border-white/5 animate-fade-in-left font-sans">
                    <span className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-10 block font-serif tracking-widest leading-none italic pr-4">Protocol Framework</span>
                    <div className="space-y-6 font-sans">
                       {[
                         "Align with legal expectations",
                         "No misleading clauses overlooked",
                         "Clear understanding of obligations",
                         "Proper documentation structuring"
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-4 md:gap-6 group">
                            <Shield className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41]/10 group-hover:text-[#A07A41] transition-colors" />
                            <span className="text-gray-300 font-light text-base md:text text-lg italic group-hover:text-white transition-colors font-sans">{v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="space-y-8 md:space-y-10 text-left px-4 md:px-0 animate-fade-in-right font-sans">
                    <p className="text-gray-400 font-sans font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-6 md:pl-8 font-sans">
                       Our broader legal services also include <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and support for <strong>intellectual property dispute UK</strong> matters requiring structured <strong>legal response trademark UK</strong> documentation and <strong>trademark refusal response UK</strong> or <strong>trademark application support UK</strong> workflows for businesses.
                    </p>
                    <div className="flex items-center gap-10">
                       <Scale className="h-10 w-10 md:h-12 md:w-12 text-white/5" />
                       <div className="h-[1px] flex-grow bg-white/5"></div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center font-sans">
              <div className="mb-20 animate-fade-in-down font-sans">
                 <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase font-sans">
                    Review <span className="italic font-light text-[#A07A41] font-serif">Archive.</span>
                 </h2>
              </div>
              <div className="space-y-4 text-left font-sans">
                {[
                  { q: "Can I review documents myself?", a: "Yes, but legal language often hides strategic risks and enforcement nuances that are not obvious to non-legal professionals." },
                  { q: "How long does a review take?", a: "Typically 1–2 business days depending on the volume and complexity of the contract or agreement." },
                  { q: "Do you review commercial property contracts?", a: "Yes, we handle both high-end residential and professional commercial property documents with sector-specific expertise." },
                  { q: "Will you suggest changes?", a: "Absolutely. Practical recommendations and tactical wording improvements are a core part of the review report." }
                ].map((faq, idx) => (
                   <div key={idx} className="border border-white/5 rounded-3xl bg-[#2A454E]/20 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 animate-fade-in-up font-sans">
                    <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full p-10 flex items-center justify-between group">
                      <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === idx ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === idx ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === idx ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="border-t border-white/5 pt-10 text-gray-400 text-lg leading-relaxed font-light italic font-sans">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#2A454E] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/lawhero.jpg" alt="Final CTA Review" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto font-sans">
            <div className="animate-fade-in-up font-sans">
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tight uppercase font-sans">
                Review Before <br />
                <span className="italic font-light text-[#A07A41] font-serif">You Sign.</span>
              </h2>
              <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-8 font-sans">
                 Once a property agreement is signed, reversing terms becomes difficult. Get a professional review and make informed decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10 font-sans">
                <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                   <span className="relative z-10 font-black font-sans">Submit Document</span>
                   <ArrowRight className="h-6 w-6 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex flex-col items-center sm:items-start group cursor-pointer font-sans">
                   <p className="text-[#A07A41] font-black text-2xl italic mb-1 group-hover:text-white transition-colors font-serif">Book Consultation</p>
                   <div className="h-[2px] w-full bg-[#A07A41]/10 group-hover:bg-[#A07A41] transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default PropertyDocumentReviewPage;
