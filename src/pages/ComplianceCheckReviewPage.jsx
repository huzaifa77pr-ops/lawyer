import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, Scale, CheckCircle, Shield, 
  ChevronDown, Gavel, Briefcase, FileSignature, TrendingUp, 
  Clock, AlertCircle, ShieldCheck, Zap, Send, 
  MapPin, Landmark, Users, HelpCircle,
  FileSearch, Database, BookOpen, Info, Inbox,
  LandmarkIcon, FileText, ClipboardList, PenTool,
  Fingerprint, Activity, ClipboardCheck, Lock
} from 'lucide-react';

const ComplianceCheckReviewPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    why: false,
    services: false,
    process: false,
    industries: false,
    strength: false,
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
    industries: useRef(null),
    strength: useRef(null),
    benefits: useRef(null),
    form: useRef(null),
    faq: useRef(null),
    cta: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Compliance Check & Legal Review | H&S Co.";

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
      title: "Regulatory Review",
      desc: "Comprehensive assessment of UK laws and industry-specific regulations impacting your business.",
      points: ["UK law compliance", "Industry standards", "Policy alignment"],
      icon: Gavel,
      anim: "animate-fade-in-top-left"
    },
    {
      title: "Risk Assessment",
      desc: "Detailed identification of legal gaps, potential liabilities, and operational compliance risks.",
      points: ["Gap identification", "Liability analysis", "Operational risks"],
      icon: Activity,
      anim: "animate-fade-in-top-right"
    },
    {
      title: "Data & GDPR",
      desc: "Evaluation of data handling practices and privacy policies to ensure full GDPR compliance.",
      points: ["Data handling", "Privacy policies", "Security measures"],
      icon: Lock,
      anim: "animate-fade-in-bottom-left"
    },
    {
      title: "Documentation Review",
      desc: "Meticulous review of contracts, internal policies, and all formal legal documentation.",
      points: ["Contract analysis", "Internal policies", "Legal audits"],
      icon: ClipboardList,
      anim: "animate-fade-in-bottom-right"
    }
  ];

  const processSteps = [
    { step: "01", title: "Initial Assessment", desc: "We gain a deep understanding of your business operations and specific requirements.", anim: "animate-fade-in-left" },
    { step: "02", title: "Compliance Audit", desc: "We conduct a thorough review of your documents, policies, and existing processes.", anim: "animate-fade-in-right" },
    { step: "03", title: "Risk Analysis", desc: "We identify non-compliance areas and evaluate potential legal and financial risks.", anim: "animate-fade-in-left" },
    { step: "04", title: "Report & Recommendations", desc: "You receive a clear, actionable report with structured solutions for every gap found.", anim: "animate-fade-in-right" }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section ref={sectionRefs.hero} data-section="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#2A454E]">
          <div className="absolute inset-0 z-0">
             <img src="/coo.jpg" alt="Compliance Background" className="w-full h-full object-cover opacity-30" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E]/90 via-[#2A454E]/50 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className={`max-w-3xl transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                <div className="h-[2px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.2em] text-xs font-bold">Authority + Risk Control</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight animate-fade-in-left animation-delay-200">
                Compliance Check & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29D64] via-[#A07A41] to-[#785A2D]">Legal Review Services.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
                Comprehensive compliance assessments to ensure your business meets both current and emerging UK legal and regulatory requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-right animation-delay-700">
                <button className="px-8 py-4 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-widest uppercase text-xs rounded transition-all hover:bg-[#A07A41] shadow-2xl flex items-center gap-3">
                  <span>Request Compliance Review</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded transition-all hover:bg-white/5">
                  Speak to a Compliance Expert
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY COMPLIANCE MATTERS */}
        <section ref={sectionRefs.why} data-section="why" className="py-24 bg-[#2A454E] overflow-hidden border-t border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.why ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                  Why Legal Compliance <br />
                  <span className="italic font-light text-[#A07A41]">Is Critical.</span>
                </h2>
                <p className="text-gray-300 font-light mb-8 max-w-xl">Failure to comply with legal regulations can result in catastrophic outcomes for any business, regardless of size or sector.</p>
                <div className="space-y-4">
                  {[
                    "Crippling financial penalties and fines",
                    "Immediate and costly legal action",
                    "Major long-term business disruption",
                    "Irreparable reputational damage",
                    "Total loss of critical customer trust"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#1B2D33]/40 border border-white/5 rounded">
                       <AlertCircle className="h-5 w-5 text-[#A07A41]" />
                       <span className="text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-6 bg-[#16272D]/40 border-l-2 border-[#A07A41] rounded-r-xl">
                   <p className="text-[#A07A41] font-bold text-sm uppercase tracking-[0.2em] italic">Compliance ensures your business operates legally, securely, and confidently.</p>
                </div>
             </div>
             <div className={`${visibleSections.why ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <img src="/coo1.jpg" alt="Operational focus" className="rounded-2xl shadow-biggest w-full h-[550px] object-cover" />
             </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section ref={sectionRefs.services} data-section="services" className="py-24 bg-[#1B2D33] border-y border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className={`text-center mb-16 ${visibleSections.services ? 'animate-fade-in-down' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                   Our Compliance <span className="italic font-light text-[#A07A41]">Review Services.</span>
                </h2>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {coreServices.map((item, i) => (
                 <div key={i} className={`p-8 bg-[#2A454E]/30 border border-white/5 rounded-2xl hover:border-[#A07A41]/30 transition-all ${visibleSections.services ? item.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                    <item.icon className="h-10 w-10 text-[#A07A41] mb-6" />
                    <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
                    <ul className="space-y-2 pt-6 border-t border-white/5">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-widest">
                          <div className="w-1 h-1 rounded-full bg-[#A07A41]"></div>
                          {p}
                        </li>
                      ))}
                    </ul>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. PROCESS */}
        <section ref={sectionRefs.process} data-section="process" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-10 text-left">
                   How We Conduct <br />
                   <span className="italic font-light text-[#A07A41]">Compliance Reviews.</span>
                </h2>
                <img src="/coo2.jpg" alt="Review logic" className="rounded-3xl shadow-biggest w-full h-[400px] object-cover" />
             </div>
             <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className={`p-8 bg-[#1B2D33] border border-white/5 rounded-xl flex items-center gap-8 group hover:border-[#A07A41]/50 transition-all ${visibleSections.process ? step.anim : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="text-4xl font-serif font-black text-[#A07A41]/20 group-hover:text-[#A07A41] transition-all">{step.step}</div>
                     <div className="text-left">
                        <h4 className="text-xl font-serif font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-gray-500 font-sans font-light text-sm italic">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. INDUSTRIES WE SUPPORT */}
        <section ref={sectionRefs.industries} data-section="industries" className="py-24 bg-[#1B2D33] border-b border-white/5">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.industries ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Industries We <span className="italic font-light text-[#A07A41]">Work With.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                "Healthcare", 
                "Finance", 
                "E-commerce", 
                "Legal services", 
                "Real estate", 
                "Corporate businesses"
              ].map((item, i) => {
                 const diagonalAnims = ["animate-fade-in-top-left", "animate-fade-in-up", "animate-fade-in-top-right", "animate-fade-in-bottom-left", "animate-fade-in-down", "animate-fade-in-bottom-right"];
                 return (
                    <div key={i} className={`p-8 bg-[#2A454E]/40 border border-white/5 rounded shadow-xl hover:bg-[#A07A41] group transition-all duration-700 ${visibleSections.industries ? diagonalAnims[i % 6] : 'opacity-0'}`} style={{ animationDelay: `${i * 50}ms` }}>
                       <span className="text-white group-hover:text-black font-serif font-bold text-sm md:text-lg block tracking-wide">{item}</span>
                    </div>
                 );
              })}
            </div>
            <div className="mt-16 animate-fade-in-down animation-delay-500">
               <div className="text-[#A07A41] text-xs font-bold uppercase tracking-widest italic flex items-center justify-center gap-4">
                  <div className="w-10 h-[1px] bg-[#A07A41]"></div>
                  Compliance applies to every industry handling data, contracts, or regulations.
                  <div className="w-10 h-[1px] bg-[#A07A41]"></div>
               </div>
            </div>
          </div>
        </section>

        {/* 6. WHAT MAKES OUR COMPLIANCE REVIEW STRONG */}
        <section ref={sectionRefs.strength} data-section="strength" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.strength ? 'animate-fade-in-down' : 'opacity-0'}`}>
               Why Our Compliance <br />
               <span className="italic font-light text-[#A07A41]">Services Stand Out.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { t: "UK law-focused expertise", d: "Specialized knowledge of the UK regulatory landscape and statutory duties.", anim: "animate-fade-in-left" },
                 { t: "Practical Solutions Only", d: "We don’t just identify problems—we provide structured, actionable solutions.", anim: "animate-fade-in-up" },
                 { t: "Risk Prevention Approach", d: "Our core focus is proactively preventing legal action and business disruption.", anim: "animate-fade-in-right" }
               ].map((item, i) => (
                  <div key={i} className={`p-10 bg-[#1B2D33] border border-white/5 rounded-3xl hover:border-[#A07A41]/50 transition-all ${visibleSections.strength ? item.anim : 'opacity-0'}`}>
                     <ClipboardCheck className="h-10 w-10 text-[#A07A41] mb-6 mx-auto" strokeWidth={2} />
                     <h4 className="text-xl font-serif font-bold text-white mb-4 leading-tight">{item.t}</h4>
                     <p className="text-gray-500 text-sm font-light leading-relaxed italic">{item.d}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* 7. BENEFITS */}
        <section ref={sectionRefs.benefits} data-section="benefits" className="py-24 bg-[#1B2D33]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-16 items-center">
             <div className={`${visibleSections.benefits ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 text-left">
                  Benefits of Professional <br />
                  <span className="italic font-light text-[#A07A41]">Compliance Review.</span>
                </h2>
                <div className="space-y-6 mb-12">
                  {[
                    "Proactively avoid devastating legal penalties",
                    "Significantly reduce operational business risks",
                    "Substantially improve overall efficiency",
                    "Strengthen customer and stakeholder trust",
                    "Ensure absolute regulatory alignment"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 text-gray-300">
                       <ShieldCheck className="h-7 w-7 text-[#A07A41]" />
                       <span className="text-lg font-light leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-[#2A454E]/40 border-l-4 border-[#A07A41] rounded-r-2xl">
                   <p className="text-white font-serif italic text-xl opacity-90">"Compliance is not optional—it’s essential for growth."</p>
                </div>
             </div>
             <div className={`${visibleSections.benefits ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <img src="/her1.jpg" alt="Strategic growth" className="rounded-2xl shadow-biggest w-full aspect-[3/4] object-cover" />
             </div>
          </div>
        </section>

        {/* 8. FORM */}
        <section ref={sectionRefs.form} data-section="form" className="py-24 bg-[#2A454E]">
          <div className="px-4 sm:px-6 lg:px-8 max-w-[45rem] mx-auto">
             <div className={`bg-[#1B2D33] p-12 rounded shadow-biggest ${visibleSections.form ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8 text-center uppercase tracking-[0.2em]">
                   Request <span className="text-[#A07A41]">Review.</span>
                </h2>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                     <input type="text" placeholder="Full name" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                     <input type="text" placeholder="Contact Details" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                     <input type="text" placeholder="Business Type" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                     <input type="text" placeholder="Industry" className="bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all" />
                  </div>
                  <textarea rows="4" placeholder="Description of Requirements..." className="w-full bg-[#2A454E] border border-white/10 rounded p-4 text-white outline-none focus:border-[#A07A41] transition-all"></textarea>
                  <div className="relative">
                    <input type="file" id="comp-upload" className="hidden" />
                    <label htmlFor="comp-upload" className="flex items-center justify-between pointer-events-auto cursor-pointer w-full bg-[#2A454E] border border-white/10 rounded p-4 text-gray-500 hover:border-[#A07A41] transition-all">
                        <span className="text-sm uppercase tracking-widest font-bold">Upload Documents</span>
                        <Inbox className="h-5 w-5" />
                    </label>
                  </div>
                  <button className="w-full py-5 bg-[#A07A41] text-black font-black uppercase tracking-[0.25em] text-sm rounded shadow-2xl transition-all hover:bg-white flex items-center justify-center gap-4">
                    <span>Submit Your Request</span>
                    <Send className="h-5 w-5" />
                  </button>
                  <p className="text-center text-[11px] text-gray-600 font-bold uppercase tracking-[0.2em] mt-6">All business data is handled securely and confidentially.</p>
                </form>
             </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section ref={sectionRefs.faq} data-section="faq" className="py-24 bg-[#1B2D33]">
           <div className="px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-center">
              <h2 className={`text-3xl md:text-5xl font-serif font-bold text-white mb-16 ${visibleSections.faq ? 'animate-fade-in-top-right' : 'opacity-0'}`}>FAQs.</h2>
              <div className="space-y-4 text-left">
                {[
                  { q: "What exactly is a compliance review?", a: "It is a comprehensive assessment to ensure your entire business operation meets all applicable legal and regulatory requirements." },
                  { q: "Do you specifically cover GDPR compliance?", a: "Yes, our review includes a deep dive into data handling practices, privacy policies, and necessary security measures." },
                  { q: "How long does a standard review take?", a: "The duration depends on your business size and complexity, but a standard audit typically maps out in 5-10 business days." },
                  { q: "Can you help fix identified compliance issues?", a: "Absolutely. We don't just report gaps; we provide detailed recommendations and structured legal solutions to rectify them." },
                  { q: "Is my proprietary business data secure?", a: "Yes. Every byte of information shared with us is protected by strict confidentiality agreements and secure protocols." }
                ].map((faq, i) => (
                   <div key={i} className={`border border-white/5 rounded-2xl bg-[#2A454E]/40 overflow-hidden ${visibleSections.faq ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
                    <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-8 flex items-center justify-between group">
                      <span className={`text-lg md:text-xl font-serif font-bold transition-all ${activeFaq === i ? 'text-[#A07A41]' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                      <ChevronDown className={`h-6 w-6 text-[#A07A41] transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-500 px-8 ${activeFaq === i ? 'max-h-56 pb-8 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="text-gray-400 border-t border-white/5 pt-8 leading-relaxed italic">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 10. FINAL CTA */}
        <section ref={sectionRefs.cta} data-section="cta" className="relative py-32 bg-[#1B2D33] text-center overflow-hidden">
          <div className="absolute inset-0 z-0 text-left">
             <img src="/her2.jpg" alt="Final CTA" className="w-full h-full object-cover opacity-10" />
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className={`transition-all duration-1000 ${visibleSections.cta ? 'animate-fade-in-bottom-left' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                Ensure Your Business Meets <br />
                <span className="italic font-light text-[#A07A41]">Legal Standards.</span>
              </h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Don’t risk penalties or legal action—get a professional compliance review from UK industry experts.</p>
              <button className="px-12 py-5 bg-[#A07A41] text-black font-black tracking-[0.3em] uppercase text-xs md:text-sm rounded transition-all hover:bg-white shadow-2xl flex items-center justify-center gap-5 mx-auto group">
                 <span>Request Compliance Check Today</span>
                 <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ComplianceCheckReviewPage;
