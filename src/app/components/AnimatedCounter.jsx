'use client'
import React, { useEffect, useState } from 'react'

export default function AnimatedCounter({ number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const duration = 4000 // 4 seconds
    const startValue = 0
    const endValue = number

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const currentValue = Math.floor(startValue + (endValue - startValue) * progress)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(animate)
    }, 1200) // 2.5 second delay

    return () => clearTimeout(timer)
  }, [number])

  return (
    <span className="w-8 inline-block text-right transition-all duration-300">
      {count}
    </span>
  )
}
