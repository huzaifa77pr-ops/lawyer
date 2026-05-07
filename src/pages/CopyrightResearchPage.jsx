import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, 
  ChevronDown, AlertCircle, ShieldCheck, Send, 
  HardDrive, Target, Eye
} from 'lucide-react';

const CopyrightResearchPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    what: false,
    services: false,
    process: false,
    who: false,
    reliable: false,
    benefits: false,
    form: false,
    faq: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef(null),
    what: useRef(null),
    services: useRef(null),
    process: useRef(null),
    who: useRef(null),
    reliable: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Copyright Research & Protection UK | H&S Co.";

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

  const coreServices = [
    {
      title: "Ownership Verification",
      desc: "Identifying original creators and verifying ownership rights to establish a clear chain of title.",
      points: ["Creator identification", "Ownership verification", "Chain of title"],
      icon: Search,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Infringement Risk Analysis",
      desc: "Checking for existing copyrighted material and identifying potential legal conflicts with your work.",
      points: ["Existing material check", "Conflict identification", "Legal risk analysis"],
      icon: ShieldCheck,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Usage Rights Assessment",
      desc: "Determining permitted use and licensing considerations for third-party content integration.",
      points: ["Permitted use", "Licensing review", "Fair use analysis"],
      icon: CheckCircle,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Legal Guidance",
      desc: "Providing preventive legal advice and specific steps to ensure your creative work is fully protected.",
      points: ["Risk evaluation", "Protection steps", "Strategic advice"],
      icon: Search,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { step: "01", title: "Work Assessment", desc: "We understand the nature of your creative content or digital asset.", anim: "animate-fade-in-left" },
    { step: "02", title: "Research & Investigation", desc: "We analyse authoritative sources, ownership, and existing protections.", anim: "animate-fade-in-right" },
    { step: "03", title: "Risk Evaluation", desc: "We identify potential infringement or legal risks associated with the asset.", anim: "animate-fade-in-left" },
    { step: "04", title: "Report & Advice", desc: "You receive clear findings and actionable recommendations for protection.", anim: "animate-fade-in-right" }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-top-left {
            from { opacity: 0; transform: translate(-30px, -30px); }
            to { opacity: 1; transform: translate(0, 0); }
          }
          @keyframes fade-in-top-right {
            from { opacity: 0; transform: translate(30px, -30px); }
            to { opacity: 1; transform: translate(0, 0); }
          }
          @keyframes fade-in-bottom-left {
            from { opacity: 0; transform: translate(-30px, 30px); }
            to { opacity: 1; transform: translate(0, 0); }
          }
          @keyframes fade-in-bottom-right {
            from { opacity: 0; transform: translate(30px, 30px); }
            to { opacity: 1; transform: translate(0, 0); }
          }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
          .animate-fade-in-left { animation: fade-in-left 1s ease-out forwards; }
          .animate-fade-in-right { animation: fade-in-right 1s ease-out forwards; }
          .animate-fade-in-top-left { animation: fade-in-top-left 1s ease-out forwards; }
          .animate-fade-in-top-right { animation: fade-in-top-right 1s ease-out forwards; }
          .animate-fade-in-bottom-left { animation: fade-in-bottom-left 1s ease-out forwards; }
          .animate-fade-in-bottom-right { animation: fade-in-bottom-right 1s ease-out forwards; }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
      </style>
      
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/heroo.jpg" alt="Copyright Hero" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold">Creative Protection + Authority</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-left animation-delay-200">
                Copyright Research & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Protection Services UK.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
                Comprehensive research to verify ownership, assess infringement risks, and protect your creative work under UK law.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-right animation-delay-600">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
                  <span className="relative z-10">Request Copyright Research</span>
                  <ArrowRight className="h-4 w-4 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-xs rounded transition-all hover:bg-white/5">
                  Consult an IP Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS COPYRIGHT & WHY IT MATTERS */}
        <section ref={sectionRefs.what} data-section="what" className="py-16 md:py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className={`${visibleSections.what ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">
                  What Is <br />
                  <span className="italic font-light text-[#A07A41]">Copyright?</span>
                </h2>
                <p className="text-gray-300 font-light mb-10 text-base md:text-lg">Copyright protects original creative works such as written content, designs, artwork, music, and digital assets.</p>
                
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-10 border-t border-white/5 pt-10">
                  Why Copyright Research <br />
                  <span className="italic font-light text-[#A07A41]">Is Critical.</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Using protected content unknowingly",
                    "Facing infringement claims",
                    "Losing ownership rights",
                    "Legal disputes and penalties",
                    "Financial loss"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className={`${visibleSections.what ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <img src="/z1.jpg" alt="Copyright protection" className="rounded-2xl shadow-biggest w-full h-[600px] object-cover grayscale" />
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-16 md:py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-12 md:mb-20 ${visibleSections.services ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-10 tracking-tight leading-tight uppercase">
                   Our Copyright <br />
                   <span className="italic font-light text-[#A07A41]">Research Services.</span>
                </h2>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
               {coreServices.map((item, i) => (
                 <div key={i} className={`p-10 bg-[#2A454E]/30 border border-white/5 rounded-3xl group hover:border-[#A07A41]/50 transition-all duration-500 ${visibleSections.services ? item.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="mb-10 w-16 h-16 bg-[#1B2D33] rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-[#A07A41] transition-all duration-500">
                       <item.icon className="h-8 w-8 text-[#A07A41] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-[#A07A41] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-8 font-light">{item.desc}</p>
                    <div className="space-y-3 pt-8 border-t border-white/5">
                      {item.points.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs text-gray-400 font-bold uppercase tracking-widest">
                          <CheckCircle className="h-4 w-4 text-[#A07A41]" />
                          {p}
                        </div>
                      ))}
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-16 md:py-24 bg-[#2A454E] relative overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-[1.1]">
                   How We Conduct <br />
                   <span className="italic font-light text-[#A07A41]">Copyright Research.</span>
                </h2>
                <img src="/z2.jpg" alt="Investigation process" className="rounded-[2.5rem] shadow-biggest w-full h-[500px] object-cover grayscale" />
             </div>
             <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className={`p-8 bg-[#1B2D33] border border-white/5 rounded-2xl flex items-start gap-8 group hover:bg-[#A07A41] transition-all ${visibleSections.process ? step.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="text-5xl font-serif font-black text-[#A07A41]/10 group-hover:text-black/20 transition-all duration-500 shrink-0">{step.step}</div>
                     <div className="text-left">
                        <h4 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-black transition-colors">{step.title}</h4>
                        <p className="text-gray-500 group-hover:text-black/70 font-sans font-light text-sm italic leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. WHO THIS SERVICE IS FOR */}
        <section ref={sectionRefs.who} data-section="who" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 tracking-tight ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Who Needs <br />
              <span className="italic font-light text-[#A07A41]">Copyright Research?</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                "Content creators", "Designers and artists", "Software developers", "Marketing agencies", "Publishers"
              ].map((item, i) => (
                <div key={i} className={`p-10 bg-[#2A454E]/40 border border-white/5 rounded-2xl hover:bg-[#A07A41] group transition-all duration-700 ${visibleSections.who ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                   <Target className="h-8 w-8 text-[#A07A41] mx-auto mb-6 group-hover:text-black group-hover:scale-110 transition-all duration-500" />
                   <span className="text-white group-hover:text-black font-serif font-bold text-sm block tracking-wide leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE OUR SERVICE */}
        <section ref={sectionRefs.reliable} data-section="reliable" className="py-24 bg-[#2A454E] relative">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`text-center mb-20 ${visibleSections.reliable ? 'animate-fade-in-down' : 'opacity-0'}`}>
               <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight leading-tight">
                  Why Choose Our <br />
                  <span className="italic font-light text-[#A07A41]">Copyright Services.</span>
               </h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
               {[
                 { t: "UK law-focused expertise", d: "Detailed knowledge of UK copyright acts." },
                 { t: "Detailed verification", d: "Exhaustive ownership tracking." },
                 { t: "Clear risk analysis", d: "Actionable infringement assessments." },
                 { t: "Practical advice", d: "Strategic recommendations for IP safety." },
                 { t: "Confidential handling", d: "Complete security for creative works." }
               ].map((item, i) => (
                  <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-3xl hover:border-[#A07A41]/50 transition-all duration-500 text-center flex flex-col items-center ${visibleSections.reliable ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                     <div className="w-16 h-16 bg-[#2A454E] rounded-full flex items-center justify-center mb-8 border border-white/5">
                        <ShieldCheck className="h-7 w-7 text-[#A07A41]" />
                     </div>
                     <h4 className="text-lg font-serif font-black text-white mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-500 text-xs font-light leading-relaxed italic uppercase tracking-wider">{item.d}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33] overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-20 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-10 text-left tracking-tight leading-tight">
                   Benefits of <br />
                   <span className="italic font-light text-[#A07A41]">Copyright Research.</span>
                </h2>
                <div className="space-y-6 mb-16 text-left">
                  {[
                    "Avoid infringement issues & legal claims",
                    "Protect your original creative work fully",
                    "Significantly reduce overall legal risk",
                    "Ensure proper and legal usage rights",
                    "Make fully informed strategic decisions"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                       <ShieldCheck className="h-6 w-6 text-[#A07A41] shrink-0" />
                       <span className="text-xl font-light text-gray-300 transition-all group-hover:text-white leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <img src="/saa2.jpg" alt="Brand security" className="rounded-[3rem] shadow-biggest w-full h-[500px] object-cover grayscale" />
             </div>
          </div>
        </section>

        {/* 8. FORM SECTION */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
             <div className={`bg-[#1B2D33] p-16 rounded-3xl shadow-biggest relative overflow-hidden ${visibleSections.form ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight uppercase">
                      Request <span className="text-[#A07A41]">Search.</span>
                   </h2>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                     <input type="text" placeholder="Full Name" className="w-full bg-[#2A454E] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41] transition-all" />
                     <input type="text" placeholder="Contact Details" className="w-full bg-[#2A454E] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41] transition-all" />
                  </div>
                  <textarea rows="5" placeholder="Briefly describe the project..." className="w-full bg-[#2A454E] border border-white/10 rounded-xl p-5 text-white outline-none focus:border-[#A07A41] transition-all"></textarea>
                  
                  <button className="w-full py-6 bg-[#A07A41] text-black font-black uppercase tracking-[0.3em] text-sm rounded shadow-2xl transition-all hover:bg-white flex items-center justify-center gap-5 mt-4 group">
                    <span>Submit Your Request</span>
                    <Send className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33] border-b border-white/5">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[55rem] mx-auto text-center">
              <div className="mb-20">
                 <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    Frequently Asked <br />
                    <span className="italic font-light text-[#A07A41]">Questions.</span>
                 </h2>
              </div>
              <div className="space-y-6 text-left">
                {[
                  { q: "What does copyright protect?", a: "Copyright protects original creative works including written content, designs, artwork, music, videos, and software once they are fixed in a tangible form." },
                  { q: "Do I need to register copyright in the UK?", a: "No, copyright protection is automatic in the UK upon creation. However, maintaining comprehensive documentation and research is vital for establishing proof in disputes." },
                  { q: "Can you check if my work infringes others?", a: "Yes, our key service is analysing existing copyrighted works to ensure your material doesn't infringe on existing legal protections." },
                  { q: "Can you help protect my work?", a: "Yes, we provide expert guidance on how to secure your work, including documentation advice and actionable recommendations for IP management." },
                  { q: "Is my work confidential?", a: "Absolutely. All materials, manuscripts, and creative assets shared with H&S Co. are handled under strict confidentiality protocols." }
                ].map((faq, i) => (
                   <div key={i} className={`border border-white/10 rounded-3xl bg-[#2A454E]/40 backdrop-blur-sm overflow-hidden group hover:border-[#A07A41]/30 transition-all duration-500 ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-10 flex items-center justify-between group">
                      <span className={`text-left text-xl md:text-2xl font-serif font-bold transition-all duration-500 ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-[#A07A41] transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-700 ease-in-out px-10 ${activeFaq === i ? 'max-h-[500px] pb-10 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="text-gray-400 border-t border-white/5 pt-10 text-lg leading-relaxed font-light italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-40 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="/agg1.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
                Protect Your Creative Work <br />
                <span className="italic font-light text-[#A07A41]">With Total Confidence.</span>
              </h2>
              <button className="px-14 py-6 bg-[#A07A41] text-black font-black tracking-[0.4em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white flex items-center justify-center gap-6 mx-auto group">
                 <span>Request Copyright Research Today</span>
                 <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CopyrightResearchPage;
