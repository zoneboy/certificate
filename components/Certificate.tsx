import React from 'react';
import { CertificateData } from '../types';
import { SignatureHarold, SignatureCajetan, GoldSeal } from '../assets/graphics'; // Removed RanLogo as it's now embedded

interface CertificateProps {
  data: CertificateData;
}

const Certificate: React.FC<CertificateProps> = ({ data }) => {
  return (
    <div 
      className="relative bg-white shadow-2xl overflow-hidden text-[#333]"
      style={{
        width: '1123px', // A4 landscape width in pixels (approx)
        height: '794px', // A4 landscape height
        fontFamily: 'Roboto, sans-serif',
        boxSizing: 'border-box',
        padding: '40px' // White border area
      }}
    >
      {/* Top Right Green Corner Decoration (Outside inner grey area) */}
      <div 
          className="absolute top-0 right-0 w-[250px] h-[250px]"
          style={{
              background: '#417505',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 80% 100%, 80% 20%, 0 20%)'
          }}
      />

      {/* Bottom Left Green Corner Decoration (Outside inner grey area) */}
      <div 
          className="absolute bottom-0 left-0 w-[250px] h-[250px]"
          style={{
              background: '#417505',
              clipPath: 'polygon(0 0, 20% 0, 20% 80%, 100% 80%, 100% 100%, 0 100%)' 
          }}
      />

      {/* Inner Grey Background Area */}
      <div 
        className="relative w-full h-full bg-[#eef0f4] flex flex-col items-center"
        style={{
            border: '0px solid white' 
        }}
      >
        {/* --- CONTENT --- */}
        <div className="z-10 w-full h-full flex flex-col px-16 pt-12 pb-8 relative">
          
          {/* Logo Section - NEW embedded SVG logo */}
          <div className="w-full flex justify-center mb-8 h-20">
             {/* Embedded SVG logo from image */}
             <svg viewBox="0 0 650 120" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
                {/* Left side circular graphic */}
                <g id="RanLogoGraphic">
                    {/* Green semicircle path flow with arrowhead */}
                    <path d="M 145 60 A 35 35 0 0 0 75 60 l-10 -10 l10 -5 Z" fill="#417505" />
                    {/* Grey semicircle path flow with arrowhead */}
                    <path d="M 75 60 A 35 35 0 0 0 145 60 l10 10 l-10 5 Z" fill="#333" />
                    
                    {/* 'RAN' stylized text inside */}
                    <text x="110" y="68" font-family="Roboto, sans-serif" font-weight="900" font-size="28" text-anchor="middle">
                        <tspan fill="#333">R</tspan>
                        <tspan fill="#417505">AN</tspan>
                    </text>
                </g>
                
                {/* Right side full name text */}
                <g transform="translate(190,0)" id="RanLogoText">
                    <text x="0" y="50" font-family="Roboto, sans-serif" font-weight="700" font-size="36" fill="#333" text-anchor="start">RECYCLERS</text>
                    <text x="0" y="85" font-family="Roboto, sans-serif" font-weight="400" font-size="22" fill="#417505" text-anchor="start">ASSOCIATION OF NIGERIA</text>
                </g>
             </svg>
          </div>

          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black uppercase tracking-wide mb-2 text-black">
              Certificate <span className="mx-2">of</span> Membership
            </h1>
            <p className="text-xl font-bold text-gray-700 mt-4">This is to certify that</p>
          </div>

          {/* Member Name */}
          <div className="w-full flex justify-center mb-4">
             <div className="w-4/5 border-b-4 border-black text-center pb-2">
                <h2 className="text-5xl font-bold uppercase text-black">
                   {data.memberName || "NULL"}
                </h2>
             </div>
          </div>

          {/* Verification Text */}
          <div className="text-center mb-16">
            <p className="text-2xl font-bold text-gray-800">
              is a Registered Member of the Recyclers Association of Nigeria
            </p>
          </div>

          {/* Details Grid */}
          <div className="w-full flex justify-between px-10 mb-16">
            {/* Left Column */}
            <div className="space-y-6">
                <div className="text-2xl">
                    <span className="font-bold text-black">Membership Number: </span>
                    <span className="font-semibold">{data.membershipNumber || "NULL"}</span>
                </div>
                <div className="text-2xl">
                    <span className="font-bold text-black">Membership Category: </span>
                    <span className="font-semibold">{data.membershipCategory || "NULL"}</span>
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 text-right">
                <div className="text-2xl">
                    <span className="font-bold text-black">Issue Date: </span>
                    <span className="font-semibold">{data.issueDate || "NULL"}</span>
                </div>
                <div className="text-2xl">
                    <span className="font-bold text-black">Valid Until: </span>
                    <span className="font-semibold">{data.validUntil || "NULL"}</span>
                </div>
            </div>
          </div>

          {/* Signatures Footer */}
          <div className="w-full flex justify-between items-end mt-auto px-8 relative">
            
            {/* President Signature */}
            <div className="flex flex-col items-center w-64">
              {/* Using translate-y-6 to push it down over the line */}
              <div className="h-16 w-48 flex items-end justify-center z-10 translate-y-60">
                 <SignatureHarold className="w-full h-full text-black" />
              </div>
              <div className="w-full h-0.5 bg-black mb-2 relative z-0"></div>
              <p className="font-bold text-lg text-black">Harold Okonoboh</p>
              <p className="text-sm font-bold text-gray-600 tracking-wider">PRESIDENT</p>
            </div>

            {/* Gold Seal (Center) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
               <GoldSeal className="w-32 h-32" />
            </div>

            {/* Secretary Signature */}
            <div className="flex flex-col items-center w-64">
              {/* Using translate-y-4 to nudge it down slightly */}
              <div className="h-16 w-48 flex items-end justify-center z-10 translate-y-12">
                 <SignatureCajetan className="w-full h-full text-black" />
              </div>
              <div className="w-full h-0.5 bg-black mb-2 relative z-0"></div>
              <p className="font-bold text-lg text-black">Cajetan Okeke</p>
              <p className="text-sm font-bold text-gray-600 tracking-wider">GENERAL SECRETARY</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Certificate;