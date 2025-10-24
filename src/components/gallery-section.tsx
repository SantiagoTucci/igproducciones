"use client"

import { motion } from "framer-motion"

const galleryImages = [
  { src: "/nightclub-lighting-effects-with-lasers.webp", alt: "Efectos especiales" },
  { src: "/professional-dj-equipment-setup-with-lights.webp", alt: "Equipo DJ profesional" },
  { src: "/large-speakers-at-outdoor-event.webp", alt: "Sistema de sonido en evento" },
  { src: "/imageCaroussel2.webp", alt: "Equipo de sonido" },
  { src: "/imageCaroussel1.webp", alt: "Tabla de DJ" },
  { src: "/wedding-reception-with-elegant-lighting.webp", alt: "Iluminación para bodas" },
  { src: "/corporate-event-with-professional-audio-setup.webp", alt: "Evento corporativo" },
  { src: "/concert-stage-with-blue-led-lights.webp", alt: "Iluminación LED en concierto" },
]

function ContinuousMarquee({ images, reverse = false }: { images: typeof galleryImages; reverse?: boolean }) {
  const allImages = [...images, ...images]

  return (
    <div className="overflow-hidden py-4 relative">
      <motion.div
        className="flex gap-6"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // velocidad del desplazamiento
          ease: "linear",
        }}
        style={{ width: "200%" }} // el doble del ancho visible
      >
        {allImages.map((image, index) => (
          <div
            key={index}
            className="w-72 h-64 md:w-120 md:h-70 flex-shrink-0 cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function GallerySection() {
  const firstHalf = galleryImages.slice(0, 4)
  const secondHalf = galleryImages.slice(4, 8)

  return (
    <section id="galeria" className="py-18 md:py-22 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-[#007BFF]">Galería</span> de Eventos
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Mirá algunos de los eventos que equipamos
        </p>
      </div>

      {/* Carrusel 1 - izquierda a derecha */}
      <ContinuousMarquee images={firstHalf} />

      {/* Carrusel 2 - derecha a izquierda */}
      <ContinuousMarquee images={secondHalf} reverse />
    </section>
  )
}
