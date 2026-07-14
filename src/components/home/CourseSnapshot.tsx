"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Check, BookOpen, Layers, Cpu, Award } from "lucide-react";

interface CourseSnapshotProps {
  illustration?: string;
}

const checklistItems = [
  "Learn from Startup Founders",
  "Live Industry Projects",
  "Personal Mentorship",
  "AI School Alumni Network",
  "Internship Certificate",
  "Hackathon Participation",
  "Resume Building",
  "Placement Support",
];

export default function CourseSnapshot({
  illustration = "/images/course-snapshot-hero.png",
}: CourseSnapshotProps) {
  const [visibleStats, setVisibleStats] = useState<number[]>([0, 0, 0]);
  const [isChecklistVisible, setIsChecklistVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers
          const duration = 1500; // ms
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const targets = [100, 7, 10];
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const nextStats = targets.map((target) =>
              Math.min(Math.round(target * progress), target)
            );
            setVisibleStats(nextStats);

            if (currentStep >= steps) {
              clearInterval(timer);
              // Trigger checklist reveal after metrics finish
              setIsChecklistVisible(true);
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-24 px-6 md:px-12 border-t border-gray-100 relative z-10 font-heading overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[300px] bg-red-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT SIDE (55% ON DESKTOP) ================= */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            {/* Header Area */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 border border-red-100 rounded-full">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#EE1C25]">
                  Course Snapshot
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight uppercase">
                Everything You Need To <br className="hidden sm:inline" />
                Become <span className="text-[#EE1C25]">Industry Ready</span>
              </h2>
              <p className="text-slate-600 text-sm font-semibold leading-relaxed max-w-2xl">
                Master production-grade workflows through live network challenges, mentored co-creation loops, and professional certifications.
              </p>
            </div>

            {/* Statistic Cards Area */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Metric 1 */}
              <div className="group bg-white border border-gray-100 rounded-3xl p-5 shadow-xs hover:shadow-lg transition-all duration-300">
                <BookOpen className="w-5 h-5 text-[#EE1C25] mb-4" />
                <span className="block text-3xl font-black text-gray-950">
                  {visibleStats[0]}+
                </span>
                <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mt-1">
                  Hours Learning
                </span>
              </div>

              {/* Metric 2 */}
              <div className="group bg-white border border-gray-100 rounded-3xl p-5 shadow-xs hover:shadow-lg transition-all duration-300">
                <Layers className="w-5 h-5 text-[#EE1C25] mb-4" />
                <span className="block text-3xl font-black text-gray-950">
                  {visibleStats[1]}+
                </span>
                <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mt-1">
                  Industry Projects
                </span>
              </div>

              {/* Metric 3 */}
              <div className="group bg-white border border-gray-100 rounded-3xl p-5 shadow-xs hover:shadow-lg transition-all duration-300">
                <Cpu className="w-5 h-5 text-[#EE1C25] mb-4" />
                <span className="block text-3xl font-black text-gray-950">
                  {visibleStats[2]}+
                </span>
                <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider mt-1">
                  GenAI Tools
                </span>
              </div>

              {/* Metric 4 (Hierarchical Accent Card) */}
              <div className="group bg-red-50/50 border border-red-100/50 rounded-3xl p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <Award className="w-5 h-5 text-[#EE1C25]" />
                <div className="mt-4">
                  <span className="block text-sm font-black text-gray-950 uppercase leading-tight">
                    Career
                  </span>
                  <span className="block text-[11px] font-bold text-[#EE1C25] uppercase tracking-wider mt-0.5">
                    Focused Curriculum
                  </span>
                </div>
              </div>
            </div>

            {/* Two-Column Checklist Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-4">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 transition-all duration-500 transform ${
                    isChecklistVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isChecklistVisible ? `${idx * 100}ms` : "0ms",
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-red-50 text-[#EE1C25] flex items-center justify-center shrink-0 border border-red-100">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Trigger */}
            <div className="pt-4">
              <a
                href="/learn"
                className="group inline-flex items-center gap-2.5 bg-[#EE1C25] hover:bg-[#d61920] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Curriculum
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE (45% ON DESKTOP) ================= */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            {/* Visual Frame Wrapper with Glow backdrop */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-[40px] bg-gradient-to-tr from-slate-50 to-white border border-gray-100 p-6 shadow-xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(238,28,37,0.06)_0%,transparent_75%)] pointer-events-none" />
              
              {/* Floating accent particles */}
              <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-red-400/40 animate-pulse" />
              <div className="absolute bottom-12 right-8 w-3 h-3 rounded-full bg-red-300/30 animate-pulse delay-500" />
              
              <div className="relative w-full h-full">
                <Image
                  src={illustration}
                  alt="AI learning artwork illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain relative z-10 transition-transform duration-500 hover:scale-103"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
