import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileSearch, Database, BookOpen, Info, Inbox,
  LandmarkIcon, FileText, ClipboardList, PenTool,
  Edit3, AlignLeft, RefreshCcw, Type
} from 'lucide-react';

const LegalProofreadingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    why: false,
    review: false,
    process: false,
    docs: false,
    different: false,
    benefits: false,
    form: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    review: useRef(null),
    process: useRef(null),
    docs: useRef(null),
    different: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Legal Proofreading & Document Refinement | H&S Co.";

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

  const coreReviews = [
    {
      title: "Grammar & Language",
      desc: "Correction of grammatical errors and ensuring proper usage of UK legal terminology.",
      points: ["Grammar correction", "Legal terminology", "Consistent tone"],
      icon: Type,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Structure & Clarity",
      desc: "Refining logical flow and sentence construction to remove all possible ambiguity.",
      points: ["Logical flow", "Clear construction", "Ambiguity removal"],
      icon: AlignLeft,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Formatting & Consistency",
      desc: "Ensuring headings, layouts, and terminology align for a professional presentation.",
      points: ["Layout alignment", "Terminology consistency", "Professional formatting"],
      icon: Edit3,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Legal Precision",
      desc: "Identifying unclear clauses and highlighting inconsistencies to improve readability.",
      points: ["Clause clarity", "Highlighting issues", "Readability boost"],
      icon: ShieldCheck,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { step: "01", title: "Document Review", desc: "We carefully read and analyse your document to understand the context.", anim: "animate-fade-in-left" },
    { step: "02", title: "Error Identification", desc: "We pinpoint issues in grammar, structure, tone, and overall clarity.", anim: "animate-fade-in-right" },
    { step: "03", title: "Refinement & Editing", desc: "We improve the document while meticulously preserving the legal meaning.", anim: "animate-fade-in-left" },
    { step: "04", title: "Final Quality Check", desc: "A final pass ensures consistency and professional grade presentation.", anim: "animate-fade-in-right" }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/doc4.jpg" alt="Proofreading Background" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/50 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold">Precision + Professionalism</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-left animation-delay-200">
                Professional Legal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Proofreading & Refinement.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
                Accurate proofreading and structural refinement of legal documents to ensure clarity, precision, and the highest standards of professionalism in the UK.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-right animation-delay-700">
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded transition-all hover:bg-[#A07A41] shadow-2xl flex items-center gap-3">
                  <span>Request Legal Proofreading</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-white/5">
                  Speak to a Legal Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY LEGAL PROOFREADING MATTERS */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Why Precision in <br />
                  <span className="italic font-light text-[#A07A41]">Legal Documents Is Critical.</span>
                </h2>
                <p className="text-gray-300 font-light mb-8 max-w-xl">In legal documents, even small errors can cause devastating ripple effects throughout your case or business operations.</p>
                <div className="space-y-4">
                  {[
                    "Severe misinterpretation of binding terms",
                    "Weakening of strong legal arguments",
                    "Immediate loss of professional credibility",
                    "Contractual confusion and ambiguity",
                    "High risk of easily avoidable disputes"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                   <div className="text-[#A07A41] font-bold text-sm uppercase tracking-widest flex items-center gap-3">
                     <span className="w-10 h-[1px] bg-[#A07A41]"></span>
                     Legal proofreading ensures your document is clear and reliable.
                   </div>
                </div>
             </div>
             <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <img src="/no1.jpg" alt="Precise work" className="rounded-2xl shadow-biggest w-full object-cover h-[500px]" />
             </div>
          </div>
        </section>

        {/* 3. WHAT WE REVIEW (CORE SERVICES) */}
        <section ref={sectionRefs.review} data-section="review" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-16 ${visibleSections.review ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                   Our Proofreading <span className="italic font-light text-[#A07A41]">Services.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {coreReviews.map((item, i) => (
                 <div key={i} className={`p-8 bg-[#2A454E]/30 border border-white/5 rounded-xl hover:border-[#A07A41]/30 transition-all ${visibleSections.review ? item.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <item.icon className="h-10 w-10 text-[#A07A41] mb-6" />
                    <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                    <ul className="space-y-2 pt-6 border-t border-white/5">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-widest">
                          <div className="w-1 h-1 rounded-full bg-[#A07A41]"></div>
                          {p}
                        </li>
                      ))}
                    </ul>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. OUR PROOFREADING PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10">
                   How We Refine Your <br />
                   <span className="italic font-light text-[#A07A41]">Legal Documents.</span>
                </h2>
                <img src="/doc1.jpg" alt="Editing legal files" className="rounded-2xl shadow-biggest w-full h-[400px] object-cover" />
             </div>
             <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className={`p-8 bg-[#1B2D33] border border-white/5 rounded flex items-center gap-8 group hover:border-[#A07A41]/50 transition-all ${visibleSections.process ? step.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="text-4xl font-serif font-black text-[#A07A41]/20 group-hover:text-[#A07A41] transition-colors">{step.step}</div>
                     <div>
                        <h4 className="text-xl font-serif font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-gray-500 font-sans font-light text-sm">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. DOCUMENTS WE PROOFREAD */}
        <section ref={sectionRefs.docs} data-section="docs" className="py-24 bg-[#1B2D33] border-b border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.docs ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Documents We <span className="italic font-light text-[#A07A41]">Handle.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Contracts and agreements", 
                "Legal pleadings", 
                "Witness statements", 
                "Legal reports", 
                "Business legal documents", 
                "Correspondence and notices"
              ].map((item, i) => {
                const anims = ["animate-fade-in-left", "animate-fade-in-up", "animate-fade-in-right"];
                return (
                  <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-xl hover:bg-[#A07A41] group transition-all duration-500 ${visibleSections.docs ? anims[i % 3] : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <span className="text-white group-hover:text-black font-serif font-bold text-lg md:text-xl">{item}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-16 animate-fade-in-down animation-delay-500">
               <p className="text-[#A07A41] text-xs font-bold uppercase tracking-widest italic">👉 If it’s a legal document, it should be professionally refined.</p>
            </div>
          </div>
        </section>

        {/* 6. WHAT MAKES OUR PROOFREADING DIFFERENT */}
        <section ref={sectionRefs.different} data-section="different" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.different ? 'animate-fade-in-down' : 'opacity-0'}`}>
               What Makes Our <br />
               <span className="italic font-light text-[#A07A41]">Proofreading Different.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { t: "Legal Clarity Focus", d: "We look beyond basic grammar to ensure legal clarity and precision.", icon: Search, anim: "animate-fade-in-left" },
                 { t: "Unmatched Attention to Detail", d: "Every comma and junction is checked for contextual accuracy.", icon: Zap, anim: "animate-fade-in-up" },
                 { t: "Structural Editing", d: "We refine the logic of your document while preserving original meaning.", icon: Layers, anim: "animate-fade-in-right" }
               ].map((item, i) => (
                  <div key={i} className={`p-12 bg-[#1B2D33] border border-white/5 rounded-2xl hover:border-[#A07A41]/50 transition-all ${visibleSections.different ? item.anim : 'opacity-0'}`}>
                     <item.icon className="h-10 w-10 text-[#A07A41] mb-6 mx-auto" />
                     <h4 className="text-xl font-serif font-bold text-white mb-4">{item.t}</h4>
                     <p className="text-gray-500 text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Benefits of Professional <br />
                  <span className="italic font-light text-[#A07A41]">Proofreading.</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Significantly improved clarity and readability",
                    "Massive reduction in risk of misinterpretation",
                    "Stronger and more professional impression",
                    "Ensured record of error-free documentation",
                    "Dramatically better overall legal communication"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-300">
                       <CheckCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-lg font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-xl">
                   <p className="text-white font-serif italic text-lg leading-relaxed">"Small improvements can prevent big legal problems."</p>
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-top-right' : 'opacity-0'}`}>
                <img src="/saa3.jpg" alt="Better outcomes" className="rounded-2xl shadow-biggest w-full object-cover aspect-square" />
             </div>
          </div>
        </section>

        {/* 8. REQUEST FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[40rem] mx-auto">
             <div className={`bg-[#1B2D33] p-10 rounded shadow-biggest ${visibleSections.form ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center uppercase tracking-widest">
                  Request <span className="text-[#A07A41]">Proofreading.</span>
                </h2>
                <form className="space-y-6">
                  <input type="text" placeholder="Full name" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  <input type="text" placeholder="Contact Details" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  <input type="text" placeholder="Document Type" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  <textarea rows="4" placeholder="Brief description of requirements..." className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]"></textarea>
                  <div className="relative">
                    <input type="file" id="doc-upload" className="hidden" />
                    <label htmlFor="doc-upload" className="flex items-center justify-between pointer-events-auto cursor-pointer w-full bg-[#2A454E] border border-white/10 rounded p-4 text-gray-400 hover:border-[#A07A41]">
                        <span>Upload Document</span>
                        <Inbox className="h-5 w-5 pointer-events-none" />
                    </label>
                  </div>
                  <button className="w-full py-4 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-sm rounded transition-all hover:bg-white flex items-center justify-center gap-3">
                    <span>Submit Your Document</span>
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-4">Confidential handling guaranteed.</p>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>FAQs.</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "What exactly is legal proofreading?", a: "It is the detailed review of legal documents to ensure absolute accuracy in grammar, clarity, and logical structure." },
                  { q: "Do you change the legal meaning of the document?", a: "No, we strictly preserve the original legal intent while refining the delivery and clarity of the message." },
                  { q: "How long does a typical proofreading task take?", a: "Timelines depend on the length and complexity of the document, but we prioritize fast turnaround." },
                  { q: "Is my document handled confidentially?", a: "Yes, we treat every document with the highest level of security and confidentiality protocols." },
                  { q: "Can you proofread complex contracts?", a: "Yes, we proofread contracts, pleadings, witness statements, and any formal legal communication." }
                ].map((faq, i) => (
                  <div key={i} className={`border border-white/5 rounded bg-[#2A454E]/40 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-6 flex items-center justify-between group">
                      <span className={`text-lg font-serif font-bold transition-colors ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-[#A07A41] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 px-6 ${activeFaq === i ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="text-gray-400 border-t border-white/5 pt-6">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-24 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/5hero.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                Ensure Your Legal Documents <br />
                <span className="italic font-light text-[#A07A41]">Are Clear and Error-Free.</span>
              </h2>
              <p className="text-gray-400 mb-12 max-w-xl mx-auto">Don’t risk mistakes that could compromise your legal position—get professional legal proofreading today.</p>
              <button className="px-8 py-4 bg-[#A07A41] text-black font-black tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-4 mx-auto group">
                 <span>Request Proofreading Today</span>
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

// Internal icon for different section
const Layers = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
);

export default LegalProofreadingPage;
