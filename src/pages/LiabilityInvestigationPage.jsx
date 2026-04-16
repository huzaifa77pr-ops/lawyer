import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Shield, FileText, ChevronDown, 
  Activity, Database, Layout, Lock, FileSearch, Scale, Clock, 
  Briefcase, Landmark, Users, ClipboardCheck, TrendingUp, 
  AlertCircle, ShieldCheck, HeartPulse, Stethoscope, FileClock,
  ShieldAlert, Zap, Info, Send, MapPin
} from 'lucide-react';

const LiabilityInvestigationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    why: false,
    types: false,
    process: false,
    trust: false,
    benefits: false,
    when: false,
    form: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    types: useRef(null),
    process: useRef(null),
    trust: useRef(null),
    benefits: useRef(null),
    when: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Liability Investigation Services UK | H&S Co.";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            if (section) {
              setVisibleSections(prev => ({
                ...prev,
                [section]: true
              }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    { 
      step: "01", 
      title: "Case Review", 
      desc: "Our specialists conduct a comprehensive initial assessment of the situation to identify critical liability factors."
    },
    { 
      step: "02", 
      title: "Evidence Collection", 
      desc: "We gather essential documentation, photography, and witness testimony to build an indisputable fact-base."
    },
    { 
      step: "03", 
      title: "Legal Analysis", 
      desc: "Our legal minds apply current UK legislative frameworks to establish a clear chain of responsibility."
    },
    { 
      step: "04", 
      title: "Liability Report", 
      desc: "You receive a structured report documenting the strength of claim and recommended legal pathways."
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[100vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#1B2D33]"
        >
          <div className="absolute inset-0 z-0">
             <img src="/lawhero.jpg" alt="Liability Investigation Background" className="w-full h-full object-cover object-center opacity-30 scale-105" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/80 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] to-transparent opacity-60"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
                <div className={`flex items-center gap-6 mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                  <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold font-sans">Elite Legal Investigation</span>
                </div>
                
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="block animate-fade-in-top-left">Professional Liability</span>
                  <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Investigation Services</span>
                </h1>
                
                <p className={`text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 border-l-4 border-[#A07A41] pl-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                  Accurate, evidence-based legal investigation to determine fault, responsibility, and legal accountability across the United Kingdom.
                </p>

                <div className={`flex items-center gap-4 mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
                  <div className="p-2 bg-[#A07A41]/10 rounded-full border border-[#A07A41]/30">
                    <ShieldCheck className="h-5 w-5 text-[#A07A41]" />
                  </div>
                  <p className="text-[#A07A41] font-serif italic text-base md:text-lg">
                     "We analyse every detail to build a strong foundation for your legal claim or defence."
                  </p>
                </div>

                <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-700' : 'opacity-0'}`}>
                  <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-xl md:w-fit group flex items-center gap-4">
                    <span>Request Liability Investigation</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs rounded transition-all duration-500 hover:bg-white hover:text-black backdrop-blur-sm">
                    Speak to a Legal Expert
                  </button>
                </div>
            </div>
          </div>
        </section>

        {/* 2. WHY LIABILITY INVESTIGATION MATTERS */}
        <section 
          ref={sectionRefs.why}
          data-section="why"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.5em] text-xs font-black">Strategic Necessity</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-10">
                  Why Determining <br />
                  <span className="italic font-light text-[#A07A41]">Liability Is Critical</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    "Losing your claim",
                    "Paying damages unfairly",
                    "Weak legal arguments",
                    "Insurance claim rejection",
                    "Delays in case resolution"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 p-6 bg-[#1B2D33] border border-white/5 rounded-3xl hover:-translate-y-2 transition-all duration-300 shadow-xl group">
                      <div className="w-3 h-3 rounded-full bg-[#A07A41] shadow-[0_0_10px_rgba(160,122,65,0.6)] group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-200 font-medium text-sm lg:text-base tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-5 p-8 bg-[#A07A41]/10 border-l-4 border-[#A07A41] rounded-r-3xl">
                  <Info className="h-6 w-6 text-[#A07A41]" />
                  <p className="text-[#A07A41] font-serif italic text-lg lg:text-xl">
                    Liability investigation ensures your case is built on facts, not assumptions.
                  </p>
                </div>
              </div>
              <div className={`relative group ${visibleSections.why ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <div className="aspect-[3/4] rounded-[5rem] overflow-hidden border border-[#A07A41]/30 relative">
                   <img src="/sca.jpg" alt="Evidence Analysis" className="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TYPES OF CASES */}
        <section 
          ref={sectionRefs.types}
          data-section="types"
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className={`text-center mb-32 transition-all duration-1000 ${visibleSections.types ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[11px] font-black mb-6 block">Our Expertise</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                  Types of Liability Cases <br />
                  <span className="italic font-light text-[#A07A41]">We Investigate.</span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { n: "Road traffic accidents", i: Activity, d: "Determining fault in collisions and complex traffic disputes." },
                { n: "Workplace injuries", i: Briefcase, d: "Investigating employer negligence and safety standard breaches." },
                { n: "Public liability claims", i: Users, d: "Evidence collection for slips, trips, and falls in public spaces." },
                { n: "Property damage disputes", i: Landmark, d: "Technical analysis of damage responsibility and liability." },
                { n: "Professional negligence", i: Scale, d: "Assessing failures in specialist professional duties." },
                { n: "Insurance liability conflicts", i: ShieldCheck, d: "Verifying facts to support or challenge insurance findings." }
              ].map((item, i) => {
                const Icon = item.i;
                return (
                  <div key={i} className={`group relative p-12 bg-[#2A454E]/40 border border-white/5 rounded-[3rem] hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.types ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-16 h-16 bg-[#1B2D33] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-black transition-colors duration-500">
                      <Icon className="h-8 w-8 text-[#A07A41]" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-black mb-6 transition-colors duration-500 tracking-tight">{item.n}</h3>
                    <p className="text-gray-400 group-hover:text-black/80 font-sans font-light leading-relaxed transition-colors duration-500">{item.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. PROCESS */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-32">
               <div className={`${visibleSections.process ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-20">How Our <br /> <span className="italic font-light text-[#A07A41]">System Operates.</span></h2>
                  <div className="aspect-square relative rounded-[4rem] overflow-hidden group shadow-2xl">
                     <img src="/h1.jpg" alt="Investigation Process" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-125" />
                  </div>
               </div>
               <div className="flex flex-col gap-8">
                  {processSteps.map((step, i) => (
                    <div key={i} className={`p-10 bg-[#1B2D33]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] hover:border-[#A07A41]/50 transition-all duration-500 flex gap-10 items-center group ${visibleSections.process ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                       <div className="text-6xl font-serif font-black text-white/10 group-hover:text-[#A07A41]/30 transition-colors uppercase">{step.step}</div>
                       <div>
                         <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#A07A41] transition-colors">{step.title}</h4>
                         <p className="text-gray-400 font-sans font-light text-base leading-relaxed">{step.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* 5. TRUST */}
        <section 
          ref={sectionRefs.trust}
          data-section="trust"
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-t border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <div className={`mb-32 transition-all duration-1000 ${visibleSections.trust ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">Why Choose Our <br /><span className="italic font-light text-[#A07A41]">Liability Investigation.</span></h2>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-32">
                {[
                  { t: "Evidence-based", i: Database },
                  { t: "UK Legal Depth", i: Landmark },
                  { t: "Detailed Analysis", i: Search },
                  { t: "Clear Reporting", i: FileText },
                  { t: "Legal Support", i: Scale }
                ].map((item, i) => {
                  const Icon = item.i;
                  return (
                    <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-[2.5rem] flex flex-col items-center group hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.trust ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="w-14 h-14 rounded-2xl bg-[#1B2D33] flex items-center justify-center mb-8 border border-[#A07A41]/20 group-hover:bg-black transition-colors">
                        <Icon className="h-6 w-6 text-[#A07A41]" />
                      </div>
                      <span className="text-gray-200 group-hover:text-black font-serif font-black text-[10px] uppercase tracking-widest">{item.t}</span>
                    </div>
                  );
                })}
             </div>
             <div className={`max-w-4xl mx-auto rounded-[3rem] p-12 bg-red-500/5 border-2 border-dashed border-red-500/30 flex items-center gap-10 transition-all duration-1000 ${visibleSections.trust ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
                <ShieldAlert className="h-10 w-10 text-red-500 shrink-0" />
                <p className="text-xl md:text-2xl font-serif italic text-white text-left leading-tight">"We focus on hard facts—never on assumptions, guesses, or hearsay. Accuracy is our only standard."</p>
             </div>
          </div>
        </section>

        {/* 6. BENEFITS */}
        <section 
          ref={sectionRefs.benefits}
          data-section="benefits"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="bg-[#1B2D33]/80 border border-white/10 rounded-[4rem] p-12 lg:p-32 backdrop-blur-2xl shadow-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white text-center mb-24">Key <span className="italic font-light text-[#A07A41]">Strategic Benefits.</span></h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                   {[
                      { t: "Stronger legal case", d: "Your arguments are fortified with documented facts.", i: TrendingUp },
                      { t: "Higher success rate", d: "Professional evidence significantly tilts outcomes.", i: CheckCircle },
                      { t: "Reduced financial risk", d: "Minimize the chance of unfair payouts or failed claims.", i: ShieldCheck },
                      { t: "Faster dispute resolution", d: "Clarity on liability prevents protracted legal battles.", i: Clock },
                      { t: "Better negotiation", d: "Approach settlements with unshakeable evidence.", i: Briefcase }
                   ].map((item, i) => {
                      const Icon = item.i;
                      return (
                        <div key={i} className={`p-10 bg-[#2A454E] rounded-3xl border border-white/5 hover:bg-[#A07A41]/10 transition-all duration-500 h-full ${visibleSections.benefits ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                           <Icon className="text-[#A07A41] h-10 w-10 mb-8" />
                           <h4 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">{item.t}</h4>
                           <p className="text-gray-400 font-sans font-light text-base leading-relaxed">{item.d}</p>
                        </div>
                      );
                   })}
                </div>
             </div>
          </div>
        </section>

        {/* 7. WHEN */}
        <section 
          ref={sectionRefs.when}
          data-section="when"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden border-b border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <div className={`${visibleSections.when ? 'animate-fade-in-left' : 'opacity-0'}`}>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tighter leading-[1.1] mb-12">When Do You Need <br /><span className="italic font-light text-[#A07A41]">An Investigation?</span></h2>
               <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed mb-16 max-w-xl">Early investigation = a stronger case. Delaying evidence collection can lead to critical facts being lost.</p>
            </div>
            <div className="space-y-6">
               {[
                 "After a significant accident or incident",
                 "When fault is disputed by any party",
                 "Before filing an official legal claim",
                 "During complex insurance dispute processes",
                 "When facing unfair legal accusations"
               ].map((item, i) => (
                 <div key={i} className={`flex items-center gap-6 p-8 bg-[#1B2D33] border border-white/5 rounded-3xl hover:bg-[#A07A41] group transition-all duration-700 ${visibleSections.when ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="w-12 h-12 rounded-2xl bg-[#2A454E] flex items-center justify-center border border-white/10 group-hover:bg-black transition-colors">
                      <Clock className="h-5 w-5 text-[#A07A41]" />
                    </div>
                    <span className="text-base md:text-lg font-serif font-bold text-gray-200 group-hover:text-black transition-colors">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 8. FORM */}
        <section 
          ref={sectionRefs.form}
          data-section="form"
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="bg-[#2A454E] rounded-[4rem] p-10 lg:p-24 border border-white/5">
               <div className="grid lg:grid-cols-2 gap-24">
                  <div className={`${visibleSections.form ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-tight">Request <br /><span className="italic font-light text-[#A07A41]">An Investigation.</span></h2>
                    <p className="text-gray-400 text-base md:text-lg font-sans font-light leading-relaxed mb-12">Please provide the preliminary details of your case. Our specialist team will conduct a secure review.</p>
                  </div>
                  <form className={`space-y-8 bg-[#1B2D33] p-10 lg:p-16 rounded-[3rem] border border-white/5 ${visibleSections.form ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                    <div className="grid md:grid-cols-2 gap-8">
                       <input type="text" placeholder="Full Name" className="w-full bg-[#2A454E] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#A07A41]" />
                       <input type="text" placeholder="Contact Details" className="w-full bg-[#2A454E] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#A07A41]" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                       <select className="w-full bg-[#2A454E] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#A07A41] appearance-none">
                          <option>Type of Incident</option>
                          <option>Road Traffic</option>
                          <option>Workplace Accident</option>
                          <option>Public Slip/Fall</option>
                       </select>
                       <input type="text" placeholder="Date & Location" className="w-full bg-[#2A454E] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#A07A41]" />
                    </div>
                    <textarea rows="4" placeholder="Description of Incident" className="w-full bg-[#2A454E] border border-white/10 rounded-[2rem] p-8 text-white outline-none focus:border-[#A07A41] resize-none"></textarea>
                    <button className="w-full px-12 py-7 bg-[#A07A41] text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-6 group">
                         <span>Submit Your Case</span>
                         <Send className="h-5 w-5" />
                    </button>
                  </form>
               </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[60rem] mx-auto">
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white text-center mb-32 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>Frequently Asked <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            <div className="space-y-6">
              {[
                { q: "What is liability in legal terms?", a: "Liability refers to being legally responsible for a specific act or omission, particularly one that leads to damage, injury, or loss." },
                { q: "How long does investigation take?", a: "Depends on complexity, usually a few days to a few weeks." },
                { q: "Can this help my insurance claim?", a: "Yes, strong liability evidence improves claim approval chances." },
                { q: "Do you guarantee results?", a: "No, but we provide accurate and honest analysis." },
                { q: "Can I use this report in court?", a: "Yes, it can support legal proceedings." }
              ].map((faq, index) => (
                <div key={index} className={`border border-white/5 rounded-[2.5rem] bg-[#1B2D33] overflow-hidden ${visibleSections.faq ? (index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} style={{ animationDelay: `${index * 150}ms` }}>
                  <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="w-full p-10 flex items-center justify-between group text-left">
                    <span className={`text-xl font-serif font-bold transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-700 px-10 ${activeFaq === index ? 'max-h-96 pb-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-base md:text-lg font-sans font-light leading-relaxed border-t border-white/5 pt-10">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section 
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-24 lg:py-60 bg-[#16272D] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-6xl mx-auto p-16 lg:p-32 bg-[#2A454E]/40 border-2 border-[#A07A41]/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-12 leading-[1.1] tracking-tighter">Get Clarity on Who Is <br /><span className="italic font-light text-[#A07A41]">Legally Responsible.</span></h2>
              <button className="px-16 py-8 bg-[#A07A41] text-black font-black uppercase tracking-[0.3em] text-xs rounded-3xl hover:bg-white transition-all flex items-center justify-center gap-6 mx-auto group">
                 <span>Start Your Investigation Today</span>
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-4 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default LiabilityInvestigationPage;
