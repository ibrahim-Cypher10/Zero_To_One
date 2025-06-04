"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RocketAnimationProps {
  trigger: boolean
  onComplete?: () => void
}

export default function RocketAnimation({ trigger, onComplete }: RocketAnimationProps) {
  const [showRockets, setShowRockets] = useState(false)

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
    <svg width="120" height="80" viewBox="0 0 120 80" className="relative z-10">
      {/* Main rocket body */}
      <path 
        d="M20 50 L20 20 Q20 10 30 10 L40 10 Q50 10 50 20 L50 50 Q50 55 45 60 L25 60 Q20 55 20 50 Z" 
        fill="#4ade80" 
        stroke="#065f46" 
        strokeWidth="2"
      />
      
      {/* Rocket nose cone */}
      <path 
        d="M30 10 L35 0 L40 10 Z" 
        fill="#10b981" 
        stroke="#065f46" 
        strokeWidth="2"
      />
      
      {/* Window */}
      <circle cx="35" cy="25" r="6" fill="#1e293b" stroke="#065f46" strokeWidth="1"/>
      <circle cx="35" cy="25" r="4" fill="#334155"/>
      <circle cx="35" cy="25" r="2" fill="#64748b" opacity="0.8"/>
      
      {/* Rocket fins */}
      <path 
        d="M20 50 L10 60 L20 60 Z" 
        fill="#059669" 
        stroke="#065f46" 
        strokeWidth="1"
      />
      <path 
        d="M50 50 L60 60 L50 60 Z" 
        fill="#059669" 
        stroke="#065f46" 
        strokeWidth="1"
      />
      
      {/* Body details */}
      <rect x="22" y="35" width="26" height="3" fill="#059669" rx="1" opacity="0.7"/>
      <rect x="22" y="42" width="26" height="3" fill="#059669" rx="1" opacity="0.7"/>
      
      {/* Main flame from rocket nozzle */}
      <motion.g
        animate={{
          scaleY: [1, 1.4, 1.1],
          opacity: [0.9, 1, 0.9]
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: "center top" }}
      >
        <path 
          d="M25 60 L28 72 L30 68 L35 78 L40 68 L42 72 L45 60" 
          fill={direction === "left" ? "#f97316" : "#3b82f6"}
          stroke={direction === "left" ? "#ea580c" : "#1d4ed8"}
          strokeWidth="1"
        />
        <path 
          d="M28 60 L30 70 L33 65 L35 74 L37 65 L40 70 L42 60" 
          fill={direction === "left" ? "#fbbf24" : "#60a5fa"}
        />
        <path 
          d="M30 60 L32 68 L35 63 L35 72 L35 63 L38 68 L40 60" 
          fill={direction === "left" ? "#fef3c7" : "#dbeafe"}
        />
      </motion.g>
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
              y: typeof window !== 'undefined' ? window.innerHeight - 100 : 700,
              rotate: 45,
              scale: 0.8
            }}
            animate={{ 
              x: [
                -150,
                typeof window !== 'undefined' ? window.innerWidth * 0.3 : 400,
                typeof window !== 'undefined' ? window.innerWidth * 0.7 : 800,
                typeof window !== 'undefined' ? window.innerWidth + 150 : 1200
              ],
              y: [
                typeof window !== 'undefined' ? window.innerHeight - 100 : 700,
                typeof window !== 'undefined' ? window.innerHeight * 0.6 : 400,
                typeof window !== 'undefined' ? window.innerHeight * 0.3 : 200,
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
              {/* Enhanced flame trail */}
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.4, 1],
                  scaleY: [1, 1.8, 1.4]
                }}
                transition={{
                  duration: 0.15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: "center top" }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 rotate-180"
              >
                <div className="w-10 h-16 bg-gradient-to-t from-orange-600 via-yellow-400 to-red-500 rounded-full opacity-90 blur-sm"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-t from-blue-400 via-white to-yellow-300 rounded-full opacity-70 blur-sm"></div>
              </motion.div>

              {/* Secondary flame trail */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.6, 1.2, 0.9],
                  scaleY: [0.8, 1.5, 1.2]
                }}
                transition={{
                  duration: 0.12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1
                }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-12 h-20 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 rounded-full opacity-60 blur-md"></div>
              </motion.div>
              
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

              {/* Launch smoke effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0.3, 0],
                  scale: [0, 1, 2, 3],
                  y: [0, 20, 40, 60]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: 0.3
                }}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-gray-400 to-transparent rounded-full blur-md"
              ></motion.div>
            </div>
          </motion.div>

          {/* Second Rocket - Right to Left */}
          <motion.div
            initial={{ 
              x: typeof window !== 'undefined' ? window.innerWidth + 150 : 1200, 
              y: typeof window !== 'undefined' ? window.innerHeight - 100 : 700,
              rotate: -45,
              scale: 0.8
            }}
            animate={{ 
              x: [
                typeof window !== 'undefined' ? window.innerWidth + 150 : 1200,
                typeof window !== 'undefined' ? window.innerWidth * 0.7 : 800,
                typeof window !== 'undefined' ? window.innerWidth * 0.3 : 400,
                -150
              ],
              y: [
                typeof window !== 'undefined' ? window.innerHeight - 100 : 700,
                typeof window !== 'undefined' ? window.innerHeight * 0.6 : 400,
                typeof window !== 'undefined' ? window.innerHeight * 0.3 : 200,
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
              {/* Enhanced flame trail - positioned correctly for right-to-left trajectory */}
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.4, 1],
                  scaleY: [1, 1.8, 1.4]
                }}
                transition={{
                  duration: 0.15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: "center top" }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 rotate-180"
              >
                <div className="w-10 h-16 bg-gradient-to-t from-blue-600 via-cyan-400 to-blue-500 rounded-full opacity-90 blur-sm"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gradient-to-t from-purple-400 via-white to-cyan-300 rounded-full opacity-70 blur-sm"></div>
              </motion.div>

              {/* Secondary flame trail - positioned for right-to-left */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.6, 1.2, 0.9],
                  scaleY: [0.8, 1.5, 1.2]
                }}
                transition={{
                  duration: 0.12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1
                }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-12 h-20 bg-gradient-to-t from-blue-600 via-cyan-500 to-blue-300 rounded-full opacity-60 blur-md"></div>
              </motion.div>
              
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

              {/* Launch smoke effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0.3, 0],
                  scale: [0, 1, 2, 3],
                  y: [0, 20, 40, 60]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: 0.4
                }}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-gray-400 to-transparent rounded-full blur-md"
              ></motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 