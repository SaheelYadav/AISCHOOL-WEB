"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, BrainCircuit, Bot, Sparkles } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "AI Fundamentals",
    icon: BookOpen,
    topics: ["AI Fundamentals", "Python for AI"],
    desc: "Establish a solid programming foundation and core math concepts required for intelligent systems.",
    badgeColor: "bg-red-50 text-[#EE1C25] border-red-100",
    hoverColor: "group-hover:border-[#EE1C25]",
  },
  {
    number: "02",
    title: "Core Machine Learning",
    icon: BrainCircuit,
    topics: ["Machine Learning", "Deep Learning"],
    desc: "Train models, understand algorithms, and explore neural architectures to solve real-world analytical tasks.",
    badgeColor: "bg-red-50 text-[#EE1C25] border-red-100",
    hoverColor: "group-hover:border-[#EE1C25]",
  },
  {
    number: "03",
    title: "Advanced Generative AI",
    icon: Sparkles,
    topics: ["Generative AI", "Prompt Engineering", "NLP", "Computer Vision"],
    desc: "Master large language models, image synthesis, natural language processing, and spatial recognition.",
    badgeColor: "bg-red-50 text-[#EE1C25] border-red-100",
    hoverColor: "group-hover:border-[#EE1C25]",
  },
  {
    number: "04",
    title: "Agentic Systems & Placements",
    icon: Bot,
    topics: ["Agentic AI", "AI Projects", "Internships", "Career Opportunities"],
    desc: "Build autonomous agents, deploy scalable projects, gain internship exposure, and route into active startups.",
    badgeColor: "bg-red-50 text-[#EE1C25] border-red-100",
    hoverColor: "group-hover:border-[#EE1C25]",
  },
];

export default function LearningJourney() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section className="w-full bg-slate-50/50 py-24 px-6 md:px-12 border-t border-gray-100 relative z-10 font-heading overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[300px] bg-red-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ================= LEFT SIDE: HEADLINE & CTA ================= */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Your Journey Into AI Starts Here
            </h2>

            <p className="text-slate-700 text-sm font-semibold leading-relaxed max-w-lg mx-auto lg:mx-0">
              From AI Fundamentals to real-world AI projects, follow a structured path designed by industry experts to make you industry-ready.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="/learn"
                className="group inline-flex items-center gap-2.5 bg-[#EE1C25] hover:bg-[#d61920] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Programs
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE: INTERACTIVE PATHWAY ================= */}
          <div className="lg:col-span-7 relative min-h-[520px] flex items-center justify-center">
            {/* Desktop Visualization (Hidden on Mobile/Tablet) */}
            <div className="hidden lg:block w-[600px] h-[500px] relative select-none">
              {/* SVG pathways from center to stage cards */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 600 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 
                  Center Node is at (300, 250) with radius 56.
                  Outer boundaries of the center node:
                  Top: (300, 194), Bottom: (300, 306), Left: (244, 250), Right: (356, 250)
                  
                  Card Positions:
                  Card 1 (Top Left): Center (140, 115)
                  Card 2 (Bottom Left): Center (140, 385)
                  Card 3 (Top Right): Center (460, 115)
                  Card 4 (Bottom Right): Center (460, 385)
                */}
                
                {/* Stage 1 path (Top Left) */}
                <path
                  d="M 140 115 C 200 115, 220 220, 260 230"
                  stroke={activeStage === 0 ? "#EE1C25" : "#E5E7EB"}
                  strokeWidth={activeStage === 0 ? "3" : "1.5"}
                  className="transition-all duration-300"
                />

                {/* Stage 2 path (Bottom Left) */}
                <path
                  d="M 140 385 C 200 385, 220 280, 260 270"
                  stroke={activeStage === 1 ? "#EE1C25" : "#E5E7EB"}
                  strokeWidth={activeStage === 1 ? "3" : "1.5"}
                  className="transition-all duration-300"
                />

                {/* Stage 3 path (Top Right) */}
                <path
                  d="M 460 115 C 400 115, 380 220, 340 230"
                  stroke={activeStage === 2 ? "#EE1C25" : "#E5E7EB"}
                  strokeWidth={activeStage === 2 ? "3" : "1.5"}
                  className="transition-all duration-300"
                />

                {/* Stage 4 path (Bottom Right) */}
                <path
                  d="M 460 385 C 400 385, 380 280, 340 270"
                  stroke={activeStage === 3 ? "#EE1C25" : "#E5E7EB"}
                  strokeWidth={activeStage === 3 ? "3" : "1.5"}
                  className="transition-all duration-300"
                />
              </svg>

              {/* CENTER HUB (Exactly at 300, 250) */}
              <div
                className="absolute left-[300px] top-[250px] -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-md z-20 select-none animate-subtle-float"
              >
                <div className="absolute inset-1.5 border border-dashed border-red-200/50 rounded-full" />
                <div className="relative w-[65%] h-[65%]">
                  <Image
                    src="/assets/logo.png"
                    alt="The AI School Logo"
                    fill
                    sizes="80px"
                    className="object-contain relative z-10"
                    priority
                  />
                </div>
              </div>

              {/* STAGE 1 CARD (Top Left - Center 140, 115 -> Left 36, Top 30) */}
              <div
                onMouseEnter={() => setActiveStage(0)}
                onMouseLeave={() => setActiveStage(null)}
                className="absolute left-[36px] top-[30px] w-52 group bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#EE1C25] transition-all duration-300 cursor-pointer select-none animate-float-delay-1 z-30"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-red-50 text-[#EE1C25] border border-red-100 rounded-lg">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-neutral-300 group-hover:text-[#EE1C25] transition-colors">STAGE 01</span>
                </div>
                <h4 className="text-sm font-bold text-gray-950 font-heading leading-tight mb-2">
                  {stages[0].title}
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {stages[0].topics.map((t) => (
                    <span key={t} className="text-[9px] font-bold bg-neutral-50 border border-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* STAGE 2 CARD (Bottom Left - Center 140, 385 -> Left 36, Top 300) */}
              <div
                onMouseEnter={() => setActiveStage(1)}
                onMouseLeave={() => setActiveStage(null)}
                className="absolute left-[36px] top-[300px] w-52 group bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#EE1C25] transition-all duration-300 cursor-pointer select-none animate-float-delay-2 z-30"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-red-50 text-[#EE1C25] border border-red-100 rounded-lg">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-neutral-300 group-hover:text-[#EE1C25] transition-colors">STAGE 02</span>
                </div>
                <h4 className="text-sm font-bold text-gray-950 font-heading leading-tight mb-2">
                  {stages[1].title}
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {stages[1].topics.map((t) => (
                    <span key={t} className="text-[9px] font-bold bg-neutral-50 border border-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* STAGE 3 CARD (Top Right - Center 460, 115 -> Left 348, Top 30) */}
              <div
                onMouseEnter={() => setActiveStage(2)}
                onMouseLeave={() => setActiveStage(null)}
                className="absolute left-[348px] top-[30px] w-56 group bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#EE1C25] transition-all duration-300 cursor-pointer select-none animate-float-delay-3 z-30"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-red-50 text-[#EE1C25] border border-red-100 rounded-lg">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-neutral-300 group-hover:text-[#EE1C25] transition-colors">STAGE 03</span>
                </div>
                <h4 className="text-sm font-bold text-gray-950 font-heading leading-tight mb-2">
                  {stages[2].title}
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {stages[2].topics.map((t) => (
                    <span key={t} className="text-[9px] font-bold bg-neutral-50 border border-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* STAGE 4 CARD (Bottom Right - Center 460, 385 -> Left 348, Top 300) */}
              <div
                onMouseEnter={() => setActiveStage(3)}
                onMouseLeave={() => setActiveStage(null)}
                className="absolute left-[348px] top-[300px] w-56 group bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#EE1C25] transition-all duration-300 cursor-pointer select-none animate-float-delay-4 z-30"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-red-50 text-[#EE1C25] border border-red-100 rounded-lg">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-neutral-300 group-hover:text-[#EE1C25] transition-colors">STAGE 04</span>
                </div>
                <h4 className="text-sm font-bold text-gray-950 font-heading leading-tight mb-2">
                  {stages[3].title}
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {stages[3].topics.map((t) => (
                    <span key={t} className="text-[9px] font-bold bg-neutral-50 border border-neutral-100 text-neutral-600 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Roadmap Layout (Hidden on Desktop) */}
            <div className="lg:hidden w-full space-y-8 pl-4 border-l border-neutral-200 relative">
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <div key={idx} className="relative group">
                    {/* Circle Node indicator */}
                    <div className="absolute -left-[25px] top-1 w-4 h-4 bg-white border-2 border-[#EE1C25] rounded-full group-hover:bg-[#EE1C25] transition-colors duration-300" />

                    <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-xs hover:border-[#EE1C25] transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black text-[#EE1C25] tracking-widest uppercase">Stage {stage.number}</span>
                        <Icon className="w-4 h-4 text-neutral-400" />
                      </div>
                      <h4 className="text-base font-bold text-gray-950 font-heading leading-tight mb-2">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-neutral-500 font-semibold leading-relaxed mb-4">
                        {stage.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.topics.map((t) => (
                          <span key={t} className="text-[9px] font-bold bg-neutral-50 border border-neutral-100 text-neutral-600 px-2.5 py-0.5 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle floating animations global styles */}
      <style jsx global>{`
        @keyframes subtleFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(-3px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(3px);
          }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(-2px); }
          50% { transform: translateY(2px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(2px); }
          50% { transform: translateY(-2px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(3px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(3px); }
          50% { transform: translateY(-3px); }
        }
        .animate-subtle-float {
          animation: subtleFloat 7s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float-delay-2 {
          animation: float2 9s ease-in-out infinite;
        }
        .animate-float-delay-3 {
          animation: float3 7.5s ease-in-out infinite;
        }
        .animate-float-delay-4 {
          animation: float4 8.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-subtle-float,
          .animate-float-delay-1,
          .animate-float-delay-2,
          .animate-float-delay-3,
          .animate-float-delay-4 {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
