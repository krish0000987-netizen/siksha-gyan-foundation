import React, { useState } from 'react';
import { X, Heart, CheckCircle2, ShieldCheck, Lock, Sparkles, Building, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FOUNDATION_INFO } from '../data/foundationData';

export default function DonationModal({ isOpen, onClose }) {
  const [selectedCause, setSelectedCause] = useState('child-education');
  const [amount, setAmount] = useState('2500');
  const [customAmount, setCustomAmount] = useState('');
  const [donorDetails, setDonorDetails] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const presetAmounts = ['1000', '2500', '5000', '10000'];

  const causes = [
    { id: 'child-education', title: 'Donate for Child Education', desc: 'Sponsor uniforms, learning books, and digital tablets for an underprivileged student.' },
    { id: 'girls-career', title: "Girls' Career & Skill Sponsorship", desc: 'Provide vocational training for young women seeking financial independence.' },
    { id: 'digital-literacy', title: 'Digital & Financial Literacy Drive', desc: 'Setup digital awareness workstations in underserved Dombivli & Thane communities.' },
    { id: 'health-camp', title: 'Community Health & Eye Checkup Camp', desc: 'Fund free blood testing kits and senior citizen eye care spectacles.' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti trigger:', err);
    }
  };

  const finalAmount = amount === 'custom' ? customAmount : amount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-amber-500/10 via-amber-50 to-white border-b border-slate-200 flex justify-between items-start">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
              <Heart className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
              <span>Official Support Portal</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Donate to Shiksha Gyan Foundation</h3>
            <p className="text-xs text-slate-600 mt-1">
              Registered NGO Society (MHA/521/2020) & Trust (F43060) • Thane / Dombivli
            </p>
          </div>
          <button
            onClick={() => { setIsSubmitted(false); onClose(); }}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            
            {/* Cause Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Initiative / Cause
              </label>
              <div className="grid grid-cols-1 gap-2">
                {causes.map((c) => (
                  <label
                    key={c.id}
                    className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start space-x-3 ${
                      selectedCause === c.id 
                        ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-sm' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="cause"
                      checked={selectedCause === c.id}
                      onChange={() => setSelectedCause(c.id)}
                      className="mt-1 accent-amber-600"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">{c.title}</h5>
                      <p className="text-xs text-slate-600">{c.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Donation Amount Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Choose Donation Amount (INR)
              </label>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setAmount(amt); setCustomAmount(''); }}
                    className={`py-2.5 rounded-xl font-extrabold text-sm border transition ${
                      amount === amt 
                        ? 'bg-amber-500 text-white border-amber-500 shadow-md' 
                        : 'bg-white border-slate-200 text-slate-800 hover:border-amber-300'
                    }`}
                  >
                    ₹{Number(amt).toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
              
              <div className="mt-2">
                <input
                  type="number"
                  placeholder="Or Enter Custom Amount (₹)"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setAmount('custom'); }}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-sm"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Donor Details</h5>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={donorDetails.name}
                  onChange={(e) => setDonorDetails({ ...donorDetails, name: e.target.value })}
                  className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-sm"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={donorDetails.email}
                  onChange={(e) => setDonorDetails({ ...donorDetails, email: e.target.value })}
                  className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-sm"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile Phone *"
                  value={donorDetails.phone}
                  onChange={(e) => setDonorDetails({ ...donorDetails, phone: e.target.value })}
                  className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-sm"
                />
                <input
                  type="text"
                  placeholder="PAN Card (Optional)"
                  value={donorDetails.pan}
                  onChange={(e) => setDonorDetails({ ...donorDetails, pan: e.target.value })}
                  className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-sm"
                />
              </div>
            </div>

            {/* Security Assurance */}
            <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-[11px] text-amber-950 flex items-center space-x-2 font-medium">
              <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>Official 80G tax receipt will be issued to {donorDetails.email || 'your email'} upon verification.</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-base rounded-xl shadow-md transition flex items-center justify-center space-x-2"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Proceed to Support ₹{Number(finalAmount || 2500).toLocaleString('en-IN')}</span>
            </button>

          </form>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto border border-amber-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Thank You, {donorDetails.name || 'Generous Donor'}!</h3>
            <p className="text-sm text-slate-700 max-w-md mx-auto">
              Your pledge of <strong className="text-amber-700">₹{Number(finalAmount || 2500).toLocaleString('en-IN')}</strong> to <span className="text-slate-900 font-bold">Shiksha Gyan Foundation</span> will help educate and transform underprivileged children in Maharashtra.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 text-left max-w-md mx-auto space-y-1">
              <p><strong className="text-slate-900">Reference:</strong> SGF-DON-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p><strong className="text-slate-900">Official Contact:</strong> {FOUNDATION_INFO.phones[0]} / {FOUNDATION_INFO.email}</p>
              <p><strong className="text-slate-900">Receipt:</strong> Sent to {donorDetails.email || 'your registered contact'}</p>
            </div>
            <button
              onClick={() => { setIsSubmitted(false); onClose(); }}
              className="px-6 py-2.5 bg-amber-500 text-white font-bold rounded-xl shadow-md hover:bg-amber-600 transition inline-block"
            >
              Close Confirmation
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
