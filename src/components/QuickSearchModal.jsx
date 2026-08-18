import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Target, GraduationCap, Wrench, Heart, Building2, Phone } from 'lucide-react';
import { PROGRAM_CATEGORIES, FACULTY_MEMBERS, JOB_FAIRS, HISTORICAL_SEMINARS } from '../data/foundationData';

export default function QuickSearchModal({ isOpen, onClose, onSelectResult }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const searchItems = [
    { title: "Child Education Initiative", type: "Program", view: "prog-child", desc: "Support educational opportunities for underprivileged children." },
    { title: "Foundational Education & Career Journey", type: "Program", view: "prog-child", desc: "School → Higher Ed → Competitive Prep → Employment." },
    { title: "Competitive Exam Center", type: "Service", view: "prog-competitive", desc: "Time-bound strategy for UPSC, MPSC, NDA, CDS, AFCAT, CAPF." },
    { title: "UPSC & MPSC Prep Model", type: "Coaching", view: "prog-competitive", desc: "Guidance by Mr. Mandar Rawool." },
    { title: "NDA & Defence Exam Guidance", type: "Coaching", view: "prog-defence", desc: "Guidance by Mr. Rajkumar Mone." },
    { title: "JEE Main/Advanced, NEET, MHT-CET", type: "Academic", view: "prog-entrance", desc: "11th & 12th Science entrance pathways." },
    { title: "Design Entrance Exams (NID, NIFT, UCEED, NATA)", type: "Creative", view: "prog-design", desc: "3-Step Aptitude & Entrance preparation." },
    { title: "Skill Development & Vocational Training", type: "Vocational", view: "prog-skills", desc: "Hospitality, Aviation, Automobile, Healthcare, Safety." },
    { title: "Girls' Education & Career Support", type: "Initiative", view: "prog-girls", desc: "Dedicated access & career empowerment for girls." },
    { title: "CSR Corporate Projects", type: "Partnership", view: "csr-overview", desc: "Customized CSR education & skill skilling." },
    { title: "NGO Capacity Building & Training", type: "Partnership", view: "csr-ngo", desc: "Supporting fellow NGOs with training support." },
    { title: "Thane District Job Fair Archive", type: "Activity", view: "act-jobfairs", desc: "Employment exchange job fair participation." },
    { title: "Health Check-up & Blood Donation Camps", type: "Community", view: "act-health", desc: "Health camps in Dombivli, Kalyan, Thane, Dadar." },
    { title: "Governing Body & President Sachin More", type: "Leadership", view: "about-governing", desc: "Society & Trust board details." }
  ];

  const filtered = searchItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 flex items-center space-x-3 bg-slate-50">
          <Search className="w-5 h-5 text-amber-600" />
          <input
            type="text"
            placeholder="Search programs, competitive exams, faculty, health camps..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-base font-medium"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectResult(item.view);
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200 transition flex items-start space-x-3 group"
              >
                <span className="mt-0.5 px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  {item.type}
                </span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                </div>
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500 text-sm">
              No results found for "{query}". Try searching "UPSC", "Design", "Hospitality", or "Contact".
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-between text-xs text-slate-500">
          <span>Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 text-slate-700 shadow-xs">ESC</kbd> to exit</span>
          <span className="font-semibold text-slate-600">Shiksha Gyan Foundation Search Engine</span>
        </div>

      </div>
    </div>
  );
}
