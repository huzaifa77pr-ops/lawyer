import React, { useEffect, useState, useRef } from 'react';
import { 
  ShieldAlert, Lock, Database, Terminal, Cpu, FileWarning, Activity,
  ArrowRight, CheckCircle, ShieldCheck, Search, Layout, 
  Layers, Clock, ChevronDown, Mail, Phone, Users, 
  Briefcase, Wallet, Landmark, PieChart, FileSearch,
  BookOpen, Scale, AlertCircle, FileSpreadsheet, UserCheck, 
  Globe, Zap, Shield
} from 'lucide-react';

const CyberLawDocumentationPage = () => {
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E] via-[#2A454E]/80 to-transparent z-10" />
            <img
              src="/5hero.jpg"
              alt="Cyber Law Support"
              className="w-full h-full object-cover object-center opacity-30 scale-110 animate-[kenburns_20s_ease-out_forwards]"
            />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0 pointer-events-none"></div>
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-4xl ${isVisible[0] ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-white/5 border border-white/10 rounded-full">
                <div className="h-1.5 w-1.5 rounded-full bg-[#A07A41] animate-pulse"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">
                  Incident Response Support
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                Cyber Law & Data Breach <br />
                <span className="italic font-light text-[#A07A41]">Documentation Support UK</span>
              </h1>
              
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl">
                Structured documentation support for data breach incidents, helping businesses and legal teams organize records, prepare reports, and manage compliance-related documentation.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-20">
                <a 
                  href="#contact" 
                  className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-biggest overflow-hidden"
                >
                  <span className="relative z-10">Report Documentation Support</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href="#consultation" 
                  className="group flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:border-[#A07A41] hover:bg-[#A07A41]/10"
                >
                  Book Consultation
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl border-t border-white/10 pt-12">
                 {[
                   { t: "UK-focused documentation", Icon: Globe },
                   { t: "Confidential data handling", Icon: Lock },
                   { t: "Compliance-aware support", Icon: ShieldCheck }
                 ].map((signal, i) => {
                   const Icon = signal.Icon;
                   return (
                     <div key={i} className="flex flex-col gap-3 group">
                       <Icon className="h-6 w-6 text-[#A07A41] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                       <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold leading-tight">{signal.t}</span>
                     </div>
                   );
                 })}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS DATA BREACH DOCUMENTATION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${isVisible[1] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-8 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.3em] text-xs font-semibold">Incident Context</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
                  What is Data Breach <br />
                  <span className="italic font-light text-[#A07A41]">Documentation?</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-lg font-light leading-relaxed border-l-2 border-[#A07A41] pl-8">
                    Data breach documentation involves recording, organizing, and preparing all relevant information related to a security incident where personal or sensitive data may have been exposed.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 pt-6">
                    {[
                      { t: "Incident Timelines", Icon: Clock },
                      { t: "System Logs", Icon: Terminal },
                      { t: "Affected Data Records", Icon: Database },
                      { t: "Compliance Reporting", Icon: FileWarning }
                    ].map((item, i) => {
                      const Icon = item.Icon;
                      return (
                        <div key={i} className="flex items-center gap-4 p-6 bg-[#2A454E] border border-white/5 rounded-2xl group hover:border-[#A07A41]/30 transition-all">
                          <Icon className="h-5 w-5 text-[#A07A41] shrink-0" />
                          <span className="text-white font-serif font-bold text-sm leading-tight">{item.t}</span>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-gray-400 text-base font-light italic opacity-80 pt-8 flex items-center gap-4">
                    <ShieldAlert className="h-5 w-5 text-[#A07A41]" />
                    "👉 Proper documentation is essential for regulatory reporting and internal review."
                  </p>
                </div>
              </div>
              
              <div className={`relative ${isVisible[1] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative group">
                   <div className="absolute -inset-10 bg-[#A07A41]/5 rounded-full blur-[100px] animate-pulse"></div>
                   <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-biggest bg-[#2A454E] p-12 lg:p-16">
                      <div className="flex items-center gap-6 mb-12">
                         <div className="h-16 w-16 rounded-2xl bg-[#1B2D33] flex items-center justify-center text-[#A07A41] border border-white/5 shadow-inner">
                            <Cpu size={32} />
                         </div>
                         <h3 className="text-white font-serif text-3xl font-bold">Protocol Matrix.</h3>
                      </div>
                      <div className="space-y-6">
                         {[
                           "Regulatory Timeline Tracking",
                           "Information Flow Indexing",
                           "Action Log Verification",
                           "Digital Evidence Archiving"
                         ].map((text, i) => (
                           <div key={i} className="flex items-center justify-between text-gray-400 text-xs font-light group/item p-4 bg-black/20 rounded-xl border border-white/5 hover:border-[#A07A41]/30 transition-all">
                              <span>{text}</span>
                              <Zap size={12} className="text-[#A07A41] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHO NEEDS THIS SERVICE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6">Target Sectors</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Who Needs Data Breach <br />
                 <span className="italic font-light text-[#A07A41]">Documentation Support?</span>
               </h2>
               <div className="h-[2px] w-24 bg-[#A07A41] mx-auto mb-10"></div>
               <p className="text-gray-400 text-base max-w-2xl mx-auto font-light italic">
                 👉 If your documentation is unclear, your risk increases.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { t: "Data Handlers", Icon: Database, d: "Businesses managing sensitive data." },
                { t: "Impacted Firms", Icon: ShieldAlert, d: "Companies facing security incidents." },
                { t: "Legal Teams", Icon: Scale, d: "Professionals managing compliance." },
                { t: "Incident Responders", Icon: Activity, d: "Teams preparing regulatory reports." },
                { t: "Global Regulators", Icon: Landmark, d: "Compliance-driven organizations." }
              ].map((item, i) => {
                const Icon = item.Icon;
                return (
                  <div 
                    key={i}
                    className={`group p-10 bg-[#1B2D33] border border-white/5 rounded-3xl hover:bg-[#A07A41] transition-all duration-700 shadow-biggest flex flex-col items-center text-center ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="h-16 w-16 bg-[#2A454E] rounded-2xl flex items-center justify-center text-[#A07A41] mb-8 group-hover:bg-black group-hover:text-[#A07A41] transition-all border border-white/5 shadow-inner">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-white font-serif text-lg font-bold mb-4 group-hover:text-black transition-colors">
                      {item.t}
                    </h3>
                    <p className="text-gray-400 text-[10px] font-light leading-relaxed group-hover:text-black/80 transition-colors uppercase tracking-[0.2em]">{item.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. WHAT WE HANDLE */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${isVisible[3] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Incident timeline preparation",
                    "Documentation of breach details",
                    "Structuring affected data records",
                    "Organizing communication logs",
                    "Preparing documentation for reporting",
                    "Case file organization",
                    "Regulatory record-keeping",
                    "Impact assessment structuring"
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-[#2A454E] border border-white/5 rounded-2xl group hover:border-[#A07A41]/50 transition-all duration-500 shadow-xl">
                      <div className="h-2 w-2 rounded-full bg-[#A07A41] group-hover:scale-150 transition-transform"></div>
                      <span className="text-white font-serif text-xs font-bold group-hover:text-[#A07A41] transition-colors uppercase tracking-widest">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${isVisible[3] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block text-right">Scope Of Analysis</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight tracking-tighter text-right">
                  What We Handle in <br />
                  <span className="italic font-light text-[#A07A41]">Data Breach Documentation.</span>
                </h2>
                <div className="p-8 bg-[#2A454E] border-r-4 border-[#A07A41] rounded-l-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                    <Database size={80} />
                  </div>
                  <p className="text-white italic text-base relative z-10 font-serif text-right leading-relaxed">
                    "👉 Most issues arise from poor documentation—not the incident itself."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR DOCUMENTATION PROCESS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Response Workflow</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Our Data Breach <br />
                 <span className="italic font-light text-[#A07A41]">Documentation Process.</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { n: "01", t: "Incident Review", d: "Understanding the nature and scope of the breach." },
                { n: "02", t: "Data Organization", d: "Structuring all information clearly and logically." },
                { n: "03", t: "Timeline Prep", d: "Documenting events and actions in precise sequence." },
                { n: "04", t: "Doc Structuring", d: "Preparing reports and supporting compliance files." },
                { n: "05", t: "Final Delivery", d: "Complete and organized documentation set provided." }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className={`group relative flex flex-col items-center text-center ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="h-20 w-20 rounded-full bg-[#1B2D33] border border-white/5 flex items-center justify-center text-[#A07A41] font-serif font-black text-2xl mb-8 group-hover:bg-[#A07A41] group-hover:text-black transition-all group-hover:scale-110 shadow-biggest group-hover:shadow-[#A07A41]/10">
                    {step.n}
                  </div>
                  <h4 className="text-white font-serif text-base font-bold mb-4 px-4 uppercase tracking-tighter">{step.t}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-light italic">{step.d}</p>
                  {i < 4 && <div className="absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[1px] bg-[#A07A41]/10 hidden md:block"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY DOCUMENTATION MATTERS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${isVisible[5] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight leading-none">
                  Why Data Breach <br />
                  <span className="italic font-light text-[#A07A41]">Documentation is Critical.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 border-l-2 border-[#A07A41] pl-8 italic">
                   "In data breach cases, documentation = control."
                </p>

                <div className="grid sm:grid-cols-2 gap-10">
                   <div className="space-y-6">
                      <span className="text-red-500/60 uppercase tracking-widest text-[10px] font-black border-b border-red-500/10 pb-2 block">The Risks</span>
                      <ul className="space-y-4">
                        {["Compliance Issues", "Reporting Delays", "Incomplete Records", "Regulatory Risk"].map((r, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-500 font-light text-xs italic">
                            <AlertCircle className="h-3 w-3 text-red-500/50" /> {r}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="space-y-6">
                      <span className="text-[#A07A41] uppercase tracking-widest text-[10px] font-black border-b border-[#A07A41]/10 pb-2 block">The Benefits</span>
                      <ul className="space-y-4">
                        {["Clear Incident Understanding", "Better Compliance Handling", "Organized Communication", "Internal Review Accuracy"].map((b, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-300 font-light text-xs italic">
                            <CheckCircle className="h-3 w-3 text-[#A07A41]" /> {b}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>

              <div className={`${isVisible[5] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-biggest group bg-[#2A454E] p-12 lg:p-24">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:scale-125 transition-transform duration-[2000ms]">
                       <Cpu size={500} />
                    </div>
                    <div className="relative z-10 text-center">
                       <Shield size={120} className="text-[#A07A41] mx-auto mb-10 opacity-60 group-hover:opacity-100 transition-opacity" strokeWidth={0.5} />
                       <h3 className="text-white font-serif text-3xl font-bold mb-6 italic tracking-widest uppercase">Precision.</h3>
                       <p className="text-gray-400 text-sm font-light leading-relaxed">
                         Our documentation matrix ensures no detail is lost, providing the clarity required for regulatory scrutiny and strategic resolution.
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className={`${isVisible[6] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 tracking-tight italic">
                    Why Choose Our <br />
                    <span className="text-[#A07A41]">Documentation Support?</span>
                  </h2>
                  <p className="text-gray-400 text-base font-light leading-relaxed mb-12 max-w-lg italic border-l border-[#A07A41]/30 pl-8">
                    Most organizations don’t fail because of breaches—they fail because of poor documentation afterward.
                  </p>
               </div>

               <div className={`grid gap-4 ${isVisible[6] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 {[
                   "Structured incident documentation workflows",
                   "Clear and organized reporting formats",
                   "Confidential handling of sensitive data",
                   "UK-focused compliance awareness",
                   "Support for legal and business teams"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-8 bg-[#1B2D33] border border-white/5 rounded-[2rem] group hover:border-[#A07A41]/40 transition-all duration-500 shadow-biggest">
                      <span className="text-white font-serif text-base font-bold group-hover:text-[#A07A41] transition-colors uppercase tracking-tight">{item}</span>
                      <div className="h-10 w-10 bg-[#2A454E] rounded-full flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                         <ArrowRight size={18} />
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* 8. COMPLIANCE & LIMITATIONS */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`p-16 md:p-32 bg-[#2A454E] border border-[#A07A41]/20 rounded-[4rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[7] ? 'animate-fade-in-up' : 'opacity-0'}`}>
               <ShieldCheck size={64} className="text-[#A07A41] mx-auto mb-10 opacity-60 group-hover:scale-125 transition-transform" strokeWidth={1} />
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-12 italic tracking-tight underline underline-offset-[16px] decoration-[#A07A41]/20 uppercase">Compliance & Professional Standards</h2>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10 pt-8">
                 {[
                   { t: "No Cybersecurity", d: "Purely documentation support." },
                   { t: "No Tech Audit", d: "No technical investigation." },
                   { t: "No Legal Advice", d: "Backend organizational role." }
                 ].map((note, i) => (
                   <div key={i} className="flex flex-col items-center gap-4">
                      <div className="h-12 w-12 rounded-full border border-[#A07A41]/30 flex items-center justify-center text-[#A07A41]">
                        <Zap size={20} />
                      </div>
                      <h4 className="text-white font-serif text-xl font-bold italic">{note.t}</h4>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{note.d}</p>
                   </div>
                 ))}
               </div>
               <p className="mt-20 text-gray-500 text-[10px] italic tracking-[0.3em] uppercase">This keeps your positioning safe and credible.</p>
            </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
               <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Common Inquiries</span>
               <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tighter ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                 Frequently Asked <br />
                 <span className="italic font-light text-[#A07A41]">Questions.</span>
               </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "Do you handle cybersecurity incidents directly?", a: "No, we assist with documentation and record preparation only. We do not provide technical cybersecurity services or direct incident response." },
                { q: "Can you prepare incident reports?", a: "Yes, we structure and organize documentation for reporting purposes, ensuring all relevant details are captured for regulatory review." },
                { q: "Is the information confidential?", a: "Absolutely. All information related to security incidents is handled with strict professional confidentiality and secure protocols." },
                { q: "How fast is the service?", a: "Typically 1–3 business days depending on the volume and complexity of the documentation required." }
              ].map((faq, i) => (
                <div 
                  key={i}
                  className={`border border-white/10 rounded-2xl bg-[#1B2D33] overflow-hidden transition-all duration-500 hover:border-[#A07A41]/30 shadow-xl ${isVisible[8] ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-8 md:p-10 flex items-center justify-between group outline-none"
                  >
                    <span className={`text-left text-lg md:text-xl font-serif font-bold transition-colors ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`shrink-0 p-3 rounded-xl border border-white/5 transition-all duration-500 ${activeFaq === i ? 'bg-[#A07A41] rotate-180 border-[#A07A41]' : 'group-hover:border-[#A07A41]'}`}>
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
          className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden"
          id="contact"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className={`p-16 md:p-28 bg-[#2A454E] border border-white/10 rounded-[5rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[9] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none group-hover:text-[#A07A41] transition-colors"><ShieldAlert size={180} /></div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase">
                  Organize Your Data Breach <br />
                  <span className="italic font-light text-[#A07A41]">Documentation Properly.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                  Clear and structured documentation is essential for managing data breach incidents effectively and responsibly. Ensure your incident records are professional and complete.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
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
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10">Start Documentation</span>
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
      <footer className="bg-[#2A454E] py-16 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
              <span>data breach documentation UK</span>
              <span>cyber law documentation support UK</span>
              <span>gdpr incident documentation UK</span>
              <span>data breach report preparation UK</span>
              <span>incident documentation services UK</span>
              <span>compliance documentation data breach UK</span>
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

export default CyberLawDocumentationPage;
