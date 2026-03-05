import React from 'react';

// Approximated RAN Logo based on the image provided
export const RanLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-16 h-16 flex-shrink-0">
      {/* Green Arrows Circle */}
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#417505]">
        <path d="M 50 10 A 40 40 0 1 1 10 50" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M 50 10 L 40 5 L 45 15 Z" fill="currentColor" />
        <path d="M 10 50 L 5 60 L 15 55 Z" fill="currentColor" />
        {/* Bottom arrow part (dark grey) */}
        <path d="M 10 50 A 40 40 0 0 0 50 90" fill="none" stroke="#333" strokeWidth="6" strokeLinecap="round" />
         <path d="M 50 90 L 60 95 L 50 80 Z" fill="#333" />
      </svg>
      {/* RAN Text inside */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-[#333] tracking-tighter" style={{ fontFamily: 'Roboto' }}>RAN</span>
      </div>
    </div>
    <div className="flex flex-col justify-center leading-none">
      <span className="text-4xl font-bold text-[#333] tracking-wide" style={{ fontFamily: 'Roboto' }}>RECYCLERS</span>
      <span className="text-lg font-bold text-[#417505] tracking-widest" style={{ fontFamily: 'Roboto' }}>ASSOCIATION OF NIGERIA</span>
    </div>
  </div>
);

// Signature 1: Harold
export const SignatureHarold: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 60" className={className} style={{ overflow: 'visible' }}>
    <path
      d="M10,40 C30,10 50,50 70,20 C80,10 90,40 110,30 C130,20 150,50 170,30"
      fill="none"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinecap="round"
    />
     <path
      d="M20,30 L160,30"
      fill="none"
      stroke="#1a1a1a"
      strokeWidth="1"
      opacity="0.5"
    />
  </svg>
);

// Signature 2: Cajetan
export const SignatureCajetan: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 60" className={className} style={{ overflow: 'visible' }}>
    <path
      d="M10,30 C40,50 50,10 80,30 C90,40 110,10 130,30 C150,50 170,20 190,40"
      fill="none"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Gold Seal Badge
export const GoldSeal: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
      {/* Ribbons */}
      <path d="M 30 70 L 20 110 L 40 100 L 30 70 Z" fill="#FACC15" />
      <path d="M 70 70 L 80 110 L 60 100 L 70 70 Z" fill="#FACC15" />
      
      {/* Outer burst */}
      <circle cx="50" cy="50" r="35" fill="#FACC15" stroke="#EAB308" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="50" cy="50" r="30" fill="#FEF08A" />
      <circle cx="50" cy="50" r="25" fill="#FACC15" />
      {/* Shine */}
      <circle cx="40" cy="40" r="8" fill="white" opacity="0.3" />
    </svg>
  </div>
);
