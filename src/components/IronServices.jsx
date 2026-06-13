// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Sparkles,
//   Crosshair,
//   ArrowUpRight,
//   Maximize2,
//   ChevronRight,
// } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();
//   const [activeIndex, setActiveIndex] = useState(0);

//   const servicesData = [
//     {
//       id: "01",
//       title: "Mice & Rodent Control",
//       icon: ShieldAlert,
//       image: "/images/rodents.webp",
//       tag: "Mice & Rats",
//       details:
//         "Complete removal of mice and rats from your property. We use safe baiting systems and seal up all holes, cracks, and entry points to stop them from coming back inside.",
//     },
//     {
//       id: "02",
//       title: "Wasp Nest Eradication",
//       icon: Crosshair,
//       image: "/images/wasps.webp",
//       tag: "Wasp Removal",
//       details:
//         "Fast and professional treatment to safely remove active wasp nests from your loft, walls, or garden areas. Our local team responds quickly to keep your family safe.",
//     },
//     {
//       id: "03",
//       title: "Bed Bug Heat Treatment",
//       icon: Sparkles,
//       image: "/images/bedbugs.webp",
//       tag: "Bed Bugs",
//       details:
//         "Eco-friendly thermal heat treatments that completely kill bed bugs and their eggs in mattresses, furniture, and carpets. Guaranteed results in just a single visit.",
//     },
//   ];

//   return (
//     // !!! TRUE HANDSHAKE GOLD CANVAS — UNIFIED THEMATIC BACKGROUND
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-t border-[#0A2240]/10">
      
//       {/* Luxury Minimalist Flow Lines */}
//       <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-[#0A2240]/10 via-transparent to-[#0A2240]/5 pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Modernist Section Header */}
//         <div className="max-w-3xl text-left mb-20 space-y-3">
//           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A2240]/70 block">
//             // Our Professional Services
//           </span>
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
//             Pest Removal & <br /> Property Protection
//           </h2>
//         </div>

//         {/* !!! THE ASYMMETRIC SPLIT MONOLITH LAYOUT */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
//           {/* LEFT COLUMN: Monolithic Typography List Trigger */}
//           <div className="lg:col-span-7 space-y-4">
//             {servicesData.map((service, index) => {
//               const Icon = service.icon;
//               const isActive = activeIndex === index;

//               return (
//                 <div
//                   key={service.id}
//                   onMouseEnter={() => setActiveIndex(index)}
//                   onClick={() => navigate("/contact-us")}
//                   className={`w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-300 cursor-pointer border relative group ${
//                     isActive
//                       ? "bg-[#0A2240] text-white border-transparent shadow-2xl translate-x-2"
//                       : "bg-[#0A2240]/5 border-[#0A2240]/10 hover:bg-[#0A2240]/10 hover:border-[#0A2240]/20"
//                   }`}
//                 >
//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                     <div className="flex items-start gap-5">
//                       {/* Counter Index */}
//                       <span className={`font-mono text-xs font-bold pt-1 ${isActive ? "text-[#C5A86B]" : "text-[#0A2240]/40"}`}>
//                         0{service.id}
//                       </span>
                      
//                       {/* Text details stack */}
//                       <div className="space-y-2">
//                         <div className="flex items-center gap-3">
//                           <Icon className={`w-4 h-4 ${isActive ? "text-[#C5A86B]" : "text-[#0A2240]"}`} strokeWidth={2.5} />
//                           <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight font-sans">
//                             {service.title}
//                           </h3>
//                         </div>
                        
//                         {/* Details Paragraph */}
//                         <p className={`text-xs md:text-sm font-medium leading-relaxed max-w-xl transition-all duration-300 ${
//                           isActive ? "text-slate-300 h-auto opacity-100 pt-1" : "text-[#0A2240]/70 lg:h-0 lg:opacity-0 lg:overflow-hidden"
//                         }`}>
//                           {service.details}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Interactive Operational Badge / Icon Trigger */}
//                     <div className="flex items-center justify-between sm:justify-end gap-4 self-end sm:self-center w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-0 border-white/10">
//                       <span className={`text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded ${
//                         isActive 
//                           ? "bg-[#C5A86B] text-[#0A2240]" 
//                           : "bg-[#0A2240]/10 text-[#0A2240]"
//                       }`}>
//                         {service.tag}
//                       </span>
//                       <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
//                         isActive ? "bg-[#C5A86B] text-[#0A2240] rotate-45" : "bg-[#0A2240]/5 text-[#0A2240]"
//                       }`}>
//                         <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* RIGHT COLUMN: Interactive Geometric Viewport Canvas */}
//           <div className="lg:col-span-5 lg:sticky lg:top-24 hidden lg:block">
//             <div className="bg-[#0A2240] rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] relative group/viewport">
              
//               {/* Dynamic Image Pipeline Layer based on Active Index */}
//               {servicesData.map((service, index) => (
//                 <div
//                   key={service.id}
//                   className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                     activeIndex === index ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-105 pointer-events-none"
//                   }`}
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover grayscale brightness-75 group-hover/viewport:scale-105 group-hover/viewport:grayscale-0 transition-all duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A2240] via-[#0A2240]/20 to-transparent" />
//                 </div>
//               ))}

//               {/* Viewport UI Decorator Frame */}
//               <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-20">
//                 <div className="space-y-1 text-left">
//                   <span className="text-[9px] font-mono tracking-widest text-[#C5A86B] uppercase block">
//                     Selected Service Info
//                   </span>
//                   <h4 className="text-sm font-black uppercase tracking-wider">
//                     {servicesData[activeIndex].title}
//                   </h4>
//                 </div>
//                 <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
//                   <Maximize2 className="w-3.5 h-3.5 text-white animate-pulse" />
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* View All Bottom Global Trigger */}
//         <div className="text-left md:text-center mt-16">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center gap-6 bg-[#0A2240] hover:bg-[#0A2240]/90 text-white font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer shadow-xl shadow-[#0A2240]/10"
//           >
//             <span>View All Services</span>
//             <div className="w-5 h-5 rounded-full bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//               <ChevronRight className="w-3.5 h-3.5 text-[#0A2240]" strokeWidth={3} />
//             </div>
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }













// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Sparkles,
//   Crosshair,
//   ArrowUpRight,
//   ChevronRight,
// } from "lucide-react";

// export default function PesSaveServices() {
//   const navigate = useNavigate();
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const servicesData = [
//     {
//       id: "01",
//       title: "Mice & Rodent Control",
//       icon: ShieldAlert,
//       image: "/images/rodents.webp",
//       tag: "Mice & Rats",
//       details:
//         "Complete removal of mice and rats from your property. We use safe baiting systems and seal up all holes, cracks, and entry points to stop them from coming back inside.",
//     },
//     {
//       id: "02",
//       title: "Wasp Nest Eradication",
//       icon: Crosshair,
//       image: "/images/wasps.webp",
//       tag: "Wasp Removal",
//       details:
//         "Fast and professional treatment to safely remove active wasp nests from your loft, walls, or garden areas. Our local team responds quickly.",
//     },
//     {
//       id: "03",
//       title: "Bed Bug Heat Treatment",
//       icon: Sparkles,
//       image: "/images/bedbugs.webp",
//       tag: "Bed Bugs",
//       details:
//         "Eco-friendly thermal heat treatments that completely kill bed bugs and their eggs in mattresses, furniture, and carpets. Guaranteed results in just a single visit.",
//     },
//   ];

//   return (
//     <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-t border-[#0A2240]/10">
      
//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
//         {/* Modernist Section Header */}
//         <div className="max-w-3xl text-left mb-16 space-y-3">
//           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A2240]/70 block">
//             // Core Operational Lines
//           </span>
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
//             Emergency <br /> Protection Hub
//           </h2>
//         </div>

//         {/* !!! THE SPLIT-SCREEN CINEMATIC DECK LAYOUT */}
//         <div className="flex flex-col lg:flex-row items-stretch gap-4 h-[600px] lg:h-[550px] w-full">
//           {servicesData.map((service, index) => {
//             const Icon = service.icon;
//             const isHovered = hoveredIndex === index;
//             const anyHovered = hoveredIndex !== null;

//             // Flex layout calculation for smooth stretch dynamics
//             const flexClass = anyHovered 
//               ? isHovered 
//                 ? "lg:flex-[3.5] flex-[2]" 
//                 : "lg:flex-[0.8] flex-[0.5] opacity-40 select-none"
//               : "flex-1";

//             return (
//               <div
//                 key={service.id}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 onClick={() => navigate("/contact-us")} // Pure div par click handle working 100%
//                 className={`relative rounded-[32px] overflow-hidden bg-[#0A2240] text-white p-6 md:p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border border-white/10 shadow-xl ${flexClass}`}
//               >
//                 {/* Background Image Layer — Made crisp, high-contrast, and fully visible */}
//                 <div className="absolute inset-0 z-0 transition-all duration-700">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className={`w-full h-full object-cover transition-all duration-700 ${
//                       isHovered 
//                         ? "scale-100 grayscale-0 brightness-90 contrast-105" 
//                         : "scale-105 grayscale-[30%] brightness-[0.5] contrast-100"
//                     }`}
//                   />
//                   {/* Smooth dynamic overlay tint: goes lighter on hover for total image clarity */}
//                   <div className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-[#0A2240]/90 via-[#0A2240]/30 to-transparent ${
//                     isHovered ? "opacity-40" : "opacity-80"
//                   }`} />
//                 </div>

//                 {/* Top Row: Floating Indicator Status */}
//                 <div className="relative z-10 flex items-center justify-between w-full">
//                   <div className="flex items-center gap-4">
//                     <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500 ${
//                       isHovered 
//                         ? "bg-[#C5A86B] text-[#0A2240] border-transparent rotate-[360deg]" 
//                         : "bg-[#0A2240]/80 backdrop-blur-md text-[#C5A86B] border-white/20"
//                     }`}>
//                       <Icon className="w-5 h-5" strokeWidth={2} />
//                     </div>
//                     <span className={`font-mono text-xs font-black tracking-widest text-white/70 bg-[#0A2240]/50 px-2 py-0.5 rounded backdrop-blur-sm transition-opacity duration-300 ${
//                       anyHovered && !isHovered ? "lg:opacity-0" : "opacity-100"
//                     }`}>
//                       0{service.id}
//                     </span>
//                   </div>

//                   {/* Corner Arrow Indicator */}
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
//                     isHovered 
//                       ? "bg-white text-[#0A2240] rotate-45 opacity-100" 
//                       : "bg-[#0A2240]/80 text-white/80 border-white/20 lg:opacity-0 backdrop-blur-md"
//                   }`}>
//                     <ArrowUpRight className="w-4 h-4" />
//                   </div>
//                 </div>

//                 {/* Bottom Row: Content Reveal Engine */}
//                 <div className="relative z-10 w-full space-y-4 bg-gradient-to-t from-[#0A2240]/90 via-[#0A2240]/60 to-transparent p-4 rounded-b-[24px] backdrop-blur-[2px]">
//                   <div className="inline-block px-3 py-1 rounded-md bg-[#0A2240]/80 border border-white/10 text-[9px] font-mono tracking-widest uppercase text-[#C5A86B]">
//                     {service.tag}
//                   </div>

//                   <div className="space-y-3">
//                     <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight font-sans whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-md">
//                       {service.title}
//                     </h3>
                    
//                     {/* Height-collapse details description */}
//                     <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                       isHovered ? "max-h-[150px] opacity-100 pt-1" : "max-h-0 opacity-0 pointer-events-none"
//                     }`}>
//                       <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-100 max-w-xl drop-shadow">
//                         {service.details}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Decorative Side Label for Compressed Cards on Desktop */}
//                 {!isHovered && anyHovered && (
//                   <div className="absolute hidden lg:block inset-x-0 bottom-32 text-center pointer-events-none animate-fade-in">
//                     <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-white/40 bg-[#0A2240]/60 px-3 py-1 rounded-full backdrop-blur-sm rotate-90 inline-block origin-center whitespace-nowrap">
//                       View Service
//                     </span>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Global Footer Button */}
//         <div className="text-left md:text-center mt-16">
//           <button
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center gap-6 bg-[#0A2240] hover:bg-[#0A2240]/90 text-white font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer shadow-xl shadow-[#0A2240]/10"
//           >
//             <span>View All Services</span>
//             <div className="w-5 h-5 rounded-full bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//               <ChevronRight className="w-3.5 h-3.5 text-[#0A2240]" strokeWidth={3} />
//             </div>
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }











import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  Sparkles,
  Crosshair,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default function PesSaveServices() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const servicesData = [
    {
      id: "01",
      title: "Mice & Rodent Control",
      icon: ShieldAlert,
      image: "/images/rodents.webp",
      tag: "Mice & Rats",
      details:
        "Complete removal of mice and rats from your property. We use safe baiting systems and seal up all holes, cracks, and entry points to stop them from coming back inside.",
    },
    {
      id: "02",
      title: "Wasp Nest Eradication",
      icon: Crosshair,
      image: "/images/wasps.webp",
      tag: "Wasp Removal",
      details:
        "Fast and professional treatment to safely remove active wasp nests from your loft, walls, or garden areas. Our local team responds quickly.",
    },
    {
      id: "03",
      title: "Bed Bug Heat Treatment",
      icon: Sparkles,
      image: "/images/bedbugs.webp",
      tag: "Bed Bugs",
      details:
        "Eco-friendly thermal heat treatments that completely kill bed bugs and their eggs in mattresses, furniture, and carpets. Guaranteed results in just a single visit.",
    },
  ];

  return (
    <section className="bg-[#C5A86B] py-24 md:py-36 text-[#0A2240] relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Modernist Section Header */}
        <div className="max-w-3xl text-left mb-16 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A2240]/70 block">
            // Core Operational Lines
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
            Emergency <br /> Protection Hub
          </h2>
        </div>

        {/* !!! THE SPLIT-SCREEN CINEMATIC DECK LAYOUT */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 h-[600px] lg:h-[550px] w-full transform-gpu">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            const anyHovered = hoveredIndex !== null;

            // FIX: Specific layout bounds instead of layout broad transitions to prevent repaint cycles
            const flexClass = anyHovered 
              ? isHovered 
                ? "lg:flex-[3.5] flex-[2]" 
                : "lg:flex-[0.8] flex-[0.5] opacity-40 select-none"
              : "flex-1";

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigate("/contact-us")}
                // FIX: Removed transition-all, optimized with precise cubic-bezier flex-basis and opacity rules
                className={`relative rounded-[32px] overflow-hidden bg-[#161b22] text-white p-6 md:p-8 flex flex-col justify-between transition-[flex,opacity,border-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border border-white/10 shadow-xl transform-gpu will-change-[flex-basis,opacity] ${flexClass}`}
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 transition-transform duration-500 transform-gpu">
                  <img
                    src={service.image}
                    alt={service.title}
                    // FIX: Restricted to simple transform/filter transitions to avoid frame drop
                    className={`w-full h-full object-cover transition-[transform,filter] duration-500 transform-gpu ${
                      isHovered 
                        ? "scale-100 grayscale-0 brightness-[0.75] contrast-[1.05]" 
                        : "scale-105 grayscale-[15%] brightness-[0.4] contrast-100"
                    }`}
                  />
                  
                  {/* METALLIC GOLD MASK OVERLAY */}
                  <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-t from-[#C5A86B]/30 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom Text Protector Gradient */}
                  <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#0A2240] via-[#0A2240]/40 to-transparent pointer-events-none ${
                    isHovered ? "opacity-60" : "opacity-80"
                  }`} />
                </div>

                {/* Top Row: Floating Indicator Status */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    {/* FIX: Swapped transition-all with explicit transform/colors */}
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-[transform,background-color,color] duration-500 ${
                      isHovered 
                        ? "bg-[#C5A86B] text-[#0A2240] border-transparent rotate-[360deg]" 
                        : "bg-[#0A2240]/90 text-[#C5A86B] border-white/20"
                    }`}>
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <span className={`font-mono text-xs font-black tracking-widest text-white/90 bg-[#0A2240]/70 px-2 py-0.5 rounded transition-opacity duration-300 ${
                      anyHovered && !isHovered ? "lg:opacity-0" : "opacity-100"
                    }`}>
                      0{service.id}
                    </span>
                  </div>

                  {/* Corner Arrow Indicator */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-[transform,background-color,opacity] duration-500 ${
                    isHovered 
                      ? "bg-white text-[#0A2240] rotate-45 opacity-100" 
                      : "bg-[#0A2240]/90 text-white/80 border-white/20 lg:opacity-0"
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Row: Content Reveal Engine */}
                {/* FIX: Removed backdrop-blur to drop processing latency on mobile layers */}
                <div className="relative z-10 w-full space-y-4 bg-gradient-to-t from-[#0A2240] via-[#0A2240]/90 to-transparent p-5 rounded-b-[24px]">
                  <div className="inline-block px-3 py-1 rounded-md bg-[#0A2240] border border-[#C5A86B]/30 text-[9px] font-mono tracking-widest uppercase text-[#C5A86B]">
                    {service.tag}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight font-sans whitespace-nowrap overflow-hidden text-ellipsis text-white">
                      {service.title}
                    </h3>
                    
                    {/* Height-collapse mechanics */}
                    {/* FIX: Replaced complex layout auto transitions with smooth visibility/opacity tracking */}
                    <div className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden transform-gpu ${
                      isHovered ? "max-h-[150px] opacity-100 pt-1" : "max-h-0 opacity-0 pointer-events-none"
                    }`}>
                      <p className="text-xs md:text-sm font-medium leading-relaxed text-slate-200 max-w-xl">
                        {service.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Side Label for Compressed Cards on Desktop */}
                {!isHovered && anyHovered && (
                  <div className="absolute hidden lg:block inset-x-0 bottom-32 text-center pointer-events-none">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-[#C5A86B] bg-[#0A2240]/90 border border-[#C5A86B]/20 px-3 py-1 rounded-full rotate-90 inline-block origin-center whitespace-nowrap shadow-md">
                      View Service
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Global Footer Button */}
        <div className="text-left md:text-center mt-16">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-6 bg-[#0A2240] hover:bg-[#0A2240]/90 text-white font-black text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-full transition-[transform,background-color] duration-300 hover:-translate-y-0.5 active:scale-[0.98] group cursor-pointer shadow-xl shadow-[#0A2240]/10"
          >
            <span>View All Services</span>
            <div className="w-5 h-5 rounded-full bg-[#C5A86B] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ChevronRight className="w-3.5 h-3.5 text-[#0A2240]" strokeWidth={3} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}