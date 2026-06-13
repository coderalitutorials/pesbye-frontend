import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Target,
  ShieldAlert,
  PhoneCall,
  Terminal,
  Shield,
  Eye,
  Layers,
  Zap,
  Award,
  Fingerprint,
  Cpu,
} from "lucide-react";

function ContentCounter({ value, duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentValue = Math.round(progress * numericValue);

            setCount(currentValue);
            if (progress < 1) requestAnimationFrame(animateCount);
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [numericValue, duration]);

  return (
    <span ref={ref} className="inline-flex items-center font-mono tracking-tight text-[#0A2240]">
      <span>{count}</span>
      <span className="text-white ml-0.5">{suffix}</span>
    </span>
  );
}

export default function AboutUsPage() {
  const [activePhase, setActivePhase] = useState(0);

  const pestDirectives = [
    {
      phase: "01",
      title: "Thermal Inspection",
      tagline: "Locating Deep Nesting Zones Without Damage",
      desc: "Our certified field technicians deploy advanced digital thermal cameras and moisture sensors to detect hidden termite sub-colonies, rodent entry holes, and deep-seated nests inside structural walls without breaking brickwork or plaster.",
    },
    {
      phase: "02",
      title: "Targeted Eradication",
      tagline: "Total Elimination At The Vector Source",
      desc: "We apply premium, low-odor, eco-certified baits and targeted gel treatments that completely eliminate active infestations of bed bugs, cockroaches, and mice. Our non-invasive approach targets the source while keeping living and working spaces completely safe.",
    },
    {
      phase: "03",
      title: "Perimeter Exclusion",
      tagline: "Long-Term Structural Proofing Shields",
      desc: "We structurally proof your property by sealing foundation cracks, mesh-guarding vents, and creating durable external barrier lines. This physical and liquid barrier grid permanently cuts off secondary migration routes into your premises.",
    },
  ];

  return (
    <main className="bg-[#C5A86B] font-sans antialiased text-slate-900 overflow-hidden w-full relative min-h-screen isolate backface-hidden">
      
      {/* Dynamic Geometric Overlay Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 transform-gpu">
        <div className="absolute top-[5%] right-[-10%] w-[800px] h-[800px] border-[1px] border-[#0A2240]/20 rounded-full" />
        <div className="absolute top-[40%] left-[-20%] w-[500px] h-[500px] border-l-[4px] border-b-[4px] border-[#0A2240]/5 rotate-45" />
      </div>

      {/* ─── NEW ASYMMETRIC CORPORATE HERO ─── */}
      <section className="relative pt-36 pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/40">
        
        {/* Left Side: Editorial Typography Column */}
        <div className="lg:col-span-5 space-y-6 text-left z-10 sticky top-36">
          <div className="inline-flex items-center gap-2 bg-white/40 border border-white/60 px-3 py-1 rounded-md shadow-sm">
            <Fingerprint className="w-4 h-4 text-[#0A2240]" />
            <span className="text-[#0A2240] text-[10px] font-mono tracking-widest uppercase font-black">
              Premium Property Protection // London
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0A2240] leading-[1.0]">
            The New <br />
            <span className="text-white drop-shadow-sm font-light italic block normal-case tracking-normal my-1">
              Standard
            </span> 
            Of Pest Defense.
          </h1>

          <div className="w-20 h-1 bg-[#0A2240]" />

          <p className="text-slate-950 text-sm sm:text-base leading-relaxed font-medium">
            Pesbye Services replaces old, messy chemical sprays with precise tracking tech and clean, structural exclusion. We deliver total, long-term pest eradication engineered carefully for luxury homes and high-end commercial estates.
          </p>
        </div>

        {/* Right Side: Ultra-Premium Multi-Image Interlocking Composition */}
        <div className="lg:col-span-7 w-full space-y-8 z-10 lg:pl-6">
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-white/50 bg-white/30 shadow-xl group">
            <img
              src="/images/pest-hero-bg.webp" 
              alt="Premium Pest Control Technician Performing Structural Exclusion"
              className="w-full h-full object-cover contrast-[1.02] brightness-[0.9] group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 bg-[#0A2240] text-white px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-bold">
              Certified Field Technicians
            </div>
          </div>

          {/* Quick Counter Metrics Strip */}
          <div className="grid grid-cols-3 gap-4 bg-white/50 border border-white/70 rounded-2xl p-6 shadow-lg">
            <div className="text-left border-r border-[#0A2240]/10 last:border-0 pr-2">
              <span className="text-2xl sm:text-3xl font-black text-[#0A2240] font-mono block"><ContentCounter value="1,850+" /></span>
              <span className="text-[9px] uppercase font-mono tracking-wider text-slate-800 font-black">Premises Cleared</span>
            </div>
            <div className="text-left border-r border-[#0A2240]/10 last:border-0 px-2 sm:px-4">
              <span className="text-2xl sm:text-3xl font-black text-[#0A2240] font-mono block"><ContentCounter value="100%" /></span>
              <span className="text-[9px] uppercase font-mono tracking-wider text-slate-800 font-black">Safety Compliance</span>
            </div>
            <div className="text-left last:border-0 pl-2 sm:pl-4">
              <span className="text-2xl sm:text-3xl font-black text-[#0A2240] font-mono block"><ContentCounter value="45+" /></span>
              <span className="text-[9px] uppercase font-mono tracking-wider text-slate-800 font-black">Licensed Experts</span>
            </div>
          </div>
        </div>
      </section>


      {/* ─── NEW HIGH-END BENTO GRID FEATURES SECTION ─── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="mb-12 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0A2240] font-black block mb-2">Operational Framework</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A2240] uppercase tracking-tight">Core Services & Shields</h2>
        </div>

        {/* Bento Grid Template Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Box 1: Large Featured Asset */}
          <div className="md:col-span-8 bg-white/40 border border-white/50 rounded-3xl p-8 text-left flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="space-y-4 max-w-xl z-10">
              <div className="w-10 h-10 rounded-xl bg-white/60 border border-white/80 flex items-center justify-center text-[#0A2240]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0A2240] uppercase">Sub-Floor & Woodworm Timber Treatment</h3>
              <p className="text-slate-900 text-sm leading-relaxed font-medium">
                Our technicians inject specialized, long-lasting wood-proofing barriers that stop subterranean woodworms and termites completely. We protect high-value structural timbers and internal premium millwork without affecting your interiors.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono bg-white/40 px-3 py-1.5 rounded border border-white/50 w-fit z-10">
              <Eye className="w-3.5 h-3.5 text-[#0A2240]" />
              <span className="text-slate-900">Advanced micro-camera validation and detection.</span>
            </div>
          </div>

          {/* Bento Box 2: Small Image Panel */}
          <div className="md:col-span-4 min-h-[240px] rounded-3xl overflow-hidden border border-white/50 bg-white/30 shadow-xl relative">
            <img 
              src="/images/termite-inspection.webp" 
              alt="Professional Termite and Nest Inspection Setup" 
              className="w-full h-full object-cover contrast-[1.05]"
              loading="lazy"
            />
          </div>

          {/* Bento Box 3: Small Info Asset */}
          <div className="md:col-span-4 bg-[#0A2240] text-white rounded-3xl p-8 text-left flex flex-col justify-between shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#C5A86B]">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="mt-8 space-y-2">
              <h4 className="text-sm font-mono uppercase tracking-widest text-[#C5A86B] font-bold">Eco-Safe Formulas</h4>
              <h3 className="text-lg font-black uppercase">Odorless & Discrete</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                No harsh odors or toxic chemical clouds left behind. All baits are carefully targeted via specialized premium tech.
              </p>
            </div>
          </div>

          {/* Bento Box 4: Medium Text/Asset Layout */}
          <div className="md:col-span-8 bg-white/40 border border-white/50 rounded-3xl p-8 text-left flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/60 border border-white/80 flex items-center justify-center text-[#0A2240]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-[#0A2240] uppercase">Complete Multi-Vector Rodent & Insect Control</h3>
              <p className="text-slate-900 text-sm leading-relaxed font-medium">
                Whether clearing large cockroach nesting grounds inside heavy commercial kitchens or tracking rodent runways hidden within complex ceiling and loft voids, our dynamic exclusion shielding locks down your structural weak points instantly.
              </p>
            </div>
            <div className="border-t border-[#0A2240]/10 pt-4 mt-6 text-xs text-slate-800 font-mono flex items-center gap-2">
              <Award className="w-4 h-4 text-[#0A2240]" /> Certified BPCA Standards & Eco Guidelines.
            </div>
          </div>

        </div>
      </section>


      {/* ─── NEW STEP-LINE METHODOLOGY TIMELINE ─── */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full border-t border-white/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-3 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0A2240] font-black">Treatment Blueprint</span>
            <h2 className="text-3xl font-black text-[#0A2240] uppercase tracking-tight">Eradication Process</h2>
            <p className="text-slate-900 text-xs sm:text-sm font-medium">
              Click through our active deployment stages to see how our operators protect and seal your assets.
            </p>

            {/* Vertical Phase Selection Stack */}
            <div className="flex flex-row lg:flex-col gap-2 pt-4 overflow-x-auto pb-2 no-scrollbar">
              {pestDirectives.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl border font-mono transition-all duration-300 flex items-center gap-3 whitespace-nowrap cursor-pointer ${
                    activePhase === idx
                      ? "bg-[#0A2240] text-white border-[#0A2240] shadow-md"
                      : "bg-white/30 text-slate-900 border-white/40 hover:bg-white/50"
                  }`}
                >
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${activePhase === idx ? "bg-white/20 text-[#C5A86B]" : "bg-[#0A2240]/10 text-[#0A2240]"}`}>
                    STAGE-{pestDirectives[idx].phase}
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider">{item.title.split(" ")[0]} Check...</span>
                </button>
              ))}
            </div>
          </div>

          {/* Large Interactive Display Terminal Panel */}
          <div className="lg:col-span-8 bg-white/50 border border-white/70 rounded-3xl p-8 md:p-10 text-left shadow-2xl relative min-h-[300px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-6 font-mono text-7xl font-black text-[#0A2240]/5 select-none">
              STAGE_{pestDirectives[activePhase].phase}
            </div>

            <div className="space-y-4">
              <div className="text-xs font-mono text-white bg-[#0A2240] px-2.5 py-1 rounded w-fit font-bold shadow-sm">
                Active Process // {pestDirectives[activePhase].phase}
              </div>
              <h3 className="text-2xl font-black text-[#0A2240] uppercase tracking-tight">{pestDirectives[activePhase].title}</h3>
              <p className="text-[#0A2240] font-mono text-xs font-bold tracking-wide italic">{pestDirectives[activePhase].tagline}</p>
              <div className="w-full h-[1px] bg-white/60 my-2" />
              <p className="text-slate-950 text-sm sm:text-base leading-relaxed font-medium">
                {pestDirectives[activePhase].desc}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-800 uppercase">
              <Terminal className="w-3.5 h-3.5 text-[#0A2240]" /> On-site Treatment Protocol Verified.
            </div>
          </div>

        </div>
      </section>


      {/* ─── NEW STREAMLINED CTA DISPATCH INTEGRATION ─── */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="bg-white/40 border border-white/60 rounded-3xl p-8 md:p-12 text-left shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          
          <div className="lg:col-span-8 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-white/60 border border-white/80 flex items-center justify-center text-[#0A2240] shadow-sm">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h3 className="text-2xl font-black text-[#0A2240] uppercase tracking-tight">Emergency Pest Outbreak Response</h3>
            <p className="text-slate-900 text-xs sm:text-sm leading-relaxed max-w-2xl font-medium">
              Dealing with an urgent bed bug issue or sudden rodent problem? Call or book our rapid-response emergency dispatch team to completely clear and seal your premises instantly.
            </p>
            <div className="text-[10px] font-mono text-white flex items-center gap-1.5 pt-2 font-bold drop-shadow-sm">
              <Shield className="w-3.5 h-3.5 text-[#0A2240]" /> Fully compliant with local environmental health guidelines.
            </div>
          </div>

          <div className="lg:col-span-4 w-full">
            <div className="bg-[#0A2240] text-white border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-xl group hover:bg-[#0A2240]/95 transition-all duration-300 cursor-pointer">
              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-[#C5A86B] flex items-center justify-center shadow-md mb-2">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-base font-black uppercase tracking-tight">Instant Dispatch</h4>
                <p className="text-slate-300 text-[11px] font-normal leading-normal">
                  Book your priority structural pest inspection right now.
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between w-full font-mono text-xs text-[#C5A86B] group-hover:text-white transition-colors duration-200">
                <span className="flex items-center gap-1.5 uppercase tracking-widest font-black">
                  <PhoneCall className="w-3.5 h-3.5" />
                  Call Inspector
                </span>
                <span className="text-white group-hover:translate-x-1 transition-transform duration-200">
                  ➔
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}