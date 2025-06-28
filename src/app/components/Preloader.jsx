// "use client"
// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import AnimatedCounter from './AnimatedCounter'


// const Preloader = () => {

//     const [number, setNumber] = useState(0)

//     useEffect(() => {
//         setNumber(100)
//         document.body.style.overflow = "hidden";
//         setTimeout(() => {
//             document.body.style.overflow = "auto";
//         }, 6500)
//     }, [])


//     return (
//         <motion.div 
//             initial={{clipPath: "inset(0 0 0 0)"}} 
//             animate={{clipPath: "inset(0 0 100% 0)"}} 
//             transition={{delay:3.9, duration:0.8, ease:"easeInOut"}} 
//             className='fixed overflow-hidden inset-0 bg-[#111111] z-20 h-screen text-white'
//         >
//             <div className="absolute bottom-10 right-10 overflow-hidden">
//                 <motion.div 
//                     initial={{y:"100%"}} 
//                     animate={{y:"0%"}} 
//                     transition={{delay:0.7, duration:0.5, ease:"easeInOut"}} 
//                     className=''
//                 >
//                     Loading <AnimatedCounter number={number} />%
//                 </motion.div>
//             </div>

//             <div className="absolute bottom-10 left-14 overflow-hidden">
//                 <motion.div 
//                     initial={{y:"100%"}} 
//                     animate={{y:"0%"}} 
//                     transition={{duration:0.5, ease:"easeOut"}}
//                     className=''
//                 >
//                     <img src="/assets/logo.png" alt="logo" className='w-96 auto' />
//                 </motion.div>
//             </div>
//         </motion.div>
//     )
// }

// export default Preloader
"use client";
import React, { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [hidePreloader, setHidePreloader] = useState(false);

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const timer = setTimeout(() => {
      setHidePreloader(true);
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (hidePreloader) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111111]/80 backdrop-blur-md"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="mb-6"
      >
        <LoaderCircle className="text-white w-20 h-20" />
      </motion.div>

      <img src="/assets/logo.png" alt="logo" className="w-44" />
    </motion.div>
  );
};

export default Preloader;
