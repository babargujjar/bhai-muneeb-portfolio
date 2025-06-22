"use client";
import React from "react";

export default function Heading({ title, highlight, className = "" }) {
  return (
    <h2
      className={` leading-10 sm:leading-14 font-bold text-black mx-auto ${className}`}
    >
      {title} <span className="text-[#302CFF]">{highlight}</span>
    </h2>
  );
}
