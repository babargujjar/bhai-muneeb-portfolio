// import { Send } from 'lucide-react';
// import Link from 'next/link';
// import React from 'react'
// import IconButton from './IconButton';

// const Navbar = () => {
//   return (
//     <div className="font-[var(--font-outfit)] shadow-md mb-5 shadow-gray-100 w-full max-w-[85%] mx-auto rounded-lg bg-white mt-8 border-[#CDCDCD] border">
//       <div className="flex justify-between items-center p-3 ">
//         <div>logo</div>
//         <div className="flex gap-8 text-[18px] font-normal">
//           <Link href="/">
//             <h2>Home</h2>
//           </Link>
//           <Link href="/">
//             <h2>About</h2>
//           </Link>
//           <Link href="/">
//             <h2>Services</h2>
//           </Link>
//           <Link href="/">
//             <h2>Case Studies</h2>
//           </Link>
//           <Link href="/">
//             <h2>Blog</h2>
//           </Link>
//         </div>
//         <div>
//           <IconButton text="Contact" Icon={Send} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar



"use client";

import { Send, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import IconButton from "./IconButton";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/" },
    { label: "Services", href: "/" },
    { label: "Case Studies", href: "/" },
    { label: "Blog", href: "/" },
  ];

  return (
    <div className="relative max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto">
      <div className="font-[var(--font-outfit)] shadow-md mb-5 shadow-gray-100 rounded-lg bg-white mt-3 md:mt-8 border-[#CDCDCD] border">
        <div className="flex justify-between items-center p-3">
          <div>logo</div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-5 lg:gap-8 text-[16px] lg:text-[18px] font-normal">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <h2>{link.label}</h2>
              </Link>
            ))}
          </div>

          {/* Contact Button (always visible) */}
          <div className="hidden md:block">
            <IconButton text="Contact" Icon={Send} />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md cursor-pointer focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border border-[#CDCDCD] top-20 absolute w-full rounded-lg bg-white px-3 py-4 shadow-md font-[var(--font-outfit)] text-[18px] space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <div className=" pb-2">{link.label}</div>
              </Link>
            ))}
            <div className="pt-2">
              <IconButton text="Contact" Icon={Send} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
