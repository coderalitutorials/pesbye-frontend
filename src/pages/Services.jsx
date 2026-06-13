// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   ShieldAlert,
//   Plus,
//   Minus,
//   Bug,
//   Activity,
//   Compass,
//   ArrowRight,
//   Focus,
// } from "lucide-react";

// export default function Services() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const hasScrolled = useRef(false);
  
//   // Custom states for category and active accordion strip
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [expandedId, setExpandedId] = useState(null);

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ant Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE RISK",
//       spec: "ADVANCED BAITING MATRIX",
//       code: "PRIME-ANT-01",
//       details:
//         "Targeted treatment for stubborn ant infestations, focusing on tracking foraging paths to destroy hidden nests beneath flooring and structural foundations permanently.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL THREAT",
//       spec: "PREMIUM HEAT TREATMENT",
//       code: "PRIME-BUG-02",
//       details:
//         "Industrial-grade thermal heat and targeted spray applications that completely eliminate mature bed bugs and their larvae from mattresses, bed frames, and deep upholstery.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "PRIME-MTH-03",
//       details:
//         "Specialized target applications onto high-end carpets and fabrics. Safely terminates larvae to protect luxury textile items and wool carpet linings from damage.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Removal",
//       image: "/images/beetle.webp",
//       threat: "MODERATE RISK",
//       spec: "PERIMETER LIQUID SHIELD",
//       code: "PRIME-BTL-04",
//       details:
//         "Precise treatments along baseboards, skirting boards, and dark storage areas to eradicate floor beetles before they compromise custom woolworks and internal fittings.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL THREAT",
//       spec: "ECO GEL INJECTION",
//       code: "PRIME-COCK-05",
//       details:
//         "High-performance, low-odor gel baits deployed directly into high-heat commercial kitchens, cracks, and crevices where roaches feed and breed.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL THREAT",
//       spec: "STRUCTURAL PROOFING MESH",
//       code: "PRIME-MCE-06",
//       details:
//         "Comprehensive tracking, safe baiting stations, and immediate blockage of sub-floor access points using steel mesh guards and specialized concrete fills.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Eradication",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "GROWTH REGULATOR MIST",
//       code: "PRIME-FLE-07",
//       details:
//         "Full internal floor space misting that halts flea multiplication loops, penetrating deep carpets and pet resting spots to clean living spaces completely.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasp Nest Removal",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-REACH POWDER DISPATCH",
//       code: "PRIME-WSP-08",
//       details:
//         "Fast-acting chemical injection treatments for hanging or internal roofline wasp nests, securing overhead structures and gutters without structural damage.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bee Relocation",
//       image: "/images/bee.webp",
//       threat: "ECO-FRIENDLY ACTION",
//       spec: "LIVE CAPTURE & TRANSFER",
//       code: "PRIME-BEE-09",
//       details:
//         "Eco-conscious and secure live extraction setups meant to clean structural cavities while safeguarding healthy bee colonies by relocating them to rural hives.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Exclusion",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "LOFT BLOCKADE SHIELDS",
//       code: "PRIME-SQR-10",
//       details:
//         "Heavy-gauge metal wire sealing and entry blockades on roof areas to stop squirrels from gnawing internal electrical lines and destroying attic insulation.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL RISK",
//       spec: "BIOCIDE SURFACE CLEANSE",
//       code: "PRIME-HYG-11",
//       details:
//         "Post-infestation cleanup using deep sanitizing solutions alongside physical entry proofing to eliminate biological trace marks and scent lines completely.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Bird Netting & Spikes",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL RISK",
//       spec: "ARCHITECTURAL FAÇADE NETS",
//       code: "PRIME-BRD-12",
//       details:
//         "Premium tension wires, non-harmful optical repellents, and heavy-duty UV-stabilized netting arrays designed to keep pigeons away from architectural trim, balconies, and solar frameworks.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state && !hasScrolled.current) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//             hasScrolled.current = true;
//             // Automatically expand if navigated directly
//             const found = servicesData.find(s => s.title === targetServiceTitle);
//             if (found) setExpandedId(found.id);
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   const toggleExpand = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   return (
//     <main className="bg-[#C5A86B] text-[#0A2240] min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#0A2240]/20 selection:text-[#0A2240] transform-gpu isolate backface-hidden">
      
//       {/* Top and Bottom Premium Accent Vectors */}
//       <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

//       {/* Header Dashboard Section */}
//       <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-[#0A2240]/10">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//           <div className="space-y-4 text-left max-w-3xl">
//             <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0A2240]/60 block">
//               // Premium Deployment Matrix
//             </span>
//             <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-none text-[#0A2240]">
//               Operational Focus
//             </h1>
//             <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
//               Isolate macro environments using our industrial containment systems. Expand any individual defense sector line below to initiate specialized trace destruction.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-1.5 bg-[#0A2240]/5 border border-[#0A2240]/10 p-1.5 rounded-2xl md:max-w-md w-full justify-start md:justify-end">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => {
//                     setSelectedCategory(cat);
//                     setExpandedId(null); // Reset visibility on filter switch
//                   }}
//                   className={`px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 rounded-xl cursor-pointer ${
//                     isActive
//                       ? "bg-[#0A2240] text-white font-black shadow-xl shadow-[#0A2240]/20"
//                       : "text-[#0A2240]/70 hover:text-[#0A2240] hover:bg-[#0A2240]/5"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* MONOLITHIC VERTICAL ACCORD-STRIP RUNWAY */}
//       <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="divide-y divide-[#0A2240]/10 border-b border-[#0A2240]/10">
//           {filteredServices.map((service, idx) => {
//             const isCurrentExpanded = expandedId === service.id;

//             return (
//               <div
//                 key={service.id}
//                 data-title={service.title}
//                 className="group relative transform-gpu will-change-transform text-left transition-colors duration-300"
//                 style={{ contentVisibility: "auto" }}
//               >
//                 {/* Horizontal Clickable Action Row */}
//                 <div
//                   onClick={() => toggleExpand(service.id)}
//                   className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center cursor-pointer select-none relative z-10"
//                 >
//                   {/* Column 1: Indexing System */}
//                   <div className="md:col-span-1 hidden md:block">
//                     <span className="font-mono text-xs font-bold opacity-40 group-hover:opacity-100 transition-opacity duration-200">
//                       0{idx + 1}
//                     </span>
//                   </div>

//                   {/* Column 2: Code Metrics */}
//                   <div className="md:col-span-2">
//                     <span className="font-mono text-[10px] font-bold tracking-widest border border-[#0A2240]/20 px-2.5 py-1 rounded bg-[#0A2240]/5 text-[#0A2240]">
//                       {service.code}
//                     </span>
//                   </div>

//                   {/* Column 3: Monolithic Corporate Title */}
//                   <div className="md:col-span-5">
//                     <h3 className="text-xl md:text-3xl font-black tracking-tight text-[#0A2240] uppercase transition-all duration-300 group-hover:translate-x-1">
//                       {service.title}
//                     </h3>
//                   </div>

//                   {/* Column 4: Risk Threat Matrix */}
//                   <div className="md:col-span-3 font-mono text-[10px] text-[#0A2240]/70 flex items-center gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240]" />
//                     <span className="tracking-wider">{service.threat}</span>
//                   </div>

//                   {/* Column 5: Expand State Icon Modulator */}
//                   <div className="md:col-span-1 flex justify-end">
//                     <div className="w-8 h-8 rounded-full border border-[#0A2240]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0A2240] group-hover:text-white">
//                       {isCurrentExpanded ? (
//                         <Minus className="w-3.5 h-3.5" strokeWidth={3} />
//                       ) : (
//                         <Plus className="w-3.5 h-3.5" strokeWidth={3} />
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Dynamic Content Panel Drawer (Smooth Height Management) */}
//                 <div
//                   className={`overflow-hidden transition-all duration-300 ease-in-out transform-gpu ${
//                     isCurrentExpanded ? "max-h-[500px] opacity-100 pb-10" : "max-h-0 opacity-0 pointer-events-none"
//                   }`}
//                 >
//                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center bg-[#0A2240]/5 border border-[#0A2240]/10 p-6 md:p-8 rounded-2xl shadow-inner">
                    
//                     {/* Left Grid: Context Specifications */}
//                     <div className="lg:col-span-4 space-y-4">
//                       <div className="space-y-1">
//                         <span className="text-[9px] font-mono tracking-widest text-[#0A2240]/50 block uppercase">// System Deployment Spec</span>
//                         <p className="text-xs font-mono font-black text-[#0A2240] uppercase tracking-wide flex items-center gap-2">
//                           <Focus className="w-3.5 h-3.5" /> {service.spec}
//                         </p>
//                       </div>
                      
//                       <div className="space-y-1">
//                         <span className="text-[9px] font-mono tracking-widest text-[#0A2240]/50 block uppercase">// Target Sector Scope</span>
//                         <p className="text-xs font-mono font-bold text-[#0A2240]/70 uppercase tracking-wide">
//                           {service.cat} Matrix Grid
//                         </p>
//                       </div>
//                     </div>

//                     {/* Center Grid: Deep Detail Context */}
//                     <div className="lg:col-span-5 space-y-4">
//                       <p className="text-sm text-[#0A2240]/90 font-medium leading-relaxed">
//                         {service.details}
//                       </p>
//                     </div>

//                     {/* Right Grid: Structural Mask Link Trigger */}
//                     <div className="lg:col-span-3 flex flex-col md:flex-row lg:flex-col items-stretch lg:items-end justify-between gap-4 h-full">
//                       {/* Premium Ultra-Mini Image Mask */}
//                       <div className="h-20 w-full lg:w-40 rounded-xl overflow-hidden border border-[#0A2240]/10 bg-[#0A2240]/10 relative">
//                         <img
//                           src={service.image}
//                           alt={service.title}
//                           className="w-full h-full object-cover mix-blend-overlay opacity-60"
//                           loading="lazy"
//                         />
//                       </div>

//                       {/* Direct Navigation Button */}
//                       <button
//                         onClick={() => navigate("/contact-us")}
//                         className="inline-flex items-center justify-between lg:justify-center gap-6 bg-[#0A2240] text-white rounded-xl px-5 py-3.5 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-[#0A2240]/90 active:scale-[0.98] shadow-lg shadow-[#0A2240]/10 w-full"
//                       >
//                         <span>Schedule Setup</span>
//                         <ArrowRight className="w-4 h-4 text-[#C5A86B]" strokeWidth={3} />
//                       </button>
//                     </div>

//                   </div>
//                 </div>

//               </div>
//             );
//           })}
//         </div>

//         {/* Dynamic Fallback Shield */}
//         {filteredServices.length === 0 && (
//           <div className="text-center py-20 border border-[#0A2240]/10 bg-[#0A2240]/5 rounded-3xl max-w-xl mx-auto shadow-xl mt-8">
//             <ShieldAlert className="w-8 h-8 text-[#0A2240] mx-auto mb-3" />
//             <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A2240]/70">
//               No service protocols match this criteria.
//             </p>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   ArrowRight,
//   Layers,
// } from "lucide-react";

// export default function Services() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const hasScrolled = useRef(false);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ant Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE RISK",
//       spec: "ADVANCED BAITING MATRIX",
//       code: "PRIME-ANT-01",
//       details:
//         "Targeted treatment for stubborn ant infestations, focusing on tracking foraging paths to destroy hidden nests beneath flooring and structural foundations permanently.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL THREAT",
//       spec: "PREMIUM HEAT TREATMENT",
//       code: "PRIME-BUG-02",
//       details:
//         "Industrial-grade thermal heat and targeted spray applications that completely eliminate mature bed bugs and their larvae from mattresses, bed frames, and deep upholstery.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "PRIME-MTH-03",
//       details:
//         "Specialized target applications onto high-end carpets and fabrics. Safely terminates larvae to protect luxury textile items and wool carpet linings from damage.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Removal",
//       image: "/images/beetle.webp",
//       threat: "MODERATE RISK",
//       spec: "PERIMETER LIQUID SHIELD",
//       code: "PRIME-BTL-04",
//       details:
//         "Precise treatments along baseboards, skirting boards, and dark storage areas to eradicate floor beetles before they compromise custom woolworks and internal fittings.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL THREAT",
//       spec: "ECO GEL INJECTION",
//       code: "PRIME-COCK-05",
//       details:
//         "High-performance, low-odor gel baits deployed directly into high-heat commercial kitchens, cracks, and crevices where roaches feed and breed.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL THREAT",
//       spec: "STRUCTURAL PROOFING MESH",
//       code: "PRIME-MCE-06",
//       details:
//         "Comprehensive tracking, safe baiting stations, and immediate blockage of sub-floor access points using steel mesh guards and specialized concrete fills.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Eradication",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "GROWTH REGULATOR MIST",
//       code: "PRIME-FLE-07",
//       details:
//         "Full internal floor space misting that halts flea multiplication loops, penetrating deep carpets and pet resting spots to clean living spaces completely.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasp Nest Removal",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-REACH POWDER DISPATCH",
//       code: "PRIME-WSP-08",
//       details:
//         "Fast-acting chemical injection treatments for hanging or internal roofline wasp nests, securing overhead structures and gutters without structural damage.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bee Relocation",
//       image: "/images/bee.webp",
//       threat: "ECO-FRIENDLY ACTION",
//       spec: "LIVE CAPTURE & TRANSFER",
//       code: "PRIME-BEE-09",
//       details:
//         "Eco-conscious and secure live extraction setups meant to clean structural cavities while safeguarding healthy bee colonies by relocating them to rural hives.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Exclusion",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "LOFT BLOCKADE SHIELDS",
//       code: "PRIME-SQR-10",
//       details:
//         "Heavy-gauge metal wire sealing and entry blockades on roof areas to stop squirrels from gnawing internal electrical lines and destroying attic insulation.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL RISK",
//       spec: "BIOCIDE SURFACE CLEANSE",
//       code: "PRIME-HYG-11",
//       details:
//         "Post-infestation cleanup using deep sanitizing solutions alongside physical entry proofing to eliminate biological trace marks and scent lines completely.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Bird Netting & Spikes",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL RISK",
//       spec: "ARCHITECTURAL FAÇADE NETS",
//       code: "PRIME-BRD-12",
//       details:
//         "Premium tension wires, non-harmful optical repellents, and heavy-duty UV-stabilized netting arrays designed to keep pigeons away from architectural trim, balconies, and solar frameworks.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state && !hasScrolled.current) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//             hasScrolled.current = true;
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#C5A86B] text-[#0A2240] min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#0A2240]/20 selection:text-[#0A2240] transform-gpu isolate backface-hidden">
      
//       {/* Structural Minimal Borders */}
//       <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

//       {/* Corporate Monolithic Header */}
//       <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-[#0A2240]/15">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//           <div className="space-y-4 text-left max-w-3xl">
//             <div className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-[#0A2240]/60 bg-[#0A2240]/5 px-3 py-1 rounded border border-[#0A2240]/10">
//               <Bug className="w-3.5 h-3.5" />
//               <span>Eradication Protocol Index</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-[#0A2240]">
//               Operational Focus
//             </h1>
//             <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
//               Complete index of targeted defense vectors. Review continuous tactical layouts and deployment parameters upfront without secondary actions.
//             </p>
//           </div>

//           {/* Navigation Category Switcher */}
//           <div className="flex flex-wrap gap-1.5 bg-[#0A2240]/5 border border-[#0A2240]/10 p-1.5 rounded-2xl md:max-w-md w-full justify-start md:justify-end h-max">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 rounded-xl cursor-pointer ${
//                     isActive
//                       ? "bg-[#0A2240] text-white font-black shadow-xl shadow-[#0A2240]/20"
//                       : "text-[#0A2240]/70 hover:text-[#0A2240] hover:bg-[#0A2240]/5"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* UPFRONT MATRIX RUNWAY (NO CLICKS, NO CARDS) */}
//       <section className="py-8 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="divide-y divide-[#0A2240]/15 border-b border-[#0A2240]/15">
//           {filteredServices.map((service, idx) => (
//             <div
//               key={service.id}
//               data-title={service.title}
//               onClick={() => navigate("/contact-us")}
//               className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group cursor-pointer relative transform-gpu will-change-transform text-left transition-colors duration-300"
//               style={{ contentVisibility: "auto" }}
//             >
//               {/* Invisible Premium Row Highlight Mask */}
//               <div className="absolute inset-y-2 -inset-x-4 bg-[#0A2240]/[0.02] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-200 pointer-events-none transform-gpu" />

//               {/* Column 1: Metadata Indices (Telemetry) */}
//               <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start lg:space-y-6 items-center lg:items-start relative z-10">
//                 <div className="flex items-center gap-4">
//                   <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-200 hidden lg:inline">
//                     0{idx + 1}
//                   </span>
//                   <span className="font-mono text-[10px] font-bold tracking-widest border border-[#0A2240]/20 px-2.5 py-1 rounded bg-[#0A2240]/5 text-[#0A2240]">
//                     {service.code}
//                   </span>
//                 </div>
//                 <div className="font-mono text-[10px] text-[#0A2240]/60 flex items-center gap-2">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] opacity-60" />
//                   <span className="tracking-wider group-hover:text-[#0A2240] transition-colors duration-200">{service.threat}</span>
//                 </div>
//               </div>

//               {/* Column 2: Content Details Matrix */}
//               <div className="lg:col-span-6 space-y-3 relative z-10">
//                 <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#0A2240] uppercase transition-colors duration-200">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#0A2240]/80 text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-200 group-hover:text-[#0A2240]">
//                   {service.details}
//                 </p>
//                 <div className="pt-1 flex items-center gap-1.5 text-[9px] font-mono text-[#0A2240]/50 uppercase tracking-widest">
//                   <Layers className="w-3 h-3 text-[#0A2240]/40" />
//                   <span>{service.spec}</span>
//                 </div>
//               </div>

//               {/* Column 3: Ultra Minimal Image & Deploy Actions */}
//               <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:space-y-4 relative z-10 w-full">
                
//                 {/* Clean Image Framework Mask */}
//                 <div className="h-16 w-28 lg:w-36 rounded-xl overflow-hidden border border-[#0A2240]/10 bg-[#0A2240]/10 relative group-hover:border-[#0A2240]/20 transition-all duration-300 shadow-sm hidden sm:block">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500 transform-gpu"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* Direct Action Indicator */}
//                 <div className="inline-flex items-center gap-4 text-xs font-black tracking-widest uppercase text-[#0A2240]/40 group-hover:text-[#0A2240] transition-colors duration-200 ml-auto lg:ml-0">
//                   <span className="text-[9px] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 font-mono">
//                     BOOK SERVICE
//                   </span>
//                   <div className="w-9 h-9 rounded-full border border-[#0A2240]/20 flex items-center justify-center transition-all duration-300 bg-transparent group-hover:bg-[#0A2240] group-hover:border-[#0A2240]">
//                     <ArrowRight className="w-4 h-4 text-[#0A2240] group-hover:text-[#C5A86B] transition-colors duration-200" strokeWidth={3} />
//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Empty State Diagnostic Area */}
//       {filteredServices.length === 0 && (
//         <div className="text-center py-24 border border-[#0A2240]/10 bg-[#0A2240]/5 rounded-3xl max-w-xl mx-auto shadow-xl mt-8 mb-12">
//           <ShieldAlert className="w-8 h-8 text-[#0A2240] mx-auto mb-3" />
//           <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A2240]/70">
//             No active protection vectors discovered.
//           </p>
//         </div>
//       )}
//     </main>
//   );
// }


















// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   ArrowRight,
//   Layers,
// } from "lucide-react";

// export default function Services() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const hasScrolled = useRef(false);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ant Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE RISK",
//       spec: "ADVANCED BAITING MATRIX",
//       code: "PRIME-ANT-01",
//       details:
//         "Targeted treatment for stubborn ant infestations, focusing on tracking foraging paths to destroy hidden nests beneath flooring and structural foundations permanently.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL THREAT",
//       spec: "PREMIUM HEAT TREATMENT",
//       code: "PRIME-BUG-02",
//       details:
//         "Industrial-grade thermal heat and targeted spray applications that completely eliminate mature bed bugs and their larvae from mattresses, bed frames, and deep upholstery.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "PRIME-MTH-03",
//       details:
//         "Specialized target applications onto high-end carpets and fabrics. Safely terminates larvae to protect luxury textile items and wool carpet linings from damage.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Removal",
//       image: "/images/beetle.webp",
//       threat: "MODERATE RISK",
//       spec: "PERIMETER LIQUID SHIELD",
//       code: "PRIME-BTL-04",
//       details:
//         "Precise treatments along baseboards, skirting boards, and dark storage areas to eradicate floor beetles before they compromise custom woolworks and internal fittings.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL THREAT",
//       spec: "ECO GEL INJECTION",
//       code: "PRIME-COCK-05",
//       details:
//         "High-performance, low-odor gel baits deployed directly into high-heat commercial kitchens, cracks, and crevices where roaches feed and breed.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL THREAT",
//       spec: "STRUCTURAL PROOFING MESH",
//       code: "PRIME-MCE-06",
//       details:
//         "Comprehensive tracking, safe baiting stations, and immediate blockage of sub-floor access points using steel mesh guards and specialized concrete fills.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Eradication",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "GROWTH REGULATOR MIST",
//       code: "PRIME-FLE-07",
//       details:
//         "Full internal floor space misting that halts flea multiplication loops, penetrating deep carpets and pet resting spots to clean living spaces completely.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasp Nest Removal",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-REACH POWDER DISPATCH",
//       code: "PRIME-WSP-08",
//       details:
//         "Fast-acting chemical injection treatments for hanging or internal roofline wasp nests, securing overhead structures and gutters without structural damage.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bee Relocation",
//       image: "/images/bee.webp",
//       threat: "ECO-FRIENDLY ACTION",
//       spec: "LIVE CAPTURE & TRANSFER",
//       code: "PRIME-BEE-09",
//       details:
//         "Eco-conscious and secure live extraction setups meant to clean structural cavities while safeguarding healthy bee colonies by relocating them to rural hives.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Exclusion",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "LOFT BLOCKADE SHIELDS",
//       code: "PRIME-SQR-10",
//       details:
//         "Heavy-gauge metal wire sealing and entry blockades on roof areas to stop squirrels from gnawing internal electrical lines and destroying attic insulation.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL RISK",
//       spec: "BIOCIDE SURFACE CLEANSE",
//       code: "PRIME-HYG-11",
//       details:
//         "Post-infestation cleanup using deep sanitizing solutions alongside physical entry proofing to eliminate biological trace marks and scent lines completely.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Bird Netting & Spikes",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL RISK",
//       spec: "ARCHITECTURAL FAÇADE NETS",
//       code: "PRIME-BRD-12",
//       details:
//         "Premium tension wires, non-harmful optical repellents, and heavy-duty UV-stabilized netting arrays designed to keep pigeons away from architectural trim, balconies, and solar frameworks.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state && !hasScrolled.current) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//             hasScrolled.current = true;
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#C5A86B] text-[#0A2240] min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#0A2240]/20 selection:text-[#0A2240] transform-gpu isolate backface-hidden">
      
//       {/* Structural Minimal Borders */}
//       <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

//       {/* Corporate Monolithic Header */}
//       <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-[#0A2240]/15">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//           <div className="space-y-4 text-left max-w-3xl">
//             <div className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-[#0A2240]/60 bg-[#0A2240]/5 px-3 py-1 rounded border border-[#0A2240]/10">
//               <Bug className="w-3.5 h-3.5" />
//               <span>Eradication Protocol Index</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-[#0A2240]">
//               Operational Focus
//             </h1>
//             <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
//               Complete index of targeted defense vectors. Review continuous tactical layouts and deployment parameters upfront without secondary actions.
//             </p>
//           </div>

//           {/* Navigation Category Switcher */}
//           <div className="flex flex-wrap gap-1.5 bg-[#0A2240]/5 border border-[#0A2240]/10 p-1.5 rounded-2xl md:max-w-md w-full justify-start md:justify-end h-max">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 rounded-xl cursor-pointer ${
//                     isActive
//                       ? "bg-[#0A2240] text-white font-black shadow-xl shadow-[#0A2240]/20"
//                       : "text-[#0A2240]/70 hover:text-[#0A2240] hover:bg-[#0A2240]/5"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* UPFRONT MATRIX RUNWAY */}
//       <section className="py-8 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="divide-y divide-[#0A2240]/15 border-b border-[#0A2240]/15">
//           {filteredServices.map((service, idx) => (
//             <div
//               key={service.id}
//               data-title={service.title}
//               onClick={() => navigate("/contact-us")}
//               className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group cursor-pointer relative transform-gpu will-change-transform text-left transition-colors duration-300"
//               style={{ contentVisibility: "auto" }}
//             >
//               {/* Row Highlight Overlay Mask */}
//               <div className="absolute inset-y-2 -inset-x-4 bg-[#0A2240]/[0.02] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-200 pointer-events-none transform-gpu" />

//               {/* Column 1: Metadata Indices */}
//               <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start lg:space-y-6 items-center lg:items-start relative z-10">
//                 <div className="flex items-center gap-4">
//                   <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-200 hidden lg:inline">
//                     0{idx + 1}
//                   </span>
//                   <span className="font-mono text-[10px] font-bold tracking-widest border border-[#0A2240]/20 px-2.5 py-1 rounded bg-[#0A2240]/5 text-[#0A2240]">
//                     {service.code}
//                   </span>
//                 </div>
//                 <div className="font-mono text-[10px] text-[#0A2240]/60 flex items-center gap-2">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] opacity-60" />
//                   <span className="tracking-wider group-hover:text-[#0A2240] transition-colors duration-200">{service.threat}</span>
//                 </div>
//               </div>

//               {/* Column 2: Content Details Matrix */}
//               <div className="lg:col-span-6 space-y-3 relative z-10">
//                 <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#0A2240] uppercase transition-colors duration-200">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#0A2240]/80 text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-200 group-hover:text-[#0A2240]">
//                   {service.details}
//                 </p>
//                 <div className="pt-1 flex items-center gap-1.5 text-[9px] font-mono text-[#0A2240]/50 uppercase tracking-widest">
//                   <Layers className="w-3 h-3 text-[#0A2240]/40" />
//                   <span>{service.spec}</span>
//                 </div>
//               </div>

//               {/* Column 3: Premium Actions Layer (Differentiated for Mobile vs Desktop) */}
//               <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:space-y-4 relative z-10 w-full">
                
//                 {/* ==================== MOBILE LAYOUT ELEMENT ==================== */}
//                 <div className="flex sm:hidden items-center justify-between w-full mt-2 pt-4 border-t border-[#0A2240]/10">
//                   <div className="w-16 h-16 aspect-square rounded-xl overflow-hidden border border-[#0A2240]/15 bg-[#0A2240]/10 flex-shrink-0">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover opacity-100"
//                       loading="lazy"
//                     />
//                   </div>
                  
//                   {/* Clean, Non-Hidden Book Service Block for Mobile */}
//                   <div className="inline-flex items-center gap-2 bg-[#0A2240] text-[#C5A86B] px-3.5 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-md shadow-[#0A2240]/10">
//                     <span>BOOK SERVICE</span>
//                     <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
//                   </div>
//                 </div>

//                 {/* ==================== DESKTOP LAYOUT ELEMENT ==================== */}
//                 {/* Expanded Square Image Frame */}
//                 <div className="hidden sm:block w-24 h-24 lg:w-28 lg:h-28 aspect-square rounded-xl overflow-hidden border border-[#0A2240]/10 bg-[#0A2240]/10 relative group-hover:border-[#0A2240]/30 transition-all duration-300 shadow-sm flex-shrink-0">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 transform-gpu"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* Corporate Magnetizing Hover Button Trigger */}
//                 <div className="hidden sm:inline-flex items-center gap-0 group-hover:gap-3 bg-transparent group-hover:bg-[#0A2240] border border-transparent group-hover:border-[#0A2240] pl-0 group-hover:pl-4 pr-0 rounded-full transition-all duration-300 h-10 ml-auto lg:ml-0 overflow-hidden">
//                   <span className="text-[9px] font-mono font-black tracking-widest uppercase text-[#0A2240] group-hover:text-[#C5A86B] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
//                     BOOK SERVICE
//                   </span>
//                   <div className="w-10 h-10 rounded-full border border-[#0A2240]/20 group-hover:border-transparent flex items-center justify-center transition-all duration-300 bg-transparent flex-shrink-0">
//                     <ArrowRight className="w-4 h-4 text-[#0A2240] group-hover:text-[#C5A86B] transition-colors duration-300" strokeWidth={3} />
//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Empty State Diagnostic Area */}
//       {filteredServices.length === 0 && (
//         <div className="text-center py-24 border border-[#0A2240]/10 bg-[#0A2240]/5 rounded-3xl max-w-xl mx-auto shadow-xl mt-8 mb-12">
//           <ShieldAlert className="w-8 h-8 text-[#0A2240] mx-auto mb-3" />
//           <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A2240]/70">
//             No active protection vectors discovered.
//           </p>
//         </div>
//       )}
//     </main>
//   );
// }












// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   ArrowRight,
//   Layers,
// } from "lucide-react";

// export default function Services() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const hasScrolled = useRef(false);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ant Control",
//       image: "/images/ants.webp",
//       threat: "MODERATE RISK",
//       spec: "ADVANCED BAITING MATRIX",
//       code: "PRIME-ANT-01",
//       details:
//         "Targeted treatment for stubborn ant infestations, focusing on tracking foraging paths to destroy hidden nests beneath flooring and structural foundations permanently.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       threat: "CRITICAL THREAT",
//       spec: "PREMIUM HEAT TREATMENT",
//       code: "PRIME-BUG-02",
//       details:
//         "Industrial-grade thermal heat and targeted spray applications that completely eliminate mature bed bugs and their larvae from mattresses, bed frames, and deep upholstery.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Treatment",
//       image: "/images/moths.webp",
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "PRIME-MTH-03",
//       details:
//         "Specialized target applications onto high-end carpets and fabrics. Safely terminates larvae to protect luxury textile items and wool carpet linings from damage.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Removal",
//       image: "/images/beetle.webp",
//       threat: "MODERATE RISK",
//       spec: "PERIMETER LIQUID SHIELD",
//       code: "PRIME-BTL-04",
//       details:
//         "Precise treatments along baseboards, skirting boards, and dark storage areas to eradicate floor beetles before they compromise custom woolworks and internal fittings.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control",
//       image: "/images/cockroach.webp",
//       threat: "CRITICAL THREAT",
//       spec: "ECO GEL INJECTION",
//       code: "PRIME-COCK-05",
//       details:
//         "High-performance, low-odor gel baits deployed directly into high-heat commercial kitchens, cracks, and crevices where roaches feed and breed.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       threat: "CRITICAL THREAT",
//       spec: "STRUCTURAL PROOFING MESH",
//       code: "PRIME-MCE-06",
//       details:
//         "Comprehensive tracking, safe baiting stations, and immediate blockage of sub-floor access points using steel mesh guards and specialized concrete fills.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Eradication",
//       image: "/images/flea.webp",
//       threat: "HIGH RISK",
//       spec: "GROWTH REGULATOR MIST",
//       code: "PRIME-FLE-07",
//       details:
//         "Full internal floor space misting that halts flea multiplication loops, penetrating deep carpets and pet resting spots to clean living spaces completely.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasp Nest Removal",
//       image: "/images/wasps.webp",
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-REACH POWDER DISPATCH",
//       code: "PRIME-WSP-08",
//       details:
//         "Fast-acting chemical injection treatments for hanging or internal roofline wasp nests, securing overhead structures and gutters without structural damage.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bee Relocation",
//       image: "/images/bee.webp",
//       threat: "ECO-FRIENDLY ACTION",
//       spec: "LIVE CAPTURE & TRANSFER",
//       code: "PRIME-BEE-09",
//       details:
//         "Eco-conscious and secure live extraction setups meant to clean structural cavities while safeguarding healthy bee colonies by relocating them to rural hives.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Exclusion",
//       image: "/images/squirrel.webp",
//       threat: "HIGH RISK",
//       spec: "LOFT BLOCKADE SHIELDS",
//       code: "PRIME-SQR-10",
//       details:
//         "Heavy-gauge metal wire sealing and entry blockades on roof areas to stop squirrels from gnawing internal electrical lines and destroying attic insulation.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing",
//       image: "/images/hygene.webp",
//       threat: "ENVIRONMENTAL RISK",
//       spec: "BIOCIDE SURFACE CLEANSE",
//       code: "PRIME-HYG-11",
//       details:
//         "Post-infestation cleanup using deep sanitizing solutions alongside physical entry proofing to eliminate biological trace marks and scent lines completely.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Bird Netting & Spikes",
//       image: "/images/birds.webp",
//       threat: "HIGH STRUCTURAL RISK",
//       spec: "ARCHITECTURAL FAÇADE NETS",
//       code: "PRIME-BRD-12",
//       details:
//         "Premium tension wires, non-harmful optical repellents, and heavy-duty UV-stabilized netting arrays designed to keep pigeons away from architectural trim, balconies, and solar frameworks.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state && !hasScrolled.current) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//             hasScrolled.current = true;
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#C5A86B] text-[#0A2240] min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#0A2240]/20 selection:text-[#0A2240] transform-gpu isolate backface-hidden">
      
//       {/* Structural Minimal Borders */}
//       <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

//       {/* Corporate Monolithic Header */}
//       <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-[#0A2240]/15">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//           <div className="space-y-4 text-left max-w-3xl">
//             <div className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-[#0A2240]/60 bg-[#0A2240]/5 px-3 py-1 rounded border border-[#0A2240]/10">
//               <Bug className="w-3.5 h-3.5" />
//               <span>Eradication Protocol Index</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-[#0A2240]">
//               Operational Focus
//             </h1>
//             <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
//               Complete index of targeted defense vectors. Review continuous tactical layouts and deployment parameters upfront without secondary actions.
//             </p>
//           </div>

//           {/* Navigation Category Switcher */}
//           <div className="flex flex-wrap gap-1.5 bg-[#0A2240]/5 border border-[#0A2240]/10 p-1.5 rounded-2xl md:max-w-md w-full justify-start md:justify-end h-max">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 rounded-xl cursor-pointer ${
//                     isActive
//                       ? "bg-[#0A2240] text-white font-black shadow-xl shadow-[#0A2240]/20"
//                       : "text-[#0A2240]/70 hover:text-[#0A2240] hover:bg-[#0A2240]/5"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* UPFRONT MATRIX RUNWAY */}
//       <section className="py-8 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="divide-y divide-[#0A2240]/15 border-b border-[#0A2240]/15">
//           {filteredServices.map((service, idx) => (
//             <div
//               key={service.id}
//               data-title={service.title}
//               onClick={() => navigate("/contact-us")}
//               className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group cursor-pointer relative transform-gpu will-change-transform text-left transition-colors duration-300"
//               style={{ contentVisibility: "auto" }}
//             >
//               {/* Row Highlight Overlay Mask */}
//               <div className="absolute inset-y-2 -inset-x-4 bg-[#0A2240]/[0.02] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-200 pointer-events-none transform-gpu" />

//               {/* Column 1: Metadata Indices */}
//               <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start lg:space-y-6 items-center lg:items-start relative z-10">
//                 <div className="flex items-center gap-4">
//                   <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-200 hidden lg:inline">
//                     0{idx + 1}
//                   </span>
//                   <span className="font-mono text-[10px] font-bold tracking-widest border border-[#0A2240]/20 px-2.5 py-1 rounded bg-[#0A2240]/5 text-[#0A2240]">
//                     {service.code}
//                   </span>
//                 </div>
//                 <div className="font-mono text-[10px] text-[#0A2240]/60 flex items-center gap-2">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] opacity-60" />
//                   <span className="tracking-wider group-hover:text-[#0A2240] transition-colors duration-200">{service.threat}</span>
//                 </div>
//               </div>

//               {/* Column 2: Content Details Matrix */}
//               <div className="lg:col-span-6 space-y-3 relative z-10">
//                 <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#0A2240] uppercase transition-colors duration-200">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#0A2240]/80 text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-200 group-hover:text-[#0A2240]">
//                   {service.details}
//                 </p>
//                 <div className="pt-1 flex items-center gap-1.5 text-[9px] font-mono text-[#0A2240]/50 uppercase tracking-widest">
//                   <Layers className="w-3 h-3 text-[#0A2240]/40" />
//                   <span>{service.spec}</span>
//                 </div>
//               </div>

//               {/* Column 3: Premium Actions Layer (Differentiated for Mobile vs Desktop) */}
//               <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:space-y-4 relative z-10 w-full">
                
//                 {/* ==================== MOBILE LAYOUT ELEMENT ==================== */}
//                 {/* Image updated to a beautiful, larger horizontal rectangle layout */}
//                 <div className="flex sm:hidden items-center justify-between w-full mt-2 pt-4 border-t border-[#0A2240]/10 gap-4">
//                   <div className="w-24 h-16 aspect-[4/3] rounded-xl overflow-hidden border border-[#0A2240]/15 bg-[#0A2240]/10 flex-shrink-0">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover opacity-100"
//                       loading="lazy"
//                     />
//                   </div>
                  
//                   {/* Clean, Non-Hidden Book Service Block for Mobile */}
//                   <div className="inline-flex items-center gap-2 bg-[#0A2240] text-[#C5A86B] px-3.5 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-md shadow-[#0A2240]/10 transition-transform active:scale-95">
//                     <span>BOOK SERVICE</span>
//                     <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
//                   </div>
//                 </div>

//                 {/* ==================== DESKTOP LAYOUT ELEMENT ==================== */}
//                 {/* Expanded Square Image Frame for Desktop */}
//                 <div className="hidden sm:block w-24 h-24 lg:w-28 lg:h-28 aspect-square rounded-xl overflow-hidden border border-[#0A2240]/10 bg-[#0A2240]/10 relative group-hover:border-[#0A2240]/30 transition-all duration-300 shadow-sm flex-shrink-0">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 transform-gpu"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* Corporate Magnetizing Hover Button Trigger */}
//                 <div className="hidden sm:inline-flex items-center gap-0 group-hover:gap-3 bg-transparent group-hover:bg-[#0A2240] border border-transparent group-hover:border-[#0A2240] pl-0 group-hover:pl-4 pr-0 rounded-full transition-all duration-300 h-10 ml-auto lg:ml-0 overflow-hidden">
//                   <span className="text-[9px] font-mono font-black tracking-widest uppercase text-[#0A2240] group-hover:text-[#C5A86B] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
//                     BOOK SERVICE
//                   </span>
//                   <div className="w-10 h-10 rounded-full border border-[#0A2240]/20 group-hover:border-transparent flex items-center justify-center transition-all duration-300 bg-transparent flex-shrink-0">
//                     <ArrowRight className="w-4 h-4 text-[#0A2240] group-hover:text-[#C5A86B] transition-colors duration-300" strokeWidth={3} />
//                   </div>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Empty State Diagnostic Area */}
//       {filteredServices.length === 0 && (
//         <div className="text-center py-24 border border-[#0A2240]/10 bg-[#0A2240]/5 rounded-3xl max-w-xl mx-auto shadow-xl mt-8 mb-12">
//           <ShieldAlert className="w-8 h-8 text-[#0A2240] mx-auto mb-3" />
//           <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A2240]/70">
//             No active protection vectors discovered.
//           </p>
//         </div>
//       )}
//     </main>
//   );
// }














// import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ShieldAlert, ArrowRight, Layers, Bug } from "lucide-react";

// // Completely stable, cross-compatible and exact icons for pests
// import { 
//   FaBug, 
//   FaSpider, 
//   FaCrow, 
//   FaShieldHalved 
// } from "react-icons/fa6";
// import { 
//   GiAnt, 
//   GiRat, 
//   GiWaspSting, 
//   GiBee, 
//   GiSquirrel 
// } from "react-icons/gi";
// import { 
//   MdBugReport, 
//   MdCoronavirus, 
//   MdCleaningServices 
// } from "react-icons/md";

// export default function Services() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const hasScrolled = useRef(false);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ant Control",
//       icon: GiAnt, // Exact Ant Icon
//       threat: "MODERATE RISK",
//       spec: "ADVANCED BAITING MATRIX",
//       code: "PRIME-ANT-01",
//       details:
//         "Targeted treatment for stubborn ant infestations, focusing on tracking foraging paths to destroy hidden nests beneath flooring and structural foundations permanently.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       icon: FaSpider, // Spider/Parasitic Vector representation
//       threat: "CRITICAL THREAT",
//       spec: "PREMIUM HEAT TREATMENT",
//       code: "PRIME-BUG-02",
//       details:
//         "Industrial-grade thermal heat and targeted spray applications that completely eliminate mature bed bugs and their larvae from mattresses, bed frames, and deep upholstery.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Treatment",
//       icon: FaBug, // Micro destructive insect vector
//       threat: "HIGH RISK",
//       spec: "RESIDUAL MICRO-SPRAYING",
//       code: "PRIME-MTH-03",
//       details:
//         "Specialized target applications onto high-end carpets and fabrics. Safely terminates larvae to protect luxury textile items and wool carpet linings from damage.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Removal",
//       icon: MdBugReport, // Exact flat bug silhouette layout
//       threat: "MODERATE RISK",
//       spec: "PERIMETER LIQUID SHIELD",
//       code: "PRIME-BTL-04",
//       details:
//         "Precise treatments along baseboards, skirting boards, and dark storage areas to eradicate floor beetles before they compromise custom woolworks and internal fittings.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control",
//       icon: MdBugReport, // High-visibility robust insect vector (Universal fix for cockroach error)
//       threat: "CRITICAL THREAT",
//       spec: "ECO GEL INJECTION",
//       code: "PRIME-COCK-05",
//       details:
//         "High-performance, low-odor gel baits deployed directly into high-heat commercial kitchens, cracks, and crevices where roaches feed and breed.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       icon: GiRat, // Exact Long-Tailed Rodent/Rat Profile
//       threat: "CRITICAL THREAT",
//       spec: "STRUCTURAL PROOFING MESH",
//       code: "PRIME-MCE-06",
//       details:
//         "Comprehensive tracking, safe baiting stations, and immediate blockage of sub-floor access points using steel mesh guards and specialized concrete fills.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Eradication",
//       icon: MdCoronavirus, // Deep microscopic pulse/parasite vector
//       threat: "HIGH RISK",
//       spec: "GROWTH REGULATOR MIST",
//       code: "PRIME-FLE-07",
//       details:
//         "Full internal floor space misting that halts flea multiplication loops, penetrating deep carpets and pet resting spots to clean living spaces completely.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasp Nest Removal",
//       icon: GiWaspSting, // Exact Wasp Vector
//       threat: "IMMEDIATE THREAT",
//       spec: "HIGH-REACH POWDER DISPATCH",
//       code: "PRIME-WSP-08",
//       details:
//         "Fast-acting chemical injection treatments for hanging or internal roofline wasp nests, securing overhead structures and gutters without structural damage.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bee Relocation",
//       icon: GiBee, // Exact Honeybee Eco-System Vector
//       threat: "ECO-FRIENDLY ACTION",
//       spec: "LIVE CAPTURE & TRANSFER",
//       code: "PRIME-BEE-09",
//       details:
//         "Eco-conscious and secure live extraction setups meant to clean structural cavities while safeguarding healthy bee colonies by relocating them to rural hives.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Exclusion",
//       icon: GiSquirrel, // Exact Squirrel Profile
//       threat: "HIGH RISK",
//       spec: "LOFT BLOCKADE SHIELDS",
//       code: "PRIME-SQR-10",
//       details:
//         "Heavy-gauge metal wire sealing and entry blockades on roof areas to stop squirrels from gnawing internal electrical lines and destroying attic insulation.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing",
//       icon: MdCleaningServices, // Advanced deep surface biocide/cleaner layout
//       threat: "ENVIRONMENTAL RISK",
//       spec: "BIOCIDE SURFACE CLEANSE",
//       code: "PRIME-HYG-11",
//       details:
//         "Post-infestation cleanup using deep sanitizing solutions alongside physical entry proofing to eliminate biological trace marks and scent lines completely.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Bird Netting & Spikes",
//       icon: FaCrow, // Exact Avian/Bird Vector Array
//       threat: "HIGH STRUCTURAL RISK",
//       spec: "ARCHITECTURAL FAÇADE NETS",
//       code: "PRIME-BRD-12",
//       details:
//         "Premium tension wires, non-harmful optical repellents, and heavy-duty UV-stabilized netting arrays designed to keep pigeons away from architectural trim, balconies, and solar frameworks.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state && !hasScrolled.current) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );

//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//             hasScrolled.current = true;
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#C5A86B] text-[#0A2240] min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#0A2240]/20 selection:text-[#0A2240] transform-gpu isolate backface-hidden">
      
//       {/* Structural Minimal Borders */}
//       <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
//       <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

//       {/* Corporate Monolithic Header */}
//       <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-[#0A2240]/15">
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
//           <div className="space-y-4 text-left max-w-3xl">
//             <div className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-[#0A2240]/60 bg-[#0A2240]/5 px-3 py-1 rounded border border-[#0A2240]/10">
//               <Bug className="w-3.5 h-3.5" />
//               <span>Eradication Protocol Index</span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-[#0A2240]">
//               Operational Focus
//             </h1>
//             <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
//               Complete index of targeted defense vectors. Review continuous tactical layouts and deployment parameters upfront without secondary actions.
//             </p>
//           </div>

//           {/* Navigation Category Switcher */}
//           <div className="flex flex-wrap gap-1.5 bg-[#0A2240]/5 border border-[#0A2240]/10 p-1.5 rounded-2xl md:max-w-md w-full justify-start md:justify-end h-max">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 rounded-xl cursor-pointer ${
//                     isActive
//                       ? "bg-[#0A2240] text-white font-black shadow-xl shadow-[#0A2240]/20"
//                       : "text-[#0A2240]/70 hover:text-[#0A2240] hover:bg-[#0A2240]/5"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* UPFRONT MATRIX RUNWAY */}
//       <section className="py-8 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
//         <div className="divide-y divide-[#0A2240]/15 border-b border-[#0A2240]/15">
//           {filteredServices.map((service, idx) => {
//             const IconComponent = service.icon;
//             return (
//               <div
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group cursor-pointer relative transform-gpu will-change-transform text-left transition-colors duration-300"
//                 style={{ contentVisibility: "auto" }}
//               >
//                 {/* Row Highlight Overlay Mask */}
//                 <div className="absolute inset-y-2 -inset-x-4 bg-[#0A2240]/[0.03] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-200 pointer-events-none transform-gpu" />

//                 {/* Column 1: Metadata Indices */}
//                 <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start lg:space-y-6 items-center lg:items-start relative z-10">
//                   <div className="flex items-center gap-4">
//                     <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-200 hidden lg:inline">
//                       0{idx + 1}
//                     </span>
//                     <span className="font-mono text-[10px] font-bold tracking-widest border border-[#0A2240]/20 px-2.5 py-1 rounded bg-[#0A2240]/5 text-[#0A2240]">
//                       {service.code}
//                     </span>
//                   </div>
//                   <div className="font-mono text-[10px] text-[#0A2240]/60 flex items-center gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] opacity-60" />
//                     <span className="tracking-wider group-hover:text-[#0A2240] transition-colors duration-200">{service.threat}</span>
//                   </div>
//                 </div>

//                 {/* Column 2: Content Details Matrix */}
//                 <div className="lg:col-span-6 space-y-3 relative z-10">
//                   <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#0A2240] uppercase transition-colors duration-200">
//                     {service.title}
//                   </h3>
//                   <p className="text-[#0A2240]/80 text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-200 group-hover:text-[#0A2240]">
//                     {service.details}
//                   </p>
//                   <div className="pt-1 flex items-center gap-1.5 text-[9px] font-mono text-[#0A2240]/50 uppercase tracking-widest">
//                     <Layers className="w-3 h-3 text-[#0A2240]/40" />
//                     <span>{service.spec}</span>
//                   </div>
//                 </div>

//                 {/* Column 3: Premium Actions Layer */}
//                 <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:space-y-4 relative z-10 w-full">
                  
//                   {/* ==================== MOBILE LAYOUT ELEMENT ==================== */}
//                   <div className="flex sm:hidden items-center justify-between w-full mt-2 pt-4 border-t border-[#0A2240]/10 gap-4">
//                     {/* Square Icon Container for Mobile */}
//                     <div className="w-14 h-14 rounded-xl border border-[#0A2240]/15 bg-[#0A2240]/5 flex items-center justify-center flex-shrink-0 text-[#0A2240]">
//                       <IconComponent className="w-7 h-7" />
//                     </div>
                    
//                     {/* Clean Book Service Block */}
//                     <div className="inline-flex items-center gap-2 bg-[#0A2240] text-[#C5A86B] px-3.5 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-md shadow-[#0A2240]/10">
//                       <span>BOOK SERVICE</span>
//                       <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
//                     </div>
//                   </div>

//                   {/* ==================== DESKTOP LAYOUT ELEMENT ==================== */}
//                   <div className="hidden sm:flex w-24 h-24 lg:w-28 lg:h-28 rounded-2xl border border-[#0A2240]/10 bg-[#0A2240]/5 items-center justify-center relative group-hover:bg-[#0A2240]/10 group-hover:border-[#0A2240]/30 group-hover:scale-105 transition-all duration-300 shadow-sm flex-shrink-0 text-[#0A2240]/70 group-hover:text-[#0A2240]">
//                     <IconComponent className="w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-500 group-hover:rotate-6" />
//                   </div>

//                   {/* Corporate Hover Button Trigger */}
//                   <div className="hidden sm:inline-flex items-center gap-0 group-hover:gap-3 bg-transparent group-hover:bg-[#0A2240] border border-transparent group-hover:border-[#0A2240] pl-0 group-hover:pl-4 pr-0 rounded-full transition-all duration-300 h-10 ml-auto lg:ml-0 overflow-hidden">
//                     <span className="text-[9px] font-mono font-black tracking-widest uppercase text-[#0A2240] group-hover:text-[#C5A86B] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
//                       BOOK SERVICE
//                     </span>
//                     <div className="w-10 h-10 rounded-full border border-[#0A2240]/20 group-hover:border-transparent flex items-center justify-center transition-all duration-300 bg-transparent flex-shrink-0">
//                       <ArrowRight className="w-4 h-4 text-[#0A2240] group-hover:text-[#C5A86B] transition-colors duration-300" strokeWidth={3} />
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Empty State Diagnostic Area */}
//       {filteredServices.length === 0 && (
//         <div className="text-center py-24 border border-[#0A2240]/10 bg-[#0A2240]/5 rounded-3xl max-w-xl mx-auto shadow-xl mt-8 mb-12">
//           <ShieldAlert className="w-8 h-8 text-[#0A2240] mx-auto mb-3" />
//           <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A2240]/70">
//             No active protection vectors discovered.
//           </p>
//         </div>
//       )}
//     </main>
//   );
// }










import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShieldAlert, ArrowRight, Layers, Bug } from "lucide-react";

// Premium dynamic and distinct icon distributions
import { 
  FaBug,        // Clean sharp beetle profile
  FaSpider,     // Parasitic/Arachnid vector
  FaCrow 
} from "react-icons/fa6";
import { 
  GiAnt, 
  GiRat, 
  GiWaspSting, 
  GiBee, 
  GiSquirrel 
} from "react-icons/gi";
import { 
  MdBugReport,  // Multi-legged robust roach/bug profile
  MdCoronavirus, 
  MdCleaningServices 
} from "react-icons/md";

export default function Services() {
  const navigate = useNavigate();
  const location = useLocation();
  const hasScrolled = useRef(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

  const servicesData = [
    {
      id: 1,
      cat: "Insects",
      title: "Ant Control",
      icon: GiAnt,
      threat: "MODERATE RISK",
      spec: "ADVANCED BAITING MATRIX",
      code: "Pesbye-ANT-01",
      details:
        "Targeted treatment for stubborn ant infestations, focusing on tracking foraging paths to destroy hidden nests beneath flooring and structural foundations permanently.",
    },
    {
      id: 2,
      cat: "Insects",
      title: "Bed Bugs Control",
      icon: FaSpider,
      threat: "CRITICAL THREAT",
      spec: "PREMIUM HEAT TREATMENT",
      code: "Pesbye-BUG-02",
      details:
        "Industrial-grade thermal heat and targeted spray applications that completely eliminate mature bed bugs and their larvae from mattresses, bed frames, and deep upholstery.",
    },
    {
      id: 3,
      cat: "Insects",
      title: "Carpet Moth Treatment",
      icon: Bug, // Lucide Bug for premium organic winged look
      threat: "HIGH RISK",
      spec: "RESIDUAL MICRO-SPRAYING",
      code: "Pesbye-MTH-03",
      details:
        "Specialized target applications onto high-end carpets and fabrics. Safely terminates larvae to protect luxury textile items and wool carpet linings from damage.",
    },
    {
      id: 4,
      cat: "Insects",
      title: "Carpet Beetle Removal",
      icon: FaBug,
      threat: "MODERATE RISK",
      spec: "PERIMETER LIQUID SHIELD",
      code: "Pesbye-BTL-04",
      details:
        "Precise treatments along baseboards, skirting boards, and dark storage areas to eradicate floor beetles before they compromise custom woolworks and internal fittings.",
    },
    {
      id: 5,
      cat: "Insects",
      title: "Cockroach Control",
      icon: MdBugReport, // Multi-legged robust vector for a classic heavy roach look
      threat: "CRITICAL THREAT",
      spec: "ECO GEL INJECTION",
      code: "Pesbye-COCK-05",
      details:
        "High-performance, low-odor gel baits deployed directly into high-heat commercial kitchens, cracks, and crevices where roaches feed and breed.",
    },
    {
      id: 6,
      cat: "Rodents & Wildlife",
      title: "Rats & Mice Control",
      icon: GiRat,
      threat: "CRITICAL THREAT",
      spec: "STRUCTURAL PROOFING MESH",
      code: "Pesbye-MCE-06",
      details:
        "Comprehensive tracking, safe baiting stations, and immediate blockage of sub-floor access points using steel mesh guards and specialized concrete fills.",
    },
    {
      id: 7,
      cat: "Insects",
      title: "Flea Eradication",
      icon: MdCoronavirus,
      threat: "HIGH RISK",
      spec: "GROWTH REGULATOR MIST",
      code: "Pesbye-FLE-07",
      details:
        "Full internal floor space misting that halts flea multiplication loops, penetrating deep carpets and pet resting spots to clean living spaces completely.",
    },
    {
      id: 8,
      cat: "Insects",
      title: "Wasp Nest Removal",
      icon: GiWaspSting,
      threat: "IMMEDIATE THREAT",
      spec: "HIGH-REACH POWDER DISPATCH",
      code: "Pesbye-WSP-08",
      details:
        "Fast-acting chemical injection treatments for hanging or internal roofline wasp nests, securing overhead structures and gutters without structural damage.",
    },
    {
      id: 9,
      cat: "Insects",
      title: "Bee Relocation",
      icon: GiBee,
      threat: "ECO-FRIENDLY ACTION",
      spec: "LIVE CAPTURE & TRANSFER",
      code: "Pesbye-BEE-09",
      details:
        "Eco-conscious and secure live extraction setups meant to clean structural cavities while safeguarding healthy bee colonies by relocating them to rural hives.",
    },
    {
      id: 10,
      cat: "Rodents & Wildlife",
      title: "Squirrel Exclusion",
      icon: GiSquirrel,
      threat: "HIGH RISK",
      spec: "LOFT BLOCKADE SHIELDS",
      code: "Pesbye-SQR-10",
      details:
        "Heavy-gauge metal wire sealing and entry blockades on roof areas to stop squirrels from gnawing internal electrical lines and destroying attic insulation.",
    },
    {
      id: 11,
      cat: "Birds & Prevention",
      title: "Hygiene & Proofing",
      icon: MdCleaningServices,
      threat: "ENVIRONMENTAL RISK",
      spec: "BIOCIDE SURFACE CLEANSE",
      code: "Pesbye-HYG-11",
      details:
        "Post-infestation cleanup using deep sanitizing solutions alongside physical entry proofing to eliminate biological trace marks and scent lines completely.",
    },
    {
      id: 12,
      cat: "Birds & Prevention",
      title: "Bird Netting & Spikes",
      icon: FaCrow,
      threat: "HIGH STRUCTURAL RISK",
      spec: "ARCHITECTURAL FAÇADE NETS",
      code: "Pesbye-BRD-12",
      details:
        "Premium tension wires, non-harmful optical repellents, and heavy-duty UV-stabilized netting arrays designed to keep pigeons away from architectural trim, balconies, and solar frameworks.",
    },
  ];

  useEffect(() => {
    if (location.state && !hasScrolled.current) {
      const targetCategory = location.state.category || "All";
      setSelectedCategory(targetCategory);

      if (location.state.scrollToService) {
        const targetServiceTitle = location.state.scrollToService;

        const timer = setTimeout(() => {
          const element = document.querySelector(
            `[data-title="${targetServiceTitle}"]`
          );

          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            hasScrolled.current = true;
          }
        }, 300);

        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.cat === selectedCategory);

  return (
    <main className="bg-[#C5A86B] text-[#0A2240] min-h-screen font-sans antialiased w-full overflow-x-hidden relative selection:bg-[#0A2240]/20 selection:text-[#0A2240] transform-gpu isolate backface-hidden">
      
      {/* Structural Minimal Borders */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A2240]/20 to-transparent" />

      {/* Corporate Monolithic Header */}
      <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full border-b border-[#0A2240]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.25em] text-[#0A2240]/60 bg-[#0A2240]/5 px-3 py-1 rounded border border-[#0A2240]/10">
              <Bug className="w-3.5 h-3.5" />
              <span>Eradication Protocol Index</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-[#0A2240]">
              Operational Focus
            </h1>
            <p className="text-xs md:text-sm text-[#0A2240]/80 font-medium leading-relaxed max-w-xl">
              Complete index of targeted defense vectors. Review continuous tactical layouts and deployment parameters upfront without secondary actions.
            </p>
          </div>

          {/* Navigation Category Switcher */}
          <div className="flex flex-wrap gap-1.5 bg-[#0A2240]/5 border border-[#0A2240]/10 p-1.5 rounded-2xl md:max-w-md w-full justify-start md:justify-end h-max">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider transition-all duration-200 rounded-xl cursor-pointer ${
                    isActive
                      ? "bg-[#0A2240] text-white font-black shadow-xl shadow-[#0A2240]/20"
                      : "text-[#0A2240]/70 hover:text-[#0A2240] hover:bg-[#0A2240]/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPFRONT MATRIX RUNWAY */}
      <section className="py-8 max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="divide-y divide-[#0A2240]/15 border-b border-[#0A2240]/15">
          {filteredServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                data-title={service.title}
                onClick={() => navigate("/contact-us")}
                className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group cursor-pointer relative transform-gpu will-change-transform text-left transition-colors duration-300"
                style={{ contentVisibility: "auto" }}
              >
                {/* Row Highlight Overlay Mask */}
                <div className="absolute inset-y-2 -inset-x-4 bg-[#0A2240]/[0.03] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-200 pointer-events-none transform-gpu" />

                {/* Column 1: Metadata Indices */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start lg:space-y-6 items-center lg:items-start relative z-10">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-200 hidden lg:inline">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-widest border border-[#0A2240]/20 px-2.5 py-1 rounded bg-[#0A2240]/5 text-[#0A2240]">
                      {service.code}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-[#0A2240]/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] opacity-60" />
                    <span className="tracking-wider group-hover:text-[#0A2240] transition-colors duration-200">{service.threat}</span>
                  </div>
                </div>

                {/* Column 2: Content Details Matrix */}
                <div className="lg:col-span-6 space-y-3 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#0A2240] uppercase transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[#0A2240]/80 text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-200 group-hover:text-[#0A2240]">
                    {service.details}
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 text-[9px] font-mono text-[#0A2240]/50 uppercase tracking-widest">
                    <Layers className="w-3 h-3 text-[#0A2240]/40" />
                    <span>{service.spec}</span>
                  </div>
                </div>

                {/* Column 3: Premium Actions Layer */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:space-y-4 relative z-10 w-full">
                  
                  {/* ==================== MOBILE LAYOUT ELEMENT ==================== */}
                  <div className="flex sm:hidden items-center justify-between w-full mt-2 pt-4 border-t border-[#0A2240]/10 gap-4">
                    {/* Square Icon Container for Mobile */}
                    <div className="w-14 h-14 rounded-xl border border-[#0A2240]/15 bg-[#0A2240]/5 flex items-center justify-center flex-shrink-0 text-[#0A2240]">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    
                    {/* Clean Book Service Block */}
                    <div className="inline-flex items-center gap-2 bg-[#0A2240] text-[#C5A86B] px-3.5 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-md shadow-[#0A2240]/10">
                      <span>BOOK SERVICE</span>
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                  </div>

                  {/* ==================== DESKTOP LAYOUT ELEMENT ==================== */}
                  <div className="hidden sm:flex w-24 h-24 lg:w-28 lg:h-28 rounded-2xl border border-[#0A2240]/10 bg-[#0A2240]/5 items-center justify-center relative group-hover:bg-[#0A2240]/10 group-hover:border-[#0A2240]/30 group-hover:scale-105 transition-all duration-300 shadow-sm flex-shrink-0 text-[#0A2240]/70 group-hover:text-[#0A2240]">
                    <IconComponent className="w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-500 group-hover:rotate-6" />
                  </div>

                  {/* Corporate Hover Button Trigger */}
                  <div className="hidden sm:inline-flex items-center gap-0 group-hover:gap-3 bg-transparent group-hover:bg-[#0A2240] border border-transparent group-hover:border-[#0A2240] pl-0 group-hover:pl-4 pr-0 rounded-full transition-all duration-300 h-10 ml-auto lg:ml-0 overflow-hidden">
                    <span className="text-[9px] font-mono font-black tracking-widest uppercase text-[#0A2240] group-hover:text-[#C5A86B] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
                      BOOK SERVICE
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#0A2240]/20 group-hover:border-transparent flex items-center justify-center transition-all duration-300 bg-transparent flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-[#0A2240] group-hover:text-[#C5A86B] transition-colors duration-300" strokeWidth={3} />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Empty State Diagnostic Area */}
      {filteredServices.length === 0 && (
        <div className="text-center py-24 border border-[#0A2240]/10 bg-[#0A2240]/5 rounded-3xl max-w-xl mx-auto shadow-xl mt-8 mb-12">
          <ShieldAlert className="w-8 h-8 text-[#0A2240] mx-auto mb-3" />
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A2240]/70">
            No active protection vectors discovered.
          </p>
        </div>
      )}
    </main>
  );
}