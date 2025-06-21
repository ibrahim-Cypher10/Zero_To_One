"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Code, Users, BookOpen, Award, Clock, DollarSign, CheckCircle, Menu, X, ChevronRight, 
  Star, Play, Download, Calendar, MapPin, Globe, Monitor, Smartphone, Zap, Target,
  GraduationCap, Heart, MessageCircle, ArrowRight, Check, AlertCircle, ChevronDown,
  Lightbulb, Trophy, Shield, TrendingUp, GitBranch, Database, Cpu, Layers, Linkedin,
  ShieldCheck
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
import LearningRoadmap from "@/components/LearningRoadmap"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
    }, 7000)
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

  const stats = [
    { number: "90%+", label: "Students feel prepared for CS101", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "64+", label: "Hours of programming practice", icon: <Clock className="w-8 h-8" /> },
    { number: "8+", label: "Complete projects built", icon: <Trophy className="w-8 h-8" /> },
    { number: "2", label: "Programming languages learned", icon: <Code className="w-8 h-8" /> }
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
          >
            <div className="flex flex-col leading-tight">
              <span className="text-xs sm:text-sm font-medium text-slate-600">Edvance x CodeKids</span>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-500">Zero to One</span>
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
              onClick={() => scrollToSection("register")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-4 lg:px-6 py-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
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
                {["curriculum", "instructors", "faq", "register"].map((section) => (
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
                  className="w-full mt-3 bg-emerald-500 text-white rounded-full py-3"
              >
                Register Now
              </Button>
            </div>
            </motion.div>
        )}
        </AnimatePresence>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-12 px-4 lg:px-6 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 py-2 px-4 border-emerald-300 bg-emerald-50 text-emerald-800 font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              First Cohort starts July 2nd • Early bird ends June 23rd
            </Badge>

            <p className="text-emerald-600 font-semibold mb-2 text-sm sm:text-base">Edvance x CodeKids presents</p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 px-2 text-slate-800">
              No CS Background?
              <br className="md:hidden" />
              <span className="text-emerald-500"> No Problem.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-4 px-2 max-w-2xl mx-auto font-medium">
              Launch Your Computer Science Journey with Confidence
            </p>

            <p className="text-base sm:text-lg text-slate-500 mb-8 px-2 max-w-3xl mx-auto">
              A comprehensive intensive course designed for absolute beginners. Master <span className="font-bold text-emerald-600">Scratch → Python</span> and build <span className="font-bold text-emerald-600">real projects</span> while preparing for CS success.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                onClick={() => scrollToSection("register")}
              >
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-300 bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:shadow-lg px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all"
                onClick={() => scrollToSection("curriculum")}
              >
                <Play className="mr-2 h-4 w-4" />
                View Curriculum
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="font-medium text-sm">100% Money-back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-500" />
                <span className="font-medium text-sm">Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-500" />
                <span className="font-medium text-sm">Certificate Included</span>
              </div>
            </div>

          </motion.div>
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
                features: ["Scratch → Python", "Visual first approach", "CS foundations"],
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
                features: ["8+ complete projects", "GitHub portfolio", "Interview ready"],
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
      <LearningRoadmap />

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
                number: "64+",
                text: "Hours of programming practice",
                icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                color: "from-blue-400 to-blue-600",
              },
              {
                number: "8+",
                text: "Complete projects in portfolio",
                icon: <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                color: "from-purple-400 to-purple-600",
              },
              {
                number: "2",
                text: "Programming languages learned",
                icon: <Code className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                color: "from-emerald-400 to-emerald-600",
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

      {/* Instructor Section */}
      <section id="instructors" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">Meet Your Instructors</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Learn from passionate educators who have been in your shoes and are dedicated to your success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {[
              {
                image: "/Zammad.jpeg",
                name: "Zammad",
                title: "Co-Founder, CodeKids PK",
                company: "Computer Science Graduate from LUMS",
                bio: "An experienced educator with a Bachelors in CS from LUMS, Zammad has taught over 500 students from age 7 to 21, specializing in making technology accessible and exciting.",
                linkedin: "https://www.linkedin.com/in/iamzammad/",
              },
              {
                image: "/Ibrahim.jpeg",
                name: "Ibrahim Ahmed Khan",
                title: "Co-founder, Edvance",
                company: "Computer Science Graduate from LUMS",
                bio: "A CS graduate from LUMS who began coding in 8th grade. Ibrahim has built products, launched startups, and is on a mission to make Computer Science understandable for everyone.",
                linkedin: "https://www.linkedin.com/in/ibrahim-ahmed-khan-752100233/",
              }
            ].map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="pt-8">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto mb-4 border-4 border-slate-100 group-hover:border-emerald-200 transition-colors"
                    />
                    <h3 className="text-xl font-bold text-slate-800">{instructor.name}</h3>
                    <p className="text-emerald-600 font-semibold">{instructor.title}</p>
                    <p className="text-sm text-slate-500 mb-4">{instructor.company}</p>
                    <p className="text-slate-600 text-sm mb-6">{instructor.bio}</p>
                    <Button
                      variant="outline"
                      onClick={() => window.open(instructor.linkedin, '_blank')}
                      className="w-full"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ */}
      <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
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
              <p className="text-base sm:text-lg text-slate-700">
                Contact our instructor directly: <a href="mailto:zammad@codekids.pk" className="font-semibold text-emerald-600 hover:underline">zammad@codekids.pk</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA & Pricing Section */}
      <section id="register" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Join the Next Cohort
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Secure your spot in our upcoming intensive. Spaces are limited to ensure personalized mentorship and a high-quality learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Schedule Details */}
            <div className="lg:col-span-1 bg-slate-800/50 rounded-2xl p-6 lg:p-8 border border-slate-700 h-full flex flex-col justify-center shadow-lg">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Schedule
              </h3>
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-2 text-emerald-400" /> <strong>Starts:</strong> July 2nd, 2024</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-2 text-emerald-400" /> <strong>Classes:</strong> Mon, Wed, Fri</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-2 text-emerald-400" /> <strong>Time:</strong> 1hr 15min per session</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-2 text-emerald-400" /> <strong>Total:</strong> 12 Sessions</li>
              </ul>
            </div>

            {/* Pricing Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-emerald-600 to-emerald-800 border-emerald-500 shadow-2xl transform lg:scale-105 ring-2 ring-emerald-400">
                <CardHeader>
                  <Badge variant="secondary" className="bg-amber-400 text-amber-900 font-bold w-fit mb-2">Early Bird Discount</Badge>
                  <CardTitle className="text-4xl font-bold text-white">PKR 7,000</CardTitle>
                  <p className="text-emerald-200">Enroll by June 23rd</p>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={handleStartJourney}
                    size="lg"
                    className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-bold shadow-lg transform hover:scale-105 transition-transform"
                  >
                    Register & Save <ArrowRight className="ml-2" />
                  </Button>
                  <p className="text-xs text-emerald-200 mt-3 text-center">Fill out the form, and our team will reach out ASAP!</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/80 border-slate-600 flex flex-col justify-center p-6">
                  <Badge variant="secondary" className="bg-slate-500 text-slate-100 font-bold w-fit mb-2">Regular Price</Badge>
                  <h4 className="text-3xl font-bold text-white line-through opacity-70">PKR 10,000</h4>
                  <p className="text-slate-400 mt-1">After June 23rd</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        {/* Footer content */}
      </footer>
    </div>
  )
}
