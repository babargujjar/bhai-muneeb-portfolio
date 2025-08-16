"use client";
import React from "react";

const companies = [
  { name: "Amazon", logo: "/assets/amazon.png" },
  { name: "Depop", logo: "/assets/depop.png" },
  { name: "ebay", logo: "/assets/ebay.png" },
  { name: "Etsy", logo: "/assets/etsy.png" },
  { name: "OnBuy", logo: "/assets/onbuy.png" },
  { name: "TiktokShop", logo: "/assets/tiktokshop.png" },
  { name: "Vinted", logo: "/assets/vinted.png" },
];

export default function SmoothCarousel() {
  const infiniteCompanies = [
    ...companies,
    ...companies,
    ...companies,
    ...companies,
  ]; // DO NOT overduplicate

  return (
    <div className="overflow-hidden w-full py-20 bg-white">
      <div className="w-max animate-marquee flex gap-6">
        {infiniteCompanies.map((company, i) => (
          <div
            key={i}
            className="flex items-center gap-2 border rounded-xl p-4 bg-white min-w-max shrink-0"
          >
            <img src={company.logo} alt={company.name} className="h-6" />
            <span className="text-sm font-medium">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
