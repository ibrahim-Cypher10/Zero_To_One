"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, Gamepad2, Code, Cpu, GitBranch, Trophy, 
  Clock, CheckCircle
} from "lucide-react"

export default function LearningRoadmap() {
  const [activePhase, setActivePhase] = useState(0)

  const roadmapPhases = [
    {
      phase: "Module 1",
      title: "🧠 CS Foundations & Problem Solving",
      subtitle: "2 Sessions • Understanding the Core of CS",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      sessions: [
        "Session 1: What is Computer Science? Career paths & opportunities",
        "Session 2: Computational thinking & problem-solving frameworks", 
      ],
      projects: [
        "💡 Create your first algorithm (daily routine flowchart)",
        "🤔 Deconstruct real-world problems into logical steps",
      ],
      skills: ["Algorithmic Thinking", "Problem Decomposition", "Abstraction", "Pattern Recognition"],
      milestone: "You'll learn to think like a computer scientist before writing a single line of code.",
      deliverable: "A solid mental framework for solving any logical problem."
    },
    {
      phase: "Module 2", 
      title: "🎮 Visual Programming with Scratch",
      subtitle: "2 Sessions • Building Logic without Syntax",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-sky-400 to-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      sessions: [
        "Session 3: Introduction to Scratch - sprites, blocks, and events",
        "Session 4: Building game logic with loops, conditionals, and variables",
      ],
      projects: [
        "🏃 Animated character with interactive controls",
        "🕹️ Complete interactive game with a scoring system",
      ],
      skills: ["Visual Programming", "Event-Driven Logic", "Game Design Basics", "Rapid Prototyping"],
      milestone: "You'll build fun, interactive games and see programming concepts come to life.",
      deliverable: "2 working Scratch games to share with friends and family."
    },
    {
      phase: "Module 3",
      title: "🐍 Python Fundamentals",
      subtitle: "4 Sessions • Real Programming Begins",
      icon: <Code className="w-8 h-8" />,
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      sessions: [
        "Session 5: Python basics - variables, data types, I/O",
        "Session 6: Control structures - if/else statements and loops",
        "Session 7: Functions and lists for code organization and data storage",
        "Session 8: Final Python Project - putting it all together"
      ],
      projects: [
        "🧮 Simple calculator with multiple operations",
        "🎲 Number guessing game with user feedback",
        "📝 A complete project like a Quiz Game or To-Do Manager"
      ],
      skills: ["Python Syntax", "Variables & Data Types", "Control Flow", "Functions & Lists"],
      milestone: "You'll write real, text-based code to build useful applications.",
      deliverable: "A portfolio of Python applications demonstrating core concepts."
    },
    {
      phase: "Module 4",
      title: "⚙️ Introduction to C++",
      subtitle: "4 Sessions • University Prep Focus",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-rose-400 to-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      sessions: [
        "Session 9: Why C++? Syntax essentials vs. Python",
        "Session 10: Pointers, memory, and performance concepts",
        "Session 11: Object-Oriented Programming (OOP) basics",
        "Session 12: Mini-project to solidify C++ skills"
      ],
      projects: [
        "🔢 Basic calculator in C++",
        "🏦 Simple banking system using OOP concepts"
      ],
      skills: ["C++ Syntax", "Memory Management", "Compilation", "Object-Oriented Programming"],
      milestone: "You'll tackle a language used in university and high-performance applications.",
      deliverable: "Confidence and foundational knowledge to excel in CS101 courses."
    },
    {
      phase: "Module 5",
      title: "🌉 Bridging Logic & Problem Solving",
      subtitle: "2 Sessions • Advanced Concepts",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600", 
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      sessions: [
        "Session 13: Advanced problem-solving strategies",
        "Session 14: Introduction to basic data structures (Arrays, Stacks)",
      ],
      projects: [
        "🧩 Solving classic programming puzzles",
        "⚙️ Implementing a simple data structure from scratch",
      ],
      skills: ["Data Structures", "Advanced Algorithms", "Debugging Techniques", "Efficiency"],
      milestone: "You'll connect all the dots and learn how to approach complex challenges.",
      deliverable: "A toolkit of problem-solving patterns for technical interviews."
    },
    {
      phase: "Module 6",
      title: "🚀 Capstone & Career Prep", 
      subtitle: "2 Sessions • Showcase & Next Steps",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50", 
      borderColor: "border-amber-200",
      sessions: [
        "Session 15: Capstone project development and showcase",
        "Session 16: Career prep - building a portfolio and next steps",
      ],
      projects: [
        "🏆 A capstone project of your choice to showcase all your skills",
        "📝 A polished resume and portfolio ready for applications",
      ],
      skills: ["Project Management", "Independent Development", "Presentation", "Career Strategy"],
      milestone: "You'll complete a substantial project and be ready for your next step.",
      deliverable: "A complete capstone project and a clear plan for your future in tech."
    }
  ]

  return (
    <section id="curriculum" className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 px-2">
              A Journey in 6 Modules
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 px-2">
              From zero coding experience to CS readiness with 16 comprehensive sessions.
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Phase Selector */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {roadmapPhases.map((phase, index) => (
              <motion.button
                key={index}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 h-full ${
                  activePhase === index
                    ? `${phase.bgColor} ${phase.borderColor} shadow-lg`
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${phase.color} rounded-lg flex items-center justify-center mx-auto mb-2 text-white`}>
                  {phase.icon}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">{phase.phase}</div>
                <div className="text-xs text-slate-600 hidden sm:block">{phase.title.split(' ').slice(1).join(' ')}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className={`bg-gradient-to-r ${roadmapPhases[activePhase].color} p-6 sm:p-8 text-white`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{roadmapPhases[activePhase].title}</h3>
                    <p className="text-white/90 text-base sm:text-lg">{roadmapPhases[activePhase].subtitle}</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      {roadmapPhases[activePhase].icon}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-white/95 font-medium text-center">
                    🎯 {roadmapPhases[activePhase].milestone}
                  </p>
                </div>
              </div>

              <CardContent className="p-6 sm:p-8 space-y-8">
                {/* Sessions */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                    What You'll Learn
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roadmapPhases[activePhase].sessions.map((session, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{session}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-amber-500" />
                    Skills Gained
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {roadmapPhases[activePhase].skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-200 text-slate-700 font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {/* Projects */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-slate-800">
                      Key Projects
                    </h4>
                    <div className="space-y-3">
                      {roadmapPhases[activePhase].projects.map((project, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <span className="mr-2 mt-0.5">🔹</span>
                          <span className="text-slate-600">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Deliverable */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-slate-800">
                      Module Deliverable
                    </h4>
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm">
                      <p className="text-emerald-800 font-semibold">{roadmapPhases[activePhase].deliverable}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            variant="outline"
            onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
            disabled={activePhase === 0}
            className="px-6"
          >
            Previous Module
          </Button>
          <Button
            onClick={() => setActivePhase(Math.min(roadmapPhases.length - 1, activePhase + 1))}
            disabled={activePhase === roadmapPhases.length - 1}
            className="bg-emerald-600 hover:bg-emerald-700 px-6"
          >
            Next Module
          </Button>
        </div>

        {/* Quick Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">Complete Journey Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">🧠</div>
              <h4 className="font-bold text-slate-800 mb-2">Module 1: CS Foundations</h4>
              <p className="text-slate-600 text-sm">Understanding the core of CS</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">🎮</div>
              <h4 className="font-bold text-slate-800 mb-2">Module 2: Visual Programming</h4>
              <p className="text-slate-600 text-sm">Building logic without syntax</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">🐍</div>
              <h4 className="font-bold text-slate-800 mb-2">Module 3: Python Fundamentals</h4>
              <p className="text-slate-600 text-sm">Real programming fundamentals</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="font-bold text-slate-800 mb-2">Module 4: Introduction to C++</h4>
              <p className="text-slate-600 text-sm">University prep focus</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">🌉</div>
              <h4 className="font-bold text-slate-800 mb-2">Module 5: Bridging Logic</h4>
              <p className="text-slate-600 text-sm">Advanced concepts</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-bold text-slate-800 mb-2">Module 6: Capstone & Career Prep</h4>
              <p className="text-slate-600 text-sm">Showcase & next steps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 