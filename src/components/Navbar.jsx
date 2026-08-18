import React, { useState, useEffect } from 'react';
import { 
  Search, Phone, Mail, MapPin, ChevronDown, Menu, X, Heart, ShieldCheck 
} from 'lucide-react';
import { FOUNDATION_INFO, getWhatsAppDonationLink } from '../data/foundationData';

export default function Navbar({ activeView, setActiveView, onOpenSearch, onOpenDonate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'about', 
      label: 'About Us',
      subitems: [
        { id: 'about-story', label: 'Our Story & Purpose' },
        { id: 'about-vision', label: 'Vision, Mission & Values' },
        { id: 'about-governing', label: 'Governing Body' },
        { id: 'about-faculty', label: 'Speakers & Faculty Roster' },
        { id: 'about-legal', label: 'Registration & Legal Info' }
      ]
    },
    { 
      id: 'programs', 
      label: 'Programs',
      subitems: [
        { id: 'prog-child', label: 'Child & Foundational Education' },
        { id: 'prog-school', label: 'School & College Collaborations' },
        { id: 'prog-competitive', label: 'Competitive Exam Center (UPSC/MPSC)' },
        { id: 'prog-defence', label: 'Defence Exams (NDA / CDS / AFCAT)' },
        { id: 'prog-entrance', label: 'Entrance Coaching (JEE/NEET/CET)' },
        { id: 'prog-design', label: 'Design & Creative Careers (NID/NIFT)' },
        { id: 'prog-skills', label: 'Skill Development & Vocational Training' },
        { id: 'prog-literacy', label: 'Digital & Financial Literacy' },
        { id: 'prog-girls', label: "Girls' Education & Career Empowerment" }
      ]
    },
    { 
      id: 'csr', 
      label: 'CSR & Partnerships',
      subitems: [
        { id: 'csr-overview', label: 'Customized Corporate CSR Programs' },
        { id: 'csr-ngo', label: 'NGO Partnerships & Capacity Building' },
        { id: 'csr-institutional', label: 'School & College Institutional Ties' }
      ]
    },
    { 
      id: 'activities', 
      label: 'Activities & Impact',
      subitems: [
        { id: 'act-seminars', label: 'Seminars & Outreach Archive (2017-2023)' },
        { id: 'act-jobfairs', label: 'Job Fairs & Employment Drives' },
        { id: 'act-exhibitions', label: 'Book Exhibitions & Awareness' },
        { id: 'act-health', label: 'Health & Wellness Camps' }
      ]
    },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const [expandedMobileItems, setExpandedMobileItems] = useState({
    about: false,
    programs: false,
    csr: false,
    activities: false
  });

  const toggleMobileExpand = (itemId) => {
    setExpandedMobileItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleNavClick = (viewId, subId = null) => {
    setActiveView(subId || viewId);
    setMobileMenuOpen(false);
    setDropdownOpen(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppDonate = (e) => {
    e.preventDefault();
    window.open(getWhatsAppDonationLink("Child Education"), "_blank");
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs py-2 px-4 text-slate-700 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-amber-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Reg: Society {FOUNDATION_INFO.registration.society.number} | Trust {FOUNDATION_INFO.registration.trust.number}</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Dombivli (W), Thane - 421202</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`tel:${FOUNDATION_INFO.phones[0]}`} className="flex items-center space-x-1 hover:text-amber-700 transition font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>{FOUNDATION_INFO.phones[0]}</span>
            </a>
            <a href={`mailto:${FOUNDATION_INFO.email}`} className="flex items-center space-x-1 hover:text-amber-700 transition font-medium">
              <Mail className="w-3.5 h-3.5 text-amber-700" />
              <span>{FOUNDATION_INFO.email}</span>
            </a>
            <button 
              onClick={onOpenSearch}
              className="bg-white hover:bg-slate-50 text-slate-800 px-2.5 py-1 rounded border border-slate-300 shadow-sm flex items-center space-x-1.5 text-xs transition"
            >
              <Search className="w-3 h-3 text-amber-700" />
              <span className="font-medium">Quick Search (Cmd+K)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Fixed Brand Layout and Clean Navigation Spacing */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-2.5' : 'bg-white border-b border-slate-200 py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-4">
          
          {/* Official Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group flex-shrink-0"
          >
            <img 
              src="/images/logo_emblem.png" 
              alt="Shiksha Gyan Foundation Logo Emblem" 
              className="h-9 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col justify-center">
              <span className="text-[10px] min-[360px]:text-xs min-[400px]:text-sm sm:text-lg font-black tracking-tight text-red-700 font-serif leading-none group-hover:text-red-800 transition">
                SHIKSHA GYAN FOUNDATION
              </span>
              <span className="hidden xs:block text-[9px] sm:text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5 sm:mt-1">
                Name of Quality Education • Est. 2020
              </span>
            </div>
          </div>

          {/* Desktop Navigation with Proper Padding */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 flex-shrink-0">
            {navItems.map((item) => (
              <div 
                key={item.id}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(item.id)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition flex items-center space-x-1 ${
                    activeView.startsWith(item.id) 
                      ? 'text-amber-800 bg-amber-50 font-bold' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.subitems && <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />}
                </button>

                {/* Submenu Dropdown */}
                {item.subitems && dropdownOpen === item.id && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-2">
                      {item.subitems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(item.id, sub.id)}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50 transition flex items-center justify-between"
                        >
                          <span>{sub.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-1 sm:space-x-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-700 hover:text-amber-600 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-xl">
            {/* Quick Mobile Action Bar */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <a
                href={getWhatsAppDonationLink("Child Education")}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 shadow-sm text-center"
              >
                <Heart className="w-3.5 h-3.5 fill-slate-950" />
                <span>Donate</span>
              </a>
              <a
                href={`tel:${FOUNDATION_INFO.phones[0]}`}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl flex items-center justify-center space-x-1.5 border border-slate-200 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call Helpline</span>
              </a>
            </div>

            {navItems.map((item) => {
              const hasSub = !!item.subitems;
              const isExpanded = !!expandedMobileItems[item.id];
              return (
                <div key={item.id} className="space-y-1">
                  <button
                    onClick={() => {
                      if (hasSub) {
                        toggleMobileExpand(item.id);
                      } else {
                        handleNavClick(item.id);
                      }
                    }}
                    className={`w-full text-left font-bold py-2 px-2 rounded-lg border-b border-slate-100 flex justify-between items-center text-sm ${
                      activeView.startsWith(item.id) ? 'text-amber-700 bg-amber-50/50 font-extrabold' : 'text-slate-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <ChevronDown 
                        className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  {hasSub && isExpanded && (
                    <div className="pl-4 space-y-1 pt-1 border-l-2 border-amber-200 ml-2 animate-in slide-in-from-top-2 duration-150">
                      {item.subitems.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(item.id, sub.id)}
                          className={`block w-full text-left text-xs font-medium py-1.5 px-2 rounded hover:text-amber-700 hover:bg-amber-50/30 transition ${
                            activeView === sub.id ? 'text-amber-800 font-bold bg-amber-50' : 'text-slate-600'
                          }`}
                        >
                          • {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}
