"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"

export default function EarlyBirdCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // This effect runs only on the client
    setIsClient(true)

    const calculateTimeLeft = () => {
      const difference = +new Date("2024-07-23T00:00:00") - +new Date()
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    // Set the initial time left
    setTimeLeft(calculateTimeLeft())

    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Clean up the interval on component unmount
    return () => clearInterval(timer)
  }, [])

  // To prevent hydration mismatch, we'll render nothing on the server
  if (!isClient) {
    return null
  }

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <div key={interval} className="flex flex-col items-center">
      <span className="text-2xl sm:text-3xl font-bold">{String(value).padStart(2, '0')}</span>
      <span className="text-xs sm:text-sm uppercase tracking-wider">{interval}</span>
    </div>
  ))

  const isTimeUp = !timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="mt-8 sm:mt-12"
    >
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 sm:p-5 max-w-md mx-auto">
        <p className="text-center font-semibold text-emerald-800 mb-3 text-sm sm:text-base">
          <Zap className="inline-block w-5 h-5 mr-2 text-amber-500" />
          Early Bird Discount Ends In:
        </p>
        <div className="flex justify-around text-emerald-900">
          {isTimeUp ? <span>Time's up!</span> : timerComponents}
        </div>
      </div>
    </motion.div>
  )
} 