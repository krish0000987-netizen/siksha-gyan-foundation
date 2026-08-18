import React, { useState } from 'react';
import { 
  BookOpen, Target, GraduationCap, Wrench, Heart, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, Users, Award
} from 'lucide-react';
import { COMPETITIVE_STRATEGY_STEPS, DESIGN_THREE_STEP_MODEL, getWhatsAppDonationLink, getWhatsAppInquiryLink } from '../data/foundationData';

export default function ProgramsView({ activeSub, onNavigate, onOpenDonate, onOpenQuiz }) {
  const [activeTab, setActiveTab] = useState(activeSub || 'prog-child');

  const tabs = [
    { id: 'prog-child', label: 'Child & Foundational Education' },
    { id: 'prog-school', label: 'School & College Collaborations' },
    { id: 'prog-competitive', label: 'Competitive Exam Center (UPSC/MPSC)' },
    { id: 'prog-defence', label: 'Defence Exams (NDA/CDS/NA)' },
    { id: 'prog-entrance', label: 'Academic Entrance (JEE/NEET/CET)' },
    { id: 'prog-design', label: 'Design & Creative Careers (NID/NIFT)' },
    { id: 'prog-skills', label: 'Skill Skilling & Vocational Courses' },
    { id: 'prog-literacy', label: 'Digital & Financial Literacy' },
    { id: 'prog-girls', label: "Girls' Education & Career" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-white">
      
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest">
          Main Service Discovery Portal
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Programs & Initiatives
        </h1>
        <p className="text-slate-600 text-sm">
          Separating our child education, entrance coaching, competitive exam mentoring, creative design pathways, vocational skilling, and community development.
        </p>
      </div>

      {/* Tabs Navigation - Mobile Dropdown & Desktop Buttons */}
      <div className="w-full border-b border-slate-200 pb-4">
        {/* Mobile Dropdown Select */}
        <div className="block sm:hidden w-full px-1">
          <label htmlFor="program-tabs-select" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
            Explore Program Section:
          </label>
          <select
            id="program-tabs-select"
            value={activeTab}
            onChange={(e) => {
              setActiveTab(e.target.value);
              window.scrollTo({ top: 180, behavior: 'smooth' });
            }}
            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 font-extrabold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 border ${
                activeTab === tab.id 
                  ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20' 
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: Child & Foundational Education (Points 3, 4, 5) */}
      {(activeTab === 'prog-child' || activeTab === 'prog-foundational') && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Core Initiative</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Child Education & Foundational Learning</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Shiksha Gyan Foundation focuses on using education as a key mechanism for social development and improving life opportunities for children from underserved communities. Rather than restricting learning to a narrow age bracket, we present education as a continuous journey spanning ages 6 to 60.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppDonationLink("Child Education")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-6 py-3 bg-amber-500 text-white font-bold rounded-xl shadow-md hover:bg-amber-600 transition items-center space-x-2"
                  >
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>Donate for Child Education (WhatsApp)</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" 
                  alt="Child Education" 
                  className="w-full h-64 object-cover rounded-2xl shadow-md border border-slate-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">Why Education Matters</h4>
                <p className="text-xs text-slate-600">Breaking generational poverty by establishing baseline literacy, critical thinking, and school retention.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">Access to Learning</h4>
                <p className="text-xs text-slate-600">Providing textbooks, study materials, and interactive digital tablets to children in slum & rural pockets.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">Community Participation</h4>
                <p className="text-xs text-slate-600">Engaging parents and local leaders to ensure regular attendance and continued learning past school stage.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: School & College Collaborations (Point 6) */}
      {activeTab === 'prog-school' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">School Programs & College Collaborations</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Shiksha Gyan Foundation connects formal educational institutions with real-world career planning. We conduct career guidance seminars and workshops for junior colleges, degree colleges, and high schools across Thane and Mumbai.
                </p>
              </div>
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" 
                  alt="College Collaboration" 
                  className="w-full h-56 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-amber-700">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-slate-900">11th & 12th Student Guidance</h3>
                </div>
                <p className="text-xs text-slate-600">Career awareness seminars covering competitive pathways:</p>
                <div className="flex flex-wrap gap-2">
                  {['JEE Main/Advanced', 'NEET', 'MHT-CET', 'NDA Defence', 'NATA Architecture'].map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-amber-700">
                  <Award className="w-5 h-5" />
                  <h3 className="text-lg font-bold text-slate-900">Undergraduate Degree College Seminars</h3>
                </div>
                <p className="text-xs text-slate-600">Career guidance for graduation students in civil & defence exams:</p>
                <div className="flex flex-wrap gap-2">
                  {['UPSC Civil Services', 'CDS Defence', 'CAPF Police', 'AFCAT Airforce', 'MPSC State', 'PSI / STI / ASO'].map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Competitive Examination Center (Points 7, 8) */}
      {activeTab === 'prog-competitive' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Flagship Mentoring</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Competitive Examination Center</h2>
                <p className="text-slate-700 text-sm">
                  Competitive examinations require smart, time-bound, structured preparation alongside hard work. Lead Faculty: <strong>Mr. Mandar Rawool</strong>.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppInquiryLink("Competitive Examination Center (UPSC/MPSC)")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-5 py-3 bg-emerald-600 hover:bg-emerald-550 text-white font-bold rounded-xl shadow-md transition items-center space-x-2 text-xs sm:text-sm"
                  >
                    <span>Inquire via WhatsApp (UPSC / MPSC)</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" 
                  alt="Competitive Prep" 
                  className="w-full h-56 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            {/* 6-Step Strategy Model */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-slate-900">Our 6-Step Competitive Exam Strategy Model</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {COMPETITIVE_STRATEGY_STEPS.map((st) => (
                  <div key={st.step} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center text-xs">
                      0{st.step}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{st.title}</h4>
                    <p className="text-xs text-slate-600">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam Coverage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">National Examinations</h4>
                <p className="text-xs text-amber-700 font-bold">UPSC • NDA • CDS • AFCAT • CAPF</p>
                <p className="text-xs text-slate-600">Comprehensive syllabus coverage, current affairs compilations, and prelims/mains mock tests.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">Maharashtra State Examinations</h4>
                <p className="text-xs text-amber-700 font-bold">MPSC • PSI • STI • ASO</p>
                <p className="text-xs text-slate-600">State specific history, geography, Marathi answer writing, and personal guidance by Mandar Rawool.</p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 4: Defence Examination Guidance (Point 9) */}
      {activeTab === 'prog-defence' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Armed Forces Careers</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">NDA / CDS / Defence Examination Guidance</h2>
                <p className="text-slate-700 text-sm">
                  Specialized guidance led by <strong>Mr. Rajkumar Mone</strong> for NDA, CDS, NA, AFCAT & CAPF aspirants.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppInquiryLink("Defence Exam Guidance (NDA/CDS/AFCAT)")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-5 py-3 bg-emerald-600 hover:bg-emerald-550 text-white font-bold rounded-xl shadow-md transition items-center space-x-2 text-xs sm:text-sm"
                  >
                    <span>Inquire via WhatsApp (NDA / CDS / Defence)</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80" 
                  alt="Defence Academy" 
                  className="w-full h-56 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">NDA & Naval Academy</h4>
                <p className="text-xs text-slate-600">Syllabus breakdown for 12th appeared/passed students targeting Army, Navy & Airforce wings.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">CDS & AFCAT Guidance</h4>
                <p className="text-xs text-slate-600">Graduate level entry for Combined Defence Services and Airforce Common Admission Test.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">Seminars & Awareness</h4>
                <p className="text-xs text-slate-600">Recorded seminars at Thane Police Commissioner Hall (Police Welfare Assoc.) and college outreach.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: Academic Entrance Preparation (Point 10) */}
      {activeTab === 'prog-entrance' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Academic Entrance Programs</h2>
                <p className="text-slate-700 text-sm">
                  Academic guidance + entrance preparation + career direction for 11th & 12th Science and Commerce students.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppInquiryLink("Academic Entrance (JEE/NEET/CET)")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-5 py-3 bg-emerald-600 hover:bg-emerald-550 text-white font-bold rounded-xl shadow-md transition items-center space-x-2 text-xs sm:text-sm"
                  >
                    <span>Inquire via WhatsApp (JEE / NEET / CET)</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80" 
                  alt="Science Labs" 
                  className="w-full h-56 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">JEE Main & Advanced</h4>
                <p className="text-xs text-slate-600">Engineering entrance coaching, conceptual physics, chemistry & high-level math problem solving.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">NEET Medical Prep</h4>
                <p className="text-xs text-slate-600">Biology diagrammatic mastery, NCERT line-by-line review, and chemistry speed techniques.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">MHT-CET State Entrance</h4>
                <p className="text-xs text-slate-600">State board syllabus alignment, past paper drills, and percentile maximization tactics.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: Design, Architecture, Fashion & Art (Points 11, 12, 13) */}
      {activeTab === 'prog-design' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Major Specialized Pathway</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Design, Architecture, Fashion & Art Careers</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Many students select conventional engineering or medical paths due to peer pressure, parent pressure, or lack of awareness. Shiksha Gyan Foundation promotes awareness of creative careers in Design, Architecture, Fashion, and Fine Art.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={onOpenQuiz}
                    className="px-5 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-amber-400 transition shadow-sm"
                  >
                    Try Design Aptitude Quiz Demo
                  </button>
                  <a
                    href={getWhatsAppInquiryLink("Design & Creative Careers (NID/NIFT)")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-5 py-2.5 bg-emerald-600 hover:bg-emerald-550 text-white font-bold rounded-xl shadow-sm transition items-center space-x-2 text-xs"
                  >
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80" 
                  alt="Design Studio" 
                  className="w-full h-56 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            {/* 3-Step Model */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">The 3-Step Creative Career Guidance Model</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DESIGN_THREE_STEP_MODEL.map((m, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-extrabold text-xs">
                      {m.step}
                    </span>
                    <h4 className="text-base font-bold text-slate-900">{m.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exams Covered */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="text-base font-bold text-slate-900">Design & Creative Examinations Supported:</h4>
              <div className="flex flex-wrap gap-2">
                {['NID DAT', 'NIFT Studio Test', 'UCEED (IIT)', 'NATA Architecture', 'CEED (Postgrad)', 'ART CET', 'JEE Paper 2'].map((e, i) => (
                  <span key={i} className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold rounded-lg">
                    {e}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 7: Skill Development & Vocational Training (Points 14, 15) */}
      {activeTab === 'prog-skills' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Employability Pillar</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Skill Development & Specialized Vocational Courses</h2>
                <p className="text-slate-700 text-sm">
                  Our model: <strong>Training → Skill → Employability → Placement Support</strong>. Centers established in urban and rural areas.
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppInquiryLink("Skill Development & Vocational Courses")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-5 py-3 bg-emerald-600 hover:bg-emerald-550 text-white font-bold rounded-xl shadow-md transition items-center space-x-2 text-xs sm:text-sm"
                  >
                    <span>Inquire via WhatsApp (Courses & Admission)</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                  alt="Vocational Training" 
                  className="w-full h-56 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80" alt="Hospitality" className="w-full h-24 object-cover rounded-xl mb-2" />
                <h4 className="text-base font-bold text-slate-900">Hospitality Industry Skilling</h4>
                <p className="text-xs text-slate-600">Industry-oriented training for food & beverage service, front office, and hotel operations.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80" alt="Aviation" className="w-full h-24 object-cover rounded-xl mb-2" />
                <h4 className="text-base font-bold text-slate-900">Aviation Sector Training</h4>
                <p className="text-xs text-slate-600">Ground handling, customer service, and cabin crew preparatory skills.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=80" alt="Automobile" className="w-full h-24 object-cover rounded-xl mb-2" />
                <h4 className="text-base font-bold text-slate-900">Automobile Skill Training</h4>
                <p className="text-xs text-slate-600">Practical automobile repair, diagnostics, and modern vehicular maintenance.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80" alt="Healthcare" className="w-full h-24 object-cover rounded-xl mb-2" />
                <h4 className="text-base font-bold text-slate-900">Healthcare Assistance</h4>
                <p className="text-xs text-slate-600">Patient care assistant, bedside nursing aid, and clinical desk operations.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80" alt="Fire & Safety" className="w-full h-24 object-cover rounded-xl mb-2" />
                <h4 className="text-base font-bold text-slate-900">Fire & Safety Management</h4>
                <p className="text-xs text-slate-600">Industrial safety protocols, fire prevention techniques, and emergency response.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80" alt="Diet & Nutrition" className="w-full h-24 object-cover rounded-xl mb-2" />
                <h4 className="text-base font-bold text-slate-900">Diet & Nutrition Certificate</h4>
                <p className="text-xs text-slate-600">Specialized certificate course in community dietetics and health nutrition.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 8: Digital & Financial Literacy (Points 16, 17) */}
      {activeTab === 'prog-literacy' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Digital & Financial Literacy Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80" 
                  alt="Digital Literacy" 
                  className="w-full h-40 object-cover rounded-xl mb-2"
                />
                <h3 className="text-lg font-bold text-amber-800">Digital Literacy Program</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Working toward breaking the digital divide through interactive basic digital awareness, educational technology access, and computer participation for underserved youth and adults.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=500&q=80" 
                  alt="Financial Literacy" 
                  className="w-full h-40 object-cover rounded-xl mb-2"
                />
                <h3 className="text-lg font-bold text-amber-800">Financial Literacy Drive</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Addressing grassroots financial awareness, bank account management, savings, digital payment security, and practical budgeting for low-income families.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 9: Girls' Education & Career (Point 18) */}
      {activeTab === 'prog-girls' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Dedicated Initiative</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Girls' Education & Career Empowerment</h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Shiksha Gyan Foundation specifically emphasizes enabling girls' access to education and financial independence through career awareness, entrance exam coaching, and skill development.
                </p>
              </div>
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80" 
                  alt="Girls Education" 
                  className="w-full h-56 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">Educational Access</h4>
                <p className="text-xs text-slate-600">Targeted support to prevent dropout rates among teenage girls in Dombivli & Thane rural belts.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900">Career Awareness & Mentoring</h4>
                <p className="text-xs text-slate-600">Counseling girls for civil services, defence entry, design careers, and corporate placement.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
