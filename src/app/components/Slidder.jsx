"use client";
import React, { useEffect, useRef } from "react";

const companies = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Adobe_Systems_logo_2017.svg",
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
];

export default function SmoothCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 0.5; // speed control here
        // Looping
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
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
