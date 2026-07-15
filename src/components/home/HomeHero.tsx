"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HomeHeroProps {
  badgeText?: string;
  headline?: React.ReactNode;
  exploreCtaText?: string;
  assessmentCtaText?: string;
}

export default function HomeHero({
  badgeText = "WHERE INTELLIGENCE MEETS INNOVATION.",
  headline,
  exploreCtaText = "Explore Programs",
  assessmentCtaText = "Take Assessment",
}: HomeHeroProps) {
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

  const defaultHeadline = (
    <>
      India's Only School to Learn AI Skills from Tech Startup{" "}
      <span className="text-[#EE1C25] relative inline-block">
        Founders & Leaders.
      </span>
    </>
  );

  const headlineContent = headline || defaultHeadline;

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
      className="relative w-full min-h-[45vh] bg-white text-[#171717] flex flex-col justify-between pt-3 pb-3 overflow-hidden border-b border-neutral-150/50 select-none z-10"
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


          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[46px] font-black font-heading text-[#171717] tracking-tight leading-[1.12]">
              {headlineContent}
            </h1>
            <p className="text-[#6B7280] font-heading font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              {badgeText}
            </p>
          </div>


          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/learn"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#EE1C25] hover:bg-[#D3131B] text-white text-xs font-black uppercase tracking-wider rounded-full transition-all duration-200 shadow-[0_4px_12px_rgba(238,28,37,0.15)] hover:shadow-[0_4px_20px_rgba(238,28,37,0.25)] active:scale-98"
            >
              <span>{exploreCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-neutral-200 bg-white hover:bg-neutral-50 text-[#171717] text-xs font-black uppercase tracking-wider rounded-full shadow-sm transition-all duration-200 active:scale-98"
            >
              <span>{assessmentCtaText}</span>
            </a>
          </div>
        </div>

        {/* Right Side (55% on desktop - Premium 3D Infinity Logo Presentation) */}
        <div className="lg:col-span-7 flex justify-center items-center relative w-full overflow-visible select-none">
          {mounted && (
            <motion.div
              style={{
                x: coords.x,
                y: coords.y,
              }}
              animate={{
                y: shouldReduceMotion ? 0 : [0, -6, 0],
                scale: shouldReduceMotion ? 1 : [1, 1.02, 1],
              }}
              transition={{
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
                scale: {
                  duration: 6.0,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
              }}
              className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] aspect-[3/2] flex items-center justify-center"
            >
              {/* Soft radial red glow behind the logo */}
              <div
                className="absolute inset-[-12%] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(238,28,37,0.08) 0%, rgba(238,28,37,0.02) 45%, transparent 70%)",
                }}
              />

              {/* 3D Infinity Logo Image */}
              <Image
                src="/assets/image2.png"
                alt="The AI School 3D Infinity Logo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-contain pointer-events-none select-none mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_60%,rgba(0,0,0,0.9)_80%,transparent_100%)]"
              />
            </motion.div>
          )}
        </div>
      </div>

    </section>
  );
}
