import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, FileText, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileCheck2, SearchCheck, Calculator, Inbox
} from 'lucide-react';

// Help icons mapping for internal list
const XCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
);
const TrendingDownIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-down"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
);
const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const GavelIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gavel"><path d="m14 5 3-3 5 5-3 3-5-5Z"/><path d="m14 5-8 8-3-3 8-8 3 3Z"/><path d="m2 21 6-6"/><path d="m5 18 3 3"/><path d="m2 18 3 3"/><path d="M7 10h10M12 14v7"/></svg>
);
const InfoIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

const DemandLetterPreparationPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    caseType: '',
    description: '',
  });

  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    why: false,
    services: false,
    process: false,
    caseTypes: false,
    effectiveness: false,
    benefits: false,
    form: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    services: useRef(null),
    process: useRef(null),
    caseTypes: useRef(null),
    effectiveness: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Demand Letter & Settlement Package Preparation | H&S Co.";

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
      title: "Demand Letter Drafting",
      desc: "We draft formal letters that clearly state your claim, establishing the legal basis under UK law with a professional tone.",
      points: ["Strategic claim statement", "Legal basis under UK law", "Strong professional tone"],
      icon: FileText,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Settlement Package Preparation",
      desc: "Full evidence compilation and organization of supporting documents to justify your legal arguments.",
      points: ["Evidence compilation", "Document organization", "Legal justification"],
      icon: Briefcase,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Compensation Calculation",
      desc: "In-depth damages assessment including financial losses and medical costs to maximize your claim value.",
      points: ["Financial loss assessment", "Medical cost calculation", "Damages evaluation"],
      icon: Calculator,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Supporting Documentation",
      desc: "Collection and verification of contracts, reports, witness statements, and proof of liability.",
      points: ["Witness statements", "Proof of liability", "Technical reports"],
      icon: FileCheck2,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { 
      step: "Step 1", 
      title: "Case Evaluation", 
      desc: "We review your case specifics and identify the key legal arguments that will drive your claim forward." 
    },
    { 
      step: "Step 2", 
      title: "Evidence Analysis", 
      desc: "We assess available documents and determine the overall strength of your claim before drafting." 
    },
    { 
      step: "Step 3", 
      title: "Drafting the Demand Letter", 
      desc: "Our experts create a clear, structured, and persuasive legal notice that demands action." 
    },
    { 
      step: "Step 4", 
      title: "Settlement Compilation", 
      desc: "We organize all supporting materials into a cohesive and strong submission package." 
    }
  ];

  const caseTypes = [
    "Personal injury claims",
    "Contract disputes",
    "Property damage claims",
    "Employment disputes",
    "Insurance claims",
    "Business disputes"
  ];

  const effectivenessPoints = [
    "Legally structured and precise",
    "Evidence-backed arguments",
    "Clear liability positioning",
    "Strong negotiation tone",
    "Professional formatting"
  ];

  const benefits = [
    { t: "Higher settlement offers", d: "Stronger documentation leads to better payout valuations.", i: TrendingUp },
    { t: "Faster dispute resolution", d: "Clear demands reduce the need for extended back-and-forth.", i: Clock },
    { t: "Reduced court necessity", d: "A professional demand often settles cases before litigation.", i: ShieldCheck },
    { t: "Negotiation leverage", d: "approaching settlements from a position of unshakeable evidenciary strength.", i: Gavel },
    { t: "Clear legal positioning", d: "Instantly establishes your authority in any legal dispute.", i: Scale }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          ref={sectionRefs.hero}
          data-section="hero"
          className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#1B2D33]"
        >
          {/* Background Layers */}
          <div className="absolute inset-0 z-0">
             <img src="/lawhero.jpg" alt="Demand Letter Background" className="w-full h-full object-cover opacity-20 scale-105" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/80 to-transparent"></div>
             <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#2A454E] to-transparent"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-6 mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold font-sans">Strategic Legal Drafting</span>
              </div>
              
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">Demand Letter & Settlement</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Package Preparation</span>
              </h1>
              
              <p className={`text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Strategic legal drafting designed to assert your claim, establish liability, and maximise your settlement outcome under UK legal standards.
              </p>

              <div className={`flex items-center gap-4 mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
                <div className="p-2 bg-[#A07A41]/10 rounded-full border border-[#A07A41]/30">
                  <ShieldCheck className="h-5 w-5 text-[#A07A41]" />
                </div>
                <p className="text-[#A07A41] font-serif italic text-base md:text-lg">
                   "We prepare legally strong, evidence-backed documents that demand attention and action."
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-700' : 'opacity-0'}`}>
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-xl md:w-fit group flex items-center gap-4">
                  <span>Request Demand Letter Preparation</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs rounded transition-all duration-500 hover:bg-white hover:text-black backdrop-blur-sm">
                  Speak to a Legal Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY DEMAND LETTERS MATTER */}
        <section 
          ref={sectionRefs.why}
          data-section="why"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">The Power of First Response</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                  Why a Strong <br />
                  <span className="italic font-light text-[#A07A41]">Demand Letter Is Critical</span>
                </h2>
                <div className="space-y-6 mb-12">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed">
                    A demand letter is often the first serious legal step in resolving a dispute. A weak letter can result in ignored claims, low offers, and loss of leverage.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    {[
                      { t: "Ignored claims", i: XCircleIcon },
                      { t: "Low settlement offers", i: TrendingDownIcon },
                      { t: "Delayed negotiations", i: ClockIcon },
                      { t: "Loss of legal leverage", i: GavelIcon }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-[#1B2D33] border border-white/5 rounded-2xl group hover:border-[#A07A41]/30 transition-all duration-300">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-150 transition-transform"></div>
                         <span className="text-gray-300 font-medium text-sm">{item.t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-[#A07A41]/5 border-l-4 border-[#A07A41] rounded-r-2xl inline-flex items-center gap-5">
                  <Zap className="h-6 w-6 text-[#A07A41] animate-pulse" />
                  <p className="text-lg font-serif italic text-white leading-tight">
                    "A professionally drafted demand letter sets the tone for serious negotiation."
                  </p>
                </div>
              </div>

              <div className={`relative ${visibleSections.why ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-[#A07A41]/20 relative shadow-biggest scale-95 hover:scale-100 transition-transform duration-700">
                   <img src="/sca.jpg" alt="Strategic Negotiation" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <div className={`${visibleSections.services ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                  Comprehensive <span className="italic font-light text-[#A07A41]">Settlement Solutions.</span>
                </h2>
             </div>
          </div>
            
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {coreServices.map((service, i) => (
                 <div 
                   key={i} 
                   className={`group relative p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden ${visibleSections.services ? service.anim : 'opacity-0'}`}
                   style={{ animationDelay: `${i * 150}ms` }}
                 >
                   <div className="relative z-10 flex flex-col h-full">
                     <div className="w-16 h-16 bg-[#1B2D33] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#A07A41] transition-colors duration-500 shadow-xl border border-white/5">
                       <service.icon className="h-8 w-8 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     
                     <h3 className="text-2xl font-serif font-bold text-white mb-6 leading-tight group-hover:text-[#A07A41] transition-colors">{service.title}</h3>
                     <p className="text-gray-400 font-sans font-light text-sm leading-relaxed mb-8 flex-grow">
                       {service.desc}
                     </p>
                     
                     <ul className="space-y-3 pt-6 border-t border-white/5">
                       {service.points.map((point, idx) => (
                         <li key={idx} className="flex items-center gap-3 text-[11px] text-gray-500 font-bold uppercase tracking-widest group-hover:text-gray-200 transition-colors">
                           <CheckCircle className="h-3 w-3 text-[#A07A41]" />
                           {point}
                         </li>
                       ))}
                     </ul>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. OUR PROCESS */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className={`${visibleSections.process ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-12">
                  How We Prepare <br />
                  <span className="italic font-light text-[#A07A41]">Your Settlement Package.</span>
                </h2>
                <div className="aspect-square relative rounded-[4rem] overflow-hidden border border-white/10 group shadow-biggest">
                   <img src="/h1.jpg" alt="Preparation Process" className="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div 
                    key={i} 
                    className={`p-10 bg-[#1B2D33]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] hover:border-[#A07A41]/50 transition-all duration-300 flex items-center gap-10 group ${visibleSections.process ? 'animate-fade-in-right' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                     <div className="text-5xl font-serif font-black text-white/5 group-hover:text-[#A07A41]/10 transition-colors uppercase whitespace-nowrap">0{i+1}</div>
                     <div>
                       <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#A07A41] transition-colors">{step.title}</h4>
                       <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. TYPES OF CASES SUPPORTED */}
        <section 
          ref={sectionRefs.caseTypes}
          data-section="caseTypes"
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-b border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`mb-24 ${visibleSections.caseTypes ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Broad Legal Support</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 tracking-tight">
                  Cases Suitable for <br /><span className="italic font-light text-[#A07A41]">Demand Letters.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseTypes.map((item, i) => (
                <div 
                  key={i} 
                  className={`p-8 bg-[#2A454E]/40 border border-white/5 rounded-3xl flex items-center gap-6 group hover:bg-[#A07A41] transition-all duration-500 ${visibleSections.caseTypes ? 'animate-fade-in-up' : 'opacity-0'}`} 
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1B2D33] flex items-center justify-center border border-[#A07A41]/20 group-hover:bg-black transition-colors">
                    <Scale className="h-5 w-5 text-[#A07A41]" />
                  </div>
                  <span className="text-white group-hover:text-black font-serif font-bold text-lg transition-colors">{item}</span>
                </div>
              ))}
            </div>
            
            <div className={`mt-20 p-10 bg-[#A07A41]/5 border border-dashed border-[#A07A41]/30 rounded-[3rem] inline-flex items-center gap-6 ${visibleSections.caseTypes ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
               <InfoIcon className="h-8 w-8 text-[#A07A41]" />
               <p className="text-xl font-serif italic text-white">
                  "If compensation or resolution is required, a demand letter is essential."
               </p>
            </div>
          </div>
        </section>

        {/* 6. WHAT MAKES OUR DOCUMENTS EFFECTIVE */}
        <section 
          ref={sectionRefs.effectiveness}
          data-section="effectiveness"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <div className={`${visibleSections.effectiveness ? 'animate-fade-in-left' : 'opacity-0'}`}>
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tighter leading-[1.1] mb-12">
                  Why Our Demand <br />
                  <span className="italic font-light text-[#A07A41]">Letters Get Results.</span>
               </h2>
               <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed mb-16 max-w-xl">
                  We don’t just write letters—we build legal pressure by presenting unshakeable evidence and clear liability positioning.
               </p>
            </div>
            
            <div className="space-y-6">
               {effectivenessPoints.map((item, i) => (
                 <div 
                   key={i} 
                   className={`flex items-center gap-6 p-8 bg-[#1B2D33] border border-white/5 rounded-3xl hover:bg-[#A07A41] group transition-all duration-700 shadow-xl ${visibleSections.effectiveness ? 'animate-fade-in-right' : 'opacity-0'}`} 
                   style={{ animationDelay: `${i * 150}ms` }}
                 >
                    <div className="w-12 h-12 rounded-2xl bg-[#2A454E] flex items-center justify-center border border-white/10 group-hover:bg-black transition-colors">
                      <Zap className="h-5 w-5 text-[#A07A41]" />
                    </div>
                    <span className="text-lg font-serif font-bold text-white group-hover:text-black transition-colors">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section 
          ref={sectionRefs.benefits}
          data-section="benefits"
          className="relative py-24 lg:py-48 bg-[#1B2D33] overflow-hidden border-t border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="bg-[#2A454E]/40 border border-[#A07A41]/20 rounded-[4rem] p-12 lg:p-32 backdrop-blur-3xl relative overflow-hidden shadow-3xl">
                <div className={`text-center mb-24 relative z-10 ${visibleSections.benefits ? 'animate-fade-in-up' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">The Strategic Move</span>
                   <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                      Benefits of a <span className="italic font-light text-[#A07A41]">Strong Package.</span>
                   </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                   {benefits.map((benefit, i) => {
                      const Icon = benefit.i;
                      return (
                        <div 
                          key={i} 
                          className={`p-10 bg-[#1B2D33]/60 rounded-3xl border border-white/10 hover:border-[#A07A41]/50 transition-all duration-500 h-full group ${visibleSections.benefits ? 'animate-fade-in-up' : 'opacity-0'}`}
                          style={{ animationDelay: `${i * 150}ms` }}
                        >
                           <Icon className="text-[#A07A41] h-10 w-10 mb-8" />
                           <h4 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">{benefit.t}</h4>
                           <p className="text-gray-400 font-sans font-light text-base leading-relaxed group-hover:text-gray-200 transition-colors">{benefit.d}</p>
                        </div>
                      );
                   })}
                </div>
                
                <div className="mt-24 text-center relative z-10 pt-16 border-t border-white/5">
                   <p className="text-[#A07A41] font-serif italic text-2xl lg:text-3xl tracking-wide max-w-4xl mx-auto">
                      "This is your first and strongest move in negotiation."
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* 8. REQUEST SERVICE FORM */}
        <section 
          ref={sectionRefs.form}
          data-section="form"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="bg-[#1B2D33] rounded-[4rem] p-10 lg:p-24 border border-white/5 shadow-biggest">
               <div className="grid lg:grid-cols-2 gap-24 relative z-10">
                  <div className={`${visibleSections.form ? 'animate-fade-in-left' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 leading-tight">
                      Request <br /><span className="italic font-light text-[#A07A41]">Our Preparation.</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg font-sans font-light leading-relaxed mb-12 max-w-xl">
                      Provide the preliminary details of your dispute. Our specialist team will conduct a secure review to build your demand.
                    </p>
                    <div className="p-8 bg-[#2A454E] border border-white/5 rounded-3xl inline-flex items-center gap-6 group hover:border-[#A07A41]/30 transition-all">
                       <ShieldCheck className="h-8 w-8 text-[#A07A41]" />
                       <span className="text-white font-serif italic text-lg opacity-80 decoration-[#A07A41] group-hover:opacity-100 transition-opacity">Strict Confidentiality Assured.</span>
                    </div>
                  </div>
                  
                  <form className={`space-y-6 bg-[#2A454E]/30 p-10 lg:p-16 rounded-[4rem] border border-white/5 ${visibleSections.form ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A07A41] ml-2">Full name</label>
                         <input type="text" placeholder="e.g. John Doe" className="w-full bg-[#1B2D33] border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#A07A41] transition-all text-sm" />
                       </div>
                       <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A07A41] ml-2">Contact Details</label>
                         <input type="text" placeholder="Phone or Email" className="w-full bg-[#1B2D33] border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#A07A41] transition-all text-sm" />
                       </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A07A41] ml-2">Case Type</label>
                         <select className="w-full bg-[#1B2D33] border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#A07A41] appearance-none transition-all text-sm">
                            <option>Select Case Type</option>
                            <option>Personal Injury</option>
                            <option>Contract Dispute</option>
                            <option>Employment Issue</option>
                            <option>Other</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A07A41] ml-2">Supporting Documents</label>
                         <div className="relative">
                            <input type="file" className="hidden" id="file-upload" />
                            <label htmlFor="file-upload" className="flex items-center justify-between w-full bg-[#1B2D33] border border-white/10 rounded-2xl p-5 text-gray-400 cursor-pointer hover:border-[#A07A41] transition-all text-sm">
                               <span>Upload Documents</span>
                               <Inbox className="h-4 w-4 text-[#A07A41]" />
                            </label>
                         </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A07A41] ml-2">Description of Issue</label>
                       <textarea rows="3" placeholder="Briefly describe your situation..." className="w-full bg-[#1B2D33] border border-white/10 rounded-[2rem] p-6 text-white outline-none focus:border-[#A07A41] resize-none transition-all text-sm"></textarea>
                    </div>
                    
                    <button className="w-full px-8 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded-2xl transition-all duration-500 hover:bg-[#A07A41] shadow-xl group flex items-center justify-center gap-6">
                         <span>Submit Your Case</span>
                         <Send className="h-4 w-4 transform group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
               </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto">
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white text-center mb-32 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Frequently Asked <span className="italic font-light text-[#A07A41]">Questions.</span>
            </h2>
            
            <div className="space-y-6">
              {[
                { q: "What is a demand letter?", a: "A formal legal document drafted to request specific compensation or a particular action from another party to resolve a dispute." },
                { q: "Is it legally binding?", a: "While not a court order, it carries significant legal weight and demonstrates a serious intent to pursue further legal action if not addressed." },
                { q: "Can it help avoid court?", a: "Yes, a high percentage of claims reach a settlement after receiving a professionally drafted demand letter and supporting package." },
                { q: "How long does the preparation take?", a: "Usually a few business days, depending on the complexity of the case and the volume of evidence to be analyzed." },
                { q: "Can the letter be used in court later?", a: "Yes, it serves as evidence of your attempt to resolve the matter amicably and clearly defines your claim's parameters from the start." }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-white/5 rounded-[2.5rem] bg-[#1B2D33] overflow-hidden transition-all duration-300 hover:border-[#A07A41]/30 ${visibleSections.faq ? (index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="w-full p-10 flex items-center justify-between group text-left">
                    <span className={`text-xl font-serif font-bold transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                    <div className={`p-2 rounded-full border border-white/10 group-hover:border-[#A07A41] transition-all duration-500 ${activeFaq === index ? 'rotate-180 bg-[#A07A41]' : ''}`}>
                      <ChevronDown className={`h-5 w-5 ${activeFaq === index ? 'text-black' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === index ? 'max-h-[30rem] pb-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
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
          {/* Animated Background Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A07A41]/5 rounded-full blur-[120px] animate-pulse"></div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-6xl mx-auto p-16 lg:p-32 bg-[#2A454E]/40 border-2 border-[#A07A41]/10 rounded-[5rem] backdrop-blur-3xl relative overflow-hidden group shadow-biggest ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-24 -right-24 h-64 w-64 bg-[#A07A41]/10 rounded-full blur-3xl group-hover:bg-[#A07A41]/20 transition-all duration-1000"></div>
              
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-12 leading-[1.1] tracking-tighter">
                Take Control of Your <br />
                <span className="italic font-light text-[#A07A41]">Legal Claim Today.</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-16 opacity-80">
                Start with a professionally prepared demand letter and settlement package that commands the respect your case deserves.
              </p>
              
              <button className="px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-2xl mx-auto active:scale-95 group flex items-center justify-center gap-6">
                 <span>Request Your Demand Letter Now</span>
                 <ArrowRight className="h-5 w-5 transform group-hover:translate-x-4 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};


export default DemandLetterPreparationPage;
