"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
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

interface ServiceModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-w-[95%] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#333333] flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#E65C2E] rounded-full flex items-center justify-center">
              <div className="text-white">{service.icon}</div>
            </div>
            {service.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[#333333] mb-2">Descripción</h3>
            <p className="text-[#777777]">
              {service.longDescription || service.description}
            </p>
          </div>

          {service.benefits && service.benefits.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Beneficios</h3>
              <ul className="list-disc list-inside space-y-2 text-[#777777]">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          

          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
            >
              Cerrar
            </Button>
            <Button
              className="bg-[#FF6B35] hover:bg-[#E65C2E] text-white"
              onClick={() => window.open("https://wa.me/5402645605270", "_blank")}
            >
              Reservar Ahora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 