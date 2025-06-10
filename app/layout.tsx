import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/use-toast"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SOMA - Rehabilitación en Movimiento | Kinesiología en San Juan",
  description:
    "Centro de rehabilitación especializado en kinesiología, RPG, terapias manuales y ejercicio adaptado. Atención personalizada en San Juan, Argentina.",
  keywords:
    "kinesiología, rehabilitación, RPG, fisioterapia, San Juan, Argentina, terapias manuales, ejercicio adaptado",
  authors: [{ name: "SOMA Rehabilitación" }],
  openGraph: {
    title: "SOMA - Rehabilitación en Movimiento",
    description: "Centro de rehabilitación especializado en kinesiología y terapias manuales en San Juan",
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
