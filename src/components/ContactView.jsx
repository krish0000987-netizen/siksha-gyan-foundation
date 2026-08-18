import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-white">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact Shiksha Gyan Foundation
        </h1>
        <p className="text-slate-600 text-sm">
          We welcome inquiries regarding child education, competitive coaching, skill development courses, corporate CSR, and NGO partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Official Address & Info */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-slate-900">Official Headquarters</h3>
            
            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-800 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Registered Address</h4>
                  <p className="mt-1 leading-relaxed">
                    {FOUNDATION_INFO.address.line1},<br />
                    {FOUNDATION_INFO.address.street},<br />
                    {FOUNDATION_INFO.address.location} – {FOUNDATION_INFO.address.pincode},<br />
                    {FOUNDATION_INFO.address.state}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-800 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Contact Numbers</h4>
                  <div className="mt-1 space-y-1">
                    {FOUNDATION_INFO.phones.map((phone, idx) => (
                      <p key={idx}>
                        <a href={`tel:${phone}`} className="hover:text-amber-700 transition font-semibold">
                          +91 {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-800 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Email Address</h4>
                  <p className="mt-1">
                    <a href={`mailto:${FOUNDATION_INFO.email}`} className="hover:text-amber-700 transition font-semibold">
                      {FOUNDATION_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-800 flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Official Website</h4>
                  <p className="mt-1">
                    <a href={`http://${FOUNDATION_INFO.website}`} target="_blank" rel="noreferrer" className="hover:text-amber-700 transition font-semibold">
                      {FOUNDATION_INFO.website}
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Location Center Visual */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-4 overflow-hidden relative shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
              alt="Dombivli Thane Center" 
              className="w-full h-44 object-cover rounded-2xl mb-3"
            />
            <div className="text-center">
              <h5 className="font-bold text-slate-900 text-sm">Dombivli (West), Thane</h5>
              <p className="text-xs text-slate-600">Garibacha Wada, Mahatma Phule Road</p>
            </div>
          </div>

        </div>

        {/* Message / Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900">Send Direct Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mandar Rawool"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Inquiry Category</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 shadow-sm"
                    >
                      <option value="Child Education">Donate for Child Education</option>
                      <option value="Competitive Exam">Competitive Exam Prep (UPSC/MPSC)</option>
                      <option value="Design Entrance">Design & Creative Careers (NID/NIFT)</option>
                      <option value="Skill Skilling">Skill Skilling & Placement Support</option>
                      <option value="Corporate CSR">Corporate CSR Partnership</option>
                      <option value="NGO Collaboration">NGO Capacity Building</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Message Details</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe how we can assist you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm rounded-xl shadow-md transition flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Secretary Nitin More</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto border border-amber-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Inquiry Received!</h4>
                <p className="text-xs text-slate-700 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our team led by Secretary Nitin More will respond to {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
