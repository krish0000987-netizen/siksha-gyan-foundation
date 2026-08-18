import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { HERO_SLIDES, getWhatsAppDonationLink } from '../data/foundationData';

export default function HeroSlider({ onNavigate, onOpenDonate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 3000); // 3-second slideshow
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
      className="relative w-full h-[620px] md:h-[680px] overflow-hidden bg-slate-950 group"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slide Background Images */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Ambient Glow */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] ease-out group-hover:scale-100"
          />
          {/* Dark Glass Gradients for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        </div>
      ))}

      {/* Slide Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 flex flex-col justify-center">
        <div className="max-w-2xl space-y-5 animate-in fade-in slide-in-from-left duration-700">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase shadow-lg shadow-amber-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{slide.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            {slide.title.split(" ").map((word, i) => (
              <span key={i} className={i % 3 === 1 ? 'gradient-text-gold inline-block' : 'inline-block mr-2'}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            {slide.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap gap-4 items-center">
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
              <button
                onClick={() => onNavigate(slide.ctaTarget)}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-xl shadow-amber-500/25 flex items-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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
          <div className="pt-4 flex items-center space-x-6 text-xs text-slate-400 border-t border-slate-800/80">
            <span className="font-semibold text-slate-300">Mandate:</span>
            <span className="text-amber-400 font-bold">• Unreached</span>
            <span className="text-amber-400 font-bold">• Uncared</span>
            <span className="text-amber-400 font-bold">• Unattended</span>
          </div>

        </div>
      </div>

      {/* 3-Second Automatic Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900 z-30">
        <div 
          key={currentSlide}
          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 animate-slide-progress"
        />
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center space-x-3">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white hover:bg-amber-500 hover:text-slate-950 transition shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
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
  );
}
