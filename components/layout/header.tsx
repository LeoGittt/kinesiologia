"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Activity, Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "RPG", href: "#rpg" },
    
   
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/a.jpeg"
              alt="SOMA Logo"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-orange-500 tracking-tight">SOMA</h1>
              <p className="text-xs text-[#777777] font-medium">KINESIOLOGÍA Y FISIOTERAPIΑ</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-[#333333] hover:text-[#FF6B35] transition-colors font-medium"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Button
                asChild
                className="bg-[#FF6B35] hover:bg-[#E65C2E] text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Link href="https://wa.me/5402645605270" target="_blank">
                  Reservar Consulta
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
             
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
           
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#333333] hover:text-[#FF6B35] transition-colors"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#333333] hover:text-[#FF6B35] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-[#FF6B35] hover:bg-[#E65C2E] text-white w-full rounded-full">
                <Link href="https://wa.me/5402645605270" target="_blank">
                  Reservar Consulta
                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
