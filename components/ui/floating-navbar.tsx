"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/lenis-provider";
import { MagneticButton } from "@/components/ui/magnetic-button";

// Logo component with fallback
const LogoImage = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-32 h-32 mx-auto">
      {!imgError ? (
        <img
          src="/logo.jpg"
          alt="Deluxe Details Logo"
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
          onLoad={() => setImgError(false)}
        />
      ) : (
        <div 
          className="w-full h-full flex items-center justify-center rounded-lg"
          style={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
          }}
        >
          <span className="font-harmond text-2xl font-bold text-white">DD</span>
        </div>
      )}
    </div>
  );
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lenis = useLenis();

  // Smooth scroll to section using Lenis
  const scrollToSection = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    if (href === "#") {
      // Scroll to top
      lenis?.scrollTo(0, { duration: 1.2 });
      setIsOpen(false);
      return;
    }
    
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement && lenis) {
      lenis.scrollTo(targetElement, {
        offset: -100,
        duration: 1.2,
      });
      setIsOpen(false);
    }
  }, [lenis]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-6 right-6 z-[6000] w-14 h-14",
          "flex flex-col items-center justify-center gap-1.5",
          "bg-black/60 backdrop-blur-xl border border-white/10 rounded-full",
          "transition-all duration-300 hover:bg-black/80 hover:border-accent-cyan/50",
          "group"
        )}
        aria-label="Toggle navigation"
      >
        <span
          className={cn(
            "w-6 h-0.5 bg-white transition-all duration-300 origin-center",
            isOpen && "rotate-45 translate-y-2"
          )}
        />
        <span
          className={cn(
            "w-6 h-0.5 bg-white transition-all duration-300",
            isOpen && "opacity-0"
          )}
        />
        <span
          className={cn(
            "w-6 h-0.5 bg-white transition-all duration-300 origin-center",
            isOpen && "-rotate-45 -translate-y-2"
          )}
        />
      </button>

      {/* Side Navigation Panel */}
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 right-0 h-full w-80 md:w-96 z-[5000]",
          "bg-black/95 backdrop-blur-2xl border-l border-white/10",
          "transition-transform duration-500 ease-out-expo",
          "overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Background gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%)',
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-8 border-b border-white/10">
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "#")}
              className="block"
            >
              <LogoImage />
            </a>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 px-8 py-12 space-y-2">
            {navItems.map((navItem, idx) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                onClick={(e) => scrollToSection(e, navItem.link)}
                className={cn(
                  "block px-6 py-4 rounded-xl",
                  "font-nohemi text-lg font-medium uppercase tracking-wider",
                  "text-white/60 hover:text-white",
                  "bg-white/5 hover:bg-gradient-to-r hover:from-accent-blue/20 hover:to-accent-cyan/20",
                  "border border-white/5 hover:border-accent-cyan/30",
                  "transition-all duration-300",
                  "group relative overflow-hidden"
                )}
                style={{
                  animationDelay: `${idx * 50}ms`,
                  animation: isOpen ? 'slideInRight 0.5s ease-out forwards' : 'none',
                }}
              >
                <span className="relative z-10">{navItem.name}</span>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-accent-blue/0 via-accent-cyan/0 to-accent-blue/0 group-hover:from-accent-blue/10 group-hover:via-accent-cyan/10 group-hover:to-accent-blue/10 transition-all duration-500"
                />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="p-8 border-t border-white/10">
            <MagneticButton
              as="a"
              href="tel:+17326770331"
              strength={0.35}
              className="w-full"
            >
              <span className={cn(
                "w-full px-6 py-4 rounded-xl block text-center",
                "bg-gradient-to-r from-accent-blue to-accent-cyan text-white",
                "font-nohemi text-base font-semibold uppercase tracking-wide",
                "hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300",
                "flex items-center justify-center gap-2"
              )}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (732) 677-0331
              </span>
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className={cn(
            "fixed inset-0 bg-black/60 backdrop-blur-sm z-[4999]",
            "transition-opacity duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
