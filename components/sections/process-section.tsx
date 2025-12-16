"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProcessSection() {
  const timelineData = [
    {
      title: "01",
      date: "Book",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Schedule Your Service
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            Contact us by phone or email to schedule your appointment. We'll
            confirm your location, preferred time, and service package. It's
            that simple!
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Call or email to book
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Choose your service package
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Confirm location & time
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "02",
      date: "Arrive",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            We Come to You
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            Our fully-equipped mobile unit arrives at your location at the
            scheduled time. No need to leave your home or office—we bring
            everything needed for a professional detail.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Mobile unit arrives on time
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              All equipment & products included
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Professional setup in minutes
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "03",
      date: "Detail",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Expert Detailing Service
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            Our trained technicians work meticulously to clean, protect, and
            restore your vehicle using premium products and professional
            techniques. Every detail matters.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Thorough cleaning & protection
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Premium eco-friendly products
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Attention to every detail
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "04",
      date: "Enjoy",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Your Shine Awaits
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            Once complete, we'll show you the results and ensure you're
            completely satisfied. Your vehicle will look like new, and you can
            enjoy the convenience of having it done at your location.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Final inspection & walkthrough
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Satisfaction guaranteed
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-cyan" />
              Easy payment & booking for next time
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="relative min-h-screen w-full py-20 sm:py-32 md:py-48 bg-black"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 md:mb-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div>
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
              How We Work
            </span>
            <h2 className="font-harmond text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6">
              Our Process
            </h2>
            <p className="font-nohemi text-base sm:text-lg text-white/50 max-w-xl">
              A simple, streamlined process that ensures your vehicle receives
              the premium care it deserves.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
