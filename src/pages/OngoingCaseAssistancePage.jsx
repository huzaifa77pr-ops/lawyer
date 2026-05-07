import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, 
  Briefcase, Scale, Clock, MessageSquare,
  FileText, TrendingUp, Zap
} from 'lucide-react';

const OngoingCaseAssistancePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: false,
    when: false,
    handle: false,
    process: false,
    importance: false,
    why: false,
    legal: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    when: useRef(null),
    handle: useRef(null),
    process: useRef(null),
    importance: useRef(null),
    why: useRef(null),
    legal: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ongoing Case Assistance Services UK | IP Dispute Management | H&S Co.";

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

  const handleCases = [
    { t: "Ongoing copyright infringement disputes", d: "Continuous enforcement for creative assets." },
    { t: "Trademark conflicts and objections", d: "Handling opposition and registry disputes." },
    { t: "Brand impersonation cases", d: "Removing fake identities and profiles." },
    { t: "Repeat infringement issues", d: "Managing persistent violators effectively." },
    { t: "Platform escalation cases", d: "Google, hosting, and social media escalations." },
    { t: "Counter-notice response", d: "Legal defense against baseless claims." }
  ];

  const processSteps = [
    { step: "01", t: "Case Intake & Review", d: "We analyze the full situation, including evidence and prior actions." },
    { step: "02", t: "Legal Strategy Setup", d: "We define the correct enforcement and escalation approach." },
    { step: "03", t: "Active Case Handling", d: "We manage communication, filings, and platform responses." },
    { step: "04", t: "Escalation Management", d: "If ignored, we escalate to higher enforcement channels." },
    { step: "05", t: "Resolution Tracking", d: "We monitor outcomes until the case is resolved." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
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
          
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
        `}
      </style>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-[#1B2D33]">
          <div className="absolute inset-0 z-0">
             <img src="/heroo.jpg" alt="Ongoing Case Support" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/70 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Strategic Escalation + Support</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left delay-200 uppercase">
                Ongoing Case <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Assistance Services UK.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up delay-400">
                Continuous legal support for active intellectual property disputes, infringement cases, and enforcement actions requiring structured handling and escalation.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-right delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                   <span className="relative z-10">Get Case Support</span>
                   <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <div className="flex flex-col justify-center">
                   <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Speak to Legal Expert</p>
                   <p className="text-white/40 text-[10px] italic">Strategic Case Analysis</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/10 pt-12 animate-fade-in-up delay-800">
                 {[
                   { t: "UK-based legal handling", s: "Local Expertise" },
                   { t: "Active case management", s: "Structured Action" },
                   { t: "Structured escalation system", s: "Proven Results" }
                 ].map((item, i) => (
                   <div key={i} className="space-y-1">
                      <span className="text-white font-serif font-bold text-lg block leading-tight">{item.t}</span>
                      <span className="text-[#A07A41]/50 text-[10px] font-black uppercase tracking-widest leading-none">{item.s}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS ONGOING CASE ASSISTANCE */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight leading-tight uppercase">
                   What is <br />
                   <span className="italic font-light text-[#A07A41]">Ongoing Case Assistance?</span>
                 </h2>
                 <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed border-l-4 border-white/5 pl-6 md:pl-8 italic mb-10">
                   <p>Ongoing case assistance refers to continuous legal support for active disputes involving intellectual property infringement, trademark conflicts, copyright violations, or brand misuse.</p>
                   <p>Instead of single actions like takedowns, this service focuses on managing active legal disputes through persistent follow-up and escalation.</p>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Managing active legal disputes",
                      "Monitoring case progress",
                      "Handling escalations & responses",
                      "Coordinating enforcement actions"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-[#1B2D33] rounded-2xl border border-white/5 group hover:border-[#A07A41]/30 transition-all">
                         <CheckCircle className="h-5 w-5 text-[#A07A41] shrink-0" />
                         <span className="text-gray-200 group-hover:text-white font-bold text-xs md:text-sm tracking-wide uppercase transition-colors">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative group">
                    <img src="/aa.jpg" alt="Case Management" className="rounded-2xl md:rounded-3xl shadow-biggest h-[300px] md:h-[550px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                    <div className="absolute -bottom-6 -left-6 bg-[#1B2D33] p-8 md:p-10 rounded-2xl border border-white/5 hidden md:block">
                        <Scale className="h-8 w-8 md:h-12 md:w-12 text-[#A07A41]" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 3. WHEN YOU NEED THIS SERVICE */}
        <section ref={sectionRefs.when} data-section="when" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5 relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className={`${visibleSections.when ? 'animate-fade-in-up' : 'opacity-0'}`}>
                   <div className="relative">
                      <img src="/doc.jpg" alt="Critical Service" className="rounded-[4rem] h-[300px] md:h-[600px] w-full object-cover brightness-50 grayscale" />
                      <div className="absolute inset-0 border-[20px] md:border-[40px] border-white/5 rounded-[4rem] m-6 md:m-12"></div>
                   </div>
                </div>
                <div className={`${visibleSections.when ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase">
                      When Do You Need <br />
                      <span className="italic font-light text-[#A07A41]">Ongoing Assistance?</span>
                   </h2>
                   <p className="text-gray-400 font-sans font-light text-base md:text-lg mb-10 leading-relaxed italic">
                      You need ongoing case assistance when simple requests are ignored and active legal conflicts arise.
                   </p>
                   <div className="space-y-4 mb-10">
                      {[
                        "A DMCA or IP complaint is being ignored",
                        "A trademark dispute is ongoing",
                        "Multiple infringement cases exist simultaneously",
                        "Legal escalation is required across platforms",
                        "Counter-notices or disputes have been filed"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:bg-[#A07A41] transition-all duration-500">
                           <AlertCircle className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                           <span className="text-gray-200 group-hover:text-black font-serif font-bold text-base md:text-lg transition-colors italic">{item}</span>
                        </div>
                      ))}
                   </div>
                   <div className="p-8 bg-[#A07A41] rounded-2xl md:rounded-3xl inline-block">
                      <p className="text-black font-serif font-black flex items-center gap-4 text-sm md:text-base uppercase tracking-tighter">
                         <Zap className="h-5 w-5" /> This is for active legal conflicts—not simple removals.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 4. WHAT WE HANDLE */}
        <section ref={sectionRefs.handle} data-section="handle" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className="mb-12 md:mb-20 text-center">
                 <h2 className={`text-3xl md:text-6xl font-serif font-bold text-white mb-4 uppercase tracking-tight ${visibleSections.handle ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Types of <span className="text-[#A07A41] italic">Cases We Manage.</span>
                 </h2>
                 <p className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] bg-white/5 py-3 px-8 rounded-full w-fit mx-auto mt-6">Comprehensive enforcement lifecycle</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
                 {handleCases.map((item, i) => (
                   <div key={i} className={`p-8 md:p-10 bg-[#1B2D33]/60 border border-white/5 rounded-2xl md:rounded-3xl group hover:border-[#A07A41]/50 transition-all duration-700 ${visibleSections.handle ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                      <div className="mb-8 w-14 h-14 bg-[#2A454E] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#A07A41] transition-all mx-auto lg:mx-0">
                         <Briefcase className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                      <p className="text-gray-500 text-sm font-light italic leading-relaxed">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. OUR CASE MANAGEMENT PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5 relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <h2 className="text-3xl md:text-7xl font-serif font-bold text-white mb-10 tracking-tight leading-none uppercase italic">Process.</h2>
                   <img src="/saa3.jpg" alt="Structured Management" className="rounded-2xl md:rounded-[4rem] brightness-50 w-full h-[300px] md:h-[500px] object-cover" />
                </div>
                <div className="space-y-4">
                  {processSteps.map((item, i) => (
                    <div key={i} className={`p-8 md:p-10 bg-[#2A454E]/30 border border-white/5 rounded-2xl md:rounded-3xl group hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 200}ms` }}>
                       <div className="flex justify-between items-center mb-6">
                          <span className="text-[#A07A41] font-black text-xs uppercase tracking-[0.4em] group-hover:text-black transition-colors">Phase {item.step}</span>
                          <span className="text-white/20 font-serif font-black text-3xl md:text-4xl group-hover:text-black/10 transition-colors italic leading-none">{item.step}</span>
                       </div>
                       <h4 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 tracking-tight group-hover:text-black transition-colors uppercase">{item.t}</h4>
                       <p className="text-gray-400 font-sans font-light text-sm md:text-base italic group-hover:text-black/80 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* 6. WHY ONGOING SUPPORT IS IMPORTANT */}
        <section ref={sectionRefs.importance} data-section="importance" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             <div className={`${visibleSections.importance ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="relative">
                   <img src="/saa2.jpg" alt="Persistence" className="rounded-[4rem] h-[300px] md:h-[550px] w-full object-cover grayscale brightness-25" />
                   <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-12 text-center">
                      <Clock className="h-10 w-10 md:h-12 md:w-12 text-[#A07A41] mb-8" />
                      <p className="text-white text-base md:text-xl font-serif italic leading-relaxed mb-6">"Most infringement cases fail not because of lack of rights—but because of weak follow-up."</p>
                      <div className="h-[2px] w-24 bg-[#A07A41]/30"></div>
                   </div>
                </div>
             </div>
             <div className={`${visibleSections.importance ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase leading-tight">
                   Why Ongoing Case <br />
                   <span className="italic font-light text-[#A07A41]">Support Matters.</span>
                </h2>
                <p className="text-gray-500 font-sans font-light text-base md:text-lg mb-10 leading-relaxed italic border-l-2 border-[#A07A41] pl-8">Without proper case handling, evidence is ignored and escalation opportunities are missed.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                   {[
                     { t: "Complaints get ignored", d: "Zero follow-up results in zero enforcement." },
                     { t: "Evidence unused", d: "Strong proof is wasted without structured filing." },
                     { t: "Missed Escalation", d: "Opportunities to force action are frequently lost." },
                     { t: "Unresolved cases", d: "Legal conflicts linger for months damaging your brand." }
                   ].map((item, i) => (
                     <div key={i} className="space-y-3">
                        <TrendingUp className="h-6 w-6 text-[#A07A41]/50" />
                        <h4 className="text-white font-bold text-sm md:text-base uppercase tracking-widest">{item.t}</h4>
                        <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">{item.d}</p>
                     </div>
                   ))}
                </div>
                <div className="mt-12 p-8 bg-[#1B2D33] border-l-4 border-[#A07A41] rounded-r-3xl">
                   <p className="text-white font-serif italic text-base md:text-lg leading-relaxed italic">👉 Legal success is about persistence + structure, not just filing complaints.</p>
                </div>
             </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE US */}
        <section ref={sectionRefs.why} data-section="why" className="py-16 md:py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.why ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Elite Case <br /><span className="italic font-light text-[#A07A41]">Handling Benchmarks.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left">
                 {[
                   { t: "Structured Handling", d: "Professional end-to-end case management lifecycle." },
                   { t: "Platform Escalation", d: "Deep experience with major platform dispute systems." },
                   { t: "Continuous Monitoring", d: "Persistent follow-up until total resolution is achieved." },
                   { t: "Strategic Evidence", d: "Leveraging UK and International IP frameworks for power." }
                 ].map((item, i) => (
                   <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-2xl md:rounded-[3rem] group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.why ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                      <ShieldCheck className="h-10 w-10 text-[#A07A41] mb-10 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-serif font-bold text-xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight uppercase">{item.t}</h4>
                      <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed">{item.d}</p>
                   </div>
                 ))}
              </div>
              <div className="mt-16 text-gray-500 font-sans font-light italic text-base md:text-lg max-w-2xl mx-auto px-4">
                 "Most providers only submit complaints—we manage the entire case lifecycle from intake to resolution."
              </div>
           </div>
        </section>

        {/* 8. LEGAL COMPLIANCE & STANDARDS */}
        <section ref={sectionRefs.legal} data-section="legal" className="py-16 md:py-24 bg-[#2A454E] border-y border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <div className={`mb-12 md:mb-20 ${visibleSections.legal ? 'animate-fade-in-down' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Compliance <span className="text-[#A07A41] italic">& Integrity.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div className="bg-[#1B2D33] p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-left animate-fade-in-left border border-white/5 shadow-2xl">
                    <span className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-10 block italic">Enforcement Protocol</span>
                    <div className="space-y-5 md:space-y-6">
                       {[
                         "All actions are strictly legally compliant",
                         "No false or unsupported claims are made",
                         "Proper evidence-based submissions required",
                         "Alignment with UK & International IP frameworks"
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-6 group hover:bg-white/5 p-2 rounded transition-all">
                            <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41]/10 group-hover:text-[#A07A41] transition-colors" />
                            <span className="text-gray-300 font-light text-base md:text-lg italic group-hover:text-white transition-colors">{v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="space-y-8 md:space-y-10 text-left animate-fade-in-right px-4 md:px-0">
                    <p className="text-gray-400 font-sans font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-8">
                       We provide support for <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and complex <strong>intellectual property dispute UK</strong> cases requiring structured <strong>legal response trademark UK</strong> strategies including <strong>trademark refusal response UK</strong> and <strong>trademark application support UK</strong>.
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
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <div className="mb-20">
                 <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    Case <span className="italic font-light text-[#A07A41]">FAQ.</span>
                 </h2>
              </div>
              <div className="space-y-4 text-left">
                {[
                  { q: "Is this different from DMCA services?", a: "Yes. DMCA is single-action removal. This is ongoing case management for active legal conflicts, trademark disputes, and high-level escalations." },
                  { q: "How long do cases take?", a: "It depends on complexity and platform response—some resolve in days, while complex disputes across multiple platforms can take weeks." },
                  { q: "Can you handle disputes already in progress?", a: "Yes, we can take over active cases at any stage and continue the escalation or counter-notice response process." },
                  { q: "Do you guarantee results?", a: "No ethical legal service guarantees specific outcomes, but our structured handling and persistent follow-up significantly improve success rates compared to reactive filing." }
                ].map((faq, i) => (
                   <div key={i} className={`border border-white/5 rounded-3xl bg-[#2A454E]/40 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-8 md:p-10 flex items-center justify-between group">
                      <span className={`text-left text-lg md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    <div className={`transition-all duration-700 ease-in-out px-8 md:px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="border-t border-white/5 pt-8 md:pt-10 text-gray-400 text-sm md:text-lg leading-relaxed font-light italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/heroo.jpg" alt="Final CTA Support" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tight uppercase">
                Take Control of Your <br />
                <span className="italic font-light text-[#A07A41]">Legal Case Today.</span>
              </h2>
              <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-8">
                 Delay reduces your chances of resolution. Proper legal handling improves outcomes and enforcement success for active IP disputes.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                   <span className="relative z-10">Start Case Assistance</span>
                   <ArrowRight className="h-6 w-6 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                   <p className="text-[#A07A41] font-black text-2xl italic mb-1 group-hover:text-white transition-colors">Talk to Legal Expert</p>
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

export default OngoingCaseAssistancePage;
