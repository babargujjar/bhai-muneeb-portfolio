"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'


const Preloader = () => {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        setNumber(100)
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 6500)
    }, [])


    return (
        <motion.div 
            initial={{clipPath: "inset(0 0 0 0)"}} 
            animate={{clipPath: "inset(0 0 100% 0)"}} 
            transition={{delay:4.2, duration:0.8, ease:"easeInOut"}} 
            className='fixed overflow-hidden inset-0 bg-[#111111] z-20 h-screen text-white'
        >
            <div className="absolute bottom-10 right-5 sm:right-10 overflow-hidden">
                <motion.div 
                    initial={{y:"100%"}} 
                    animate={{y:"0%"}} 
                    transition={{delay:0.7, duration:0.5, ease:"easeInOut"}} 
                    className=''
                >
                    Loading.. <AnimatedCounter number={number} />%
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-5 sm:left-9 md:left-14 overflow-hidden">
                <motion.div 
                    initial={{y:"100%"}} 
                    animate={{y:"0%"}} 
                    transition={{duration:0.5, ease:"easeOut"}}
                    className=''
                >
                    <img src="/assets/logo.png" alt="logo" className='w-64 sm:w-80 md:w-96 auto' />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Preloader
