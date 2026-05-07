import React, { useEffect, useState, useRef } from 'react';
import {
   ArrowRight, Search, CheckCircle,
   ChevronDown, AlertCircle, ShieldCheck, Send,
   Target, Eye, Link as LinkIcon, HardDrive
} from 'lucide-react';

const MonthlyLegalSupportPage = () => {
   const [activeFaq, setActiveFaq] = useState(null);

   const [visibleSections, setVisibleSections] = useState({
      hero: true,
      what: false,
      who: false,
      included: false,
      tiers: false,
      matters: false,
      why: false,
      legal: false,
      faq: false,
      cta: false
   });

   const sectionRefs = {
      hero: useRef(null),
      what: useRef(null),
      who: useRef(null),
      included: useRef(null),
      tiers: useRef(null),
      matters: useRef(null),
      why: useRef(null),
      legal: useRef(null),
      faq: useRef(null),
      cta: useRef(null)
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Monthly Legal Support Packages UK | Retainer Services | H&S Co.";

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

   const packagePlans = [
      {
         level: "Basic Protection Plan",
         target: "Small Businesses",
         features: [
            "Limited DMCA requests (5/month)",
            "Basic IP reporting",
            "Email support",
            "Monthly review"
         ],
         color: "border-white/10",
         delay: "animation-delay-200"
      },
      {
         level: "Growth Protection Plan",
         target: "Scaling Businesses",
         features: [
            "Increased takedown requests",
            "Full IP infringement reporting",
            "Priority response",
            "Documentation support",
            "Strategy guidance"
         ],
         color: "border-[#A07A41]/40",
         featured: true,
         delay: "animation-delay-400"
      },
      {
         level: "Advanced Protection Plan",
         target: "High-Risk Businesses",
         features: [
            "High-volume takedowns",
            "Full brand protection coverage",
            "Dedicated support",
            "Faster turnaround",
            "Ongoing legal advisory"
         ],
         color: "border-white/10",
         delay: "animation-delay-600"
      }
   ];

   return (
      <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
         <style>
            {`
          @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-down { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
          @keyframes fade-in-top-left { from { opacity: 0; transform: translate(-40px, -40px); } to { opacity: 1; transform: translate(0, 0); } }
          @keyframes fade-in-bottom-right { from { opacity: 0; transform: translate(40px, 40px); } to { opacity: 1; transform: translate(0, 0); } }
          
          .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-top-left { animation: fade-in-top-left 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          .animate-fade-in-bottom-right { animation: fade-in-bottom-right 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
          
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
         </style>

         <main className="flex-grow">

            {/* 1. HERO SECTION */}
            <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-[#1B2D33]">
               <div className="absolute inset-0 z-0">
                  <img src="/hero.jpg" alt="Paraleagl Support Hero" className="w-full h-full object-cover opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1B2D33] via-[#1B2D33]/70 to-transparent"></div>
               </div>
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
                  <div className="max-w-4xl">
                     <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
                        <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                        <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold font-sans">Continuous Protection + Retainers</span>
                     </div>

                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight animate-fade-in-left animation-delay-200">
                        Monthly Legal <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Support Packages UK.</span>
                     </h1>

                     <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up animation-delay-400">
                        Ongoing legal support for businesses that need continuous protection, fast response, and structured handling of intellectual property and digital risks.
                     </p>

                     <div className="flex flex-col sm:flex-row gap-5 mb-20 animate-fade-in-right animation-delay-600">
                        <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                           <span className="relative z-10">View Packages</span>
                           <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                        <div className="flex flex-col justify-center">
                           <p className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Book Consultation</p>
                           <p className="text-white/40 text-[10px] italic">Strategic Support Analysis</p>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 border-t border-white/10 pt-12 animate-fade-in-up animation-delay-600">
                        {[
                           { t: "UK-focused legal services", s: "Local Legal Team" },
                           { t: "Predictable monthly support", s: "No Surprise Fees" },
                           { t: "Fast response times", s: "Priority Access" }
                        ].map((item, i) => (
                           <div key={i} className="space-y-1">
                              <span className="text-white font-serif font-bold text-lg block">{item.t}</span>
                              <span className="text-[#A07A41]/50 text-[10px] font-black uppercase tracking-widest leading-none">{item.s}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* 2. WHAT THIS SERVICE IS */}
            <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight leading-tight uppercase">
                        Ongoing <br />
                        <span className="italic font-light text-[#A07A41]">Legal Infrastructure.</span>
                     </h2>
                     <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed border-l-4 border-white/5 pl-6 md:pl-8 italic mb-10 md:mb-12">
                        <p>Monthly legal support packages provide ongoing assistance for handling intellectual property protection, infringement issues, and routine legal documentation.</p>
                        <p>Instead of reacting to problems after damage occurs, businesses get structured, proactive legal support from specialized paralegal experts.</p>
                     </div>
                     <div className="space-y-4">
                        {[
                           "Regular monitoring of IP violations",
                           "Continuous handling of infringement reports",
                           "Ongoing legal documentation support"
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 md:gap-6 p-5 md:p-6 bg-[#1B2D33] rounded-2xl border border-white/5 group hover:border-[#A07A41]/30 transition-all">
                              <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-[#2A454E] flex items-center justify-center font-serif font-black text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all text-sm md:text-base">0{i + 1}</div>
                              <span className="text-gray-200 group-hover:text-white font-bold text-sm md:text-base">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <div className="relative group">
                        <img src="/aa.jpg" alt="Retainer Services" className="rounded-3xl shadow-biggest h-[300px] md:h-[550px] w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                        <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-[#A07A41] p-6 md:p-10 rounded-2xl md:rounded-3xl hidden md:block border border-black/10">
                           <ShieldCheck className="h-6 w-6 md:h-10 md:w-10 text-black" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 3. WHO THIS IS FOR (FILTER BAD CLIENTS) */}
            <section ref={sectionRefs.who} data-section="who" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
                  <div className={`mb-12 md:mb-20 ${visibleSections.who ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                        Is This <span className="italic font-light text-[#A07A41]">For You?</span>
                     </h2>
                     <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4">If you only need a one-time fix, this isn't for you. This is for businesses dealing with ongoing risks.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                     {[
                        { t: "E-commerce Brands", d: "Growing stores facing counterfeits and image theft regularly." },
                        { t: "SaaS & Agencies", d: "Digital companies requiring ongoing compliance and asset protection." },
                        { t: "Content Creators", d: "Platforms with monetized content needing copyright enforcement." },
                        { t: "High-Risk Entities", d: "Businesses facing repeated IP violations and market abuse." }
                     ].map((item, i) => (
                        <div key={i} className={`p-8 md:p-12 bg-[#2A454E]/20 border border-white/5 rounded-3xl hover:border-[#A07A41] transition-all duration-500 ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                           <div className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-10 block">Vertical Protection</div>
                           <h4 className="text-white font-serif font-bold text-xl mb-4 leading-tight">{item.t}</h4>
                           <p className="text-gray-400 text-sm font-light leading-relaxed italic">{item.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 4. WHAT’S INCLUDED */}
            <section ref={sectionRefs.included} data-section="included" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-b border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                     <div className={`${visibleSections.included ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <img src="/doc.jpg" alt="Service Inclusions" className="rounded-[2.5rem] md:rounded-[4rem] h-[300px] md:h-[550px] w-full object-cover brightness-75 grayscale hover:grayscale-0 transition-all duration-700" />
                     </div>
                     <div className={`${visibleSections.included ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase">
                           What’s Included <br />
                           <span className="italic font-light text-[#A07A41]">In Our Packages.</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                           {[
                              { t: "DMCA Takedowns", i: Send },
                              { t: "IP Reporting", i: AlertCircle },
                              { t: "Asset Documentation", i: HardDrive },
                              { t: "Legal Consultation", i: LinkIcon },
                              { t: "Ongoing Monitoring", i: Eye },
                              { t: "Platform Enforcement", i: ShieldCheck }
                           ].map((v, i) => (
                              <div key={i} className="flex flex-col p-6 md:p-8 bg-[#1B2D33] rounded-2xl md:rounded-3xl group hover:bg-[#A07A41] transition-all duration-500">
                                 <v.i className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41] group-hover:text-black mb-4 md:mb-6 transition-colors" />
                                 <span className="text-white group-hover:text-black font-bold text-xs md:text-sm tracking-widest uppercase transition-colors">{v.t}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 5. PACKAGE TIERS */}
            <section ref={sectionRefs.tiers} data-section="tiers" className="py-16 md:py-24 bg-[#1B2D33]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
                  <div className={`mb-12 md:mb-20 ${visibleSections.tiers ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Structured <span className="italic font-light text-[#A07A41]">Monthly Plans.</span></h2>
                     <p className="text-gray-500 max-w-xl mx-auto font-light text-sm italic px-4">Predictable costs. Proactive defense.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                     {packagePlans.map((plan, i) => (
                        <div key={i} className={`p-8 md:p-12 bg-[#2A454E]/20 border rounded-3xl relative overflow-hidden flex flex-col ${plan.color} ${plan.featured ? 'lg:scale-105 shadow-biggest z-10' : ''} ${visibleSections.tiers ? 'animate-fade-in-up' : 'opacity-0'} ${plan.delay}`}>
                           {plan.featured && <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2 text-[#A07A41] border border-[#A07A41]/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"></div>}
                           <h4 className="text-[#A07A41] font-black text-xs uppercase tracking-[0.4em] mb-4">{plan.level}</h4>
                           <p className="text-white/40 text-[10px] italic mb-8 md:mb-10 tracking-widest uppercase">Target: {plan.target}</p>

                           <div className="space-y-4 mb-10 md:mb-12 flex-grow">
                              {plan.features.map((f, idx) => (
                                 <div key={idx} className="flex items-center gap-4 group">
                                    <CheckCircle className="h-4 w-4 text-[#A07A41]/40 group-hover:text-[#A07A41] transition-colors" />
                                    <span className="text-gray-300 font-light text-sm md:text-[15px]">{f}</span>
                                 </div>
                              ))}
                           </div>

                           <button className={`w-full py-4 md:py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all duration-500 ${plan.featured ? 'bg-[#A07A41] text-black hover:bg-white' : 'border border-white/10 text-white hover:bg-white/5'}`}>
                              Contact For Pricing
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 6. WHY MONTHLY SUPPORT MATTERS */}
            <section ref={sectionRefs.matters} data-section="matters" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div className={`${visibleSections.matters ? 'animate-fade-in-left' : 'opacity-0'}`}>
                     <div className="relative">
                        <img src="/saa3.jpg" alt="Monitoring Matters" className="rounded-[2.5rem] md:rounded-[4rem] h-[300px] md:h-[500px] w-full object-cover grayscale opacity-50" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-12 text-center">
                           <Target className="h-10 w-10 md:h-12 md:w-12 text-[#A07A41] mb-6 md:mb-8" />
                           <p className="text-white text-base md:text-lg font-light italic leading-loose px-4">"Without continuous monitoring, infringements multiply exponentially, weakening your brand's market position."</p>
                        </div>
                     </div>
                  </div>
                  <div className={`${visibleSections.matters ? 'animate-fade-in-right' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 md:mb-10 tracking-tight uppercase leading-tight">
                        Why Ongoing Support <br />
                        <span className="italic font-light text-[#A07A41]">Is Critical.</span>
                     </h2>
                     <div className="space-y-6 md:space-y-8">
                        {[
                           { t: "Exponential Multiplication", d: "Infringements multiply quickly if not caught at the source." },
                           { t: "Weakening Brand Equity", d: "Consistent market abuse dilutes your brand's unique value." },
                           { t: "Revenue Trapping", d: "Stolen conversions lead to massive annual revenue loss." },
                           { t: "Proactive Neutralization", d: "Neutralizing threats before they escalate into legal disasters." }
                        ].map((item, i) => (
                           <div key={i} className="flex gap-6 md:gap-8 group border-b border-white/5 pb-6 md:pb-8 last:border-0">
                              <div className="h-8 w-8 md:h-10 md:w-10 shrink-0 text-[#A07A41]/10 font-serif text-3xl md:text-4xl font-black group-hover:text-[#A07A41] transition-all duration-500 italic leading-none">{i + 1}</div>
                              <div>
                                 <h4 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-[#A07A41] transition-colors">{item.t}</h4>
                                 <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">{item.d}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* 7. WHY CHOOSE US */}
            <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#1B2D33]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                  <div className={`text-center mb-20 ${visibleSections.why ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Elite Support <br /><span className="italic font-light text-[#A07A41]">Differentiators.</span></h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {[
                        { t: "Predictable Costs", d: "Structured monthly pricing with no surprise billings." },
                        { t: "Fast Handling", d: "Priority response times compared to one-time cases." },
                        { t: "Reduced Risk", d: "Proactive protection reduces long-term legal liability." },
                        { t: "Integrated Flow", d: "Seamless connection between IP and documentation services." }
                     ].map((item, i) => (
                        <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-3xl group hover:border-[#A07A41] transition-all duration-700 ${visibleSections.why ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                           <ShieldCheck className="h-10 w-10 text-[#A07A41] mb-10 group-hover:scale-110 transition-transform" />
                           <h4 className="text-white font-serif font-bold text-xl mb-4 group-hover:text-[#A07A41] transition-colors leading-tight">{item.t}</h4>
                           <p className="text-gray-500 font-sans font-light text-sm italic group-hover:text-white/80 transition-colors leading-relaxed">{item.d}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 8. LEGAL COMPLIANCE */}
            <section ref={sectionRefs.legal} data-section="legal" className="py-16 md:py-24 bg-[#2A454E] border-y border-white/5">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
                  <div className={`mb-12 md:mb-20 ${visibleSections.legal ? 'animate-fade-in-down' : 'opacity-0'}`}>
                     <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-tight">Compliance <span className="text-[#A07A41] italic">& Risk Framework.</span></h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                     <div className="bg-[#1B2D33] p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-left animate-fade-in-left border border-white/5">
                        <span className="text-[#A07A41] font-black text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-10 block">Systemic Protection</span>
                        <div className="space-y-5 md:space-y-6">
                           {[
                              "Continuous alignment with legal standards",
                              "Strict avoidance of false infringement claims",
                              "UK & International IP framework stability",
                              "Defensive positioning for your legal firm"
                           ].map((v, i) => (
                              <div key={i} className="flex items-center gap-4 md:gap-6 group">
                                 <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-[#A07A41]/10 group-hover:text-[#A07A41] transition-colors" />
                                 <span className="text-gray-300 font-light text-base md:text text-lg italic group-hover:text-white transition-colors">{v}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="space-y-8 md:space-y-10 text-left animate-fade-in-right px-4 md:px-0">
                        <p className="text-gray-400 font-sans font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-6 md:pl-8">
                           Our packages also support <strong>trademark objection response UK</strong>, <strong>UKIPO objection reply</strong>, and ongoing <strong>legal response trademark UK</strong>, ensuring businesses are prepared for any <strong>intellectual property dispute UK</strong>.
                        </p>
                        <div className="flex items-center gap-10">
                           <HardDrive className="h-10 w-10 md:h-12 md:w-12 text-white/5" />
                           <div className="h-[1px] flex-grow bg-white/5"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* 9. FAQ Section */}
            <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
               <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
                  <div className="mb-20">
                     <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight uppercase ${visibleSections.faq ? 'animate-fade-in-down' : 'opacity-0'}`}>
                        Package <span className="italic font-light text-[#A07A41]">Archive.</span>
                     </h2>
                  </div>
                  <div className="space-y-4 text-left">
                     {[
                        { q: "Can I upgrade or downgrade my plan?", a: "Yes, our plans are flexible. You can adjust your protection level at any time as your business scale or risk profile changes." },
                        { q: "Is there a minimum contract period?", a: "Minimum engagement depends on the package—typically we offer monthly rolling or quarterly commitment options for better strategy continuity." },
                        { q: "How fast are issues handled?", a: "Response times vary by plan tier, with Growth and Advanced plans receiving priority handling and faster turnaround on enforcement actions." },
                        { q: "Do unused requests carry forward?", a: "Carrying forward requests depends on the specific package terms and the nature of the legal support required." }
                     ].map((faq, i) => (
                        <div key={i} className={`border border-white/5 rounded-3xl bg-[#2A454E]/40 backdrop-blur-md overflow-hidden hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                           <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-10 flex items-center justify-between group">
                              <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                              <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-white' : ''}`} />
                           </button>
                           <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                              <p className="border-t border-white/5 pt-10 text-gray-400 text-lg leading-relaxed font-light italic">{faq.a}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 10. FINAL CTA */}
            <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden">
               <div className="absolute inset-0 z-0">
                  <img src="/lawhero.jpg" alt="Final CTA Packages" className="w-full h-full object-cover opacity-10" />
               </div>
               <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
                  <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
                     <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tight uppercase">
                        Get Ongoing Legal <br />
                        <span className="italic font-light text-[#A07A41]">Protection Today.</span>
                     </h2>
                     <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-base md:text-lg leading-relaxed italic border-l-2 border-[#A07A41] pl-8">
                        If your business faces ongoing risks, one-time fixes won’t solve the problem. A structured legal support plan ensures consistent protection.
                     </p>

                     <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                        <button className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                           <span className="relative z-10">Choose Your Plan</span>
                           <ArrowRight className="h-6 w-6 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <div className="flex flex-col items-center sm:items-start group cursor-pointer">
                           <p className="text-[#A07A41] font-black text-2xl italic mb-1 group-hover:text-white transition-colors">Book a Consultation</p>
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

export default MonthlyLegalSupportPage;
