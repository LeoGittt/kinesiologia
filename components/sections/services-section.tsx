"use client"
import { Activity, Dumbbell, Heart, Target, Shield, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ServiceCard from "@/components/ui/service-card"
import ServiceModal from "@/components/ui/service-modal"
import { useState } from "react"
import { services } from "../data/services"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  longDescription?: string
  benefits?: string[]
  duration?: string
  price?: string
}

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  }

  return (
    <section 
      id="servicios" 
      ref={ref} 
      className="py-28 bg-gradient-to-b from-[#F9FAFB] to-[#F0F2F5] dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block py-2 px-4 rounded-full bg-[#FF6B35] bg-opacity-10 text-[#FF6B35] text-sm font-semibold mb-6 tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            Nuestras Especialidades
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Descubre Nuestros <br className="hidden sm:block" />
            <span className="text-[#FF6B35] relative inline-block">
              Servicios Exclusivos
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B35]"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Soluciones personalizadas para tu rehabilitación, bienestar y máximo potencial físico
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service: Service, index: number) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              inView={inView}
              onOpenModal={setSelectedService}
            />
          ))}
        </motion.div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  )
}