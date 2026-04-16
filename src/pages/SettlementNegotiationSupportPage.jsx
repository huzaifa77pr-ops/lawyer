import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileSearch, Database, BookOpen, Info, Inbox,
  LandmarkIcon, FileText, ClipboardList, Target, 
  Handshake, MessageSquare, ScaleIcon
} from 'lucide-react';

const SettlementNegotiationSupportPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    why: true, // Visible immediately
    services: false,
    process: false,
    cases: false,
    strength: false,
    benefits: false,
    form: true, // Visible for form
    faq: true, // Visible for FAQ
    cta: true  // Visible for CTA
  });

  const sectionRefs = {
    hero: useRef(null),
    why: useRef(null),
    services: useRef(null),
    process: useRef(null),
    cases: useRef(null),
    strength: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Settlement Negotiation Support | H&S Co.";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            setVisibleSections(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    }, { 
      threshold: 0.01,
      rootMargin: "0px 0px -50px 0px" 
    });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const coreServices = [
    {
      title: "Case Positioning",
      desc: "Defining legal strengths and identifying internal negotiation leverage points.",
      points: ["Legal strength audit", "Leverage identification", "Risk assessment"],
      icon: Target,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Offer Review & Strategy",
      desc: "In-depth analysis of settlement offers with strategic counter-offer planning.",
      points: ["Offer analysis", "Strategic counter-offers", "Acceptance advice"],
      icon: TrendingUp,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Opponent Communication",
      desc: "Professional and controlled handling of all messages with the opposing party.",
      points: ["Professional handling", "Controlled messaging", "Conflict reduction"],
      icon: MessageSquare,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Settlement Structuring",
      desc: "Drafting fair, legally sound agreements that ensure long-term protection.",
      points: ["Fair drafting", "Legal clarity", "Client protection"],
      icon: Handshake,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/lawhero.jpg" alt="Negotiation Hero" className="w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold font-sans">Confidence + Control</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-right">
                Professional Settlement <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Negotiation Support.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-300">
                Strategic legal negotiation designed to secure fair and optimal settlement outcomes across complex UK legal disputes.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-left animation-delay-500">
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded transition-all hover:bg-[#A07A41] shadow-2xl flex items-center gap-3">
                  <span>Request Negotiation Support</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-white/5">
                  Speak to a Legal Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY NEGOTIATION MATTERS */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-100'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Why Settlement <br />
                  <span className="italic font-light text-[#A07A41]">Negotiation Is Critical.</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">Most legal disputes are resolved before reaching court. Poor negotiation can lead to unfavourable agreements and significant losses.</p>
                <div className="space-y-4">
                  {[
                    "Unacceptably low settlement offers",
                    "Legally unfavourable agreements",
                    "Unnecessarily prolonged disputes",
                    "Significant avoidable financial loss",
                    "Missed opportunities for resolution"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex items-center gap-4 text-[#A07A41] font-bold uppercase tracking-widest text-xs">
                   <div className="w-10 h-[1px] bg-[#A07A41]"></div>
                   <span>Strong negotiation ensures better outcomes without litigation.</span>
                </div>
             </div>
             <div className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-100'}`}>
                <img src="/set1.jpg" alt="Negotiation table" className="rounded-2xl shadow-biggest w-full h-[550px] object-cover" />
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-16 ${visibleSections.services ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                   Our Negotiation <span className="italic font-light text-[#A07A41]">Expertise.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {coreServices.map((service, i) => (
                 <div key={i} className={`p-10 bg-[#2A454E]/30 border border-white/5 rounded hover:border-[#A07A41]/30 transition-all ${visibleSections.services ? service.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <service.icon className="h-12 w-12 text-[#A07A41] mb-8" />
                    <h3 className="text-xl font-serif font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">{service.desc}</p>
                    <ul className="space-y-3 pt-6 border-t border-white/5">
                      {service.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-gray-500 font-bold uppercase tracking-widest">
                          <CheckCircle className="h-3 w-3 text-[#A07A41]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. OUR PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-24 bg-[#2A454E] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                   How We Handle <br />
                   <span className="italic font-light text-[#A07A41]">Settlement Negotiations.</span>
                </h2>
                <div className="relative group rounded-3xl overflow-hidden shadow-biggest border border-white/5">
                   <img src="/set5.jpg" alt="Negotiation process" className="w-full h-full object-cover" />
                </div>
             </div>
             <div className="space-y-8">
                {[
                  { s: "Step 01", t: "Case Assessment", d: "We analyse your legal position and define clear objectives for the settlement." },
                  { s: "Step 02", t: "Strategy Development", d: "We define the optimum negotiation approach based on case facts and parties." },
                  { s: "Step 03", t: "Negotiation Execution", d: "Acting as your representative, we execute the negotiation plan with precision." },
                  { s: "Step 04", t: "Finalisation", d: "We ensure the resulting agreement is legally robust and provides maximum benefit." }
                ].map((step, i) => (
                  <div key={i} className={`p-8 bg-[#1B2D33] border-l-4 border-transparent hover:border-[#A07A41] rounded-r-xl transition-all group ${visibleSections.process ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <span className="text-[#A07A41] text-xs font-bold uppercase tracking-widest block mb-2">{step.s}</span>
                     <h4 className="text-xl font-serif font-bold text-white mb-2">{step.t}</h4>
                     <p className="text-gray-400 text-sm font-light leading-relaxed">{step.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. TYPES OF CASES WE HANDLE */}
        <section ref={sectionRefs.cases} data-section="cases" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.cases ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Cases Suitable for <span className="italic font-light text-[#A07A41]">Negotiation.</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                 {["Personal injury claims", "Contract disputes", "Employment disputes", "Insurance claims", "Business disputes", "Property disputes"].map((item, i) => (
                    <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-2xl group hover:bg-[#A07A41] transition-all duration-700 ${visibleSections.cases ? (i % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                       <span className="text-white group-hover:text-black font-serif font-bold text-xl">{item}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. WHAT MAKES NEGOTIATION EFFECTIVE */}
        <section ref={sectionRefs.strength} data-section="strength" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.strength ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                   Why Our Negotiation <br />
                   <span className="italic font-light text-[#A07A41]">Approach Works.</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { t: "Strong Legal Positioning", i: ShieldCheck, a: "animate-fade-in-top-left" },
                     { t: "Strategic Communication", i: MessageSquare, a: "animate-fade-in-top-right" },
                     { t: "Clear UK Law Knowledge", i: Scale, a: "animate-fade-in-bottom-left" },
                     { t: "Balanced Professionalism", i: Gavel, a: "animate-fade-in-bottom-right" }
                   ].map((item, i) => (
                      <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-3xl hover:border-[#A07A41]/40 transition-all ${visibleSections.strength ? item.a : 'opacity-0'}`}>
                         <item.i className="h-12 w-12 text-[#A07A41] mb-6" />
                         <span className="text-white font-serif font-bold text-lg block">{item.t}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className={`relative ${visibleSections.strength ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="aspect-video rounded-3xl overflow-hidden shadow-biggest bg-[#1B2D33]/40 border border-white/5 flex items-center justify-center p-12">
                   <div className="text-center">
                      <Zap className="h-16 w-16 text-[#A07A41] mx-auto mb-8 animate-pulse" />
                      <p className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 italic">"Maximum value with <br />minimum conflict."</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${visibleSections.benefits ? 'animate-fade-in-left' : 'opacity-0'}`}>
                 <img src="/set2.jpg" alt="Settlement results" className="rounded-2xl shadow-biggest h-[500px] w-full object-cover" />
              </div>
              <div className={`${visibleSections.benefits ? 'animate-fade-in-right' : 'opacity-0'}`}>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10">
                    Benefits of Professional <br /><span className="text-[#A07A41] italic">Negotiation Support.</span>
                 </h2>
                 <div className="space-y-6">
                    {[
                      "Significantly better settlement outcomes",
                      "Much faster resolution of disputes",
                      "Major reduction in legal costs",
                      "Avoidance of stressful court proceedings",
                      "Stronger formal negotiation leverage"
                    ].map((item, i) => (
                       <div key={i} className="flex items-center gap-6 p-6 bg-[#2A454E]/40 border border-white/5 rounded-2xl group hover:border-[#A07A41]/40 transition-all">
                          <CheckCircle className="h-6 w-6 text-[#A07A41]" />
                          <span className="text-lg text-gray-200 font-light">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 8. REQUEST FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[45rem] mx-auto">
             <div className={`bg-[#1B2D33] p-12 rounded-3xl border border-white/5 ${visibleSections.form ? 'animate-fade-in-up' : 'opacity-100'}`}>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                  Negotiate with <span className="text-[#A07A41]">Confidence.</span>
                </h2>
                <p className="text-gray-400 text-center mb-10 font-light">Secure elite negotiation support for your case.</p>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                     <input type="text" placeholder="Full name" className="w-full bg-[#2A454E] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41]" />
                     <input type="text" placeholder="Contact Details" className="w-full bg-[#2A454E] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41]" />
                  </div>
                  <input type="text" placeholder="Case Type (e.g., Personal Injury, Contract Dispute)" className="w-full bg-[#2A454E] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41]" />
                  <textarea rows="4" placeholder="Briefly describe the dispute..." className="w-full bg-[#2A454E] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-[#A07A41] resize-none"></textarea>
                  <div className="relative">
                    <input type="file" className="hidden" id="settle-upload" />
                    <label htmlFor="settle-upload" className="flex items-center justify-between w-full bg-[#2A454E] border border-white/10 rounded-xl p-5 text-gray-400 cursor-pointer hover:border-[#A07A41]">
                        <span>Upload Pertinent Documents</span>
                        <Inbox className="h-5 w-5 text-[#A07A41]" />
                    </label>
                  </div>
                  <button className="w-full py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-sm rounded transition-all hover:bg-white flex items-center justify-center gap-4 group">
                    <span>Submit Your Case</span>
                    <Send className="h-4 w-4 transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">Strict Confidentiality Assured.</p>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-100'}`}>FAQs.</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "What is settlement negotiation?", a: "The process of resolving legal disputes through formal mutual agreement between parties, avoiding the need for a court trial." },
                  { q: "Can negotiation avoid legal proceedings?", a: "Yes, a significant majority of UK legal cases are settled successfully through strategic out-of-court negotiation." },
                  { q: "Do you handle all communication?", a: "Yes, our team manages all formal correspondence and verbal negotiations with the opposing side to ensure your position remains protected." },
                  { q: "How long does the process take?", a: "Negotiation timelines vary depending on case complexity and the willingness of all parties to reach a fair compromise." },
                  { q: "Is the final agreement legally binding?", a: "Once a settlement agreement is finalised, formalised in writing, and signed by both parties, it becomes a legally binding contract." }
                ].map((faq, i) => (
                  <div key={i} className={`border border-white/5 rounded bg-[#2A454E]/40 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-100'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-8 flex items-center justify-between group">
                      <span className={`text-lg font-serif font-bold transition-colors ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200'}`}>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-[#A07A41] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 px-8 ${activeFaq === i ? 'max-h-64 pb-12 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="text-gray-400 border-t border-white/5 pt-8 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-24 lg:py-48 bg-[#16272D] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/set.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-15 scale-110" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-100'}`}>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-none">
                Achieve the Best Possible <br />
                <span className="italic font-light text-[#A07A41]">Outcome for Your Case.</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto">Don’t settle for less—negotiate with clarity, confidence, and strong legal support.</p>
              <button className="px-10 py-5 bg-[#A07A41] text-black font-black tracking-[0.2em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-4 mx-auto group">
                 <span>Request Settlement Support Today</span>
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default SettlementNegotiationSupportPage;
