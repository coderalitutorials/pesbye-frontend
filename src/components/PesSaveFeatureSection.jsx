import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  Zap,
} from "lucide-react";

export default function PesSaveFeatureSection() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: "01",
      title: "Certified Team",
      desc: "Client-oriented, fully trained and certified local pest experts operating with strict premium standards.",
      icon: ShieldCheck,
    },
    {
      id: "02",
      title: "Eco Formulations",
      desc: "Premium, target-specific and completely safe treatment compounds safe for families and properties.",
      icon: Leaf,
    },
    {
      id: "03",
      title: "Total Safety",
      desc: "Complete long-term property protection, restriction protocols, and total clinical peace of mind.",
      icon: Zap,
    },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-[#C5A86B] overflow-hidden z-20 border-b border-[#0A2240]/10 group/section isolate backface-hidden">
      
      {/* Background Image Layer — Hardware accelerated */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
        <img
          src="/images/moth-control.webp"
          alt="Professional treatment context background"
          className="w-full h-full object-cover object-center opacity-100 contrast-[1.05] brightness-[0.85]"
          loading="lazy"
        />
        {/* Precise fading gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C5A86B] via-[#C5A86B]/60 to-transparent w-full lg:w-[60%]" />
      </div>

      {/* Luxury Minimalist Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#0A2240_1px,transparent_1px),linear-gradient(to_bottom,#0A2240_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: Luxury Copywriting Block */}
          {/* FIX: Removed complex nested classes from sticky wrapper to ensure low paint complexity */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-12 transform-gpu">
            <div className="inline-flex items-center gap-2.5 bg-[#0A2240] border border-white/10 px-4 py-1.5 rounded-md shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A86B] animate-pulse transform-gpu" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A86B] uppercase font-black">
                Operational Quality
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0A2240] uppercase leading-none drop-shadow-sm">
                Complete <br /> Eradication <br />
                <span className="text-white bg-[#0A2240] px-4 py-1.5 rounded-xl inline-block mt-2">
                  Guaranteed
                </span>
              </h2>

              <p className="text-[#0A2240] text-sm md:text-base leading-relaxed font-bold max-w-md drop-shadow-sm">
                Our specialized London technicians deploy targeted eco-certified 
                systems to neutralize pests permanently. We focus on long-term preventive 
                restriction protocols so your property remains immaculate.
              </p>
            </div>

            {/* CTA Button Link */}
            <div className="pt-4">
              <button
                onClick={() => navigate("/contact-us")}
                className="inline-flex items-center gap-5 bg-[#0A2240] hover:bg-[#0A2240]/90 text-white font-black text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer shadow-xl shadow-[#0A2240]/20"
              >
                <span>Secure Protection Hub</span>
                <div className="w-5 h-5 rounded-md bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#0A2240]" strokeWidth={3} />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Premium Deep Navy Asymmetric Feature Stack */}
          <div className="lg:col-span-7 space-y-4 w-full transform-gpu">
            {features.map((feat, idx) => {
              const FeatIcon = feat.icon;
              const isSelected = activeFeature === idx;

              return (
                <div
                  key={feat.id}
                  onMouseEnter={() => setActiveFeature(idx)}
                  onMouseLeave={() => setActiveFeature(null)}
                  // FIX: Replaced transition-all with explicit transform/colors. Replaced backdrop-blur with full opaque solid to protect framerate.
                  className={`group/item relative p-8 rounded-[24px] border transition-[transform,background-color,border-color,shadow] duration-300 cursor-default flex flex-col sm:flex-row sm:items-center justify-between gap-6 transform-gpu will-change-transform ${
                    isSelected 
                      ? "bg-[#0A2240] border-[#C5A86B] shadow-2xl shadow-black/40 translate-x-1.5" 
                      : "bg-[#0A2240]/98 border-transparent shadow-xl"
                  }`}
                >
                  <div className="flex items-start gap-6 relative z-10 max-w-xl">
                    {/* Icon Dynamic Frame */}
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-[transform,background-color,color] duration-300 shrink-0 ${
                      isSelected 
                        ? "bg-[#C5A86B] text-[#0A2240] border-transparent scale-105" 
                        : "bg-white/5 text-[#C5A86B] border-white/10"
                    }`}>
                      <FeatIcon className="w-6 h-6" strokeWidth={1.8} />
                    </div>

                    {/* Typography Content */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-black text-white uppercase tracking-wide">
                        {feat.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed group-hover/item:text-slate-200 transition-colors duration-200">
                        {feat.desc}
                      </p>
                    </div>
                  </div>

                  {/* Index Number Asset */}
                  <div className="relative z-10 flex items-center justify-end shrink-0 self-end sm:self-center">
                    <span className={`font-mono text-xs font-black tracking-widest transition-[transform,color] duration-300 ${
                      isSelected ? "text-[#C5A86B] scale-105" : "text-white/40"
                    }`}>
                      [{feat.id}]
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}