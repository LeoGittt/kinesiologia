"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function RpgSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="rpg" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFE8DF] text-[#FF6B35] text-sm font-medium mb-4">
              Nuestra Especialidad
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              <span className="text-[#FF6B35]">RPG</span> - Reeducación Postural Global
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#E65C2E] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg text-[#777777] leading-relaxed">
                Es un método de terapia manual que se basa en la idea de que las estructuras del cuerpo están
                interrelacionadas, influyendo a lo largo de todo el cuerpo. Por eso, es necesario abordarlas de manera
                global, considerando a la persona como un todo integrado.
              </p>

              <div className="bg-[#FFE8DF] p-6 rounded-xl border-l-4 border-[#FF6B35]">
                <p className="text-[#333333] font-semibold text-lg mb-2">
                  Lo que buscamos es encontrar el origen y sus consecuencias, no solo tratar un síntoma.
                </p>
              </div>

              <p className="text-lg text-[#777777] leading-relaxed">
                El objetivo principal es liberar las tensiones miofasciales y corregir alteraciones posturales, lo que
                puede aliviar el dolor, mejorar la movilidad corporal disminuyendo su rigidez y promover una mejor
                postura.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#FF6B35]/20 rounded-full filter blur-xl"></div>
              <Image
                src="/f.jpg?height=500&width=600"
                alt="RPG - Reeducación Postural Global"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF6B35]/30 rounded-full filter blur-xl"></div>
            </motion.div>
          </div>

          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#E65C2E] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link href="https://wa.me/5402645605270" target="_blank">
                <Phone className="w-5 h-5 mr-2" />
                Consulta sobre RPG
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
