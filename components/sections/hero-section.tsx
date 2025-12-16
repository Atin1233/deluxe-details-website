"use client";

import React, { memo, useEffect, useState, useRef } from "react";
import { FlipWords } from "@/components/ui/flip-words";

// Noisy grid background with white lines
const NoiseGridBackground = memo(function NoiseGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base grid pattern */}
      <div className="absolute inset-0 hero-grid-pattern" />
      
      {/* Animated grid lines overlay */}
      <div className="absolute inset-0">
        <svg 
          className="absolute inset-0 w-full h-full opacity-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Grid pattern */}
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke="rgba(255,255,255,0.05)" 
                strokeWidth="0.5"
              />
            </pattern>
            <pattern id="largeGrid" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="url(#smallGrid)"/>
              <path 
                d="M 200 0 L 0 0 0 200" 
                fill="none" 
                stroke="rgba(255,255,255,0.08)" 
                strokeWidth="1"
              />
            </pattern>
            
            {/* Glow filter for accent lines */}
            <filter id="gridGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main grid */}
          <rect width="100%" height="100%" fill="url(#largeGrid)" />
          
          {/* Accent horizontal lines with glow */}
          <g filter="url(#gridGlow)" className="animate-grid-pulse">
            <line x1="0" y1="25%" x2="100%" y2="25%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </g>
          
          {/* Accent vertical lines with glow */}
          <g filter="url(#gridGlow)" className="animate-grid-pulse-delayed">
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </g>
          
          {/* Grid intersection highlights */}
          <g className="animate-grid-intersect">
            <circle cx="25%" cy="25%" r="3" fill="rgba(255,255,255,0.1)" />
            <circle cx="75%" cy="25%" r="2" fill="rgba(255,255,255,0.08)" />
            <circle cx="25%" cy="75%" r="2" fill="rgba(255,255,255,0.08)" />
            <circle cx="75%" cy="75%" r="3" fill="rgba(255,255,255,0.1)" />
            <circle cx="50%" cy="50%" r="4" fill="rgba(255,255,255,0.06)" />
          </g>
        </svg>
      </div>
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
      
      {/* Secondary film grain noise */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none animate-noise"
        style={{
          backgroundImage: 'url(https://assets.aceternity.com/noise.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
      
      {/* Subtle gradient overlays for depth */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)',
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.02) 0%, transparent 50%)',
        }}
      />
    </div>
  );
});

// Animated corner brackets
const CornerBrackets = memo(function CornerBrackets() {
  return (
    <>
      {/* Top left bracket */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-16 md:left-16 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/30 to-transparent" />
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white/30 to-transparent" />
      </div>
      
      {/* Top right bracket */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-16 md:right-16 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-white/30 to-transparent" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-white/30 to-transparent" />
      </div>
      
      {/* Bottom left bracket */}
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-16 md:left-16 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-white/30 to-transparent" />
      </div>
      
      {/* Bottom right bracket */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-16 md:right-16 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-white/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-white/30 to-transparent" />
      </div>
    </>
  );
});

export function HeroSection() {
  // Simple mount animation state
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Noisy grid background */}
      <NoiseGridBackground />
      
      {/* Corner brackets for Swiss design feel */}
      <CornerBrackets />

      {/* Royal Blue / Cyan Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 102, 255, 0.15) 0%, rgba(0, 212, 255, 0.1) 50%, transparent 100%)',
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Main content - using CSS transitions instead of Framer Motion where possible */}
      <div className="relative z-10 swiss-container w-full">
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          {/* Subtitle */}
          <p
            className="font-nohemi text-sm md:text-base font-medium uppercase tracking-[0.3em] text-white/50 mb-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
            }}
          >
            Premium Mobile Car Detailing
          </p>

          {/* Main headline */}
          <h1
            className="font-harmond text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] text-white mb-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s',
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0066ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(0, 212, 255, 0.3)',
            }}
          >
            DELUXE
            <br />
            DETAILS
          </h1>

          {/* Slogan */}
          <div
            className="flex flex-col items-center gap-4 mt-4 md:mt-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s',
            }}
          >
            <p className="font-nohemi text-xl md:text-2xl lg:text-3xl text-white/80 font-medium">
              We bring the shine to you.
            </p>
            <p className="font-nohemi text-base md:text-lg text-white/60">
              Serving Central New Jersey
            </p>
            
            {/* Phone CTA */}
            <a
              href="tel:+17326770331"
              className="mt-4 sm:mt-6 inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-nohemi text-base sm:text-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,102,255,0.5)] hover:scale-105 active:scale-95 touch-manipulation"
              data-cursor-hover
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (732) 677-0331
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

