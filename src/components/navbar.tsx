"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      // Add background blur when scrolled
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-[#2a2a2a]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold text-white">
              <span className="text-[#007BFF]">Ig</span>.Producciones
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-[#007BFF] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-[#007BFF] hover:bg-[#0066cc] text-white rounded-lg">
                <a
                  href="https://wa.me/5491112345678?text=Hola!%20Quiero%20consultar%20por%20alquiler%20de%20equipos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-[#1a1a1a] z-50 md:hidden border-l border-[#2a2a2a]"
          >
            <div className="flex flex-col p-6 gap-6">
              <button onClick={() => setIsMobileMenuOpen(false)} className="self-end text-white p-2">
                <X size={24} />
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-[#007BFF] transition-colors duration-200 text-lg"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-[#007BFF] hover:bg-[#0066cc] text-white rounded-lg mt-4">
                <a
                  href="https://wa.me/5491154193863?text=Hola!%20Quiero%20consultar%20por%20alquiler%20de%20equipos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
