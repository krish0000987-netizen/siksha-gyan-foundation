import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { FOUNDATION_INFO, getWhatsAppDonationLink } from '../data/foundationData';

export default function Footer({ onNavigate, onOpenDonate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo_emblem.png" 
                alt="Shiksha Gyan Foundation Logo" 
                className="h-14 w-auto object-contain"
              />
              <div>
                <span className="text-lg font-extrabold text-red-700 font-serif block">
                  SHIKSHA GYAN FOUNDATION
                </span>
                <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                  Name of Quality Education • Est. 2020
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Shiksha Gyan Foundation is a not-for-profit education society and trust established in 2020 dedicated to reaching the <strong>Unreached, Uncared, and Unattended</strong> across Maharashtra.
            </p>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-[11px] text-amber-900 font-bold space-y-1 shadow-sm">
              <p>• Society Registration: {FOUNDATION_INFO.registration.society.number} ({FOUNDATION_INFO.registration.society.date})</p>
              <p>• Public Trust Registration: {FOUNDATION_INFO.registration.trust.number} ({FOUNDATION_INFO.registration.trust.date})</p>
            </div>
          </div>

          {/* Programs Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('prog-child')} className="hover:text-amber-700 transition">Child & Foundational Education</button></li>
              <li><button onClick={() => onNavigate('prog-competitive')} className="hover:text-amber-700 transition">Competitive Exam Center (UPSC/MPSC)</button></li>
              <li><button onClick={() => onNavigate('prog-defence')} className="hover:text-amber-700 transition">Defence Guidance (NDA/CDS)</button></li>
              <li><button onClick={() => onNavigate('prog-entrance')} className="hover:text-amber-700 transition">Entrance Exams (JEE/NEET/CET)</button></li>
              <li><button onClick={() => onNavigate('prog-design')} className="hover:text-amber-700 transition">Design & Creative Careers (NID/NIFT)</button></li>
              <li><button onClick={() => onNavigate('prog-skills')} className="hover:text-amber-700 transition">Skill Skilling & Vocational Courses</button></li>
              <li><button onClick={() => onNavigate('prog-girls')} className="hover:text-amber-700 transition">Girls' Education & Career</button></li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Organization</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('about-story')} className="hover:text-amber-700 transition">Our Story & Purpose</button></li>
              <li><button onClick={() => onNavigate('about-vision')} className="hover:text-amber-700 transition">Vision, Mission & Values</button></li>
              <li><button onClick={() => onNavigate('about-governing')} className="hover:text-amber-700 transition">Governing Body Leadership</button></li>
              <li><button onClick={() => onNavigate('about-faculty')} className="hover:text-amber-700 transition">Speakers & Faculty Roster</button></li>
              <li><button onClick={() => onNavigate('csr-overview')} className="hover:text-amber-700 transition">CSR Corporate Partnerships</button></li>
              <li><button onClick={() => onNavigate('act-health')} className="hover:text-amber-700 transition">Health & Wellness Camps Archive</button></li>
              <li><button onClick={() => onNavigate('resources')} className="hover:text-amber-700 transition">Resources & Legal Transparency</button></li>
            </ul>
          </div>

          {/* Official Contact Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Contact Details</h4>
            <div className="space-y-2 text-slate-700">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{FOUNDATION_INFO.address.line1}, {FOUNDATION_INFO.address.street}, {FOUNDATION_INFO.address.location} - {FOUNDATION_INFO.address.pincode}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <a href={`mailto:${FOUNDATION_INFO.email}`} className="hover:text-amber-700 transition font-medium">{FOUNDATION_INFO.email}</a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="font-medium">{FOUNDATION_INFO.phones.join(" / ")}</span>
              </p>
            </div>
            <div className="pt-2">
              <a
                href={getWhatsAppDonationLink("Child Education")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-slate-500 text-xs">
          <p>© 2026 SHIKSHA GYAN FOUNDATION. All Rights Reserved. Society MHA/521/2020 | Trust F43060.</p>
          <div className="flex items-center space-x-4">
            <span>Website: {FOUNDATION_INFO.website}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 transition flex items-center space-x-1 shadow-sm"
            >
              <ArrowUp className="w-4 h-4 text-amber-600" />
              <span className="font-semibold">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
