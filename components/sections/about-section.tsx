"use client";

import React, { memo } from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { cn } from "@/lib/utils";

// Simple CSS-based glow text
const GlowText = memo(function GlowText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block transition-all duration-300",
        "hover:text-white",
        className
      )}
      style={{
        textShadow: 'none',
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255,255,255,0.4)';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.textShadow = 'none';
      }}
      data-cursor-hover
    >
      {children}
    </span>
  );
});

export function AboutSection() {
  const features = [
    "Mobile Service",
    "Premium Products",
    "Expert Technicians",
    "Eco-Friendly",
    "Satisfaction Guaranteed",
    "Flexible Scheduling",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="swiss-container relative z-10">
        <div className="swiss-grid">
          {/* Section label */}
          <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-12 md:mb-0">
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              About Us
            </span>
            <div className="mt-4 w-12 h-px bg-gradient-to-r from-accent-blue to-accent-cyan" />
          </div>

          {/* Main content */}
          <div className="col-span-4 md:col-span-6 lg:col-span-9">
            {/* Header */}
            <h2 className="font-harmond text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8">
              <EncryptedText
                text="Premium Mobile Detailing"
                encryptedClassName="text-white/30"
                revealedClassName="bg-gradient-to-r from-white via-accent-cyan to-accent-blue bg-clip-text text-transparent"
                revealDelayMs={40}
              />
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-6 font-nohemi text-lg md:text-xl leading-relaxed text-white/60 max-w-3xl">
              <p>
                At <GlowText className="text-white">Deluxe Details</GlowText>, we bring
                professional car detailing services directly to your location in Central New Jersey.
                No need to drive anywhere—we come to you with all the equipment and premium products
                needed to make your vehicle shine.
              </p>

              <p>
                Our team of expert technicians uses{" "}
                <GlowText className="text-white">premium products and eco-friendly solutions</GlowText>{" "}
                to deliver exceptional results. From full detail packages to quick exterior washes,
                we offer flexible services tailored to your needs.
              </p>

              <p>
                Experience the convenience of mobile detailing with the quality you deserve.
                Your car, your schedule, our expertise.
              </p>
            </div>

            {/* Features grid */}
            <div className="mt-16">
              <h3 className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6">
                Why Choose Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {features.map((feature) => (
                  <span
                    key={feature}
                    className={cn(
                      "px-4 py-2 rounded-full border border-accent-blue/30 bg-accent-blue/5",
                      "font-nohemi text-sm text-white/70",
                      "hover:border-accent-cyan/50 hover:bg-accent-cyan/10 hover:text-white",
                      "transition-all duration-300"
                    )}
                    data-cursor-hover
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "100%", label: "Satisfaction" },
                { value: "Mobile", label: "Service" },
                { value: "Premium", label: "Products" },
                { value: "24/7", label: "Booking" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div 
                    className="font-harmond text-4xl md:text-5xl font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-nohemi text-xs uppercase tracking-widest text-white/40 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
