import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { HERO_SLIDES, getWhatsAppDonationLink, getWhatsAppInquiryLink } from '../data/foundationData';

export default function HeroSlider({ onNavigate, onOpenDonate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 4000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div 
      className="relative w-full bg-slate-900 group overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* ---------------------------------------------------- */}
      {/* MOBILE LAYOUT (sm:hidden) - Clean Highlighted Card   */}
      {/* ---------------------------------------------------- */}
      <div className="block sm:hidden bg-slate-950 p-3 pb-5 space-y-3">
        {/* Top Image Banner with Badge & Slide Indicators */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md border border-slate-800">
          {HERO_SLIDES.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
          
          {/* Badge Tag on top of Image */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 text-[10px] font-black tracking-wide uppercase shadow-lg backdrop-blur-sm flex items-center space-x-1">
              <Sparkles className="w-3 h-3 fill-slate-950" />
              <span>{slide.badge}</span>
            </span>
          </div>

          {/* Minimal Controls on Image */}
          <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center space-x-1 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 text-white text-[10px]">
            <span>{currentSlide + 1}/{HERO_SLIDES.length}</span>
            <button onClick={handlePrev} className="p-1 hover:text-amber-400" aria-label="Previous">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button onClick={handleNext} className="p-1 hover:text-amber-400" aria-label="Next">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Ultra Minimal White Text Card */}
        <div className="bg-white border border-amber-300 shadow-md rounded-2xl p-3.5 space-y-2 text-slate-900">
          
          {/* Header Row: Title & Category Badge */}
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-base font-extrabold text-slate-950 leading-snug">
              {slide.mobileTitle || slide.title}
            </h2>
            <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-200 flex-shrink-0">
              {slide.badge}
            </span>
          </div>

          {/* Minimal Subtitle Text */}
          <p className="text-xs text-slate-600 font-medium leading-normal">
            {slide.mobileSubtitle || slide.subtitle}
          </p>

          {/* Action Button(s) */}
          <div className="pt-1 flex gap-2">
            {slide.ctaTarget === 'donate' ? (
              <a
                href={getWhatsAppDonationLink("Child Education")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-sm text-center font-black"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <>
                <button
                  onClick={() => onNavigate(slide.ctaTarget)}
                  className="flex-1 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center space-x-1 border border-slate-200 text-center"
                >
                  <span>Info</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <a
                  href={getWhatsAppInquiryLink(slide.mobileTitle || slide.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-750 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1 shadow-sm text-center"
                >
                  <span>WhatsApp Inquiry</span>
                </a>
              </>
            )}
          </div>

        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* DESKTOP / TABLET LAYOUT (hidden sm:block)            */}
      {/* ---------------------------------------------------- */}
      <div className="hidden sm:relative sm:flex w-full min-h-[620px] md:h-[680px] items-center">
        {/* Background Images */}
        {HERO_SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
          </div>
        ))}

        {/* Content Box */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 py-12">
          <div className="max-w-2xl bg-slate-950/75 backdrop-blur-xl p-8 rounded-3xl border border-amber-500/30 shadow-2xl space-y-5 animate-in fade-in slide-in-from-left duration-700">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{slide.badge}</span>
            </div>

            {/* Desktop Headline with Clean Space Handling */}
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.15]">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-slate-200">
              <p className="text-base text-slate-200 leading-relaxed font-normal">
                {slide.subtitle}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {slide.ctaTarget === 'donate' ? (
                <a
                  href={getWhatsAppDonationLink("Child Education")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-xl shadow-amber-500/25 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <>
                  <button
                    onClick={() => onNavigate(slide.ctaTarget)}
                    className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-xl shadow-amber-500/25 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={getWhatsAppInquiryLink(slide.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Inquire via WhatsApp</span>
                  </a>
                </>
              )}

              <a
                href={getWhatsAppDonationLink("Child Education")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 flex items-center space-x-2 backdrop-blur-md transition"
              >
                <Heart className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                <span>Donate for Child Ed</span>
              </a>
            </div>

            {/* Mandate Bar */}
            <div className="pt-3 flex items-center space-x-6 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="font-semibold text-slate-300">Mandate:</span>
              <span className="text-amber-400 font-bold">• Unreached</span>
              <span className="text-amber-400 font-bold">• Uncared</span>
              <span className="text-amber-400 font-bold">• Unattended</span>
            </div>

          </div>
        </div>

        {/* Desktop Controls */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center space-x-3">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white hover:bg-amber-500 hover:text-slate-950 transition shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white hover:bg-amber-500 hover:text-slate-950 transition shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white transition"
            title={isPlaying ? "Pause Slideshow" : "Resume Slideshow"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Slide Auto Progress Line */}
      <div className="h-1 bg-slate-950 w-full relative z-30">
        <div 
          key={currentSlide}
          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 animate-slide-progress"
          style={{ animationDuration: '4s' }}
        />
      </div>

    </div>
  );
}
