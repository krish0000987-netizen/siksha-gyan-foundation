import React from 'react';
import { Building2, HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData';

export default function CSRView({ onNavigate, onOpenCSR }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-white">
      
      {/* Header Banner - White & Clean Luxury */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-4 relative overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest">
              Corporate & Strategic Alliances
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              CSR Programs & NGO Capacity Building
            </h1>
            <p className="text-slate-700 text-base">
              Shiksha Gyan Foundation partners with corporations, institutions, and grassroots NGOs to deliver high-impact, 80G compliant CSR projects in education, skilling, digital literacy, and community health.
            </p>
            <div className="pt-3">
              <button
                onClick={onOpenCSR}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl shadow-md transition flex items-center space-x-2"
              >
                <Building2 className="w-4 h-4" />
                <span>Launch Interactive CSR Estimator</span>
              </button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" 
              alt="CSR Partnership" 
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Point 19: CSR Programs with Section Images */}
      <section className="space-y-6">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Corporate CSR</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Customized Corporate CSR Solutions</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:border-amber-400 hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80" 
              alt="CSR Projects" 
              className="w-full h-36 object-cover rounded-xl mb-2"
            />
            <h4 className="text-lg font-bold text-slate-900">Customized CSR Projects</h4>
            <p className="text-xs text-slate-600">Tailored CSR project execution aligned with corporate social responsibility mandates under Companies Act Section 135.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:border-amber-400 hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80" 
              alt="School Programs" 
              className="w-full h-36 object-cover rounded-xl mb-2"
            />
            <h4 className="text-lg font-bold text-slate-900">School & College Programs</h4>
            <p className="text-xs text-slate-600">Sponsoring digital classrooms, STEM labs, and entrance coaching for underprivileged school students.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:border-amber-400 hover:shadow-md transition">
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" 
              alt="Vocational Center" 
              className="w-full h-36 object-cover rounded-xl mb-2"
            />
            <h4 className="text-lg font-bold text-slate-900">Skill & Placement Centers</h4>
            <p className="text-xs text-slate-600">Establishing branded vocational skill training centers in urban and rural Maharashtra.</p>
          </div>
        </div>
      </section>

      {/* Point 20: NGO Partnerships & Capacity Building */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">NGO Capacity Building</h2>
          <h3 className="text-2xl font-extrabold text-slate-900">Collaborating with & Empowering Fellow NGOs</h3>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">
          Shiksha Gyan Foundation does not work only directly with end beneficiaries. We actively support smaller grassroots NGOs through <strong>Training Support & Capacity Building</strong>, enabling them to deliver structured career guidance and vocational courses in their respective regions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="text-base font-bold text-slate-900">Trainer-the-Trainer Modules</h4>
            <p className="text-xs text-slate-600">Equipping NGO staff with study materials, competitive exam syllabi, and skill training methodologies.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h4 className="text-base font-bold text-slate-900">Joint Project Execution</h4>
            <p className="text-xs text-slate-600">Partnering on large health camps, job fairs, and blood donation drives across Thane district.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
