"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contacto" className="py-14 md:py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-[#007BFF]">Contacto</span>
            </h2>
            <p className="text-xl text-gray-400">¿Querés cotizar tu evento? Hablá con nosotros</p>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#007BFF]/20 to-[#00AEEF]/20 border-2 border-[#007BFF] rounded-2xl p-12 text-center mb-12"
          >
            <MessageCircle className="w-16 h-16 text-[#007BFF] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Consultá por WhatsApp</h3>
            <p className="text-md md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Respondemos todas tus consultas al instante. Contanos sobre tu evento y te armamos un presupuesto
              personalizado.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#007BFF] hover:bg-[#0066cc] text-white text-md md:px-8 md:py-6 px-6 py-5 rounded-lg shadow-lg shadow-[#007BFF]/30 transition-all duration-300 hover:shadow-[#007BFF]/50"
            >
              <a
                href="https://wa.me/5491154193863?text=Hola!%20Quiero%20cotizar%20mi%20evento"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciar conversación
              </a>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: "Teléfono", value: "+54 9 11 5419 3863" },
              { icon: Mail, title: "Email", value: "ig.producciones@gmail.com" },
              { icon: MapPin, title: "Ubicación", value: "Buenos Aires, Argentina" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 text-center hover:border-[#007BFF] transition-colors duration-300"
              >
                <item.icon className="w-8 h-8 text-[#007BFF] mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
