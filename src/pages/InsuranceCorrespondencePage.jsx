import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Mail, ShieldCheck, FileText, ChevronDown, 
  MessageSquare, Search, Scale, Clock, Briefcase, 
  Landmark, Users, ClipboardCheck, TrendingUp, 
  AlertCircle, ShieldAlert, Zap, Info, Send, 
  FileUp, MapPin, Calendar, CheckCircle2, XCircle,
  FileSearch, Lock, Newspaper, HelpCircle
} from 'lucide-react';

const InsuranceCorrespondencePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    insuranceType: '',
    claimDetails: '',
  });
  
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    why: false,
    services: false,
    process: false,
    types: false,
    benefits: false,
    problems: false,
    form: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    services: useRef(null),
    process: useRef(null),
    types: useRef(null),
    benefits: useRef(null),
    problems: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Insurance Correspondence Services UK | H&S Co.";

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

  // Substitute for RefreshCw if not available or just use Clock
  const RefreshCwIcon = Clock; 

  const coreServices = [
    {
      title: "Claim Submission Communication",
      desc: "Meticulous drafting and submission of insurance claims to ensure every detail is accurately represented.",
      details: ["Strategic claim drafting", "Document verification", "Initial submission management"],
      Icon: FileSearch
    },
    {
      title: "Policy Review & Interpretation",
      desc: "Expert analysis of policy wording to identify coverage gaps, limitations, and your full legal entitlements.",
      details: ["Clause-by-clause analysis", "Coverage limit verification", "Exclusion identification"],
      Icon: Newspaper
    },
    {
      title: "Response to Insurance Queries",
      desc: "Handling complex information requests from insurers with legally sound and strategically optimized responses.",
      details: ["Query tactical analysis", "Evidence coordination", "Professional response drafting"],
      Icon: MessageSquare
    },
    {
      title: "Dispute & Rejection Handling",
      desc: "Challenging unfair claim denials or underpayments through professional appeals and evidence-based rebuttals.",
      details: ["Rejection analysis", "Appeal preparation", "Negotiation for better terms"],
      Icon: ShieldAlert
    },
    {
      title: "Ongoing Communication Management",
      desc: "Maintaining a consistent and professional communication log to keep your claim moving toward resolution.",
      details: ["Proactive follow-ups", "Timeline tracking", "Consistency monitoring"],
      Icon: RefreshCwIcon
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Case Review", 
      desc: "We perform a deep-dive analysis of your current situation and existing insurance policy documents." 
    },
    { 
      step: "02", 
      title: "Strategy Phase", 
      desc: "We develop a bespoke communication plan tailored to the specific behavior and history of your insurer." 
    },
    { 
      step: "03", 
      title: "Drafting & Submission", 
      desc: "Our specialists draft all outgoing messages with high precision to avoid any potential misinterpretations." 
    },
    { 
      step: "04", 
      title: "Active Management", 
      desc: "We persist with regular follow-ups to ensure your claim stays at the top of the insurer's priority list." 
    }
  ];

  const commonProblems = [
    { t: "Confusing policy language", i: HelpCircle, d: "Obscure terms used to limit coverage." },
    { t: "Delayed responses", i: Clock, d: "Insurers using 'stall tactics' on valid claims." },
    { t: "Incorrect submissions", i: AlertCircle, d: "Minor clerical errors leading to automatic rejection." },
    { t: "Underpaid claims", i: TrendingUp, d: "Settlement offers that don't reflect true loss value." },
    { t: "Lack of documentation", i: FileSearch, d: "Claim failures due to missing or weak evidence." }
  ];

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
             <img src="/bibhero.jpg" alt="Insurance Background" className="w-full h-full object-cover opacity-20 scale-105" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/80 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2A454E]/20 to-[#2A454E]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <div className={`flex items-center gap-6 mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                  <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold font-sans">Professional Claim Management</span>
                </div>
                
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="block animate-fade-in-top-left">Insurance</span>
                  <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Correspondence</span>
                </h1>
                
                <p className={`text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                  We handle all communication with insurers—accurately, professionally, and in your best legal interest to maximize your claim success.
                </p>

                <div className={`flex flex-col sm:flex-row gap-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                   <div className="group flex items-center gap-5 p-4 bg-[#A07A41]/10 border border-[#A07A41]/30 rounded-2xl backdrop-blur-sm">
                      <div className="p-3 bg-[#A07A41] rounded-xl text-black">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[#A07A41] font-black uppercase tracking-widest text-[9px] mb-1">Precision First</p>
                        <p className="text-white font-serif italic text-base whitespace-nowrap">Avoid mistakes & delays.</p>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-6">
                      <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-xl hover:scale-105 active:scale-95">
                        Request Insurance Support
                      </button>
                      <button className="text-white font-bold uppercase tracking-[0.2em] text-[10px] border-b border-[#A07A41] pb-1 hover:text-[#A07A41] transition-colors">
                        Speak with a Specialist
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY INSURANCE COMMUNICATION MATTERS */}
        <section 
          ref={sectionRefs.why}
          data-section="why"
          className="relative py-20 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.2em] text-[10px] font-bold">The Written Record</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                  Why Proper <br />
                  <span className="italic font-light text-[#A07A41]">Correspondence Matters.</span>
                </h2>
                <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed mb-12">
                  In the world of insurance, if it isn't in writing, it didn't happen. A single misinterpreted sentence can compromise your indemnity rights.
                </p>

                <div className="space-y-4">
                   {[
                     "Direct Claim Rejection",
                     "Delayed Settlement Timelines",
                     "Significantly Reduced Compensation",
                     "Strategic Misinterpretation",
                     "Future Legal Complications"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#A07A41] transition-all">
                          <XCircle className="h-4 w-4 text-[#A07A41] group-hover:text-black" />
                        </div>
                        <span className="text-gray-200 text-base font-serif italic tracking-wide group-hover:text-[#A07A41] transition-colors">{item}</span>
                     </div>
                   ))}
                </div>
              </div>

              <div className={`relative ${visibleSections.why ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <div className="aspect-video relative rounded-3xl overflow-hidden border border-[#A07A41]/30">
                   <img src="/co.jpg" alt="Documentation" className="w-full h-full object-cover grayscale brightness-50" />
                   <div className="absolute inset-x-8 bottom-8 p-8 bg-[#1B2D33] rounded-2xl border border-white/5 shadow-2xl text-center">
                     <p className="text-[#A07A41] font-serif italic text-lg leading-tight">"We ensure every message protects your position."</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section 
          ref={sectionRefs.services}
          data-section="services"
          className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-20">
             <div className={`${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-[10px] font-bold mb-6 block">Our Service Spectrum</span>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
                  What We <span className="italic font-light text-[#A07A41]">Handle for You.</span>
                </h2>
             </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreServices.map((service, i) => {
                  const Icon = service.Icon;
                  return (
                    <div 
                      key={i} 
                      className={`group p-10 bg-[#2A454E]/40 border border-white/5 rounded-3xl hover:bg-[#A07A41] transition-all duration-500 ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                       <div className="w-14 h-14 bg-[#1B2D33] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black transition-colors">
                          <Icon className="h-7 w-7 text-[#A07A41]" />
                       </div>
                       <h3 className="text-2xl font-serif font-bold text-white mb-6 group-hover:text-black transition-colors">{service.title}</h3>
                       <p className="text-gray-400 group-hover:text-black/80 font-sans font-light text-sm leading-relaxed mb-8 transition-colors">
                         {service.desc}
                       </p>
                       <div className="space-y-3">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                               <div className="w-1 h-1 rounded-full bg-[#A07A41] group-hover:bg-black"></div>
                               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-200 group-hover:text-black transition-colors">{detail}</span>
                            </div>
                          ))}
                       </div>
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
          className="relative py-20 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-24 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-16 tracking-tight">
                  How We Manage <br /> 
                  <span className="italic font-light text-[#A07A41]">Your Communication.</span>
                </h2>
                <div className="aspect-video relative rounded-[2rem] overflow-hidden border border-white/5 group shadow-xl">
                   <img src="/doc.jpg" alt="Process Workflow" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
                </div>
             </div>

             <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div 
                    key={i} 
                    className={`p-8 bg-[#1B2D33]/60 border border-white/5 rounded-2xl hover:border-[#A07A41]/40 transition-all duration-300 flex gap-8 items-center group ${visibleSections.process ? 'animate-fade-in-right' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                     <div className="text-5xl font-serif font-black text-white/5 group-hover:text-[#A07A41]/10 transition-colors shrink-0">{step.step}</div>
                     <div>
                       <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#A07A41] transition-colors">{step.title}</h4>
                       <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. TYPES OF INSURANCE */}
        <section 
          ref={sectionRefs.types}
          data-section="types"
          className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-20 ${visibleSections.types ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-[10px] font-bold mb-6 block">Universal Coverage</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-8">
                  Insurance Types <br /> <span className="italic font-light text-[#A07A41]">We Handle.</span>
                </h2>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { n: "Motor insurance", i: RefreshCwIcon },
                  { n: "Health insurance", i: Mail },
                  { n: "Property insurance", i: Landmark },
                  { n: "Travel insurance", i: MapPin },
                  { n: "Liability insurance", i: Scale },
                  { n: "Business insurance", i: Briefcase }
                ].map((item, i) => {
                  const Icon = item.i;
                  return (
                    <div 
                      key={i} 
                      className={`flex flex-col items-center p-8 bg-[#2A454E]/40 border border-white/5 rounded-2xl hover:bg-[#A07A41] transition-all duration-500 group ${visibleSections.types ? 'animate-fade-in-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-[#1B2D33] rounded-xl flex items-center justify-center mb-6 border border-[#A07A41]/20 group-hover:bg-black transition-colors">
                        <Icon className="h-5 w-5 text-[#A07A41]" />
                      </div>
                      <span className="text-gray-200 group-hover:text-black font-serif font-bold text-[11px] uppercase tracking-wide text-center leading-tight transition-colors">{item.n}</span>
                    </div>
                  );
                })}
             </div>
          </div>
        </section>

        {/* 6. BENEFITS */}
        <section 
          ref={sectionRefs.benefits}
          data-section="benefits"
          className="relative py-20 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-20">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                  Strategic <span className="italic font-light text-[#A07A41]">Advantages.</span>
                </h2>
             </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { t: "Reduced Rejection", d: "Professional wording removes tactical ambiguity used to deny claims." },
               { t: "Faster Processing", d: "Direct and accurate correspondence accelerates internal reviews." },
               { t: "Stronger Negotiation", d: "Approach settlements with a documented factual record." },
               { t: "Less Stress", d: "Remove yourself from the confrontational nature of disputes." },
               { t: "Clear Data", d: "Ensure your case is built on professional standards." }
             ].map((benefit, i) => (
                <div 
                  key={i} 
                  className={`p-10 bg-[#1B2D33]/80 border border-white/5 rounded-3xl hover:bg-[#A07A41]/10 transition-all duration-500 flex flex-col items-center text-center ${visibleSections.benefits ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                   <div className="w-12 h-12 bg-[#2A454E] rounded-full flex items-center justify-center mb-8 border border-[#A07A41]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#A07A41]" />
                   </div>
                   <h4 className="text-xl font-serif font-bold text-white mb-4 leading-tight">{benefit.t}</h4>
                   <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">{benefit.d}</p>
                </div>
             ))}
          </div>
        </section>

        {/* 7. COMMON PROBLEMS */}
        <section 
          ref={sectionRefs.problems}
          data-section="problems"
          className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-24 items-center">
             <div className={`${visibleSections.problems ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-10 tracking-tight">
                  Solving Insurance <br /> <span className="italic font-light text-[#A07A41]">Communication Issues.</span>
                </h2>
                <div className="inline-flex items-center gap-4 p-6 bg-[#A07A41]/5 border-l-4 border-[#A07A41] rounded-r-2xl">
                   <Zap className="h-6 w-6 text-[#A07A41] animate-pulse" />
                   <p className="text-[#A07A41] font-serif italic text-lg whitespace-nowrap">"We protect your claim at every stage."</p>
                </div>
             </div>

             <div className="space-y-4">
                {commonProblems.map((prob, i) => {
                  const Icon = prob.i;
                  return (
                    <div 
                      key={i} 
                      className={`p-6 bg-[#2A454E]/40 border border-white/5 rounded-2xl flex gap-6 items-center group hover:bg-[#A07A41] transition-all duration-500 ${visibleSections.problems ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                       <div className="w-11 h-11 bg-[#1B2D33] rounded-xl flex items-center justify-center border border-[#A07A41]/20 group-hover:bg-black transition-colors shrink-0">
                          <Icon className="h-5 w-5 text-[#A07A41]" />
                       </div>
                       <div>
                         <h5 className="text-base font-serif font-bold text-white group-hover:text-black transition-colors mb-1 uppercase tracking-wide">{prob.t}</h5>
                         <p className="text-gray-400 group-hover:text-black/80 font-sans font-light text-[11px] transition-colors leading-tight">{prob.d}</p>
                       </div>
                    </div>
                  );
                })}
             </div>
          </div>
        </section>

        {/* 8. FORM */}
        <section 
          ref={sectionRefs.form}
          data-section="form"
          className="relative py-20 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[80rem] mx-auto">
             <div className="bg-[#1B2D33] rounded-[3rem] p-12 lg:p-24 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                   <div className={`${visibleSections.form ? 'animate-fade-in-left' : 'opacity-0'}`}>
                      <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tighter leading-tight">
                        Get Help <br /><span className="italic font-light text-[#A07A41]">With Your Case.</span>
                      </h2>
                      <p className="text-gray-400 text-base font-sans font-light leading-relaxed mb-10">
                        Avoid costly communication mistakes. Submit your claim details for expert review.
                      </p>
                      <div className="flex items-center gap-4 p-6 bg-[#2A454E]/40 border border-white/5 rounded-2xl w-fit">
                         <Lock className="h-5 w-5 text-[#A07A41]" />
                         <span className="text-gray-300 font-serif italic text-base">Strict confidentiality.</span>
                      </div>
                   </div>

                   <form className={`space-y-6 ${visibleSections.form ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                      <div className="grid md:grid-cols-2 gap-6">
                         <input type="text" placeholder="Full Name" className="w-full bg-[#1B2D33] border-b border-white/10 p-4 text-white outline-none focus:border-[#A07A41] transition-all text-sm" />
                         <input type="email" placeholder="Email / Phone" className="w-full bg-[#1B2D33] border-b border-white/10 p-4 text-white outline-none focus:border-[#A07A41] transition-all text-sm" />
                      </div>
                      <select className="w-full bg-[#1B2D33] border-b border-white/10 p-4 text-white outline-none focus:border-[#A07A41] appearance-none text-sm">
                         <option>Select Insurance Type</option>
                         <option>Motor</option>
                         <option>Health</option>
                         <option>Property</option>
                      </select>
                      <textarea rows="3" placeholder="Brief Claim Details" className="w-full bg-[#1B2D33] border-b border-white/10 p-4 text-white outline-none focus:border-[#A07A41] resize-none text-sm"></textarea>
                      <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded transition-all duration-300 hover:bg-[#A07A41] shadow-xl group flex items-center gap-4 w-full justify-center lg:w-fit">
                         <span>Submit Your Case</span>
                         <Send className="h-4 w-4" />
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
          className="relative py-20 lg:py-32 bg-[#1B2D33] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
             <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white text-center mb-20 tracking-tight ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
               Frequently Asked <span className="italic font-light text-[#A07A41]">Questions.</span>
             </h2>

             <div className="space-y-4">
               {[
                 { q: "Can you help with rejected claims?", a: "Yes, we analyze the rejection letter, identify weaknesses, and draft professional appeals." },
                 { q: "Do I need legal knowledge?", a: "No. We handle complex policy language for you, explaining everything in clear terms." },
                 { q: "How long does it take?", a: "Varies by insurer. We maintain proactive follow-ups to ensure efficiency." },
                 { q: "Is communication confidential?", a: "All interaction is handled under strict UK data protection standards." }
               ].map((faq, index) => (
                 <div key={index} className={`border border-white/5 rounded-2xl bg-[#2A454E]/40 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
                   <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="w-full p-8 flex items-center justify-between group text-left">
                     <span className={`text-lg font-serif font-bold transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                     <ChevronDown className={`h-5 w-5 text-[#A07A41] transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                   </button>
                   <div className={`transition-all duration-500 ${activeFaq === index ? 'max-h-48 pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                     <p className="text-gray-400 text-base px-8 pt-8 border-t border-white/5">{faq.a}</p>
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
          className="relative py-24 lg:py-48 bg-[#16272D] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[80rem] mx-auto text-center">
             <div className={`p-16 lg:p-32 bg-[#2A454E]/40 border-2 border-[#A07A41]/10 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-tight">
                  Professional <br />
                  <span className="italic font-light text-[#A07A41]">Correspondence.</span>
                </h2>
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-2xl hover:scale-105 active:scale-95 group">
                   <div className="flex items-center gap-4">
                     <span>Start Your Correspondence Now</span>
                     <ArrowRight size={16} className="group-hover:translate-x-2" />
                   </div>
                </button>
             </div>
          </div>
        </section>
      </main>
    </div>
  );

};

export default InsuranceCorrespondencePage;
