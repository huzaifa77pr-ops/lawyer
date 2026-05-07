import React, { useEffect, useState, useRef } from 'react';
import { 
  Search, Filter, ArrowRight, Clock, User, Tag, 
  ChevronRight, Mail, Phone, Calendar, Bookmark,
  Share2, MessageSquare, BookOpen, ExternalLink,
  Zap, Shield, Scale, Gavel, FileText
} from 'lucide-react';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(obs => obs && obs.disconnect());
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const categories = [
    'All', 'Intellectual Property', 'Property Law', 
    'Employment Law', 'Compliance', 'Legal Documentation', 'Case Support'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding UK Intellectual Property Rights in 2024",
      excerpt: "A comprehensive guide to protecting your brand and inventions under current UKIPO regulations and trademark law.",
      category: "Intellectual Property",
      date: "Oct 12, 2024",
      author: "Legal Research Team",
      image: "/sha1.jpg",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Common Pitfalls in Residential Lease Agreements",
      excerpt: "Why structured documentation is critical for landlords and tenants to avoid long-term legal disputes and financial loss.",
      category: "Property Law",
      date: "Oct 10, 2024",
      author: "Property Specialists",
      image: "/coo.jpg",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "The Impact of New Employment Laws on Small Businesses",
      excerpt: "How recent statutory changes affect employment contracts and internal policy documentation for UK SMEs.",
      category: "Employment Law",
      date: "Oct 08, 2024",
      author: "HR Compliance Lead",
      image: "/coo1.jpg",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Data Breach Protocols: Documentation is Your Best Defense",
      excerpt: "Recording incident timelines and affected systems accurately can significantly reduce regulatory risk during a breach.",
      category: "Compliance",
      date: "Oct 05, 2024",
      author: "Security Protocol Dept",
      image: "/5hero.jpg",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Drafting Effective NDAs for Freelancers and Contractors",
      excerpt: "Essential clauses every confidentiality agreement should contain to ensure maximum protection for proprietary data.",
      category: "Legal Documentation",
      date: "Oct 03, 2024",
      author: "Drafting Team",
      image: "/nda.jpg",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Case Preparation: The Importance of Evidence Chronology",
      excerpt: "How organizing case files in strict chronological order improves the efficiency of legal teams and case outcomes.",
      category: "Case Support",
      date: "Oct 01, 2024",
      author: "Paralegal Support",
      image: "/case.jpg",
      readTime: "9 min read"
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#2A454E] flex flex-col overflow-x-hidden text-white font-sans selection:bg-[#A07A41] selection:text-black">
      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section 
          ref={addToRefs}
          className="relative min-h-[80vh] flex items-center pt-48 pb-24 overflow-hidden bg-[#2A454E]"
        >

          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2A454E]/90 via-[#2A454E]/70 to-[#2A454E] z-10" />
            <img
              src="/case4.jpg"
              alt="Legal Insights"
              className="w-full h-full object-cover object-center opacity-30"
            />
          </div>

          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto w-full text-center">
            <div className={`${isVisible[0] ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-[#A07A41]/10 border border-[#A07A41]/20 rounded-full">
                <BookOpen className="h-4 w-4 text-[#A07A41]" />
                <span className="text-[#A07A41] uppercase tracking-[0.4em] text-[10px] font-bold">
                  Knowledge Hub
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tighter">
                Legal Insights & <br />
                <span className="italic font-light text-[#A07A41]">Strategic Updates</span>
              </h1>

              
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Professional perspectives on UK law, documentation protocols, and compliance strategies designed for individuals and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* 2. CATEGORY FILTER SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-12 bg-[#1B2D33] border-y border-white/5 sticky top-[72px] z-[40] backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${isVisible[1] ? 'animate-fade-in' : 'opacity-0'}`}>
               <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-8 py-3 rounded text-[11px] uppercase tracking-[0.2em] font-black transition-all duration-500 border ${
                        activeCategory === cat 
                        ? 'bg-[#A07A41] border-[#A07A41] text-black shadow-biggest' 
                        : 'bg-transparent border-white/10 text-gray-500 hover:border-[#A07A41]/50 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
               </div>

               <div className="relative group w-full md:w-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A07A41]" />
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full md:w-64 pl-12 pr-6 py-2.5 bg-[#2A454E] border border-white/10 rounded-full text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#A07A41]/50 transition-all"
                  />
               </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED BLOG SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-32 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-16">
               <div className="h-[2px] w-12 bg-[#A07A41]"></div>
               <span className="text-[#A07A41] uppercase tracking-[0.4em] text-xs font-bold">Featured Insight</span>
            </div>

            <div className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible[2] ? 'animate-fade-in-up' : 'opacity-0'}`}>
               <div className="relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-biggest bg-[#1B2D33]">
                  <img 
                    src="/heroo.jpg" 
                    alt="Featured Article" 
                    className="w-full h-[500px] object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2D33] via-transparent to-transparent"></div>
                  <div className="absolute top-10 left-10">
                     <span className="px-6 py-2 bg-[#A07A41] text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">Editor's Choice</span>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="flex items-center gap-6 text-gray-400 text-xs uppercase tracking-widest font-semibold">
                     <span className="flex items-center gap-2"><Calendar size={14} className="text-[#A07A41]" /> Oct 15, 2024</span>
                     <span className="flex items-center gap-2"><Clock size={14} className="text-[#A07A41]" /> 12 min read</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight tracking-tight">
                    Strategic Documentation <br />
                    <span className="italic font-light text-[#A07A41]">in High-Stake Litigations.</span>
                  </h2>
                  <p className="text-gray-300 text-lg font-light leading-relaxed max-w-xl">
                    Discover why the organization of evidence and chronological record-keeping often determines the success of commercial litigation cases in UK courts.
                  </p>
                  <div className="flex items-center gap-10 pt-6 border-t border-white/10">
                     <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#1B2D33] border border-[#A07A41]/30 flex items-center justify-center text-[#A07A41]">
                           <User size={20} />
                        </div>
                        <div>
                           <span className="block text-white text-xs font-bold font-serif italic">Jonathan Wright</span>
                           <span className="block text-gray-500 text-[10px] uppercase tracking-widest">Senior Legal Advisor</span>
                        </div>
                     </div>
                     <button className="group flex items-center gap-4 text-[#A07A41] font-bold text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">
                        Read Analysis <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 4. BLOG GRID SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 bg-[#1B2D33] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex items-end justify-between mb-20">
                <div className={`${isVisible[3] ? 'animate-fade-in-left' : 'opacity-0'}`}>
                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 tracking-tighter italic">Latest Legal Updates.</h2>
                   <p className="text-gray-500 text-sm font-light">Filtered by: <span className="text-[#A07A41] font-bold italic">{activeCategory}</span></p>
                </div>
                <div className={`hidden md:flex items-center gap-4 ${isVisible[3] ? 'animate-fade-in-right' : 'opacity-0'}`}>
                   <button className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#A07A41] hover:text-black transition-all">
                      <ChevronRight size={20} className="rotate-180" />
                   </button>
                   <button className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#A07A41] hover:text-black transition-all">
                      <ChevronRight size={20} />
                   </button>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.map((post, i) => (
                  <div 
                    key={post.id}
                    className={`group bg-[#2A454E] border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-[#A07A41] transition-all duration-700 shadow-xl ${isVisible[3] ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                       <div className="absolute top-6 left-6">
                          <span className="px-5 py-2 bg-black/80 backdrop-blur-md text-[#A07A41] text-[9px] font-black uppercase tracking-widest rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                             {post.category}
                          </span>
                       </div>
                    </div>
                    <div className="p-10 flex flex-col h-full">
                       <div className="flex items-center gap-4 mb-6 text-gray-500 group-hover:text-black/60 transition-colors text-[10px] font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
                          <span className="flex items-center gap-2"><Clock size={12} /> {post.readTime}</span>
                       </div>
                       <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-6 leading-tight group-hover:text-black transition-colors min-h-[3.5rem]">
                          {post.title}
                       </h3>
                       <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 group-hover:text-black/80 transition-colors line-clamp-3 italic">
                          {post.excerpt}
                       </p>
                       <div className="mt-auto pt-8 border-t border-white/5 group-hover:border-black/10 flex items-center justify-between">
                          <button className="flex items-center gap-3 text-[#A07A41] font-black text-[10px] uppercase tracking-[0.3em] group-hover:text-black transition-colors">
                             Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                          <Bookmark size={16} className="text-gray-600 group-hover:text-black transition-colors" />
                       </div>
                    </div>
                  </div>
                ))}
             </div>

             <div className="mt-20 flex justify-center">
                <button className="px-12 py-5 bg-transparent border border-[#A07A41]/50 text-white font-bold tracking-[0.3em] uppercase text-xs rounded transition-all duration-300 hover:bg-[#A07A41] hover:text-black shadow-xl">
                   View All Insights
                </button>
             </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION SECTION */}
        <section 
          ref={addToRefs}
          className="relative py-24 lg:py-60 bg-[#2A454E] overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className={`p-16 md:p-32 bg-[#1B2D33] border border-white/10 rounded-[5rem] relative overflow-hidden shadow-biggest text-center group ${isVisible[4] ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="absolute -top-20 -left-20 opacity-[0.03] group-hover:text-[#A07A41] transition-colors"><Scale size={400} /></div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tighter leading-none italic uppercase">
                  Elevate Your <br />
                  <span className="italic font-light text-[#A07A41]">Legal Strategy.</span>
                </h2>

                
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
                  Beyond general insights, we provide specialized documentation and research support tailored to your unique case requirements.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Mail size={24} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-3xl italic group-hover:text-[#A07A41] transition-colors">insights@hsco.co</span>
                   </div>
                   <div className="flex items-center gap-4 group cursor-pointer">
                      <Phone size={24} className="text-[#A07A41] group-hover:scale-110 transition-transform" />
                      <span className="text-white font-serif font-bold text-xl md:text-3xl italic group-hover:text-[#A07A41] transition-colors">+44 20 745 9210</span>
                   </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <div 
                    role="button" 
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#A07A41] text-black font-bold tracking-[0.25em] uppercase text-xs md:text-sm rounded transition-all duration-300 hover:bg-[#B58B4B] cursor-pointer shadow-biggest overflow-hidden"
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
      <footer className="bg-[#1B2D33] py-20 border-t border-white/5 opacity-40">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-10 text-[11px] text-gray-500 uppercase tracking-widest font-black">
              <span>UK legal blog</span>
              <span>paralegal insights UK</span>
              <span>law documentation guide UK</span>
              <span>employment law updates UK</span>
              <span>property law advice UK</span>
              <span>compliance reports UK</span>
           </div>
           <div className="text-center">
              <span className="text-[9px] text-gray-700 italic tracking-widest uppercase">Expert Perspectives for the modern UK legal landscape</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
