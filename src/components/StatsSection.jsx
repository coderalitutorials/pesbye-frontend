import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AnimatedCounter({ value, duration = 1200 }) { // Duration thoda optimized kiya
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const isFraction = value.includes("/");
  const numericString = value.replace(/[^0-9]/g, "");
  const numericValue = parseInt(numericString, 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;
          let lastUpdate = 0;

          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // FIX: Throttle state updates to save main-thread frame rates (approx 60fps cap)
            if (timestamp - lastUpdate > 16 || progress === 1) {
              const currentValue = Math.round(progress * numericValue);
              setCount(currentValue);
              lastUpdate = timestamp;
            }

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.1 } // Optimized threshold to trigger early and smoothly
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [numericValue, duration]);

  if (isFraction) {
    return (
      <span ref={ref} className="inline-flex items-center transform-gpu">
        <span>{count}</span>
        <span className="text-[#0A2240]/30 mx-1">/</span>
        <span>{value.split("/")[1]}</span>
      </span>
    );
  }

  return (
    <span ref={ref} className="inline-flex transform-gpu">
      <span>{count}</span>
      {suffix}
    </span>
  );
}

export default function PesSaveStatsSection() {
  const navigate = useNavigate();

  const stats = [
    {
      number: "15+",
      label: "Years Premium Depth",
      desc: "Rapid emergency response across high-end West London sectors.",
    },
    {
      number: "5/5",
      label: "Client Trust Score",
      desc: "Top ratings for seamless eradication and zero-trace execution.",
    },
    {
      number: "100%",
      label: "Eradication Rate",
      desc: "Comprehensive protection warranties securing luxury estates.",
    },
    {
      number: "3K+",
      label: "Properties Shielded",
      desc: "Successful active proofing setups deployed across Mayfair.",
    },
  ];

  return (
    <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
      {/* Premium Linear Accents */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Monolithic Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#0A2240]/10">
          <div className="space-y-4 text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0A2240]/60 block">
              // Performance Index
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
              Mayfair Track Record
            </h2>
          </div>
          
          <div className="text-left md:text-right">
            <button
              onClick={() => navigate("/contact-us")}
              className="inline-flex items-center gap-8 bg-[#0A2240] text-white rounded-full pl-6 pr-2 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-[#0A2240]/90 active:scale-[0.98] group/btn shadow-xl shadow-[#0A2240]/10"
            >
              <span>Schedule Eradication</span>
              <div className="w-10 h-10 rounded-full bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
                <ArrowRight className="w-4 h-4 text-[#0A2240]" strokeWidth={3} />
              </div>
            </button>
          </div>
        </div>

        {/* LINEAR HORIZON TIMELINE STREAM */}
        <div className="mt-12 divide-y divide-[#0A2240]/10">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              // FIX: Replaced transition-all with specific property transitions to avoid re-paints
              className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-left group transition-colors duration-300 relative transform-gpu will-change-transform"
            >
              {/* Invisible background glow */}
              <div className="absolute inset-y-0 -inset-x-4 bg-white/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none transform-gpu" />

              {/* Index Column */}
              <div className="md:col-span-1 hidden md:block relative z-10">
                <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-200">
                  0{idx + 1}
                </span>
              </div>

              {/* Big Counter Column */}
              <div className="md:col-span-3 relative z-10">
                {/* FIX: Removed text scaling on hover to completely remove text jittering on scroll */}
                <div className="text-5xl md:text-6xl font-black tracking-tighter text-[#0A2240] font-sans flex items-center transform-gpu">
                  <AnimatedCounter value={stat.number} />
                </div>
              </div>

              {/* Label/Title Column */}
              <div className="md:col-span-3 relative z-10">
                <h4 className="text-sm font-black tracking-wider uppercase text-[#0A2240] group-hover:text-white transition-colors duration-200">
                  {stat.label}
                </h4>
              </div>

              {/* Description Context Column */}
              <div className="md:col-span-5 relative z-10">
                <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
                  {stat.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}