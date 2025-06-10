"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE8DF] via-white to-[#F8F8F8] dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/a.jpg?height=1080&width=1920')] bg-cover bg-center"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark"></div>
      </div>

      {/* Animated shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 left-10 w-20 h-20 bg-[#FF6B35]/10 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-20 right-10 w-16 h-16 bg-[#FF6B35]/20 rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#FF6B35]/10 rounded-full"
      ></motion.div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center md:text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#FFE8DF] dark:bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-medium mb-6">
                Movimiento con Propósito
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-[#333333] dark:text-white mb-6 leading-tight tracking-tight"
            >
              Rehabilitación que te{" "}
              <span className="text-[#FF6B35]">Impulsa</span>, Movimiento que te{" "}
              <span className="text-[#FF6B35]">Transforma</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-md md:text-md text-[#777777] dark:text-gray-300 mb-8 leading-relaxed"
            >
              En SOMA acompañamos tu recuperación con un enfoque integral y
              técnicas basadas en evidencia. Nuestro objetivo es que te sientas
              mejor, más fuerte y en movimiento, siempre.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#E65C2E] text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <Link href="https://wa.me/5402645605270" target="_blank">
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Reservá tu Consulta
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <Link href="#servicios">Ver Servicios</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="hidden md:block relative"
          >
            <div className="relative w-full h-[300px]">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF6B35]/10 rounded-full filter blur-3xl"></div>
              <Image
                src="/a.jpeg?height=600&width=500"
                alt="Rehabilitación en movimiento"
                width={400}
                height={500}
                className="relative z-10 rounded-2xl shadow-2xl object-cover mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF6B35] rounded-full opacity-20 filter blur-xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
