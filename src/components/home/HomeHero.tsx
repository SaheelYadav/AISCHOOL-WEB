"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    setCoords({ x: x * 8, y: y * 8 });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  const trustCompanies = [
    { name: "Google" },
    { name: "AWS" },
    { name: "Microsoft" },
    { name: "NVIDIA" },
    { name: "GitHub" },
    { name: "Hugging Face" }
  ];

  const particles = [
    { top: "15%", left: "10%", size: 3 },
    { top: "25%", left: "80%", size: 4 },
    { top: "65%", left: "15%", size: 3 },
    { top: "45%", left: "90%", size: 5 },
    { top: "75%", left: "75%", size: 3 },
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[92vh] bg-white text-[#171717] flex flex-col justify-between pt-24 pb-12 overflow-hidden border-b border-neutral-150/50 select-none z-10"
    >
      {/* 1. Engineering paper style background grid (0.5px lines, opacity 4%) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5) 0.5px, transparent 0.5px), linear-gradient(to bottom, rgba(0,0,0,0.5) 0.5px, transparent 0.5px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* 2. Soft Red ambient radial glow centered behind content */}
      <div className="absolute top-[35%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[65vw] rounded-full bg-red-500/[0.018] blur-[140px] pointer-events-none z-0" />

      {/* 3. Tiny floating red particles */}
      {mounted && !shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {particles.map((p, idx) => (
            <motion.div
              key={idx}
              animate={{
                y: [0, -10, 0],
                opacity: [0.08, 0.14, 0.08]
              }}
              transition={{
                duration: 5 + idx * 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: "#EE1C25",
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1">
        
        {/* Left Side (45% on desktop layout) */}
        <div className="lg:col-span-5 space-y-7 flex flex-col items-start text-left z-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-150/60 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE1C25] animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-neutral-400 font-sans">
              India's First AI Learning Ecosystem
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.12]">
              India's Only School to Learn AI Skills from Tech Startup{" "}
              <span className="text-[#EE1C25] relative inline-block">
                Founders & Leaders.
              </span>
            </h1>
            <p className="text-[#6B7280] font-heading font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              WHERE INTELLIGENCE MEETS INNOVATION.
            </p>
          </div>

          {/* Description */}
          <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-sans font-medium max-w-lg">
            At The AI School, we don't just teach. We empower students, professionals, and founders to build real products, resolve real-world challenges, and architect the AI ecosystem.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#EE1C25] hover:bg-[#D3131B] text-white text-xs font-black uppercase tracking-wider rounded-full transition-all duration-200 shadow-[0_4px_12px_rgba(238,28,37,0.15)] hover:shadow-[0_4px_20px_rgba(238,28,37,0.25)] active:scale-98"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-neutral-200 bg-white hover:bg-neutral-50 text-[#171717] text-xs font-black uppercase tracking-wider rounded-full shadow-sm transition-all duration-200 active:scale-98"
            >
              <span>Take Assessment</span>
            </a>
          </div>
        </div>

        {/* Right Side (55% on desktop - Premium Grounded Center Image + Orbit Framework) */}
        <div className="lg:col-span-7 flex justify-center items-center relative min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] w-full overflow-visible">
          {mounted && (
            <>
              {/* Static Premium Orbit SVG Layer */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <svg 
                  className="w-[580px] h-[580px] min-w-[580px] min-h-[580px] opacity-100" 
                  viewBox="0 0 600 600"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Orbit Rings (Extremely thin, very light red) */}
                  {/* Inner Ring (Radius: 90px) */}
                  <circle cx="300" cy="300" r="90" stroke="#EE1C25" strokeWidth="1.2" strokeOpacity="0.12" />
                  {/* Medium Ring (Radius: 155px) */}
                  <circle cx="300" cy="300" r="155" stroke="#EE1C25" strokeWidth="1.2" strokeOpacity="0.12" />
                  {/* Outer Ring (Radius: 220px) */}
                  <circle cx="300" cy="300" r="220" stroke="#EE1C25" strokeWidth="1.2" strokeOpacity="0.12" />

                  {/* Elegant Intersecting Bezier Curves (Satellite trajectories) */}
                  <path d="M110 200 C 200 240, 400 130, 490 270" stroke="#EE1C25" strokeWidth="1.2" strokeOpacity="0.08" />
                  <path d="M170 470 C 230 360, 430 430, 510 210" stroke="#EE1C25" strokeWidth="1.2" strokeOpacity="0.06" />

                  {/* Orbit Nodes (Different sizes, filled vs outlined, 70-90% opacity) */}
                  {/* Inner Ring Nodes (R = 90) */}
                  <circle cx="363.6" cy="363.6" r="3" stroke="#EE1C25" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                  <circle cx="231.3" cy="242.1" r="2" fill="#EE1C25" fillOpacity="0.85" />

                  {/* Medium Ring Nodes (R = 155) */}
                  <circle cx="190.4" cy="409.6" r="4" fill="#EE1C25" fillOpacity="0.8" />
                  <circle cx="434.2" cy="222.5" r="3" stroke="#EE1C25" strokeWidth="1.5" strokeOpacity="0.75" fill="none" />
                  <circle cx="353.0" cy="154.3" r="2" fill="#EE1C25" fillOpacity="0.85" />

                  {/* Outer Ring Nodes (R = 220) */}
                  <circle cx="512.5" cy="357.0" r="4" stroke="#EE1C25" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
                  <circle cx="83.3" cy="261.8" r="3" fill="#EE1C25" fillOpacity="0.8" />
                </svg>
              </div>

              {/* Central Logo composition */}
              <div className="relative w-full max-w-[170px] sm:max-w-[215px] lg:max-w-[280px] aspect-[4/3] flex items-center justify-center z-20">
                
                {/* Subtle premium light field behind the logo (soft radial white glow, light red tint, large blurred circle) */}
                <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(238,28,37,0.012)_35%,rgba(238,28,37,0.003)_65%,transparent_100%)] rounded-full blur-[60px] pointer-events-none z-0" />

                {/* Grounding soft wide elliptical shadow beneath the logo */}
                <motion.div
                  animate={shouldReduceMotion ? {} : {
                    scaleX: [1, 0.96, 1],
                    opacity: [0.02, 0.012, 0.02]
                  }}
                  transition={{
                    duration: 12.0,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[110%] h-3.5 bg-black/[0.06] blur-[22px] rounded-full pointer-events-none z-10"
                />

                <motion.div
                  style={{
                    x: coords.x,
                    y: coords.y,
                  }}
                  animate={{
                    y: shouldReduceMotion ? 0 : [0, -1.5, 0], // Ultra-subtle float (1.5px)
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 100, damping: 20 },
                    y: {
                      duration: 12.0, // Slow 12s duration loop for maximum elegance
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }
                  }}
                  className="relative w-full h-full flex justify-center items-center z-20 group cursor-pointer"
                >
                  {/* Centered Image Artwork container with minimal, ultra-soft shadow and gradual feathering mask */}
                  <div 
                    className="relative w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.005)] mix-blend-multiply"
                    style={{
                      maskImage: "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 95%)",
                      WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 95%)",
                    }}
                  >
                    <Image
                      src="/assets/image copy.png"
                      alt="Premium AI Ecosystem Illustration"
                      fill
                      priority
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 280px"
                      className="object-contain pointer-events-none select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    />
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 4. Bottom Background Wave Mesh Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none overflow-hidden z-0">
        <svg className="absolute bottom-0 w-full h-24 text-[#ef4444] opacity-[0.08]" preserveAspectRatio="none" viewBox="0 0 1440 74">
          <path fill="currentColor" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,74L1320,74C1200,74,960,74,720,74C480,74,240,74,120,74L0,74Z"></path>
        </svg>
      </div>

      {/* Grayscale Trust Banner in Glass Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="w-full bg-white/40 border border-neutral-150/70 backdrop-blur-md rounded-2xl p-6 md:py-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 font-sans">
            Trusted by Learners & Startups Across India
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-40 grayscale hover:opacity-60 transition-opacity">
            {trustCompanies.map((logo, idx) => (
              <span 
                key={idx} 
                className="text-sm font-black font-heading tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors uppercase"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
