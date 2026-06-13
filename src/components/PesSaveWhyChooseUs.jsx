import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhoneCall, Calendar, ClipboardCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function PesSaveProcessSection() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Assessment",
      icon: Calendar,
      bullets: [
        "Instant Online Slot Booking",
        "Thermal Inspection & Detection",
        "Risk Mapping Report Ready"
      ]
    },
    {
      step: "02",
      title: "Targeted Eradication",
      icon: ClipboardCheck,
      bullets: [
        "Eco-Certified Actives Deployment",
        "Precision Heat Treatments",
        "100% Non-Disruptive Clean Injection"
      ]
    },
    {
      step: "03",
      title: "Long-term Protection",
      icon: PhoneCall,
      bullets: [
        "Structural Entry Point Sealing",
        "Premium Hygiene Baseline Clear",
        "Post-Treatment Monitoring Plan"
      ]
    },
  ];

  return (
    <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-b border-[#0A2240]/10 isolate backface-hidden">
      
      {/* Structural Minimal Tech Grid Lines */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#0A2240_2px,transparent_2px),linear-gradient(to_bottom,#0A2240_2px,transparent_2px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Modern Left-Aligned Header Block */}
        <div className="max-w-3xl mb-24 space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-[#0A2240] px-4 py-1.5 rounded-md shadow-lg transform-gpu">
            <span className="w-2 h-2 rounded-full bg-[#C5A86B] animate-pulse transform-gpu" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#C5A86B] uppercase font-black">
              Deployment Flow
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none text-[#0A2240]">
            3-Stage Property <br />
            <span className="text-white bg-[#0A2240] px-4 py-1 rounded-xl inline-block mt-2 shadow-xl">
              Sanctuary Protocol
            </span>
          </h2>
        </div>

        {/* HIGH-END INTERACTIVE TIMELINE ELEMENT */}
        <div className="relative transform-gpu">
          
          {/* Background Connecting Vector Line (Desktop Only) */}
          <div className="absolute top-10 left-[5%] right-[5%] h-[2px] bg-[#0A2240]/10 hidden md:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStep === idx;

              return (
                <div 
                  key={item.step}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="group/step relative space-y-8 cursor-pointer transform-gpu"
                >
                  {/* Timeline Header Badge & Progress Hub */}
                  <div className="flex items-center md:flex-col md:items-start gap-6 relative">
                    
                    {/* Glowing Sequential Indicator */}
                    {/* FIX: Handled scale and layout translation safely using explicit transform rules */}
                    <div className={`w-20 h-20 rounded-[24px] border-2 flex items-center justify-center transition-[transform,background-color,border-color] duration-300 shadow-2xl relative transform-gpu ${
                      isActive 
                        ? "bg-[#0A2240] border-[#0A2240] text-[#C5A86B] scale-105 -translate-y-0.5" 
                        : "bg-[#C5A86B] border-[#0A2240]/20 text-[#0A2240]"
                    }`}>
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                      
                      {/* Absolute Mini Index Badge */}
                      <span className="absolute -bottom-2.5 right-2 font-mono text-xs font-black bg-[#0A2240] text-white px-1.5 py-0.5 rounded-md shadow-sm">
                        {item.step}
                      </span>
                    </div>

                    {/* Stage Header Block */}
                    {/* FIX: Smoothed typography background injection changes to stop rendering hops */}
                    <div className="md:pt-4 transition-all duration-300">
                      <h3 className={`text-xl lg:text-2xl font-black uppercase tracking-tight transition-[colors,background-color] duration-300 px-2.5 py-0.5 rounded-md ${
                        isActive ? "text-white bg-[#0A2240]" : "text-[#0A2240] bg-transparent"
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bullet Content Chassis */}
                  {/* FIX: Swapped out performance killing backdrop-blur with hardware-accelerated translucent background solid */}
                  <div className={`p-6 rounded-[24px] transition-[transform,background-color,shadow] duration-300 border transform-gpu will-change-transform ${
                    isActive 
                      ? "bg-[#0A2240] border-[#0A2240] shadow-2xl shadow-black/30 -translate-y-1" 
                      : "bg-[#0A2240]/5 border-transparent"
                  }`}>
                    <ul className="space-y-3.5">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 transition-colors duration-300 ${
                            isActive ? "text-[#C5A86B]" : "text-[#0A2240]"
                          }`} strokeWidth={2.5} />
                          <span className={`text-xs font-bold leading-tight transition-colors duration-300 ${
                            isActive ? "text-slate-200" : "text-[#0A2240]/80"
                          }`}>
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CRISP ULTRA-PREMIUM EMERGENCY PANEL */}
        <div className="mt-20 bg-[#0A2240] text-white rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-2xl group/panel transform-gpu">
          
          {/* FIX: Reduced blur complexity to ensure high-speed paint cycle on layout changes */}
          <div className="absolute right-0 bottom-0 w-[250px] h-[250px] bg-[#C5A86B]/5 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3.5 py-1 rounded-md transform-gpu">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] text-red-400 uppercase font-bold">
                  Critical Response Grid
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-white">
                Dealing with an active emergency pest outbreak?
              </h3>
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                Our elite rapid London field squads remain on standby 24/7. Immediate dispatch guarantees arrival and deployment initiation within an absolute 2-hour window.
              </p>
            </div>

            <button 
              onClick={() => navigate("/contact-us")}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-5 bg-[#C5A86B] hover:bg-[#b39559] text-[#0A2240] font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer shrink-0 shadow-lg shadow-[#C5A86B]/10"
            >
              <span>Request Urgent Call</span>
              <div className="w-5 h-5 rounded-md bg-[#0A2240] flex items-center justify-center group-hover/panel:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-3 h-3 text-[#C5A86B]" strokeWidth={3} />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}