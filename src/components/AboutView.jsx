import React, { useState } from 'react';
import { 
  ShieldCheck, Award, Users, BookOpen, Heart, Sparkles, CheckCircle2, FileText, ArrowRight, UserCheck, GraduationCap
} from 'lucide-react';
import { FOUNDATION_INFO, GOVERNING_BODY, FACULTY_MEMBERS, CORE_VALUES } from '../data/foundationData';

export default function AboutView({ activeSub, onNavigate }) {
  const [selectedFacultyCategory, setSelectedFacultyCategory] = useState('All');

  const facultyCategories = ['All', 'Competitive Exams', 'Defence Exams', 'Academic Entrance', 'Leadership & Skilling', 'Girls Education'];

  const filteredFaculty = selectedFacultyCategory === 'All' 
    ? FACULTY_MEMBERS 
    : FACULTY_MEMBERS.filter(f => f.category === selectedFacultyCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16 bg-white">
      
      {/* Header Banner - White & Warm Gold Theme */}
      <div className="relative rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest">
              About Shiksha Gyan Foundation
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Not-for-Profit Education Society & Trust Established in 2020
            </h1>
            <p className="text-slate-700 text-base leading-relaxed">
              Founded with the philosophy to understand education and employability issues at the grassroots level, developing high-impact programs and institutional partnerships for underserved communities.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" 
              alt="Education Mission" 
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Point 28: Our Story & Philosophy */}
      <section id="about-story" className="space-y-6">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Our Identity</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Story & Grassroots Operating Philosophy</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:border-amber-400 transition">
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80" 
              alt="Established 2020" 
              className="w-full h-36 object-cover rounded-xl mb-2"
            />
            <h4 className="text-lg font-bold text-slate-900">Established 2020</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Shiksha Gyan Foundation was registered in 2020 in Thane/Dombivli as an education society and trust to bridge systemic learning gaps.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:border-amber-400 transition">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80" 
              alt="Reaching Unreached" 
              className="w-full h-36 object-cover rounded-xl mb-2"
            />
            <h4 className="text-lg font-bold text-slate-900">Reaching the Unreached</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our core purpose is to reach the <strong>Unreached, Uncared, and Unattended</strong> through child education, competitive mentoring, skilling, and health welfare.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:border-amber-400 transition">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80" 
              alt="Grassroots Methodology" 
              className="w-full h-36 object-cover rounded-xl mb-2"
            />
            <h4 className="text-lg font-bold text-slate-900">Grassroots Methodology</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We interact directly with students, parents, and job seekers to design customized interventions rather than enforcing standardized rigid frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Point 29: Vision, Mission & 6 Core Values */}
      <section id="about-vision" className="space-y-8">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Vision & Values</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Vision, Mission & Operating Principles</h3>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-white p-8 rounded-3xl border border-amber-200 space-y-3 shadow-sm">
          <h4 className="text-xl font-bold text-amber-900">Foundation Vision</h4>
          <p className="text-slate-800 text-lg font-medium leading-relaxed">
            "Use skilling and education to show demonstrable deep impact in every underserved community where the organization works."
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-slate-900">6 Core Organizational Values</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-400 hover:shadow-md transition space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm">
                  0{i+1}
                </div>
                <h5 className="text-base font-bold text-slate-900">{val.name}</h5>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Point 30: Governing Body & Leadership - Clean Typographic Layout */}
      <section id="about-governing" className="space-y-6">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Leadership</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Governing Body & Office Bearers</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOVERNING_BODY.map((member, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-amber-400 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-extrabold flex items-center justify-center text-sm shadow-xs">
                  <UserCheck className="w-5 h-5 text-amber-700" />
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-900 border border-amber-200">
                  {member.role}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">{member.name}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{member.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Point 24: Speakers & Faculty Roster - Clean Professional Cards without Photo Avatars */}
      <section id="about-faculty" className="space-y-6">
        <div className="border-l-4 border-amber-500 pl-4 flex flex-col sm:flex-row sm:items-end justify-between">
          <div>
            <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Guidance Experts</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Speakers & Guidance Faculty Roster</h3>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 pt-2">
          {facultyCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFacultyCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition border ${
                selectedFacultyCategory === cat 
                  ? 'bg-amber-500 text-white border-amber-500 shadow-sm' 
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((fac, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-amber-400 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  {fac.category}
                </span>
                <GraduationCap className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">{fac.name}</h4>
                <p className="text-xs font-bold text-amber-800 mt-0.5">{fac.role}</p>
              </div>
              <p className="text-xs text-slate-600 border-t border-slate-100 pt-2 leading-relaxed">
                <strong className="text-slate-700">Specialization:</strong> {fac.specialization}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Point 32: Legal Registration Details */}
      <section id="about-legal" className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Transparency & Governance</h2>
          <h3 className="text-2xl font-extrabold text-slate-900">Official Registration & Legal Mandate</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 text-amber-700">
              <ShieldCheck className="w-5 h-5" />
              <h4 className="text-base font-bold text-slate-900">Society Registration Certificate</h4>
            </div>
            <div className="text-xs text-slate-700 space-y-1">
              <p><strong>Registration Number:</strong> {FOUNDATION_INFO.registration.society.number}</p>
              <p><strong>Date of Registration:</strong> {FOUNDATION_INFO.registration.society.date}</p>
              <p><strong>Act:</strong> {FOUNDATION_INFO.registration.society.type}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 text-amber-700">
              <ShieldCheck className="w-5 h-5" />
              <h4 className="text-base font-bold text-slate-900">Public Trust Registration Certificate</h4>
            </div>
            <div className="text-xs text-slate-700 space-y-1">
              <p><strong>Trust Number:</strong> {FOUNDATION_INFO.registration.trust.number}</p>
              <p><strong>Date of Registration:</strong> {FOUNDATION_INFO.registration.trust.date}</p>
              <p><strong>Act:</strong> {FOUNDATION_INFO.registration.trust.type}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
