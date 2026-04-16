import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, FileText, CheckCircle, Shield, Briefcase, 
  Search, AlertCircle, FileCheck, Users, Scale, Clock, Zap,
  ShieldCheck, ShieldAlert, Target
} from 'lucide-react';


const CaseSummariesPage = () => {
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setSection1Visible(true);
            if (entry.target === section2Ref.current) setSection2Visible(true);
            if (entry.target === section3Ref.current) setSection3Visible(true);
            if (entry.target === section4Ref.current) setSection4Visible(true);
            if (entry.target === section5Ref.current) setSection5Visible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (section5Ref.current) observer.observe(section5Ref.current);

    return () => observer.disconnect();
  }, []);

  const cases = [
    {
      title: "Student Visa – Documentation Support",
      issue: "Missing financial evidence",
      action: "Provided checklist and document review",
      result: "Application submitted with complete documentation",
      icon: Users,
    },
    {
      title: "Spouse Visa – Supporting Evidence",
      issue: "Weak relationship documentation",
      action: "Structured and organized supporting evidence",
      result: "Clear and well-presented application",
      icon: Heart, // I'll use Users if Heart is not imported, but let's add Heart to imports
    },
    {
      title: "Visa Refusal Appeal",
      issue: "Previous refusal due to missing documents",
      action: "Identified gaps and prepared supporting evidence",
      result: "Stronger appeal submission",
      icon: FileText,
    },
    {
      title: "Immigration Form Errors",
      issue: "Incorrect and inconsistent form entries",
      action: "Reviewed and corrected application forms",
      result: "Accurate and consistent submission",
      icon: FileCheck,
    },
    {
      title: "Case File Organization",
      issue: "Disorganized paperwork",
      action: "Structured and categorized documents",
      result: "Clear and accessible case file",
      icon: Briefcase,
    },
    {
      title: "Cover Letter Drafting",
      issue: "No clear explanation of case",
      action: "Drafted structured cover letter",
      result: "Improved clarity of application",
      icon: FileText,
    }
  ];

  return (
    <div className="min-h-screen bg-[#1B2D33] flex flex-col overflow-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* ——— HERO SECTION ——— */}
        <section 
          ref={section1Ref}
          className="relative min-h-[85vh] flex items-center pt-32 lg:pt-40 pb-24 overflow-hidden"
        >
          {/* SEO Hidden Content */}
          <div className="hidden">
            <h1>Case Summaries UK Law Firm – Litigation & Immigration Examples</h1>
            <p>case summaries UK law firm, immigration case examples UK, legal case overview UK</p>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 bg-[#1B2D33] transition-opacity duration-1000 ${section1Visible ? 'opacity-40' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-cover bg-center opacity-30 animate-[ken-burns_12s_linear_infinite]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80")' }}></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B2D33] via-transparent to-[#1B2D33] z-10"></div>
          </div>

          <div className="absolute right-[10%] top-0 bottom-0 w-px bg-[#A07A41]/20 hidden lg:block z-20"></div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 animate-fade-in-left">
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl">
                  <ShieldCheck size={10} className="text-[#A07A41]" />
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[8px] font-black italic">Success Portfolio UK</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                  Case Summaries <br />
                  <span className="italic font-light text-[#A07A41]">Overview of Our Work.</span>
                </h1>
                
                <div className="flex gap-8 items-start mb-10 border-l border-[#A07A41]/30 pl-8">
                  <div className="max-w-xl">
                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-4 italic opacity-80">
                      A snapshot of the cases we have supported across immigration and legal matters in the UK.
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed">
                      Browse a selection of brief case summaries highlighting how we assist clients in preparing documentation, resolving issues, and improving their applications.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <a href="#explore-cases" className="px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] rounded hover:bg-[#A07A41] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95">
                    Explore Cases
                  </a>
                  <div className="flex items-center gap-2 text-white/30 text-[8px] font-black uppercase tracking-widest italic border-b border-white/10 pb-0.5">
                    <ShieldCheck size={12} className="text-[#A07A41]" />
                    Validated Documentation
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 hidden lg:block relative animate-fade-in-bottom-left group">
                <div className="relative p-1.5 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-big overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" 
                    alt="Legal Research" 
                    className="w-full h-[450px] object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#1B2D33]/40 group-hover:bg-transparent transition-all duration-700"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ——— INTRO SECTION ——— */}
        <section ref={section2Ref} className="relative py-20 bg-white/[0.02] border-y border-white/5 overflow-hidden">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto text-center">
            <div className={`max-w-3xl mx-auto ${section2Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-[#A07A41] text-[8px] md:text-[9px] uppercase tracking-[0.5em] font-black mb-6 italic">What These Summaries Show</h2>
              <p className="text-gray-300 text-sm md:text-base font-serif italic font-light leading-loose opacity-80 border-x-2 border-[#A07A41]/10 px-8">
                These summaries provide a high-level overview of the types of cases we handle. They are designed to give insight into common challenges and how structured documentation support can improve outcomes.
              </p>
              <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-[#1B2D33] border border-[#A07A41]/20 rounded-full">
                <Zap size={12} className="text-[#A07A41]" />
                <span className="text-white/60 text-[10px] uppercase font-black tracking-widest italic">“Short insights, not full stories”</span>
              </div>
            </div>
          </div>
        </section>

        {/* ——— CASE SUMMARY GRID ——— */}
        <section id="explore-cases" ref={section3Ref} className="relative py-20 lg:py-40 bg-[#1B2D33]">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
            <div className="text-center mb-24 animate-fade-in-up">
              <span className="text-[#A07A41] uppercase tracking-[0.6em] text-[8px] font-black mb-8 block font-serif">Case Portfolio</span>
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tighter italic uppercase">Documentation <br />
                <span className="italic font-light text-[#A07A41]">Case Mapping.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {cases.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className={`group relative p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-[#A07A41] transition-all duration-700 shadow-big flex flex-col h-full ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="absolute top-8 right-8 text-4xl font-serif font-black text-white/5 group-hover:text-black/10 transition-colors italic">0{idx + 1}</div>
                    
                    <Icon size={20} className="text-[#A07A41] group-hover:text-black mb-10 transition-transform group-hover:rotate-[360deg] duration-1000" />

                    <h3 className="text-white font-serif font-bold text-sm md:text-base italic mb-8 tracking-tighter uppercase group-hover:text-black">
                      {item.title}
                    </h3>

                    <div className="space-y-8 flex-grow">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.2em] text-[#A07A41] group-hover:text-black/60 font-black mb-1.5 italic">Challenge</p>
                        <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-loose group-hover:text-black/80">{item.issue}</p>
                      </div>

                      <div>
                        <p className="text-[8px] uppercase tracking-[0.2em] text-[#A07A41] group-hover:text-black/60 font-black mb-1.5 italic">Strategic action</p>
                        <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-loose group-hover:text-black/80">{item.action}</p>
                      </div>

                      <div className="pt-4 border-t border-white/5 group-hover:border-black/10">
                        <p className="text-[8px] uppercase tracking-[0.2em] text-[#A07A41] group-hover:text-black font-black mb-1.5 italic">Result</p>
                        <p className="text-white text-[10px] md:text-xs font-bold leading-relaxed group-hover:text-black">{item.result}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ——— WHY THESE MATTER ——— */}
        <section ref={section4Ref} className="relative py-20 lg:py-40 bg-white/[0.01] border-y border-white/5 overflow-hidden">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
            <div className={`${section4Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-2xl md:text-5xl font-serif font-bold text-white tracking-tighter italic uppercase mb-12 underline decoration-[#A07A41]/10 underline-offset-[24px] decoration-8">Why These <br /><span className="italic font-light text-[#A07A41]">Summaries Matter.</span></h2>
              
              <p className="text-gray-500 text-[10px] md:text-xs font-sans font-light italic leading-loose opacity-70 mb-16 max-w-2xl mx-auto px-8">
                These summaries demonstrate the range of cases we handle and highlight the importance of proper documentation and structured preparation.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Transparency", icon: ShieldCheck },
                  { label: "Authority", icon: Scale },
                  { label: "Precision", icon: Target }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-[#A07A41] transition-all duration-500">
                    <item.icon size={16} className="text-[#A07A41] group-hover:text-black mx-auto mb-4" />
                    <span className="text-white/40 group-hover:text-black font-bold tracking-[0.2em] uppercase text-[8px] italic">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ——— DISCLAIMER & CTA ——— */}
        <section ref={section5Ref} className="relative py-24 lg:py-48 bg-[#1B2D33]">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[85rem] mx-auto">
            <div className="flex flex-col gap-24">
              
              {/* Disclaimer */}
              <div className={`p-10 md:p-14 bg-[#2A454E]/20 border border-[#A07A41]/20 rounded-[3rem] text-center backdrop-blur-3xl max-w-3xl mx-auto ${section5Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <ShieldAlert size={30} className="text-[#A07A41] mx-auto mb-6 opacity-40" />
                <h2 className="text-[#A07A41] text-xs font-serif font-bold mb-4 italic uppercase tracking-[0.3em] font-black">Disclaimer</h2>
                <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed italic font-light opacity-70 underline decoration-white/5 decoration-dotted underline-offset-4">
                  These case summaries are for general information purposes only. Each case is unique, and outcomes may vary. We do not guarantee the success of any application or legal matter.
                </p>
              </div>

              {/* Call to Action */}
              <div className={`text-center ${section5Visible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-10 tracking-tighter italic uppercase">Need Help with <br /><span className="italic font-light text-[#A07A41] lowercase">Your Case.</span></h2>
                <p className="text-gray-400 text-[10px] md:text-sm font-sans font-light italic leading-relaxed mb-16 max-w-xl mx-auto opacity-70">
                  If you are facing a similar issue, contact us today for professional support with your documentation and application.
                </p>
                <div role="button" className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-big overflow-hidden hover:scale-110 active:scale-95 shadow-inner">
                  <span className="relative z-10 font-black tracking-widest">Discuss Your Case</span>
                  <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

            </div>
          </div>
          
          {/* Subtle logo background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none">
            <Scale size={600} className="text-[#A07A41]" />
          </div>
        </section>

      </main>
    </div>
  );
};

// Internal components for Icons not imported above
const Heart = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ArrowDown = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

export default CaseSummariesPage;
