"use client"

import { useState, useEffect } from "react"
import { Code, Users, BookOpen, Award, Clock, DollarSign, CheckCircle, Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            Zero to One
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("curriculum")}
              className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection("instructors")}
              className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium"
            >
              Instructors
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("register")}
              className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full"
              size="sm"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-slate-700" /> : <Menu className="text-slate-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 animate-in slide-in-from-top">
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => scrollToSection("curriculum")}
                className="block w-full text-left py-3 px-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Curriculum
              </button>
              <button
                onClick={() => scrollToSection("instructors")}
                className="block w-full text-left py-3 px-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Instructors
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left py-3 px-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection("register")}
                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full"
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white to-emerald-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                No CS Background?{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  No Problem.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Launch Your Computer Science Journey with Confidence.
              </p>
              <p className="text-lg text-slate-500 mb-10">
                A foundational course for absolute beginners. Starts July 1.{" "}
                <span className="text-amber-500 font-medium">Early bird discount till June 15.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-emerald-200/50 hover:shadow-emerald-300/50 transition-all"
                  onClick={() => scrollToSection("register")}
                >
                  Register Now <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 px-8 py-6 text-lg rounded-full shadow-sm transition-all"
                  onClick={() => scrollToSection("curriculum")}
                >
                  View Curriculum
                </Button>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-slate-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-emerald-100/50">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="text-center mb-8 md:mb-0 bg-white p-6 rounded-2xl shadow-sm">
                    <div className="text-5xl mb-4">😰</div>
                    <div className="bg-red-50 text-red-600 text-sm font-medium px-3 py-1 rounded-full inline-block">
                      Before
                    </div>
                    <p className="text-slate-600 mt-2">Confused Student</p>
                  </div>

                  <div className="flex flex-col items-center mx-8">
                    <div className="text-4xl text-emerald-600 mb-2">→</div>
                    <div className="text-sm text-slate-500">Our Course</div>
                  </div>

                  <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
                    <div className="text-5xl mb-4">💻</div>
                    <div className="bg-emerald-50 text-emerald-600 text-sm font-medium px-3 py-1 rounded-full inline-block">
                      After
                    </div>
                    <p className="text-slate-600 mt-2">Confident Coder</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-block bg-amber-50 text-amber-600 text-sm font-medium px-4 py-2 rounded-full">
                    <span className="mr-2">✨</span> 90% of our students feel more prepared for university CS courses
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">The Problem is Real</h2>
              <div className="relative">
                <blockquote className="text-xl md:text-2xl text-slate-600 italic leading-relaxed p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  "University CS courses are fast-paced. Most students from non-CS backgrounds fall behind, lose
                  interest, or struggle silently."
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-6xl">📚</div>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">From Overwhelmed to Ready</h2>
              <p className="text-xl text-slate-600">Our 4-pillar approach to CS success</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-12 h-12 text-white" />,
                title: "Personalized Learning Journey",
                description: "Tailored pace and support for your unique background",
                color: "from-emerald-400 to-emerald-600",
              },
              {
                icon: <Code className="w-12 h-12 text-white" />,
                title: "Scratch to Python to C++",
                description: "Step-by-step progression from visual to text-based coding",
                color: "from-emerald-500 to-emerald-700",
              },
              {
                icon: <BookOpen className="w-12 h-12 text-white" />,
                title: "Office Hours & Mentorship",
                description: "One-on-one support when you need it most",
                color: "from-emerald-400 to-emerald-600",
              },
              {
                icon: <Award className="w-12 h-12 text-white" />,
                title: "Resume-Worthy Project",
                description: "Build something real to showcase your new skills",
                color: "from-emerald-500 to-emerald-700",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`bg-gradient-to-r ${item.color} p-6 flex justify-center`}>
                    <div className="rounded-full bg-white/20 p-4">{item.icon}</div>
                  </div>
                  <CardContent className="pt-6 pb-8 px-6">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Course Details</h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Clock className="w-8 h-8 text-emerald-600" />,
                title: "16 Live Sessions",
                description: "Interactive learning with real-time Q&A",
              },
              {
                icon: <DollarSign className="w-8 h-8 text-amber-500" />,
                title: "Early Bird: PKR 5,000",
                description: "Till June 15 | Original: PKR 12,000",
                highlight: true,
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
                title: "100% Refund",
                description: "After 1st week if not satisfied",
              },
              {
                icon: <Users className="w-8 h-8 text-emerald-600" />,
                title: "Financial Aid Available",
                description: "Don't let cost be a barrier",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
                title: "First Cohort: July",
                description: "Second Cohort: August",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`p-6 h-full border-0 shadow-md hover:shadow-lg transition-all ${
                    item.highlight
                      ? "bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-500"
                      : "bg-white"
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Meet Your Instructors</h2>
              <p className="text-xl text-slate-600 italic">
                "We've been exactly where you are. That's why we built this."
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                emoji: "👩‍⚕️",
                name: "Instructor 1",
                title: "From Medicine → CS Success",
                bio: "Transitioned from medical field to computer science, now working at Educative. Understands the challenges of switching fields and learning CS from scratch.",
              },
              {
                emoji: "👨‍🔬",
                name: "Instructor 2",
                title: "Researcher @ VT & Entrepreneur",
                bio: "Active researcher at Virginia Tech and successful entrepreneur. Passionate about bridging gaps through technology and making CS accessible.",
              },
            ].map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-24"></div>
                  <CardContent className="pt-0 pb-8 px-8">
                    <div className="flex justify-center -mt-12">
                      <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                        <span className="text-4xl">{instructor.emoji}</span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                      <p className="text-emerald-600 font-medium mb-4">{instructor.title}</p>
                      <p className="text-slate-600">{instructor.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Curriculum Overview</h2>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  week: "1-2",
                  title: "Intro to CS",
                  description: "Thinking Like a Developer, Problem-solving fundamentals",
                },
                {
                  week: "3-4",
                  title: "Scratch Programming",
                  description: "Visual programming, Logic building, Creative projects",
                },
                {
                  week: "5-6",
                  title: "Python",
                  description: "Text-based programming, Data structures, Real applications",
                },
                {
                  week: "7-8",
                  title: "C++ & Project",
                  description: "Lower-level programming, Final beginner project",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {index < 3 && <div className="absolute left-4 top-12 w-0.5 h-16 bg-emerald-200"></div>}
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold shadow-md">
                      {index + 1}
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-100 flex-1">
                      <div className="inline-block bg-emerald-50 text-emerald-600 text-xs font-medium px-2 py-1 rounded-full mb-2">
                        Week {item.week}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-emerald-200 bg-white text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 rounded-full shadow-sm"
              >
                View Full Curriculum PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-16">Why This Course Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "90%+",
                text: "Past students felt more prepared for CS101",
              },
              {
                number: "100+",
                text: "Hours of mentorship offered",
              },
              {
                number: "100%",
                text: "Built for absolute beginners — no fluff",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-emerald-100">
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <p className="text-slate-600">{stat.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
            >
              {[
                {
                  question: "What if I've never coded before?",
                  answer:
                    "Perfect! This course is designed specifically for absolute beginners. We start with visual programming in Scratch before moving to text-based languages, ensuring you build confidence at every step.",
                },
                {
                  question: "What do I need to attend?",
                  answer:
                    "Just a computer with internet connection. We'll guide you through setting up all necessary software during the first session. No prior installations required.",
                },
                {
                  question: "Can I switch to the August cohort?",
                  answer:
                    "Yes! If you register for July but need to switch to August, just let us know at least one week before the July cohort starts. Your payment will transfer over.",
                },
                {
                  question: "How do I apply for financial aid?",
                  answer:
                    "Send us an email explaining your situation. We believe cost shouldn't be a barrier to learning, and we'll work with you to find a solution that fits your budget.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border-b border-slate-100 last:border-0"
                >
                  <AccordionTrigger className="py-5 px-6 hover:no-underline hover:bg-slate-50 text-left text-slate-800 font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-2 text-slate-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="register"
        className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Headstart in CS Before Everyone Else</h2>
            <p className="text-xl mb-8 text-emerald-100">
              No jargon. No pressure. Just guidance from people who've been there.
            </p>

            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg mb-12 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Register Now – Starts July 1
            </Button>

            <div className="max-w-2xl mx-auto bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-xl">
              <h3 className="text-xl font-semibold mb-6">Bank Details for Payment</h3>
              <div className="text-left space-y-3 text-emerald-50 bg-white/5 p-6 rounded-xl mb-6">
                <p>
                  <strong className="font-medium">Bank:</strong> [Your Bank Name]
                </p>
                <p>
                  <strong className="font-medium">Account:</strong> [Account Number]
                </p>
                <p>
                  <strong className="font-medium">Title:</strong> [Account Title]
                </p>
              </div>
              <p className="text-emerald-100">
                Once paid, fill this{" "}
                <a
                  href="#"
                  className="text-white underline decoration-2 decoration-white/30 hover:decoration-white/80 transition-all font-medium"
                >
                  Google Form
                </a>{" "}
                to confirm registration.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 md:hidden z-40 shadow-lg border-t border-slate-100">
        <Button
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 rounded-full shadow-md"
          onClick={() => scrollToSection("register")}
        >
          Register Now - PKR 5,000
        </Button>
      </div>
    </div>
  )
}
