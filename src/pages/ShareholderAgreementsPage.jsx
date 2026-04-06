import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  Users, Lock, FileSignature, Scale, Gavel, 
  Globe, ShieldCheck, Clock, ExternalLink, AlertCircle, 
  DollarSign, HelpCircle, Activity, TrendingUp, PieChart
} from 'lucide-react';

const ShareholderAgreementsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    truth: false,
    definition: false,
    services: false,
    process: false,
    framework: false,
    who: false,
    deliverables: false,
    why: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    truth: useRef(null),
    definition: useRef(null),
    services: useRef(null),
    process: useRef(null),
    framework: useRef(null),
    who: useRef(null),
    deliverables: useRef(null),
    why: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);

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

  const coreServices = [
    { 
      title: "Agreement Drafting", 
      icon: FileSignature, 
      desc: "Custom equity split definition, founder roles, and voting rights structure tailored to your model.",
      deliverable: "Structured legal agreement",
      img: "/sha1.jpg"
    },
    { 
      title: "Founder Structuring", 
      icon: Users, 
      desc: "Vesting schedules, exit rules, and contribution tracking for pre-startup stability.",
      deliverable: "Founder protection framework",
      img: "/sha2.jpg"
    },
    { 
      title: "Investor Shareholding", 
      icon: TrendingUp, 
      desc: "Protecting both founders and investors during funding with high-end governance terms.",
      deliverable: "Investor-safe structure",
      img: "/sha3.jpg"
    },
    { 
      title: "Exit & Transfer", 
      icon: Clock, 
      desc: "Buy-sell agreements, exit valuation rules, and drag-along/tag-along rights management.",
      deliverable: "Exit-proof structure",
      img: "/sha4.jpg"
    },
    { 
      title: "Dispute Resolution", 
      icon: Gavel, 
      desc: "Arbitration rules, mediation processes, and voting tie-break systems for internal peace.",
      deliverable: "Conflict escalation path",
      img: "/sha5.jpg"
    }

  ];

  const faqItems = [
    { q: "Do startups really need this?", a: "Yes. Internal shareholder conflict is one of the leading causes of startup failure in the UK." },
    { q: "Can you structure equity splits?", a: "Precisely. We define splits based on intellectual contribution, financial investment, and future vesting." },
    { q: "Do you handle investors too?", a: "Absolutely. We include standard investor-protection clauses that keep your company 'investment-ready'." },
    { q: "How long does it take?", a: "A professional shareholder agreement typically requires 2 to 4 business days to draft." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-[#1B2D33]"
        >
          <div 
             className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-scroll md:bg-fixed transition-opacity duration-[2s]"
             style={{ backgroundImage: 'url("/sha.jpg")' }}
          >
             <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-transparent to-[#1B2D33]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full text-center">
            <div className={`transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up' : 'opacity-0 scale-95'}`}>
              <div className="flex items-center justify-center gap-4 mb-6 md:mb-10">
                 <div className="h-[1px] w-8 md:w-12 bg-[#A07A41]"></div>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px] font-black">Corporate Governance</span>
                 <div className="h-[1px] w-8 md:w-12 bg-[#A07A41]"></div>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 md:mb-10 tracking-tighter">
                Shareholder <span className="italic font-light text-[#A07A41] block sm:inline">Agreement</span> <br />
                <span className="text-[0.6em] font-light uppercase tracking-[0.2em] opacity-80">Drafting & Review.</span>
              </h1>

              <p className="text-gray-300 text-sm md:text-base lg:text-lg font-sans font-light leading-relaxed max-w-4xl mx-auto mb-12 md:mb-16 animate-fade-in-up animation-delay-400">
                Legally structured shareholder agreements that define ownership rights, prevent disputes, and protect company control and investor relationships.
              </p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-10 mb-12 md:mb-20 animate-fade-in-up animation-delay-600">
                 {[ "Equity Protection", "Dispute Prevention", "UK Compliant" ].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 bg-white/5 rounded-full border border-white/10">
                       <CheckCircle size={12} className="text-[#A07A41]" />
                       <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-gray-300">{tag}</span>
                    </div>
                 ))}
              </div>

              <div className="animate-fade-in-up animation-delay-800">
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-5 md:py-7 bg-[#A07A41] text-black font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[11px] rounded-xl md:rounded-2xl transition-all duration-500 hover:bg-white hover:rounded-[3rem] shadow-[0_30px_60px_rgba(160,122,65,0.3)]">
                   <span>Draft Your Agreement</span>
                   <ArrowRight className="h-4 w-4 transform group-hover:translate-x-3 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* 2. Why This Matters - GRID OF REALITY MAPPING */}
        <section 
          ref={sectionRefs.truth}
          data-section="truth"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32">
             <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block ${visibleSections.truth ? 'animate-fade-in-up' : 'opacity-0'}`}>The Risk Factor</span>
             <h2 className={`text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.truth ? 'animate-fade-in-up' : 'opacity-0'}`}>Handshakes <span className="italic font-light text-[#A07A41]">Are Not Protection.</span></h2>
          </div>


          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
             {[
               { id: "01", t: "Ownership Disputes", d: "Equity splits become battlegrounds without written clarity." },
               { id: "02", t: "Decision Paralysis", d: "Voting powers become unclear, stalling critical company motions." },
               { id: "03", t: "Investor Trust", d: "Investors walk away when internal governance is absent." },
               { id: "04", t: "Founder Exit", d: "Disagreements during exits can collapse the company internally." },
               { id: "05", t: "Total Chaos", d: "Internal internal disputes cost more than any legal fee." }
             ].map((item, i) => (
                <div key={i} className={`p-6 md:p-10 bg-[#1B2D33]/40 border border-[#A07A41]/10 rounded-3xl md:rounded-[2.5rem] relative group overflow-hidden transition-all duration-700 hover:translate-y-[-10px] ${visibleSections.truth ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                   <div className="text-[4rem] md:text-[6rem] font-serif font-black text-[#A07A41]/5 absolute -top-4 -right-4 transition-all group-hover:text-[#A07A41]/10">{item.id}</div>
                   <div className="h-8 w-8 md:h-10 md:w-10 bg-[#A07A41]/10 rounded-lg md:rounded-xl flex items-center justify-center text-[#A07A41] mb-8 md:mb-12 group-hover:bg-[#A07A41] group-hover:text-black transition-all">
                      <AlertCircle size={18} />
                   </div>
                   <h4 className="text-white font-serif font-bold text-lg md:text-xl mb-4 md:mb-6 relative z-10">{item.t}</h4>
                   <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed relative z-10">{item.d}</p>
                </div>
             ))}
          </div>

        </section>

        {/* 3. What is a Shareholder Agreement - BENTO BOX MAPPING */}
        <section 
          ref={sectionRefs.definition}
          data-section="definition"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className="flex flex-col lg:flex-row gap-20">
                 <div className={`lg:w-1/3 ${visibleSections.definition ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Internal Safeguards</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Strategic <br />Governance <br /><span className="italic font-light text-[#A07A41]">Pillars.</span></h2>
                    <p className="text-gray-400 font-sans text-base md:text-lg font-light leading-relaxed italic border-l-2 border-[#A07A41] pl-8">
                       &quot;It prevents internal chaos before it happens, defining the rules of engagement for ownership.&quot;
                    </p>
                 </div>

                 
                 <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {[
                      { icon: PieChart, t: "Equity structure", s: "Ownership %" },
                      { icon: Target, t: "Control Terms", s: "Voting rights" },
                      { icon: DollarSign, t: "Distributions", s: "Profit rules" },
                      { icon: Layers, t: "Share Transfer", s: "Restrictions" },
                      { icon: ArrowRight, t: "Exit Terms", s: "Exit conditions" },
                      { icon: Gavel, t: "Resolution", s: "Conflicts" }
                    ].map((pill, i) => (
                       <div key={i} className={`p-6 md:p-8 bg-[#2A454E]/40 border border-white/5 rounded-3xl md:rounded-[2.5rem] flex flex-col justify-between group hover:border-[#A07A41]/40 transition-all ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                          <pill.icon className="text-[#A07A41] mb-6 md:mb-10 group-hover:scale-110 transition-transform" size={20} />
                          <div>
                             <span className="text-gray-500 uppercase tracking-widest text-[8px] md:text-[9px] font-bold block mb-1">{pill.s}</span>
                             <h4 className="text-white font-serif font-bold text-base md:text-lg">{pill.t}</h4>
                          </div>
                       </div>
                    ))}
                 </div>

              </div>
           </div>
        </section>

        {/* 4. Core Services - STACKED EXPANDABLE MAPPING */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32">
             <span className={`text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>Service Portfolio</span>
             <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>Ownership <span className="italic font-light text-[#A07A41]">Logistics.</span></h2>
          </div>


          <div className="space-y-4 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             {coreServices.map((service, i) => (
                <div key={i} className={`group relative bg-[#1B2D33]/60 border border-white/5 rounded-[3rem] overflow-hidden transition-all duration-700 hover:bg-[#1B2D33] ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="p-10 lg:px-20 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                      <div className="flex items-center gap-10 lg:w-1/2">
                         <div className="w-20 h-20 bg-[#2A454E] rounded-[2rem] flex items-center justify-center text-[#A07A41] border border-[#A07A41]/20">
                            <service.icon size={32} />
                         </div>
                         <div>
                            <h3 className="text-xl md:text-3xl font-serif font-bold text-white group-hover:text-[#A07A41] transition-colors mb-4">{service.title}</h3>
                            <p className="text-gray-400 font-sans font-light text-sm md:text-base leading-relaxed">{service.desc}</p>
                         </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-8 lg:w-1/2 justify-end">
                         <div className="px-8 py-4 bg-white/5 border border-white/5 rounded-full text-center group-hover:border-[#A07A41]/30 transition-all">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#A07A41]">Asset: {service.deliverable}</span>
                         </div>
                         <div className="w-32 h-32 rounded-[2rem] overflow-hidden border border-[#A07A41]/20 grayscale hover:grayscale-0 transition-all duration-700 hidden lg:block">
                            <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                         </div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* 5. Our Process - PULSE CHART MAPPING */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32">
             <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>The Drafting <span className="italic font-light text-[#A07A41]">Cycle.</span></h2>
          </div>


          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
             {[ 
               "Analysis", "Identification", 
               "Structure", "Drafting", "Review" 
             ].map((step, i) => (
                <div key={i} className={`relative pt-10 md:pt-12 ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 md:h-12 bg-[#A07A41] transition-all duration-1000"></div>
                   <div className="p-8 md:p-10 bg-[#2A454E]/40 border border-white/10 rounded-3xl md:rounded-[3rem] text-center group hover:bg-[#A07A41] transition-all duration-700">
                      <div className="text-3xl md:text-4xl font-serif font-black text-[#A07A41]/20 mb-4 md:mb-6 group-hover:text-black/20 italic">0{i+1}</div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-[9px] md:text-[11px] group-hover:text-black">{step}</h4>
                   </div>
                </div>
             ))}
          </div>

        </section>

        {/* 6. Legal Framework - PILLAR MAPPING */}
        <section 
          ref={sectionRefs.framework}
          data-section="framework"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col items-center">
             <div className="text-center mb-24 max-w-4xl">
                <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Compliance Alignment</span>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">Our agreements align with <span className="italic font-light text-[#A07A41]">UK corporate law.</span></h2>
             </div>

             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
                {[ 
                  { l: "Companies Act 2006", s: "Corporate structure" },
                  { l: "Contract Law UK", s: "Agreement validity" },
                  { l: "Corporate Governance Code", s: "Control & Standards" }
                ].map((item, i) => (
                   <div key={i} className={`p-8 md:p-16 border-b border-[#A07A41]/20 md:border-b-0 md:border-r-4 text-center last:border-0 ${visibleSections.framework ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                      <Scale className="mx-auto mb-6 md:mb-10 text-[#A07A41]" size={28} />
                      <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-white mb-4 uppercase italic">{item.l}</h3>
                      <p className="text-gray-500 tracking-[0.2em] font-bold text-[8px] md:text-[10px]">{item.s}</p>
                   </div>
                ))}
             </div>

          </div>
        </section>

        {/* 7. Who Needs This - SCROLLING RIBBON MAPPING */}
        <section 
          ref={sectionRefs.who}
          data-section="who"
          className="relative py-24 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {[ 
                  "Startups with founders", "Investors", "Growing businesses", "Tech companies", "Equity partners"
                ].map((sector, i) => (
                   <div key={i} className={`flex items-center gap-4 px-8 py-5 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41]/40 transition-all ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="h-4 w-4 rounded-full border-2 border-[#A07A41] flex items-center justify-center shrink-0"><CheckCircle size={10} className="text-[#A07A41]" /></div>
                      <span className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] text-white/70 group-hover:text-[#A07A41] transition-colors">{sector}</span>
                   </div>
                ))}
             </div>
          </div>
        </section>


        <section className="relative py-16 md:py-24 lg:py-40 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
              <div ref={sectionRefs.deliverables} data-section="deliverables" className={`${visibleSections.deliverables ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 md:mb-10 block">Asset Delivery</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-12 tracking-tight">Contract <span className="italic font-light text-[#A07A41]">Package.</span></h2>
                 <div className="grid gap-6 border-l-2 border-white/5 pl-8 md:pl-12 lg:pl-24 relative">
                    <div className="absolute top-0 left-[-2px] h-[40%] w-[2px] bg-[#A07A41]"></div>
                    {[ "Custom Shareholder Agreement", "Equity Structure Documentation", "Dispute Prevention Clauses", "Exit & Transfer Rules", "Legal Risk Analysis" ].map((asset, i) => (
                       <div key={i} className="flex items-center gap-4 md:gap-6 group">
                          <FileText className="text-[#A07A41] group-hover:scale-125 transition-transform" size={16} />
                          <span className="text-gray-300 font-sans font-bold uppercase tracking-widest text-[9px] md:text-[11px] group-hover:text-white transition-colors">{asset}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div ref={sectionRefs.why} data-section="why" className={`lg:pt-24 ${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="relative p-8 md:p-12 lg:p-20 bg-[#1B2D33] rounded-3xl md:rounded-[5rem] overflow-hidden shadow-2xl">
                    <div className="absolute bottom-0 right-0 p-12 opacity-[0.03] rotate-45 transform translate-x-10 translate-y-10 md:translate-x-20 md:translate-y-20 scale-[3] md:scale-[4]"><Users size={null} className="text-[#A07A41]" /></div>
                    <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 md:mb-10 block font-serif">The Distinction</span>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-8 md:mb-12 tracking-tight leading-tight">Strong equity protection logic for <span className="italic font-light text-[#A07A41]">Investor-ready startups.</span></h2>
                    <div className="space-y-6 md:space-y-8">
                       {[ "Startup-focused legal drafting", "Strong equity protection logic", "Investor-ready structure", "Conflict prevention approach" ].map((point, i) => (
                          <div key={i} className="flex items-center gap-4 group">
                             <div className="h-3 w-3 md:h-4 md:w-4 bg-[#A07A41] group-hover:rotate-45 transition-all"></div>
                             <span className="text-gray-400 font-sans text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em]">{point}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>


        {/* 10. FAQ Section */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Governance <span className="italic font-light text-[#A07A41]">Answers.</span></h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-[2.5rem] bg-[#2A454E]/30 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-10 flex items-center justify-between group"
                  >
                    <span className={`text-left text-lg font-serif transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`shrink-0 p-3 rounded-xl border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === index ? 'bg-[#A07A41] border-[#A07A41] rotate-180' : ''}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out px-10 ${activeFaq === index ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed italic border-l-2 border-[#A07A41]/30 pl-8">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section 
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-16 md:py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-6xl mx-auto p-10 md:p-16 lg:p-32 bg-[#1B2D33]/60 border border-[#A07A41]/10 rounded-3xl md:rounded-[5rem] backdrop-blur-3xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-[2]"><Target size={200} className="text-[#A07A41]" /></div>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] md:text-[10px] font-bold mb-8 md:mb-10 block font-serif italic">Operational Readiness</span>
              <h2 className="text-2xl md:text-3xl lg:text-6xl font-serif font-bold text-white mb-8 md:mb-10 leading-[1] tracking-tighter">Protect Your Startup <br /><span className="italic font-light text-[#A07A41]">Before Conflict Starts.</span></h2>
              <p className="text-gray-400 font-sans text-base md:text-lg lg:text-xl mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed italic opacity-80 border-b border-white/5 pb-8 md:pb-12">
                 Secure ownership, define control, and prevent internal organizational disputes with professionally drafted agreements.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-10">
                <a href="#contact" className="group relative flex items-center justify-center gap-4 md:gap-6 px-10 md:px-16 py-5 md:py-7 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[10px] md:text-[12px] rounded-full transition-all duration-500 hover:scale-105 hover:bg-white shadow-[0_40px_80px_rgba(160,122,65,0.4)] w-full sm:w-auto text-center">
                   <span>Get Your Agreement Now</span>
                   <ArrowRight className="h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-3 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
Line 408 is end of CTA.


      </main>
    </div>
  );
};

export default ShareholderAgreementsPage;
