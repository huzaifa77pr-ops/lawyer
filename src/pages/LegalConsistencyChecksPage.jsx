import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileSearch, Database, BookOpen, Info, Inbox,
  LandmarkIcon, FileText, ClipboardList, PenTool,
  GitMerge, CheckSquare, Scan, FileStack
} from 'lucide-react';

const LegalConsistencyChecksPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    why: false,
    services: false,
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
    services: useRef(null),
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
    document.title = "Legal Consistency Checks & Alignment | H&S Co.";

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
      title: "Terminology Consistency",
      desc: "Uniform use of legal terms and consistent naming of parties to avoid identity confusion.",
      points: ["Uniform terms", "Party naming", "Definition alignment"],
      icon: Scan,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Clause Alignment",
      desc: "Matching clauses across the document and eliminating potential contradictions.",
      points: ["Clause matching", "Conflict removal", "Logical cohesion"],
      icon: GitMerge,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Data & References",
      desc: "Accurate checking of dates, figures, and cross-references for absolute precision.",
      points: ["Date accuracy", "Numerical data", "Cross-references"],
      icon: CheckSquare,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Structural Consistency",
      desc: "Ensuring headings and numbering alignment and maintaining a logical flow.",
      points: ["Heading structure", "Numbering logic", "Clean flow"],
      icon: FileStack,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { step: "01", title: "Full Document Review", desc: "We examine the entire document in detail to map all interactions.", anim: "animate-fade-in-left" },
    { step: "02", title: "Inconsistency Identification", desc: "We detect contradictions, mismatches, and broken references.", anim: "animate-fade-in-right" },
    { step: "03", title: "Correction & Alignment", desc: "We correct all inconsistencies while strictly maintaining meaning.", anim: "animate-fade-in-left" },
    { step: "04", title: "Final Quality Check", desc: "A final pass ensures complete alignment across every page.", anim: "animate-fade-in-right" }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/aa.jpg" alt="Consistency Background" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/50 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold">Precision + Control</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-left animation-delay-200">
                Legal Consistency & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Document Alignment.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
                Ensuring your legal documents are internally consistent, accurate, and free from contradictions for total reliability under UK law.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-right animation-delay-700">
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded transition-all hover:bg-[#A07A41] shadow-2xl flex items-center gap-3">
                  <span>Request Consistency Check</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-white/5">
                  Speak to a Legal Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY CONSISTENCY MATTERS */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Why Legal Consistency <br />
                  <span className="italic font-light text-[#A07A41]">Is Critical.</span>
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-300 font-light">Inconsistent legal documents can lead to immediate failure in court or contract negotiations.</p>
                </div>
                <div className="space-y-4">
                  {[
                    "Widespread confusion and ambiguity",
                    "Significantly weakened legal arguments",
                    "Severe misinterpretation of binding terms",
                    "Immediate triggers for contract disputes",
                    "Rapid loss of professional credibility"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-gray-200 font-light italic">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 border-l-2 border-[#A07A41] bg-[#1B2D33]/20">
                   <p className="text-[#A07A41] font-bold text-sm uppercase tracking-widest">👉 Consistency ensures your document is clear, reliable, and legally strong.</p>
                </div>
             </div>
             <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <img src="/aa1.jpg" alt="Document alignment" className="rounded-2xl shadow-biggest w-full h-[550px] object-cover" />
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-16 ${visibleSections.services ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                   Our Consistency <span className="italic font-light text-[#A07A41]">Check Services.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
               {coreServices.map((item, i) => (
                 <div key={i} className={`p-8 bg-[#2A454E]/30 border border-white/5 rounded-2xl hover:border-[#A07A41]/30 transition-all ${visibleSections.services ? item.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <item.icon className="h-10 w-10 text-[#A07A41] mb-6" />
                    <h3 className="text-xl font-serif font-bold text-white mb-4 leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light italic">{item.desc}</p>
                    <ul className="space-y-2 pt-6 border-t border-white/5">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-widest">
                          <CheckCircle className="h-3 w-3 text-[#A07A41]" strokeWidth={3} />
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
        <section ref={sectionRefs.process} data-section="process" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 text-left">
                   How We Ensure <br />
                   <span className="italic font-light text-[#A07A41]">Document Consistency.</span>
                </h2>
                <img src="/aa2.jpg" alt="Alignment process" className="rounded-3xl shadow-biggest w-full h-[400px] object-cover" />
             </div>
             <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className={`p-8 bg-[#1B2D33] border border-white/5 rounded-xl flex items-center gap-8 group hover:border-[#A07A41]/50 transition-all ${visibleSections.process ? step.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="text-4xl font-serif font-black text-[#A07A41]/20 group-hover:text-[#A07A41] transition-all">{step.step}</div>
                     <div className="text-left">
                        <h4 className="text-xl font-serif font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-gray-500 font-sans font-light text-sm italic">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. DOCUMENTS WE HANDLE */}
        <section ref={sectionRefs.docs} data-section="docs" className="py-24 bg-[#1B2D33] border-b border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.docs ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Documents We <span className="italic font-light text-[#A07A41]">Check.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Contracts and agreements", 
                "Legal pleadings", 
                "Witness statements", 
                "Legal reports", 
                "Business legal documents", 
                "Academic legal writing"
              ].map((item, i) => {
                 const diagAnims = ["animate-fade-in-top-left", "animate-fade-in-up", "animate-fade-in-top-right", "animate-fade-in-bottom-left", "animate-fade-in-down", "animate-fade-in-bottom-right"];
                 return (
                    <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-2xl shadow-xl hover:bg-[#A07A41] group transition-all duration-700 ${visibleSections.docs ? diagAnims[i % 6] : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                       <span className="text-white group-hover:text-black font-serif font-bold text-sm md:text-xl block tracking-wide">{item}</span>
                    </div>
                 );
              })}
            </div>
             <div className="mt-16 animate-fade-in-down animation-delay-500">
               <div className="text-[#A07A41] text-xs font-bold uppercase tracking-widest italic flex items-center justify-center gap-4">
                  <div className="w-10 h-[1px] bg-[#A07A41]"></div>
                  Any document requiring absolute accuracy and precision.
                  <div className="w-10 h-[1px] bg-[#A07A41]"></div>
               </div>
            </div>
          </div>
        </section>

        {/* 6. WHAT MAKES OUR SERVICE DIFFERENT */}
        <section ref={sectionRefs.different} data-section="different" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.different ? 'animate-fade-in-down' : 'opacity-0'}`}>
               Why Our Consistency Check <br />
               <span className="italic font-light text-[#A07A41]">Stands Out.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { t: "Deep Attention to Detail", d: "A systematic pass through your entire document for hidden mismatches.", anim: "animate-fade-in-left" },
                 { t: "Legal Accuracy Focus", d: "Knowledge-based review of terms to ensure legal validity.", anim: "animate-fade-in-up" },
                 { t: "Unified Coherence", d: "We ensure your entire document reads as one unified and professional piece.", anim: "animate-fade-in-right" }
               ].map((item, i) => (
                  <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-3xl hover:border-[#A07A41]/50 transition-all ${visibleSections.different ? item.anim : 'opacity-0'}`}>
                     <Search className="h-10 w-10 text-[#A07A41] mb-6 mx-auto" strokeWidth={2} />
                     <h4 className="text-xl font-serif font-bold text-white mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-500 text-sm font-light leading-relaxed italic">{item.d}</p>
                  </div>
               ))}
            </div>
            <div className="mt-16 animate-fade-in-up">
                <p className="text-[#A07A41] font-bold text-sm uppercase tracking-widest italic">👉 We ensure your document reads as one unified piece</p>
            </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 text-left">
                  Benefits of Legal <br />
                  <span className="italic font-light text-[#A07A41]">Consistency Checks.</span>
                </h2>
                <div className="space-y-6 mb-12 text-left">
                  {[
                    "Massively reduced risk of internal disputes",
                    "Greatly improved clarity and total reliability",
                    "Substantially stronger overall legal positioning",
                    "Exceptional professional presentation and tone",
                    "Ensured final record of error-free documentation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 text-gray-300">
                       <ShieldCheck className="h-6 w-6 text-[#A07A41]" />
                       <span className="text-lg font-light leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-[#2A454E]/40 border-l-4 border-[#A07A41] rounded-r-2xl">
                   <p className="text-white font-serif italic text-xl opacity-90 leading-relaxed text-left italic">"Consistency strengthens both clarity and credibility."</p>
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <img src="/leg.jpg" alt="Consistency output" className="rounded-2xl shadow-biggest w-full aspect-[4/5] object-cover" />
             </div>
          </div>
        </section>

        {/* 8. FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[40rem] mx-auto">
             <div className={`bg-[#1B2D33] p-10 rounded shadow-biggest ${visibleSections.form ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center uppercase tracking-widest leading-relaxed">
                   Request <br /><span className="text-[#A07A41]">Consistency Check.</span>
                </h2>
                <form className="space-y-6">
                  <input type="text" placeholder="Full name" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                  <input type="text" placeholder="Contact Details" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                  <input type="text" placeholder="Document Type" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                  <textarea rows="4" placeholder="Brief description of requirements..." className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all"></textarea>
                  <div className="relative">
                    <input type="file" id="cons-upload" className="hidden" />
                    <label htmlFor="cons-upload" className="flex items-center justify-between pointer-events-auto cursor-pointer w-full bg-[#2A454E] border border-white/10 rounded p-4 text-gray-400 hover:border-[#A07A41] transition-all">
                        <span>Upload Document</span>
                        <Inbox className="h-5 w-5" />
                    </label>
                  </div>
                  <button className="w-full py-4 bg-[#A07A41] text-black font-black uppercase tracking-[0.2em] text-sm rounded shadow-2xl transition-all hover:bg-white flex items-center justify-center gap-4">
                    <span>Submit Your Document</span>
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-4">Confidential handling guaranteed.</p>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.faq ? 'animate-fade-in-top-right' : 'opacity-0'}`}>FAQs.</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "What exactly is a legal consistency check?", a: "It is a detailed audit of your document to ensure all parts align correctly, and no sections contradict or undermine each other." },
                  { q: "Do you change the core legal meaning?", a: "No, we strictly maintain your original intent while improving alignment and correcting internal inconsistencies." },
                  { q: "Can you check large-scale contracts?", a: "Yes, we specialize in high-stakes contracts, pleadings, and any complex legal or academic documentation." },
                  { q: "How long does the check typically take?", a: "Turnaround depends on complexity, but we provide rapid, reliable checks for submission-ready results." },
                  { q: "Is my documentation secure with you?", a: "Absolutely. All documents are handled with the highest level of professional security and confidentiality." }
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
             <img src="/q1.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                Ensure Your Legal Documents <br />
                <span className="italic font-light text-[#A07A41]">Are Fully Aligned.</span>
              </h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Don’t let hidden inconsistencies weaken your legal position. Request a professional alignment audit today.</p>
              <button className="px-12 py-5 bg-[#A07A41] text-black font-black tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-5 mx-auto group">
                 <span>Request Consistency Check Today</span>
                 <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default LegalConsistencyChecksPage;
