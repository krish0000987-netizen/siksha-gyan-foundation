import React from 'react';
import { 
  BookOpen, Target, GraduationCap, Wrench, HeartHandshake, 
  ArrowRight, ShieldCheck, Award, Users, MapPin, Sparkles, Phone, CheckCircle2, Heart
} from 'lucide-react';
import HeroSlider from './HeroSlider';
import { FOUNDATION_INFO, PROGRAM_CATEGORIES, GOVERNING_BODY, FACULTY_MEMBERS } from '../data/foundationData';

export default function HomeView({ onNavigate, onOpenSearch, onOpenDonate, onOpenQuiz, onOpenCSR }) {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16 bg-white">
      
      {/* Hero Section with 3-Second Automatic Image Slideshow */}
      <HeroSlider onNavigate={onNavigate} onOpenDonate={onOpenDonate} />

      {/* Core Mandate Banner - Crisp White Theme with Rich Imagery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-50/70 via-white to-slate-50 p-8 sm:p-10 rounded-3xl border border-amber-200/60 shadow-lg shadow-amber-500/5 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest">
                Established 2020 • NGO Society & Trust
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Central Purpose & Mandate
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                Shiksha Gyan Foundation is a not-for-profit education society established to positively impact underprivileged sections of society through quality child education, career guidance, and vocational training.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition group">
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80" 
                  alt="Unreached" 
                  className="w-full h-28 object-cover rounded-xl mb-3 group-hover:scale-102 transition"
                />
                <div className="flex items-center space-x-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition">UNREACHED</h3>
                </div>
                <p className="text-xs text-slate-600">Bringing educational resources & career awareness to remote and underserved pockets.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition group">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80" 
                  alt="Uncared" 
                  className="w-full h-28 object-cover rounded-xl mb-3 group-hover:scale-102 transition"
                />
                <div className="flex items-center space-x-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition">UNCARED</h3>
                </div>
                <p className="text-xs text-slate-600">Nurturing youth left behind by conventional school systems with personal mentoring.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition group">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" 
                  alt="Unattended" 
                  className="w-full h-28 object-cover rounded-xl mb-3 group-hover:scale-102 transition"
                />
                <div className="flex items-center space-x-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center">3</span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition">UNATTENDED</h3>
                </div>
                <p className="text-xs text-slate-600">Providing skill development, placement support & healthcare for sustainable dignity.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lifelong Beneficiary Age Continuum (6 to 60 Years) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Lifelong Education Continuum</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Programs Designed for Beneficiaries Aged 6 to 60</h3>
          <p className="text-slate-600 text-sm">
            Education is a continuing journey. Shiksha Gyan Foundation connects foundational schooling to higher education, competitive coaching, skilling, and adult community welfare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-amber-400 hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80" 
              alt="Age 6-14" 
              className="w-full h-24 object-cover rounded-xl"
            />
            <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-extrabold text-xs inline-block">Age 6 - 14</span>
            <h4 className="text-base font-bold text-slate-900">Child & Foundational Education</h4>
            <p className="text-xs text-slate-600">Interactive learning, educational support, and "Donate for Child Education" initiative.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-amber-400 hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80" 
              alt="Age 15-18" 
              className="w-full h-24 object-cover rounded-xl"
            />
            <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-extrabold text-xs inline-block">Age 15 - 18</span>
            <h4 className="text-base font-bold text-slate-900">School & Entrance Prep</h4>
            <p className="text-xs text-slate-600">11th/12th Science & Commerce streams, JEE, NEET, MHT-CET & Design Entrance (NID/NIFT).</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-800/10 shadow-sm space-y-3 hover:border-amber-400 hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" 
              alt="Age 18-28" 
              className="w-full h-24 object-cover rounded-xl"
            />
            <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-extrabold text-xs inline-block">Age 18 - 28</span>
            <h4 className="text-base font-bold text-slate-900">Competitive & Defence Center</h4>
            <p className="text-xs text-slate-600">UPSC, MPSC, NDA, CDS, AFCAT, CAPF, PSI, STI & ASO guided by Mandar Rawool & Rajkumar Mone.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-amber-400 hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" 
              alt="Age 18-35" 
              className="w-full h-24 object-cover rounded-xl"
            />
            <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-extrabold text-xs inline-block">Age 18 - 35</span>
            <h4 className="text-base font-bold text-slate-900">Skill Skilling & Job Placement</h4>
            <p className="text-xs text-slate-600">Vocational training in Hospitality, Aviation, Healthcare, Safety & Municipal Job Fairs.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-amber-400 hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80" 
              alt="Age 25-60" 
              className="w-full h-24 object-cover rounded-xl"
            />
            <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-extrabold text-xs inline-block">Age 25 - 60</span>
            <h4 className="text-base font-bold text-slate-900">Digital, Financial & Health Welfare</h4>
            <p className="text-xs text-slate-600">Grassroots digital divide courses, financial awareness, blood donation & eye camps.</p>
          </div>
        </div>
      </section>

      {/* Main Program Catalog Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Main Service Discovery</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">Major Foundation Programs</h3>
          </div>
          <button 
            onClick={() => onNavigate('programs')}
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-amber-700 hover:text-amber-800 text-sm font-bold"
          >
            <span>Explore All 35 Program Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAM_CATEGORIES.map((prog) => (
            <div 
              key={prog.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 w-full overflow-hidden relative">
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white font-bold text-sm drop-shadow-md">
                    {prog.title}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">{prog.description}</p>
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {prog.subitems.map((sub, i) => (
                      <button
                        key={i}
                        onClick={() => onNavigate(sub.link)}
                        className="block w-full text-left text-xs font-semibold text-slate-700 hover:text-amber-600 py-1 transition flex items-center justify-between"
                      >
                        <span>• {sub.name}</span>
                        <ArrowRight className="w-3 h-3 text-amber-600 opacity-0 group-hover:opacity-100 transition" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate(prog.id)}
                  className="w-full py-2.5 bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-800 font-bold rounded-xl text-xs transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Tools Teaser with Crisp White Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-center shadow-sm">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Interactive Assessment
            </span>
            <h4 className="text-xl font-extrabold text-slate-900">Design Aptitude Simulator</h4>
            <p className="text-xs text-slate-600">
              Are you or your ward interested in creative careers? Take our 3-question visual assessment sample for NID, NIFT & UCEED.
            </p>
            <button
              onClick={onOpenQuiz}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs shadow-md transition"
            >
              Start Aptitude Quiz Demo
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
              Corporate CSR
            </span>
            <h4 className="text-xl font-extrabold text-slate-900">CSR Impact Estimator</h4>
            <p className="text-xs text-slate-600">
              Corporate heads can calculate beneficiary impact, deliverables, and 80G compliant outcomes for budgets from ₹2L to ₹25L.
            </p>
            <button
              onClick={onOpenCSR}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl text-xs transition"
            >
              Open CSR Calculator
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
              Child Education
            </span>
            <h4 className="text-xl font-extrabold text-slate-900">Donate for Child Education</h4>
            <p className="text-xs text-slate-600">
              Sponsor books, digital tablets, and school supplies for underprivileged children in Maharashtra.
            </p>
            <button
              onClick={onOpenDonate}
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs shadow-md transition flex items-center justify-center space-x-1.5"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
            </button>
          </div>

        </div>
      </section>

      {/* Featured Faculty Spotlight - Clean Cards without Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Expert Faculty & Mentors</h2>
          <h3 className="text-3xl font-extrabold text-slate-900">Guided by Experienced Mentors</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACULTY_MEMBERS.map((fac, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-amber-400 hover:shadow-md transition space-y-3">
              <div className="flex justify-between items-start">
                <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  {fac.category}
                </span>
                <GraduationCap className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">{fac.name}</h4>
                <p className="text-xs text-amber-800 font-bold mt-0.5">{fac.role}</p>
              </div>
              <p className="text-xs text-slate-600 border-t border-slate-100 pt-2 leading-relaxed">
                <strong className="text-slate-700">Specialization:</strong> {fac.specialization}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Official Address & Legal Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 shadow-lg">
          <div className="space-y-1">
            <h4 className="text-lg font-extrabold">SHIKSHA GYAN FOUNDATION HEADQUARTERS</h4>
            <p className="text-xs text-amber-100">
              {FOUNDATION_INFO.address.line1}, {FOUNDATION_INFO.address.street}, {FOUNDATION_INFO.address.location} – {FOUNDATION_INFO.address.pincode}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-slate-950 text-white font-bold rounded-xl text-xs hover:bg-slate-900 transition"
            >
              Get In Touch
            </button>
            <button
              onClick={() => onNavigate('about-legal')}
              className="px-5 py-2.5 bg-white text-slate-950 font-bold rounded-xl text-xs hover:bg-slate-100 transition shadow-sm"
            >
              View Registration
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
