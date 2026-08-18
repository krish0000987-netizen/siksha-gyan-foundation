import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Award } from 'lucide-react';

export default function DesignAptitudeQuizModal({ isOpen, onClose, onNavigateToDesign }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      id: 1,
      title: "Visual Spatial Reasoning",
      question: "When folded along the dotted grid, which 3D geometric shape does this flattened pattern construct?",
      options: [
        "Symmetrical Octahedron with tapered apex",
        "Truncated Triangular Prism",
        "Isometric Dodecahedron",
        "Conical Cylinder with dual faces"
      ],
      correct: 0,
      field: "Architecture & Spatial Design (NATA / JEE Paper 2)"
    },
    {
      id: 2,
      title: "Color Harmony & Product Aesthetics",
      question: "Which color combination evokes safety, trust, and cleanliness for a medical wellness product interface?",
      options: [
        "Vibrant Yellow and Neon Green",
        "Deep Cyan Blue, Clean Teal and Crisp Pure White",
        "Dark Maroon and Olive Green",
        "Metallic Copper and Bright Purple"
      ],
      correct: 1,
      field: "Industrial Product & UX Design (NID / UCEED)"
    },
    {
      id: 3,
      title: "Fashion & Textile Aptitude",
      question: "Which drape technique creates fluid vertical folds using lightweight natural silk fabric?",
      options: [
        "Rigid Pleating",
        "Bias Cut Cascading Drape",
        "Overlock Stitching",
        "Horizontal Quilting"
      ],
      correct: 1,
      field: "Fashion Design & Textile Arts (NIFT)"
    }
  ];

  const handleSelectOption = (qIdx, optionIdx) => {
    setAnswers({ ...answers, [qIdx]: optionIdx });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const currentQ = questions[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Shiksha Gyan Design Aptitude Simulator</h3>
              <p className="text-xs text-slate-600">Sample evaluation for NID • NIFT • UCEED • NATA</p>
            </div>
          </div>
          <button
            onClick={() => { setIsCompleted(false); setCurrentStep(0); onClose(); }}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        {!isCompleted ? (
          <div className="p-6 space-y-6">
            
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between text-xs text-slate-600 mb-1 font-semibold">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span className="text-amber-800 font-bold">{currentQ.field}</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider">{currentQ.title}</h4>
              <p className="text-base font-semibold text-slate-900">{currentQ.question}</p>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(currentStep, idx)}
                  className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition flex items-center justify-between ${
                    answers[currentStep] === idx 
                      ? 'bg-amber-50 border-amber-400 text-slate-900 shadow-sm font-semibold' 
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{opt}</span>
                  {answers[currentStep] === idx && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </button>
              ))}
            </div>

            {/* Next / Finish Button */}
            <div className="pt-2 flex justify-end">
              <button
                disabled={answers[currentStep] === undefined}
                onClick={handleNext}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-white font-bold rounded-xl shadow-md transition flex items-center space-x-2"
              >
                <span>{currentStep === questions.length - 1 ? "Submit Assessment" : "Next Question"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Result Summary */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto border border-amber-300">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Strong Creative Potential Detected!</h3>
            <p className="text-sm text-slate-700 max-w-md mx-auto">
              Your choices reflect high spatial awareness and visual aptitude suited for <strong className="text-amber-700">NID, NIFT, and UCEED Design Entrance Pathways</strong>.
            </p>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 text-left space-y-2 max-w-md mx-auto">
              <h5 className="font-bold text-amber-800 uppercase">Recommended Next Steps:</h5>
              <p>1. Join Shiksha Gyan Foundation’s 3-Step Aptitude & entrance coaching.</p>
              <p>2. Prepare NID DAT & NIFT studio test drawing samples.</p>
              <p>3. Book 1-on-1 counseling session with our creative mentors.</p>
            </div>

            <div className="pt-2 flex justify-center space-x-3">
              <button
                onClick={() => { setIsCompleted(false); setCurrentStep(0); onClose(); onNavigateToDesign(); }}
                className="px-6 py-2.5 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition shadow-md"
              >
                Explore Full Design Program
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
