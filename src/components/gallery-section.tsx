"use client"

import { motion } from "framer-motion"

const galleryImages = [
  { src: "/nightclub-lighting-effects-with-lasers.webp", alt: "Efectos especiales" },
  { src: "/professional-dj-equipment-setup-with-lights.webp", alt: "Equipo DJ profesional" },
  { src: "/large-speakers-at-outdoor-event.webp", alt: "Sistema de sonido en evento" },
  { src: "/wedding-reception-with-elegant-lighting.webp", alt: "Iluminación para bodas" },
  { src: "/corporate-event-with-professional-audio-setup.webp", alt: "Evento corporativo" },
  { src: "/concert-stage-with-blue-led-lights.webp", alt: "Iluminación LED en concierto" },
]

function ContinuousMarquee({ images, reverse = false }: { images: typeof galleryImages; reverse?: boolean }) {
  const allImages = [...images, ...images]
  const totalWidth = images.length * (288 + 24) // ancho + gap

  return (
    <div className="overflow-hidden whitespace-nowrap py-4">
      <motion.div
        className="inline-flex gap-6"
        style={{ x: 0 }}
        animate={{ x: reverse ? [-totalWidth, 0] : [0, -totalWidth] }}
        transition={{
          x: { repeat: Infinity, duration: images.length * 6, ease: "linear" },
        }}
      >
        {allImages.map((image, index) => (
          <div key={index} className="inline-block w-72 h-64 md:w-96 md:h-80 flex-shrink-0 cursor-pointer">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function GallerySection() {
  const firstThree = galleryImages.slice(0, 3)
  const lastThree = galleryImages.slice(3, 6)

  return (
    <section id="galeria" className="py-14 md:py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-[#007BFF]">Galería</span> de Eventos
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Mirá algunos de los eventos que equipamos
        </p>
      </div>

      {/* Carrusel 1 - izquierda a derecha */}
      <ContinuousMarquee images={firstThree} />

      {/* Carrusel 2 - derecha a izquierda */}
      <ContinuousMarquee images={lastThree} reverse />
    </section>
  )
}
