

// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   Terminal,
//   HelpCircle,
//   ChevronDown,
//   Send,
//   User,
//   FileText,
//   Lock,
//   Globe,
// } from "lucide-react";

// const colors = {
//   bgDarkBlock: "#041221",
//   accentYellow: "#76C7C0",
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Control",
//     "Carpet Moth Control Treatment",
//     "Carpet Beetle Treatment",
//     "Cockroach Control Service",
//     "Rats & Mice Control",
//     "Flea Control",
//     "Wasps Nest Control",
//     "Bumble Bee Control",
//     "Squirrel Control",
//     "Hygiene and Proofing Services",
//     "Birds Control Services",
//     "Pigeons Control Services",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can you treat a pest problem in Worcester?",
//       answer:
//         "We offer immediate local dispatch times across Worcester and surrounding premium UK territories. For emergency threats, our specialists aim to deploy within hours.",
//     },
//     {
//       question: "Are your pest control treatments safe for pets and children?",
//       answer:
//         "Yes, family safety is our prime constraint. We utilize highly targeted biological eradication systems and guide you safely through containment timelines.",
//     },
//     {
//       question: "Do you offer proofing to stop rodents from returning?",
//       answer:
//         "Absolutely. We locate hidden nested hotspots, block incoming structural pathways with heavy meshes, and establish premium permanent seal safeguards.",
//     },
//     {
//       question: "Will I need more than one visit?",
//       answer:
//         "Outbreak dynamics vary. While simple treatments conclude instantly, complex rodent structures or bed bugs require a systematic 2 to 3 stage clearance procedure.",
//     },
//     {
//       question: "Do you provide commercial pest control?",
//       answer:
//         "Yes, PesSave operates discreet premium coverage accounts for retail outlets, corporate high-rises, and major commercial kitchen setups across London and Worcester.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your request securely...", {
//       style: {
//         background: colors.bgDarkBlock,
//         color: "#FFFFFF",
//         borderRadius: "12px",
//         border: `1px solid ${colors.accentYellow}33`,
//       },
//     });

//     try {
//       const res = await axios.post("https://swiftpes-backend.vercel.app/api/contact", formData);

//       toast.success(
//         res.data.message || "Pest service request submitted successfully!",
//         {
//           id: loaderToast,
//           duration: 4000,
//           icon: "🛡️",
//           style: {
//             background: colors.bgDarkBlock,
//             color: "#FFFFFF",
//             border: `1px solid ${colors.accentYellow}88`,
//             borderRadius: "12px",
//           },
//         }
//       );

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         postcode: "",
//         service: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Something went wrong. Please try again.",
//         {
//           id: loaderToast,
//           duration: 4000,
//           style: {
//             background: "#7f1d1d",
//             color: "#FFFFFF",
//             borderRadius: "12px",
//           },
//         }
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#020b14] text-slate-200 min-h-screen font-sans antialiased selection:bg-[#4FA3A5]/30 selection:text-white overflow-x-hidden w-full relative">
//       <Toaster position="top-right" reverseOrder={false} />

//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-60" />
//       <div className="absolute top-20 left-10 w-[360px] h-[360px] bg-[#4FA3A5]/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-40 right-10 w-[420px] h-[420px] bg-[#76C7C0]/5 rounded-full blur-3xl pointer-events-none" />

//       {/* Hero Section */}
//       <section className="relative pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12 w-full overflow-hidden border-b border-white/[0.06]">
//         <div className="absolute inset-0 z-0 opacity-35 pointer-events-none">
//           <img
//             src="/images/contact-hero.webp"
//             alt="Worcester Command Center Grid"
//             className="w-full h-full object-cover object-center"
//             loading="eager"
//             decoding="async"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/55 to-transparent" />
//         </div>

//         <div className="relative z-10 max-w-3xl space-y-4 text-left bg-black/40 p-8 sm:p-10 rounded-3xl border border-white/[0.08] shadow-xl animate-[fadeUp_0.7s_ease-out_both]">
//           <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.1] px-3 py-1.5 rounded-md">
//             <Terminal className="w-3.5 h-3.5 text-[#76C7C0]" />
//             <span className="text-slate-400 text-[10px] font-mono tracking-widest uppercase">
//               swiftpes Services worcester
//             </span>
//           </div>

//           <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
//             Connect With <br />
//             <span className="bg-gradient-to-r from-[#4FA3A5] via-[#76C7C0] to-slate-200 bg-clip-text text-transparent">
//               Our Fleet Operators
//             </span>
//           </h1>

//           <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl pt-1">
//             Facing an active infiltration path inside your property architecture?
//             Transmit your location metrics directly to our premium Worcester
//             deployment office.
//           </p>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
//         <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
//           {/* Info Side Column */}
//           <div className="lg:col-span-5 flex flex-col justify-between gap-6 animate-[fadeUp_0.7s_ease-out_both]">
//             <div className="bg-gradient-to-b from-[#041221] to-[#020b14] border border-white/[0.08] rounded-3xl p-8 text-left relative overflow-hidden group flex-1 flex flex-col justify-between min-h-[320px]">
//               <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none">
//                 <img
//                   src="/images/sidebanner.webp"
//                   alt="PesSave High-Velocity Eradication Asset"
//                   className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-300"
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/50 to-transparent z-0" />

//               <div className="relative z-10 space-y-3">
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-[#76C7C0] bg-[#76C7C0]/10 px-2.5 py-1 rounded border border-[#76C7C0]/20">
//                   Worcester HQ Network
//                 </span>

//                 <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight pt-2">
//                   Premium Eradication Frameworks
//                 </h3>
//               </div>

//               <div className="relative z-10 space-y-4 pt-8 border-t border-white/[0.06]">
//                 <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                   We secure structural parameters using low-toxicity biological
//                   insulation layers and high-tensile custom mesh barriers across
//                   residential and corporate boundaries.
//                 </p>

//                 <div className="bg-white/[0.02] border border-white/[0.06] p-3.5 rounded-xl flex items-center justify-between font-mono">
//                   <div className="text-left">
//                     <span className="text-[9px] text-slate-500 uppercase tracking-widest block">
//                       // Instant Helpline
//                     </span>
//                     <span className="text-sm font-bold text-white tracking-tight">
//                       07438 164691
//                     </span>
//                   </div>
//                   <PhoneCall className="w-4 h-4 text-[#4FA3A5]" />
//                 </div>
//               </div>
//             </div>

//             {/* Contact Nodes */}
//             <div className="space-y-3">
//               {[
//                 {
//                   label: "Local Premium Hub",
//                   val: "Worcester, UK",
//                   icon: <MapPin className="w-4 h-4 text-[#76C7C0]" />,
//                 },
//                 {
//                   label: "Corporate Support",
//                   val: "info@pestcontrolworcester.uk",
//                   icon: <Mail className="w-4 h-4 text-[#4FA3A5]" />,
//                   link: "mailto:info@pestcontrolworcester.uk",
//                 },
//                 {
//                   label: "Direct Emergency Line",
//                   val: "07438 164691",
//                   icon: <PhoneCall className="w-4 h-4 text-[#76C7C0]" />,
//                   link: "tel:07438164691",
//                 },
//               ].map((node, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.05] rounded-xl p-4 hover:border-[#4FA3A5]/30 transition-colors duration-200 text-left"
//                 >
//                   <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0">
//                     {node.icon}
//                   </div>

//                   <div>
//                     <p className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">
//                       {node.label}
//                     </p>

//                     {node.link ? (
//                       <a
//                         href={node.link}
//                         className="text-xs sm:text-sm font-bold text-slate-200 hover:text-[#76C7C0] transition-colors font-mono"
//                       >
//                         {node.val}
//                       </a>
//                     ) : (
//                       <p className="text-xs sm:text-sm font-bold text-slate-200 font-mono">
//                         {node.val}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Form Column */}
//           <div className="lg:col-span-7 w-full bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 sm:p-10 flex flex-col justify-center text-left relative animate-[fadeUp_0.7s_ease-out_0.1s_both]">
//             <div className="absolute top-0 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#76C7C0]/40 to-transparent" />

//             <div className="mb-8">
//               <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
//                 Request Target Inspection
//               </h2>
//               <p className="text-slate-400 text-xs sm:text-sm mt-1">
//                 Fill out our structural validation framework below to calculate
//                 direct deployment quotes.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5 w-full">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 {[
//                   {
//                     label: "Your Full Name",
//                     name: "name",
//                     type: "text",
//                     placeholder: "e.g. John Doe",
//                     icon: <User className="w-3.5 h-3.5 text-slate-500" />,
//                   },
//                   {
//                     label: "Email Address",
//                     name: "email",
//                     type: "email",
//                     placeholder: "e.g. john@example.com",
//                     icon: <Mail className="w-3.5 h-3.5 text-slate-500" />,
//                   },
//                   {
//                     label: "Phone Number",
//                     name: "phone",
//                     type: "tel",
//                     placeholder: "e.g. +44 7405 613595",
//                     icon: <PhoneCall className="w-3.5 h-3.5 text-slate-500" />,
//                   },
//                   {
//                     label: "Postcode Location",
//                     name: "postcode",
//                     type: "text",
//                     placeholder: "e.g. WR1",
//                     icon: <MapPin className="w-3.5 h-3.5 text-slate-500" />,
//                   },
//                 ].map((field) => (
//                   <div key={field.name} className="space-y-1.5 w-full">
//                     <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
//                       {field.icon}
//                       <span>{field.label}</span>
//                       <span className="text-[#4FA3A5]">*</span>
//                     </label>

//                     <input
//                       type={field.type}
//                       name={field.name}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       placeholder={field.placeholder}
//                       required
//                       className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl px-4 py-3 outline-none transition-colors duration-200 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm font-medium focus:ring-4 focus:ring-[#76C7C0]/5"
//                     />
//                   </div>
//                 ))}
//               </div>

//               <div className="space-y-1.5 w-full">
//                 <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
//                   <FileText className="w-3.5 h-3.5 text-slate-500" />
//                   <span>Required Pest Target</span>
//                   <span className="text-[#4FA3A5]">*</span>
//                 </label>

//                 <div className="relative">
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl pl-4 pr-12 py-3 outline-none transition-colors duration-200 text-slate-100 appearance-none cursor-pointer text-xs sm:text-sm font-medium focus:ring-4 focus:ring-[#76C7C0]/5"
//                   >
//                     <option value="" className="bg-[#020b14] text-slate-500">
//                       Select target infection route...
//                     </option>

//                     {services.map((srv, idx) => (
//                       <option
//                         key={idx}
//                         value={srv}
//                         className="bg-[#020b14] text-slate-300"
//                       >
//                         {srv}
//                       </option>
//                     ))}
//                   </select>

//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-1.5 w-full">
//                 <label className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
//                   <Terminal className="w-3.5 h-3.5 text-slate-500" />
//                   <span>Situation Description</span>
//                   <span className="text-[#4FA3A5]">*</span>
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Provide parameters about structural damage indicators or vector sights..."
//                   required
//                   className="w-full bg-black/40 border border-white/[0.08] focus:border-[#76C7C0] rounded-xl px-4 py-3 outline-none transition-colors duration-200 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm font-medium resize-none focus:ring-4 focus:ring-[#76C7C0]/5"
//                 />
//               </div>

//               <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
//                   <Lock className="w-3 h-3 text-[#4FA3A5]" />
//                   <span>End-To-End TLS Encrypted Validation</span>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="px-6 py-3.5 bg-gradient-to-r from-[#4FA3A5] to-[#76C7C0] text-slate-950 hover:brightness-110 rounded-xl font-bold text-xs uppercase tracking-widest transition-transform duration-200 shadow-lg shadow-[#4FA3A5]/10 disabled:opacity-40 inline-flex items-center justify-center gap-2 active:scale-[0.98]"
//                 >
//                   {loading ? (
//                     "Processing Request..."
//                   ) : (
//                     <>
//                       <span>Book Immediate Clearance</span>
//                       <Send className="w-3.5 h-3.5" />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="bg-black/20 py-16 border-t border-b border-white/[0.04] w-full relative">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-8 items-center">
//           <div className="lg:col-span-4 text-left space-y-4 animate-[fadeUp_0.7s_ease-out_both]">
//             <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl shadow-xl space-y-4">
//               <div className="w-10 h-10 rounded-xl bg-[#76C7C0]/10 border border-[#76C7C0]/20 flex items-center justify-center">
//                 <Globe className="w-5 h-5 text-[#76C7C0]" />
//               </div>

//               <div className="space-y-1.5">
//                 <div className="flex items-center gap-2">
//                   <span className="text-[9px] font-mono bg-[#4FA3A5]/10 border border-[#4FA3A5]/20 text-[#4FA3A5] px-2 py-0.5 rounded font-bold tracking-wider uppercase">
//                     Verified UK Vector Hub
//                   </span>
//                   <span className="text-xs text-[#76C7C0]">★★★★★</span>
//                 </div>

//                 <h4 className="text-base font-black text-white uppercase tracking-tight">
//                   Swiftpes Corporate Node
//                 </h4>

//                 <p className="text-xs text-slate-400 leading-relaxed font-normal">
//                   Access direct local reviews and geo-mapped rapid intervention
//                   networks across Worcester and the larger premium territories.
//                 </p>

//                 <a
//                   href="https://www.google.com/maps/place/Worcester,+UK/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-xs font-mono text-[#76C7C0] hover:underline inline-flex items-center gap-1 pt-2"
//                 >
//                   Explore Mapping Grid →
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-8 w-full rounded-2xl overflow-hidden border border-white/[0.08] h-[340px] relative shadow-xl bg-black/40 animate-[fadeUp_0.7s_ease-out_0.1s_both]">
//             <iframe
//               title="Worcester UK Grid Map"
//               src="https://maps.google.com/maps?q=Worcester,%20UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               width="100%"
//               height="100%"
//               style={{
//                 border: 0,
//                 filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
//               }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-24 relative w-full">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center max-w-xl mx-auto mb-14 space-y-1 animate-[fadeUp_0.7s_ease-out_both]">
//             <span className="text-xs text-[#4FA3A5] font-mono font-bold uppercase tracking-[0.2em]">
//             FAQ Knowledge Framework
//             </span>

//             <h2 className="text-3xl font-black uppercase tracking-tight text-white">
//               Frequently Answered Frameworks
//             </h2>
//           </div>

//           <div className="space-y-3.5">
//             {faqs.map((faq, idx) => {
//               const isOpen = activeFaq === idx;

//               return (
//                 <div
//                   key={idx}
//                   className={`border transition-colors duration-200 rounded-2xl overflow-hidden animate-[fadeUp_0.7s_ease-out_both] ${
//                     isOpen
//                       ? "bg-white/[0.02] border-[#76C7C0]/30 shadow-xl"
//                       : "bg-white/[0.01] border-white/[0.05] hover:border-white/[0.12]"
//                   }`}
//                   style={{ animationDelay: `${idx * 0.05}s` }}
//                 >
//                   <button
//                     onClick={() => toggleFaq(idx)}
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left outline-none group"
//                   >
//                     <span className="font-bold text-sm sm:text-base text-slate-200 tracking-tight transition-colors duration-200 group-hover:text-white flex items-center gap-2.5">
//                       <HelpCircle className="w-4 h-4 text-[#4FA3A5] shrink-0" />
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`text-slate-500 font-mono transition-transform duration-200 text-lg ${
//                         isOpen ? "rotate-180 text-[#76C7C0]" : ""
//                       }`}
//                     >
//                       ▼
//                     </span>
//                   </button>

//                   {isOpen && (
//                     <div className="px-6 pb-5 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] pt-3 font-normal">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   HelpCircle,
//   ChevronDown,
//   Clock,
//   ShieldCheck,
//   CheckCircle2,
//   Home,
//   ArrowRight
// } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Heat Treatment",
//     "Carpet Moth & Beetle Treatment",
//     "Cockroach Gel Treatment",
//     "Rats & Mice Proofing",
//     "Flea Eradication",
//     "Wasp & Bee Removal",
//     "Squirrel Exclusion & Proofing",
//     "Commercial Kitchen Deep Sanitization",
//     "Bird Netting & Spikes Installation",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can your team arrive at my property?",
//       answer: "We offer same-day emergency response across London. Once your call or form is confirmed, our local technicians are dispatched immediately to resolve your pest issue.",
//     },
//     {
//       question: "Are your treatments safe for children and household pets?",
//       answer: "Yes, all our treatments follow strict UK safety regulations. We use targeted, low-toxicity methods and will provide clear instructions if you need to leave the property for a short period during the treatment.",
//     },
//     {
//       question: "Do you offer a guarantee for your pest control services?",
//       answer: "Absolutely. Most of our eradication treatments come with a guaranteed pest-free period. If the pests return within the warranty window, we will revisit and re-treat your property free of charge.",
//     },
//     {
//       question: "Do you provide services for commercial businesses and restaurants?",
//       answer: "Yes, Pesbye Services handles commercial contracts for restaurants, hotels, warehouses, and retail shops, providing discreet treatments and complete compliance documentation.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your request...", {
//       style: {
//         background: "#0A2240",
//         color: "#FFFFFF",
//         borderRadius: "12px",
//         fontSize: "14px",
//       },
//     });

//     try {
//       const res = await axios.post("http://localhost:5000/api/contact", formData);
//       toast.success(res.data.message || "Thank you! Your request has been received.", {
//         id: loaderToast,
//         duration: 4000,
//         icon: "✅",
//         style: {
//           background: "#0A2240",
//           color: "#FFFFFF",
//           borderRadius: "12px",
//           fontSize: "14px",
//         },
//       });

//       setFormData({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send request. Please try again.", {
//         id: loaderToast,
//         duration: 4000,
//         style: {
//           background: "#7f1d1d",
//           color: "#FFFFFF",
//           borderRadius: "12px",
//           fontSize: "14px",
//         },
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#C5A86B] text-[#0A2240] min-h-screen font-sans antialiased selection:bg-[#0A2240]/10 overflow-x-hidden w-full relative pb-20">
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* Hero Section Context with Background Image */}
//       <div className="relative w-full overflow-hidden">
//         {/* Background Image Container */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
//           style={{ 
//             backgroundImage: `url('YOUR_HERO_IMAGE_URL_HERE')`, 
//           }}
//         />
//         {/* Color overlay dynamically matching the new theme for contrast control */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#C5A86B]/75 via-[#C5A86B]/90 to-[#C5A86B] z-0" />

//         {/* Hero Section Content */}
//         <section className="relative z-10 pt-36 pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center lg:text-left">
//           <div className="max-w-3xl space-y-4">
//             <div className="inline-flex items-center gap-2 bg-[#0A2240]/10 border border-[#0A2240]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
//               <ShieldCheck className="w-4 h-4 text-[#0A2240]" />
//               <span className="text-[#0A2240] text-xs font-bold tracking-wider uppercase">
//                 Pesbye Services London
//               </span>
//             </div>
//             <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A2240] leading-tight uppercase">
//               Professional Pest Control <br />
//               <span className="text-white drop-shadow-sm">Made Simple & Reliable</span>
//             </h1>
//             <p className="text-[#0A2240]/80 text-sm sm:text-base max-w-2xl pt-2 font-medium leading-relaxed">
//               Get in touch with Pesbye Services for fast, effective, and safe pest eradication. Fill out our form below, and our local London team will handle the rest.
//             </p>
//           </div>
//         </section>
//       </div>

//       {/* Split Runway Template Layout */}
//       <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-4 relative z-10">
//         <div className="grid lg:grid-cols-12 gap-8 items-start">
          
//           {/* Left Side: Trust Badges & Contact Info */}
//           <div className="lg:col-span-4 space-y-6">
//             <div className="bg-white/10 border border-[#0A2240]/10 rounded-2xl p-6 backdrop-blur-sm space-y-6">
//               <h3 className="text-xl font-black text-[#0A2240] uppercase border-b border-[#0A2240]/10 pb-3">
//                 Why Choose Pesbye?
//               </h3>
              
//               <div className="space-y-4">
//                 {[
//                   { icon: <Clock className="w-5 h-5 text-[#0A2240]" />, title: "24/7 Availability", desc: "Emergency response squads active all across London." },
//                   { icon: <CheckCircle2 className="w-5 h-5 text-[#0A2240]" />, title: "Guaranteed Results", desc: "Free re-treatments if the pests return within the warranty." },
//                   { icon: <Home className="w-5 h-5 text-[#0A2240]" />, title: "Residential & Commercial", desc: "Safe methods for homes, kitchens, and offices." }
//                 ].map((item, index) => (
//                   <div key={index} className="flex gap-4 items-start text-left">
//                     <div className="p-2 bg-[#0A2240]/5 rounded-lg shrink-0">{item.icon}</div>
//                     <div>
//                       <h4 className="font-bold text-sm text-[#0A2240]">{item.title}</h4>
//                       <p className="text-xs text-[#0A2240]/70 font-medium mt-0.5">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Contact Rows */}
//             <div className="space-y-3">
//               {[
//                 { label: "Our Central Location", val: "Mayfair, London, UK", icon: <MapPin className="w-4 h-4 text-[#0A2240]" /> },
//                 { label: "Email Support", val: "info@pestcontrolmayfair.uk", icon: <Mail className="w-4 h-4 text-[#0A2240]" />, link: "mailto:info@pestcontrolmayfair.uk" },
//                 { label: "Call Bookings Direct", val: "07424 520697", icon: <PhoneCall className="w-4 h-4 text-[#0A2240]" />, link: "tel:07424520697" }
//               ].map((node, i) => (
//                 <div key={i} className="flex items-center gap-4 bg-white/10 border border-[#0A2240]/10 rounded-xl p-4 text-left backdrop-blur-sm">
//                   <div className="w-9 h-9 rounded-lg bg-[#0A2240]/5 flex items-center justify-center shrink-0">
//                     {node.icon}
//                   </div>
//                   <div>
//                     <p className="text-[10px] text-[#0A2240]/60 uppercase tracking-wider font-black">{node.label}</p>
//                     {node.link ? (
//                       <a href={node.link} className="text-sm font-black text-[#0A2240] hover:text-white transition-colors">{node.val}</a>
//                     ) : (
//                       <p className="text-sm font-black text-[#0A2240]">{node.val}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side: Clean Professional Form Grid */}
//           <div className="lg:col-span-8 bg-white text-[#0A2240] rounded-3xl p-6 sm:p-10 text-left shadow-2xl">
//             <div className="mb-6 border-b border-slate-200 pb-4">
//               <h2 className="text-2xl font-black uppercase tracking-tight text-[#0A2240]">
//                 Request a  Quote
//               </h2>
//               <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
//                 Please provide your details below, and our team will get back to you with a direct pricing plan.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 {[
//                   { label: "Full Name", name: "name", type: "text", placeholder: "John Doe" },
//                   { label: "Email Address", name: "email", type: "email", placeholder: "john@example.com" },
//                   { label: "Phone Number", name: "phone", type: "tel", placeholder: "07438 164691" },
//                   { label: "Postcode", name: "postcode", type: "text", placeholder: "W1J 8DJ" },
//                 ].map((field) => (
//                   <div key={field.name} className="space-y-1.5">
//                     <label className="text-xs font-bold text-[#0A2240]/80 tracking-wide uppercase">
//                       {field.label}
//                     </label>
//                     <input
//                       type={field.type}
//                       name={field.name}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       placeholder={field.placeholder}
//                       required
//                       className="w-full bg-slate-50 border border-slate-200 focus:border-[#C5A86B] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all duration-200 text-[#0A2240] text-sm font-medium focus:ring-2 focus:ring-[#C5A86B]/20"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Service Selection */}
//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold text-[#0A2240]/80 tracking-wide uppercase">
//                   Pest Issue / Required Service
//                 </label>
//                 <div className="relative">
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-slate-50 border border-slate-200 focus:border-[#C5A86B] focus:bg-white rounded-xl pl-4 pr-12 py-3 outline-none transition-all duration-200 text-[#0A2240] appearance-none cursor-pointer text-sm font-medium"
//                   >
//                     <option value="">Select a service...</option>
//                     {services.map((srv, idx) => (
//                       <option key={idx} value={srv}>
//                         {srv}
//                       </option>
//                     ))}
//                   </select>
//                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
//                     <ChevronDown className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>

//               {/* Message */}
//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold text-[#0A2240]/80 tracking-wide uppercase">
//                   Details of the Pest Sighting
//                 </label>
//                 <textarea
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us where the pests were seen, how long the issue has been happening, or any specific requirements you have..."
//                   required
//                   className="w-full bg-slate-50 border border-slate-200 focus:border-[#C5A86B] focus:bg-white rounded-xl px-4 py-3 outline-none transition-all duration-200 text-[#0A2240] text-sm font-medium resize-none focus:ring-2 focus:ring-[#C5A86B]/20"
//                 />
//               </div>

//               {/* Form Action Button */}
//               <div className="pt-2 flex justify-end">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0A2240] text-white px-8 py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-200 hover:bg-[#0A2240]/90 active:scale-[0.99] disabled:opacity-50"
//                 >
//                   <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 w-full relative z-10">
//         <div className="bg-white/10 border border-[#0A2240]/10 rounded-3xl p-6 grid md:grid-cols-12 gap-8 items-center text-left backdrop-blur-sm">
//           <div className="md:col-span-4 space-y-2">
//             <h4 className="text-xl font-black text-[#0A2240] uppercase tracking-tight">
//               Coverage Network
//             </h4>
//             <p className="text-sm text-[#0A2240]/80 font-medium leading-relaxed">
//               Based in Mayfair, Pesbye Services covers all central and greater London zones. Our mobile service vehicles ensure local treatment teams are never far away.
//             </p>
//           </div>
//           <div className="md:col-span-8 w-full rounded-2xl overflow-hidden h-[280px] bg-[#0A2240]/5 border border-[#0A2240]/10">
//        <iframe
//   title="Pesbye Services Coverage Map"
//   src="https://www.google.com/maps?q=Mayfair,%20London,%20UK&output=embed"
//   width="100%"
//   height="100%"
//   style={{ border: 0, filter: "grayscale(100%) invert(10%) contrast(90%)" }}
//   allowFullScreen
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
// />
//           </div>
//         </div>
//       </section>

//       {/* Clean FAQ Section */}
//       <section className="max-w-4xl mx-auto px-6 mt-20 relative w-full z-10">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0A2240]">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-[#0A2240]/70 text-sm font-medium mt-1">Everything you need to know about our local pest solutions</p>
//         </div>

//         <div className="space-y-3">
//           {faqs.map((faq, idx) => {
//             const isOpen = activeFaq === idx;
//             return (
//               <div key={idx} className="bg-white/10 border border-[#0A2240]/10 rounded-xl overflow-hidden text-left transition-all duration-200 backdrop-blur-sm">
//                 <button
//                   onClick={() => toggleFaq(idx)}
//                   className="w-full flex items-center justify-between gap-4 p-5 outline-none font-bold text-sm sm:text-base text-[#0A2240] hover:bg-white/[0.04]"
//                 >
//                   <span className="flex items-center gap-3">
//                     <HelpCircle className="w-4 h-4 text-[#0A2240] shrink-0" />
//                     {faq.question}
//                   </span>
//                   <span className="text-[#0A2240] font-mono">
//                     {isOpen ? "－" : "＋"}
//                   </span>
//                 </button>

//                 {isOpen && (
//                   <div className="p-5 pt-0 pl-12 text-[#0A2240]/80 text-xs sm:text-sm font-medium leading-relaxed border-t border-[#0A2240]/5 bg-white/5">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;
















// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Mail,
//   PhoneCall,
//   MapPin,
//   HelpCircle,
//   ChevronDown,
//   Clock,
//   ShieldCheck,
//   CheckCircle2,
//   Home,
//   ArrowRight
// } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     postcode: "",
//     service: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   const services = [
//     "Ants Control",
//     "Bed Bugs Heat Treatment",
//     "Carpet Moth & Beetle Treatment",
//     "Cockroach Gel Treatment",
//     "Rats & Mice Proofing",
//     "Flea Eradication",
//     "Wasp & Bee Removal",
//     "Squirrel Exclusion & Proofing",
//     "Commercial Kitchen Deep Sanitization",
//     "Bird Netting & Spikes Installation",
//   ];

//   const faqs = [
//     {
//       question: "How quickly can your team arrive at my property?",
//       answer: "We offer same-day emergency response across London. Once your call or form is confirmed, our local technicians are dispatched immediately to resolve your pest issue.",
//     },
//     {
//       question: "Are your treatments safe for children and household pets?",
//       answer: "Yes, all our treatments follow strict UK safety regulations. We use targeted, low-toxicity methods and will provide clear instructions if you need to leave the property for a short period during the treatment.",
//     },
//     {
//       question: "Do you offer a guarantee for your pest control services?",
//       answer: "Absolutely. Most of our eradication treatments come with a guaranteed pest-free period. If the pests return within the warranty window, we will revisit and re-treat your property free of charge.",
//     },
//     {
//       question: "Do you provide services for commercial businesses and restaurants?",
//       answer: "Yes, Pesbye Services handles commercial contracts for restaurants, hotels, warehouses, and retail shops, providing discreet treatments and complete compliance documentation.",
//     },
//   ];

//   const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const loaderToast = toast.loading("Sending your request...", {
//       style: { background: "#0A2240", color: "#FFFFFF", borderRadius: "12px", fontSize: "14px" },
//     });

//     try {
//       const res = await axios.post("http://localhost:5000/api/contact", formData);
//       toast.success(res.data.message || "Thank you! Your request has been received.", {
//         id: loaderToast,
//         duration: 4000,
//         icon: "✅",
//         style: { background: "#0A2240", color: "#FFFFFF", borderRadius: "12px", fontSize: "14px" },
//       });
//       setFormData({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send request.", {
//         id: loaderToast,
//         duration: 4000,
//         style: { background: "#7f1d1d", color: "#FFFFFF", borderRadius: "12px", fontSize: "14px" },
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="bg-[#C5A86B] text-[#0A2240] min-h-screen font-sans antialiased selection:bg-[#0A2240]/10 overflow-x-hidden w-full relative pb-20">
//       <Toaster position="top-right" reverseOrder={false} />

//       <div className="relative w-full overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#C5A86B]/75 via-[#C5A86B]/90 to-[#C5A86B] z-0" />
//         <section className="relative z-10 pt-36 pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center lg:text-left">
//           <div className="max-w-3xl space-y-4">
//             <div className="inline-flex items-center gap-2 bg-[#0A2240]/10 border border-[#0A2240]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
//               <ShieldCheck className="w-4 h-4 text-[#0A2240]" />
//               <span className="text-[#0A2240] text-xs font-bold tracking-wider uppercase">Pesbye Services London</span>
//             </div>
//             <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A2240] leading-tight uppercase">
//               Professional Pest Control <br /> <span className="text-white drop-shadow-sm">Made Simple & Reliable</span>
//             </h1>
//           </div>
//         </section>
//       </div>

//       <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-4 relative z-10">
//         <div className="grid lg:grid-cols-12 gap-8 items-start">
//           <div className="lg:col-span-4 space-y-6">
//             <div className="bg-white/10 border border-[#0A2240]/10 rounded-2xl p-6 backdrop-blur-sm space-y-6">
//               <h3 className="text-xl font-black text-[#0A2240] uppercase border-b border-[#0A2240]/10 pb-3">Why Choose Pesbye?</h3>
//               <div className="space-y-4">
//                 {[
//                   { icon: <Clock className="w-5 h-5 text-[#0A2240]" />, title: "24/7 Availability", desc: "Emergency response squads active all across London." },
//                   { icon: <CheckCircle2 className="w-5 h-5 text-[#0A2240]" />, title: "Guaranteed Results", desc: "Free re-treatments if the pests return." },
//                   { icon: <Home className="w-5 h-5 text-[#0A2240]" />, title: "Residential & Commercial", desc: "Safe methods for homes, kitchens, and offices." }
//                 ].map((item, index) => (
//                   <div key={index} className="flex gap-4 items-start text-left">
//                     <div className="p-2 bg-[#0A2240]/5 rounded-lg shrink-0">{item.icon}</div>
//                     <div>
//                       <h4 className="font-bold text-sm text-[#0A2240]">{item.title}</h4>
//                       <p className="text-xs text-[#0A2240]/70 font-medium mt-0.5">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="space-y-3">
//               {[
//                 { label: "Our Central Location", val: "Mayfair, London, UK", icon: <MapPin className="w-4 h-4 text-[#0A2240]" /> },
//                 { label: "Email Support", val: "info@pesbye.com", icon: <Mail className="w-4 h-4 text-[#0A2240]" />, link: "mailto:info@pesbye.com" },
//                 { label: "Call Bookings Direct", val: "07424 520697", icon: <PhoneCall className="w-4 h-4 text-[#0A2240]" />, link: "tel:07424520697" }
//               ].map((node, i) => (
//                 <div key={i} className="flex items-center gap-4 bg-white/10 border border-[#0A2240]/10 rounded-xl p-4 text-left backdrop-blur-sm">
//                   <div className="w-9 h-9 rounded-lg bg-[#0A2240]/5 flex items-center justify-center shrink-0">{node.icon}</div>
//                   <div>
//                     <p className="text-[10px] text-[#0A2240]/60 uppercase tracking-wider font-black">{node.label}</p>
//                     {node.link ? <a href={node.link} className="text-sm font-black text-[#0A2240]">{node.val}</a> : <p className="text-sm font-black text-[#0A2240]">{node.val}</p>}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="lg:col-span-8 bg-white text-[#0A2240] rounded-3xl p-6 sm:p-10 text-left shadow-2xl">
//             <h2 className="text-2xl font-black uppercase tracking-tight text-[#0A2240] mb-6">Request a Quote</h2>
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid sm:grid-cols-2 gap-5">
//                 {[{ label: "Full Name", name: "name", type: "text" }, { label: "Email", name: "email", type: "email" }, { label: "Phone", name: "phone", type: "tel" }, { label: "Postcode", name: "postcode", type: "text" }].map((field) => (
//                   <div key={field.name} className="space-y-1.5">
//                     <label className="text-xs font-bold text-[#0A2240]/80 uppercase">{field.label}</label>
//                     <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm" />
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-1.5">
//                 <label className="text-xs font-bold text-[#0A2240]/80 uppercase">Service</label>
//                 <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm appearance-none cursor-pointer">
//                   <option value="">Select a service...</option>
//                   {services.map((srv, idx) => <option key={idx} value={srv}>{srv}</option>)}
//                 </select>
//               </div>
//               <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Details of the sighting..." required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm resize-none" />
//               <button type="submit" disabled={loading} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0A2240] text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#0A2240]/90">
//                 {loading ? "Sending..." : "Submit Inquiry"} <ArrowRight className="w-4 h-4" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Google Business Profile Section */}
//       <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 w-full relative z-10">
//         <div className="bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
//           <div className="space-y-4">
//             <div className="inline-block bg-[#C5A86B] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Verified 5-Star Service</div>
//             <h3 className="text-3xl font-black text-white uppercase tracking-tight">Trusted in Mayfair & London</h3>
//             <p className="text-[#C5A86B]/80 text-sm max-w-md font-medium">Read our latest reviews and join thousands of satisfied customers who trust Pesbye Services.</p>
//           </div>
//           <div className="shrink-0">
//             <a href="https://maps.app.goo.gl/mWv8VH1HzqWg1LuG9?g_st=ic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#C5A86B] transition-all">
//               Visit Google Profile <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="max-w-4xl mx-auto px-6 mt-20 relative w-full z-10">
//         <h2 className="text-3xl font-black uppercase text-center text-[#0A2240] mb-12">Frequently Asked Questions</h2>
//         <div className="space-y-3">
//           {faqs.map((faq, idx) => (
//             <div key={idx} className="bg-white/10 border border-[#0A2240]/10 rounded-xl overflow-hidden backdrop-blur-sm">
//               <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-5 font-bold text-sm text-[#0A2240]">
//                 {faq.question} <span>{activeFaq === idx ? "－" : "＋"}</span>
//               </button>
//               {activeFaq === idx && <div className="p-5 pt-0 text-[#0A2240]/80 text-sm border-t border-[#0A2240]/5">{faq.answer}</div>}
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;




import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  Mail,
  PhoneCall,
  MapPin,
  HelpCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Home,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    "Ants Control",
    "Bed Bugs Heat Treatment",
    "Carpet Moth & Beetle Treatment",
    "Cockroach Gel Treatment",
    "Rats & Mice Proofing",
    "Flea Eradication",
    "Wasp & Bee Removal",
    "Squirrel Exclusion & Proofing",
    "Commercial Kitchen Deep Sanitization",
    "Bird Netting & Spikes Installation",
  ];

  const faqs = [
    {
      question: "How quickly can your team arrive at my property?",
      answer: "We offer same-day emergency response across London. Once your call or form is confirmed, our local technicians are dispatched immediately to resolve your pest issue.",
    },
    {
      question: "Are your treatments safe for children and household pets?",
      answer: "Yes, all our treatments follow strict UK safety regulations. We use targeted, low-toxicity methods and will provide clear instructions if you need to leave the property for a short period during the treatment.",
    },
    {
      question: "Do you offer a guarantee for your pest control services?",
      answer: "Absolutely. Most of our eradication treatments come with a guaranteed pest-free period. If the pests return within the warranty window, we will revisit and re-treat your property free of charge.",
    },
    {
      question: "Do you provide services for commercial businesses and restaurants?",
      answer: "Yes, Pesbye Services handles commercial contracts for restaurants, hotels, warehouses, and retail shops, providing discreet treatments and complete compliance documentation.",
    },
  ];

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loaderToast = toast.loading("Sending your request...", {
      style: { background: "#0A2240", color: "#FFFFFF", borderRadius: "12px", fontSize: "14px" },
    });

    try {
      const res = await axios.post("https://pesbye-backend.vercel.app/api/contact", formData);
      toast.success(res.data.message || "Thank you! Your request has been received.", {
        id: loaderToast,
        duration: 4000,
        icon: "✅",
        style: { background: "#0A2240", color: "#FFFFFF", borderRadius: "12px", fontSize: "14px" },
      });
      setFormData({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send request.", {
        id: loaderToast,
        duration: 4000,
        style: { background: "#7f1d1d", color: "#FFFFFF", borderRadius: "12px", fontSize: "14px" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#C5A86B] text-[#0A2240] min-h-screen font-sans antialiased selection:bg-[#0A2240]/10 overflow-x-hidden w-full relative pb-20">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C5A86B]/75 via-[#C5A86B]/90 to-[#C5A86B] z-0" />
        <section className="relative z-10 pt-36 pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center lg:text-left">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#0A2240]/10 border border-[#0A2240]/20 px-4 py-1.5 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#0A2240]" />
              <span className="text-[#0A2240] text-xs font-bold tracking-wider uppercase">Pesbye Services London</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A2240] leading-tight uppercase">
              Professional Pest Control <br /> <span className="text-white drop-shadow-sm">Made Simple & Reliable</span>
            </h1>
          </div>
        </section>
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/10 border border-[#0A2240]/10 rounded-2xl p-6 backdrop-blur-sm space-y-6">
              <h3 className="text-xl font-black text-[#0A2240] uppercase border-b border-[#0A2240]/10 pb-3">Why Choose Pesbye?</h3>
              <div className="space-y-4">
                {[
                  { icon: <Clock className="w-5 h-5 text-[#0A2240]" />, title: "24/7 Availability", desc: "Emergency response squads active all across London." },
                  { icon: <CheckCircle2 className="w-5 h-5 text-[#0A2240]" />, title: "Guaranteed Results", desc: "Free re-treatments if the pests return." },
                  { icon: <Home className="w-5 h-5 text-[#0A2240]" />, title: "Residential & Commercial", desc: "Safe methods for homes, kitchens, and offices." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start text-left">
                    <div className="p-2 bg-[#0A2240]/5 rounded-lg shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0A2240]">{item.title}</h4>
                      <p className="text-xs text-[#0A2240]/70 font-medium mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "Our Central Location", val: "Mayfair, London, UK", icon: <MapPin className="w-4 h-4 text-[#0A2240]" /> },
                { label: "Email Support", val: "info@pestcontrolmayfair.uk", icon: <Mail className="w-4 h-4 text-[#0A2240]" />, link: "mailto:info@pestcontrolmayfair.uk" },
                { label: "Call Bookings Direct", val: "07424 520697", icon: <PhoneCall className="w-4 h-4 text-[#0A2240]" />, link: "tel:07424520697" }
              ].map((node, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 border border-[#0A2240]/10 rounded-xl p-4 text-left backdrop-blur-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#0A2240]/5 flex items-center justify-center shrink-0">{node.icon}</div>
                  <div>
                    <p className="text-[10px] text-[#0A2240]/60 uppercase tracking-wider font-black">{node.label}</p>
                    {node.link ? <a href={node.link} className="text-sm font-black text-[#0A2240]">{node.val}</a> : <p className="text-sm font-black text-[#0A2240]">{node.val}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-white text-[#0A2240] rounded-3xl p-6 sm:p-10 text-left shadow-2xl">
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#0A2240] mb-6">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[{ label: "Full Name", name: "name", type: "text" }, { label: "Email", name: "email", type: "email" }, { label: "Phone", name: "phone", type: "tel" }, { label: "Postcode", name: "postcode", type: "text" }].map((field) => (
                  <div key={field.name} className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0A2240]/80 uppercase">{field.label}</label>
                    <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm" />
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0A2240]/80 uppercase">Service</label>
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm appearance-none cursor-pointer">
                  <option value="">Select a service...</option>
                  {services.map((srv, idx) => <option key={idx} value={srv}>{srv}</option>)}
                </select>
              </div>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Details of the sighting..." required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none text-sm resize-none" />
              <button type="submit" disabled={loading} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0A2240] text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#0A2240]/90">
                {loading ? "Sending..." : "Submit Inquiry"} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Business Profile Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 w-full relative z-10">
        <div className="bg-[#0A2240] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4">
            <div className="inline-block bg-[#C5A86B] text-[#0A2240] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Verified 5-Star Service</div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">Trusted in Mayfair & London</h3>
            <p className="text-[#C5A86B]/80 text-sm max-w-md font-medium">Read our latest reviews and join thousands of satisfied customers who trust Pesbye Services.</p>
          </div>
          <div className="shrink-0">
            <a href="https://maps.app.goo.gl/mWv8VH1HzqWg1LuG9?g_st=ic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-[#0A2240] px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#C5A86B] transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Visit Google Profile
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-20 relative w-full z-10">
        <h2 className="text-3xl font-black uppercase text-center text-[#0A2240] mb-12">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/10 border border-[#0A2240]/10 rounded-xl overflow-hidden backdrop-blur-sm">
              <button onClick={() => toggleFaq(idx)} className="w-full flex items-center justify-between p-5 font-bold text-sm text-[#0A2240]">
                {faq.question} <span>{activeFaq === idx ? "－" : "＋"}</span>
              </button>
              {activeFaq === idx && <div className="p-5 pt-0 text-[#0A2240]/80 text-sm border-t border-[#0A2240]/5">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;