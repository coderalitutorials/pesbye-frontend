




// import React from "react";
// import { Link } from "react-router-dom";
// import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#020b14] text-white overflow-hidden border-t border-white/[0.04] z-30 font-sans animate-[fadeUp_0.6s_ease-out_both]">
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none" />
//       <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[650px] h-[280px] bg-gradient-to-r from-[#4FA3A5]/5 to-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/[0.04]">
//           <div className="lg:col-span-5 space-y-6 text-left animate-[fadeUp_0.6s_ease-out_both]">
//             <img
//               src="/images/swiftpeslogo.webp"
//               alt="PesSave Services"
//               className="h-14 w-auto object-contain"
//               loading="lazy"
//               decoding="async"
//             />

//             <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-sm font-normal">
//               Premium biological safety and structural pest containment
//               infrastructure engineered for high-end residential and commercial
//               zones in worcester.
//             </p>

//             <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.08] px-3.5 py-1.5 rounded-xl shadow-lg">
//               <ShieldCheck className="w-4 h-4 text-[#76C7C0]" />
//               <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase font-bold">
//                 London Standards Compliant
//               </span>
//             </div>
//           </div>

//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#76C7C0] uppercase font-black">
//                 Corporate Directory
//               </h4>

//               <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   { name: "System Home", path: "/" },
//                   { name: "Our Corporate Profile", path: "/about-us" },
//                   { name: "Treatment Protocols", path: "/services" },
//                   { name: "Emergency Dispatch Hub", path: "/contact-us" },
//                 ].map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#76C7C0] transition-colors duration-200" />
//                     <span>{link.name}</span>
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             <div className="space-y-6">
//               <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#4FA3A5] uppercase font-black">
//                 Active Deployments
//               </h4>

//               <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
//                 {[
//                   {
//                     name: "Rat & Mice Control",
//                     state: {
//                       scrollToService: "Rats & Mice Control",
//                       category: "Rodents & Wildlife",
//                     },
//                   },
//                   {
//                     name: "Bed Bugs Thermal Heat",
//                     state: {
//                       scrollToService: "Bed Bugs Control",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Carpet Moth Eradication",
//                     state: {
//                       scrollToService: "Carpet Moth Control Treatment",
//                       category: "Insects",
//                     },
//                   },
//                   {
//                     name: "Safe Pest Removal Matrix",
//                     state: { scrollToService: null, category: "All" },
//                   },
//                 ].map((service) => (
//                   <Link
//                     key={service.name}
//                     to="/services"
//                     state={service.state}
//                     className="hover:text-white transition-colors duration-200 w-max flex items-center gap-2 group/link"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-[#4FA3A5] transition-colors duration-200" />
//                     <span>{service.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/[0.04]">
//           <div className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-white/[0.08] transition-colors duration-200 text-left">
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <MapPin className="w-5 h-5" />
//             </div>

//             <div className="min-w-0">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Operational Base
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5">
//                 worcester, London, UK
//               </span>
//             </div>
//           </div>

//           <a
//             href="tel:07405613595"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#76C7C0]/20 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#76C7C0]/10 text-[#76C7C0] shrink-0">
//               <Phone className="w-5 h-5" />
//             </div>

//             <div className="min-w-0 flex-grow">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Direct call us
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#76C7C0] transition-colors duration-200">
//                 07438 164691
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#76C7C0]" />
//           </a>

//           <a
//             href="mailto:info@pestcontrolworcester.uk"
//             className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.03] p-5 rounded-2xl group hover:bg-white/[0.02] hover:border-[#4FA3A5]/20 transition-colors duration-200 text-left"
//           >
//             <div className="p-3 rounded-xl bg-[#4FA3A5]/10 text-[#4FA3A5] shrink-0">
//               <Mail className="w-5 h-5" />
//             </div>

//             <div className="min-w-0 flex-grow truncate">
//               <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
//                 Secure Inbound Relay
//               </span>
//               <span className="text-sm font-semibold text-slate-200 block mt-0.5 group-hover:text-[#4FA3A5] transition-colors duration-200 truncate">
//                 info@pestcontrolworcester.uk
//               </span>
//             </div>

//             <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 group-hover:text-[#4FA3A5]" />
//           </a>
//         </div>

//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-500">
//           <p className="tracking-wide text-center sm:text-left">
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="text-slate-400">swiftpes Services</span>. All
//             rights engineered.
//           </p>

//           <div className="flex items-center gap-1.5 bg-white/[0.01] border border-white/[0.05] px-3.5 py-1.5 rounded-xl text-[11px] font-mono text-slate-400">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#76C7C0] opacity-90" />
//             <span>swiftpes System Core Architecture v2.4</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0A2240] text-white overflow-hidden border-t border-[#C5A86B]/20 z-30 font-sans">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A86B_0.5px,transparent_1px)] [background-size:3rem_3rem] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-[#C5A86B]/10">
          
          {/* Logo & Intro */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <img
              src="/images/pesbyelogo.webp" 
              alt="Pesbye Services"
              className="h-20 w-auto object-contain  " 
              loading="lazy"
            />
            <p className="text-slate-300/70 text-sm sm:text-[15px] leading-relaxed max-w-sm font-medium">
              Premium biological safety and structural pest containment infrastructure engineered for high-end residential and commercial zones.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#C5A86B]/10 border border-[#C5A86B]/20 px-3.5 py-1.5 rounded-lg shadow-lg">
              <ShieldCheck className="w-4 h-4 text-[#C5A86B]" />
              <span className="text-[10px] font-mono tracking-[0.15em] text-[#C5A86B] uppercase font-bold">
                Certified London Standard
              </span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 text-left">
            <div className="space-y-6">
              <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
                Corporate Directory
              </h4>
              <nav className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
                {[
                  { name: "System Home", path: "/" },
                  { name: "Our Corporate Profile", path: "/about-us" },
                  { name: "Treatment Protocols", path: "/services" },
                  { name: "Emergency Dispatch Hub", path: "/contact-us" },
                ].map((link) => (
                  <Link key={link.name} to={link.path} className="hover:text-[#C5A86B] transition-colors duration-200 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C5A86B]/50" />
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
                Active Deployments
              </h4>
              <div className="grid grid-cols-1 gap-3.5 text-slate-300 text-[14px] font-medium">
                {[
                  { name: "Rat & Mice Control", state: { scrollToService: "Rats & Mice Control" } },
                  { name: "Bed Bugs Thermal Heat", state: { scrollToService: "Bed Bugs Control" } },
                  { name: "Carpet Moth Eradication", state: { scrollToService: "Carpet Moth Control Treatment" } },
                  { name: "Safe Pest Removal Matrix", state: { scrollToService: null } },
                ].map((service) => (
                  <Link key={service.name} to="/services" state={service.state} className="hover:text-[#C5A86B] transition-colors duration-200 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C5A86B]/50" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#C5A86B]/10">
          <div className="flex items-center gap-4 bg-[#C5A86B]/5 border border-[#C5A86B]/10 p-5 rounded-xl text-left">
            <div className="p-3 rounded-lg bg-[#C5A86B]/10 text-[#C5A86B]"> <MapPin className="w-5 h-5" /> </div>
            <div>
              <span className="block text-[10px] font-mono text-[#C5A86B]/70 uppercase tracking-wider">Operational Base</span>
              <span className="text-sm font-semibold text-white">Mayfair, London, UK</span>
            </div>
          </div>

          <a href="tel:07424520697" className="flex items-center gap-4 bg-[#C5A86B]/5 border border-[#C5A86B]/10 p-5 rounded-xl group hover:border-[#C5A86B]/40 transition-all text-left">
            <div className="p-3 rounded-lg bg-[#C5A86B]/10 text-[#C5A86B]"> <Phone className="w-5 h-5" /> </div>
            <div className="flex-grow">
              <span className="block text-[10px] font-mono text-[#C5A86B]/70 uppercase tracking-wider">Direct Call</span>
              <span className="text-sm font-semibold text-white group-hover:text-[#C5A86B]">07424 520697</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#C5A86B] opacity-0 group-hover:opacity-100 transition-all" />
          </a>

          <a href="mailto:info@pestcontrolmayfair.uk" className="flex items-center gap-4 bg-[#C5A86B]/5 border border-[#C5A86B]/10 p-5 rounded-xl group hover:border-[#C5A86B]/40 transition-all text-left">
            <div className="p-3 rounded-lg bg-[#C5A86B]/10 text-[#C5A86B]"> <Mail className="w-5 h-5" /> </div>
            <div className="flex-grow truncate">
              <span className="block text-[10px] font-mono text-[#C5A86B]/70 uppercase tracking-wider">Secure Inbound</span>
              <span className="text-sm font-semibold text-white truncate group-hover:text-[#C5A86B]">info@pestcontrolmayfair.uk</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#C5A86B] opacity-0 group-hover:opacity-100 transition-all" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[13px] font-medium text-slate-400">
          <p className="tracking-wide">Copyright © {new Date().getFullYear()} Pesbye Services. All rights reserved.</p>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-mono text-[#C5A86B] bg-[#C5A86B]/5 border border-[#C5A86B]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A86B] animate-pulse" />
            <span>PESBYE SYSTEM CORE v2.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 