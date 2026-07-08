import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Phone, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-nagare-black pt-32 pb-16 overflow-hidden border-t border-nagare-gray/10">
      
      {/* Background soft ambient light mimicking quiet moving water */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-nagare-cyan/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* FINAL CTA PANEL */}
        <div className="border-b border-nagare-gray/10 pb-24 md:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-8 max-w-2xl">
              <span className="text-[10px] tracking-[0.6em] font-mono text-nagare-gray/50 uppercase block mb-6 font-semibold">
                • TU PRÓXIMO ESPACIO
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-light text-nagare-white tracking-tight leading-none mb-8">
                Hablemos de tu proyecto.
              </h2>
              <p className="font-sans text-lg text-nagare-gray/70 font-light leading-relaxed tracking-wide">
                Cada espacio tiene necesidades diferentes. Diseñemos juntos una solución tecnológica imperceptible que simplemente funcione, permitiendo que la ingeniería sea invisible y el disfrute sea total.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenContact}
                className="group relative inline-flex items-center justify-center gap-3 bg-nagare-white hover:bg-nagare-cyan text-nagare-black px-10 py-5 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 rounded-none w-full sm:w-auto cursor-pointer shadow-sm"
              >
                Solicitar asesoría
                <ArrowUpRight className="w-4 h-4 text-nagare-black transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>
        </div>

        {/* FOOTER DIRECTORY */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-24 border-b border-nagare-gray/10">
          
          {/* Logo Brand Descriptor (Columns 1-5) */}
          <div className="md:col-span-5 flex flex-col items-start space-y-8">
            <div className="flex flex-col items-start select-none">
              <span className="font-display text-2xl font-light tracking-[0.25em] text-nagare-white">
                NAGARE
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-nagare-gray/40 -mt-0.5 font-mono font-medium">
                INGENIERÍA DE SISTEMAS
              </span>
            </div>
            
            <p className="text-sm text-nagare-gray/70 max-w-xs font-light leading-relaxed tracking-wide">
              Diseñamos infraestructuras imperceptibles que garantizan conectividad estable, protección y tranquilidad absoluta.
            </p>

            <span className="text-xs text-nagare-cyan/80 font-mono font-medium tracking-[0.2em] uppercase">
              gruponagare.com
            </span>
          </div>

          {/* Contact Node Details (Columns 6-9) */}
          <div className="md:col-span-4 flex flex-col space-y-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-nagare-gray/40 uppercase font-semibold">
              Contacto Directo
            </span>

            <div className="space-y-4 font-sans">
              <a 
                href="mailto:contacto@gruponagare.com"
                className="flex items-center gap-3 group text-sm text-nagare-gray/80 hover:text-nagare-cyan transition-colors duration-300"
              >
                <div className="p-2 border border-nagare-gray/10 bg-transparent group-hover:border-nagare-cyan/40 transition-colors duration-300">
                  <Mail className="w-3.5 h-3.5 text-nagare-gray/40 group-hover:text-nagare-cyan transition-colors" />
                </div>
                <span className="font-light tracking-wide">contacto@gruponagare.com</span>
              </a>

              <a 
                href="tel:+525585263040"
                className="flex items-center gap-3 group text-sm text-nagare-gray/80 hover:text-nagare-cyan transition-colors duration-300"
              >
                <div className="p-2 border border-nagare-gray/10 bg-transparent group-hover:border-nagare-cyan/40 transition-colors duration-300">
                  <Phone className="w-3.5 h-3.5 text-nagare-gray/40 group-hover:text-nagare-cyan transition-colors" />
                </div>
                <span className="font-light tracking-wide">+52 (55) 8526 3040</span>
              </a>

              <a 
                href="https://wa.me/525585263040" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group text-sm text-nagare-gray/80 hover:text-nagare-cyan transition-colors duration-300"
              >
                <div className="p-2 border border-nagare-gray/10 bg-transparent group-hover:border-nagare-cyan/40 transition-colors duration-300">
                  <MessageSquare className="w-3.5 h-3.5 text-nagare-gray/40 group-hover:text-nagare-cyan transition-colors" />
                </div>
                <span className="font-light tracking-wide">Mensaje WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Social Links & Navigation (Columns 10-12) */}
          <div className="md:col-span-3 flex flex-col space-y-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-nagare-gray/40 uppercase font-semibold">
              Redes & Legal
            </span>

            <div className="flex flex-col space-y-3 text-sm text-nagare-gray/80">
              <a href="#" className="hover:text-nagare-cyan tracking-[0.15em] font-light transition-colors duration-300 uppercase text-xs">Instagram</a>
              <a href="#" className="hover:text-nagare-cyan tracking-[0.15em] font-light transition-colors duration-300 uppercase text-xs">LinkedIn</a>
              <a href="#" className="hover:text-nagare-cyan tracking-[0.15em] font-light transition-colors duration-300 uppercase text-xs">Vimeo</a>
              <div className="pt-4 border-t border-nagare-gray/10 mt-2">
                <a 
                  href="#" 
                  className="text-[10px] font-mono tracking-widest uppercase text-nagare-gray/30 hover:text-nagare-white transition-colors duration-300"
                >
                  Aviso de Privacidad
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12">
          
          <div className="text-[10px] font-mono text-nagare-gray/30 tracking-[0.4em] text-center sm:text-left font-semibold">
            NAGARE © 2026. TODOS LOS DERECHOS RESERVADOS.
          </div>

          {/* Return To Top Arrow */}
          <button
            onClick={scrollToTop}
            className="group p-3 border border-nagare-gray/10 bg-transparent hover:border-nagare-cyan hover:bg-nagare-cyan/5 transition-all rounded-none cursor-pointer flex items-center justify-center shadow-sm"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 text-nagare-gray/40 group-hover:text-nagare-cyan group-hover:-translate-y-0.5 transition-all duration-300" />
          </button>

        </div>

      </div>
    </footer>
  );
}
