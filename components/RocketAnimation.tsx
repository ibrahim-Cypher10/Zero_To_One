"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RocketAnimationProps {
  trigger: boolean
  onComplete?: () => void
}

export default function RocketAnimation({ trigger, onComplete }: RocketAnimationProps) {
  const [showRockets, setShowRockets] = useState(false)
  const [screenDimensions, setScreenDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    // Update screen dimensions on client
    const updateDimensions = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (trigger) {
      setShowRockets(true)
      
      // Hide the rockets after the animation completes
      const hideTimer = setTimeout(() => {
        setShowRockets(false)
        onComplete?.()
      }, 3000)

      return () => {
        clearTimeout(hideTimer)
      }
    }
  }, [trigger, onComplete])

  const RocketSVG = ({ direction = "left" }: { direction?: "left" | "right" }) => (
    <svg width="120" height="90" viewBox="0 0 120 90" className="relative z-10">
      {/* Main rocket body - sleeker design */}
      <path 
        d="M30 65 L30 25 Q30 15 35 15 L55 15 Q60 15 60 25 L60 65 Q60 70 55 75 L35 75 Q30 70 30 65 Z" 
        fill="#4ade80" 
        stroke="#065f46" 
        strokeWidth="2"
      />
      
      {/* Rocket nose cone - more pointed */}
      <path 
        d="M35 15 L45 0 L55 15 Z" 
        fill="#10b981" 
        stroke="#065f46" 
        strokeWidth="2"
      />
      
      {/* Main window */}
      <circle cx="45" cy="30" r="8" fill="#1e293b" stroke="#065f46" strokeWidth="2"/>
      <circle cx="45" cy="30" r="6" fill="#334155"/>
      <circle cx="45" cy="30" r="3" fill="#64748b" opacity="0.8"/>
      <circle cx="42" cy="27" r="1.5" fill="#94a3b8" opacity="0.9"/>
      
      {/* Side stabilizer fins - smaller and more aerodynamic */}
      <path 
        d="M30 55 L20 65 L25 70 L30 65 Z" 
        fill="#059669" 
        stroke="#065f46" 
        strokeWidth="1.5"
      />
      <path 
        d="M60 55 L70 65 L65 70 L60 65 Z" 
        fill="#059669" 
        stroke="#065f46" 
        strokeWidth="1.5"
      />
      
      {/* Body panels and details */}
      <rect x="32" y="40" width="26" height="2" fill="#059669" rx="1" opacity="0.7"/>
      <rect x="32" y="45" width="26" height="2" fill="#059669" rx="1" opacity="0.7"/>
      <rect x="32" y="50" width="26" height="2" fill="#059669" rx="1" opacity="0.7"/>
      
      {/* Rocket nozzle */}
      <rect x="35" y="75" width="20" height="5" fill="#374151" stroke="#065f46" strokeWidth="1" rx="2"/>
      <rect x="37" y="77" width="16" height="3" fill="#4b5563" rx="1"/>
      
      {/* Main flame - ONLY from bottom nozzle */}
      <motion.g
        animate={{
          scaleY: [1, 1.5, 1.2],
          opacity: [0.9, 1, 0.9],
          scaleX: [1, 1.1, 1]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: "center top" }}
      >
        {/* Outer flame */}
        <path 
          d="M35 80 L38 90 L41 85 L45 95 L49 85 L52 90 L55 80" 
          fill={direction === "left" ? "#f97316" : "#3b82f6"}
          stroke={direction === "left" ? "#ea580c" : "#1d4ed8"}
          strokeWidth="1"
        />
        {/* Middle flame */}
        <path 
          d="M37 80 L40 88 L43 83 L45 92 L47 83 L50 88 L53 80" 
          fill={direction === "left" ? "#fbbf24" : "#60a5fa"}
        />
        {/* Inner flame core */}
        <path 
          d="M39 80 L41 86 L43 82 L45 89 L47 82 L49 86 L51 80" 
          fill={direction === "left" ? "#fef3c7" : "#dbeafe"}
        />
        {/* Hot core */}
        <path 
          d="M41 80 L42 84 L44 81 L45 87 L46 81 L48 84 L49 80" 
          fill={direction === "left" ? "#ffffff" : "#e0f2fe"}
          opacity="0.8"
        />
      </motion.g>
      
      {/* Rocket exhaust glow effect */}
      <motion.ellipse
        cx="45"
        cy="82"
        rx="8"
        ry="3"
        fill={direction === "left" ? "#f97316" : "#3b82f6"}
        opacity="0.3"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          rx: [6, 10, 6],
          ry: [2, 4, 2]
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </svg>
  )

  return (
    <AnimatePresence>
      {showRockets && (
        <>
          {/* First Rocket - Left to Right */}
          <motion.div
            initial={{ 
              x: -150, 
              y: screenDimensions.height - 100,
              rotate: 45,
              scale: 0.8
            }}
            animate={{ 
              x: [
                -150,
                screenDimensions.width * 0.3,
                screenDimensions.width * 0.7,
                screenDimensions.width + 150
              ],
              y: [
                screenDimensions.height - 100,
                screenDimensions.height * 0.6,
                screenDimensions.height * 0.3,
                -200
              ],
              rotate: [45, 50, 55, 60],
              scale: [0.8, 1.2, 1.0, 0.6]
            }}
            exit={{ 
              opacity: 0,
              scale: 0.2
            }}
            transition={{ 
              duration: 2.5,
              ease: "easeOut",
              times: [0, 0.3, 0.7, 1]
            }}
            className="fixed top-0 left-0 z-50 pointer-events-none"
            style={{
              filter: "drop-shadow(0 10px 20px rgba(16, 185, 129, 0.4))"
            }}
          >
            <div className="relative">
              <RocketSVG direction="left" />

              {/* Sparkle effects */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1
                }}
                className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg"
              ></motion.div>
              
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="absolute -bottom-2 -left-4 w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full shadow-lg"
              ></motion.div>
            </div>
          </motion.div>

          {/* Second Rocket - Right to Left */}
          <motion.div
            initial={{ 
              x: screenDimensions.width + 150, 
              y: screenDimensions.height - 100,
              rotate: -45,
              scale: 0.8
            }}
            animate={{ 
              x: [
                screenDimensions.width + 150,
                screenDimensions.width * 0.7,
                screenDimensions.width * 0.3,
                -150
              ],
              y: [
                screenDimensions.height - 100,
                screenDimensions.height * 0.6,
                screenDimensions.height * 0.3,
                -200
              ],
              rotate: [-45, -50, -55, -60],
              scale: [0.8, 1.2, 1.0, 0.6]
            }}
            exit={{ 
              opacity: 0,
              scale: 0.2
            }}
            transition={{ 
              duration: 2.5,
              ease: "easeOut",
              times: [0, 0.3, 0.7, 1],
              delay: 0.1 // Slight delay for staggered launch
            }}
            className="fixed top-0 left-0 z-50 pointer-events-none"
            style={{
              filter: "drop-shadow(0 10px 20px rgba(59, 130, 246, 0.4))"
            }}
          >
            <div className="relative">
              <RocketSVG direction="right" />

              {/* Sparkle effects with blue theme */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"
              ></motion.div>
              
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4
                }}
                className="absolute -bottom-2 -left-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 