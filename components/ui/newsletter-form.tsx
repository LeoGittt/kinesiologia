"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setEmail("")
    setIsSubmitting(false)

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  if (isSubscribed) {
    return (
      <div className="flex items-center space-x-2 text-green-400">
        <Mail className="w-5 h-5" />
        <span>¡Gracias por suscribirte!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
        required
      />
      <Button type="submit" disabled={isSubmitting} className="bg-[#FF6B35] hover:bg-[#E65C2E] text-white">
        {isSubmitting ? "..." : "Suscribirse"}
      </Button>
    </form>
  )
}
