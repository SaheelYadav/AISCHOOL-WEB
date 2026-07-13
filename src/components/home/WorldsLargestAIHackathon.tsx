"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { 
  Trophy, 
  Users, 
  Building2, 
  ChevronRight,
  Clock,
  Sparkles,
  Laptop
} from "lucide-react";

// Stat Cards Content (Section 2)
const snapshotStats = [
  {
    value: "30+",
    label: "Hours of Intense",
    highlight: "Co-creation",
    desc: "Non-stop brainstorm and code sprint to build working prototypes.",
    icon: Clock,
  },
  {
    value: "10+",
    label: "Mentoring & Speaker",
    highlight: "Sessions",
    desc: "Direct access to top developers, industry executives, and startup founders.",
    icon: Users,
  },
  {
    value: "3",
    label: "Comprehensive",
    highlight: "Workshops",
    desc: "Practical developer training in 5G & 6G telecom networks and GenAI.",
    icon: Laptop,
  },
  {
    value: "₹4.5L",
    label: "Total Prize Pool",
    highlight: "Cash Prizes",
    desc: "Significant cash pool distributed across winners, runners-up, and top ideas.",
    icon: Trophy,
  }
];

// Feature Grid Items (Section 3)
const features = [
  {
    title: "1-on-1 Mentor Sessions",
    description: "Work directly with industry veterans from DOT, COAI, TCOE, and Telecom startups to refine architectures.",
    icon: Users,
  },
  {
    title: "National Showcase Stage",
    description: "Pitch prototypes to decision-makers, government officials, and venture capitalists at major telecom summits.",
    icon: Trophy,
  },
  {
    title: "Startup Incubation Pipelines",
    description: "Top prototypes get fast-tracked into startup accelerators and tech hubs across India.",
    icon: Building2,
  },
  {
    title: "Telecom & GenAI Integrations",
    description: "Gain hands-on training with cutting-edge network APIs and state-of-the-art Generative AI frameworks.",
    icon: Sparkles,
  }
];

// Hackathon Cycle / Funnel Steps (Section 4)
const timelineSteps = [
  { stage: "Registrations", desc: "3500+ Teams Registered" },
  { stage: "Completed Applications", desc: "839 Applications Submitted" },
  { stage: "Initial Screening", desc: "598 Applications after TEC Evaluation" },
  { stage: "Shortlisted for Hackathon", desc: "115 Teams Qualified" },
  { stage: "Active Participation", desc: "72 Teams Competed in Hackathon" },
  { stage: "Mentor Selection", desc: "41 Teams Shortlisted After Mentor Evaluation" },
  { stage: "Jury Shortlist", desc: "19 Finalists Evaluated by Grand Jury" },
  { stage: "Final Selection", desc: "Top 15 Winners Selected by TCOE India & DoT Expert Committee" }
];

// Animated Statistics (Section 5)
const statsData = [
  { value: 19, label: "Finalists Shortlisted" },
  { value: 3500, label: "Teams Registered", suffix: "+" },
  { value: 113, label: "Active Participants" },
  { value: 33, label: "Colleges Represented" },
  { value: 7, label: "Industry Mentors" }
];

// Gallery Images (Section 6)
const galleryImages = [
  {
    src: "/images/hackathon_group1.jpg",
    alt: "5G & 6G Hackathon Participants Group Photo",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "/images/hackathon_stage1.jpg",
    alt: "Hackathon Stage Winners & VIP Ceremony",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    src: "/images/hackathon_working1.png",
    alt: "Participants building AI prototypes",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/images/hackathon_pitch1.png",
    alt: "AI project pitch to judges panel",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/images/hackathon_group3.png",
    alt: "Delegates and organizers group photo at hackathon summit",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    src: "/images/hackathon_team1.png",
    alt: "Hackathon team working space session",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/images/hackathon_working2.png",
    alt: "Mentors guiding teams on network protocols",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: "/images/hackathon_felicitation1.png",
    alt: "Award presentation to the top winners",
    className: "md:col-span-2 md:row-span-1"
  }
];

export default function WorldsLargestAIHackathon() {
  const [visibleStats, setVisibleStats] = useState<number[]>([0, 0, 0, 0, 0]);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);

  // Intersection Observer for counting up statistics
  useEffect(() => {
    const currentRef = statsSectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedStats) {
          setHasAnimatedStats(true);
          const duration = 1500; // ms
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const newStats = statsData.map((stat) => {
              const target = stat.value;
              const progress = currentStep / steps;
              return Math.min(Math.round(target * progress), target);
            });
            setVisibleStats(newStats);

            if (currentStep >= steps) {
              clearInterval(timer);
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
  }, [hasAnimatedStats]);

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 border-t border-gray-100 relative z-10 font-heading overflow-hidden">
      {/* Light Radial Background Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle,rgba(238,28,37,0.02)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto space-y-28 relative z-10">
        
        {/* ================= SECTION 1: HERO ================= */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#EE1C25] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#EE1C25]">
              National Hackathon Platform
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-950 tracking-tight leading-tight uppercase">
            World&#39;s Largest <span className="text-[#EE1C25]">AI Hackathon</span>
          </h2>

          <p className="text-base md:text-lg font-semibold text-slate-600 max-w-2xl mx-auto leading-relaxed">
            India&#39;s premier AI innovation platform connecting students, developers, and industry leaders through live networks and collaborative engineering.
          </p>
        </div>

        {/* ================= SECTION 2: COURSE SNAPSHOT ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {snapshotStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="group bg-white border border-gray-200/80 rounded-3xl p-8 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 text-[#EE1C25] border border-red-100 rounded-2xl w-fit group-hover:bg-[#EE1C25] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-sm font-extrabold text-neutral-500 uppercase tracking-wider">{stat.label}</span>
                    <span className="block text-sm font-black text-gray-950 uppercase">{stat.highlight}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-3xl font-black text-gray-950">{stat.value}</span>
                  <p className="text-[11px] font-semibold text-neutral-400 leading-normal mt-1">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= SECTION 3: FEATURE LIST ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE1C25]">
              Platform Advantages
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-gray-950 leading-tight uppercase">
              Engineered For High Impact Teams
            </h3>
            <p className="text-sm font-semibold text-slate-500 leading-relaxed">
              We provide developer teams with industrial support, mentorship, and cloud infrastructures to transform raw code into functional product prototypes.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4">
                  <div className="p-2.5 bg-red-50 text-[#EE1C25] rounded-xl w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-gray-950 leading-snug">{feature.title}</h4>
                  <p className="text-xs font-semibold text-neutral-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= SECTION 4: HACKATHON CYCLE TIMELINE ================= */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE1C25]">
              Structure & Flow
            </span>
            <h3 className="text-3xl font-black text-gray-950 uppercase">
              The Hackathon Cycle
            </h3>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {timelineSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between min-h-[140px]"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-neutral-300 group-hover:text-[#EE1C25] transition-colors uppercase tracking-widest block">
                      STAGE 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-extrabold text-gray-950 leading-tight">
                      {step.stage}
                    </h4>
                  </div>
                  <p className="text-[11px] font-semibold text-neutral-400 leading-normal mt-2">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SECTION 5: STATS ================= */}
        <div 
          ref={statsSectionRef}
          className="bg-slate-50 border border-gray-100 rounded-[2.5rem] py-16 px-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
        >
          {statsData.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <span className="block text-4xl md:text-5xl font-black text-gray-950 tracking-tight font-heading">
                {visibleStats[idx]}{stat.suffix || ""}
              </span>
              <span className="block text-xs font-bold text-neutral-500 uppercase tracking-wider leading-relaxed">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ================= SECTION 6: GALLERY ================= */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE1C25]">
              Innovation in Action
            </span>
            <h3 className="text-3xl font-black text-gray-950 uppercase">
              Hackathon Gallery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-[2rem] border border-gray-200/80 group shadow-xs ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                  <span className="text-white text-xs font-bold font-heading uppercase tracking-wide">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 7: FUTURE HACKATHON CARD ================= */}
        <div className="bg-slate-50 border border-gray-150 rounded-[2.5rem] p-12 text-center relative overflow-hidden max-w-4xl mx-auto space-y-6">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="p-4 bg-white border border-gray-200 shadow-sm rounded-full w-fit mx-auto text-3xl">
            🚀
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
              The Future of AI Innovation
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-gray-950 uppercase">
              World&#39;s Largest AI Hackathon Platform
            </h3>
            <p className="text-xs font-semibold text-neutral-500 max-w-md mx-auto leading-relaxed">
              We are scaling the platform to host global concurrent tracks, automated leaderboards, and collaborative developer code sandboxes.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 border border-neutral-200 rounded-full mx-auto">
            <span className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">
              Next Track Launching Soon
            </span>
          </div>
        </div>

        {/* ================= SECTION 8: FINAL CTA ================= */}
        <div className="text-center space-y-6 max-w-lg mx-auto pb-12">
          <h3 className="text-3xl font-black text-gray-950 uppercase">
            Ready to Build the Future?
          </h3>
          <p className="text-xs font-semibold text-neutral-500 leading-relaxed">
            Register your interest to get real-time notifications when team registration opens for the next innovation sprint.
          </p>
          
          <div className="pt-2">
            <a
              href="#register"
              className="group inline-flex items-center justify-center gap-3 bg-[#EE1C25] hover:bg-[#d61920] text-white font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              Register Interest
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
