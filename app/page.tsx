"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Code, Users, BookOpen, Award, Clock, DollarSign, CheckCircle, Menu, X, ChevronRight, 
  Star, Play, Download, Calendar, MapPin, Globe, Monitor, Smartphone, Zap, Target,
  GraduationCap, Heart, MessageCircle, ArrowRight, Check, AlertCircle, ChevronDown,
  Lightbulb, Trophy, Shield, TrendingUp, GitBranch, Database, Cpu, Layers, Linkedin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import RocketAnimation from "@/components/RocketAnimation"
import FloatingLogicElements from "@/components/FloatingLogicElements"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("week1-2")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [triggerRocket, setTriggerRocket] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const handleStartJourney = () => {
    setTriggerRocket(true)
    setTimeout(() => {
      // Open registration form in new tab
      window.open('https://forms.gle/iAkcXkQSi2koJzBN6', '_blank')
    }, 1000) // Delay to show rocket launch
  }

  const handleRocketComplete = () => {
    setTriggerRocket(false)
  }

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/Zero_to_One_Course_Syllabus.html'
    link.download = 'Zero_to_One_Course_Syllabus.html'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Pre-Med Student → CS Major",
      content: "I was terrified of programming before this course. The Scratch-to-Python progression made everything click! Now I'm acing CS101.",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "Hassan Khan",
      role: "Business Student",
      content: "The instructors really understand what it's like to start from zero. The projects we built are now part of my portfolio!",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Fatima Ali",
      role: "High School Graduate",
      content: "This course gave me the confidence to apply for CS programs. The university prep focus was exactly what I needed.",
      rating: 5,
      image: "👩‍🎓"
    }
  ]

  const curriculumData = [
    {
      id: "week1-2",
      title: "Foundation Week",
      subtitle: "Intro to CS & Problem Solving",
      icon: <Lightbulb className="w-6 h-6" />,
      sessions: ["Why Computer Science?", "Thinking Like a Computer Scientist"],
      skills: ["Problem Decomposition", "Logical Thinking", "CS Career Awareness"],
      color: "from-emerald-400 to-emerald-600"
    },
    {
      id: "week3-4", 
      title: "Visual Logic Week",
      subtitle: "Scratch Programming",
      icon: <Monitor className="w-6 h-6" />,
      sessions: ["Introduction to Scratch", "Logic Building with Scratch"],
      skills: ["Visual Programming", "Game Logic", "Interactive Projects"],
      color: "from-blue-400 to-blue-600"
    },
    {
      id: "week5-8",
      title: "Text-Based Programming", 
      subtitle: "Python Fundamentals",
      icon: <Code className="w-6 h-6" />,
      sessions: ["Python Essentials I & II", "Functions & Lists", "Final Python Project"],
      skills: ["Syntax Mastery", "Data Structures", "Real Applications"],
      color: "from-purple-400 to-purple-600"
    },
    {
      id: "week9-12",
      title: "Systems Programming",
      subtitle: "C++ & University Prep", 
      icon: <Cpu className="w-6 h-6" />,
      sessions: ["C++ Essentials", "Functions & Arrays", "C++ Project"],
      skills: ["Memory Management", "Compilation", "University Readiness"],
      color: "from-orange-400 to-orange-600"
    },
    {
      id: "week13-14",
      title: "Advanced Concepts",
      subtitle: "Algorithms & Learning Strategies",
      icon: <GitBranch className="w-6 h-6" />,
      sessions: ["Algorithms 101", "Debugging & Learning Strategies"],
      skills: ["Algorithm Design", "Debugging Skills", "Self-Learning"],
      color: "from-pink-400 to-pink-600"
    },
    {
      id: "week15-16",
      title: "Project Showcase",
      subtitle: "Capstone & Career Prep",
      icon: <Trophy className="w-6 h-6" />,
      sessions: ["Final Project Showcase", "University Survival Guide"],
      skills: ["Presentation Skills", "Portfolio Building", "Career Planning"],
      color: "from-amber-400 to-amber-600"
    }
  ]

  const stats = [
    { number: "90%+", label: "Students feel prepared for CS101", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "100+", label: "Hours of mentorship offered", icon: <Clock className="w-8 h-8" /> },
    { number: "4+", label: "Complete projects built", icon: <Trophy className="w-8 h-8" /> },
    { number: "3", label: "Programming languages learned", icon: <Code className="w-8 h-8" /> }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Logic Elements */}
      <FloatingLogicElements />
      
      {/* Rocket Animation */}
      <RocketAnimation trigger={triggerRocket} onComplete={handleRocketComplete} />
      
      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-emerald-100" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 py-3 lg:py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent"
          >
            <div className="flex flex-col leading-tight">
              <span className="text-xs sm:text-sm font-medium text-slate-600">Edvance x CodeKids</span>
              <span>Zero to One</span>
          </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("curriculum")}
              className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium relative group"
            >
              Curriculum
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("instructors")}
              className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium relative group"
            >
              Instructors
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </button>
            <Button
              onClick={handleStartJourney}
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full px-4 lg:px-6 py-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              size="sm"
            >
              Start Your Journey <ChevronRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-slate-700 w-5 h-5" /> : <Menu className="text-slate-700 w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-slate-100 shadow-lg"
            >
              <div className="px-4 py-3 space-y-1">
                {["curriculum", "instructors", "faq"].map((section) => (
              <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-3 px-3 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-all capitalize text-sm"
              >
                    {section}
              </button>
                ))}
              <Button
                onClick={() => scrollToSection("register")}
                  className="w-full mt-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full py-3"
              >
                Register Now
              </Button>
            </div>
            </motion.div>
        )}
        </AnimatePresence>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 lg:px-6 bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-200/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-purple-200/20 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 lg:mb-16"
            >
              <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="hidden sm:inline">First Cohort starts July 1 • Early bird ends June 15</span>
                <span className="sm:hidden">July 1 Start • Early Bird ends June 15</span>
              </div>
              
              <div className="text-base sm:text-lg font-medium text-slate-600 mb-3 sm:mb-4">
                <span className="text-emerald-600 font-semibold">Edvance x CodeKids</span> presents
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                No CS Background?{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                  No Problem.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-3 sm:mb-4 leading-relaxed px-2">
                Launch Your Computer Science Journey with Confidence
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-slate-500 mb-8 sm:mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
                A comprehensive 16-session course designed for absolute beginners. 
                Master <span className="font-semibold text-emerald-600">Scratch → Python → C++</span> and 
                build <span className="font-semibold text-emerald-600">4+ real projects</span> while preparing for university CS success.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  onClick={handleStartJourney}
                >
                  Start Your Journey <ChevronRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-emerald-200 bg-white/80 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg rounded-full shadow-sm backdrop-blur-sm transition-all"
                  onClick={() => scrollToSection("curriculum")}
                >
                  <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  View Curriculum
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 px-4">
                <div className="flex items-center justify-center">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-600" />
                  100% Money-back Guarantee
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-600" />
                  Expert Instructors
                </div>
                <div className="flex items-center justify-center">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-600" />
                  Certificate Included
                </div>
              </div>
            </motion.div>

            {/* Enhanced Hero Visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-white to-emerald-50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-emerald-100/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
                  {/* Before */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center bg-white p-4 sm:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-red-100"
                  >
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">😰</div>
                    <Badge variant="destructive" className="mb-2 sm:mb-3 text-xs sm:text-sm">Before</Badge>
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Confused Student</h3>
                    <p className="text-xs sm:text-sm text-slate-600">Overwhelmed by CS courses, struggling with syntax, afraid to ask questions</p>
                  </motion.div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center order-last md:order-none">
                    <div className="w-full h-1 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded mb-2 md:hidden"></div>
                    <div className="hidden md:block w-full h-1 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded mb-2"></div>
                    <div className="bg-emerald-100 text-emerald-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                      Our Course
                    </div>
                    <div className="w-full h-1 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded mt-2"></div>
                  </div>

                  {/* After */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center bg-white p-4 sm:p-6 rounded-xl lg:rounded-2xl shadow-lg border border-emerald-100"
                  >
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">💻</div>
                    <Badge className="mb-2 sm:mb-3 bg-emerald-100 text-emerald-700 text-xs sm:text-sm">After</Badge>
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Confident Coder</h3>
                    <p className="text-xs sm:text-sm text-slate-600">Building projects, debugging like a pro, ready for university CS</p>
                  </motion.div>
                  </div>

                {/* Stats Bar */}
                <div className="mt-6 lg:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {stats.slice(0, 4).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-emerald-600 mb-1 flex justify-center">{stat.icon}</div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">{stat.number}</div>
                      <div className="text-xs text-slate-600 px-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Problem Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6 bg-slate-50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 sm:mb-8 px-2">The Problem is Real</h2>
              <div className="relative mb-8 sm:mb-12">
                <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-700 italic leading-relaxed mb-4 sm:mb-6 px-2">
                  "University CS courses are fast-paced. Most students from non-CS backgrounds fall behind, lose
                  interest, or struggle silently."
                </blockquote>
                  <div className="flex justify-center items-center space-x-3 sm:space-x-4 text-slate-600">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                    <span className="text-xs sm:text-sm">Real student feedback from major universities</span>
              </div>
                </div>
              </div>

              {/* Problem Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { stat: "60%", desc: "Students struggle with first CS course", icon: "📊" },
                  { stat: "40%", desc: "Switch majors due to difficulty", icon: "📉" }, 
                  { stat: "25%", desc: "Never had programming exposure", icon: "💭" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white p-4 sm:p-6 rounded-xl lg:rounded-2xl shadow-lg"
                  >
                    <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                    <div className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">{item.stat}</div>
                    <p className="text-slate-600 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Solution Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 px-2">From Overwhelmed to Ready</h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 px-4">Our proven 4-pillar approach to CS success</p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
                title: "Personalized Learning Journey",
                description: "Tailored pace and support for your unique background and learning style",
                features: ["Individual mentoring", "Flexible scheduling", "Custom support"],
                color: "from-emerald-400 to-emerald-600",
              },
              {
                icon: <Layers className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
                title: "Progressive Language Mastery",
                description: "Step-by-step progression from visual to text-based coding",
                features: ["Scratch → Python → C++", "Visual first approach", "Syntax confidence"],
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
                title: "Office Hours & Mentorship",
                description: "One-on-one support when you need it most",
                features: ["Weekly office hours", "Expert guidance", "Peer community"],
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
                title: "Portfolio-Ready Projects",
                description: "Build real applications to showcase your new skills",
                features: ["4+ complete projects", "GitHub portfolio", "Interview ready"],
                color: "from-amber-400 to-amber-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="sm:col-span-1 xl:col-span-1"
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white/80 backdrop-blur-sm">
                  <div className={`bg-gradient-to-r ${item.color} p-4 sm:p-6 flex justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="rounded-full bg-white/20 p-3 sm:p-4 relative z-10 backdrop-blur-sm">
                      {item.icon}
                    </div>
                  </div>
                  <CardContent className="pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-slate-600">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Curriculum Showcase */}
      <section id="curriculum" className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 px-2">16-Session Curriculum Deep Dive</h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 px-4">
                Progressive learning from absolute zero to university readiness
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
            </motion.div>
                  </div>

          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-6 sm:mb-8 bg-slate-100 p-1 rounded-2xl gap-1">
                {curriculumData.map((module) => (
                  <TabsTrigger 
                    key={module.id} 
                    value={module.id}
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-xl transition-all duration-300 text-xs sm:text-sm py-2 sm:py-3 px-1 sm:px-2"
                  >
                    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <div className="flex-shrink-0">{module.icon}</div>
                      <span className="hidden sm:inline text-center sm:text-left leading-tight">{module.title}</span>
                      <span className="sm:hidden text-xs leading-tight text-center">{module.title.split(' ')[0]}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {curriculumData.map((module) => (
                <TabsContent key={module.id} value={module.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden border-0 shadow-2xl">
                      <div className={`bg-gradient-to-r ${module.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                        <div className="relative z-10">
                          <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                            <div className="p-3 bg-white/20 rounded-2xl mr-0 sm:mr-4 mb-3 sm:mb-0 self-start backdrop-blur-sm">
                              {module.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{module.title}</h3>
                              <p className="text-white/90 text-base sm:text-lg">{module.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 sm:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-800">Sessions Included</h4>
                            <ul className="space-y-3">
                              {module.sessions.map((session, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                    <span className="text-emerald-600 text-xs sm:text-sm font-medium">{idx + 1}</span>
                                  </div>
                                  <span className="text-slate-700 text-sm sm:text-base">{session}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-800">Skills You'll Master</h4>
                            <ul className="space-y-3">
                              {module.skills.map((skill, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                  <span className="text-slate-700 text-sm sm:text-base">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                  </CardContent>
                </Card>
              </motion.div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="text-center mt-8 sm:mt-12">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg group"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 h-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                Download Complete Syllabus PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Course Details */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 px-2">Course Details & Investment</h2>
              <p className="text-lg sm:text-xl text-slate-600 px-2">Everything you need to know to get started</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />,
                title: "16 Live Sessions",
                description: "Interactive learning with real-time Q&A and hands-on coding",
                details: ["2 sessions per week", "1.5 hours each", "Recorded for review"],
              },
              {
                icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
                title: "Early Bird: PKR 5,000",
                description: "Limited time pricing until June 15",
                details: ["Regular: PKR 12,000", "Save 58%", "Payment plans available"],
                highlight: true,
              },
              {
                icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />,
                title: "100% Money-back Guarantee",
                description: "Full refund if not satisfied after first week",
                details: ["No questions asked", "Risk-free trial", "Full confidence"],
              },
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />,
                title: "Financial Aid Available",
                description: "Don't let cost be a barrier to learning",
                details: ["Need-based assistance", "Flexible payment", "Merit scholarships"],
              },
              {
                icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />,
                title: "Two Cohorts Available",
                description: "Choose the timing that works for you",
                details: ["July 1 start", "August 1 start", "Same curriculum"],
              },
              {
                icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />,
                title: "Certificate & Portfolio",
                description: "Professional credentials and project showcase",
                details: ["Completion certificate", "GitHub portfolio", "LinkedIn ready"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`${index === 1 || index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <Card
                  className={`p-4 sm:p-6 h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    item.highlight
                      ? "bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-500 ring-2 ring-amber-200"
                      : "bg-white hover:bg-slate-50"
                  }`}
                >
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="mb-3 sm:mb-4">{item.icon}</div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{item.description}</p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-slate-600">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Instructors */}
      <section id="instructors" className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 px-2">Meet Your Expert Instructors</h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-3 sm:mb-4 px-2">
                Learn from those who've walked your path and succeeded
              </p>
              <p className="text-base sm:text-lg text-slate-500 italic px-2">
                "We've been exactly where you are. That's why we built this course."
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {[
               {
                image: "/Zammad.jpeg",
                name: "Zammad",
                title: "Co-Founder, CodeKids PK",
                company: "CS Graduate from LUMS",
                bio: "Zammad is an experienced educator with a Bachelors in CS from LUMS and has taught over 500 students between the ages of 7 and 21, specializing in coding and tech education. He has served as a Teaching Assistant for four undergraduate and graduate-level courses at LUMS, contributing to both instruction and overall student development.",
                experience: "500+ students taught across all age groups",
                specialties: ["CS Education", "Teaching Assistant", "Youth Development"],
                quote: "Making high-quality, future-focused education accessible to students across age groups, blending academic rigor with real-world application.",
                linkedin: "https://www.linkedin.com/in/iamzammad/",
                bgGradient: "from-blue-400 to-blue-600",
                accentColor: "blue"
              },
              {
                image: "/Ibrahim.jpeg",
                name: "Ibrahim Ahmed Khan",
                title: "Co-founder, Edvance",
                company: "Computer Science Graduate from LUMS",
                bio: "Ibrahim is a Computer Science graduate from LUMS who began coding in 8th grade. He has since built products, launched startups, and contributed to cutting edge research. Now he is on a mission to make Computer Science exciting, accessible, and understandable for anyone ready to begin.",	
                experience: "Self-taught developer turned entrepreneur",
                specialties: ["AI Products", "Startup Building", "Self-Learning Strategies"],
                quote: "Computer Science is today's literacy and every student deserves a way in, no matter where they start",
                linkedin: "https://www.linkedin.com/in/ibrahim-ahmed-khan-752100233/",
                bgGradient: "from-emerald-400 to-emerald-600",
                accentColor: "emerald"
              }
             ,
            ].map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group h-full"
              >
                <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/95 backdrop-blur-sm h-full flex flex-col">
                  {/* Header with gradient background - Fixed Height */}
                  <div className={`bg-gradient-to-br ${instructor.bgGradient} p-6 sm:p-8 text-white relative overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="relative z-10 text-center">
                      {/* Profile Image */}
                      <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 relative">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                          <Image
                            src={instructor.image}
                            alt={instructor.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-2 -right-2 bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      {/* Name and Title */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{instructor.name}</h3>
                      <p className="text-white/90 font-semibold mb-1 text-sm sm:text-base">{instructor.title}</p>
                      <p className="text-white/80 text-xs sm:text-sm">{instructor.company}</p>
                    </div>
                  </div>
                  
                  {/* Content Area - Flexible Height */}
                  <CardContent className="p-6 sm:p-8 flex flex-col flex-grow">
                    {/* Bio Section - Flexible */}
                    <div className="flex-grow mb-6">
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{instructor.bio}</p>
                    </div>
                    
                    {/* Quote Section - Fixed at bottom */}
                    <div className="mt-auto space-y-4">
                      <blockquote className={`border-l-4 border-${instructor.accentColor}-500 pl-4 py-3 bg-${instructor.accentColor}-50/50 rounded-r-lg`}>
                        <p className="text-slate-700 italic text-sm sm:text-base font-medium">"{instructor.quote}"</p>
                      </blockquote>

                      {/* LinkedIn Button */}
                      <div>
                        <Button
                          variant="outline"
                          className="w-full border-2 border-blue-200 bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:shadow-lg rounded-xl transition-all duration-300 group/btn font-semibold py-3"
                          onClick={() => window.open(instructor.linkedin, '_blank')}
                        >
                          <Linkedin className="w-4 h-4 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                          Connect on LinkedIn
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Works Statistics */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-8 sm:mb-12 lg:mb-16 px-2">Why This Course Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "90%+",
                text: "Students feel prepared for CS101",
                icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                color: "from-emerald-400 to-emerald-600",
              },
              {
                number: "100+",
                text: "Hours of mentorship offered",
                icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                color: "from-blue-400 to-blue-600",
              },
              {
                number: "4+",
                text: "Complete projects in portfolio",
                icon: <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                color: "from-purple-400 to-purple-600",
              },
              {
                number: "100%",
                text: "Built for absolute beginners",
                icon: <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                color: "from-amber-400 to-amber-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`${index >= 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <Card className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all border-0 h-full">
                  <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 sm:mb-4`}>
                    {stat.number}
                  </div>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{stat.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ */}
      <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 px-2">Frequently Asked Questions</h2>
              <p className="text-lg sm:text-xl text-slate-600 px-2">Everything you need to know before starting your journey</p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
            >
              {[
                {
                  question: "What if I've never coded before in my life?",
                  answer:
                    "Perfect! This course is designed specifically for absolute beginners. We start with visual programming in Scratch before moving to text-based languages, ensuring you build confidence at every step. No prior experience is required - just curiosity and willingness to learn.",
                },
                {
                  question: "What technical requirements do I need?",
                  answer:
                    "Just a computer with internet connection (minimum 4GB RAM recommended). We'll guide you through setting up all necessary software during the first session. Everything is beginner-friendly and we provide step-by-step installation guides plus technical support.",
                },
                {
                  question: "Can I switch between July and August cohorts?",
                  answer:
                    "Yes! If you register for July but need to switch to August, just let us know at least one week before the July cohort starts. Your payment will transfer over completely. We want to make sure you can attend when it's most convenient for you.",
                },
                {
                  question: "How does the financial aid application work?",
                  answer:
                    "Send us an email explaining your situation and financial need. We review applications on a case-by-case basis and offer various assistance options including payment plans, partial scholarships, and work-study opportunities. Cost should never be a barrier to learning.",
                },
                {
                  question: "What makes this different from free online courses?",
                  answer:
                    "While free courses are great, they lack personalized guidance and community support. Our course offers live instruction, real-time Q&A, weekly office hours, peer study groups, and mentorship from instructors who've made the same transition you're attempting.",
                },
                {
                  question: "Will I really be ready for university CS courses?",
                  answer:
                    "Absolutely! Our curriculum is specifically designed around common CS101 topics. You'll learn the same programming languages (Python, C++) and concepts (algorithms, debugging, problem-solving) taught in university courses, but at a pace that builds confidence rather than overwhelming you.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border-b border-slate-100 last:border-0"
                >
                  <AccordionTrigger className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 hover:no-underline hover:bg-slate-50 text-left text-slate-800 font-semibold text-base sm:text-lg group">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-emerald-600 font-bold text-xs sm:text-sm group-hover:bg-emerald-200 transition-colors flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm sm:text-base lg:text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 pt-2 text-slate-600 leading-relaxed pl-10 sm:pl-16 lg:pl-20 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8 sm:mt-12">
              <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">Still have questions? We're here to help!</p>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Us Directly
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Final CTA */}
      <section
        id="register"
        className="py-12 sm:py-16 lg:py-20 px-4 lg:px-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
              Ready to Start Your CS Journey?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-slate-600 px-2">
              From confused beginner to confident programmer in just 8 weeks
            </p>
            <p className="text-base sm:text-lg mb-8 sm:mb-12 text-slate-500 max-w-3xl mx-auto px-4">
              Join <span className="font-semibold text-emerald-600">Edvance x CodeKids</span> and hundreds of students who've successfully transitioned to CS. 
              No jargon, no pressure – just expert guidance from people who've been exactly where you are.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 px-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 lg:px-12 py-4 sm:py-6 text-lg sm:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                onClick={handleStartJourney}
              >
                🚀 Register Now – Only PKR 5,000
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-lg px-8 lg:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-2xl backdrop-blur-sm transition-all"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Download Syllabus
              </Button>
            </div>
          </motion.div>

          {/* Registration Process Cards */}
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-800">How to Join the Course</h3>
              
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                {[
                  {
                    icon: <DollarSign className="w-8 h-8" />,
                    title: "1. Make Payment",
                    description: "Transfer PKR 5,000 to our Askari Bank account",
                    color: "from-emerald-400 to-emerald-600",
                    bgColor: "bg-emerald-50"
                  },
                  {
                    icon: <CheckCircle className="w-8 h-8" />,
                    title: "2. Fill Registration Form",
                    description: "Complete our Google Form with payment details & financial aid request if needed",
                    color: "from-blue-400 to-blue-600",
                    bgColor: "bg-blue-50"
                  },
                  {
                    icon: <GraduationCap className="w-8 h-8" />,
                    title: "3. Start Learning",
                    description: "Receive welcome materials and join your cohort",
                    color: "from-purple-400 to-purple-600",
                    bgColor: "bg-purple-50"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  >
                    <Card className={`${step.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}>
                      <CardContent className="p-6 sm:p-8 text-center">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                          {step.icon}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800">{step.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Financial Aid & Bank Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Financial Aid Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-xl h-full">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold mb-2 text-slate-800">💰 Financial Aid Available</h4>
                          <p className="text-slate-600 leading-relaxed">
                            Need financial assistance? We offer payment plans, partial scholarships, and work-study opportunities. 
                            Simply select "Yes" for financial aid in the registration form.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-xl p-4 border border-amber-200">
                        <p className="text-amber-800 font-semibold text-center">
                          "Cost should never be a barrier to learning"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Bank Details Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-0 shadow-xl h-full">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-800">Bank Transfer Details</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/70 rounded-xl p-4 border border-emerald-200">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-slate-500 mb-1">Bank</p>
                              <p className="font-semibold text-slate-800">Askari Bank</p>
                            </div>
                            <div>
                              <p className="text-sm text-slate-500 mb-1">Account Name</p>
                              <p className="font-semibold text-slate-800">Ibrahim Ahmed Khan</p>
                            </div>
                            <div className="sm:col-span-2">
                              <p className="text-sm text-slate-500 mb-1">Account Number</p>
                              <p className="font-mono font-semibold text-slate-800 bg-slate-100 px-3 py-2 rounded-lg">
                                PK60ASCM0000400320230488
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Final Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 max-w-2xl mx-auto">
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800">Ready to Begin?</h4>
                  <p className="text-slate-600 mb-6">
                    Once payment is complete, fill out our registration form to secure your spot in the July cohort.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    onClick={() => window.open('https://forms.gle/iAkcXkQSi2koJzBN6', '_blank')}
                  >
                    📝 Open Registration Form
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mt-16 px-4"
          >
            {[
              { icon: <Shield className="w-5 h-5" />, text: "100% Money-back Guarantee" },
              { icon: <Heart className="w-5 h-5" />, text: "Loved by 90%+ Students" },
              { icon: <Users className="w-5 h-5" />, text: "Expert Instructor Support" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center justify-center bg-white rounded-full px-6 py-3 shadow-lg border border-slate-100">
                <span className="text-emerald-600 mr-2">{badge.icon}</span>
                <span className="text-slate-700 font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg p-3 sm:p-4 lg:hidden z-40 shadow-2xl border-t border-emerald-100 safe-bottom">
        <div className="flex gap-2 sm:gap-3 max-w-sm mx-auto">
        <Button
            className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 rounded-full shadow-lg font-semibold text-sm py-3"
            onClick={handleStartJourney}
        >
          Register Now - PKR 5,000
        </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 rounded-full w-12 h-12 flex-shrink-0"
            onClick={() => scrollToSection("curriculum")}
          >
            <BookOpen className="h-4 w-4" />
        </Button>
        </div>
      </div>
    </div>
  )
}
