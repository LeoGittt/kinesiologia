"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Instagram, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contacto" ref={ref} className="py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFE8DF] text-[#FF6B35] text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            <span className="text-[#FF6B35]">Contactanos</span>
          </h2>
          <p className="text-lg text-[#777777] max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Agenda tu consulta hoy mismo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Link href="https://wa.me/5402645605270" target="_blank">
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333333] mb-2">WhatsApp</h3>
                      <p className="text-[#777777]">
                        Envíanos un mensaje directo por WhatsApp
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://instagram.com/soma.enmovimiento" target="_blank">
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#333333] mb-2">Instagram</h3>
                      <p className="text-[#777777]">
                        Síguenos y contáctanos por Instagram
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#333333] mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Dirección</h4>
                      <p className="text-[#777777]">
                        República Argentina 467 (S)
                        <br />
                        San Juan, Argentina
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Horarios</h4>
                      <p className="text-[#777777]">
                        Lunes a Viernes: 9:00 - 19:00
                        <br />
                        Sábados: 9:00 - 13:00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="bg-white border-0 shadow-xl overflow-hidden">
              <Link 
                href="https://maps.app.goo.gl/AfR6CJroiAvTF2yXA?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block"
              >
                <div className="h-64 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.8!2d-68.5364!3d-31.5375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96816b6b0c0c0c0c%3A0x0!2zMzHCsDMyJzE1LjAiUyA2OMKwMzInMTEuMCJX!5e0!3m2!1sen!2sar!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: 'none' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white px-4 py-2 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Ver en Google Maps
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
