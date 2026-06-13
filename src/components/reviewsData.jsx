import React from "react";
import { Star, ShieldCheck, Quote, MessageSquare } from "lucide-react";

const authenticReviews = [
  {
    id: 1,
    name: "Sir Alistair Vance",
    role: "Mayfair Property Resident",
    image: "/images/reviews/user1.webp",
    text: "Absolutely fantastic response from PrimeShield. Had a severe mouse infestation in our structural loft space. The team arrived promptly, tracked down entry pathways, and locked the area down permanently. Very clean work.",
    rating: "5.0 Verified",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Director, Thorne Hospitality",
    image: "/images/reviews/user2.webp",
    text: "Very straightforward premium pricing structure. No hidden inspection parameters or useless traps. They cleared our active commercial kitchen area with total biological safety and full transparency.",
    rating: "5.0 Verified",
  },
  {
    id: 3,
    name: "Lord Dominic West",
    role: "Belgravia Estate Landlord",
    image: "/images/reviews/user6.webp",
    text: "Had a highly persistent bed bug outbreak across two flat layouts. PrimeShield resolved it completely using specialized deep thermal heat treatments. Unmatched reliability and execution.",
    rating: "5.0 Verified",
  },
  {
    id: 4,
    name: "Lady Eleanor Sterling",
    role: "Head of Operations, Sterling Logistics",
    image: "/images/reviews/user3.webp",
    text: "Outstanding commercial contract execution. PrimeShield setup non-toxic bio-barriers around our entire logistics warehouse layout. Constant updates, total peace of mind for our management.",
    rating: "5.0 Verified",
  },
];

export default function PesSaveTestimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-[#C5A86B] overflow-hidden z-20 border-b border-[#0A2240]/10 isolate">
      
      {/* Lightweight performance-friendly background layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A2240_1px,transparent_1px)] [background-size:3rem_3rem] pointer-events-none opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 bg-[#0A2240] px-4 py-1.5 rounded-md shadow-md">
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A86B]" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C5A86B] uppercase font-black">
                Client Testimonials
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A2240] uppercase leading-none">
              RELIABILITY <br />
              <span className="text-white bg-[#0A2240] px-3.5 py-1 rounded-xl inline-block mt-2 shadow-lg">
                WITHOUT COMPROMISE
              </span>
            </h2>
          </div>

          <div className="max-w-sm text-left md:text-right">
            <p className="text-[#0A2240]/90 text-sm leading-relaxed font-bold">
              Read verified client reports from premium residential quarters and commercial hubs across London.
            </p>
          </div>
        </div>

        {/* Stable Masonry Grid - Transforms removed to stop layout shaking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Column 1 */}
          <div className="grid grid-cols-1 gap-6 w-full">
            {authenticReviews.filter((_, i) => i % 2 === 0).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Column 2 - translate-y hata kar clean padding lga di hai taake height rigid rahe */}
          <div className="grid grid-cols-1 gap-6 w-full md:pt-12">
            {authenticReviews.filter((_, i) => i % 2 !== 0).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    // will-change-transform hata diya hai aur shadows ko light weight rakha hai
    <div className="w-full bg-[#0A2240] border border-white/5 p-8 rounded-[32px] flex flex-col justify-between shadow-lg relative overflow-hidden group transition-transform duration-300 ease-out hover:-translate-y-1 backface-hidden">
      
      <Quote className="absolute right-6 top-6 w-24 h-24 text-white/[0.015] pointer-events-none select-none" strokeWidth={1} />

      <div>
        {/* Card Header: Stars Line */}
        <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#C5A86B] text-[#C5A86B]"
                strokeWidth={0}
              />
            ))}
          </div>

          <span className="text-[10px] font-mono font-black tracking-wider text-[#C5A86B] bg-white/5 border border-white/10 px-3 py-0.5 rounded-md">
            {review.rating}
          </span>
        </div>

        {/* Real Text Review Block */}
        <div className="relative text-left mb-8 z-10">
          <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium">
            "{review.text}"
          </p>
        </div>
      </div>

      {/* Profile Signature Line */}
      <div className="flex items-center gap-4 pt-5 border-t border-white/5 relative z-10">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-0.5 shrink-0">
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-cover rounded-lg grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        </div>

        <div className="text-left min-w-0 flex-grow">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-black text-white uppercase tracking-wider truncate">
              {review.name}
            </h4>
            <ShieldCheck className="w-4 h-4 text-[#C5A86B] shrink-0" />
          </div>

          <span className="text-[11px] font-semibold text-slate-400 block mt-0.5 truncate">
            {review.role}
          </span>
        </div>
      </div>

    </div>
  );
}