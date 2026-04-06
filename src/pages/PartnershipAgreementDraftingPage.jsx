import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Search, CheckCircle, Zap, Database, 
  Shield, FileText, ChevronDown, Award, Briefcase, Target, 
  ShieldAlert, ClipboardCheck, Layers, FileSearch, 
  Handshake, Users, Scale, Clock, Settings, Landmark, 
  FileSignature, ChevronRight, HelpCircle, Lock, ShieldCheck
} from 'lucide-react';


const PartnershipAgreementDraftingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    intro: false,
    scope: false,
    features: false,
    process: false,
    who: false,
    quality: false,
    cta: false,
    faq: false
  });

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    scope: useRef(null),
    features: useRef(null),
    process: useRef(null),
    who: useRef(null),
    quality: useRef(null),
    cta: useRef(null),
    faq: useRef(null)
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

  const scopeItems = [
    { title: "Partnership Agreements", icon: Handshake, desc: "Standard general partnership agreements tailored for commercial entities." },
    { title: "LLP Agreements", icon: Landmark, desc: "Limited Liability Partnership documentation for professional service firms." },
    { title: "Partnership Deeds", icon: FileSignature, desc: "Formal deeds to establish or alter partnership structures legally." },
    { title: "Amendments & Variations", icon: Settings, desc: "Drafting for changing partnership terms or adding/removing partners." },
    { title: "Dissolution Agreements", icon: ShieldAlert, desc: "Legally sound winding-up agreements for separating partners." },
    { title: "Bespoke Clauses", icon: Layers, desc: "Highly customized clauses reflecting specific client requirements." }
  ];

  const features = [
    { title: "UK-Compliant Drafting", icon: Shield },
    { title: "Clear & Structured Language", icon: FileText },
    { title: "Confidential Handling", icon: Lock },
    { title: "Fast Turnaround", icon: Clock },
    { title: "Customised Solutions", icon: Zap }
  ];

  const faqItems = [
    { q: "Are your agreements compliant with UK law?", a: "Yes, all our partnership and LLP agreements are drafted explicitly to meet the requirements of the Partnership Act 1890 and the Limited Liability Partnerships Act 2000." },
    { q: "What is your typical turnaround time?", a: "Most standard agreements are drafted within 48 to 72 hours, depending on complexity and customization requirements." },
    { q: "Can you customize specific clauses?", a: "Absolutely. We specialize in bespoke drafting to reflect the unique profit-sharing, management, and dissolution needs of your clients." },
    { q: "What file formats do you deliver in?", a: "We deliver final documents in editable Microsoft Word formats (.docx) for your final review, along with a ready-to-sign PDF version." }
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
             <img src="/agg.jpg" alt="Partnership Agreements" className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-[#2A454E]/70 to-transparent"></div>
          </div>


          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl">
              <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold tracking-widest">Solicitor-to-Solicitor Support</span>
              </div>
              
              <h1 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 tracking-tight transition-all duration-1000 ${visibleSections.hero ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block animate-fade-in-top-left">Partnership</span>
                <span className="block italic font-light text-[#A07A41] animate-fade-in-up animation-delay-200">Agreement Drafting</span>
              </h1>
              
              <p className={`text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#A07A41]/30 pl-8 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-left animation-delay-400' : 'opacity-0'}`}>
                Supporting UK law firms with precise, reliable, and legally sound partnership documentation. We focus on accuracy and compliance so you can focus on your clients.
              </p>

              <div className={`flex flex-wrap gap-6 transition-all duration-1000 ${visibleSections.hero ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:bg-white hover:scale-105 shadow-2xl w-full sm:w-auto">
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:border-[#A07A41] hover:text-[#A07A41] w-full sm:w-auto">
                  <span>Contact Us</span>
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
              
              <div className="relative group p-4 border border-[#A07A41]/20 rounded-[3.5rem]">
                <div className="aspect-square rounded-[3rem] overflow-hidden bg-[#2A454E] relative">
                   <img src="/agg1.jpg" alt="Partnership Strategy" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                </div>
              </div>


              <div className={`${visibleSections.intro ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Strategic Support</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                  Precision Drafting for <br />
                  <span className="italic font-light text-[#A07A41]">Modern Partnerships.</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                    Our partnership agreement drafting services are designed specifically for UK solicitors and law firms seeking high-quality outsourcing solutions. We provide the structural depth and legal accuracy required for complex partnership arrangements.
                  </p>
                  <p className="text-gray-300 text-lg font-sans font-light leading-relaxed">
                    By leveraging our expertise, firms can improve operational efficiency while ensuring every agreement aligns with current UK statutory requirements and best practices.
                  </p>
                  <div className="flex items-center gap-8 pt-8">
                    <div className="text-center">
                       <p className="text-3xl font-serif font-bold text-[#A07A41] mb-1">100%</p>
                       <p className="text-[10px] uppercase tracking-widest text-gray-400">UK Compliance</p>
                    </div>
                    <div className="h-12 w-[1px] bg-white/10"></div>
                    <div className="text-center">
                       <p className="text-3xl font-serif font-bold text-[#A07A41] mb-1">Efficiency</p>
                       <p className="text-[10px] uppercase tracking-widest text-gray-400">Optimized Workflow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Scope of Services */}
        <section 
          ref={sectionRefs.scope}
          data-section="scope"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center mb-24">
             <span className={`text-[#A07A41] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block ${visibleSections.scope ? 'animate-fade-in-up' : 'opacity-0'}`}>Our Catalog</span>
             <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white tracking-tight ${visibleSections.scope ? 'animate-fade-in-up' : 'opacity-0'}`}>Scope of <span className="italic font-light text-[#A07A41]">Services.</span></h2>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scopeItems.map((item, i) => (
              <div 
                key={i} 
                className={`group p-12 bg-[#2A454E]/30 border border-white/5 rounded-[2.5rem] hover:bg-[#2A454E]/60 hover:border-[#A07A41]/30 transition-all duration-500 overflow-hidden relative ${visibleSections.scope ? (i%2===0 ? 'animate-fade-in-top-left' : 'animate-fade-in-bottom-right') : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10">
                   <div className="w-16 h-16 bg-[#1B2D33] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#A07A41] transition-all duration-500 shadow-xl overflow-hidden group-hover:scale-110">
                      <item.icon className="h-7 w-7 text-[#A07A41] group-hover:text-black transition-colors" />
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight group-hover:text-[#A07A41] transition-colors">{item.title}</h3>
                   <p className="text-gray-400 font-sans font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
                <div className="absolute -bottom-8 -right-8 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700">
                   <item.icon size={180} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Key Features / Value Proposition */}
        <section 
          ref={sectionRefs.features}
          data-section="features"
          className="relative py-20 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="bg-[#1B2D33] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A07A41] via-white/10 to-[#A07A41]"></div>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div className={`${visibleSections.features ? 'animate-fade-in-left' : 'opacity-0'}`}>
                      <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Value Proposition</span>
                      <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-12">Expertise in Every <span className="italic font-light text-[#A07A41]">Clause.</span></h3>
                      <div className="grid gap-8">
                         {features.map((feature, i) => (
                           <div key={i} className="flex items-center gap-6 group">
                              <div className="h-12 w-12 rounded-full border border-[#A07A41]/30 flex items-center justify-center group-hover:bg-[#A07A41] group-hover:border-transparent transition-all">
                                 <feature.icon className="h-5 w-5 text-[#A07A41] group-hover:text-black transition-colors" />
                              </div>
                              <span className="text-gray-200 font-serif font-bold text-lg tracking-wide">{feature.title}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className={`${visibleSections.features ? 'animate-fade-in-right' : 'opacity-0'}`}>
                      <div className="aspect-[16/10] bg-[#2A454E]/40 border border-white/5 rounded-3xl p-10 flex flex-col justify-center items-center text-center group transition-all hover:bg-[#2A454E]/60">
                         <Award className="h-20 w-20 text-[#A07A41] mb-8 animate-bounce transition-all duration-3000" />
                         <h4 className="text-2xl font-serif font-bold text-white mb-4 italic">Guaranteed Consistency</h4>
                         <p className="text-gray-400 text-sm font-sans font-light leading-relaxed">
                            Every document undergoes a rigorous consistency check against your firm&apos;s established drafting style.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 5. Our Process */}
        <section 
          ref={sectionRefs.process}
          data-section="process"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto overflow-hidden">
             <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
                <div className={`max-w-2xl ${visibleSections.process ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Professional Flow</span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">How Our <span className="italic font-light text-[#A07A41]">Process Works.</span></h2>
                </div>
                <div className={`aspect-video w-full lg:w-1/2 rounded-3xl bg-[#2A454E] border border-white/5 relative overflow-hidden group ${visibleSections.process ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <img src="/agg2.jpg" alt="Drafting Workflow" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2D33]/60 via-transparent to-[#1B2D33]/60 grayscale brightness-50 mix-blend-multiply opacity-40"></div>
                </div>

             </div>

             <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "01", title: "Instruction Received", icon: ClipboardCheck },
                  { step: "02", title: "Requirement Analysis", icon: Search },
                  { step: "03", title: "Draft Preparation", icon: FileSignature },
                  { step: "04", title: "Review & Revisions", icon: FileSearch },
                  { step: "05", title: "Final Delivery", icon: CheckCircle }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col items-center text-center p-8 bg-[#2A454E]/20 border border-white/5 rounded-3xl transition-all duration-500 hover:bg-[#2A454E]/40 hover:-translate-y-2 group ${visibleSections.process ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 150}ms` }}>
                     <div className="w-12 h-12 rounded-full border border-[#A07A41]/10 flex items-center justify-center mb-6 group-hover:bg-[#A07A41] transition-all">
                        <item.icon className="h-5 w-5 text-[#A07A41] group-hover:text-black transition-colors" />
                     </div>
                     <span className="text-[#A07A41] font-serif font-bold italic text-sm mb-4">{item.step}</span>
                     <h4 className="text-white font-serif font-bold text-sm tracking-tight leading-snug">{item.title}</h4>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 6. Who We Work With */}
        <section 
          ref={sectionRefs.who}
          data-section="who"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className={`${visibleSections.who ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
                   <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Our Community</span>
                   <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-12">Who We <span className="italic font-light text-[#A07A41]">Work With.</span></h2>
                   <div className="grid sm:grid-cols-2 gap-4">
                      {[ "Law Firms", "Solicitors", "Legal Consultants", "Business Advisory Firms" ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-[#1B2D33] border border-white/5 rounded-2xl group transition-all hover:bg-[#A07A41] hover:scale-105">
                           <Users size={20} className="text-[#A07A41] group-hover:text-black" />
                           <span className="text-gray-300 font-bold uppercase tracking-widest text-[11px] group-hover:text-black">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className={`${visibleSections.who ? 'animate-fade-in-bottom-right' : 'opacity-0'}`}>
                   <div className="aspect-square rounded-[4rem] bg-[#1B2D33] border border-white/10 relative overflow-hidden group">
                      <img src="/agg3.jpg" alt="Professional Allies" className="w-full h-full object-cover transition-all duration-[20s] group-hover:scale-110 grayscale group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-[#2A454E]/20 mix-blend-overlay"></div>
                   </div>
                </div>

             </div>
          </div>
        </section>

        {/* 7. Quality & Compliance Statement */}
        <section 
          ref={sectionRefs.quality}
          data-section="quality"
          className="relative py-24 bg-[#1B2D33] border-y border-white/5"
        >
          <div className="px-4 sm:px-6 lg:px-8 max-w-[60rem] mx-auto text-center">
             <div className={`${visibleSections.quality ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="w-20 h-20 mx-auto bg-[#2A454E] rounded-full flex items-center justify-center mb-10 border border-[#A07A41]/10 shadow-[0_0_50px_rgba(160,122,65,0.1)]">
                   <ShieldCheck size={40} className="text-[#A07A41]" />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight">Quality & <span className="italic font-light text-[#A07A41]">Compliance.</span></h2>
                <p className="text-gray-400 text-lg md:text-xl font-sans font-light leading-relaxed">
                  Every partnership agreement is treated with extreme attention to detail, ensuring total alignment with UK legal standards. Our consistency in drafting translates into fewer revisions and faster completion times for your legal practice.
                </p>
             </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section 
          ref={sectionRefs.faq}
          data-section="faq"
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto">
            <div className={`text-center mb-24 ${visibleSections.faq ? 'animate-fade-in-top-left' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">FAQ</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight text-center">Common <span className="italic font-light text-[#A07A41]">Questions.</span></h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-[#A07A41]/10 rounded-2xl bg-[#1B2D33] overflow-hidden ${visibleSections.faq ? (index%2===0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'}`} 
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
                    <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Call to Action & 10. Footer CTA */}
        <section 
          ref={sectionRefs.cta}
          data-section="cta"
          className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A07A41]/5 blur-[120px] rounded-full -translate-y-1/2"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-4xl mx-auto p-16 lg:p-24 bg-[#2A454E]/40 border border-[#A07A41]/10 rounded-[4rem] backdrop-blur-2xl relative overflow-hidden shadow-2xl ${visibleSections.cta ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-[#A07A41] uppercase tracking-[0.5em] text-[11px] font-bold mb-10 block font-serif italic">Operational Excellence</span>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-tight tracking-tight">
                Refine Your Drafting <br />
                <span className="italic font-light text-[#A07A41]">Request a Quote.</span>
              </h2>
              
              <p className="text-gray-400 font-sans text-lg mb-12 max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-10">
                Partner with H&S Co. Today for reliable, compliant, and cost-effective legal documentation services.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a href="#contact" className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-[#A07A41] text-black font-bold uppercase tracking-widest text-[11px] rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white shadow-2xl w-full sm:w-auto mx-auto max-w-[280px]">
                  <span>Get in Touch Now</span>
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

export default PartnershipAgreementDraftingPage;
