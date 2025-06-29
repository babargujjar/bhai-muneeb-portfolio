// 'use client'
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// const Services = ({ service }) => {
//   return (
//     <motion.div
//       className=" flex flex-col justify-between w-full h-full relative group bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white border border-[#1E293B] rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(14,20,33,0.6)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.3)] transition-all duration-500 hover:-translate-y-1.5"
//       whileHover={{ scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 400, damping: 15 }}
//     >
//       {/* Terminal-style top bar with animated dots */}
//       <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#1E293B] to-[#334155] border-b border-[#334155]/50">
//         <span className="text-xs font-mono text-[#94A3B8] tracking-tight flex items-center gap-1.5">
//           <span className="w-1.5 h-1.5 bg-[#6366F1] rounded-full animate-pulse" />
//           ~/services/{service.slug}
//         </span>
//         <div className="flex gap-1.5">
//           <motion.span
//             className="w-2.5 h-2.5 bg-red-500 rounded-full"
//             animate={{ opacity: [0.8, 1, 0.8] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//           <motion.span
//             className="w-2.5 h-2.5 bg-yellow-400 rounded-full"
//             animate={{ opacity: [0.6, 1, 0.6] }}
//             transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
//           />
//           <motion.span
//             className="w-2.5 h-2.5 bg-green-500 rounded-full"
//             animate={{ opacity: [0.7, 1, 0.7] }}
//             transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
//           />
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="p-6 space-y-6 flex-grow flex flex-col justify-between">
//         {/* Animated icon with gradient background */}
//         <motion.div
//           className="w-16 h-16 bg-gradient-to-br from-[#feb436] to-[#f3b03d] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]"
//           whileHover={{
//             rotate: [0, 5, -5, 0],
//             transition: { duration: 0.6 },
//           }}
//         >
//           <Image
//             src={service.image}
//             width={32}
//             height={32}
//             alt={service.title}
//             className="transition-transform duration-500 group-hover:scale-110"
//           />
//         </motion.div>

//         {/* Title with underline animation */}
//         <div className="relative">
//           <h3 className="text-xl font-bold tracking-tight text-[#E2E8F0] group-hover:text-white transition-colors duration-300 inline-block">
//             {service.title}
//           </h3>
//           <motion.div
//             className="absolute bottom-0 left-0 h-0.5 bg-[#6366F1]"
//             initial={{ width: 0 }}
//             whileHover={{ width: "100%" }}
//             transition={{ duration: 0.4 }}
//           />
//         </div>

//         {/* Description with animated background on hover */}
//         <motion.p
//           className="text-sm text-[#CBD5E1] font-mono leading-relaxed p-3 rounded-lg bg-[#1E293B]/50 backdrop-blur-sm border border-[#334155]/30 group-hover:border-[#6366F1]/30 transition-all duration-300"
//           whileHover={{
//             backgroundColor: "rgba(30, 41, 59, 0.7)",
//             scale: 1.02,
//           }}
//         >
//           {service.desc}
//         </motion.p>

//         {/* Tech stack chips (optional) */}
//         <div className="flex flex-wrap gap-2">
//           {service.tech?.map((tech, index) => (
//             <motion.span
//               key={index}
//               className="text-xs px-2.5 py-1 bg-[#1E293B] rounded-full border border-[#334155] text-[#94A3B8]"
//               whileHover={{
//                 backgroundColor: "#6366F1",
//                 color: "white",
//                 scale: 1.1,
//               }}
//               transition={{ duration: 0.2 }}
//             >
//               {tech}
//             </motion.span>
//           ))}
//         </div>
//       </div>

//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBvcGFjaXR5PSIwLjEiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIgZmlsbD0id2hpdGUiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIwIiB5PSIwIiBmaWxsPSJ3aGl0ZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
//       </div>

//       {/* Glowing border effect */}
//       <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
//         <motion.div
//           className="absolute inset-0 rounded-2xl border-2 border-transparent"
//           animate={{
//             boxShadow: [
//               "0 0 0 0 rgba(99, 102, 241, 0)",
//               "0 0 0 4px rgba(99, 102, 241, 0.3)",
//             ],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default Services;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Services = ({ service }) => {
  return (
    <motion.div
      className="flex flex-col justify-between w-full h-full relative group bg-gradient-to-br from-[#3b2f1e] to-[#4b3a23] text-white border border-[#4b3a23] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Top bar with animated dots */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#4b3a23] to-[#5c452a] border-b border-[#5c452a]/50">
        <span className="text-xs font-mono text-[#d1b899] tracking-tight flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#feb436] rounded-full animate-pulse" />
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
        {/* Icon */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-[#feb436] to-[#f3b03d] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(254,180,54,0.3)]"
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

        {/* Title */}
        <div className="relative">
          <h3 className="text-xl font-bold tracking-tight text-[#fef9f3] group-hover:text-white transition-colors duration-300 inline-block">
            {service.title}
          </h3>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-[#feb436]"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Description */}
        <motion.p
          className="text-sm text-[#e6cfa8] font-mono leading-relaxed p-3 rounded-lg bg-[#4b3a23]/50 backdrop-blur-sm border border-[#5c452a]/30 group-hover:border-[#feb436]/30 transition-all duration-300"
          whileHover={{
            backgroundColor: "rgba(75, 58, 35, 0.7)",
            scale: 1.02,
          }}
        >
          {service.desc}
        </motion.p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2">
          {service.tech?.map((tech, index) => (
            <motion.span
              key={index}
              className="text-xs px-2.5 py-1 bg-[#4b3a23] rounded-full border border-[#5c452a] text-[#d6b78f]"
              whileHover={{
                backgroundColor: "#feb436",
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

      {/* Pattern background */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBvcGFjaXR5PSIwLjEiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIgZmlsbD0id2hpdGUiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHg9IjIwIiB5PSIwIiBmaWxsPSJ3aGl0ZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Glowing border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(254, 180, 54, 0)",
              "0 0 0 4px rgba(254, 180, 54, 0.3)",
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
