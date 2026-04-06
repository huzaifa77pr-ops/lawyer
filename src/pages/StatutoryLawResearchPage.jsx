import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, BookOpen, Clock, Gavel, Search, CheckCircle, Scroll, Zap, Database, Book, Scale, FileText, ChevronDown, Plus, MessageSquare
} from 'lucide-react';

const StatutoryLawResearchPage = () => {
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);
  const [section6Visible, setSection6Visible] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === section2Ref.current) setSection2Visible(true);
            if (entry.target === section3Ref.current) setSection3Visible(true);
            if (entry.target === section4Ref.current) setSection4Visible(true);
            if (entry.target === section5Ref.current) setSection5Visible(true);
            if (entry.target === section6Ref.current) setSection6Visible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (section5Ref.current) observer.observe(section5Ref.current);
    if (section6Ref.current) observer.observe(section6Ref.current);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      q: "Which UK jurisdictions do you cover for statutory research?",
      a: "Our team provides comprehensive analysis across all UK jurisdictions, including England & Wales, Scotland, and Northern Ireland. We specifically track devolved legislative changes and Statutory Instruments relevant to each region."
    },
    {
      q: "What is your typical turnaround time for a report?",
      a: "Standard statutory analysis reports are typically delivered within 24–72 hours. High-priority requests can be accommodated for critical litigation deadlines."
    },
    {
      q: "Are your research reports citation-ready?",
      a: "Yes. All our research is backed by official citations from authoritative databases including Westlaw UK, LexisNexis, and the UK Parliament's legislative portal."
    },
    {
      q: "Do you offer cross-jurisdictional comparative analysis?",
      a: "Absolutely. We often provide comparative statutory analysis for businesses operating across multiple legal jurisdictions to ensure full regulatory compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-hidden text-white">
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center pt-32 lg:pt-40 pb-24 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="/2nd.jpg" 
              alt="UK Statutory Law Research" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A454E]/90 via-[#2A454E]/60 to-[#2A454E]"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6 animate-fade-in-right">
                  <div className="h-[1px] w-10 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold font-sans">Primary Legislation</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 tracking-tight overflow-hidden">
                  <span className="block animate-fade-in-right">UK Statutory Law</span>
                  <span className="block italic font-light text-[#A07A41] animate-fade-in-right animation-delay-200">Research Services</span>
                  <span className="block animate-fade-in-right animation-delay-300">for Solicitors</span>
                </h1>
                
                <p className="text-gray-300 text-base md:text-xl font-sans font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-[#A07A41]/30 pl-6 animate-fade-in-right animation-delay-400">
                  Precise interpretation of UK legislation, regulations, and statutory provisions — backed by authoritative legal sources.
                </p>

                <div className="space-y-6 mb-12">
                  {[
                    { icon: Search, text: "Section-by-section statutory analysis", anim: 'animate-fade-in-right', delay: 'animation-delay-500' },
                    { icon: Gavel, text: "Cross-referenced with case law", anim: 'animate-fade-in-right', delay: 'animation-delay-600' },
                    { icon: CheckCircle, text: "Fast, accurate, citation-backed research", anim: 'animate-fade-in-right', delay: 'animation-delay-700' }
                  ].map((point, index) => (
                    <div key={index} className={`flex items-center gap-4 group ${point.anim} ${point.delay}`}>
                      <div className="p-2 bg-[#A07A41]/10 rounded-xl border border-[#A07A41]/20 group-hover:bg-[#A07A41] transition-all duration-300">
                        <point.icon className="h-5 w-5 text-[#A07A41] group-hover:text-[#050505] transition-colors duration-300" />
                      </div>
                      <span className="text-gray-200 text-base md:text-lg font-sans font-light">{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block relative animate-fade-in-left animation-delay-500">
                <div className="relative">
                  <div className="absolute -inset-10 bg-[#A07A41]/10 blur-[100px] rounded-full pointer-events-none"></div>
                  <div className="relative aspect-[4/5] max-w-md ml-auto border border-[#A07A41]/20 rounded-3xl p-1 bg-[#16272D]/50 backdrop-blur-xl overflow-hidden group shadow-2xl">
                    <img 
                      src="/2nd.jpg" 
                      alt="UK Legislation" 
                      className="w-full h-full object-cover rounded-2xl grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A454E] via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="p-8 bg-[#2A454E]/80 backdrop-blur-lg border border-white/10 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4">
                          <Scroll className="h-6 w-6 text-[#A07A41]" />
                          <span className="text-white font-serif text-2xl font-bold uppercase tracking-tight">Legislative Prowess</span>
                        </div>
                        <p className="text-gray-300 font-sans font-light leading-relaxed">
                          Helping legal teams build impeccable arguments through detailed statutory analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Strategic Overview */}
        <section ref={section2Ref} className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-t border-white/10">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className={`${section2Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold font-sans">Strategic Overview</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-10">
                  Precision in <br />
                  <span className="italic font-light text-[#A07A41]">Legislative Analysis.</span>
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl">
                    H&S CO provides professional statutory law research tailored to UK solicitors, law firms, and legal professionals. We analyze legislation from authoritative sources including UK Parliament, Westlaw UK, and LexisNexis UK to deliver precise legal interpretations.
                  </p>
                  <div className="p-8 bg-[#16272D]/60 backdrop-blur-xl border border-[#A07A41] rounded-2xl group flex items-start gap-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(160,122,65,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                      <Zap size={100} className="text-[#A07A41]" />
                    </div>
                    <div className="p-3 bg-[#A07A41]/10 rounded-xl border border-[#A07A41]/20 group-hover:scale-110 transition-transform">
                      <Zap className="h-6 w-6 text-[#A07A41]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">Our Focus is Simple:</h4>
                      <p className="text-[#A07A41] text-base md:text-xl font-serif italic font-light leading-snug">
                        "Break down complex statutes into clear, usable legal insights."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center">
                  {[
                    { label: "UK Parliament", icon: Book },
                    { label: "Westlaw UK", icon: Database },
                    { label: "LexisNexis UK", icon: Database }
                  ].map((source, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 group cursor-default">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#A07A41] transition-colors">
                        <source.icon className="h-5 w-5 text-gray-500 group-hover:text-[#A07A41] transition-colors" />
                      </div>
                      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{source.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`grid grid-cols-2 gap-4 ${section2Visible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">
                    <img src="/aa1.jpg" alt="Research" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">
                    <img src="/aa2.jpg" alt="Detail" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">
                    <img src="/aa.jpg" alt="Office" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">
                    <img src="/aa3.jpg" alt="Books" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Definition */}
        <section ref={section3Ref} className="relative py-24 bg-[#1B2D33] overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
            <div className={`space-y-10 ${section3Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex justify-center flex-wrap gap-8 items-center opacity-40 mb-12">
                <div className="flex items-center gap-3"><Scroll className="h-5 w-5" /><span className="text-[10px] uppercase tracking-widest font-bold">Acts of Parliament</span></div>
                <div className="w-1.5 h-1.5 bg-[#A07A41] rounded-full"></div>
                <div className="flex items-center gap-3"><Gavel className="h-5 w-5" /><span className="text-[10px] uppercase tracking-widest font-bold">Regulations</span></div>
                <div className="w-1.5 h-1.5 bg-[#A07A41] rounded-full"></div>
                <div className="flex items-center gap-3"><Search className="h-5 w-5" /><span className="text-[10px] uppercase tracking-widest font-bold">Legislative Intent</span></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-light text-white/90 leading-relaxed max-w-4xl mx-auto">
                Statutory research involves analyzing <span className="text-[#A07A41] font-bold italic">Acts of Parliament</span> and regulations to interpret provisions, determine <span className="text-white font-bold underline decoration-[#A07A41]/40 underline-offset-8">legislative intent</span>, and apply findings directly to your case.
              </h2>
              <div className="w-20 h-[1px] bg-[#A07A41] mx-auto opacity-50"></div>
            </div>
          </div>
        </section>

        {/* Section 4: Core Services */}
        <section ref={section4Ref} className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-t border-white/10">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-white">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className={`flex items-center gap-4 mb-8 ${section4Visible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                  <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold font-sans">Core Services</span>
                </div>
                <h2 className={`text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-12 ${section4Visible ? 'animate-fade-in-left animation-delay-200' : 'opacity-0'}`}>
                  UK Legislation <br />
                  <span className="italic font-light text-[#A07A41]">Analysis & Breakdown.</span>
                </h2>
                <div className="space-y-10">
                  {[
                    { title: "Statutory Instrument Analysis", text: "In-depth review of both primary Acts and secondary legislation/SIs relevant to your case.", anim: 'animate-fade-in-left' },
                    { title: "Complex Clause Deconstruction", text: "Breaking down intricate legal jargon into clear, actionable statutory logic.", anim: 'animate-fade-in-right' },
                    { title: "Clause Relevance Mapping", text: "Identifying precise sections and sub-clauses that strengthen your legal argument.", anim: 'animate-fade-in-left' }
                  ].map((item, index) => (
                    <div key={index} className={`flex gap-6 group ${section4Visible ? item.anim : 'opacity-0'}`} style={{ animationDelay: `${(index + 3) * 100}ms` }}>
                      <div className="w-12 h-12 bg-[#A07A41]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#A07A41] transition-all duration-300">
                        <CheckCircle className="h-5 w-5 text-[#A07A41] group-hover:text-[#050505]" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2 font-sans">{item.title}</h4>
                        <p className="text-gray-400 font-sans font-light leading-relaxed max-w-lg">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-[#A07A41]/10 blur-[80px] rounded-full ${section4Visible ? 'animate-fade-in-down' : 'opacity-0'}`}></div>
                <div className={`relative bg-[#1B2D33]/40 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-xl ${section4Visible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-500`}>
                  <div className="flex items-center gap-4 mb-8">
                    <Scale className="h-6 w-6 text-[#A07A41]" /><h3 className="text-white font-bold uppercase tracking-widest text-sm">Example Focus Areas</h3>
                  </div>
                  <div className="space-y-4 mb-12">
                    <div className="p-5 bg-white/5 border-l-4 border-[#A07A41] rounded-r-xl group hover:bg-[#A07A41]/5 transition-all"><p className="text-white font-bold mb-1">Companies Act 2006</p><p className="text-gray-500 text-xs uppercase tracking-widest">Corporate Governance</p></div>
                    <div className="p-5 bg-white/5 border-l-4 border-[#A07A41] rounded-r-xl group hover:bg-[#A07A41]/5 transition-all"><p className="text-white font-bold mb-1">Human Rights Act 1998</p><p className="text-gray-500 text-xs uppercase tracking-widest">Public Law Rights</p></div>
                  </div>
                  <div className={`p-6 bg-[#A07A41]/10 border border-[#A07A41]/20 rounded-2xl flex items-center justify-between group transition-all hover:bg-[#A07A41] ${section4Visible ? 'animate-fade-in-down animation-delay-700' : 'opacity-0'}`}>
                    <div className="flex items-center gap-4"><FileText className="h-8 w-8 text-[#A07A41] group-hover:text-[#050505]" /><div><span className="block text-[10px] font-bold text-[#A07A41] uppercase group-hover:text-[#050505]">Deliverable</span><span className="block text-white font-bold text-lg group-hover:text-[#050505]">Analysis Report</span></div></div>
                    <ArrowRight className="h-5 w-5 text-[#A07A41] group-hover:text-[#050505] transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section ref={section5Ref} className="relative py-24 lg:py-40 bg-[#1B2D33] overflow-hidden border-t border-white/5">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[50rem] mx-auto text-white">
            <div className={`text-center mb-16 ${section5Visible ? 'animate-fade-in-down' : 'opacity-0'}`}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold font-sans">Common Questions</span>
                <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Statutory Research <span className="italic font-light text-[#A07A41]">FAQ.</span></h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className={`overflow-hidden border-b border-white/10 ${section5Visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 150}ms` }}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between group focus:outline-none"
                  >
                    <span className={`text-left text-lg font-serif transition-colors ${activeFaq === index ? 'text-[#A07A41]' : 'text-white'}`}>{faq.q}</span>
                    <div className={`p-2 rounded-full border border-white/10 group-hover:border-[#A07A41] transition-all duration-300 ${activeFaq === index ? 'bg-[#A07A41] border-[#A07A41] rotate-180' : ''}`}>
                      <ChevronDown className={`h-4 w-4 transition-colors ${activeFaq === index ? 'text-[#050505]' : 'text-[#A07A41]'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out px-1 ${activeFaq === index ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 font-sans font-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section ref={section6Ref} className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden border-t border-white/10">
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#050505]/40 to-transparent"></div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto text-center">
            <div className={`max-w-4xl mx-auto p-12 lg:p-20 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl relative overflow-hidden ${section6Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="absolute -top-10 -left-10 opacity-5"><MessageSquare size={200} className="text-[#A07A41]" /></div>
              <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-8 block">Next Steps</span>
              <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                Build Your Case on Solid <br />
                <span className="italic font-light text-[#A07A41]">Legislative Ground.</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-sans font-light leading-relaxed mb-12 max-w-2xl mx-auto border-l-2 border-[#A07A41]/30 px-6">
                Expert statutory research, citation-ready analysis, and rapid turnaround for UK solicitors and barristers.
              </p>
              <div className="flex justify-center">
                <a href="/#contact" className="group relative flex items-center justify-center gap-4 px-12 py-5 bg-[#1B2D33] border border-[#A07A41]/30 text-white font-bold tracking-widest uppercase text-sm rounded-xl shadow-2xl transition-all duration-300 hover:bg-[#A07A41] hover:text-[#050505] overflow-hidden">
                  <span className="relative z-10">Request Research Brief Now</span>
                  <ArrowRight className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StatutoryLawResearchPage;
