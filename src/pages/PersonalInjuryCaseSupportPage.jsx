import React, { useEffect, useState, useRef } from 'react';
import { 
  FileText, ClipboardCheck, AlertCircle, Clock, ShieldCheck, 
  ArrowRight, CheckCircle, Search, Layers, UserCheck, 
  Scale, BookOpen, ChevronDown, Mail, Phone, Heart, 
  Stethoscope, Users, Briefcase, Activity
} from 'lucide-react';

const PersonalInjuryCaseSupportPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(obs => obs && obs.disconnect());
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          ref={addToRefs}
          className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-[#2A454E]"
        >
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E] via-[#2A454E]/80 to-transparent z-10" />
            <img
              src="/hero.jpg"
              alt="Personal Injury Support"
              className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[kenburns_20s_ease-out_forwards]"
            />
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`max-w-2xl ${isVisible[0] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold">
                    Specialized Legal Support UK
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight">
                  Personal Injury <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">
                    Case Support Services UK
                  </span>
                </h1>

                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
                  Professional paralegal support for personal injury matters, including case documentation, evidence organization, claim preparation, and ongoing communication support.
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <a 
                    href="#contact" 
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-2xl overflow-hidden"
                  >
                    <span className="relative z-10">Get Case Support</span>
                    <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a 
                    href="#consultation" 
                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:border-[#A07A41] hover:bg-[#A07A41]/10"
                  >
                    Book Consultation
                  </a>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
                  {[
                    { t: "UK-focused case support", i: ShieldCheck },
                    { t: "Evidence-based documentation", i: FileText },
                    { t: "Clear and confidential process", i: UserCheck }
                  ].map((signal, i) => {
                    const Icon = signal.i;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-[#A07A41]" />
                        <span className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider font-semibold">{signal.t}</span>
                      </div>
                    );
                  })}

                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`relative hidden lg:flex justify-end ${isVisible[0] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative w-full max-w-md aspect-[4/5] skew-x-[-10deg] border border-[#A07A41]/20 overflow-hidden bg-[#1B2D33] shadow-biggest group">
                  <div className="absolute inset-0 skew-x-[10deg] w-[140%] h-full left-[-20%]">
                    <img src="/sec2.jpg" alt="Paralegal Work" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-10 left-10 right-10 z-20">
                    <Scale className="h-12 w-12 text-[#A07A41] mb-4" />
                    <h3 className="text-white font-serif text-2xl font-bold italic">Legal Precision.</h3>
                    <div className="h-[2px] w-12 bg-[#A07A41] mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS PERSONAL INJURY CASE SUPPORT? */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#2A454E] overflow-hidden border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`order-2 lg:order-1 ${isVisible[1] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                   <img src="/case.jpg" alt="Case Support" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-[#A07A41]/10 group-hover:opacity-0 transition-opacity"></div>
                </div>
              </div>
              
              <div className={`order-1 lg:order-2 ${isVisible[1] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-widest text-sm font-semibold">The Core Service</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                  What is Personal <br />
                  <span className="italic font-light text-[#A07A41]">Injury Case Support?</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">

                    Personal injury case support means assisting with the preparation, organization, and management of documents and evidence related to injury claims.
                  </p>
                  <p className="text-gray-400 text-base font-light leading-relaxed border-l-2 border-[#A07A41]/30 pl-6 italic">
                    This can include accident details, medical records, witness information, correspondence, timelines, and case summaries. In the UK, personal injury negligence claims commonly have a 3-year time limit, so early organization matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHO NEEDS THIS SERVICE? */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
             <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-6 ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
               Who Needs Personal <br />
               <span className="italic font-light text-[#A07A41]">Injury Case Support?</span>
             </h2>

             <div className="h-[2px] w-24 bg-[#A07A41] mx-auto"></div>
          </div>

          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { t: "Solicitors handling multiple injury claims", i: Briefcase },
              { t: "Law firms needing paralegal support", i: Scale },
              { t: "Claimants who need documentation organized", i: FileText },
              { t: "Legal teams preparing evidence bundles", i: Layers },
              { t: "Businesses handling workplace accident records", i: Users }
            ].map((item, i) => (
              <div 
                key={i}
                className={`group p-8 bg-[#2A454E] border border-white/5 rounded-2xl hover:border-[#A07A41]/50 transition-all duration-500 hover:-translate-y-2 shadow-xl flex flex-col items-center text-center ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="h-14 w-14 bg-[#1B2D33] rounded-xl flex items-center justify-center text-[#A07A41] mb-6 group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                  <item.i className="h-7 w-7" />
                </div>
                <p className="text-white font-serif text-sm md:text-base font-medium leading-relaxed group-hover:text-[#A07A41] transition-colors">
                  {item.t}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TYPES OF CASES WE SUPPORT */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className={`lg:w-1/3 ${isVisible[3] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Scope</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                  Personal Injury <br />
                  <span className="italic font-light text-[#A07A41]">Matters We Assist With.</span>
                </h2>

                <p className="text-gray-400 font-light leading-relaxed mb-10">
                  Our paralegal team provides comprehensive assistance across a wide range of injury-related legal workflows.
                </p>
                <div className="p-8 bg-[#1B2D33] border border-white/10 rounded-xl relative overflow-hidden group">
                  <Activity className="absolute -right-4 -bottom-4 h-24 w-24 text-white/5 group-hover:text-[#A07A41]/10 transition-colors" />
                  <p className="text-white italic text-base relative z-10 font-serif">"Structured evidence is the foundation of every strong claim."</p>

                </div>
              </div>

              <div className={`lg:w-2/3 grid sm:grid-cols-2 gap-6 ${isVisible[3] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                {[
                  "Road traffic accident claims",
                  "Workplace injury cases",
                  "Public place injury claims",
                  "Medical negligence documentation support",
                  "Slip, trip, and fall claims",
                  "Accident evidence preparation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-[#1B2D33] border border-white/5 rounded-xl group hover:border-[#A07A41]/30 transition-all shadow-lg">
                    <div className="h-2 w-2 rounded-full bg-[#A07A41] group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-300 font-serif text-base group-hover:text-white transition-colors">{item}</span>
                  </div>

                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT WE HANDLE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-6 ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 What Our Case <br />
                 <span className="italic font-light text-[#A07A41]">Support Includes.</span>
               </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Case file organization", d: "Meticulous structuring of all claim-related files." },
                { t: "Evidence and document indexing", d: "Clear indexing for rapid retrieval during claim reviews." },
                { t: "Medical record summaries", d: "Concise summaries of complex medical histories." },
                { t: "Accident timeline preparation", d: "Detailed chronological accounts of the incident." },
                { t: "Witness statement organization", d: "Coordinating and structuring witness input." },
                { t: "Communication tracking", d: "Logging all correspondence with insurers and third parties." },
                { t: "Claim form & correspondence support", d: "Professional assistance with drafting and filling." }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group p-10 bg-[#2A454E] border border-white/5 rounded-[2rem] hover:bg-[#A07A41] transition-all duration-700 shadow-2xl relative overflow-hidden ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CheckCircle className="h-10 w-10 text-[#A07A41] mb-6 group-hover:text-black transition-colors" />
                  <h4 className="text-white font-serif text-lg font-bold mb-3 group-hover:text-black transition-colors">{item.t}</h4>
                  <p className="text-gray-400 text-sm font-light group-hover:text-black/80 transition-colors">{item.d}</p>
                  <div className="absolute -bottom-4 -right-4 text-white/5 group-hover:text-black/10 transition-colors">
                    <CheckCircle className="h-32 w-32" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OUR CASE SUPPORT PROCESS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-24">
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-xs font-bold mb-6">Execution Path</span>
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white leading-tight ${isVisible[5] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Our Personal Injury <br />
                <span className="italic font-light text-[#A07A41]">Support Process.</span>
              </h2>

            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#A07A41]/20 hidden lg:block -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  { n: "01", t: "Case Intake Review", d: "We review the available documents and identify missing information." },
                  { n: "02", t: "Evidence Organization", d: "Medical records, accident details, photos, and reports are structured clearly." },
                  { n: "03", t: "Timeline Preparation", d: "A clear timeline is created to support case understanding." },
                  { n: "04", t: "Documentation Support", d: "We assist with summaries, forms, and legal support documents." },
                  { n: "05", t: "Ongoing Updates", d: "The case file is maintained and updated as new information arrives." }
                ].map((step, i) => (
                  <div 
                    key={i} 
                    className={`group bg-[#1B2D33] border border-white/10 p-8 rounded-2xl hover:border-[#A07A41] transition-all duration-500 shadow-biggest ${isVisible[5] ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="text-4xl font-serif font-black text-[#A07A41]/20 mb-6 group-hover:text-[#A07A41] transition-colors">{step.n}</div>
                    <h3 className="text-white font-serif text-lg font-bold mb-4 group-hover:text-[#A07A41] transition-colors">{step.t}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHY PROPER CASE SUPPORT MATTERS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${isVisible[6] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                  Why Personal Injury <br />
                  <span className="italic font-light text-[#A07A41]">Documentation Matters.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">

                    Weak documentation causes delays, confusion, and poor case preparation. A personal injury case often depends on clear evidence, timelines, medical records, and communication records.
                  </p>
                  <div className="p-10 bg-[#2A454E] border-l-4 border-[#A07A41] rounded-r-2xl shadow-2xl group hover:bg-[#A07A41] transition-all duration-500">
                    <span className="text-[#A07A41] group-hover:text-black font-black uppercase text-xs tracking-widest block mb-4">UK Protocol Insight</span>
                    <p className="text-white group-hover:text-black font-serif italic text-base leading-relaxed transition-all">
                      "Under the Pre-Action Protocol for Personal Injury Claims, defendants/insurers generally have up to 3 months to investigate. Organized documentation keeps the process controlled."
                    </p>

                  </div>
                </div>
              </div>

              <div className={`relative grid grid-cols-2 gap-6 ${isVisible[6] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-white/5 blur-[120px] -z-10"></div>
                {[
                  { t: "Claim Speed", i: Clock },
                  { t: "Evidence Integrity", i: ShieldCheck },
                  { t: "Process Clarity", i: Search },
                  { t: "Professional Prep", i: Scale }
                ].map((item, i) => (
                  <div key={i} className="p-10 bg-[#2A454E] border border-white/5 rounded-3xl text-center group hover:border-[#A07A41]/50 transition-all duration-500 shadow-xl">
                    <item.i className="h-10 w-10 text-[#A07A41] mx-auto mb-6 group-hover:scale-125 transition-transform" />
                    <span className="text-white font-serif font-bold text-sm tracking-widest uppercase">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY CHOOSE US? */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className={`${isVisible[7] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic animate-pulse-slow">
                   Why Choose <br />
                   <span className="text-[#A07A41]">Our Support?</span>
                 </h2>

                 <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-12 border-l border-[#A07A41] pl-8">
                   We offer elite paralegal execution tailored for UK personal injury matters, supporting solicitors, firms, and claimants with precision.
                 </p>
                 <div className="space-y-6">
                   {[
                     "Structured paralegal support",
                     "Clear case documentation",
                     "Confidential handling",
                     "UK-focused legal workflow understanding",
                     "Support for solicitors, firms, and claimants"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-6 group">
                        <div className="h-10 w-10 shrink-0 bg-[#1B2D33] border border-white/10 rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                           <CheckCircle size={20} />
                        </div>
                        <span className="text-white font-serif text-base font-medium group-hover:text-[#A07A41] transition-colors">{item}</span>

                     </div>
                   ))}
                 </div>
              </div>

              <div className={`relative ${isVisible[7] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="p-20 bg-[#1B2D33] rounded-[5rem] relative flex items-center justify-center group shadow-biggest border border-white/10">
                   <div className="absolute inset-0 border border-dashed border-[#A07A41]/20 rounded-[5rem] rotate-[-10deg] transition-transform duration-[20s] group-hover:rotate-0"></div>
                   <Briefcase size={140} className="text-[#A07A41] opacity-30 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="h-32 w-32 rounded-full border border-[#A07A41]/20 animate-ping"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. COMPLIANCE & LIMITATIONS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`p-12 md:p-20 bg-[#2A454E]/30 border border-[#A07A41]/20 rounded-[4rem] backdrop-blur-2xl shadow-biggest group hover:border-[#A07A41] transition-all duration-700 ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}>
               <AlertCircle size={48} className="text-[#A07A41] mx-auto mb-8 opacity-60 group-hover:scale-125 transition-transform" />
               <h2 className="text-white text-2xl md:text-4xl font-serif font-bold mb-8 italic">Professional Support Standards</h2>
               <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light italic">
                 "We support legal workflows through documentation, organization, and communication assistance. We do not make false promises, guarantee outcomes, or replace regulated legal advice where a solicitor is required."
               </p>
            </div>
          </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight ${isVisible[9] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Frequently Asked <br />
                 <span className="italic font-light text-[#A07A41]">Questions.</span>
               </h2>

            </div>

            <div className="space-y-6">
              {[
                { q: "Do you handle the full personal injury claim?", a: "We provide paralegal and case support. Solicitor-led legal representation may be required depending on the matter." },
                { q: "How quickly should I organize my documents?", a: "As early as possible. Personal injury claims commonly have strict time limits in the UK." },
                { q: "Can you prepare medical record summaries?", a: "Yes, we can assist with organizing and summarizing medical records for case preparation." },
                { q: "Do you offer No Win No Fee claims?", a: "No. We focus on support services. No Win No Fee arrangements are usually handled by solicitors under Conditional Fee Agreements." }
              ].map((faq, i) => (
                <div 
                  key={i}
                  className={`border border-white/10 rounded-3xl bg-[#1B2D33]/50 overflow-hidden transition-all duration-500 hover:border-[#A07A41]/30 ${isVisible[9] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-8 md:p-12 flex items-center justify-between group outline-none"
                  >
                    <span className={`text-left text-lg md:text-xl font-serif font-bold transition-colors ${activeFaq === i ? 'text-[#A07A41]' : 'text-white'}`}>{faq.q}</span>
                    <div className={`p-3 rounded-xl border border-white/10 transition-all duration-500 ${activeFaq === i ? 'bg-[#A07A41] rotate-180' : 'group-hover:border-[#A07A41]'}`}>
                       <ChevronDown className={`h-5 w-5 transition-colors ${activeFaq === i ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-8 md:px-12 ${activeFaq === i ? 'max-h-[500px] pb-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed border-l border-[#A07A41]/30 pl-8">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden"
          id="contact"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className={`p-16 md:p-28 bg-[#2A454E] border border-white/10 rounded-[6rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[10] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="absolute top-0 right-0 p-40 opacity-[0.02] scale-[6] rotate-[20deg] pointer-events-none group-hover:text-[#A07A41] transition-colors"><Scale size={200} /></div>
                
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase underline underline-offset-[24px] decoration-8 decoration-[#A07A41]/20">
                  Case Support <br />
                  <span className="italic font-light text-[#A07A41]">Ready.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">

                  Partner with us for specialized personal injury paralegal support. We ensure your documentation is structured, compliant, and ready for action.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
                   <div className="flex items-center gap-4 group cursor-pointer hover:scale-105 transition-transform">
                      <Mail size={24} className="text-[#A07A41]" />
                      <span className="text-white font-serif font-bold text-xl md:text-2xl italic group-hover:text-[#A07A41] transition-colors">legal@hsco.co</span>
                   </div>
                   <div className="flex items-center gap-4 group cursor-pointer hover:scale-105 transition-transform">
                      <Phone size={24} className="text-[#A07A41]" />
                      <span className="text-white font-serif font-bold text-xl md:text-2xl italic group-hover:text-[#A07A41] transition-colors">+44 20 745 9210</span>
                   </div>
                </div>

                <div 
                  role="button" 
                  className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden hover:scale-105"
                >
                   <span className="relative z-10">Start Your Case File</span>
                   <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* SEO FOOTER LINKS (Light Use) */}
      <footer className="bg-[#1B2D33] py-12 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-4 text-[10px] text-gray-500 flex flex-wrap justify-center gap-x-8 gap-y-4">
           <span>trademark objection response UK</span>
           <span>UKIPO objection reply</span>
           <span>trademark refusal response UK</span>
           <span>intellectual property dispute UK</span>
           <span>trademark application support UK</span>
           <span>legal response trademark UK</span>
        </div>
      </footer>
    </div>
  );
};

export default PersonalInjuryCaseSupportPage;
