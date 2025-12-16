"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ServicePackage {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  area?: string;
}

const ServiceCard = ({ package: pkg, index }: { package: ServicePackage; index: number }) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl md:rounded-3xl border p-6 md:p-8 bg-black-50 min-h-[400px] flex flex-col",
        pkg.popular
          ? "border-accent-cyan/50 bg-gradient-to-br from-accent-blue/10 to-accent-cyan/5"
          : "border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent"
      )}
    >
      {/* Glowing border gradient effect */}
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      {/* Popular badge */}
      {pkg.popular && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-xs font-nohemi font-semibold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h3 className="font-harmond text-2xl md:text-3xl font-bold text-white mb-2">
          {pkg.title}
        </h3>

        {/* Price */}
        <div className="mb-4">
          <span
            className="font-harmond text-4xl md:text-5xl font-bold"
            style={{
              background: pkg.popular
                ? 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ${pkg.price}
          </span>
        </div>

        {/* Description */}
        <p className="font-nohemi text-base text-white/60 mb-6">
          {pkg.description}
        </p>

        {/* Features */}
        <div className="flex-1">
          <ul className="space-y-3">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent-cyan mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-nohemi text-sm text-white/70">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a
          href={`tel:+17326770331`}
          className={cn(
            "mt-6 w-full text-center px-6 py-3 rounded-full font-nohemi text-sm font-semibold uppercase tracking-wide transition-all duration-300",
            pkg.popular
              ? "bg-gradient-to-r from-accent-blue to-accent-cyan text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
              : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40"
          )}
          data-cursor-hover
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export function WorksSection() {
  const packages: ServicePackage[] = [
    {
      title: "Full Detail",
      price: "120",
      description: "Complete interior and exterior detailing for the ultimate shine.",
      features: [
        "Exterior wash & wax",
        "Interior deep clean",
        "Vacuum & shampoo",
        "Dashboard polish",
        "Tire shine",
        "Window cleaning",
      ],
      popular: true,
      area: "md:[grid-area:1/1/3/5] lg:[grid-area:1/1/3/5]",
    },
    {
      title: "Exterior Detail",
      price: "60",
      description: "Comprehensive exterior cleaning and protection.",
      features: [
        "Hand wash & dry",
        "Wax application",
        "Tire & wheel cleaning",
        "Window cleaning",
        "Trim restoration",
      ],
      area: "md:[grid-area:1/5/2/9] lg:[grid-area:1/5/2/9]",
    },
    {
      title: "Interior Detail",
      price: "60",
      description: "Deep interior cleaning and restoration.",
      features: [
        "Vacuum & shampoo",
        "Dashboard & console clean",
        "Seat cleaning",
        "Carpet & mat cleaning",
        "Window cleaning",
        "Odor elimination",
      ],
      area: "md:[grid-area:2/5/3/9] lg:[grid-area:1/9/2/13]",
    },
    {
      title: "Extras",
      price: "10-15",
      description: "Add-on services to enhance your detail package.",
      features: [
        "Engine bay cleaning ($15)",
        "Headlight restoration ($15)",
        "Clay bar treatment ($15)",
        "Leather conditioning ($10)",
        "Pet hair removal ($10)",
        "Paint correction (Quote)",
      ],
      area: "md:[grid-area:3/1/4/9] lg:[grid-area:2/5/3/13]",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Royal Blue / Cyan gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                Service Packages
              </span>
              <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Pricing
              </h2>
            </div>

            <p className="font-nohemi text-base md:text-lg text-white/50 max-w-md">
              Choose the perfect package for your vehicle. All services include
              mobile convenience—we come to you!
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-accent-blue/50 via-accent-cyan/30 to-transparent" />
        </div>

        {/* Service Packages Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6">
          {packages.map((pkg, index) => (
            <div key={pkg.title} className={cn("col-span-1", pkg.area)}>
              <ServiceCard package={pkg} index={index} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <p className="font-nohemi text-base text-white/60 mb-6">
            Questions about our services? Call us now!
          </p>
          <a
            href="tel:+17326770331"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-nohemi text-base font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] hover:scale-105"
            data-cursor-hover
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(732) 677-0331</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
