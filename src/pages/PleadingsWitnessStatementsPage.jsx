import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileSearch, Database, BookOpen, Info, Inbox,
  LandmarkIcon, FileText, ClipboardList
} from 'lucide-react';

const PleadingsWitnessStatementsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Initialize critical states as true to prevent blank sections on first load/certain browsers
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    why: true, // Making first few visible by default
    services: false,
    process: false,
    cases: false,
    strength: false,
    benefits: false,
    form: true, // Ensure form area is visible
    faq: true, // Ensure FAQ is visible
    cta: true  // Ensure CTA is visible
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    services: useRef(null),
    process: useRef(null),
    cases: useRef(null),
    strength: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pleadings & Witness Statement Drafting | H&S Co.";

    // Use a more inclusive threshold for long pages
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            setVisibleSections(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    }, { 
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before it enters
    });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const coreServices = [
    {
      title: "Pleadings Drafting",
      desc: "Comprehensive drafting of court documents defining the legal issues.",
      points: ["Statements of claim", "Defence statements", "Replies & counterclaims", "Legal submissions"],
      icon: FileSignature,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Witness Statements",
      desc: "Precise recording of witness testimony in a court-ready format.",
      points: ["Factual narration", "Structured presentation", "Evidence consistency", "Accurate details"],
      icon: Users,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Affidavits & Declarations",
      desc: "Sworn legal statements prepared to high standards of accuracy.",
      points: ["Sworn statements", "Supporting evidence", "Legal declarations", "Verified facts"],
      icon: Gavel,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Supporting Documents",
      desc: "Drafting of all necessary secondary documents for case support.",
      points: ["Exhibits listing", "Evidence summaries", "Formal notices", "Procedural docs"],
      icon: ClipboardList,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { step: "01", title: "Case Understanding", desc: "We gather all relevant facts and legal details to establish a solid foundation.", anim: "animate-fade-in-left" },
    { step: "02", title: "Legal Structuring", desc: "We organise information according to UK legal format and court requirements.", anim: "animate-fade-in-right" },
    { step: "03", title: "Review & Refinement", desc: "We prepared precise documents and perform a multi-stage review for accuracy.", anim: "animate-fade-in-left" },
    { step: "04", title: "Finalisation", desc: "Documents are finalised, formatted, and ready for formal submission to court.", anim: "animate-fade-in-right" }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/doc2.jpg" alt="Drafting Background" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/50 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold">Formal + Authoritative</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-right">
                Professional Drafting of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Pleadings & Witness Statements.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-400 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-300">
                Precise, structured, and court-ready legal documents prepared to support your case effectively across UK jurisdictions.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-left animation-delay-500">
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded transition-all hover:bg-[#A07A41] shadow-2xl flex items-center gap-3">
                  <span>Request Document Drafting</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-white/5">
                  Speak to a Legal Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY THESE DOCUMENTS MATTER */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-100'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Why Pleadings & Witness <br />
                  <span className="italic font-light text-[#A07A41]">Statements Are Critical.</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Case dismissal due to technicalities",
                    "Misrepresentation of critical facts",
                    "Loss of credibility in the courtroom",
                    "Unnecessary delays in proceedings",
                    "Weakening of strong legal arguments"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-100'}`}>
                <img src="/agr.jpg" alt="Legal drafting" className="rounded-2xl shadow-biggest w-full object-cover aspect-video" />
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-16 ${visibleSections.services ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                   Our <span className="italic font-light text-[#A07A41]">Drafting Services.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {coreServices.map((service, i) => (
                 <div key={i} className={`p-8 bg-[#2A454E]/30 border border-white/5 rounded hover:border-[#A07A41]/30 transition-all ${visibleSections.services ? service.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
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

        {/* 4. OUR PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10">
                   How We Prepare Your <br />
                   <span className="italic font-light text-[#A07A41]">Legal Documents.</span>
                </h2>
                <img src="/co8.jpg" alt="Process" className="rounded-2xl shadow-biggest w-full aspect-video object-cover" />
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

        {/* 5. CASES SUPPORTED */}
        <section ref={sectionRefs.cases} data-section="cases" className="py-24 bg-[#1B2D33] border-b border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.cases ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Cases We <span className="italic font-light text-[#A07A41]">Support.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {["Civil litigation", "Employment disputes", "Personal injury claims", "Property disputes", "Contract disputes", "Family law matters"].map((item, i) => {
                const anims = ["animate-fade-in-left", "animate-fade-in-up", "animate-fade-in-right"];
                return (
                  <div key={i} className={`p-8 bg-[#2A454E]/40 border border-white/5 rounded hover:bg-[#A07A41] group transition-all ${visibleSections.cases ? anims[i % 3] : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <span className="text-white group-hover:text-black font-serif font-bold text-lg md:text-xl">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. STRENGTH SECTION */}
        <section ref={sectionRefs.strength} data-section="strength" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.strength ? 'animate-fade-in-down' : 'opacity-0'}`}>
               What Makes Our <span className="italic font-light text-[#A07A41]">Drafting Strong.</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { t: "Clear & Precise Language", i: Search, a: "animate-fade-in-top-left" },
                 { t: "Logical Structure & Flow", i: TrendingUp, a: "animate-fade-in-top-right" },
                 { t: "UK Legal Compliance", i: ShieldCheck, a: "animate-fade-in-bottom-left" },
                 { t: "Accurate Representation", i: CheckCircle, a: "animate-fade-in-bottom-right" }
               ].map((item, i) => (
                  <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-xl hover:border-[#A07A41]/30 transition-all ${visibleSections.strength ? item.a : 'opacity-0'}`}>
                     <item.i className="h-10 w-10 text-[#A07A41] mb-6 mx-auto" />
                     <h4 className="text-xl font-serif font-bold text-white">{item.t}</h4>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Benefits of <span className="italic font-light text-[#A07A41]">Professional Drafting.</span>
                </h2>
                <div className="space-y-4">
                  {["Stronger case presentation", "Reduced legal errors", "Better court readiness", "Improved credibility", "Clear communication"].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-300">
                       <CheckCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-lg font-light">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <img src="/aa2.jpg" alt="Benefits" className="rounded-2xl shadow-biggest w-full aspect-video object-cover" />
             </div>
          </div>
        </section>

        {/* 8. REQUEST FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[40rem] mx-auto">
             <div className={`bg-[#1B2D33] p-10 rounded shadow-biggest transition-all duration-1000 ${visibleSections.form ? 'opacity-100' : 'opacity-100'}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center uppercase tracking-widest">
                  Drafting <span className="text-[#A07A41]">Request Form.</span>
                </h2>
                <form className="space-y-6">
                  <input type="text" placeholder="Full name" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  <input type="text" placeholder="Contact Details" className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]" />
                  <select className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]">
                     <option>Select Case Type</option>
                     <option>Civil Litigation</option>
                     <option>Personal Injury</option>
                  </select>
                  <textarea rows="4" placeholder="Brief case description..." className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41]"></textarea>
                  <button className="w-full py-4 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-sm rounded transition-all hover:bg-white flex items-center justify-center gap-3">
                    <span>Submit Your Request</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 lg:py-48 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 transition-all duration-1000 ${visibleSections.faq ? 'opacity-100' : 'opacity-100'}`}>FAQs.</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "What are pleadings?", a: "Formal written statements outlining claims or defences in court, framing the legal dispute." },
                  { q: "What is a witness statement?", a: "A written account of facts provided by a witness to support a case in court." },
                  { q: "Can these documents be used in court?", a: "Yes, they are fundamental for UK court proceedings and formal evidence." },
                  { q: "How long does drafting take?", a: "Usually a few business days depending on the complexity of the case facts." }
                ].map((faq, i) => (
                  <div key={i} className={`border border-white/5 rounded bg-[#2A454E]/40 overflow-hidden transition-all duration-700 ${visibleSections.faq ? 'opacity-100 translate-y-0' : 'opacity-100'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-6 flex items-center justify-between group">
                      <span className={`text-lg font-serif font-bold ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-[#A07A41] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-500 px-6 ${activeFaq === i ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
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
             <img src="/lawhero.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'opacity-100' : 'opacity-100'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                Ensure Your Legal Documents <br />
                <span className="italic font-light text-[#A07A41]">Are Court-Ready.</span>
              </h2>
              <button className="px-8 py-4 bg-[#A07A41] text-black font-black tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-4 mx-auto group">
                 <span>Request Professional Drafting Today</span>
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default PleadingsWitnessStatementsPage;
