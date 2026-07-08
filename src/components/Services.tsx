import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { 
  Network, 
  ShieldCheck, 
  PhoneCall, 
  Volume2, 
  Server, 
  LifeBuoy,
  ArrowRight
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Network: <Network className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  PhoneCall: <PhoneCall className="w-4 h-4" />,
  Volume2: <Volume2 className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  LifeBuoy: <LifeBuoy className="w-4 h-4" />,
};

export default function Services() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = SERVICES_DATA[activeCategoryIndex];

  return (
    <section 
      id="services" 
      className="relative w-full py-32 sm:py-48 bg-nagare-black"
    >
      {/* Fine architectural axis lines for gallery feel */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with generous negative space and dramatic typography */}
        <div className="flex flex-col mb-24 md:mb-36">
          <span className="text-[10px] tracking-[0.6em] font-mono text-nagare-gray/50 uppercase mb-6 font-semibold block">
            • INGENIERÍA DE SISTEMAS
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-light text-nagare-white tracking-tight leading-none mb-8">
            Nuestras <span className="font-normal text-nagare-cyan">soluciones.</span>
          </h2>
          <p className="font-sans text-lg text-nagare-gray/70 max-w-2xl tracking-wide font-light leading-relaxed">
            No instalamos dispositivos sueltos. Diseñamos ecosistemas donde cada subsistema se comunica de manera transparente, segura y respetuosa de la arquitectura circundante.
          </p>
        </div>

        {/* Master-Detail Minimal Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Categories Sidebar (Left) - Exquisite pure list without boxes */}
          <div className="lg:col-span-5 flex flex-col space-y-0 w-full divide-y divide-nagare-gray/10">
            {SERVICES_DATA.map((service, index) => {
              const isActive = index === activeCategoryIndex;
              return (
                <button
                  key={service.name}
                  onClick={() => setActiveCategoryIndex(index)}
                  className="w-full text-left py-8 flex flex-col justify-start transition-all duration-500 rounded-none cursor-pointer group relative"
                >
                  {/* Subtle active line indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeCategoryLine"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-nagare-cyan"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <div className={`flex items-center gap-4 mb-2 transition-transform duration-500 ${isActive ? 'translate-x-4' : 'group-hover:translate-x-2'}`}>
                    <span className={`text-[10px] font-mono tracking-wider font-medium ${isActive ? 'text-nagare-cyan' : 'text-nagare-gray/35'}`}>
                      0{index + 1}
                    </span>
                    <h3 className={`font-display text-xl sm:text-2xl tracking-wider transition-colors duration-500 ${
                      isActive ? 'text-nagare-white font-medium' : 'text-nagare-gray/60 group-hover:text-nagare-white'
                    }`}>
                      {service.name.toUpperCase()}
                    </h3>
                  </div>

                  <p className={`text-xs sm:text-sm font-sans font-light tracking-wide transition-colors duration-500 pl-8 max-w-md ${
                    isActive ? 'text-nagare-gray/80' : 'text-nagare-gray/40 group-hover:text-nagare-gray/60'
                  }`}>
                    {service.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Solution Detail Window (Right) - Frameless, breathable, pure typography & layout */}
          <div className="lg:col-span-7 min-h-[450px] flex flex-col justify-between relative py-4 lg:pl-12">
            
            {/* Very fine light accent mimicking water glow */}
            <div className="absolute -top-12 right-0 w-80 h-80 bg-nagare-cyan/5 rounded-full blur-[100px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full space-y-12 relative z-10"
              >
                
                {/* Heading Block */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 border border-nagare-gray/10 text-nagare-gray/60">
                      {iconMap[activeCategory.iconName]}
                    </div>
                    <span className="font-mono text-[9px] text-nagare-gray/40 font-semibold tracking-[0.4em] uppercase">
                      ESPECIFICACIONES DEL ENTORNO
                    </span>
                  </div>
                  
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-nagare-white tracking-wide mb-6 leading-tight">
                    Sistemas de {activeCategory.name}
                  </h3>
                  
                  <p className="font-sans text-base sm:text-lg text-nagare-gray/85 font-light leading-relaxed tracking-wide max-w-xl">
                    {activeCategory.description}
                  </p>
                </div>

                {/* Scope list with elegant minimal design (No boxes, clean space) */}
                <div className="space-y-6 pt-6 border-t border-nagare-gray/10">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-nagare-gray/40 uppercase block font-semibold">
                    ALCANCE DEL SISTEMA INTEGRADO
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                    {activeCategory.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <span className="text-[10px] font-mono text-nagare-cyan/70 mt-1">
                          •
                        </span>
                        <span className="text-sm text-nagare-gray/80 font-light tracking-wide leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Microcopy quote nested as a fine detail */}
                <div className="pt-8 text-left select-none pointer-events-none">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-nagare-gray/30 uppercase block">
                    "La simplicidad requiere más trabajo."
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
