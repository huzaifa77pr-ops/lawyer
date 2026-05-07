import React, { useEffect, useState, useRef } from 'react';
import { 
  Gavel, Scale, FileText, History, Search, ArrowRight,
  Bookmark, Share2, ExternalLink, Calendar, MapPin,
  Clock, Shield, ShieldCheck, BookOpen, Layers, CheckCircle, 
  MessageSquare, Briefcase, Zap, Award,
  Landmark, FileCheck, UserCheck, Mail, Phone
} from 'lucide-react';

const RecentJudgementsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All', 'Intellectual Property', 'Property Law', 
    'Employment Law', 'Data Protection & Cyber Law', 
    'Tax & Financial Cases', 'Criminal Law', 'Civil Litigation'
  ];

  const judgements = [
    {
      id: 1,
      title: "Sky Ltd v SkyLand Developments",
      court: "High Court (Chancery Division)",
      date: "Oct 2024",
      category: "Intellectual Property",
      summary: "A critical ruling on trademark infringement involving brand phonetic similarity and consumer confusion in the UK property market.",
      analysis: "The court emphasized that phonetic similarity alone can be sufficient for infringement if the market sectors overlap."
    },
    {
      id: 2,
      title: "Jones v London Residential Ltd",
      court: "First-tier Tribunal (Property Chamber)",
      date: "Sep 2024",
      category: "Property Law",
      summary: "Clarification on the validity of section 21 notices and the requirement for EPC documentation to be served prior to lease commencement.",
      analysis: "Strict compliance with administrative documentation is mandatory for eviction proceedings to be legally sound."
    },
    {
      id: 3,
      title: "TechCorp v Former Employee",
      court: "Employment Appeal Tribunal",
      date: "Aug 2024",
      category: "Employment Law",
      summary: "Analysis of non-compete clauses and the reasonableness of geographic restrictions in global tech contracts.",
      analysis: "Restrictive covenants must be precisely tailored to protect legitimate business interests without being overly punitive."
    },
    {
      id: 4,
      title: "DataVault v ICO",
      court: "Upper Tribunal",
      date: "Jul 2024",
      category: "Data Protection & Cyber Law",
      summary: "Appeal against a monetary penalty notice for inadequate encryption protocols following a major data breach.",
      analysis: "The ruling sets a higher standard for the definition of 'state-of-the-art' security measures under UK GDPR."
    },
    {
      id: 5,
      title: "Financial Trust v HMRC",
      court: "Tax Tribunal",
      date: "Jun 2024",
      category: "Tax & Financial Cases",
      summary: "Judgement on the classification of capital gains versus income for high-frequency algorithmic trading portfolios.",
      analysis: "Detailed transaction logs and intent documentation were pivotal in determining the tax bracket."
    },
    {
      id: 6,
      title: "R v Thompson (Criminal Appeal)",
      court: "Court of Appeal (Criminal Division)",
      date: "May 2024",
      category: "Criminal Law",
      summary: "Clarification on the admissibility of digital evidence obtained via third-party cloud service providers.",
      analysis: "Chain of custody and authentication protocols for cloud-based data remain the primary focus for evidence admissibility."
    }
  ];

  const filteredJudgements = activeCategory === 'All' 
    ? judgements 
    : judgements.filter(j => j.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          className="relative min-h-[75vh] flex items-center pt-48 pb-24 overflow-hidden bg-[#2A454E]"
        >


          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A454E]/95 via-[#2A454E]/80 to-[#2A454E] z-10" />
            <img
              src="/case4.jpg"
              alt="UK Judgements"
              className="w-full h-full object-cover object-center opacity-25"
            />
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full text-center">
            <div className="animate-fade-in-up">

              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-white/5 border border-white/10 rounded-full">
                <Gavel className="h-4 w-4 text-[#A07A41]" />
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">
                  Judicial Archive
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                Recent UK Judgements & <br />
                <span className="italic font-light text-[#A07A41]">Case Law Updates</span>
              </h1>
              
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-3xl mx-auto">
                Comprehensive tracking of court decisions, legal interpretations, and practical case law insights across the UK legal landscape.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <button className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold tracking-[0.2em] uppercase text-xs rounded transition-all duration-300 hover:bg-[#B58B4B] shadow-biggest">
                  Explore Judgements <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.2em] uppercase text-xs rounded transition-all duration-300 hover:bg-[#A07A41]/10">
                  Case Research Support
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CATEGORY FILTER SECTION */}
        <section 
          className="relative py-12 bg-[#1B2D33] border-y border-white/5 sticky top-[72px] z-[40] backdrop-blur-md"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 animate-fade-in">

               <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-3 rounded text-[10px] uppercase tracking-[0.15em] font-black transition-all duration-500 border ${
                        activeCategory === cat 
                        ? 'bg-[#A07A41] border-[#A07A41] text-black shadow-biggest' 
                        : 'bg-transparent border-white/10 text-gray-500 hover:border-[#A07A41]/50 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
               </div>
               <div className="relative group w-full lg:w-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A07A41]" />
                  <input 
                    type="text" 
                    placeholder="Search by case name..." 
                    className="w-full lg:w-64 pl-12 pr-6 py-2.5 bg-[#2A454E] border border-white/10 rounded-full text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#A07A41]/50 transition-all"
                  />
               </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED JUDGEMENT SECTION */}
        <section 
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >


          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-16">
               <div className="h-[2px] w-12 bg-[#A07A41]"></div>
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Precedent Spotlight</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
               <div className="relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-biggest bg-[#1B2D33] h-[600px]">

                  <img 
                    src="/heroo.jpg" 
                    alt="Landmark Ruling" 
                    className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-50 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-[#1B2D33]/40 to-transparent"></div>
                  <div className="absolute top-10 left-10">
                     <span className="px-6 py-2 bg-[#A07A41] text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">Supreme Court Decision</span>
                  </div>
                  <div className="absolute bottom-12 left-12 right-12">
                     <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">Financial Markets v Regulatory Authority</h3>
                     <p className="text-gray-300 text-sm font-light leading-relaxed mb-8 italic">The definitive ruling on the classification of digital assets under UK capital markets law.</p>
                     <button className="flex items-center gap-4 text-[#A07A41] font-bold text-xs uppercase tracking-widest group/btn">
                        View Full Breakdown <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </div>

               <div className="space-y-12">
                  {[
                    { t: "Case Background", d: "A multi-year dispute involving the categorization of cryptocurrency tokens as 'specified investments'.", i: Scale },
                    { t: "Practical Impact", d: "Businesses must now register digital asset offerings with the FCA under revised guidance.", i: ShieldCheck },
                    { t: "Related Services", d: "Regulatory Compliance Research, Digital Asset Documentation Support.", i: Layers }
                  ].map((item, i) => {
                    const Icon = item.i;
                    return (
                      <div key={i} className="flex gap-6 group">
                        <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A07A41] group-hover:bg-[#A07A41] group-hover:text-black transition-all duration-500">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-white text-lg font-serif font-bold mb-2 italic uppercase tracking-tighter">{item.t}</h4>
                          <p className="text-gray-400 text-sm font-light leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    );
                  })}
               </div>
            </div>
          </div>
        </section>

        {/* 4. JUDGEMENT GRID SECTION */}
        <section 
          className="relative py-24 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex items-center justify-between mb-20">
                <div className="animate-fade-in-left">
                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tighter italic">Library of Decisions.</h2>
                </div>
                <div className="animate-fade-in-right">
                   <span className="text-gray-500 text-xs font-light">Filter: <span className="text-[#A07A41] font-bold uppercase tracking-widest">{activeCategory}</span></span>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredJudgements.map((j, i) => (
                  <div 
                    key={j.id}
                    className="group bg-[#2A454E] border border-white/5 rounded-[2.5rem] p-10 hover:bg-[#A07A41] transition-all duration-700 shadow-biggest flex flex-col h-full animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >

                    <div className="flex items-center justify-between mb-8">
                       <span className="px-5 py-2 bg-black/80 text-[#A07A41] text-[8px] font-black uppercase tracking-widest rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                          {j.category}
                       </span>
                       <span className="text-gray-500 text-[10px] font-bold group-hover:text-black transition-colors">{j.date}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 leading-tight group-hover:text-black transition-colors italic tracking-tighter">
                       {j.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-8 group-hover:text-black/60 transition-colors">
                       <MapPin size={12} className="text-[#A07A41] group-hover:text-black" /> {j.court}
                    </div>

                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-10 group-hover:text-black transition-colors">
                       {j.summary}
                    </p>

                    <div className="mt-auto pt-8 border-t border-white/5 group-hover:border-black/10 flex items-center justify-between">
                       <button className="flex items-center gap-3 text-[#A07A41] font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-black transition-colors">
                          Read Analysis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. JUDGEMENT DETAIL STRUCTURE (CASE BREAKDOWN) */}
        <section 
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="p-16 md:p-32 bg-[#1B2D33] border border-[#A07A41]/30 rounded-[4rem] relative overflow-hidden shadow-biggest animate-fade-in-up">
                <div className="absolute -bottom-20 -right-20 opacity-[0.03] text-[#A07A41] pointer-events-none group-hover:scale-110 transition-transform"><Landmark size={400} /></div>

                
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-10">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#A07A41]"></div>
                      <span className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.5em]">Detailed Analysis Structure</span>
                   </div>
                   
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-16 leading-tight italic uppercase tracking-tighter">
                     Legal Analysis <br />
                     <span className="italic font-light text-[#A07A41]">Framework & Case Overview.</span>
                   </h2>

                   <div className="grid md:grid-cols-2 gap-16">
                      <div className="space-y-12">
                         <div className="group">
                            <span className="text-[#A07A41] uppercase tracking-widest text-[11px] font-black border-b border-[#A07A41]/20 pb-4 mb-6 block">Case Overview</span>
                            <p className="text-gray-300 text-sm font-light leading-relaxed italic">
                               A comprehensive study of the initial dispute, the parties involved, and the specific legal environment that prompted the court's intervention.
                            </p>
                         </div>
                         <div className="group">
                            <span className="text-[#A07A41] uppercase tracking-widest text-[11px] font-black border-b border-[#A07A41]/20 pb-4 mb-6 block">Key Legal Issue</span>
                            <p className="text-gray-300 text-sm font-light leading-relaxed italic">
                               Identification of the core statutory interpretation or common law principle that the court was asked to clarify during the proceedings.
                            </p>
                         </div>
                      </div>
                      <div className="space-y-12">
                         <div className="group">
                            <span className="text-[#A07A41] uppercase tracking-widest text-[11px] font-black border-b border-[#A07A41]/20 pb-4 mb-6 block">Practical Impact</span>
                            <ul className="space-y-4">
                               {[
                                 "Immediate changes to compliance standards",
                                 "Shifts in documentary requirements",
                                 "Long-term litigation risk assessment"
                               ].map((text, i) => (
                                 <li key={i} className="flex items-center gap-4 text-white text-xs font-bold italic">
                                    <CheckCircle size={16} className="text-[#A07A41]" /> {text}
                                 </li>
                               ))}
                            </ul>
                         </div>
                         <div className="group pt-8">
                            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6 block">Related Research Support</span>
                            <div className="flex flex-wrap gap-4">
                               <a href="/services/uk-legal-research/legal-precedent" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold hover:bg-[#A07A41] hover:text-black transition-all">Precedent Analysis</a>
                               <a href="/services/litigation-support/case-summaries" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold hover:bg-[#A07A41] hover:text-black transition-all">Litigation Support</a>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION SECTION */}
        <section 
          className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="p-16 md:p-32 bg-[#2A454E] border border-[#A07A41]/20 rounded-[5rem] relative overflow-hidden shadow-biggest text-center group animate-fade-in-up">
                <div className="absolute top-0 left-0 p-20 opacity-[0.03] text-white pointer-events-none transition-transform"><Scale size={400} /></div>

                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase">
                  Data-Driven <br />
                  <span className="italic font-light text-[#A07A41]">Legal Support.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                  Leverage our expert case law research and documentation support to strengthen your legal strategy with the latest precedents.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Mail size={24} className="text-[#A07A41]" />
                      <span className="text-white font-serif font-bold text-xl md:text-3xl italic group-hover:text-[#A07A41] transition-colors">research@hsco.co</span>
                   </div>
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Phone size={24} className="text-[#A07A41]" />
                      <span className="text-white font-serif font-bold text-xl md:text-3xl italic group-hover:text-[#A07A41] transition-colors">+44 20 745 9210</span>
                   </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.25em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden"
                  >
                    <span className="relative z-10">Request Case Research</span>
                    <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.25em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41]/10 cursor-pointer shadow-biggest overflow-hidden"
                  >
                    <span className="relative z-10">Contact Advisor</span>
                  </div>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* SEO FOOTER */}
      <footer className="bg-[#2A454E] py-20 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-10 text-[11px] text-gray-500 uppercase tracking-widest font-black">
              <span>UK case law updates</span>
              <span>recent court judgements UK</span>
              <span>High Court decision summary</span>
              <span>Employment Tribunal rulings</span>
              <span>UK intellectual property case law</span>
              <span>Supreme Court judgement analysis</span>
           </div>
           <span className="text-[9px] text-gray-700 italic tracking-widest uppercase">Authoritative legal research and documentation support for UK professionals</span>
        </div>
      </footer>
    </div>
  );
};

export default RecentJudgementsPage;
