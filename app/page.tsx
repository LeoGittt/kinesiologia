"use client"
import { Heart, Users, Target, Activity, Zap, Shield, Dumbbell } from "lucide-react"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import RpgSection from "@/components/sections/rpg-section"
import AboutSection from "@/components/sections/about-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import StatsCounter from "@/components/sections/stats-counter"
import InstagramFeed from "@/components/sections/instagram-feed"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppButton from "@/components/ui/whatsapp-button"

const testimonials = [
  {
    name: "María González",
    text: "Después de meses de dolor de espalda, el tratamiento con RPG cambió mi vida. El equipo de SOMA es excepcional.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Carlos Rodríguez",
    text: "Como deportista, la rehabilitación deportiva me ayudó a volver más fuerte. Profesionales de primer nivel.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Martínez",
    text: "Las clases de ejercicio adaptado son perfectas. Atención personalizada y resultados increíbles.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

const stats = [
  { label: "Pacientes Atendidos", value: "1000+" },
  { label: "Años de Experiencia", value: "15" },
  { label: "Servicios Ofrecidos", value: "8" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white transition-colors duration-300">
      <WhatsAppButton />
      <Header />
      <HeroSection />
      <ServicesSection />
      <RpgSection />
      <ContactSection />
      <Footer/>
    </main>
  )
}
