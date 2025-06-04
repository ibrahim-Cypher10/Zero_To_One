"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingLogicElements() {
  const [mounted, setMounted] = useState(false)
  const [elements, setElements] = useState<any[]>([])
  const [circuitPaths, setCircuitPaths] = useState<string[]>([])
  const [binaryStrings, setBinaryStrings] = useState<string[]>([])
  const [screenDimensions, setScreenDimensions] = useState({ width: 1200, height: 800 })

  const codeElements = [
    "{ }", "[ ]", "( )", "&&", "||", "!=", "==", "++", "--", "=>",
    "if", "else", "for", "while", "def", "int", "str", "bool",
    "101010", "010101", "110011", "001100", "111000", "000111",
    "</>", "{ }", "[ ]", "console.log()", "print()", "return",
    "true", "false", "null", "void", "break", "continue"
  ]

  const logicSymbols = [
    "∧", "∨", "¬", "→", "↔", "∀", "∃", "⊕", "⊗", "⊙",
    "∈", "∉", "⊆", "⊇", "∪", "∩", "∅", "∞", "Σ", "Π"
  ]

  useEffect(() => {
    // Only run on client side after mounting
    setMounted(true)
    
    // Get actual screen dimensions
    const updateDimensions = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    // Generate elements with client-side random values
    const generateElements = () => {
      const newElements = []
      const totalElements = 25

      for (let i = 0; i < totalElements; i++) {
        const isCode = Math.random() > 0.4
        const content = isCode 
          ? codeElements[Math.floor(Math.random() * codeElements.length)]
          : logicSymbols[Math.floor(Math.random() * logicSymbols.length)]
        
        newElements.push({
          id: i,
          content,
          isCode,
          startX: Math.random() * window.innerWidth,
          startY: Math.random() * window.innerHeight,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 12,
          size: 0.6 + Math.random() * 0.8,
          moveX1: (Math.random() - 0.5) * 300,
          moveX2: (Math.random() - 0.5) * 600,
          moveX3: (Math.random() - 0.5) * 300
        })
      }
      return newElements
    }
    
    // Generate circuit paths
    const generateCircuitPaths = () => {
      const paths = []
      for (let i = 0; i < 8; i++) {
        const x1 = Math.random() * 100
        const y1 = Math.random() * 100
        const cx = Math.random() * 100
        const cy = Math.random() * 100
        const x2 = Math.random() * 100
        const y2 = Math.random() * 100
        paths.push(`M${x1}% ${y1}% Q${cx}% ${cy}% ${x2}% ${y2}%`)
      }
      return paths
    }
    
    // Generate binary strings
    const generateBinaryStrings = () => {
      const strings = []
      for (let i = 0; i < 15; i++) {
        strings.push(Array.from({ length: 20 }, () => Math.round(Math.random())).join(''))
      }
      return strings
    }
    
    setElements(generateElements())
    setCircuitPaths(generateCircuitPaths())
    setBinaryStrings(generateBinaryStrings())
    
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  // Don't render anything until mounted on client
  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{
            x: element.startX,
            y: element.startY,
            opacity: 0,
            scale: 0,
            rotate: 0
          }}
          animate={{
            x: [
              element.startX,
              element.startX + element.moveX1,
              element.startX + element.moveX2,
              element.startX + element.moveX3
            ],
            y: [
              element.startY,
              element.startY - 200,
              element.startY - 400,
              element.startY - 600
            ],
            opacity: [0, 0.3, 0.6, 0.3, 0],
            scale: [0, element.size, element.size * 1.2, element.size, 0],
            rotate: [0, 180, 360, 540, 720]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute text-lg font-mono select-none ${
            element.isCode 
              ? "text-emerald-400/30 font-semibold" 
              : "text-blue-400/40 font-bold text-xl"
          }`}
          style={{
            textShadow: element.isCode 
              ? "0 0 10px rgba(16, 185, 129, 0.3)"
              : "0 0 15px rgba(59, 130, 246, 0.4)"
          }}
        >
          {element.content}
        </motion.div>
      ))}

      {/* Floating Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {circuitPaths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 6 + (i * 0.5),
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0">
        {binaryStrings.map((binaryString, i) => (
          <motion.div
            key={`binary-${i}`}
            initial={{ 
              x: (i * 80) % screenDimensions.width,
              y: -50,
              opacity: 0
            }}
            animate={{
              y: screenDimensions.height + 50,
              opacity: [0, 0.4, 0.6, 0.4, 0]
            }}
            transition={{
              duration: 3 + (i % 3),
              delay: (i % 5) * 0.6,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-xs font-mono text-emerald-300/20 select-none"
          >
            {binaryString}
          </motion.div>
        ))}
      </div>

      {/* Floating Logic Gates */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`gate-${i}`}
            initial={{
              x: (i * 200) % screenDimensions.width,
              y: (i * 150) % screenDimensions.height,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [
                (i * 200) % screenDimensions.width,
                ((i * 200) + 100) % screenDimensions.width,
                ((i * 200) + 200) % screenDimensions.width
              ],
              y: [
                (i * 150) % screenDimensions.height,
                ((i * 150) + 100) % screenDimensions.height,
                ((i * 150) + 200) % screenDimensions.height
              ],
              scale: [0, 0.5, 0.8, 0.5, 0],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: 12 + (i * 2),
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-purple-400/25 select-none"
          >
            <svg width="40" height="30" viewBox="0 0 40 30">
              {/* Logic Gate Shapes */}
              {i % 3 === 0 && (
                // AND Gate
                <path d="M5 5 L15 5 Q25 5 25 15 Q25 25 15 25 L5 25 Z" 
                      fill="none" stroke="currentColor" strokeWidth="2"/>
              )}
              {i % 3 === 1 && (
                // OR Gate
                <path d="M5 5 Q15 5 20 15 Q15 25 5 25 Q10 15 5 5" 
                      fill="none" stroke="currentColor" strokeWidth="2"/>
              )}
              {i % 3 === 2 && (
                // NOT Gate
                <path d="M5 5 L20 15 L5 25 Z" 
                      fill="none" stroke="currentColor" strokeWidth="2"/>
              )}
              <circle cx="30" cy="15" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            initial={{
              x: (i * 150) % screenDimensions.width,
              y: (i * 100) % screenDimensions.height,
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: [0, 1, 1.2, 1, 0],
              opacity: [0, 0.3, 0.5, 0.3, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6 + (i * 0.5),
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute"
          >
            <div className={`w-8 h-8 border-2 ${
              i % 4 === 0 ? 'border-emerald-400/20 rounded-full' :
              i % 4 === 1 ? 'border-blue-400/20 rotate-45' :
              i % 4 === 2 ? 'border-purple-400/20 rounded-lg' :
              'border-amber-400/20'
            }`}></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 