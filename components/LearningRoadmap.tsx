"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Lightbulb, Monitor, Code, Cpu, GitBranch, Trophy, 
  PlayCircle, CheckCircle, Clock, Users, Target, Zap,
  Rocket, Brain, Gamepad2, Calculator, Globe, Award, Database
} from "lucide-react"

export default function LearningRoadmap() {
  const [activePhase, setActivePhase] = useState(0)

  const roadmapPhases = [
    {
      phase: "Week 1",
      title: "🧠 CS Foundations & Visual Programming",
      subtitle: "4 Sessions • Introduction to Computer Science & Scratch",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      sessions: [
        "Session 1: What is Computer Science? Career paths & opportunities",
        "Session 2: Computational thinking & problem-solving fundamentals", 
        "Session 3: Introduction to Scratch - sprites, blocks, and basic logic",
        "Session 4: Building your first interactive Scratch project"
      ],
      projects: [
        "💡 Create your first algorithm (daily routine flowchart)",
        "🎮 Interactive storytelling game in Scratch",
        "🏃 Animated character with movement controls"
      ],
      skills: ["Logical thinking", "Problem decomposition", "Visual programming", "CS career awareness"],
      milestone: "You'll understand what programming is and create your first interactive programs",
      deliverable: "Personal CS roadmap + 2 working Scratch games"
    },
    {
      phase: "Week 2", 
      title: "🐍 Python Fundamentals",
      subtitle: "4 Sessions • Real Programming Begins",
      icon: <Code className="w-8 h-8" />,
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      sessions: [
        "Session 1: Python basics - variables, data types, input/output",
        "Session 2: Control structures - if/else statements and decision making",
        "Session 3: Loops - for and while loops, repetition in programming",
        "Session 4: Functions - organizing code and reusable components"
      ],
      projects: [
        "🧮 Simple calculator with multiple operations",
        "🎲 Number guessing game with user feedback",
        "📊 Basic quiz application with scoring"
      ],
      skills: ["Python syntax", "Variables & data types", "Control flow", "Functions"],
      milestone: "You'll write real Python code and understand programming fundamentals",
      deliverable: "3 Python applications demonstrating core concepts"
    },
    {
      phase: "Week 3",
      title: "🐍 Advanced Python & Data",
      subtitle: "4 Sessions • Working with Data Structures",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600", 
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      sessions: [
        "Session 1: Lists - storing and manipulating collections of data",
        "Session 2: Dictionaries - key-value pairs and data organization",
        "Session 3: File handling - reading from and writing to files",
        "Session 4: Putting it together - combining concepts for real applications"
      ],
      projects: [
        "📝 Todo list manager with file storage",
        "📊 Personal expense tracker with data analysis", 
        "📚 Simple contact book with search functionality",
        "🎯 Mini text-based adventure game"
      ],
      skills: ["Data structures", "File operations", "Data manipulation", "Problem solving"],
      milestone: "You'll handle real data and build applications that persist information",
      deliverable: "Portfolio of 4 data-driven Python applications"
    },
    {
      phase: "Week 4",
      title: "🚀 Capstone Project Week", 
      subtitle: "4 Sessions • Build Your Showcase Project",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50", 
      borderColor: "border-amber-200",
      sessions: [
        "Session 1: Project planning & design - choosing and scoping your capstone",
        "Session 2: Development session 1 - building core functionality",
        "Session 3: Development session 2 - adding features and debugging",
        "Session 4: Project presentation & portfolio showcase"
      ],
      projects: [
        "🎨 Choose your own capstone project:",
        "• 🏦 Personal finance manager with budgeting",
        "• 🎮 Text-based RPG game with character progression", 
        "• 📊 Data analysis tool for a topic you care about",
        "• 🤖 Simple chatbot with personality"
      ],
      skills: ["Project planning", "Independent coding", "Debugging", "Presentation skills"],
      milestone: "You'll complete a substantial project and present it professionally",
      deliverable: "Complete capstone project + professional portfolio + presentation"
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
              Your Learning Journey
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 px-2">
              From zero coding experience to Python mastery in 4 weeks • 16 total sessions
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Phase Selector */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {roadmapPhases.map((phase, index) => (
              <motion.button
                key={index}
                onClick={() => setActivePhase(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
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
                    Live Sessions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roadmapPhases[activePhase].sessions.map((session, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-emerald-600 text-xs font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-slate-700">{session}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-emerald-600" />
                    What You'll Build
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roadmapPhases[activePhase].projects.map((project, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-slate-700">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills & Deliverable */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-emerald-600" />
                      Skills You'll Master
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {roadmapPhases[activePhase].skills.map((skill, idx) => (
                        <Badge key={idx} className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-emerald-600" />
                      What You'll Have
                    </h4>
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-slate-700 font-medium">{roadmapPhases[activePhase].deliverable}</p>
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
            Previous Phase
          </Button>
          <Button
            onClick={() => setActivePhase(Math.min(roadmapPhases.length - 1, activePhase + 1))}
            disabled={activePhase === roadmapPhases.length - 1}
            className="bg-emerald-600 hover:bg-emerald-700 px-6"
          >
            Next Phase
          </Button>
        </div>

        {/* Quick Overview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">Complete Journey Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">🧠</div>
              <h4 className="font-bold text-slate-800 mb-2">Week 1: CS & Scratch</h4>
              <p className="text-slate-600 text-sm">Foundation + visual programming</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">🐍</div>
              <h4 className="font-bold text-slate-800 mb-2">Week 2: Python Basics</h4>
              <p className="text-slate-600 text-sm">Real programming fundamentals</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-slate-800 mb-2">Week 3: Data & Files</h4>
              <p className="text-slate-600 text-sm">Advanced Python concepts</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-slate-800 mb-2">Week 4: Capstone</h4>
              <p className="text-slate-600 text-sm">Build your showcase project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 