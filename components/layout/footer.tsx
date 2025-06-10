import { Activity, Instagram, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-[#333333] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#E65C2E] rounded-full flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SOMA</h3>
                <p className="text-sm text-[#777777]">Rehabilitación en Movimiento</p>
              </div>
            </div>
            <p className="text-[#777777] mb-6 leading-relaxed">
              Transformamos vidas a través del movimiento. Tu bienestar es nuestra misión.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://instagram.com/soma.enmovimiento"
                target="_blank"
                className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center hover:bg-[#E65C2E] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/5402645605270"
                target="_blank"
                className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#20BA5A] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Servicios</h4>
            <ul className="space-y-2 text-sm text-[#777777]">
              <li>
                <Link href="#servicios" className="hover:text-[#FF6B35] transition-colors">
                  Kinesiología Traumatológica
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#FF6B35] transition-colors">
                  Rehabilitación Deportiva
                </Link>
              </li>
              <li>
                <Link href="#rpg" className="hover:text-[#FF6B35] transition-colors">
                  RPG
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#FF6B35] transition-colors">
                  Kinefilaxia
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#FF6B35] transition-colors">
                  Terapias Manuales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
            <div className="space-y-4 text-sm text-[#777777]">
              <p className="flex items-start">
                <span className="bg-[#FF6B35]/20 p-1 rounded mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#FF6B35]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                República Argentina 467 (S)
                <br />
                San Juan, Argentina
              </p>
              <p className="flex items-start">
                <span className="bg-[#FF6B35]/20 p-1 rounded mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#FF6B35]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <Link href="https://wa.me/5402645605270" className="hover:text-[#FF6B35] transition-colors">
                  +54 264 560-5270
                </Link>
              </p>
              <p className="flex items-start">
                <span className="bg-[#FF6B35]/20 p-1 rounded mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#FF6B35]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Lun-Vie: 9:00 - 19:00
                <br />
                Sáb: 9:00 - 13:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-[#777777] text-sm">
            © {new Date().getFullYear()} SOMA Rehabilitación en Movimiento. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-sm">
            <Link href="#" className="text-[#777777] hover:text-[#FF6B35] transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-[#777777] hover:text-[#FF6B35] transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
