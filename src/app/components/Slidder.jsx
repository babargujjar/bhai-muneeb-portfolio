"use client";
import React, { useEffect, useRef } from "react";

const companies = [
  {
    name: "Amazon",
    logo: "/assets/amazon.png",
  },
  {
    name: "Depop",
    logo: "/assets/depop.png",
  },
  {
    name: "ebay",
    logo: "/assets/ebay.png",
  },
  {
    name: "Etsy",
    logo: "/assets/etsy.jpeg",
  },
  {
    name: "OnBuy",
    logo: "/assets/onbuy.png",
  },
  {
    name: "TiktokShop",
    logo: "/assets/tiktokshop.png",
  },
  {
    name: "Vinted",
    logo: "/assets/vinted.png",
  },
];

export default function SmoothCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 0.5;

        // FIX: Reset scroll if end is reached
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  

  // Duplicate items for infinite effect
  const infiniteCompanies = [...companies, ...companies];

  return (
    <div className="max-w-5xl mx-auto py-[180px] px-4">
      <div
        ref={scrollRef}
        className="flex overflow-hidden whitespace-nowrap scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {infiniteCompanies.map((company, i) => (
          <div
            key={i}
            className="flex items-center gap-2 shrink-0 mx-2 border rounded-xl p-4 bg-white"
          >
            <img src={company.logo} alt={company.name} className="h-6" />
            <span className="text-sm font-medium">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
