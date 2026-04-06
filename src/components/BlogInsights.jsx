import React, { useEffect, useRef, useState } from 'react';
import { Calendar, User, ArrowRight, MessageSquare } from 'lucide-react';

const posts = [
  {
    title: "The Evolving Landscape of Corporate Compliance in 2024",
    excerpt: "New regulatory frameworks are demanding higher transparency from executive boards across the UK and EU. Here is what every CEO must know.",
    image: "/hero.jpg",
    author: "Jonathan Reynolds",
    date: "Mar 15, 2024",
    comments: 12,
    delay: 'animation-delay-200'
  },
  {
    title: "Major Landmark Ruling in UK Property Dispute Jurisprudence",
    excerpt: "The recent High Court decision has fundamental implications for landowners and commercial leaseholders. Our analysis of the verdict.",
    image: "/sec2.jpg",
    author: "Michael Sterling",
    date: "Mar 12, 2024",
    comments: 0.5,
    delay: 'animation-delay-400'
  },
  {
    title: "Navigating High-Net-Worth Asset Division in Modern Divorce",
    excerpt: "Protecting generational wealth requires more than just legal expertise; it requires strategic financial intelligence and extreme discretion.",
    image: "/p2.jpg",
    author: "Sarah Kensington",
    date: "Mar 08, 2024",
    comments: 8,
    delay: 'animation-delay-600'
  }
];

const BlogInsights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="relative bg-[#2A454E] py-24 lg:py-32 overflow-hidden border-t border-white/10">
      
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-[#A07A41]/5 rounded-[100%] blur-[150px] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className={`flex items-center gap-3 mb-6 transition-all duration-[1500ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="h-[1px] w-12 bg-[#A07A41]"></div>
              <span className="text-[#A07A41] uppercase tracking-[0.3em] text-xs font-bold">Expert Perspectives</span>
            </div>
            
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Legal <span className="italic font-light text-[#A07A41]">Insights</span> <br className="hidden sm:block" />
              & Global Updates.
            </h2>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in-left animation-delay-300' : 'opacity-0'}`}>
             <button className="group relative px-8 py-4 border border-white/10 bg-[#1B2D33] text-white hover:bg-[#A07A41] hover:text-[#1B2D33] transition-all duration-300 rounded shadow-[0_0_20px_rgba(0,0,0,0.1)]">
               <span className="uppercase tracking-widest text-xs font-bold font-sans">Explore All Insights</span>
             </button>
          </div>
        </div>

        {/* Blog Grid with Zooming Effect Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {posts.map((post, idx) => (
            <article 
              key={idx} 
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? `animate-fade-in-up ${post.delay}` : 'opacity-0'}`}
            >
              {/* Image with zoom and overlay */}
              <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-[2px] border border-white/10 group-hover:border-[#A07A41]/40 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                />
                
                {/* Floating Date Badge */}
                <div className="absolute top-6 left-6 z-20 bg-[#1B2D33] border border-white/10 px-3 py-1.5 flex items-center gap-2">
                  <Calendar className="h-3 w-3 text-[#A07A41]" />
                  <span className="text-[10px] text-white uppercase tracking-widest font-bold">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-4 text-[#A07A41]/60 text-[10px] uppercase tracking-[0.2em] font-bold">
                <div className="flex items-center gap-2">
                  <User className="h-3 w-3" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-3 w-3" />
                  <span>{post.comments} Comments</span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <h3 className="text-2xl font-serif text-white mb-4 leading-snug group-hover:text-[#A07A41] transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-gray-300 font-sans font-light text-[15px] leading-relaxed mb-8 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <div className="flex items-center gap-3 text-[#A07A41] font-sans font-bold uppercase tracking-widest text-[11px] group-hover:gap-5 transition-all duration-300">
                <span>Continue Reading</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogInsights;
