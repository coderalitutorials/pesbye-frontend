// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 15 }, // Kam displacement taake render tree freeze na ho
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   return (
//     // backface-hidden aur isolate se paint cycles bach jate hain
//     <div className="relative min-h-screen bg-[#C5A86B] text-[#0A2240] overflow-hidden font-sans pt-24 md:pt-32 pb-16 isolate backface-hidden">
      
//       {/* Background visual flair - Hardware accelerated transforms */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-15 transform-gpu">
//         <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] border-[50px] border-[#0A2240]/10 rounded-full" />
//         <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] border-[30px] border-[#0A2240]/10 rounded-full" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="flex flex-col items-center justify-center text-center transform-gpu"
//         >
          
//           {/* Visual Badge */}
//           <motion.div variants={fadeInUp} className="mb-8">
//             <div className="relative p-6 rounded-full bg-white/40 border border-white/60 shadow-lg inline-block">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#0A2240]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//               </svg>
//               <span className="absolute bottom-1 right-1 flex h-4 w-4">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A2240] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0A2240]"></span>
//               </span>
//             </div>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             variants={fadeInUp}
//             className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#0A2240] uppercase max-w-4xl"
//           >
//             Mayfair's Premium Pest <span className="text-white drop-shadow">Eradication</span> Service
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-slate-900 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed mt-6 mb-10"
//           >
//             At Pesbye Services, we provide unmatched discrete protection for London's luxury assets. From premium residential estates to corporate spaces in Mayfair, we utilize advanced, eco-smart technology for permanent structural secureness.
//           </motion.p>

//           {/* Call To Action Buttons */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-2"
//           >
//             <Link
//               to="/contact-us"
//               className="w-full sm:w-auto relative overflow-hidden bg-white text-[#0A2240] font-extrabold text-sm uppercase tracking-widest px-12 py-4.5 rounded-xl transition-all duration-200 active:scale-95 shadow-xl hover:bg-white/90 group"
//             >
//               <span className="relative z-10 inline-flex items-center gap-2.5">
//                 Book Inspection
//                 <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold text-lg">➔</span>
//               </span>
//             </Link>

//             <div className="flex items-center gap-3 py-2 px-5 rounded-full bg-white/20 border border-white/40">
//               <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-900 font-bold">24/7 Mayfair:</span>
//               <a href="tel:07424520697" className="text-xl sm:text-2xl font-black text-white hover:text-[#0A2240] transition-colors tracking-tight">
//                 07424 520697
//               </a>
//             </div>
//           </motion.div>

//           {/* !!! FIX: backdrop-blur-md removed to stop lagging, solid opacity premium background applied */}
//           <motion.div
//             variants={fadeInUp}
//             className="mt-20 lg:mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/40 border border-white/70 shadow-xl transform-gpu"
//           >
//             {[
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//                   </svg>
//                 ), 
//                 label: 'Unmarked Vehicles', 
//                 desc: 'Discreet operations' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 ), 
//                 label: '2-Hr Dispatch', 
//                 desc: 'Mayfair Priority' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//                   </svg>
//                 ), 
//                 label: 'Eco-Smart Safe', 
//                 desc: 'Advanced Protocols' 
//               },
//               { 
//                 svg: (
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-1.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08M17.15 3.836c.376.023.75.05 1.124.08m-1.124-.08c.383 1.237 1.277 2.23 2.455 2.682m-13.43-.08c1.178-.452 2.072-1.445 2.455-2.682m-2.455.08c-.373.025-.746.053-1.119.086m1.119-.086c-.383 1.237-1.277 2.23-2.455 2.682m13.43.08c-.373.025-.746.053-1.119.086m-1.119-.086c.383 1.237 1.277 2.23 2.455 2.682M4.15 6.414a11.952 11.952 0 00-1.118 1.408m1.118-1.408c.383 1.237 1.277 2.23 2.455 2.682m10.975-2.682c.413 1.332 1.43 2.374 2.748 2.766m-17.3 1.326A11.954 11.954 0 003 12c0 5.089 3.177 9.434 7.636 11.187a.75.75 0 00.514-.047l7.5-3.75a.75.75 0 00.384-.537l1.5-7.5a.75.75 0 00-.223-.687l-2.25-2.25a.75.75 0 00-.62-.212z" />
//                   </svg>
//                 ), 
//                 label: 'BPCA Accredited', 
//                 desc: 'Certified Techs' 
//               },
//             ].map((item, idx) => (
//               <div key={idx} className="flex flex-col items-center justify-center text-center p-5 rounded-xl bg-white/60 border border-white/20 hover:border-[#0A2240]/20 transition-transform duration-200 group transform-gpu">
//                 <div className="mb-3.5 group-hover:scale-105 transition-transform bg-white/40 p-2.5 rounded-full border border-white/40 shadow-sm">
//                   {item.svg}
//                 </div>
//                 <h4 className="text-xs md:text-sm uppercase tracking-wider font-extrabold text-[#0A2240] mb-0.5">{item.label}</h4>
//                 <p className="text-[11px] md:text-xs text-slate-900 font-semibold">{item.desc}</p>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div variants={fadeInUp} className="mt-8 text-xs tracking-widest uppercase font-bold text-slate-900">
//               Pesbye Services Mayfair — <span className="text-white">Secure✔</span>
//           </motion.div>

//         </motion.div>
//       </div>
//     </div>
//   );
// }









import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 }, // Kam displacement taake render tree freeze na ho
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    // backface-hidden aur isolate se paint cycles bach jate hain
    <div className="relative min-h-screen bg-[#C5A86B] text-[#0A2240] overflow-hidden font-sans pt-24 md:pt-32 pb-16 isolate backface-hidden">
      
      {/* ==================== HERO BACKGROUND IMAGE LAYER ==================== */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu">
        {/* Aap apni image ka path niche 'src' mein daal dena. 
            Object-cover aur center se image perfectly scale ho jayegi */}
        <img 
          src="/images/herohome.webp" // <-- APNI IMAGE KA LINK YA PATH YAHAN LAGAYEIN
          alt="Premium Luxury Estate Asset Background" 
          className="w-full h-full object-cover object-center transform-gpu scale-105"
          onError={(e) => { e.target.style.display = 'none'; }} // Fallback agar image crash ho jaye
        />
        
        {/* Premium Overlay Mask: Yeh image ko mask karega taake dark blue luxury text perfectly read ho sake */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#C5A86B]/80 via-[#C5A86B]/70 to-[#C5A86B]/90 mix-blend-multiply opacity-90" />
        <div className="absolute inset-0 bg-[#0A2240]/10 mix-blend-color-burn" />
      </div>

      {/* Decorative Vector Flair - Kept for depth scale over image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10 transform-gpu">
        <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] border-[50px] border-[#0A2240]/10 rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] border-[30px] border-[#0A2240]/10 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center justify-center text-center transform-gpu"
        >
          
          {/* Visual Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="relative p-6 rounded-full bg-white/40 border border-white/60 shadow-lg inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#0A2240]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="absolute bottom-1 right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A2240] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0A2240]"></span>
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#0A2240] uppercase max-w-4xl"
          >
            Mayfair's Premium Pest <span className="text-white drop-shadow">Eradication</span> Service
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-slate-900 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed mt-6 mb-10"
          >
            At Pesbye Services, we provide unmatched discrete protection for London's luxury assets. From premium residential estates to corporate spaces in Mayfair, we utilize advanced, eco-smart technology for permanent structural secureness.
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-2"
          >
            <Link
              to="/contact-us"
              className="w-full sm:w-auto relative overflow-hidden bg-white text-[#0A2240] font-extrabold text-sm uppercase tracking-widest px-12 py-4.5 rounded-xl transition-all duration-200 active:scale-95 shadow-xl hover:bg-white/90 group"
            >
              <span className="relative z-10 inline-flex items-center gap-2.5">
                Book Inspection
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold text-lg">➔</span>
              </span>
            </Link>

            <div className="flex items-center gap-3 py-2 px-5 rounded-full bg-white/20 border border-white/40">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-900 font-bold">24/7 Mayfair:</span>
              <a href="tel:07424520697" className="text-xl sm:text-2xl font-black text-white hover:text-[#0A2240] transition-colors tracking-tight">
                07424 520697
              </a>
            </div>
          </motion.div>

          {/* Feature Grid with Solid/Semi-Transparent Contrast Stack */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 lg:mt-24 w-full grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/40 border border-white/70 shadow-xl transform-gpu"
          >
            {[
              { 
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ), 
                label: 'Unmarked Vehicles', 
                desc: 'Discreet operations' 
              },
              { 
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ), 
                label: '2-Hr Dispatch', 
                desc: 'Mayfair Priority' 
              },
              { 
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ), 
                label: 'Eco-Smart Safe', 
                desc: 'Advanced Protocols' 
              },
              { 
                svg: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 text-[#0A2240]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-1.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08M17.15 3.836c.376.023.75.05 1.124.08m-1.124-.08c.383 1.237 1.277 2.23 2.455 2.682m-13.43-.08c1.178-.452 2.072-1.445 2.455-2.682m-2.455.08c-.373.025-.746.053-1.119.086m1.119-.086c-.383 1.237-1.277 2.23-2.455 2.682m13.43.08c-.373.025-.746.053-1.119.086m-1.119-.086c.383 1.237 1.277 2.23 2.455 2.682M4.15 6.414a11.952 11.952 0 00-1.118 1.408m1.118-1.408c.383 1.237 1.277 2.23 2.455 2.682m10.975-2.682c.413 1.332 1.43 2.374 2.748 2.766m-17.3 1.326A11.954 11.954 0 003 12c0 5.089 3.177 9.434 7.636 11.187a.75.75 0 00.514-.047l7.5-3.75a.75.75 0 00.384-.537l1.5-7.5a.75.75 0 00-.223-.687l-2.25-2.25a.75.75 0 00-.62-.212z" />
                  </svg>
                ), 
                label: 'BPCA Accredited', 
                desc: 'Certified Techs' 
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center p-5 rounded-xl bg-white/60 border border-white/20 hover:border-[#0A2240]/20 transition-transform duration-200 group transform-gpu">
                <div className="mb-3.5 group-hover:scale-105 transition-transform bg-white/40 p-2.5 rounded-full border border-white/40 shadow-sm">
                  {item.svg}
                </div>
                <h4 className="text-xs md:text-sm uppercase tracking-wider font-extrabold text-[#0A2240] mb-0.5">{item.label}</h4>
                <p className="text-[11px] md:text-xs text-slate-900 font-semibold">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 text-xs tracking-widest uppercase font-bold text-slate-900">
              Pesbye Services Mayfair — <span className="text-white">Secure✔</span>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}