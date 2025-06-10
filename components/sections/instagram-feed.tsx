"use client"

import { Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function InstagramFeed() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Simulamos posts de Instagram
  const instagramPosts = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=300",
      caption: "Sesión de RPG en acción 💪 #SOMA #RPG #Rehabilitacion",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=300",
      caption: "Ejercicios de stretching para mejorar la flexibilidad 🧘‍♀️",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=300",
      caption: "Rehabilitación deportiva personalizada 🏃‍♂️",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=300",
      caption: "Terapias manuales especializadas ✋",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=300",
      caption: "Nuestro equipo profesional en acción 👥",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=300&width=300",
      caption: "Ejercicio físico adaptado para cada paciente 💯",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-[#F8F8F8] dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFE8DF] dark:bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-medium mb-4">
            Síguenos en Instagram
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] dark:text-white mb-4">
            Nuestro <span className="text-[#FF6B35]">Día a Día</span>
          </h2>
          <p className="text-lg text-[#777777] dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Descubre más sobre nuestro trabajo y los resultados de nuestros pacientes
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://instagram.com/soma.enmovimiento"
              target="_blank"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>@soma.enmovimiento</span>
            </Link>
            <Link
              href="https://instagram.com/lic.florencialabatev"
              target="_blank"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>@lic.florencialabatev</span>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
