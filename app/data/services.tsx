"use client"

import { Activity, Dumbbell, Heart, Target, Shield, Zap, Users } from "lucide-react"

export const services = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Kinesiología Traumatológica",
    description: "Tratamiento especializado para lesiones musculoesqueléticas y recuperación post-quirúrgica.",
    longDescription: "La Kinesiología Traumatológica es una especialidad que se enfoca en el tratamiento y rehabilitación de lesiones del sistema musculoesquelético. Nuestro equipo de profesionales altamente capacitados utiliza técnicas avanzadas para tratar lesiones deportivas, accidentes, y recuperación post-quirúrgica. Desarrollamos planes de tratamiento personalizados que incluyen terapia manual, ejercicios terapéuticos y técnicas de rehabilitación específicas para cada caso.",
    benefits: [
      "Recuperación acelerada de lesiones",
      "Prevención de recaídas",
      "Mejora de la movilidad y flexibilidad",
      "Reducción del dolor y la inflamación",
      "Fortalecimiento muscular específico",
      "Reeducación postural"
    ],
    duration: "Sesiones de 45-60 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Rehabilitación Deportiva",
    description: "Programas de recuperación y prevención de lesiones para deportistas de todos los niveles.",
    longDescription: "Nuestro programa de Rehabilitación Deportiva está diseñado específicamente para atletas y deportistas que buscan recuperarse de lesiones o mejorar su rendimiento. Utilizamos técnicas de vanguardia y equipamiento especializado para asegurar una recuperación óptima y prevenir futuras lesiones. El programa incluye evaluación biomecánica, fortalecimiento específico, y planificación de retorno al deporte.",
    benefits: [
      "Evaluación biomecánica completa",
      "Programas de fortalecimiento específicos",
      "Prevención de lesiones deportivas",
      "Mejora del rendimiento atlético",
      "Recuperación acelerada",
      "Planificación de retorno al deporte"
    ],
    duration: "Sesiones de 60 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "RPG (Reeducación Postural Global)",
    description: "Método terapéutico que busca corregir la postura y aliviar el dolor crónico.",
    longDescription: "La RPG es un método terapéutico revolucionario que busca corregir la postura y aliviar el dolor crónico mediante ejercicios específicos y estiramientos. Este método se basa en la idea de que el cuerpo funciona como una unidad, y que los problemas en una parte pueden afectar a todo el sistema. Nuestros especialistas en RPG trabajan para identificar y corregir las causas raíz de los problemas posturales.",
    benefits: [
      "Corrección de la postura",
      "Alivio del dolor crónico",
      "Mejora de la respiración",
      "Mayor flexibilidad",
      "Prevención de lesiones",
      "Bienestar general"
    ],
    duration: "Sesiones de 60 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Kinefilaxia",
    description: "Prevención y mantenimiento de la salud a través de ejercicios terapéuticos.",
    longDescription: "La Kinefilaxia se enfoca en la prevención y mantenimiento de la salud a través de ejercicios terapéuticos específicos. Este servicio está diseñado para personas que buscan mantener su salud física y prevenir problemas futuros. Desarrollamos programas personalizados que incluyen ejercicios de fortalecimiento, flexibilidad y equilibrio, adaptados a las necesidades y objetivos de cada persona.",
    benefits: [
      "Prevención de lesiones",
      "Mantenimiento de la salud",
      "Mejora de la postura",
      "Aumento de la fuerza y resistencia",
      "Mejora del equilibrio",
      "Bienestar general"
    ],
    duration: "Sesiones de 45 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Terapias Manuales",
    description: "Técnicas manuales especializadas para el tratamiento de diversas condiciones.",
    longDescription: "Nuestras Terapias Manuales incluyen una variedad de técnicas especializadas como masaje terapéutico, movilización articular, y técnicas de liberación miofascial. Estas técnicas son efectivas para tratar una amplia gama de condiciones, desde dolores musculares hasta problemas de movilidad. Nuestros terapeutas están altamente capacitados en diversas técnicas manuales y las adaptan según las necesidades específicas de cada paciente.",
    benefits: [
      "Alivio del dolor muscular",
      "Mejora de la movilidad articular",
      "Reducción de la tensión muscular",
      "Mejora de la circulación",
      "Liberación de puntos gatillo",
      "Relajación profunda"
    ],
    duration: "Sesiones de 45-60 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Electroterapia",
    description: "Uso de corrientes eléctricas para el tratamiento del dolor y la recuperación muscular.",
    longDescription: "La Electroterapia utiliza corrientes eléctricas controladas para tratar diversas condiciones. Esta técnica es especialmente efectiva para el manejo del dolor, la recuperación muscular y la estimulación nerviosa. Utilizamos equipos de última generación y protocolos específicos para cada condición, asegurando un tratamiento seguro y efectivo.",
    benefits: [
      "Control del dolor",
      "Recuperación muscular acelerada",
      "Reducción de la inflamación",
      "Mejora de la circulación",
      "Estimulación nerviosa",
      "Fortalecimiento muscular"
    ],
    duration: "Sesiones de 30-45 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Terapia Grupal",
    description: "Sesiones de rehabilitación y ejercicio en grupo para mayor motivación y socialización.",
    longDescription: "Nuestras sesiones de Terapia Grupal combinan los beneficios de la rehabilitación con la motivación y socialización del trabajo en grupo. Estas sesiones están diseñadas para personas con condiciones similares o que buscan mejorar su condición física general. Los grupos son pequeños para asegurar atención personalizada y están supervisados por profesionales especializados.",
    benefits: [
      "Mayor motivación",
      "Socialización",
      "Aprendizaje grupal",
      "Ejercicios adaptados",
      "Supervisión profesional",
      "Ambiente de apoyo"
    ],
    duration: "Sesiones de 60 minutos",
    price: "Consultar por WhatsApp"
  }
] 