import React from 'react';
import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#2A454E] pt-24 pb-12 overflow-hidden border-t border-white/10">

      {/* Decorative Blur BG for Billionaire Aesthetic */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#A07A41]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">

          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="flex-shrink-0 flex items-center cursor-pointer group -mt-28 -ml-6">
              <div className="relative h-48 w-96 sm:h-56 sm:w-[500px] transition-transform duration-300 group-hover:scale-105">
                <img src="/logo1.jpg" alt="H&S Co. Logo" className="h-full w-full object-contain object-left" />
              </div>
            </div>

            <p className="text-white font-sans font-light leading-relaxed text-sm lg:text-base opacity-80 max-w-xs -mt-16">
              Elite paralegal support for UK law firms. We redefine legal efficiency with strategic precision and an unwavering commitment to excellence.
            </p>

            {/* Real Social Links using CDN logos to avoid library crashes */}
            <div className="flex items-center gap-4">
              {[
                { name: 'Facebook', url: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', href: 'https://facebook.com' },
                { name: 'Twitter', url: 'https://cdn-icons-png.flaticon.com/512/3256/3256013.png', href: 'https://twitter.com' },
                { name: 'LinkedIn', url: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png', href: 'https://www.linkedin.com/posts/h%26sco_legalresearch-paralegalservices-lawfirms-activity-7444800107524427776-Jlqo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGMxZiwBIXmBJMc97UEQEOBXat03PDkBqZA' },
                { name: 'Instagram', url: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', href: 'https://instagram.com' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center bg-transparent hover:bg-[#A07A41] hover:border-[#A07A41] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  <img
                    src={social.url}
                    alt={social.name}
                    className="w-4 h-4 invert opacity-70 group-hover:opacity-100 group-hover:invert-0 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8 lg:pl-10">
            <h3 className="text-white font-serif text-xl font-bold tracking-wide border-l-4 border-[#A07A41] pl-4">Essential Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'About H&S Co.', path: '/about' },
                { name: 'Case Insights', path: '/#insights' },
                { name: 'Book Consultation', path: '/#consultation' }
              ].map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') ? (
                    <a href={link.path} className="group flex items-center text-white hover:text-[#A07A41] transition-colors text-sm font-sans tracking-wide">
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  ) : (
                    <Link to={link.path} className="group flex items-center text-white hover:text-[#A07A41] transition-colors text-sm font-sans tracking-wide">
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas Focus */}
          <div className="space-y-8">
            <h3 className="text-white font-serif text-xl font-bold tracking-wide border-l-4 border-[#A07A41] pl-4">Top Specializations</h3>
            <ul className="space-y-4">
              {[
                { name: 'Legal Research', path: '/services/legal-research' },
                { name: 'Document Drafting', path: '/services/document-drafting' },
                { name: 'Case Preparation', path: '/services/case-preparation' },
                { name: 'Contract Review', path: '/services/contract-review' },
                { name: 'Fast Turnaround', path: '/services/fast-turnaround' },
                { name: 'Compliance & Audit', path: '/services/compliance-audit' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center text-white hover:text-[#A07A41] transition-colors text-sm font-sans tracking-wide">
                    <div className="h-[1px] w-0 bg-[#A07A41] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3"></div>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Text only to avoid crashes) */}
          <div className="space-y-8">
            <h3 className="text-white font-serif text-xl font-bold tracking-wide border-l-4 border-[#A07A41] pl-4">Inquiries</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div>
                  <p className="text-[#A07A41] font-bold text-[11px] uppercase tracking-widest mb-1">HQ Address</p>
                  <p className="text-white text-sm leading-relaxed font-light">
                    Mayfair Executive Suites, London W1J
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group border-t border-white/10 pt-4">
                <div>
                  <p className="text-[#A07A41] font-bold text-[11px] uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="text-white text-sm font-light">+44 (0) 20 7946 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group border-t border-white/10 pt-4">
                <div>
                  <p className="text-[#A07A41] font-bold text-[11px] uppercase tracking-widest mb-1">Priority Email</p>
                  <p className="text-white text-sm font-light">support@hsco.uk</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Global Line Break */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#A07A41]/30 to-transparent mb-12"></div>

        {/* Copyright & Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white font-sans text-xs tracking-[0.1em] opacity-60">
            <span>© 2026 H&S Co. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-white hover:text-[#A07A41] transition-colors text-[10px] uppercase font-bold tracking-[0.15em] opacity-60 hover:opacity-100">Privacy Policy</a>
            <a href="#" className="text-white hover:text-[#A07A41] transition-colors text-[10px] uppercase font-bold tracking-[0.15em] opacity-60 hover:opacity-100">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
