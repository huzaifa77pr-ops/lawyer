import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  Mail, Scale, Gavel, AlertTriangle, Users, 
  Globe, ShieldCheck, Clock, ExternalLink
} from 'lucide-react';

const LegalNoticesDraftingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    whatIs: false,
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
    intro: useRef(null),
    whatIs: useRef(null),
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
      title: "Demand Letters for Payment Recovery", 
      icon: Scale, 
      desc: "Recover unpaid dues with strong legal communication including invoice claims and deadlines.",
      deliverable: "Professionally drafted demand letter" 
    },
    { 
      title: "Breach of Contract Notices", 
      icon: ShieldAlert, 
      desc: "Address contract violations by identifying breaches and outlining required corrective actions.",
      deliverable: "Legally structured notice" 
    },
    { 
      title: "Cease and Desist Letters", 
      icon: AlertTriangle, 
      desc: "Stop unauthorized or harmful actions such as IP issues or defamation with a formal warning.",
      deliverable: "Strong legal warning letter" 
    },
    { 
      title: "Employment & Workplace Notices", 
      icon: Briefcase, 
      desc: "Handle workplace-related disputes professionally for both employers and employees.",
      deliverable: "Employment-focused notice" 
    },
    { 
      title: "Legal Response Letters", 
      icon: FileSearch, 
      desc: "Respond to received legal notices with clarity, risk-aware language, and position clarification.",
      deliverable: "Response letter draft" 
    }
  ];

  const faqItems = [
    { q: "What is a demand letter?", a: "A formal letter requesting specific action (such as payment or compliance) before legal proceedings are initiated." },
    { q: "Is a legal notice necessary before court?", a: "In many cases, it is strongly recommended as a first step to demonstrate a good faith attempt at dispute resolution." },
    { q: "Can a demand letter resolve disputes?", a: "Yes, many disputes are successfully resolved through professionally drafted notices without the need for litigation." },
    { q: "How long does it take?", a: "Typically our drafting turnaround time is 24–72 hours depending on the complexity of the case." }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[100vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#1B2D33]"
        >
          <div className="absolute inset-0 z-0 opacity-40 group">
             <img src="/no.jpg" alt="Legal Notices" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className={`flex items-center justify-center lg:justify-start gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">Dispute Resolution Experts</span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">UK Legal Notices &</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200 uppercase tracking-tighter">Demand Letter Services.</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Take formal legal action with professionally drafted legal notices and demand letters — clear, enforceable, and designed to resolve disputes effectively.
              </p>

              <div className={`flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl w-full sm:w-auto">
                   <Mail className="h-4 w-4" />
                   <span>Request Notice Drafting</span>
                   <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Introduction / Overview */}
        <section 
          ref={sectionRefs.intro}
          data-section="intro"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto z-10 relative">
            <div className={`grid lg:grid-cols-2 gap-20 items-center ${visibleSections.intro ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
              
              <div className="relative group p-4 border border-[#A07A41]/20 rounded-[4rem]">
                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-[#2A454E] relative">
                   <img src="/no1.jpg" alt="Strategic Drafting" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2D33] via-transparent to-transparent"></div>
                </div>

              </div>

              <div className={`${visibleSections.intro ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Strategic Communication</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8 text-center lg:text-left">
                  Assert Your Position with <br />
                  <span className="italic font-light text-[#A07A41]">Legal Authority.</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                    Legal disputes often begin with a formal notice. A poorly written letter can weaken your position—while a professionally drafted notice can resolve issues without going to court.
                  </p>
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                    H&S CO provides legal notice and demand letter drafting services tailored to UK legal standards. We ensure your communication is clear, legally sound, and strategically written to achieve maximum impact.
                  </p>
                  <div className="flex items-center gap-10 pt-8 justify-center lg:justify-start">
                     <div className="text-center group">
                        <Gavel className="h-10 w-10 text-[#A07A41] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Court Friendly</p>
                     </div>
                     <div className="h-12 w-[1px] bg-white/10"></div>
                     <div className="text-center group">
                        <Award className="h-10 w-10 text-[#A07A41] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Pre-Action Expert</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What is a Legal Notice */}
        <section 
          ref={sectionRefs.whatIs}
          data-section="whatIs"
          className="relative py-24 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-20 items-center z-10 relative">
              <div className={`w-full lg:w-1/2 ${visibleSections.whatIs ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Definition</span>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Formal <span className="italic font-light text-[#A07A41]">Legal Enforcement.</span></h2>
                 <p className="text-gray-300 text-xl font-sans font-light leading-relaxed italic border-t border-white/5 pt-12">
                   &quot;A legal notice or demand letter is a formal written communication sent to assert legal rights, demand action, and notify of potential legal proceedings.&quot;
                 </p>
              </div>
              <div className={`w-full lg:w-1/2 ${visibleSections.whatIs ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 group relative">
                    <img src="/no2.jpg" alt="Enforcement Action" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                 </div>
              </div>
           </div>

        </section>

        {/* 4. Our Services (CORE SECTION) */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>Drafting Suite</span>
             <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white tracking-tight ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>Specialized <span className="italic font-light text-[#A07A41]">Drafting.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, i) => (
              <div 
                key={i} 
                className={`group p-12 bg-[#1B2D33]/60 border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] hover:border-transparent transition-all duration-500 overflow-hidden relative ${visibleSections.services ? (i%2===0 ? 'animate-fade-in-top-left' : 'animate-fade-in-bottom-right') : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                 <div className="relative z-10">
                    <div className="w-16 h-16 bg-[#2A454E] rounded-2xl flex items-center justify-center mb-10 border border-[#A07A41]/20 group-hover:bg-white transition-all shadow-xl">
                       <service.icon className="h-7 w-7 text-[#A07A41] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight group-hover:text-black transition-colors">{service.title}</h3>
                    <p className="text-gray-400 font-sans font-light leading-relaxed text-sm mb-8 group-hover:text-black/80 transition-colors">{service.desc}</p>
                    <div className="mt-auto border-t border-white/5 pt-6 group-hover:border-black/10 transition-colors">
                       <span className="text-[10px] uppercase font-bold tracking-widest text-[#A07A41] group-hover:text-black">Deliverable: {service.deliverable}</span>
                    </div>
                 </div>
                 <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.1] transition-all">
                    <service.icon size={180} />
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Our Process */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>The Workflow</span>
                <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white tracking-tight ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`}>How We <span className="italic font-light text-[#A07A41]">Draft Results.</span></h2>
             </div>

             <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "01", title: "Understand Issue", icon: Search },
                  { step: "02", title: "Identify Position", icon: Target },
                  { step: "03", title: "Clear Drafting", icon: ClipboardCheck },
                  { step: "04", title: "Quality Audit", icon: ShieldCheck },
                  { step: "05", title: "Delivery", icon: CheckCircle }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col items-center text-center p-8 bg-[#2A454E]/20 border border-white/10 rounded-3xl group ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="w-14 h-14 bg-[#1B2D33] rounded-2xl flex items-center justify-center mb-8 border border-[#A07A41]/10 group-hover:bg-[#A07A41] group-hover:scale-110 transition-all duration-500">
                        <item.icon className="h-6 w-6 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     <span className="text-[#A07A41] font-bold italic text-sm mb-4 tracking-widest">{item.step}</span>
                     <h4 className="text-white font-serif font-bold text-sm tracking-tight leading-snug">{item.title}</h4>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 6. Legal Framework & Considerations */}
        <section 
          ref={sectionRefs.framework}
          data-section="framework"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.framework ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block font-serif">Structural Alignment</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Legal Framework & <br /><span className="italic font-light text-[#A07A41]">Considerations.</span></h2>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-10 border-l-2 border-[#A07A41]/30 pl-8">
                   Our notices are aligned with UK legal standards and best practices to ensure absolute clarity and high effectiveness in pre-litigation stages.
                </p>
                <div className="grid gap-6">
                   {[ "Contract law principles", "Civil dispute procedures", "Pre-action communication standards" ].map((text, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <ShieldCheck className="text-[#A07A41] h-5 w-5" />
                         <span className="text-gray-200 font-serif font-bold italic text-sm tracking-widest uppercase">{text}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className={`${visibleSections.framework ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="relative p-8 lg:p-12 bg-[#1B2D33] rounded-[4rem] border border-[#A07A41]/20 overflow-hidden shadow-2xl backdrop-blur-xl group hover:border-[#A07A41]/40 transition-all">
                   <div className="aspect-[16/9] rounded-[3rem] overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <img src="/no3.jpg" alt="Court Standards" className="w-full h-full object-cover" />
                   </div>
                   <h4 className="text-3xl font-serif font-bold text-white mb-6 relative z-10 italic underline decoration-[#A07A41]/30 underline-offset-8 text-center">UK Law Alignment.</h4>
                   <p className="text-gray-400 font-sans font-light leading-relaxed border-t border-white/5 pt-8 text-sm">
                      Every notice is drafted to withstand judicial review and maintain its formal standing within the UK court system should the matter escalate.
                   </p>
                </div>
             </div>

          </div>
        </section>

        {/* 7. Who Needs This Service */}
        <section 
          ref={sectionRefs.who}
          data-section="who"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>Target Audience</span>
             <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white tracking-tight ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>Who We <span className="italic font-light text-[#A07A41]">Serve.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[80rem] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-6">
             {[ "Businesses", "Individuals", "Employers", "Startups", "Legal Pros" ].map((item, i) => (
                <div key={i} className={`p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:bg-[#A07A41] group transition-all duration-500 text-center ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <Users className="mx-auto mb-6 text-[#A07A41] group-hover:text-black transition-colors" size={32} />
                   <span className="text-gray-300 font-bold uppercase tracking-[0.3em] text-[9px] group-hover:text-black transition-colors">{item}</span>
                </div>
             ))}
          </div>
        </section>

        {/* 8. Deliverables & 9. Why Choose */}
        <section 
          data-section="deliverables"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20">
             {/* 8. Deliverables */}
             <div ref={sectionRefs.deliverables} className={`${visibleSections.deliverables ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Project Outputs</span>
                <h2 className="text-3xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">Key <span className="italic font-light text-[#A07A41]">Deliverables.</span></h2>
                <div className="grid grid-cols-2 gap-4">
                   {[ "Legal Notice", "Demand Letter", "Response Letter", "Clause Library", "Ready-to-Send" ].map((text, i) => (
                      <div key={i} className="p-6 bg-[#1B2D33]/60 border border-white/5 rounded-2xl flex items-center gap-4">
                         <div className="h-2 w-2 rounded-full bg-[#A07A41]"></div>
                         <span className="text-gray-300 font-sans font-light text-xs tracking-widest uppercase">{text}</span>
                      </div>
                   ))}
                </div>
             </div>

             {/* 9. Why Choose */}
             <div ref={sectionRefs.why} data-section="why" className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block font-serif">Competitive Edge</span>
                <h2 className="text-3xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">Why Choose <span className="italic font-light text-[#A07A41]">H&S CO.</span></h2>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="h-6 w-6 mt-1 flex items-center justify-center shrink-0 border border-[#A07A41]/40 rounded-full"><div className="h-2 w-2 bg-[#A07A41] rounded-full"></div></div>
                      <p className="text-gray-300 text-base leading-relaxed font-light">Strong, professional legal drafting focused on results.</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="h-6 w-6 mt-1 flex items-center justify-center shrink-0 border border-[#A07A41]/40 rounded-full"><div className="h-2 w-2 bg-[#A07A41] rounded-full"></div></div>
                      <p className="text-gray-300 text-base leading-relaxed font-light">Comprehensive UK-focused legal understanding and compliance.</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="h-6 w-6 mt-1 flex items-center justify-center shrink-0 border border-[#A07A41]/40 rounded-full"><div className="h-2 w-2 bg-[#A07A41] rounded-full"></div></div>
                      <p className="text-gray-300 text-base leading-relaxed font-light">Clear, persuasive communication designed to resolve disputes fast.</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="h-6 w-6 mt-1 flex items-center justify-center shrink-0 border border-[#A07A41]/40 rounded-full"><div className="h-2 w-2 bg-[#A07A41] rounded-full"></div></div>
                      <p className="text-gray-300 text-base leading-relaxed font-light">Reliable & fast turnaround times (24–72 business hours).</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Structural Assurance</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Common <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-2xl bg-[#2A454E]/30 overflow-hidden ${visibleSections.faq ? (index%2===0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-8 flex items-center justify-between group"
                  >
                    <span className={`text-left text-lg font-serif transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`shrink-0 p-2 rounded-full border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === index ? 'bg-[#A07A41] border-[#A07A41] rotate-180' : ''}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out px-8 ${activeFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed italic border-l border-[#A07A41]/30 pl-6">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section 
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#A07A41]/5 opacity-30"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-4xl mx-auto p-16 lg:p-24 bg-[#1B2D33]/60 border border-[#A07A41]/10 rounded-[4rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Execution Ready</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">Resolve Your Dispute <br /><span className="italic font-light text-[#A07A41]">The Right Way.</span></h2>
              <p className="text-gray-400 font-sans text-lg mb-12 max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-10">
                 Take the first legal step with a professionally drafted notice. Clear, persuasive, and legally robust communication.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white shadow-2xl w-full sm:w-auto">
                  <span>Request Legal Notice Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default LegalNoticesDraftingPage;
