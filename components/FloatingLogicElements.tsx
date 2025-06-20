"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function FloatingLogicElements() {
  const [elements, setElements] = useState<any[]>([])
  const [circuitPaths, setCircuitPaths] = useState<string[]>([])
  const [binaryStrings, setBinaryStrings] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)

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
    setIsClient(true)

    const setupAndGenerate = () => {
      const width = window.innerWidth
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024

      // Generate elements with client-side random values
      const newElements = []
      const totalElements = isMobile ? 15 : isTablet ? 20 : 25
      const moveRange = isMobile ? 200 : isTablet ? 300 : 400
      const baseSize = isMobile ? 0.4 : isTablet ? 0.5 : 0.6

      for (let i = 0; i < totalElements; i++) {
        const isCode = Math.random() > 0.4
        const content = isCode 
          ? codeElements[Math.floor(Math.random() * codeElements.length)]
          : logicSymbols[Math.floor(Math.random() * logicSymbols.length)]
        
        newElements.push({
          id: i,
          content,
          isCode,
          startX: Math.random() * width,
          startY: Math.random() * window.innerHeight,
          delay: Math.random() * 5,
          duration: isMobile ? 6 + Math.random() * 8 : 8 + Math.random() * 12,
          size: baseSize + Math.random() * (isMobile ? 0.4 : 0.8),
          moveX1: (Math.random() - 0.5) * moveRange * 0.75,
          moveX2: (Math.random() - 0.5) * moveRange,
          moveX3: (Math.random() - 0.5) * moveRange * 0.75
        })
      }
      setElements(newElements)
      
      // Generate circuit paths
      const paths = []
      const pathCount = isMobile ? 4 : isTablet ? 6 : 8
      for (let i = 0; i < pathCount; i++) {
        const x1 = Math.random() * 100
        const y1 = Math.random() * 100
        const cx = Math.random() * 100
        const cy = Math.random() * 100
        const x2 = Math.random() * 100
        const y2 = Math.random() * 100
        paths.push(`M${x1}% ${y1}% Q${cx}% ${cy}% ${x2}% ${y2}%`)
      }
      setCircuitPaths(paths)
      
      // Generate binary strings
      const strings = []
      const stringCount = isMobile ? 8 : isTablet ? 10 : 15
      const stringLength = isMobile ? 12 : isTablet ? 16 : 20
      for (let i = 0; i < stringCount; i++) {
        strings.push(Array.from({ length: stringLength }, () => Math.round(Math.random())).join(''))
      }
      setBinaryStrings(strings)
    }

    setupAndGenerate()
    window.addEventListener('resize', setupAndGenerate)
    
    return () => {
      window.removeEventListener('resize', setupAndGenerate)
    }
  }, [])

  if (!isClient) {
    return null
  }
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Responsive logic gate configs
  const logicGates = [
    { type: "AND", x: isMobile ? 10 : 20, y: isMobile ? 15 : 20 },
    { type: "OR", x: isMobile ? 80 : 70, y: isMobile ? 25 : 30 },
    { type: "NOT", x: isMobile ? 50 : 40, y: isMobile ? 70 : 80 }
  ]

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
              element.startY - (isMobile ? 150 : 200),
              element.startY - (isMobile ? 300 : 400),
              element.startY - (isMobile ? 450 : 600)
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
          className={`absolute select-none ${
            element.isCode 
              ? `text-emerald-400/30 font-semibold ${isMobile ? 'text-base' : 'text-lg'}` 
              : `text-blue-400/40 font-bold ${isMobile ? 'text-lg' : 'text-xl'}`
          } font-mono`}
          style={{
            textShadow: element.isCode 
              ? "0 0 10px rgba(16, 185, 129, 0.3)"
              : "0 0 15px rgba(59, 130, 246, 0.4)"
          }}
        >
          {element.content}
        </motion.div>
      ))}

      {/* Floating Circuit Lines - responsive opacity and stroke width */}
      <svg className={`absolute inset-0 w-full h-full ${isMobile ? 'opacity-10' : 'opacity-15'}`}>
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
            strokeWidth={isMobile ? "0.5" : "0.8"}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: isMobile ? 4 + (i * 0.3) : 6 + (i * 0.5),
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Binary Rain Effect - responsive */}
      <div className="absolute inset-0">
        {binaryStrings.map((binaryString, i) => (
          <motion.div
            key={`binary-${i}`}
            initial={{ 
              x: (i * (isMobile ? 40 : 60)) % window.innerWidth,
              y: -50,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 50,
              opacity: [0, 0.4, 0.6, 0.4, 0]
            }}
            transition={{
              duration: isMobile ? 8 + (i * 0.3) : 12 + (i * 0.4),
              delay: i * (isMobile ? 0.3 : 0.5),
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute font-mono font-bold text-green-400/20 select-none ${
              isMobile ? 'text-xs' : 'text-sm'
            }`}
            style={{
              textShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
              writingMode: "vertical-rl",
              letterSpacing: isMobile ? "0.1em" : "0.2em"
            }}
          >
            {binaryString}
          </motion.div>
        ))}
      </div>

      {/* Floating Logic Gates - responsive positioning and sizing */}
      <div className="absolute inset-0">
        {logicGates.map((gate, i) => (
          <motion.div
            key={`gate-${i}`}
            initial={{ 
              x: `${gate.x}%`,
              y: `${gate.y}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: [`${gate.y}%`, `${gate.y - 10}%`, `${gate.y + 5}%`, `${gate.y}%`],
              opacity: [0, 0.3, 0.2, 0.3],
              scale: [0, isMobile ? 0.6 : 0.8, isMobile ? 0.8 : 1.0, isMobile ? 0.6 : 0.8],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8 + (i * 2),
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute pointer-events-none ${
              isMobile ? 'text-xs' : 'text-sm'
            }`}
          >
            <div className={`${
              isMobile ? 'w-8 h-6' : 'w-10 h-8'
            } bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded border border-purple-300/30 flex items-center justify-center font-mono font-bold text-purple-400/60 backdrop-blur-sm`}>
              {gate.type}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Geometric patterns - responsive */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 2 : 3)].map((_, i) => (
          <motion.div
            key={`pattern-${i}`}
            initial={{
              x: `${20 + (i * (isMobile ? 25 : 20))}%`,
              y: `${30 + (i * (isMobile ? 20 : 15))}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0, 0.2, 0.1, 0.2],
              scale: [0, isMobile ? 0.5 : 0.7, isMobile ? 0.3 : 0.5, isMobile ? 0.5 : 0.7]
            }}
            transition={{
              duration: 20 + (i * 5),
              delay: i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute pointer-events-none"
          >
            <div className={`${
              isMobile ? 'w-12 h-12' : 'w-16 h-16'
            } border border-cyan-300/20 ${
              i % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'
            } bg-gradient-to-r from-cyan-400/5 to-blue-400/5`}></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 