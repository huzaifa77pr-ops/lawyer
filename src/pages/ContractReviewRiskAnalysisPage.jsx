import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileSearch, Database, BookOpen, Info, Inbox,
  LandmarkIcon, FileText, ClipboardList, PenTool,
  Lock, AlertTriangle, FileCheck, Layers
} from 'lucide-react';

const ContractReviewRiskAnalysisPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    why: false,
    analyze: false,
    process: false,
    types: false,
    strength: false,
    benefits: false,
    form: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    analyze: useRef(null),
    process: useRef(null),
    types: useRef(null),
    strength: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contract Review & Risk Analysis | H&S Co.";

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
      title: "Clause-by-Clause Review",
      desc: "Detailed analysis of terms and conditions to identify unclear or risky clauses.",
      points: ["Terms analysis", "Risk identification", "Clarity check"],
      icon: Search,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Risk Identification",
      desc: "Highlighting legal and financial risks, hidden liabilities, and potential dispute triggers.",
      points: ["Liability assessment", "Financial risk", "Conflict triggers"],
      icon: AlertTriangle,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Compliance Check",
      desc: "Ensuring the contract adheres to UK legal standards and specific industry regulations.",
      points: ["UK law compliance", "Regulatory standards", "Duty of care"],
      icon: ShieldCheck,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Recommendations & Revisions",
      desc: "Providing suggested changes and risk mitigation strategies to improve contract structure.",
      points: ["Suggested revisions", "Mitigation plans", "Better structuring"],
      icon: FileCheck,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { step: "01", title: "Document Review", desc: "We carefully examine the entire contract from start to finish.", anim: "animate-fade-in-left" },
    { step: "02", title: "Risk Analysis", desc: "We identify potential risks, liabilities, and unfavourable terms.", anim: "animate-fade-in-right" },
    { step: "03", title: "Legal Interpretation", desc: "We explain complex legal jargon in simple, actionable terms.", anim: "animate-fade-in-left" },
    { step: "14", title: "Report & Recommendations", desc: "You receive a clear summary with suggested revisions and actions.", anim: "animate-fade-in-right" }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/co4.jpg" alt="Contract Background" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/50 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold">Precision + Protection</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-left animation-delay-200">
                Contract Review & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Risk Analysis Services in the UK.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
                Thorough legal review of contracts to identify risks, protect your interests, and ensure clarity before you commit to legally binding agreements.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-right animation-delay-700">
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded transition-all hover:bg-[#A07A41] shadow-2xl flex items-center gap-3">
                  <span>Request Contract Review</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-white/5">
                  Consult a Legal Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY CONTRACT REVIEW MATTERS */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Why Contract Review <br />
                  <span className="italic font-light text-[#A07A41]">Is Critical.</span>
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-300 font-light">Contracts are legally binding. Even small clauses can create serious legal and financial consequences if left unexamined.</p>
                </div>
                <div className="space-y-4">
                  {[
                    "Hidden liabilities and pitfalls",
                    "Extremely unfavourable terms",
                    "Substantial financial loss",
                    "Prolonged and costly legal disputes",
                    "Unclear and ambiguous obligations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <AlertTriangle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 border-l-2 border-[#A07A41] bg-[#1B2D33]/20">
                   <div className="text-[#A07A41] font-bold text-sm uppercase tracking-widest italic">A proper review ensures clarity, protection, and control.</div>
                </div>
             </div>
             <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <img src="/agg.jpg" alt="Contract review" className="rounded-2xl shadow-biggest w-full object-cover aspect-video" />
             </div>
          </div>
        </section>

        {/* 3. WHAT WE ANALYSE (CORE SERVICES) */}
        <section ref={sectionRefs.analyze} data-section="analyze" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-16 ${visibleSections.analyze ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                   What We <span className="italic font-light text-[#A07A41]">Analyse.</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto font-light">Comprehensive contract services focused on risk mitigation and legal clarity.</p>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {coreServices.map((service, i) => (
                 <div key={i} className={`p-8 bg-[#2A454E]/30 border border-white/5 rounded hover:border-[#A07A41]/30 transition-all ${visibleSections.analyze ? service.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <service.icon className="h-10 w-10 text-[#A07A41] mb-6" />
                    <h3 className="text-xl font-serif font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{service.desc}</p>
                    <ul className="space-y-2 pt-6 border-t border-white/5">
                      {service.points.map((p, idx) => (
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

        {/* 4. OUR REVIEW PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10">
                   How We Review Your <br />
                   <span className="italic font-light text-[#A07A41]">Contract.</span>
                </h2>
                <img src="/doc.jpg" alt="Processing documents" className="rounded-2xl shadow-biggest w-full aspect-video object-cover" />
             </div>
             <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className={`p-8 bg-[#1B2D33] border border-white/5 rounded flex items-center gap-8 group hover:border-[#A07A41]/50 transition-all ${visibleSections.process ? step.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="text-5xl font-serif font-black text-[#A07A41]/20 group-hover:text-[#A07A41] transition-colors">{step.step}</div>
                     <div>
                        <h4 className="text-xl font-serif font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-gray-400 font-sans font-light text-sm">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. TYPES OF CONTRACTS WE REVIEW */}
        <section ref={sectionRefs.types} data-section="types" className="py-24 bg-[#1B2D33] border-b border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.types ? 'animate-fade-in-down' : 'opacity-0'}`}>
              Contracts We <span className="italic font-light text-[#A07A41]">Review.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Business agreements", 
                "Employment contracts", 
                "Service agreements", 
                "Partnership agreements", 
                "Lease agreements", 
                "Non-disclosure (NDAs)"
              ].map((item, i) => {
                const anims = ["animate-fade-in-left", "animate-fade-in-up", "animate-fade-in-right"];
                return (
                  <div key={i} className={`p-8 bg-[#2A454E]/40 border border-white/5 rounded hover:bg-[#A07A41] group transition-all duration-500 ${visibleSections.types ? anims[i % 3] : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <span className="text-white group-hover:text-black font-serif font-bold text-lg md:text-xl">{item}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-16 animate-fade-in-up animation-delay-500">
               <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">👉 If you’re signing a contract, it should be reviewed.</p>
            </div>
          </div>
        </section>

        {/* 6. WHAT MAKES OUR ANALYSIS STRONG */}
        <section ref={sectionRefs.strength} data-section="strength" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[70rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.strength ? 'animate-fade-in-up' : 'opacity-0'}`}>
               Why Our Analysis <br />
               <span className="italic font-light text-[#A07A41]">Is Reliable.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 { t: "Thorough Detail-Oriented Review", d: "We examine every comma and clause for absolute precision.", icon: Search },
                 { t: "UK law-focused expertise", d: "Knowledge of jurisdictions and statutory requirements in the UK.", icon: Landmark },
                 { t: "Practical, actionable advice", d: "We translate legal risks into business decisions you can make.", icon: Zap },
                 { t: "Protective Strategic Mindset", d: "Focused on securing the best possible legal position for you.", icon: Shield }
               ].map((item, i) => (
                  <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-2xl text-left hover:border-[#A07A41]/50 transition-all ${visibleSections.strength ? (i % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <item.icon className="h-8 w-8 text-[#A07A41] mb-6" />
                     <h4 className="text-xl font-serif font-bold text-white mb-4">{item.t}</h4>
                     <p className="text-gray-400 text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
               ))}
            </div>
            <div className="mt-16 ${visibleSections.strength ? 'animate-fade-in-up' : 'opacity-0'}">
                <p className="text-[#A07A41] font-bold text-sm uppercase tracking-widest">👉 We don’t just review—we provide strategic protection</p>
            </div>
          </div>
        </section>

        {/* 7. BENEFITS (CONVERSION SECTION) */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Benefits of Professional <br />
                  <span className="italic font-light text-[#A07A41]">Contract Review.</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Avoid costly mistakes and legal traps",
                    "Substantial reduction in overall legal risk",
                    "Dramatically improve contract clarity",
                    "Strengthen your negotiation position",
                    "Make fully informed strategic decisions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-300">
                       <CheckCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-lg font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                   <p className="text-white font-bold italic tracking-wide">"Prevention is always cheaper than disputes."</p>
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <img src="/p1.jpg" alt="Professional benefits" className="rounded-2xl shadow-biggest w-full aspect-video object-cover" />
             </div>
          </div>
        </section>

        {/* 8. REQUEST FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[40rem] mx-auto">
             <div className={`bg-[#1B2D33] p-10 rounded shadow-biggest ${visibleSections.form ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center uppercase tracking-widest">
                  Request <span className="text-[#A07A41]">Analysis.</span>
                </h2>
                <form className="space-y-6">
                  <input type="text" placeholder="Full name" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  <input type="text" placeholder="Contact Details" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  <input type="text" placeholder="Type of Contract" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  <textarea rows="4" placeholder="Brief description of requirements..." className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]"></textarea>
                  <div className="relative">
                    <input type="file" id="contract-upload" className="hidden" />
                    <label htmlFor="contract-upload" className="flex items-center justify-between pointer-events-auto cursor-pointer w-full bg-[#2A454E] border border-white/10 rounded p-4 text-gray-400 hover:border-[#A07A41]">
                        <span>Upload Contract</span>
                        <Inbox className="h-5 w-5 pointer-events-none" />
                    </label>
                  </div>
                  <button className="w-full py-4 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-sm rounded transition-all hover:bg-white flex items-center justify-center gap-3">
                    <span>Submit Your Contract</span>
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-4">Your documents are handled securely and confidentially.</p>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.faq ? 'animate-fade-in-left' : 'opacity-0'}`}>FAQs.</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "Why should I review a contract before signing?", a: "To avoid hidden risks, legal traps, and ensure you aren't agreeing to unfavourable terms." },
                  { q: "How long does a review typically take?", a: "Standard reviews are completed in 3-5 business days, depending on complexity." },
                  { q: "Can you suggest specific changes?", a: "Yes, our report includes actionable recommendations and revised wording where necessary." },
                  { q: "Is my contract documentation secure?", a: "Absolutely. All documents are handled with strict confidentiality and stored securely." },
                  { q: "Do you handle specialized business contracts?", a: "Yes, we cover everything from standard NDAs to complex partnership agreements." }
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
             <img src="/heroo.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                Protect Yourself <br />
                <span className="italic font-light text-[#A07A41]">Before You Sign.</span>
              </h2>
              <p className="text-gray-400 mb-12 max-w-xl mx-auto">Don’t take risks with legal agreements—get expert review from UK legal specialists.</p>
              <button className="px-8 py-4 bg-[#A07A41] text-black font-black tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-4 mx-auto group">
                 <span>Request Contract Review Today</span>
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ContractReviewRiskAnalysisPage;
