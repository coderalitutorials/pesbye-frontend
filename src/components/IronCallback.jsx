import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "phone") setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is required");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post("https://pesbye-backend.vercel.app/api/callback", formData),
      {
        loading: "Securing callback line...",
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Callback request logged. A specialist will call you discreetly. 📞";
        },
        error: (error) => {
          setLoading(false);
          return error.response?.data?.message || "Connection failed. Please try again.";
        },
      },
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: "13px",
          borderRadius: "16px",
          padding: "14px 24px",
          background: "#0A2240",
          color: "#FFFFFF",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      }
    );
  };

  return (
    // backface-hidden aur isolate layers applied to block paint overheads
    <section className="bg-[#C5A86B] text-[#0A2240] py-24 md:py-32 relative overflow-hidden z-30 border-t border-[#0A2240]/10 isolate backface-hidden">
      
      {/* Luxury Geometric Elements - Render tree safe */}
      <div className="absolute inset-0 opacity-10 pointer-events-none transform-gpu">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(#0A2240_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ top: "110px", zIndex: 999999 }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Rewritten Content Header */}
        <div className="max-w-4xl text-left mb-16 space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0A2240] bg-white/40 px-3 py-1 rounded">
              Elite Pest Management
            </span>
            <div className="h-[1px] flex-1 bg-[#0A2240]/20" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[1.05]">
            Premium Pest Eradication & <br />
            <span className="text-white drop-shadow-sm">Discreet Asset Proofing</span>
          </h2>

          <p className="text-[#0A2240]/90 font-medium text-base md:text-lg max-w-3xl leading-relaxed">
            Pesbye Services delivers premium, fast, and permanent pest control solutions tailored for luxury residential estates, private residences, and commercial sectors across Mayfair. From immediate rodent eradication to complete insect management, we ensure your property remains immaculate.
          </p>
        </div>

        {/* !!! FIX: backdrop-blur-xl replaced with highly optimized flat tint to ensure layout fluidity */}
        <div className="w-full bg-white/40 border border-white/70 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transform-gpu">
          
          {/* Dashboard Meta Left Block */}
          <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-[#0A2240]/10 lg:pr-8 text-left">
            <div>
              <h3 className="text-xs font-black tracking-widest uppercase text-[#0A2240]/60 mb-1">
                Deployment Protocol
              </h3>
              <p className="text-lg font-extrabold uppercase tracking-tight">
                24/7 Rapid Response
              </p>
            </div>
            
            <div className="space-y-3">
              {/* Added transform-gpu to fast track render pipelines */}
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2240]/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240] animate-pulse transform-gpu" />
                Unmarked Luxury Vehicles
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2240]/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240]" />
                Advanced Rodent & Insect Proofing
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0A2240]/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A2240]" />
                Safe, Child & Pet Friendly Protocols
              </div>
            </div>

            <div className="bg-[#0A2240] text-white p-3.5 rounded-xl">
              <p className="text-[11px] font-mono tracking-wider opacity-80 uppercase leading-tight">
                Emergency Line Status: Active // Specialized Mayfair Technicians On Standby
              </p>
            </div>
          </div>

          {/* Form Processing Block Right */}
          <div className="lg:col-span-8 w-full">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2240]">
                  Your Name / Property Entity
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe / Management Office"
                  required
                  className="w-full bg-white/50 border border-[#0A2240]/10 rounded-xl px-4 py-3.5 text-sm text-[#0A2240] placeholder-[#0A2240]/40 font-bold outline-none focus:border-[#0A2240] focus:bg-white/80 transition-all duration-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2240]">
                  Mayfair Postcode
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="e.g. W1K, W1J"
                  required
                  className="w-full bg-white/50 border border-[#0A2240]/10 rounded-xl px-4 py-3.5 text-sm text-[#0A2240] placeholder-[#0A2240]/40 font-bold outline-none focus:border-[#0A2240] focus:bg-white/80 transition-all duration-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2240]">
                  Direct Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Best number to call back"
                  required
                  className={`w-full bg-white/50 border rounded-xl px-4 py-3.5 text-sm text-[#0A2240] placeholder-[#0A2240]/40 font-bold outline-none focus:bg-white/80 transition-all duration-200 ${
                    phoneError ? "border-red-600" : "border-[#0A2240]/10 focus:border-[#0A2240]"
                  }`}
                />
              </div>

              {phoneError && (
                <p className="sm:col-span-2 text-red-700 text-xs font-bold mt-1 flex items-center gap-1">
                  <span>⚠️</span> {phoneError}
                </p>
              )}

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0A2240] text-white py-4 text-xs font-black uppercase tracking-[0.25em] rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-60 shadow-lg active:scale-[0.99] hover:bg-[#0A2240]/90"
                >
                  {loading ? "PROCESSING REQUEST..." : "REQUEST AN IMMEDIATE CALLBACK"}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}