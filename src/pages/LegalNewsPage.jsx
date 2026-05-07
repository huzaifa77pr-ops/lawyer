import React, { useEffect, useState, useRef } from 'react';
import { 
  Newspaper, Megaphone, TrendingUp, Globe, ShieldAlert,
  ArrowRight, CheckCircle, ShieldCheck, Search, Layout, 
  Layers, Clock, ChevronDown, Mail, Phone, Users, 
  Briefcase, Wallet, Landmark, PieChart, 
  BookOpen, Scale, AlertCircle, FileSpreadsheet, UserCheck,
  Calendar, Tag, ExternalLink, Zap, Gavel, Award
} from 'lucide-react';

const LegalNewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('General Legal');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'General Legal', 'Intellectual Property', 'Property Law', 
    'Employment Law', 'Compliance & Data Protection', 'Financial / Tax'
  ];

  const newsArticles = [
    {
      id: 1,
      title: "New UK Intellectual Property Bill Introduced",
      summary: "A new legislative proposal aims to modernize trademark enforcement in the digital age.",
      impact: "Businesses will face stricter penalties for digital infringement but gain better protection for online assets.",
      action: "Review your current trademark portfolio and ensure digital assets are properly registered.",
      category: "Intellectual Property",
      date: "Oct 28, 2024",
      image: "/sha1.jpg"
    },
    {
      id: 2,
      title: "Significant Changes to Residential Leasehold Regulations",
      summary: "Parliament passes new laws affecting ground rent and lease extensions for millions of homeowners.",
      impact: "Landlords must adjust their lease structures, while tenants gain more rights during extension processes.",
      action: "Consult our property documentation team to update your existing lease agreements.",
      category: "Property Law",
      date: "Oct 25, 2024",
      image: "/coo.jpg"
    },
    {
      id: 3,
      title: "Employment Tribunal Ruling on Remote Work Rights",
      summary: "A landmark case sets a new precedent for flexible working requests in the post-pandemic landscape.",
      impact: "Employers must now provide more robust justification when refusing remote work requests.",
      action: "Update your internal HR policies and employee handbooks to reflect the new legal landscape.",
      category: "Employment Law",
      date: "Oct 22, 2024",
      image: "/coo1.jpg"
    },
    {
      id: 4,
      title: "GDPR 2.0: UK Data Protection Reforms Update",
      summary: "The ICO issues new guidance on cross-border data transfers and AI-driven data processing.",
      impact: "Increased transparency requirements for AI systems and new documentation standards for data flows.",
      action: "Conduct a data protection impact assessment for any AI-integrated services.",
      category: "Compliance & Data Protection",
      date: "Oct 18, 2024",
      image: "/5hero.jpg"
    },
    {
      id: 5,
      title: "HMRC Announces Stricter R&D Tax Credit Audits",
      summary: "New measures aimed at reducing fraudulent claims in the Research and Development sector.",
      impact: "Companies will need more detailed technical and financial documentation to justify R&D claims.",
      action: "Ensure your R&D documentation is organized according to the new HMRC structural guidelines.",
      category: "Financial / Tax",
      date: "Oct 15, 2024",
      image: "/case4.jpg"
    },
    {
      id: 6,
      title: "Supreme Court Clarifies Commercial Contract Interpretation",
      summary: "A new ruling provides guidance on how ambiguous clauses in service agreements should be interpreted.",
      impact: "Commercial contracts must be drafted with higher precision to avoid court-imposed interpretations.",
      action: "Review all high-value service agreements for potential ambiguities in key clauses.",
      category: "General Legal",
      date: "Oct 12, 2024",
      image: "/case.jpg"
    }
  ];

  const filteredNews = newsArticles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          className="relative min-h-[70vh] flex items-center pt-48 pb-24 overflow-hidden bg-[#2A454E]"
        >


          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A454E] via-[#2A454E]/80 to-transparent z-10" />
            <img
              src="/heroo.jpg"
              alt="Legal News"
              className="w-full h-full object-cover object-center opacity-30"
            />
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full">
            <div className="max-w-4xl animate-fade-in-left">

              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-white/5 border border-white/10 rounded-full">
                <Newspaper className="h-4 w-4 text-[#A07A41]" />
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">
                  Legal Intelligence
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                UK Legal News & <br />
                <span className="italic font-light text-[#A07A41]">Regulatory Updates</span>
              </h1>
              
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl">
                Stay informed with professional analysis of the latest legal developments in the United Kingdom. We bridge the gap between law and action.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 border-t border-white/10 pt-12">
                 {[
                   { t: "Daily Updates", Icon: Clock },
                   { t: "Expert Analysis", Icon: Scale },
                   { t: "Strategic Impact", Icon: Zap }
                 ].map((signal, i) => {
                   const Icon = signal.Icon;
                   return (
                     <div key={i} className="flex items-center gap-4 group">
                       <Icon className="h-5 w-5 text-[#A07A41]" strokeWidth={1.5} />
                       <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold leading-tight">{signal.t}</span>
                     </div>
                   );
                 })}
              </div>
            </div>
          </div>
        </section>

        {/* 2. NEWS CATEGORY FILTERS */}
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
                      className={`px-8 py-3 rounded text-[11px] uppercase tracking-[0.15em] font-black transition-all duration-500 border ${
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
                    placeholder="Search updates..." 
                    className="w-full lg:w-64 pl-12 pr-6 py-2.5 bg-[#2A454E] border border-white/10 rounded-full text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#A07A41]/50 transition-all"
                  />
               </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED NEWS SECTION */}
        <section 
          className="relative py-24 lg:py-40 bg-[#2A454E] overflow-hidden"
        >


          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
               <div className="animate-fade-in-left">
                  <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Major Alert</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
                    Featured <span className="italic font-light text-[#A07A41]">Developments.</span>
                  </h2>
               </div>
               <div className="hidden md:flex gap-4 animate-fade-in-right">
                  <div className="flex items-center gap-2 px-6 py-3 bg-[#1B2D33] border border-white/5 rounded-full text-[10px] uppercase tracking-widest font-bold text-gray-400">
                     <Globe size={14} className="text-[#A07A41]" /> Worldwide Impact
                  </div>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {[
                 { t: "HMRC Audits Surge", c: "Financial", d: "Record number of R&D investigations launched this month.", i: "/case4.jpg" },
                 { t: "New IP Standards", c: "Intellectual Property", d: "UKIPO updates response protocols for trademark objections.", i: "/sha1.jpg" }
               ].map((item, i) => (
                 <div 
                   key={i} 
                   className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-biggest animate-fade-in-up"
                   style={{ animationDelay: `${i * 200}ms` }}
                 >

                    <img src={item.i} alt={item.t} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-[#1B2D33]/40 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12">
                       <span className="px-5 py-2 bg-[#A07A41] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-6 inline-block">{item.c}</span>
                       <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 group-hover:text-[#A07A41] transition-colors">{item.t}</h3>
                       <p className="text-gray-300 text-sm font-light leading-relaxed max-w-md italic mb-8">{item.d}</p>
                       <button className="flex items-center gap-4 text-white font-bold text-xs uppercase tracking-widest group/btn">
                          Read Case Analysis <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform text-[#A07A41]" />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 4. NEWS GRID SECTION */}
        <section 
          className="relative py-24 lg:py-32 bg-[#1B2D33] overflow-hidden border-y border-white/5"
        >
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex items-center justify-between mb-20">
                <div className="animate-fade-in-left">
                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tighter italic">Recent Updates.</h2>
                </div>
                <div className="animate-fade-in-right">
                   <span className="text-gray-500 text-xs font-light">Category: <span className="text-[#A07A41] font-bold">{activeCategory}</span></span>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredNews.length > 0 ? filteredNews.map((article, i) => (
                  <div 
                    key={i}
                    className="group bg-[#2A454E] border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-[#A07A41] transition-all duration-700 shadow-biggest flex flex-col h-full animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >

                    <div className="relative h-60 overflow-hidden">
                       <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                       <div className="absolute top-6 left-6">
                          <span className="px-5 py-2 bg-black/80 backdrop-blur-md text-[#A07A41] text-[8px] font-black uppercase tracking-widest rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                             {article.category}
                          </span>
                       </div>
                    </div>
                    <div className="p-10 flex flex-col flex-grow">
                       <div className="flex items-center gap-4 mb-6 text-gray-500 group-hover:text-black/60 transition-colors text-[10px] font-bold uppercase tracking-widest">
                          <Calendar size={12} className="text-[#A07A41]" /> {article.date}
                       </div>
                       <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-6 leading-tight group-hover:text-black transition-colors min-h-[3.5rem]">
                          {article.title}
                       </h3>
                       <p className="text-gray-400 text-sm font-light leading-relaxed mb-10 group-hover:text-black/80 transition-colors italic line-clamp-2">
                          {article.summary}
                       </p>
                       <div className="mt-auto pt-8 border-t border-white/5 group-hover:border-black/10 flex items-center justify-between">
                          <button className="flex items-center gap-3 text-[#A07A41] font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-black transition-colors">
                             View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                       </div>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-full py-32 text-center text-gray-500 italic">
                     No articles found in this category. More updates coming soon.
                  </div>
                )}
             </div>
          </div>
        </section>

        {/* 5. NEWS DETAIL STRUCTURE (SPOTLIGHT) */}
        <section 
          className="relative py-24 lg:py-48 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="p-16 md:p-32 bg-[#1B2D33] border border-[#A07A41]/20 rounded-[4rem] relative overflow-hidden shadow-biggest animate-fade-in-up">
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-[#A07A41] pointer-events-none group-hover:scale-125 transition-transform"><Megaphone size={300} /></div>

                
                <div className="relative z-10">
                   <div className="inline-flex items-center gap-3 mb-10 px-6 py-2 bg-[#A07A41]/10 rounded-full border border-[#A07A41]/20">
                      <Zap className="h-4 w-4 text-[#A07A41] animate-pulse" />
                      <span className="text-[#A07A41] text-[10px] font-black uppercase tracking-[0.3em]">Critical Insight</span>
                   </div>
                   
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-16 leading-tight italic uppercase tracking-tighter">
                     Understanding the New <br />
                     <span className="italic font-light text-[#A07A41]">UK Statutory Wage Increase.</span>
                   </h2>

                   <div className="grid md:grid-cols-3 gap-12 text-left">
                      <div className="space-y-6">
                         <span className="text-[#A07A41] uppercase tracking-widest text-[11px] font-black border-b border-[#A07A41]/20 pb-4 block">Summary</span>
                         <p className="text-gray-300 text-sm font-light leading-relaxed">
                            Effective April 2024, the National Living Wage will increase by 9.8%, affecting all UK businesses with hourly-paid staff.
                         </p>
                      </div>
                      <div className="space-y-6">
                         <span className="text-[#A07A41] uppercase tracking-widest text-[11px] font-black border-b border-[#A07A41]/20 pb-4 block">Impact</span>
                         <p className="text-gray-300 text-sm font-light leading-relaxed">
                            Employers must recalculate payroll, update employment contracts, and adjust budget allocations for the next fiscal year.
                         </p>
                      </div>
                      <div className="space-y-6">
                         <span className="text-[#A07A41] uppercase tracking-widest text-[11px] font-black border-b border-[#A07A41]/20 pb-4 block">Action Steps</span>
                         <ul className="space-y-4">
                            {["Audit payroll systems", "Update contract templates", "Consult our HR team"].map((step, i) => (
                              <li key={i} className="flex items-center gap-3 text-white text-xs font-bold italic">
                                 <CheckCircle size={14} className="text-[#A07A41]" /> {step}
                              </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap gap-8 justify-center">
                      <a href="/services/other/specialized/employment-law" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold group">
                         Related Service: Employment Law <ExternalLink size={14} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                      </a>
                      <a href="/services/contract-drafting/employment-contracts" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold group">
                         Related Service: Contract Drafting <ExternalLink size={14} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                      </a>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION SECTION */}
        <section 
          className="relative py-24 lg:py-60 bg-[#1B2D33] overflow-hidden"
          id="contact"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="p-16 md:p-28 bg-[#2A454E] border border-white/10 rounded-[5rem] relative overflow-hidden shadow-biggest text-center group animate-fade-in-up">
                <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-white pointer-events-none group-hover:text-[#A07A41] transition-colors"><Gavel size={200} /></div>

                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase">
                  Navigate Legal <br />
                  <span className="italic font-light text-[#A07A41]">Changes with Confidence.</span>
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                  Don't let regulatory updates catch you unprepared. Our team provides the documentation and research support you need to stay compliant.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Mail size={24} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-3xl italic group-hover:text-[#A07A41] transition-colors">news@hsco.co</span>
                   </div>
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Phone size={24} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-3xl italic group-hover:text-[#A07A41] transition-colors">+44 20 745 9210</span>
                   </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#1B2D33] border border-white/10 text-white font-bold tracking-[0.25em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41] cursor-pointer shadow-biggest overflow-hidden"
                  >
                    <span className="relative z-10">Request Consultation</span>
                    <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.25em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#A07A41]/10 cursor-pointer shadow-biggest overflow-hidden"
                  >
                    <span className="relative z-10">Explore Services</span>
                  </div>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* SEO FOOTER */}
      <footer className="bg-[#2A454E] py-20 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-10 text-[11px] text-gray-500 uppercase tracking-widest font-black text-center">
              <span>UK legal news updates</span>
              <span>paralegal regulatory news UK</span>
              <span>trademark law updates UK</span>
              <span>property law news London</span>
              <span>GDPR compliance news UK</span>
              <span>HMRC R&D tax news</span>
           </div>
           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[9px] text-gray-600 italic text-center">
              <span>trademark objection response UK</span>
              <span>UKIPO objection reply</span>
              <span>trademark refusal response UK</span>
              <span>intellectual property dispute UK</span>
              <span>trademark application support UK</span>
              <span>legal response trademark UK</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalNewsPage;
