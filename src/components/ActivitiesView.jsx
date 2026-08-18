import React, { useState } from 'react';
import { 
  Briefcase, Heart, BookOpen, Award, MapPin, Calendar, CheckCircle2 
} from 'lucide-react';
import { JOB_FAIRS, HISTORICAL_SEMINARS, HEALTH_CAMPS } from '../data/foundationData';

export default function ActivitiesView({ activeSub, onNavigate }) {
  const [selectedYear, setSelectedYear] = useState('All');

  const years = ['All', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2015', '2014', '2013', '2012'];

  const filteredSeminars = selectedYear === 'All' 
    ? HISTORICAL_SEMINARS 
    : HISTORICAL_SEMINARS.filter(s => s.year.includes(selectedYear));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16 bg-white">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest">
          Documented Impact & Activity Matrix
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Activities, Seminars & Community Welfare Archive
        </h1>
        <p className="text-slate-600 text-sm">
          Historical record of career guidance seminars, municipal job fairs, book exhibitions, blood donation, and eye check-up camps from 2012 through 2023.
        </p>
      </div>

      {/* Point 25: Job Fairs & Employment with Rich Images */}
      <section className="space-y-6">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Employability Outreach</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Job Fairs & Employment Exchange Participation</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JOB_FAIRS.map((jf, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-amber-400 hover:shadow-md transition">
              <img src={jf.image} alt={jf.title} className="w-full h-36 object-cover" />
              <div className="p-5 space-y-2">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-700">
                    {jf.location}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900">{jf.title}</h4>
                <p className="text-xs text-slate-600 border-t border-slate-100 pt-2">{jf.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Point 27: Health & Wellness Camps with Photos */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Grassroots Community Health</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Health Check-ups, Blood Donation & Eye Camps</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_CAMPS.map((hc, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm space-y-3 p-5">
              <img src={hc.image} alt={hc.title} className="w-full h-36 object-cover rounded-xl" />
              <h4 className="text-lg font-bold text-slate-900">{hc.title}</h4>
              <p className="text-xs text-slate-600">{hc.detail}</p>
              <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-100">
                <span className="text-[10px] text-slate-500 font-bold">Locations:</span>
                {hc.locations.map((loc, lIdx) => (
                  <span key={lIdx} className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 font-bold text-[10px] border border-amber-200">
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Point 23 & 26: Seminars & Outreach Archive (2017 to 2023) */}
      <section className="space-y-6">
        <div className="border-l-4 border-amber-500 pl-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Historical Archive</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Educational Seminars & Book Exhibitions</h3>
          </div>

          {/* Mobile Select Dropdown */}
          <div className="block sm:hidden w-full px-1">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-800 font-extrabold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  Year: {yr === 'All' ? 'All Years' : yr}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Filter Buttons */}
          <div className="hidden sm:flex flex-wrap gap-1.5">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition border ${
                  selectedYear === yr 
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSeminars.map((sem, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-400 hover:shadow-md transition flex items-center space-x-4 shadow-sm">
              <img src={sem.image} alt={sem.venue} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
              <div className="space-y-1">
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-extrabold text-[10px] inline-block">
                  Year {sem.year}
                </span>
                <h4 className="text-base font-bold text-slate-900">{sem.venue}</h4>
                <p className="text-xs text-amber-700 font-semibold">{sem.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
