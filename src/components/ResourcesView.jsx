import React from 'react';
import { ShieldCheck, FileText, Download, Building, ExternalLink, Lock } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData';

export default function ResourcesView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-white">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest">
          Public Accountability & Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Resources & Transparency Portal
        </h1>
        <p className="text-slate-600 text-sm">
          Access official society registration, public trust certificates, governance reports, newsletters, and bank account information.
        </p>
      </div>

      {/* Point 32: Legal Registration Documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm">
          <div className="flex items-center space-x-3 text-amber-700">
            <ShieldCheck className="w-6 h-6" />
            <h3 className="text-xl font-bold text-slate-900">Society Registration Certificate</h3>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700 shadow-sm">
            <p><strong>Registration No:</strong> {FOUNDATION_INFO.registration.society.number}</p>
            <p><strong>Registration Date:</strong> {FOUNDATION_INFO.registration.society.date}</p>
            <p><strong>Act:</strong> Societies Registration Act, 1860</p>
            <p><strong>Status:</strong> Active & Compliant</p>
          </div>
          <button className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition shadow-sm">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>View Society Certificate Record</span>
          </button>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm">
          <div className="flex items-center space-x-3 text-amber-700">
            <ShieldCheck className="w-6 h-6" />
            <h3 className="text-xl font-bold text-slate-900">Trust Registration Certificate</h3>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700 shadow-sm">
            <p><strong>Trust Reg No:</strong> {FOUNDATION_INFO.registration.trust.number}</p>
            <p><strong>Registration Date:</strong> {FOUNDATION_INFO.registration.trust.date}</p>
            <p><strong>Act:</strong> Bombay Public Trusts Act, 1950</p>
            <p><strong>Status:</strong> Active & Compliant</p>
          </div>
          <button className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition shadow-sm">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>View Public Trust Certificate Record</span>
          </button>
        </div>

      </div>

      {/* Point 32: Official Bank Details Placeholder Cards */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-500 pl-4">
          <h2 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Financial Transparency</h2>
          <h3 className="text-2xl font-extrabold text-slate-900">Official Foundation Bank Details</h3>
        </div>

        <p className="text-xs text-slate-600">
          Note: Bank details are formatted as official transparent placeholders awaiting final value publication from the board treasurer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-sm">
            <span className="text-[10px] text-slate-500 uppercase font-bold">Bank Name</span>
            <p className="text-sm font-bold text-slate-900">{FOUNDATION_INFO.bankDetails.bankName}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-sm">
            <span className="text-[10px] text-slate-500 uppercase font-bold">Branch Address</span>
            <p className="text-sm font-bold text-slate-900">{FOUNDATION_INFO.bankDetails.branchAddress}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-sm">
            <span className="text-[10px] text-slate-500 uppercase font-bold">Account Number</span>
            <p className="text-sm font-bold text-slate-900">{FOUNDATION_INFO.bankDetails.accountNumber}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-sm">
            <span className="text-[10px] text-slate-500 uppercase font-bold">IFSC Code</span>
            <p className="text-sm font-bold text-slate-900">{FOUNDATION_INFO.bankDetails.ifscCode}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-sm">
            <span className="text-[10px] text-slate-500 uppercase font-bold">MICR Code</span>
            <p className="text-sm font-bold text-slate-900">{FOUNDATION_INFO.bankDetails.micrCode}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
