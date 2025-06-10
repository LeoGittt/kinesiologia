"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers = [
    {
      name: "Lic. Florencia Labate",
      role: "Kinesióloga Especialista en RPG",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lic. Martín Gómez",
      role: "Kinesiólogo Deportivo",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lic. Laura Sánchez",
      role: "Especialista en Terapias Manuales",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="nosotros" ref={ref} className="py-24 bg-[#F8F8F8] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFE8DF] dark:bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-medium mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] dark:text-white mb-4">
            Conoce a <span className="text-[#FF6B35]">Nuestro Equipo</span>
          </h2>
          <p className="text-lg text-[#777777] dark:text-gray-300 max-w-2xl mx-auto">
            Profesionales comprometidos con tu bienestar y recuperación
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#333333] dark:text-white mb-1">{member.name}</h3>
                  <p className="text-[#FF6B35]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mt-12"
          >
            <p className="text-2xl text-[#333333] dark:text-white font-semibold mb-6 text-center">
              "Creemos en el movimiento como terapia"
            </p>
            <p className="text-lg text-[#777777] dark:text-gray-300 leading-relaxed text-center">
              En SOMA, cada miembro de nuestro equipo está comprometido con tu bienestar. Combinamos experiencia
              profesional, técnicas avanzadas y un enfoque humano para brindarte la mejor atención en rehabilitación y
              movimiento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
