import React, { useState } from 'react';
import { X, Building2, Calculator, CheckCircle2, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData';

export default function CSRCalculatorModal({ isOpen, onClose, onNavigateToContact }) {
  const [budgetBracket, setBudgetBracket] = useState('5lakh');

  if (!isOpen) return null;

  const metrics = {
    '2lakh': {
      label: "₹2,000,00 (2 Lakhs)",
      beneficiaries: "80 Children / Youth",
      deliverables: ["80 Child Education Kits", "2 Digital Awareness Workshops", "1 Health Checkup Drive", "Full CSR Compliance Audit Report"]
    },
    '5lakh': {
      label: "₹5,000,00 (5 Lakhs)",
      beneficiaries: "220 Beneficiaries",
      deliverables: ["200 Child Educational Kits", "1 Dedicated Rural Vocational Batch (Hospitality/Safety)", "2 Blood Donation & Eye Camps", "Custom Corporate Branding & CSR Impact Document"]
    },
    '10lakh': {
      label: "₹10,00,000 (10 Lakhs)",
      beneficiaries: "500+ Beneficiaries",
      deliverables: ["Full Digital Literacy Lab Setup in Dombivli/Thane", "50 Girls Career & Skilling Scholarships", "5 Community Health Wellness Drives", "Detailed Impact Assessment & Media Coverage"]
    },
    '25lakh': {
      label: "₹25,00,000 (25 Lakhs)",
      beneficiaries: "1,500+ Beneficiaries",
      deliverables: ["Permanent Shiksha Gyan Vocational Skilling Center Sponsorship", "100 Competitive Exam Prep Grants for Underprivileged Aspirants", "Comprehensive CSR Project Execution & Audited Financial Statements"]
    }
  };

  const selected = metrics[budgetBracket];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">CSR Impact & Budget Estimator</h3>
              <p className="text-xs text-slate-600">Shiksha Gyan Foundation Corporate Partnership Portal</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-700 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          
          {/* Budget Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Proposed CSR Grant Budget
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.keys(metrics).map((bKey) => (
                <button
                  key={bKey}
                  onClick={() => setBudgetBracket(bKey)}
                  className={`py-2.5 px-2 rounded-xl font-bold text-xs border transition ${
                    budgetBracket === bKey 
                      ? 'bg-amber-500 text-white border-amber-500 shadow-md' 
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {metrics[bKey].label.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Project Impact Box */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs text-slate-600 font-semibold">Estimated Target Impact</span>
                <h4 className="text-xl font-extrabold text-amber-700">{selected.beneficiaries}</h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-600 font-semibold">CSR Grant Amount</span>
                <h4 className="text-base font-bold text-slate-900">{selected.label}</h4>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Deliverables & Outcomes</h5>
              <div className="grid grid-cols-1 gap-2">
                {selected.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance Assurance */}
          <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs text-slate-700 flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span>
              All CSR projects comply with Section 135 of the Companies Act, 2013. Audited reports and Society Registration ({FOUNDATION_INFO.registration.society.number}) provided.
            </span>
          </div>

          {/* Action Button */}
          <div className="pt-1 flex justify-end space-x-3">
            <button
              onClick={() => { onClose(); onNavigateToContact(); }}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center space-x-2"
            >
              <span>Submit CSR Proposal Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
