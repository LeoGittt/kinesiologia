"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

type TestimonialsSectionProps = {
  testimonials: {
    name: string;
    text: string;
    rating: number;
    image: string;
  }[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const nextTestimonial = () => {
    setAutoplay(false)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonios" ref={ref} className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFE8DF] dark:bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] dark:text-white mb-4">
            Lo que Dicen Nuestros <span className="text-[#FF6B35]">Pacientes</span>
          </h2>
          <p className="text-lg text-[#777777] dark:text-gray-300 max-w-2xl mx-auto">
            Testimonios reales de personas que han transformado su vida con nosotros
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-[#F8F8F8] dark:bg-gray-800 border-0 p-8 shadow-lg">
                  <CardContent className="text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#FF6B35] fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-[#333333] dark:text-white mb-6 italic leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                          alt={testimonials[currentTestimonial].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-[#333333] dark:text-white">
                          {testimonials[currentTestimonial].name}
                        </p>
                        <p className="text-[#777777] dark:text-gray-400 text-sm">Paciente SOMA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 shadow-lg rounded-full p-3 hover:bg-[#FF6B35] hover:text-white transition-all duration-300"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 shadow-lg rounded-full p-3 hover:bg-[#FF6B35] hover:text-white transition-all duration-300"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentTestimonial(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-[#FF6B35] w-6"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-[#FF6B35]/50"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
