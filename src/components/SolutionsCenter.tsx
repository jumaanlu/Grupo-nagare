import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface SolutionItem {
  name: string;
  description: string;
}

interface SolutionCategory {
  id: string;
  title: string;
  num: string;
  description: string;
  items: SolutionItem[];
}

export default function SolutionsCenter() {
  const [activeCategory, setActiveCategory] = useState<string>('network');

  const categories: SolutionCategory[] = useMemo(() => [
    {
      id: 'network',
      num: '01',
      title: 'Infraestructura de Red',
      description: 'Sistemas de comunicación físicos y lógicos diseñados para garantizar la estabilidad, velocidad y seguridad de su conectividad.',
      items: [
        { name: 'Cableado Estructurado', description: 'Canalizaciones y peinado de racks con certificación física de enlaces.' },
        { name: 'Fibra Óptica', description: 'Enlaces verticales de alta capacidad y fusión de fibra monomodo/multimodo.' },
        { name: 'WiFi Empresarial', description: 'Redes inalámbricas gestionadas con roaming transparente y portal cautivo.' },
        { name: 'Firewalls', description: 'Seguridad perimetral y administración de políticas de acceso a internet.' },
        { name: 'VPN', description: 'Túneles de comunicación cifrados para accesos remotos y enlaces sucursal-sucursal.' },
        { name: 'Internet Dedicado', description: 'Arquitecturas de redundancia Multi-WAN y balanceo inteligente de cargas.' }
      ]
    },
    {
      id: 'security',
      num: '02',
      title: 'Seguridad',
      description: 'Protección perimetral y control de accesos automatizados con monitoreo y analíticas inteligentes.',
      items: [
        { name: 'Cámaras de Seguridad', description: 'CCTV IP de alta resolución con analíticas avanzadas de detección y grabación RAID.' },
        { name: 'Control de Acceso', description: 'Sistemas peatonales y vehiculares mediante tarjetas RFID o credenciales móviles.' },
        { name: 'Biométricos', description: 'Reconocimiento facial y dactilar para control estricto de accesos y asistencia.' },
        { name: 'Videoporteros', description: 'Intercomunicadores IP con comunicación bidireccional y apertura remota.' },
        { name: 'Alarmas', description: 'Sistemas de intrusión cableados o inalámbricos con alertas instantáneas.' },
        { name: 'Monitoreo', description: 'Integración centralizada de alertas con respuesta y verificación visual remota.' }
      ]
    },
    {
      id: 'digital',
      num: '03',
      title: 'Desarrollo Digital',
      description: 'Soluciones de software y plataformas web de alto rendimiento diseñadas a la medida de su negocio.',
      items: [
        { name: 'Sitios Web', description: 'Páginas web corporativas interactivas con optimización SEO y carga inmediata.' },
        { name: 'Tiendas en Línea', description: 'E-commerce fluidos con pasarelas de pago y diseño centrado en la conversión.' },
        { name: 'Sistemas Web', description: 'Plataformas en la nube personalizadas para administrar procesos internos.' },
        { name: 'Apps Internas', description: 'Herramientas móviles e híbridas para la gestión operativa en campo.' },
        { name: 'Integraciones', description: 'Conexión entre sistemas existentes vía APIs, mensajería y automatización.' },
        { name: 'Automatización con IA', description: 'Flujos inteligentes con modelos de lenguaje para clasificar y procesar datos.' }
      ]
    },
    {
      id: 'audiovisual',
      num: '04',
      title: 'Audio, Video y Comunicación',
      description: 'Equipamiento multimedia profesional y telefonía unificada para salas de juntas y áreas comunes.',
      items: [
        { name: 'Audio Ambiental', description: 'Distribución acústica multizona y bocinas estéticas empotradas.' },
        { name: 'Señal de TV', description: 'Distribución de video sobre IP o coaxiales de alta definición.' },
        { name: 'Video Wall', description: 'Pantallas industriales de bisel ultra-delgado para vestíbulos o salas de control.' },
        { name: 'Salas de Juntas', description: 'Sistemas integrales de videoconferencia automatizados con un solo toque.' },
        { name: 'Conmutadores IP', description: 'Centrales virtuales con conmutador inteligente y desvío a móvil.' },
        { name: 'Telefonía Empresarial', description: 'Terminales IP de escritorio con audio HD para comunicaciones claras.' }
      ]
    }
  ], []);

  const activeData = useMemo(() => {
    return categories.find(c => c.id === activeCategory) || categories[0];
  }, [categories, activeCategory]);

  return (
    <section 
      id="solutions-center" 
      className="relative w-full py-24 sm:py-36 bg-nagare-black"
    >
      {/* Subtle fine divider lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Subtle Section Header */}
        <div className="flex flex-col mb-16 sm:mb-20">
          <span className="text-[10px] tracking-[0.6em] font-mono text-nagare-gray/40 uppercase mb-4 font-semibold block">
            • DOCUMENTACIÓN DE INGENIERÍA
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-nagare-white tracking-wide leading-tight">
            Centro de <span className="font-normal text-nagare-cyan">Soluciones.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-nagare-gray/50 max-w-xl tracking-wide font-light leading-relaxed mt-4">
            Un índice ordenado y transparente que detalla el alcance técnico, arquitecturas de software y herrajes que diseñamos e integramos en cada proyecto.
          </p>
        </div>

        {/* Minimalist Split Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pt-6">
          
          {/* Index Sidebar (Left column) */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            <span className="text-[9px] font-mono tracking-[0.4em] text-nagare-gray/40 uppercase font-semibold mb-4 block">
              SECCIONES PRINCIPALES
            </span>
            
            <nav className="flex flex-col space-y-1">
              {categories.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="w-full text-left py-3.5 transition-all duration-300 flex items-center justify-between group border-b border-nagare-gray/5 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-[9px] tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-nagare-cyan' : 'text-nagare-gray/30 group-hover:text-nagare-gray/60'
                      }`}>
                        {cat.num}
                      </span>
                      <span className={`text-sm tracking-wide font-sans font-light transition-colors duration-300 ${
                        isActive ? 'text-nagare-white font-normal' : 'text-nagare-gray/50 group-hover:text-nagare-gray/80'
                      }`}>
                        {cat.title}
                      </span>
                    </div>

                    <ChevronRight className={`w-3.5 h-3.5 transition-all duration-300 ${
                      isActive ? 'text-nagare-cyan translate-x-1' : 'text-nagare-gray/20 group-hover:text-nagare-gray/40 group-hover:translate-x-1'
                    }`} />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Solution Items List (Right column) */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Category Description */}
                <div className="border-b border-nagare-gray/5 pb-6">
                  <p className="font-sans text-sm text-nagare-gray/70 font-light leading-relaxed max-w-2xl">
                    {activeData.description}
                  </p>
                </div>

                {/* Flat, Clean list of sub-solutions with hierarchical structure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {activeData.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group flex flex-col space-y-1 border-l border-nagare-gray/10 hover:border-nagare-cyan/30 pl-4 py-1 transition-colors duration-300"
                    >
                      <h4 className="font-sans text-sm text-nagare-white font-light tracking-wide group-hover:text-nagare-cyan transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="font-sans text-xs text-nagare-gray/50 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Action Link */}
            <div className="mt-12 pt-8 border-t border-nagare-gray/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="font-mono text-[9px] tracking-widest text-nagare-gray/40 uppercase">
                // SISTEMAS MODULARES TOTALMENTE INTEGRADOS
              </span>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    const footerBtn = document.querySelector('footer button');
                    if (footerBtn) {
                      (footerBtn as HTMLButtonElement).click();
                    }
                  }
                }}
                className="group flex items-center gap-2 text-xs font-mono text-nagare-cyan hover:text-nagare-white transition-colors duration-300 select-none cursor-pointer"
              >
                CONFIGURAR SOLUCIÓN
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
