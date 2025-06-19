"use client"
import React, { useRef } from 'react'
import { motion,useInView } from 'framer-motion'

const FadeUp = ({ children,initial,className }) => {

    const ref = useRef(null)
    const isInView = useInView(ref)

  return (
    <motion.div className={className} ref={ref} initial={{ opacity: 0, y: 25, ...initial }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
    </motion.div>
  )
}

export default FadeUp
