import { Instagram, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-[#007BFF]">Ig</span>.Producciones
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Equipos profesionales de sonido e iluminación para eventos inolvidables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-[#007BFF] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-[#007BFF] transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-[#007BFF] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-[#007BFF] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Seguinos</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com/ig.producciones/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#007BFF] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/5491154193863"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#007BFF] transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
          <div className="border-t border-[#2a2a2a] pt-8 text-center text-gray-400 text-sm ">
            © 2025 Ig.Producciones. Todos los derechos reservados.
            <br />
            <div className="mt-2.5 font-bold">
            Hecho por{" "}
            <a
              href="https://www.instagram.com/TucciWebStudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007BFF] hover:underline"
            >
              TucciWebStudio
            </a>
            </div>
          </div>
      </div>
    </footer>
  )
}
