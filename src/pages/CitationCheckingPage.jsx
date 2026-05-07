import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileSearch, Database, BookOpen, Info, Inbox,
  LandmarkIcon, FileText, ClipboardList, PenTool,
  Bookmark, Quote, CheckCircle2, ListFilter
} from 'lucide-react';

const CitationCheckingPage = () => {
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
    document.title = "OSCOLA Citation Checking Services | H&S Co.";

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
      title: "Footnote Accuracy",
      desc: "Checking correct citation formats for case law, statutes, and legislation within your footnotes.",
      points: ["Format verification", "Case references", "Statutory checks"],
      icon: Quote,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Bibliography Formatting",
      desc: "Ensuring proper structure, correct ordering, and a consistent OSCOLA style throughout your bibliography.",
      points: ["Structured layout", "Correct ordering", "Style consistency"],
      icon: ListFilter,
      anim: "animate-fade-in-bottom-right"
    },
    {
      title: "Cross-Referencing",
      desc: "Meticulously matching every citation with its source to eliminate missing or broken references.",
      points: ["Source matching", "Link validation", "Error reduction"],
      icon: RefreshCcw,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Consistency & Compliance",
      desc: "A final pass to ensure a uniform citation style and full OSCOLA compliance across the entire document.",
      points: ["Uniform style", "Full OSCOLA compliance", "Refined formatting"],
      icon: ShieldCheck,
      anim: "animate-fade-in-bottom-left"
    }
  ];

  const processSteps = [
    { step: "01", title: "Document Review", desc: "We analyse all citations and references within your work.", anim: "animate-fade-in-left" },
    { step: "02", title: "Error Identification", desc: "We pinpoint incorrect, missing, or inconsistent citations.", anim: "animate-fade-in-right" },
    { step: "03", title: "Correction & Formatting", desc: "We apply the rigorous OSCOLA standards and rules.", anim: "animate-fade-in-left" },
    { step: "04", title: "Final Quality Check", desc: "We ensure 100% compliance and flawless consistency.", anim: "animate-fade-in-right" }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/bibhero.jpg" alt="Citation Background" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/50 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold">Academic + Professional Authority</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-left animation-delay-200">
                OSCOLA Citation Checking & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Referencing Services.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
                Accurate checking and correction of legal citations in full compliance with OSCOLA referencing standards to ensure your work meets strict UK legal requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-right animation-delay-700">
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded transition-all hover:bg-[#A07A41] shadow-2xl flex items-center gap-3">
                  <span>Request Citation Check</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-white/5">
                  Consult a Legal Editor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS OSCOLA & WHY IT MATTERS */}
        <section ref={sectionRefs.what} data-section="what" className="py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  What Is <br />
                  <span className="italic font-light text-[#A07A41]">OSCOLA Referencing?</span>
                </h2>
                <p className="text-gray-300 font-light mb-8 max-w-xl italic">OSCOLA is the official referencing system used in UK legal writing. It is the definitive standard for law dissertations, academic papers, and professional research documents.</p>
                <div className="grid grid-cols-2 gap-4 mb-12">
                   {["Law dissertations", "Academic papers", "Research data", "Court submissions"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-400 font-sans font-medium text-sm">
                         <div className="h-2 w-2 rounded-full bg-[#A07A41]"></div>
                         {item}
                      </div>
                   ))}
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Why Proper Citation <br />
                  <span className="italic font-light text-[#A07A41]">Is Critical.</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Loss of significant academic marks",
                    "Immediate rejection of legal submissions",
                    "Critical lack of professional credibility",
                    "Misrepresentation of primary sources",
                    "Severe confusion in legal arguments"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-l-2 border-[#A07A41] pl-6 bg-[#16272D]/30 py-4">
                   <p className="text-[#A07A41] font-bold text-sm uppercase tracking-widest italic">Accurate referencing ensures professional and academic integrity.</p>
                </div>
             </div>
             <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <img src="/bib1.jpg" alt="Citation precision" className="rounded-2xl shadow-biggest w-full object-cover h-[600px]" />
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-16 ${visibleSections.services ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                   Our OSCOLA <span className="italic font-light text-[#A07A41]">Checking Services.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {coreServices.map((item, i) => (
                 <div key={i} className={`p-8 bg-[#2A454E]/30 border border-white/5 rounded-xl hover:border-[#A07A41]/30 transition-all ${visibleSections.services ? item.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <item.icon className="h-10 w-10 text-[#A07A41] mb-6" />
                    <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                    <ul className="space-y-2 pt-6 border-t border-white/5">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-widest">
                          <CheckCircle2 className="h-3 w-3 text-[#A07A41]" />
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
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center text-left">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10">
                   How We Check Your <br />
                   <span className="italic font-light text-[#A07A41]">Citations.</span>
                </h2>
                <img src="/bib2.jpg" alt="OSCOLA standards" className="rounded-2xl shadow-biggest w-full h-[400px] object-cover" />
             </div>
             <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className={`p-8 bg-[#1B2D33] border border-white/5 rounded-xl flex items-center gap-8 group hover:border-[#A07A41]/50 transition-all ${visibleSections.process ? step.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="text-4xl font-serif font-black text-[#A07A41]/20 group-hover:text-[#A07A41] transition-all">{step.step}</div>
                     <div>
                        <h4 className="text-xl font-serif font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-gray-500 font-sans font-light text-sm">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. WHO THIS SERVICE IS FOR */}
        <section ref={sectionRefs.who} data-section="who" className="py-24 bg-[#1B2D33] border-b border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>
               Who Needs OSCOLA <br />
               <span className="italic font-light text-[#A07A41]">Citation Checking?</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                "Law students (LLB, LLM)", 
                "Researchers/Academics", 
                "Legal professionals", 
                "Law firms", 
                "Dissertation writers"
              ].map((item, i) => {
                 const diagonalAnims = ["animate-fade-in-top-left", "animate-fade-in-up", "animate-fade-in-top-right", "animate-fade-in-bottom-left", "animate-fade-in-bottom-right"];
                 return (
                    <div key={i} className={`p-8 bg-[#2A454E]/40 border border-white/5 rounded shadow-xl hover:bg-[#A07A41] group transition-all duration-700 ${visibleSections.who ? diagonalAnims[i % 5] : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                       <span className="text-white group-hover:text-black font-serif font-bold text-sm md:text-lg block">{item}</span>
                    </div>
                 );
              })}
            </div>
            <div className="mt-16 animate-fade-in-down animation-delay-500">
               <div className="text-[#A07A41] text-xs font-bold uppercase tracking-widest italic flex items-center justify-center gap-4">
                  <div className="w-12 h-[1px] bg-[#A07A41]"></div>
                  If your work requires OSCOLA, this service is essential.
                  <div className="w-12 h-[1px] bg-[#A07A41]"></div>
               </div>
            </div>
          </div>
        </section>

        {/* 6. RELIABILITY */}
        <section ref={sectionRefs.reliable} data-section="reliable" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.reliable ? 'animate-fade-in-down' : 'opacity-0'}`}>
               Why Our Citation <br />
               <span className="italic font-light text-[#A07A41]">Checking Stands Out.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { t: "Strict OSCOLA Compliance", d: "Zero-compromised adherence to the official OSCOLA handbook rules.", anim: "animate-fade-in-left" },
                 { t: "Academic Standard Mastery", d: "Designed to meet the high requirements of UK law schools and academic reviews.", anim: "animate-fade-in-up" },
                 { t: "Final Output Polishing", d: "Your document is returned fully formatted and submission-ready.", anim: "animate-fade-in-right" }
               ].map((item, i) => (
                  <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-2xl hover:border-[#A07A41]/50 transition-all ${visibleSections.reliable ? item.anim : 'opacity-0'}`}>
                     <CheckCircle className="h-8 w-8 text-[#A07A41] mb-6 mx-auto" strokeWidth={3} />
                     <h4 className="text-xl font-serif font-bold text-white mb-4">{item.t}</h4>
                     <p className="text-gray-500 text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
               ))}
            </div>
             <div className="mt-16 animate-fade-in-up">
                <p className="text-[#A07A41] font-bold text-sm uppercase tracking-widest">👉 We ensure your document is submission-ready</p>
            </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Benefits of OSCOLA <br />
                  <span className="italic font-light text-[#A07A41]">Citation Checking.</span>
                </h2>
                <div className="space-y-6 mb-12">
                  {[
                    "Drastically significantly improved academic grades",
                    "Massively professionalized final document quality",
                    "Critically reduced risk of submission rejection",
                    "Exceptionally clear and accurate legal references",
                    "Dramatically stronger research credibility"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-300">
                       <ShieldCheck className="h-6 w-6 text-[#A07A41]" />
                       <span className="text-lg font-light leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-[#2A454E]/40 border-l-4 border-[#A07A41] rounded-r-xl">
                   <p className="text-white font-serif italic text-lg opacity-80">"Proper referencing strengthens your entire legal document."</p>
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <img src="/a3.jpg" alt="Successful result" className="rounded-2xl shadow-biggest w-full aspect-[4/5] object-cover" />
             </div>
          </div>
        </section>

        {/* 8. FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[40rem] mx-auto">
             <div className={`bg-[#1B2D33] p-10 rounded shadow-biggest ${visibleSections.form ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center uppercase tracking-widest">
                   Request <span className="text-[#A07A41]">Check.</span>
                </h2>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                     <input type="text" placeholder="Full name" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                     <input type="text" placeholder="Contact Details" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                     <input type="text" placeholder="Document Type" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                     <input type="text" placeholder="Word Count" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  </div>
                  <textarea rows="4" placeholder="Brief description of requirements..." className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]"></textarea>
                  <div className="relative">
                    <input type="file" id="citation-upload" className="hidden" />
                    <label htmlFor="citation-upload" className="flex items-center justify-between pointer-events-auto cursor-pointer w-full bg-[#2A454E] border border-white/10 rounded p-4 text-gray-400 hover:border-[#A07A41] transition-all">
                        <span>Upload Document</span>
                        <Inbox className="h-5 w-5" />
                    </label>
                  </div>
                  <button className="w-full py-5 bg-[#A07A41] text-black font-black uppercase tracking-[0.2em] text-sm rounded shadow-lg transition-all hover:bg-white flex items-center justify-center gap-3">
                    <span>Submit Your Document</span>
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-4">Confidential handling guaranteed.</p>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>FAQs.</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "What is OSCOLA referencing exactly?", a: "OSCOLA (Oxford University Standard for the Citation of Legal Authorities) is the definitive referencing system for UK legal writing." },
                  { q: "Do you check both footnotes and bibliographies?", a: "Yes, we meticulously review both to ensure absolute formatting consistency across the entire document." },
                  { q: "Can you fix structural formatting issues?", a: "Precisely. We correct all citation-related formatting errors and structural inconsistencies." },
                  { q: "Is this service limited to law students?", a: "Not at all. We support academics, researchers, law firms, and legal professionals as well." },
                  { q: "Is my document handled with security?", a: "Yes, every document is treated with the highest level of professional confidentiality and security." }
                ].map((faq, i) => (
                  <div key={i} className={`border border-white/5 rounded-xl bg-[#2A454E]/40 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-6 flex items-center justify-between group">
                      <span className={`text-lg font-serif font-bold transition-colors ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-[#A07A41] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 px-6 ${activeFaq === i ? 'max-h-56 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="text-gray-400 border-t border-white/5 pt-6 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-32 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/qhe.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Ensure Your Citations Meet <br />
                <span className="italic font-light text-[#A07A41]">UK Standards.</span>
              </h2>
              <p className="text-gray-400 mb-12 max-w-xl mx-auto font-light leading-relaxed">Don’t risk losing vital marks or professional credibility due to incorrect referencing. Get expert citation assistance today.</p>
              <button className="px-10 py-5 bg-[#A07A41] text-black font-black tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-4 mx-auto group">
                 <span>Request OSCOLA Citation Check Today</span>
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

const RefreshCcw = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
);

export default CitationCheckingPage;
