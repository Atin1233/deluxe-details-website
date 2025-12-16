"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

// Optimized dotted glow background - only draws when visible
const DottedGlowBackground = memo(function DottedGlowBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = canvasRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const ctx = el.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stopped = false;
    let isVisible = false;

    const gap = 16; // Increased gap for fewer dots
    const radius = 1;
    const opacity = 0.4;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      el.width = Math.floor(width);
      el.height = Math.floor(height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    // Intersection observer - only animate when visible
    const io = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? false;
        if (isVisible && !raf) {
          raf = requestAnimationFrame(draw);
        }
      },
      { threshold: 0.1 }
    );
    io.observe(container);

    let dots: { x: number; y: number; phase: number }[] = [];

    const regenDots = () => {
      dots = [];
      const { width, height } = container.getBoundingClientRect();
      const cols = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gap;
          const y = j * gap;
          const phase = Math.random() * Math.PI * 2;
          dots.push({ x, y, phase });
        }
      }
    };

    regenDots();

    const draw = (now: number) => {
      if (stopped || !isVisible) {
        raf = 0;
        return;
      }
      
      const { width, height } = container.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0066ff";

      const time = now / 2000; // Slower animation
      for (const d of dots) {
        const mod = (time + d.phase) % 2;
        const lin = mod < 1 ? mod : 2 - mod;
        const a = 0.1 + 0.5 * lin;

        ctx.globalAlpha = a * opacity;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "absolute", inset: 0 }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
});

// Simple CSS-based flipping email
function FlippingEmail({ email }: { email: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative inline-block cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      data-cursor-hover
    >
      <div
        className="relative preserve-3d transition-transform duration-300"
        style={{
          transform: isFlipped ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="font-nohemi text-lg md:text-xl text-white/60 hover:text-white transition-colors backface-hidden"
        >
          Email Me →
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 font-nohemi text-lg md:text-xl text-white backface-hidden"
          style={{ transform: "rotateX(180deg)" }}
        >
          {email}
        </div>
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-black"
    >
      {/* Dotted glow background */}
      <DottedGlowBackground className="pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]" />

      {/* Gradient glow from center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 50%, transparent 100%)',
        }}
      />

      <div className="swiss-container relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center justify-center text-center w-full">
          {/* Section label */}
          <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-8">
            Let&apos;s Connect
          </span>

          {/* Big CTA headline - Massive Harmond Typography */}
          <h2 className="font-harmond text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[12vw] font-bold tracking-tight text-white leading-[0.8] mb-8"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #0066ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: "0 0 100px rgba(0,212,255,0.3), 0 0 200px rgba(0,102,255,0.2)",
            }}
          >
            BOOK
            <br />
            NOW
          </h2>

          {/* Subtext */}
          <p className="font-nohemi text-lg md:text-xl text-white/50 max-w-lg mb-12">
            Ready to give your vehicle the premium treatment it deserves?
            Contact us today to schedule your mobile detailing service.
          </p>

          {/* Phone CTA Button with Magnetic Effect */}
          <MagneticButton
            as="a"
            href="tel:+17326770331"
            strength={0.4}
            className="group"
          >
            <span className={cn(
              "inline-flex items-center gap-3 px-8 py-4 rounded-full",
              "bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-nohemi text-base font-semibold uppercase tracking-wide",
              "transition-all duration-300",
              "group-hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] group-hover:scale-105"
            )}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (732) 677-0331
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </MagneticButton>

          {/* Email flip */}
          <div className="mt-12">
            <FlippingEmail email="kaseygatchalian@gmail.com" />
          </div>

          {/* Social links with magnetic effect */}
          <div className="mt-16 flex items-center gap-6 flex-wrap justify-center">
            <MagneticButton
              as="a"
              href="https://www.instagram.com/deluxe._.details"
              target="_blank"
              rel="noopener noreferrer"
              strength={0.5}
            >
              <span className="font-nohemi text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-200 px-2 py-1">
                Instagram
              </span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href="https://www.facebook.com/deluxe.details"
              target="_blank"
              rel="noopener noreferrer"
              strength={0.5}
            >
              <span className="font-nohemi text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-200 px-2 py-1">
                Facebook
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 w-full py-8 border-t border-white/10">
        <div className="swiss-container">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="font-nohemi text-xs text-white/40">
              © {new Date().getFullYear()} Deluxe Details. All rights reserved.
            </p>
            <p className="font-nohemi text-xs text-white/40">
              Premium Mobile Car Detailing | Serving Central New Jersey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
