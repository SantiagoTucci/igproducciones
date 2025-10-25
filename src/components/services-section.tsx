"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Speaker, Music, Mic, Radio, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Lightbulb,
    title: "Luces LED",
    description: "Iluminación profesional LED con efectos dinámicos para crear la atmósfera perfecta.",
    price: "$40.000 / día",
    whatsappMessage: "Hola! Quiero consultar por alquiler de Luces LED",
  },
  {
    icon: Speaker,
    title: "Parlantes Potentes",
    description: "Sistemas de sonido de alta potencia para eventos de cualquier tamaño.",
    price: "$40.000 / día",
    whatsappMessage: "Hola! Quiero consultar por alquiler de Parlantes",
  },
  {
    icon: Music,
    title: "Combo DJ",
    description: "Equipo completo para DJ: consola, auriculares y todo lo necesario.",
    price: "$25.000 / día",
    whatsappMessage: "Hola! Quiero consultar por alquiler de Combo DJ",
  },
  {
    icon: Mic,
    title: "Micrófonos",
    description: "Micrófonos inalámbricos y con cable de alta calidad para presentaciones.",
    price: "$15.000 / día",
    whatsappMessage: "Hola! Quiero consultar por alquiler de Micrófonos",
  },
  {
    icon: Radio,
    title: "Efectos Especiales",
    description: "Máquinas de humo, láser y efectos especiales para eventos únicos.",
    price: "$30.000 / día",
    whatsappMessage: "Hola! Quiero consultar por alquiler de Efectos Especiales",
  },
  {
    icon: Zap,
    title: "Paquete Completo",
    description: "Todo incluido: sonido, iluminación y efectos para tu evento perfecto.",
    price: "$100.000 / día",
    whatsappMessage: "Hola! Quiero consultar por alquiler del Paquete Completo",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card className="relative bg-white/95 border border-gray-200 p-5 rounded-xl overflow-hidden h-full flex flex-col group transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(0,123,255,0.35)]">
        {/* Glow sutil al hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#007BFF]/20 via-transparent to-transparent blur-xl" />

        {/* Icono */}
        <div className="mb-3 p-2 bg-[#007BFF]/10 rounded-lg w-fit group-hover:bg-[#007BFF]/30 transition-colors duration-300">
          <service.icon className="w-6 h-6 text-[#007BFF]" />
        </div>

        {/* Contenido */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
        <p className="text-gray-600 text-xs mb-3 flex-grow">{service.description}</p>

        {/* Precio + Botón */}
        <div className="mt-auto">
          <p className="text-xl font-bold text-[#007BFF] mb-2">{service.price}</p>
          <a
            href={`https://wa.me/5491154193863?text=${encodeURIComponent(service.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#007BFF] hover:bg-[#0066cc] text-white text-xs py-2.5 rounded-md shadow-md 
                      shadow-[#007BFF]/30 hover:shadow-[#007BFF]/50 transition-all duration-300 font-medium"
          >
            Consultar
          </a>
        </div>
      </Card>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-16 md:py-22 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Título con animación */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Nuestros <span className="text-[#007BFF]">Servicios</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Equipos profesionales para todo tipo de eventos
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
