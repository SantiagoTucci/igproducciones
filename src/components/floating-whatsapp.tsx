"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5491154193863?text=Hola!%20Quiero%20consultar%20por%20alquiler%20de%20equipos"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/50 transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  )
}
