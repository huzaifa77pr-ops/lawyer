import React, { useEffect, useState, useRef } from 'react';
import { 
  FileSearch, Search, ShieldCheck, FileText, ArrowRight, 
  CheckCircle, Scale, Database, BookOpen, Clock, 
  ChevronDown, Mail, Phone, ShieldAlert, AlertCircle,
  Briefcase, Users, Layout, Layers, HardHat, Gavel
} from 'lucide-react';

const CriminalLawResearchPage = () => {
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
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E] via-[#2A454E]/90 to-transparent z-10" />
            <img
              src="/case.jpg"
              alt="Criminal Law Research"
              className="w-full h-full object-cover object-center opacity-30 scale-105 animate-[kenburns_20s_ease-out_forwards]"
            />
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-4xl ${isVisible[0] ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-white/5 border border-white/10 rounded-full">
                <div className="h-1.5 w-1.5 rounded-full bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold">
                  High-Precision Case Support
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                Criminal Law <br />
                <span className="italic font-light text-[#A07A41]">Research Support UK</span>
              </h1>
              
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl">
                Structured legal research and documentation support for criminal law matters, helping legal teams prepare cases with clarity, accuracy, and organized information.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-20">
                <a 
                  href="#contact" 
                  className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-biggest"
                >
                  <span className="relative z-10">Request Research Support</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="#consultation" 
                  className="group flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:border-[#A07A41] hover:bg-[#A07A41]/10"
                >
                  Book Consultation
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl border-t border-white/10 pt-12">
                 {[
                   { t: "UK legal research support", i: Search },
                   { t: "Structured documentation workflows", i: Layout },
                   { t: "Confidential case handling", i: ShieldCheck }
                 ].map((signal, i) => {
                   const Icon = signal.i;
                   return (
                     <div key={i} className="flex items-start gap-4 group">
                       <Icon className="h-6 w-6 text-[#A07A41] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                       <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold leading-tight">{signal.t}</span>
                     </div>
                   );
                 })}

              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS CRIMINAL LAW RESEARCH SUPPORT */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <div className={`lg:col-span-7 ${isVisible[1] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-widest text-xs font-semibold">Analytical Foundation</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
                  What is Criminal Law <br />
                  <span className="italic font-light text-[#A07A41]">Research Support?</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-lg font-light leading-relaxed border-l-2 border-[#A07A41] pl-8">
                    Criminal law research support involves assisting with the analysis, organization, and preparation of legal materials related to criminal cases.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 pt-6">
                    {[
                      { t: "Statute Review", d: "Legal framework analysis" },
                      { t: "Case File Org", d: "Evidence indexing" },
                      { t: "Research Summaries", d: "Structured briefs" },
                      { t: "Team Support", d: "Backend documentation" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 bg-[#1B2D33] border border-white/5 rounded-2xl group hover:border-[#A07A41]/30 transition-all">
                        <CheckCircle className="h-5 w-5 text-[#A07A41] mt-1 shrink-0" />
                        <div>
                           <h4 className="text-white font-serif font-bold text-base mb-1">{item.t}</h4>
                           <p className="text-gray-500 text-[11px] uppercase tracking-widest font-bold">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-400 text-base font-light italic opacity-80 pt-8 flex items-center gap-4">
                    <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                    "👉 This is backend legal support—not legal representation."
                  </p>
                </div>
              </div>
              
              <div className={`lg:col-span-5 relative ${isVisible[1] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative p-12 bg-[#1B2D33] rounded-[3rem] border border-white/10 shadow-biggest group overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 transition-transform">
                      <Gavel size={200} />
                   </div>
                   <div className="relative z-10">
                      <Database className="h-12 w-12 text-[#A07A41] mb-10" strokeWidth={1} />
                      <h3 className="text-white font-serif text-3xl font-bold italic mb-6 leading-tight">Structured Data. <br />Clear Strategy.</h3>
                      <div className="h-1 w-16 bg-[#A07A41] mb-8"></div>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">
                        We leverage extensive legal databases to ensure your case preparation is built on verified statutes and precedents.
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHO NEEDS THIS SERVICE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6">Target Professionals</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Who Uses Criminal Law <br />
                 <span className="italic font-light text-[#A07A41]">Research Support?</span>
               </h2>
               <div className="h-[2px] w-24 bg-[#A07A41] mb-10"></div>
               <p className="text-gray-400 text-base max-w-2xl font-light italic">
                 👉 If your case depends on accurate research, weak preparation is not an option.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Solicitors handling criminal cases", i: Briefcase, d: "Focus on advocacy while we handle research." },
                { t: "Law firms needing research assistance", i: Scale, d: "Scale your capacity without overhead." },
                { t: "Legal professionals preparing strategy", i: Gavel, d: "Verify precedents and statutory limits." },
                { t: "Students or trainees in research", i: BookOpen, d: "Expert guidance for complex legal analysis." },
                { t: "Teams managing complex documentation", i: Layers, d: "Meticulous indexing of case evidence." }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`group p-10 bg-[#2A454E] border border-white/5 rounded-3xl hover:border-[#A07A41]/40 transition-all duration-500 shadow-biggest flex flex-col items-start ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="h-12 w-12 bg-[#1B2D33] rounded-2xl flex items-center justify-center text-[#A07A41] mb-8 group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                    <item.i className="h-6 w-6" />
                  </div>
                  <h3 className="text-white font-serif text-xl font-bold mb-4 group-hover:text-[#A07A41] transition-colors leading-tight">
                    {item.t}
                  </h3>
                  <p className="text-gray-500 text-[11px] uppercase tracking-widest font-bold leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHAT WE HANDLE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${isVisible[3] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Service Scope</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tighter">
                  What We Handle in <br />
                  <span className="italic font-light text-[#A07A41]">Criminal Law Research.</span>
                </h2>
                <div className="space-y-4">
                  {[
                    { t: "Legal research on statutes and case law", i: FileSearch },
                    { t: "Case file organization and indexing", i: Layout },
                    { t: "Evidence and document structuring", i: Layers },
                    { t: "Timeline preparation for case events", i: Clock },
                    { t: "Research summaries and reports", i: FileText },
                    { t: "Supporting documentation for prep", i: ShieldCheck }
                  ].map((handle, i) => {
                    const Icon = handle.i;
                    return (
                      <div key={i} className="flex items-center gap-6 p-6 bg-[#1B2D33] border border-white/5 rounded-2xl group hover:bg-[#A07A41] transition-all duration-500">
                        <Icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                        <span className="text-white font-serif text-base font-bold group-hover:text-black transition-colors">{handle.t}</span>
                      </div>
                    );
                  })}

                </div>
              </div>

              <div className={`relative ${isVisible[3] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6 mt-12">
                       <div className="p-8 bg-[#1B2D33] rounded-3xl border border-white/5 aspect-square flex flex-col justify-end group hover:border-[#A07A41]/30 transition-all">
                          <Scale className="h-10 w-10 text-[#A07A41] mb-6" />
                          <p className="text-white font-serif text-lg italic">Verified Statutes.</p>
                       </div>
                       <div className="p-8 bg-[#1B2D33] rounded-3xl border border-white/5 aspect-square flex flex-col justify-end group hover:border-[#A07A41]/30 transition-all">
                          <ShieldAlert className="h-10 w-10 text-[#A07A41] mb-6" />
                          <p className="text-white font-serif text-lg italic">Risk Avoidance.</p>
                       </div>
                    </div>
                    <div className="space-y-6">
                       <div className="p-8 bg-[#1B2D33] rounded-3xl border border-white/5 aspect-square flex flex-col justify-end group hover:border-[#A07A41]/30 transition-all">
                          <Database className="h-10 w-10 text-[#A07A41] mb-6" />
                          <p className="text-white font-serif text-lg italic">Data Driven.</p>
                       </div>
                       <div className="p-8 bg-[#1B2D33] rounded-3xl border border-white/5 aspect-square flex flex-col justify-end group hover:border-[#A07A41]/30 transition-all">
                          <CheckCircle className="h-10 w-10 text-[#A07A41] mb-6" />
                          <p className="text-white font-serif text-lg italic">Accuracy First.</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR RESEARCH PROCESS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Our Criminal Law <br />
                 <span className="italic font-light text-[#A07A41]">Research Process.</span>
               </h2>
               <div className="h-[1px] w-24 bg-[#A07A41] mx-auto mb-10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { n: "01", t: "Case Brief Review", d: "We understand the scope and requirements of the case." },
                { n: "02", t: "Research & Analysis", d: "Relevant statutes, precedents, and materials are identified." },
                { n: "03", t: "Documentation Structuring", d: "Information is organized into usable formats." },
                { n: "04", t: "Summary Preparation", d: "Clear research summaries are prepared." },
                { n: "05", t: "Delivery & Support", d: "You receive structured materials ready for use." }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className={`group p-10 bg-[#2A454E] border border-white/5 rounded-3xl flex flex-col items-center text-center hover:bg-[#A07A41] transition-all duration-700 relative overflow-hidden ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="h-14 w-14 rounded-full bg-[#1B2D33] flex items-center justify-center text-[#A07A41] font-serif font-black text-xl mb-8 group-hover:bg-black group-hover:text-[#A07A41] transition-all">
                    {step.n}
                  </div>
                  <h4 className="text-white font-serif text-lg font-bold mb-4 group-hover:text-black transition-colors">{step.t}</h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed group-hover:text-black/80 transition-colors">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY RESEARCH MATTERS IN CRIMINAL LAW */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${isVisible[5] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight leading-none">
                  Why Accurate Legal <br />
                  <span className="italic font-light text-[#A07A41]">Research is Critical.</span>
                </h2>
                
                <div className="space-y-8">
                   <div className="p-8 bg-[#1B2D33] border-l-4 border-[#A07A41] rounded-r-2xl shadow-biggest">
                      <p className="text-white italic text-base font-serif leading-relaxed">
                        "In criminal law, details matter. Weak research leads to misinterpretation of legal provisions, poor case preparation, and significant delays."
                      </p>
                   </div>
                   <div className="grid sm:grid-cols-2 gap-10 pt-4">
                      <div className="space-y-4">
                         <span className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.2em]">Crucial Factors</span>
                         <ul className="space-y-3">
                            {["Correct interpretation", "Strong evidence", "Proper preparation"].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm italic">
                                 <CheckCircle size={14} className="text-[#A07A41]" /> {item}
                              </li>
                            ))}
                         </ul>
                      </div>
                      <div className="space-y-4">
                         <span className="text-red-500/60 text-[10px] font-black uppercase tracking-[0.2em]">The Risks</span>
                         <ul className="space-y-3">
                            {["Misinterpretation", "Delays", "Inefficiencies"].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-gray-500 text-sm italic">
                                 <div className="h-1 w-1 rounded-full bg-red-500/40"></div> {item}
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </div>
              </div>

              <div className={`${isVisible[5] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-biggest group aspect-[4/5]">
                    <img src="/leg.jpg" alt="Critical Research" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/20 to-transparent"></div>
                    <div className="absolute bottom-16 left-16 z-20">
                       <span className="text-[#A07A41] font-serif text-6xl font-black italic opacity-20">DETAILS.</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className={`${isVisible[6] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight italic">
                    Why Choose Our <br />
                    <span className="text-[#A07A41]">Research Support?</span>
                  </h2>
                  <p className="text-gray-400 text-base font-light leading-relaxed mb-12 max-w-lg italic border-l border-[#A07A41] pl-8">
                    Most people underestimate how much poor research affects outcomes. We focus on accuracy, relevance, and confidentiality.
                  </p>
               </div>

               <div className={`grid gap-4 ${isVisible[6] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 {[
                   "Structured legal research workflows",
                   "Clear and organized outputs",
                   "Focus on accuracy and relevance",
                   "Confidential handling of cases",
                   "Support for legal professionals"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-7 bg-[#2A454E] border border-white/5 rounded-2xl group hover:border-[#A07A41]/40 transition-all duration-500 shadow-xl">
                      <span className="text-white font-serif text-lg font-bold group-hover:text-[#A07A41] transition-colors">{item}</span>
                      <div className="h-10 w-10 bg-[#1B2D33] rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                         <ArrowRight size={18} />
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* 8. CONFIDENTIALITY & LIMITATIONS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`p-16 md:p-32 bg-[#1B2D33] border border-[#A07A41]/20 rounded-[4rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[7] ? 'animate-fade-in-up' : 'opacity-0'}`}>
               <ShieldCheck size={64} className="text-[#A07A41] mx-auto mb-10 opacity-60 group-hover:scale-125 transition-transform" strokeWidth={1} />
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-12 italic tracking-tight underline underline-offset-[16px] decoration-[#A07A41]/20">Confidentiality & Professional Standards</h2>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 pt-8">
                 {[
                   "Secure data handling",
                   "Confidential processing",
                   "Support role only",
                   "Distinction critical"
                 ].map((note, i) => (
                   <div key={i} className="flex flex-col items-center gap-4">
                      <div className="h-[1px] w-12 bg-[#A07A41]/40"></div>
                      <p className="text-gray-300 font-serif text-lg italic">{note}</p>
                   </div>
                 ))}
               </div>
               <p className="mt-20 text-gray-500 text-xs italic tracking-widest uppercase">No unauthorized legal advice provided.</p>
            </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Common Queries</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tighter ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Frequently Asked <br />
                 <span className="italic font-light text-[#A07A41]">Questions.</span>
               </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Do you provide legal advice?", a: "No. We provide research and documentation support only. We do not provide legal representation or unauthorized legal advice." },
                { q: "Can you assist with ongoing cases?", a: "Yes, we support documentation and research for active cases at any stage of the preparation process." },
                { q: "Is the information confidential?", a: "Absolutely. All case data and information are handled with the highest level of security and professional confidentiality." },
                { q: "How long does research take?", a: "Depending on the complexity of the statutes and case law involved, it typically takes between 1–3 business days." }
              ].map((faq, i) => (
                <div 
                  key={i}
                  className={`border border-white/10 rounded-2xl bg-[#2A454E] overflow-hidden transition-all duration-500 hover:border-[#A07A41]/30 shadow-xl ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-8 md:p-10 flex items-center justify-between group outline-none"
                  >
                    <span className={`text-left text-lg font-serif font-bold transition-colors ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`shrink-0 p-3 rounded-xl border border-white/5 transition-all duration-500 ${activeFaq === i ? 'bg-[#A07A41] rotate-180' : 'group-hover:border-[#A07A41]'}`}>
                       <ChevronDown className={`h-5 w-5 transition-colors ${activeFaq === i ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] px-8 md:px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm font-light font-sans leading-relaxed border-l-2 border-[#A07A41]/20 pl-8 italic">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-60 bg-[#2A454E] overflow-hidden"
          id="contact"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className={`p-16 md:p-28 bg-[#1B2D33] border border-white/10 rounded-[5rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[9] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="absolute top-0 left-0 p-20 opacity-[0.05] pointer-events-none group-hover:text-[#A07A41] transition-colors"><FileSearch size={150} /></div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase">
                  Strengthen Your <br />
                  <span className="italic font-light text-[#A07A41]">Case Preparation.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                  Accurate research and structured documentation are critical in criminal law matters. Ensure your case is supported with properly organized information.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Mail size={24} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-2xl italic group-hover:text-[#A07A41] transition-colors">legal@hsco.co</span>
                   </div>
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Phone size={24} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-2xl italic group-hover:text-[#A07A41] transition-colors">+44 20 745 9210</span>
                   </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#2A454E] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10">Request Research Support</span>
                    <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41]/10 cursor-pointer shadow-biggest overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10">Book Consultation</span>
                  </div>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* SEO FOOTER LINKS */}
      <footer className="bg-[#1B2D33] py-16 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
              <span>criminal law research UK</span>
              <span>legal research support criminal cases UK</span>
              <span>criminal case documentation support UK</span>
              <span>case law research UK</span>
              <span>criminal case preparation support UK</span>
              <span>legal research services UK</span>
           </div>
           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[9px] text-gray-600 italic">
              <span>trademark objection response UK</span>
              <span>UKIPO objection reply</span>
              <span>trademark refusal response UK</span>
              <span>intellectual property dispute UK</span>
              <span>trademark application support UK</span>
              <span>legal response trademark UK</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default CriminalLawResearchPage;
