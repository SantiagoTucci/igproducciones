"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Speaker, Music, Mic, Radio, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-[#1a1a1a] box-border border-[#2a2a2a] p-6 rounded-xl hover:border-[#007BFF] transition-all duration-300 hover:shadow-lg hover:shadow-[#007BFF]/20 group h-full flex flex-col">
        <div className="mb-4 p-3 bg-[#007BFF]/10 rounded-lg w-fit group-hover:bg-[#007BFF]/20 transition-colors duration-300">
          <service.icon className="w-8 h-8 text-[#007BFF]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
        <div className="mt-auto">
          <p className="text-3xl font-bold text-[#007BFF] mb-4">{service.price}</p>
          <Button asChild className="w-full bg-[#007BFF] hover:bg-[#0066cc] text-white rounded-lg">
            <a
              href={`https://wa.me/5491154193863?text=${encodeURIComponent(service.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-[#007BFF]">Servicios</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Equipos profesionales para todo tipo de eventos</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
