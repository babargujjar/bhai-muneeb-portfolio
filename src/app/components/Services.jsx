// import Image from "next/image";
// import React from "react";

// const Services = ({service}) => {
//   return (
//     <div className="border-[#CDCDCD] bg-[length:100%_200%] bg-[linear-gradient(to_bottom,#D8E6FF,#ffffff)] bg-[position:top] hover:bg-[position:bottom] transition-[background-position] duration-500 flex items-center justify-between rounded-3xl p-18 mx-auto border max-w-6xl">
//       <div className=" p-[1px] rounded-3xl bg-gradient-to-b from-white to-[#302CFF]">
//         <div className="p-5 rounded-3xl bg-white">
//           <Image src={service.image} width={90} height={90} alt="" />
//         </div>
//       </div>
//       <h2 className="font-semibold text-[24px]">{service.title}</h2>
//       <p className="text-[18px] max-w-[40%] text-[#71717A]">
//         {service.desc}
//       </p>
//     </div>
//   );
// };

// export default Services;

// import Image from "next/image";
// import React from "react";

// const Services = ({ service }) => {
//   return (
//     <div className="group relative overflow-hidden rounded-3xl border border-[#CDCDCD] bg-gradient-to-b from-[#D8E6FF] to-white p-8 transition duration-500 hover:shadow-2xl hover:scale-[1.02] max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
//       {/* Gradient Border Effect */}
//       <div className="p-[2px] bg-gradient-to-br from-[#302CFF] to-[#D8E6FF] rounded-3xl">
//         <div className="bg-white p-4 rounded-3xl">
//           <Image
//             src={service.image}
//             width={80}
//             height={80}
//             alt={service.title}
//             className="transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
//           />
//         </div>
//       </div>

//       {/* Text Content */}
//       <div className="flex-1">
//         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 transition duration-300 group-hover:text-[#302CFF]">
//           {service.title}
//         </h2>
//         <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
//           {service.desc}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Services;


// import Image from "next/image";
// import React from "react";

// const Services = ({ service }) => {
//   return (
//     <div className="relative group bg-[#0F172A] text-white border border-[#1E293B] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
//       {/* Top bar like a terminal */}
//       <div className="flex items-center justify-between px-4 py-2 bg-[#1E293B]">
//         <span className="text-xs font-mono text-[#94A3B8]">
//           ~/services/{service.slug}
//         </span>
//         <div className="flex gap-1">
//           <div className="w-2 h-2 bg-red-500 rounded-full" />
//           <div className="w-2 h-2 bg-yellow-500 rounded-full" />
//           <div className="w-2 h-2 bg-green-500 rounded-full" />
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="p-6 space-y-4">
//         {/* Icon */}
//         <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#9333EA] rounded-xl flex items-center justify-center">
//           <Image
//             src={service.image}
//             width={28}
//             height={28}
//             alt={service.title}
//             className="group-hover:scale-110 transition-transform duration-300"
//           />
//         </div>

//         {/* Title */}
//         <h3 className="text-xl font-bold tracking-wide text-[#E2E8F0]">
//           {service.title}
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-[#CBD5E1] font-mono leading-relaxed">
//           {service.desc}
//         </p>
//       </div>

//       {/* Glowing border on hover */}
//       <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-[#6366F1] transition duration-300 pointer-events-none" />
//     </div>
//   );
// };

// export default Services;

// import Image from "next/image";
// import React from "react";

// const Services = ({ service }) => {
//   return (
//     <div className="relative group bg-[#0F172A] text-white border border-[#1E293B] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(14,20,33,0.5)] hover:shadow-[0_6px_32px_rgba(99,102,241,0.2)] transition-all duration-300 hover:scale-[1.025]">
//       {/* Top bar like terminal */}
//       <div className="flex items-center justify-between px-4 py-2 bg-[#1E293B] border-b border-[#334155]">
//         <span className="text-xs font-mono text-[#94A3B8] tracking-tight">
//           ~/services/{service.slug}
//         </span>
//         <div className="flex gap-1">
//           <span className="w-2 h-2 bg-red-500 rounded-full" />
//           <span className="w-2 h-2 bg-yellow-400 rounded-full" />
//           <span className="w-2 h-2 bg-green-500 rounded-full" />
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="p-6 space-y-5">
//         {/* Icon with soft glow */}
//         <div className="w-14 h-14 bg-gradient-to-br from-[#1E40AF] to-[#6D28D9] rounded-xl flex items-center justify-center shadow-inner shadow-[#1E3A8A]/40 group-hover:shadow-[#6366F1]/50 transition-shadow duration-300">
//           <Image
//             src={service.image}
//             width={28}
//             height={28}
//             alt={service.title}
//             className="group-hover:scale-110 transition-transform duration-300"
//           />
//         </div>

//         {/* Title */}
//         <h3 className="text-[1.25rem] font-semibold tracking-wide text-[#E2E8F0] group-hover:text-white transition-colors duration-300">
//           {service.title}
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-[#CBD5E1] font-mono leading-relaxed group-hover:text-slate-300 transition duration-300">
//           {service.desc}
//         </p>
//       </div>

//       {/* Glowing border hover */}
//       <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-[#6366F1]/40 transition duration-500 pointer-events-none" />
//     </div>
//   );
// };

// export default Services;




// "use client";
// import Image from "next/image";
// import React, { useRef } from "react";

// const Services = ({ service }) => {
//   const cardRef = useRef(null);

//   const handleMouseMove = (e) => {
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     card.style.setProperty("--x", `${x}px`);
//     card.style.setProperty("--y", `${y}px`);
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       className="group relative bg-[#0F172A] text-white border border-[#1E293B] rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] p-6"
//       style={{
//         background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(99,102,241,0.15), transparent 40%)`,
//         transition: "background 0.2s ease",
//       }}
//     >
//       {/* Terminal-style header */}
//       <div className="flex items-center justify-between px-3 py-1 bg-[#1E293B] rounded-md mb-4 border border-[#334155]">
//         <span className="text-xs font-mono text-[#94A3B8]">
//           ~/services/{service.slug}
//         </span>
//         <div className="flex gap-1">
//           <div className="w-2 h-2 bg-red-500 rounded-full" />
//           <div className="w-2 h-2 bg-yellow-400 rounded-full" />
//           <div className="w-2 h-2 bg-green-500 rounded-full" />
//         </div>
//       </div>

//       {/* Icon */}
//       <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
//         <Image
//           src={service.image}
//           width={28}
//           height={28}
//           alt={service.title}
//           className="transition-transform duration-300 group-hover:scale-110"
//         />
//       </div>

//       {/* Title */}
//       <h3 className="text-xl font-semibold text-[#E2E8F0] mb-2">
//         {service.title}
//       </h3>

//       {/* Description */}
//       <p className="text-sm text-[#CBD5E1] font-mono leading-relaxed">
//         {service.desc}
//       </p>
//     </div>
//   );
// };

// export default Services;

'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Services = ({ service }) => {
  return (
    <motion.div
      className=" flex flex-col justify-between w-full h-full relative group bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white border border-[#1E293B] rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(14,20,33,0.6)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-1.5"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Terminal-style top bar with animated dots */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#1E293B] to-[#334155] border-b border-[#334155]/50">
        <span className="text-xs font-mono text-[#94A3B8] tracking-tight flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-pulse" />
          ~/services/{service.slug}
        </span>
        <div className="flex gap-1.5">
          <motion.span
            className="w-2.5 h-2.5 bg-red-500 rounded-full"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span
            className="w-2.5 h-2.5 bg-yellow-400 rounded-full"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.span
            className="w-2.5 h-2.5 bg-green-500 rounded-full"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="p-6 space-y-6 flex-grow flex flex-col justify-between">
        {/* Animated icon with gradient background */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#6D28D9] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          whileHover={{
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.6 },
          }}
        >
          <Image
            src={service.image}
            width={32}
            height={32}
            alt={service.title}
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>

        {/* Title with underline animation */}
        <div className="relative">
          <h3 className="text-xl font-bold tracking-tight text-[#E2E8F0] group-hover:text-white transition-colors duration-300 inline-block">
            {service.title}
          </h3>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-[#6366F1]"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Description with animated background on hover */}
        <motion.p
          className="text-sm text-[#CBD5E1] font-mono leading-relaxed p-3 rounded-lg bg-[#1E293B]/50 backdrop-blur-sm border border-[#334155]/30 group-hover:border-[#6366F1]/30 transition-all duration-300"
          whileHover={{
            backgroundColor: "rgba(30, 41, 59, 0.7)",
            scale: 1.02,
          }}
        >
          {service.desc}
        </motion.p>

        {/* Tech stack chips (optional) */}
        <div className="flex flex-wrap gap-2">
          {service.tech?.map((tech, index) => (
            <motion.span
              key={index}
              className="text-xs px-2.5 py-1 bg-[#1E293B] rounded-full border border-[#334155] text-[#94A3B8]"
              whileHover={{
                backgroundColor: "#6366F1",
                color: "white",
                scale: 1.1,
              }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBvcGFjaXR5PSIwLjEiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIgZmlsbD0id2hpdGUiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIwIiB5PSIwIiBmaWxsPSJ3aGl0ZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(99, 102, 241, 0)",
              "0 0 0 4px rgba(99, 102, 241, 0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Services;