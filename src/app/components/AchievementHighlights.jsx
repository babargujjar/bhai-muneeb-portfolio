"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AchievementHighlights = ({ number, desc }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseFloat(number.replace(/[^0-9.]/g, ""));
    const suffix = number.match(/[a-zA-Z%]+$/)?.[0] || "";
    const duration = 2000; // 3 seconds
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = end / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [inView]);

  return (
    <div ref={ref} className="p-4">
      <p className="text-[48px] font-semibold">
        {count}
        {typeof number === "string" && number.match(/[a-zA-Z%]+$/)?.[0]}
        <span className="text-[#feb436] font-bold">+</span>
      </p>
      <p className="text-[#71717A] text-[18px]">{desc}</p>
    </div>
  );
};

export default AchievementHighlights;
