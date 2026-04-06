import React, { useState, useEffect } from 'react';
import { Menu, X, Scale, ChevronDown, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the complete navigation structure with NESTED dropdown support
const navStructure = [
  {
    name: 'Home',
    href: '/',
    dropdown: []
  },
  {
    name: 'About',
    href: '/about',
    dropdown: []
  },
  {
    name: 'Services',
    dropdown: [
      {
        name: 'UK LEGAL RESEARCH',
        subDropdown: [
          { name: 'Case law research', href: '/services/uk-legal-research/case-law' },
          { name: 'Statutory law research', href: '/services/uk-legal-research/statutory-law' },
          { name: 'Legal precedent analysis', href: '/services/uk-legal-research/legal-precedent' },
          { name: 'Westlaw/LexisNexis-based research', href: '/services/uk-legal-research/database-research' },
          { name: 'Regulatory compliance research', href: '/services/uk-legal-research/regulatory-compliance' },
          { name: 'Legal issue identification', href: '/services/uk-legal-research/legal-issue-identification' },
          { name: 'Case comparison reports', href: '/services/uk-legal-research/case-comparison' },
          { name: 'Industry-specific research', href: '/services/uk-legal-research/industry-specific' },
          { name: 'Annotated legal bibliography', href: '/services/uk-legal-research/annotated-bibliography' },
          { name: 'Expert witness research', href: '/services/uk-legal-research/expert-witness' }
        ]
      },
      {
        name: 'CONTRACT DRAFTING',
        subDropdown: [
          { name: 'NDA (Non-Disclosure Agreements)', href: '/services/contract-drafting/nda' },
          { name: 'Employment contracts', href: '/services/contract-drafting/employment-contracts' },
          { name: 'Lease agreements', href: '/services/contract-drafting/lease-agreement' },
          { name: 'Service agreements', href: '/services/contract-drafting/service-agreement' },
          { name: 'Partnership agreements', href: '/services/contract-drafting/partnership-agreement' },
          { name: 'Shareholder agreements', href: '/services/contract-drafting/shareholder-agreement' },
          { name: 'SaaS agreements', href: '/services/contract-drafting/saas-agreement' },
          { name: 'Freelancer contracts', href: '/services/contract-drafting/freelancer-contract' },
          { name: 'Terms & Conditions', href: '/services/contract-drafting/terms-conditions' },
          { name: 'Privacy Policy', href: '/services/contract-drafting/privacy-policy' },
          { name: 'Cookie Policy', href: '/services/contract-drafting/cookie-policy' },
          { name: 'Website Disclaimers', href: '/services/contract-drafting/website-disclaimers' },
          { name: 'Legal notices & demand letters', href: '/services/contract-drafting/legal-notices' },
          { name: 'Affidavits & Declarations', href: '/services/contract-drafting/affidavits' },
          { name: 'Memorandums of law', href: '/services/contract-drafting/memorandum' },
          { name: 'Settlement Agreements', href: '/services/contract-drafting/settlement-agreements' }
        ]
      },
      {
        name: 'IMMIGRATION SUPPORT',
        subDropdown: [
          { name: 'UK visa application documentation', href: '/services/immigration-support/uk-visa-documentation' },
          { name: 'Immigration forms preparation', href: '/services/immigration-support/immigration-forms-preparation' },
          { name: 'Case file organization', href: '/services/immigration-support/case-file-organization' },
          { name: 'Supporting document checklists', href: '/services/immigration-support/supporting-document-checklists' },
          { name: 'Cover letter drafting for applications', href: '/services/immigration-support/cover-letter-drafting' },
          { name: 'Appeal documentation support', href: '/services/immigration-support/appeal-documentation-support' }

        ]
      }
    ]
  },
  {
    name: 'Team',
    dropdown: [
      { name: 'Our Lawyers' },
      { name: 'Senior Partners' },
      { name: 'Associates' },
      { name: 'Individual Lawyer Profile (dynamic pages)' },
      { name: 'Join Our Team' }
    ]
  },
  {
    name: 'Case Studies',
    href: '/case-studies',
    dropdown: []
  },
  {
    name: 'Insight',
    dropdown: [
      { name: 'Blog' },
      { name: 'Legal News' },
      { name: 'Recent Judgements' }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    dropdown: []
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [mobileActiveSubDropdown, setMobileActiveSubDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setMobileActiveDropdown(mobileActiveDropdown === name ? null : name);
    setMobileActiveSubDropdown(null);
  };

  const toggleMobileSubDropdown = (name) => {
    setMobileActiveSubDropdown(mobileActiveSubDropdown === name ? null : name);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#16272D]/95 backdrop-blur-md border-b border-[#A07A41]/20 py-1 shadow-2xl' : 'bg-[#16272D]/80 backdrop-blur-sm border-b border-transparent py-3'}`}>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="flex-shrink-0 flex items-center cursor-pointer group -ml-4 sm:-ml-8 lg:-ml-12"
          >
            <div className="relative h-32 w-64 sm:h-40 sm:w-80 transition-transform duration-300 group-hover:scale-105">
              <img src="/logo1.jpg" alt="H&S Co. Logo" className="h-full w-full object-contain object-left" />
            </div>
          </Link>

          {/* Desktop Navigation - Centered Layout */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-5 xl:space-x-8">
            {navStructure.map((item, index) => (
              <div key={item.name} className="relative group/main">
                {item.dropdown.length > 0 ? (
                  <button className="flex items-center gap-1.5 text-gray-300 hover:text-[#A07A41] font-serif font-medium text-[16px] tracking-wide transition-colors py-6 outline-none">
                    {item.name}
                    <ChevronDown className="h-3 w-3 text-gray-500 transition-transform group-hover/main:rotate-180" />
                  </button>
                ) : (
                  <Link to={item.href || '#'} className="flex items-center gap-1.5 text-gray-300 hover:text-[#A07A41] font-serif font-medium text-[16px] tracking-wide transition-colors py-6 outline-none">
                    {item.name}
                  </Link>
                )}

                {item.dropdown.length > 0 && (
                  <div className={`absolute top-full opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible translate-y-3 group-hover/main:translate-y-0 transition-all duration-300 bg-[#16272D] border border-[#A07A41]/30 shadow-2xl rounded-b-lg z-50 w-[280px] ${index > 4 ? 'right-0' : 'left-0'}`}>
                    <div className="h-1 w-full bg-gradient-to-r from-[#A07A41] to-[#B58B4B]"></div>
                    <div className="p-2 flex flex-col gap-1">
                      {item.dropdown.map((subItem, idx) => (
                        <div key={idx} className="relative group/sub">
                          <a href="#" className="flex items-center justify-between px-4 py-3 text-[15px] font-serif text-gray-300 hover:text-white hover:bg-[#1B2D33] rounded transition-all">
                            <span className="flex items-center gap-2">
                              <ChevronRight className={`h-3 w-3 opacity-0 group-hover/sub:opacity-100 -translate-x-2 group-hover/sub:translate-x-0 transition-all duration-300`} />
                              {subItem.name}
                            </span>
                            {subItem.subDropdown && <ChevronRight className="h-4 w-4" />}
                          </a>

                          {/* NESTED DROPDOWN (Level 3) - Enhanced for many items */}
                          {subItem.subDropdown && (
                            <div className={`absolute top-0 left-full ml-[1px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible translate-x-3 group-hover/sub:translate-x-0 transition-all duration-300 bg-[#16272D] border border-[#A07A41]/30 shadow-2xl rounded-lg z-50 ${subItem.subDropdown.length > 10 ? 'w-[520px]' : 'w-[280px]'}`}>
                              <div className={`p-2 ${subItem.subDropdown.length > 10 ? 'grid grid-cols-2 gap-x-2 overflow-y-auto max-h-[80vh] custom-scrollbar' : 'flex flex-col gap-1'}`}>
                                {subItem.subDropdown.map((deepItem, deepIdx) => {
                                  const name = typeof deepItem === 'string' ? deepItem : deepItem.name;
                                  const href = typeof deepItem === 'string' ? '#' : deepItem.href;
                                  const isInternal = href.startsWith('/');

                                  const content = (
                                    <span className="flex items-center gap-2">
                                      <div className="h-[1px] w-2 bg-[#A07A41]/40"></div>
                                      {name}
                                    </span>
                                  );

                                  const className = "block px-4 py-2.5 text-[13px] font-serif text-gray-400 hover:text-white hover:bg-[#1B2D33] rounded transition-all whitespace-nowrap";

                                  return isInternal ? (
                                    <Link key={deepIdx} to={href} onClick={() => setIsOpen(false)} className={className}>
                                      {content}
                                    </Link>
                                  ) : (
                                    <a key={deepIdx} href={href} className={className}>
                                      {content}
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#A07A41] p-2 outline-none">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden absolute w-full bg-[#16272D] border-t border-[#A07A41]/20 transition-all duration-500 overflow-y-auto ${isOpen ? 'max-h-[85vh] py-6 border-b' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 space-y-1">
          {navStructure.map((item) => (
            <div key={item.name} className="border-b border-[#2A454E] last:border-0">
              {item.dropdown.length > 0 ? (
                <button onClick={() => toggleMobileDropdown(item.name)} className="flex items-center justify-between w-full py-4 text-gray-200 hover:text-[#A07A41]">
                  <span className="font-serif text-[17px] tracking-wide">{item.name}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileActiveDropdown === item.name ? 'rotate-180 text-[#A07A41]' : ''}`} />
                </button>
              ) : (
                <Link to={item.href || '#'} onClick={() => setIsOpen(false)} className="flex items-center justify-between w-full py-4 text-gray-200 hover:text-[#A07A41]">
                  <span className="font-serif text-[17px] tracking-wide">{item.name}</span>
                </Link>
              )}

              {item.dropdown.length > 0 && mobileActiveDropdown === item.name && (
                <div className="bg-[#1B2D33] border-l-2 border-[#A07A41]/40 py-2 mb-4 rounded-r-lg">
                  {item.dropdown.map((subItem, idx) => (
                    <div key={idx}>
                      <button onClick={() => subItem.subDropdown && toggleMobileSubDropdown(subItem.name)} className="flex items-center justify-between w-full px-6 py-3 text-gray-400 hover:text-[#A07A41]">
                        <span className="flex items-center gap-3"><div className="h-[1px] w-2 bg-[#A07A41]/60"></div>{subItem.name}</span>
                        {subItem.subDropdown && <ChevronDown className={`h-4 w-4 transition-transform ${mobileActiveSubDropdown === subItem.name ? 'rotate-180' : ''}`} />}
                      </button>

                      {subItem.subDropdown && mobileActiveSubDropdown === subItem.name && (
                        <div className="bg-[#16272D]/50 ml-4 border-l border-[#A07A41]/20 my-1">
                          {subItem.subDropdown.map((deepItem, dIdx) => {
                            const name = typeof deepItem === 'string' ? deepItem : deepItem.name;
                            const href = typeof deepItem === 'string' ? '#' : deepItem.href;
                            const isInternal = href.startsWith('/');
                            
                            const className = "block px-8 py-2.5 text-xs text-gray-500 hover:text-[#A07A41]";

                            return isInternal ? (
                              <Link key={dIdx} to={href} onClick={() => setIsOpen(false)} className={className}>
                                {name}
                              </Link>
                            ) : (
                              <a key={dIdx} href={href} className={className}>
                                {name}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
