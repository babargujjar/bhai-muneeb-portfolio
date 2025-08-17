"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatCard = ({ number, text }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseFloat(number.replace(/[^0-9.]/g, ""));
    const suffix = number.match(/[a-zA-Z%]+$/)?.[0] || "";
    const duration = 1500; // 3 seconds
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
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-gray-100 border border-gray-200 p-4 rounded-xl text-center"
    >
      <span className="text-3xl font-extrabold text-[#feb436]">
        {count}
        {typeof number === "string" && number.match(/[a-zA-Z%]+$/)?.[0]}
        <span className="font-bold">+</span>
      </span>
      <span className="text-gray-700 text-sm mt-1">{text}</span>
    </div>
  );
};

export default StatCard;
