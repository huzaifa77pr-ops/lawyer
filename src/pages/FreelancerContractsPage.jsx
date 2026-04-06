import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, CheckCircle, Zap, Shield, FileText, 
  ChevronDown, Target, Users, Lock, Scale, 
  Gavel, Clock, AlertCircle, DollarSign, 
  Briefcase, Activity, TrendingUp, Laptop, 
  Code, PenTool, Globe, UserCheck
} from 'lucide-react';

const FreelancerContractsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    problem: false,
    definition: false,
    services: false,
    process: false,
    legal: false,
    who: false,
    deliverables: false,
    why: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    problem: useRef(null),
    definition: useRef(null),
    services: useRef(null),
    process: useRef(null),
    legal: useRef(null),
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

  const freelancerServices = [
    { 
      title: "Contract Drafting", 
      icon: Briefcase, 
      desc: "Project scope definition, payment structure (fixed/hourly), and late fee penalties built for freelancers.",
      output: "Fully enforceable contract",
      img: "/free1.jpg"
    },
    { 
      title: "Client Protection", 
      icon: UserCheck, 
      desc: "Detailed deliverables breakdown and scope limitation clauses to prevent client exploitation.",
      output: "Client-proof structure",
      img: "/free2.jpg"
    },
    { 
      title: "Payment Security", 
      icon: DollarSign, 
      desc: "Advance payment clauses and milestone-based systems that secure your income legally.",
      output: "Income security structure",
      img: "/free3.jpg"
    },
    { 
      title: "IP Rights Protection", 
      icon: Lock, 
      desc: "Ownership transfer rules, portfolio usage rights, and client usage limitations clearly defined.",
      output: "IP protection agreement",
      img: "/free4.jpg"
    },
    { 
      title: "Revision Control", 
      icon: Activity, 
      desc: "Fixed revision limits and scope change approval processes to stop unlimited unpaid work.",
      output: "Revision control structure",
      img: "/free5.jpg"
    }

  ];

  const faqItems = [
    { q: "Do freelancers really need contracts?", a: "Absolutely. Without one, you have zero legal leverage if a client refuses payment or expands scope indefinitely." },
    { q: "Can clients still refuse payment?", a: "Not if proper milestone and late-fee clauses are included. We build contracts that make non-payment legally expensive for them." },
    { q: "Do you cover design and development work?", a: "Yes. Our contracts are specialized for designers, developers, writers, and consultants in the digital space." },
    { q: "How fast is delivery?", a: "Professional freelancer contracts are typically ready for review within 24–72 hours." }
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
             className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-scroll md:bg-fixed"
             style={{ backgroundImage: 'url("/free.jpg")' }}
          >
             <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-[#1B2D33]/40 to-[#1B2D33]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-24">
             <div className={`lg:w-1/2 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 md:mb-8">
                  <span className="h-[1px] w-6 md:w-8 bg-[#A07A41]"></span>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[8px] md:text-[10px] font-black">Income Preservation</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter">
                   Strategic <br />
                   <span className="italic font-light text-[#A07A41]">Freelancer</span> <br />
                   Protection.
                </h1>
                
                <p className="text-gray-300 text-sm md:text-base lg:text-lg font-sans font-light leading-relaxed max-w-xl mb-10 md:mb-12 border-l-2 border-[#A07A41]/30 pl-6 md:pl-8">
                   Clear, legally enforceable freelancer contracts that protect payments, define scope, and prevent client disputes.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-10 md:mb-12">
                   {[ "Payment Protection", "Scope Clarity", "UK Compliant" ].map((tag, i) => (
                      <div key={i} className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/5 rounded-full border border-white/10 hover:border-[#A07A41]/40 transition-all">
                         <Shield size={12} className="text-[#A07A41]" />
                         <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-[#A07A41]">{tag}</span>
                      </div>
                   ))}
                </div>

                <a href="#contact" className="group relative inline-flex items-center justify-center gap-4 md:gap-6 px-10 md:px-12 py-5 md:py-7 bg-[#A07A41] text-black font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] rounded-xl md:rounded-2xl transition-all duration-500 hover:bg-white hover:rounded-[3rem] shadow-[0_30px_60px_rgba(160,122,65,0.3)]">
                   <span>Create Your Contract</span>
                   <ArrowRight className="h-4 w-4 transform group-hover:translate-x-3 transition-transform" />
                </a>
             </div>

             <div className={`lg:w-1/3 p-10 md:p-12 lg:p-24 bg-[#2A454E]/40 border border-white/10 rounded-3xl md:rounded-[5rem] backdrop-blur-3xl relative overflow-hidden transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0 translate-x-[50px]'}`}>

                <div className="absolute top-0 right-0 p-12 opacity-5 scale-[2]"><Activity size={200} className="text-[#A07A41]" /></div>
                <div className="relative z-10 space-y-12">
                    <div className="space-y-4">
                       <h4 className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black">Active Monitoring</h4>
                       <p className="text-white font-serif font-bold text-2xl italic">We ensure clients cannot exploit unclear terms.</p>
                    </div>
                    <div className="h-[1px] w-full bg-white/10"></div>
                    <div className="flex items-center gap-6">
                       <div className="h-12 w-12 rounded-xl bg-[#A07A41] flex items-center justify-center text-black font-black italic">!</div>
                       <p className="text-gray-400 text-xs font-sans leading-relaxed tracking-wide">90% of freelancers lose 15% of income to scope creep. We stop it.</p>
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* 2. Real Problem - ASYMMETRIC CHAOS GRID */}
        <section 
          ref={sectionRefs.problem}
          data-section="problem"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.problem ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Immediate Exposure</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-tight">If it’s not written, <br /><span className="italic font-light text-[#A07A41]">it doesn’t exist legally.</span></h2>
                <p className="text-gray-400 text-lg md:text-xl font-sans font-light leading-relaxed mb-12">
                   Freelancers don’t lose money because of bad work — they lose money because of bad agreements or no agreements at all.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative">
                {[
                  { t: "Payment Refusal", d: "Clients refuse or delay payments without clear recourse." },
                  { t: "Unlimited Revisions", d: "Endless work without extra pay, destroying your hourly rate." },
                  { t: "Scope Creep", d: "The 'just one more thing' trap that never ends." },
                  { t: "Ownership Disputes", d: "Clients claiming full IP rights before they even pay you." }
                ].map((item, i) => (
                   <div key={i} className={`p-8 md:p-10 bg-[#1B2D33]/40 border border-[#A07A41]/10 rounded-3xl md:rounded-[3rem] group hover:border-[#A07A41]/40 transition-all ${visibleSections.problem ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                      <AlertCircle className="text-[#A07A41] mb-6 md:mb-8" size={20} />
                      <h4 className="text-white font-serif font-bold text-lg md:text-xl mb-4 italic tracking-wide">{item.t}</h4>
                      <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed">{item.d}</p>
                   </div>
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden md:block scale-[3]"><Shield size={null} className="text-[#A07A41]" /></div>
             </div>

          </div>
        </section>

        {/* 3. What is a Freelancer Contract - BLUEPRINT BREAKDOWN MAPPING */}
        <section 
          ref={sectionRefs.definition}
          data-section="definition"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32">
              <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>The Instrument</span>
              <h2 className={`text-4xl md:text-7xl font-serif font-bold text-white tracking-tight ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`}>Income <span className="italic font-light text-[#A07A41]">Governance.</span></h2>
           </div>

           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                 {[
                   { icon: Target, t: "Scope of work", s: "Limits" },
                   { icon: DollarSign, t: "Payment terms", s: "Milestones" },
                   { icon: Activity, t: "Revision limits", s: "Caps" },
                   { icon: Clock, t: "Deadlines", s: "Timeline" },
                   { icon: Lock, t: "Ownership", s: "IP Rights" },
                   { icon: Gavel, t: "Cancellation", s: "Termination" }
                 ].map((box, i) => (
                    <div key={i} className={`p-8 md:p-10 bg-[#2A454E]/30 border border-white/10 rounded-2xl md:rounded-[3rem] flex flex-col items-center text-center group hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.definition ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                       <box.icon className="text-[#A07A41] group-hover:text-black mb-6 md:mb-10 transition-transform group-hover:scale-125" size={24} />
                       <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-black/60 mb-2 italic">{box.s}</span>
                       <h4 className="text-white font-serif font-bold text-base md:text-lg group-hover:text-black leading-tight">{box.t}</h4>
                    </div>
                 ))}
              </div>
           </div>

        </section>

        {/* 4. Core Services - STICKY PARALLAX CARDS MAPPING */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             {freelancerServices.map((service, i) => (
                <div key={i} className={`sticky top-32 mb-12 transition-all duration-700 ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="bg-[#1B2D33] border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px]">
                      <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
                         <div className="flex items-center gap-6 mb-10">
                            <div className="h-16 w-16 bg-[#A07A41]/10 rounded-3xl flex items-center justify-center text-[#A07A41] border border-[#A07A41]/30">
                               <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white uppercase italic">{service.title}</h3>
                         </div>
                         <p className="text-gray-400 text-base md:text-lg font-sans font-light leading-relaxed mb-10 md:mb-12 border-l-2 border-[#A07A41] pl-6 md:pl-8 italic">
                            {service.desc}
                         </p>
                         <div className="pt-8 md:pt-10 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] md:tracking-[0.4em] text-[#A07A41]">Asset Logic: {service.output}</span>
                            <ArrowRight className="text-[#A07A41] opacity-50" size={18} />
                         </div>

                      </div>
                      <div className="lg:w-1/2 relative bg-[#050505] overflow-hidden">
                         <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[3s]" />
                         <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-transparent to-transparent"></div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* 5. Our Process - STEPPING NODES MAPPING */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-32">
             <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Workflow Integration</span>
             <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white tracking-tight ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>The Delivery <span className="italic font-light text-[#A07A41]">Pipeline.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
             {[ 
               "Service Analysis", "Risk Identification", 
               "Custom Drafting", "Legal Hardening", "Final Delivery" 
             ].map((step, i) => (
                <div key={i} className={`relative p-8 md:p-12 bg-[#2A454E]/40 border border-white/10 rounded-[2rem] md:rounded-[3rem] text-center group hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                   <div className="text-3xl md:text-4xl font-serif font-black text-[#A07A41]/10 mb-6 md:mb-8 group-hover:text-black/10">0{i+1}</div>
                   <h4 className="text-white font-bold uppercase tracking-widest text-[9px] md:text-[11px] group-hover:text-black leading-tight italic">{step}</h4>
                   {i < 4 && <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden lg:block z-10"><ArrowRight className="text-[#A07A41]" size={16} /></div>}
                </div>
             ))}
          </div>

        </section>

        {/* 6. Legal Coverage - BADGE MAPPING */}
        <section 
          ref={sectionRefs.legal}
          data-section="legal"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-24 leading-tight">Contracts aligned with <br /><span className="italic font-light text-[#A07A41]">UK Legal Structure.</span></h2>
             
             <div className="flex flex-wrap justify-center gap-12">
                {[ 
                  { l: "Contract Law UK", s: "Basic Enforcement" },
                  { l: "Copyright Act 1988", s: "IP Ownership" },
                  { l: "UK GDPR", s: "Data Protection" }
                ].map((item, i) => (
                   <div key={i} className={`p-16 rounded-[4rem] border border-white/5 bg-[#1B2D33]/40 flex flex-col items-center gap-10 group hover:border-[#A07A41]/30 transition-all ${visibleSections.legal ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                      <Scale className="text-[#A07A41] group-hover:rotate-12 transition-transform" size={40} />
                      <div>
                         <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 uppercase italic leading-tight">{item.l}</h3>
                         <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">{item.s}</span>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </section>

        {/* 7. Who This Is For - DIRECTORY MAPPING */}
        <section 
          ref={sectionRefs.who}
          data-section="who"
          className="relative py-24 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <h3 className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold">Targeted Industry Categories</h3>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-wrap justify-center gap-6">
             {[ 
               "Designers & Creatives", "Software Developers", "Writers & Strategists", "Digital Agencies", "Consultants", "Gig Professionals"
             ].map((group, i) => (
                <div key={i} className={`flex items-center gap-6 px-10 py-6 bg-[#2A454E]/30 border border-white/5 rounded-full group hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <Laptop className="text-[#A07A41] group-hover:text-black" size={18} />
                   <span className="text-xs md:text-base font-serif font-black uppercase text-white/50 group-hover:text-black transition-colors italic">{group}</span>
                </div>
             ))}
          </div>
        </section>

        {/* 8. What You Get & 9. Why Freelancers Choose Us - THE OVERLAPPING FRAMEWORK MAPPING */}
        <section className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 lg:gap-40 items-center">
              <div ref={sectionRefs.deliverables} data-section="deliverables" className={`${visibleSections.deliverables ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-10 block font-serif">Comprehensive Pack</span>
                 <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-12 tracking-tight">The Freelance <br /><span className="italic font-light text-[#A07A41]">Asset Pack.</span></h2>
                 <div className="space-y-4">
                    {[ "Custom Freelancer agreement", "Payment protection clauses", "IP rights agreement", "Revision control structure", "Legal risk breakdown" ].map((asset, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 md:p-8 bg-[#1B2D33]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41]/40 transition-all">
                          <FileText className="text-[#A07A41]" size={20} />
                          <span className="text-gray-300 font-sans font-bold uppercase tracking-widest text-[11px] group-hover:text-white">{asset}</span>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div ref={sectionRefs.why} data-section="why" className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="p-12 lg:p-24 bg-[#A07A41] rounded-[5rem] overflow-hidden shadow-2xl relative">
                    <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 scale-[3]"><Shield size={200} className="text-black" /></div>
                    <span className="text-black/60 uppercase tracking-[0.4em] text-[10px] font-black mb-10 block font-serif">Market Advantage</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-12 tracking-tight leading-tight italic">Guaranteed payment protection & Clear client boundaries.</h2>
                    <ul className="space-y-8">
                       {[ "No more scope creep exploitation", "Absolute legal ownership clarity", "Industrial-grade payment security", "Professional freelance stance" ].map((point, i) => (
                          <li key={i} className="flex items-center gap-6 border-b border-black/10 pb-6 last:border-0">
                             <CheckCircle className="text-black" size={20} />
                             <span className="text-black font-sans text-[12px] md:text-[14px] font-black uppercase tracking-[0.1em]">{point}</span>
                          </li>
                       ))}
                    </ul>
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
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">Expert <br /><span className="italic font-light text-[#A07A41]">Answers.</span></h2>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-white/5 rounded-[3rem] bg-[#2A454E]/20 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-10 flex items-center justify-between group text-left"
                  >
                    <span className={`text-lg md:text-xl font-serif transition-colors leading-tight ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`shrink-0 p-4 rounded-2xl border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === index ? 'bg-[#A07A41] border-[#A07A41] rotate-180' : ''}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === index ? 'max-h-96 pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed border-l-2 border-[#A07A41]/40 pl-8 italic">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Final CTA - FULL WIDTH MAPPING */}
        <section 
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`max-w-7xl mx-auto p-12 md:p-32 bg-[#1B2D33]/80 border border-white/5 rounded-[6rem] backdrop-blur-3xl relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-20 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="lg:w-2/3 text-center lg:text-left">
                 <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-black mb-10 block font-serif italic italic">Revenue Integrity</span>
                 <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-8 md:mb-12 leading-[1.1] tracking-tighter">Stop Losing Money <br /><span className="italic font-light text-[#A07A41]">To Bad Clients.</span></h2>
                 <p className="text-gray-400 font-sans text-lg md:text-xl leading-relaxed italic border-l-4 border-[#A07A41] pl-8 md:pl-10 hidden md:block">
                    Get a legally structured freelancer contract that protects your time, work, and income.
                 </p>
              </div>
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                 <a href="#contact" className="group relative flex items-center justify-center gap-4 md:gap-6 px-12 md:px-16 py-6 md:py-8 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[10px] md:text-[12px] rounded-full transition-all duration-500 hover:scale-105 hover:bg-white shadow-[0_45px_90px_rgba(160,122,65,0.4)] w-full text-center">
                    <span>Create Your Contract Now</span>
                    <ArrowRight className="h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-3 transition-transform" />
                 </a>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default FreelancerContractsPage;
