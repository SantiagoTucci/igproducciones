"use client"

import { Variants } from "framer-motion"
import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const textItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
}

export function HeroSection() {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })
  }

  // Motion values para luz
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 })
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 })

  const lightGradient = useTransform(
    [smoothX, smoothY] as MotionValue<number>[],
    ([latestX, latestY]: number[]) =>
      `radial-gradient(600px circle at ${latestX * 100}% ${latestY * 100}%, rgba(0,123,255,0.25), transparent 60%)`
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth)
      y.set(e.clientY / window.innerHeight)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-concert-stage-with-speakers-and-blue-.jpg"
          alt="Professional sound and lighting equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      {/* Luz dinámica */}
      <motion.div className="absolute inset-0 pointer-events-none z-10" style={{ background: lightGradient }} />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <motion.div
        className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center"
        variants={textContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance"
          variants={textItem}
        >
          Equipos de Sonido e Iluminación <span className="text-[#007BFF]">Profesional</span> para tu Evento
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto text-pretty"
          variants={textItem}
        >
          Alquilá lo que necesitás, con la mejor calidad y atención personalizada.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={textItem}>
          <Button
            asChild
            size="lg"
            className="bg-[#007BFF] hover:bg-[#0066cc] text-white text-lg px-8 py-6 rounded-lg shadow-lg shadow-[#007BFF]/20 transition-all duration-300 hover:shadow-[#007BFF]/40"
          >
            <a href="#servicios" onClick={handleScrollToServices}>
              Ver Servicios
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white text-lg px-8 py-6 rounded-lg transition-all duration-300 bg-transparent"
          >
            <a
              href="https://wa.me/5491112345678?text=Hola!%20Quiero%20consultar%20por%20alquiler%20de%20equipos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
