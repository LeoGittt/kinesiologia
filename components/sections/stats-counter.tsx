"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Users, Award, Calendar, Smile } from "lucide-react"
import { motion } from "framer-motion"

type StatsCounterProps = {
  stats: {
    label: string;
    value: string;
  }[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} inView={inView} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ stat, inView, index }: { stat: { label: string; value: string }; inView: boolean; index: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000 // ms
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    const easeOutQuad = (t: number) => t * (2 - t)

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuad(frame / totalFrames)
      setCount(Math.floor(progress * stat.value))

      if (frame === totalFrames) {
        clearInterval(counter)
        setCount(stat.value)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [inView, stat.value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#E65C2E] rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-white">{stat.icon}</div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-[#333333] mb-2">
        {count}
        {stat.suffix}
      </div>
      <p className="text-[#777777] font-medium">{stat.label}</p>
    </motion.div>
  )
}
