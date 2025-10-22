"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Clock, ThumbsUp } from "lucide-react"

const stats = [
  { icon: Award, value: "4+", label: "Años de Experiencia" },
  { icon: Users, value: "100+", label: "Eventos Realizados" },
  { icon: Clock, value: "24/7", label: "Soporte Disponible" },
  { icon: ThumbsUp, value: "100%", label: "Clientes Satisfechos" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nosotros" className="py-14 bg-[#0a0a0a] overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre <span className="text-[#007BFF]">Nosotros</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Brindamos sonido e iluminación profesional para todo tipo de eventos, con equipos de última generación y atención personalizada.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-[#007BFF]/10 rounded-lg">
                    <stat.icon className="w-6 h-6 text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/professional-audio-engineer-setting-up-equipment-a.jpg"
                alt="Nuestro equipo profesional"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#007BFF]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#00AEEF]/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
