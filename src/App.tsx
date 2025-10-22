import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
