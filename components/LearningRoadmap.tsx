"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, Code, Rocket, Layers, Trophy,
  Clock, CheckCircle
} from "lucide-react"

export default function LearningRoadmap() {
  const [activePhase, setActivePhase] = useState(0)

  const roadmapPhases = [
    {
      phase: "Module 1",
      title: "🧠 CS Foundations & Visual Programming",
      subtitle: "3 Sessions • From Zero to First Game",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      sessions: [
        "Session 1: Computational thinking & problem-solving",
        "Session 2: Introduction to Scratch & core logic blocks", 
        "Session 3: Building your first interactive game",
      ],
      projects: [
        "💡 Create your first algorithm (daily routine flowchart)",
        "🎮 Interactive storytelling game in Scratch",
      ],
      skills: ["Logical Thinking", "Problem Decomposition", "Visual Programming", "Game Logic"],
      milestone: "You'll build a working game and master the logic of programming without writing code.",
      deliverable: "A solid mental framework and a fun Scratch project to share."
    },
    {
      phase: "Module 2", 
      title: "🐍 Introduction to Python",
      subtitle: "3 Sessions • Writing Your First Real Code",
      icon: <Code className="w-8 h-8" />,
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      sessions: [
        "Session 4: Python basics, variables, and data types",
        "Session 5: Control flow (if/else, loops)",
        "Session 6: Functions and simple scripting",
      ],
      projects: [
        "🧮 Simple calculator with multiple operations",
        "🎲 Number guessing game with user feedback"
      ],
      skills: ["Python Syntax", "Variables", "Control Flow", "Functions"],
      milestone: "You'll write text-based Python code and build simple, useful applications.",
      deliverable: "A portfolio of foundational Python scripts."
    },
    {
      phase: "Module 3",
      title: "🧩 Digging Deeper with Python",
      subtitle: "3 Sessions • Advanced Concepts & Data",
      icon: <Layers className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      sessions: [
        "Session 7: Data structures (lists, dictionaries)",
        "Session 8: File I/O for data persistence",
        "Session 9: Building a larger application",
      ],
      projects: [
        "📝 Todo list manager that saves and loads tasks",
        "📊 Basic data analysis from a text file",
      ],
      skills: ["Data Structures", "File I/O", "Data Manipulation", "Advanced Problem Solving"],
      milestone: "You'll build applications that can handle and persist data.",
      deliverable: "Complex Python applications that work with real data."
    },
    {
      phase: "Module 4",
      title: "🚀 Project Week: Intro to Vibecoding",
      subtitle: "3 Sessions • Building a Full-Stack App",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      sessions: [
        "Session 10: What is Full-Stack? Intro to Vibecoding",
        "Session 11: Building your app's frontend and backend",
        "Session 12: Deployment and final presentations",
      ],
      projects: [
        "🏆 A full-stack web application built with Vibecoding",
        "📝 A polished resume and portfolio ready for applications",
      ],
      skills: ["Full-Stack Development", "Vibecoding", "APIs", "Deployment", "Project Management"],
      milestone: "You'll build and deploy a complete web application from scratch.",
      deliverable: "A live web app and a clear plan for your future in tech."
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
              A Journey in 4 Modules
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 px-2">
              From zero coding experience to full-stack readiness with 12 comprehensive sessions.
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Phase Selector */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
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
                <div className="text-sm font-semibold text-slate-800">{phase.phase}</div>
                <div className="text-xs text-slate-600 hidden sm:block">{phase.title.split(':').slice(0, 1).join(':').split(' ').slice(1).join(' ')}</div>
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
            onClick={() => setActivePhase((prev) => (prev > 0 ? prev - 1 : roadmapPhases.length - 1))}
            variant="outline"
            className="px-6"
          >
            Previous Module
          </Button>
          <Button
            onClick={() => setActivePhase((prev) => (prev < roadmapPhases.length - 1 ? prev + 1 : 0))}
            className="bg-emerald-600 hover:bg-emerald-700 px-6"
          >
            Next Module
          </Button>
        </div>

        <div className="text-center mt-8">
            <a
              href="/Zero_to_One_Course_Syllabus.html"
              download="Zero_to_One_Course_Syllabus.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-slate-700 hover:bg-slate-800"
            >
              Download Full Syllabus
            </a>
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
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-bold text-slate-800 mb-2">Module 4: Project Week</h4>
              <p className="text-slate-600 text-sm">Building a full-stack app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 