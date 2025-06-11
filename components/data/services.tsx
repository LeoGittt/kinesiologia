"use client"

import { Activity, Dumbbell, Heart, Target, Shield, Zap, Users, Wind, StretchHorizontal } from "lucide-react"

export const services = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Kinesiología Traumatológica",
    description: "Tratamiento especializado para lesiones musculoesqueléticas y recuperación pre y post-quirúrgica.",
    longDescription: "La Kinesiología Traumatológica se enfoca en la rehabilitación de lesiones óseas, articulares y musculares. Utilizamos técnicas específicas como terapia manual, ejercicios terapéuticos y electroterapia para facilitar una recuperación segura y efectiva.",
    benefits: [
      "Recuperación funcional",
      "Disminución del dolor",
      "Reeducación postural",
      "Mejora de la movilidad",
      "Fortalecimiento segmentario",
      "Prevención de recaídas"
    ],
    duration: "Sesiones de 45-60 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Rehabilitación Deportiva",
    description: "Programas de recuperación y prevención de lesiones para deportistas.",
    longDescription: "Diseñado para atletas, este servicio combina evaluación biomecánica, fortalecimiento muscular y planificación del retorno al deporte. Nos enfocamos en prevenir lesiones y mejorar el rendimiento físico con abordaje integral.",
    benefits: [
      "Evaluación funcional",
      "Fortalecimiento preventivo",
      "Retorno seguro a la actividad",
      "Mejora de la técnica",
      "Reeducación motora",
      "Prevención de nuevas lesiones"
    ],
    duration: "Sesiones de 60 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Kinesiología Respiratoria",
    description: "Tratamiento para mejorar la función pulmonar y la mecánica respiratoria.",
    longDescription: "Indicada para personas con enfermedades respiratorias crónicas o agudas, esta especialidad trabaja sobre la ventilación, higiene bronquial y capacidad funcional. Utilizamos técnicas manuales, ejercicios respiratorios y aparatos específicos.",
    benefits: [
      "Mejora de la oxigenación",
      "Limpieza bronquial",
      "Reducción de disnea",
      "Mejora de la capacidad pulmonar",
      "Prevención de infecciones",
      "Educación respiratoria"
    ],
    duration: "Sesiones de 30-45 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "RPG - Reeducación Postural Global",
    description: "Método terapéutico para corregir postura y aliviar dolores crónicos. Tratamiento personalizado que combina posturas, técnicas articulares y respiratorias, contracciones musculares y más.",
    longDescription: "La RPG trabaja sobre cadenas musculares para corregir desequilibrios posturales. Se basa en estiramientos activos y respiración consciente para mejorar la postura, aliviar tensiones y prevenir dolencias a largo plazo.",
    benefits: [
      "Corrección postural",
      "Alivio de dolores crónicos",
      "Mayor flexibilidad",
      "Mejor alineación corporal",
      "Prevención de lesiones",
      "Conciencia corporal"
    ],
    duration: "Sesiones de 60 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Kinefilaxia - Prevención de Lesiones",
    description: "Ejercicios terapéuticos para mantener la salud y prevenir lesiones.",
    longDescription: "Este servicio promueve la actividad física controlada para prevenir patologías musculoesqueléticas. Se trabaja con programas personalizados de movilidad, fuerza, postura y equilibrio, enfocados en la prevención.",
    benefits: [
      "Prevención de lesiones",
      "Mejora funcional",
      "Aumento de la fuerza",
      "Mejor postura",
      "Mayor conciencia corporal",
      "Salud a largo plazo"
    ],
    duration: "Sesiones de 45 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Terapias Manuales",
    description: "Incluye técnicas osteopáticas y de RPG.",
    longDescription: "Incluye técnicas osteopáticas, RPG, movilizaciones articulares, liberación miofascial y otras técnicas manuales adaptadas a la necesidad del paciente. Ideal para aliviar tensiones, mejorar movilidad y promover bienestar general.",
    benefits: [
      "Alivio inmediato del dolor",
      "Mejora de la circulación",
      "Mayor movilidad articular",
      "Liberación miofascial",
      "Reducción de contracturas",
      "Relajación profunda"
    ],
    duration: "Sesiones de 45-60 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Ejercicio Físico Adaptado",
    description: "Clases personalizadas para personas con distintas condiciones de salud.",
    longDescription: "El ejercicio adaptado está diseñado para personas con patologías o necesidades especiales. Se personaliza cada clase teniendo en cuenta diagnóstico médico, objetivos funcionales y capacidades físicas individuales.",
    benefits: [
      "Entrenamiento seguro",
      "Mejora de la capacidad funcional",
      "Prevención de recaídas",
      "Aumento de la autonomía",
      "Fortalecimiento gradual",
      "Acompañamiento profesional"
    ],
    duration: "Sesiones de 60 minutos",
    price: "Consultar por WhatsApp"
  },
  {
    icon: <StretchHorizontal className="w-8 h-8" />,
    title: "Clases de Stretching",
    description: "Sesiones grupales o individuales de estiramiento consciente y guiado.",
    longDescription: "Orientadas a mejorar la flexibilidad y liberar tensiones musculares, estas clases combinan estiramientos activos, pasivos y técnicas de respiración. Son ideales para complementar otros tratamientos y mejorar el bienestar corporal general.",
    benefits: [
      "Mayor flexibilidad",
      "Disminución de tensiones",
      "Prevención de lesiones",
      "Mejora postural",
      "Relajación corporal",
      "Aumento del rango de movimiento"
    ],
    duration: "Sesiones de 45 minutos",
    price: "Consultar por WhatsApp"
  }
]
