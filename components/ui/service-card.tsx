"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  longDescription?: string
  benefits?: string[]
  duration?: string
  price?: string
}

interface ServiceCardProps {
  service: Service
  index: number
  inView: boolean
  onOpenModal: (service: Service) => void
}

export default function ServiceCard({ service, index, onOpenModal }: ServiceCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  }

  return (
    <motion.div variants={itemVariants}>
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white h-full">
        <CardContent className="p-6 text-center h-full flex flex-col">
          <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#E65C2E] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <div className="text-white">{service.icon}</div>
          </div>
          <h3 className="text-lg font-semibold text-[#333333] mb-3 group-hover:text-[#FF6B35] transition-colors">
            {service.title}
          </h3>
          <p className="text-[#777777] text-sm leading-relaxed mb-4 flex-grow">
            {service.description}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-all duration-300 mt-auto"
            onClick={() => onOpenModal(service)}
          >
            Más Información
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
