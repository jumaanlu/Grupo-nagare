import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCENARIOS_DATA } from '../data';

export default function Scenarios() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const activeScenario = SCENARIOS_DATA[selectedScenarioIndex];

  return (
    <section 
      id="scenarios" 
      className="relative w-full py-32 sm:py-48 bg-nagare-black"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-24 md:mb-36">
          <span className="text-[10px] tracking-[0.6em] font-mono text-nagare-gray/50 uppercase mb-6 block font-semibold">
            • CONTEXTOS DE INTEGRACIÓN
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-light text-nagare-white tracking-tight leading-none mb-8">
            Ecosistemas <span className="font-normal text-nagare-cyan">por espacio.</span>
          </h2>
          <p className="font-sans text-lg text-nagare-gray/70 max-w-2xl tracking-wide font-light leading-relaxed">
            Cada entorno arquitectónico exige consideraciones físicas, acústicas e infraestructuras diferentes. Adaptamos la ingeniería para que respete y eleve la naturaleza del lugar.
          </p>
        </div>

        {/* Dynamic Architectural Gallery Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Menu selectors (Left) - Pure minimal text links with spacing */}
          <div className="lg:col-span-4 flex flex-col space-y-4 pt-4">
            {SCENARIOS_DATA.map((scenario, index) => {
              const isActive = index === selectedScenarioIndex;
              return (
                <button
                  key={scenario.title}
                  onClick={() => setSelectedScenarioIndex(index)}
                  className="w-full text-left py-4 transition-all duration-500 cursor-pointer group flex items-center justify-between border-b border-nagare-gray/10 relative"
                >
                  {/* Underline trace */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeScenarioUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-nagare-cyan"
                    />
                  )}
                  
                  <span className={`font-display text-lg tracking-[0.15em] transition-colors duration-500 ${
                    isActive ? 'text-nagare-white font-medium' : 'text-nagare-gray/40 group-hover:text-nagare-white'
                  }`}>
                    {scenario.title.toUpperCase()}
                  </span>

                  <span className={`text-[10px] font-mono transition-colors duration-500 ${isActive ? 'text-nagare-cyan' : 'text-nagare-gray/20'}`}>
                    0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Large Screen Presentation (Right) - Pure cinematic photography, no boxes */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Cinematic Picture Frame with smooth crossfade */}
            <div className="relative aspect-[16/9] w-full overflow-hidden select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedScenarioIndex}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeScenario.image}
                    alt={activeScenario.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.85] contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nagare-black/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Fine textual specifications below the photo */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-4">
              
              <div className="md:col-span-5">
                <span className="text-[10px] font-mono tracking-[0.4em] text-nagare-gray/40 uppercase block mb-3 font-semibold">
                  ESTUDIO DE ENTORNO
                </span>
                <h3 className="font-display text-2xl font-light text-nagare-white tracking-widest mb-4">
                  {activeScenario.title}
                </h3>
                <p className="font-sans text-sm text-nagare-gray/80 font-light leading-relaxed tracking-wide">
                  {activeScenario.description}
                </p>
              </div>

              <div className="md:col-span-7 space-y-4">
                <span className="text-[10px] font-mono tracking-[0.4em] text-nagare-gray/40 uppercase block font-semibold">
                  INFRAESTRUCTURA MÍNIMA REQUERIDA
                </span>
                <ul className="space-y-4">
                  {activeScenario.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-4">
                      <span className="text-nagare-cyan text-xs font-mono select-none mt-0.5">•</span>
                      <span className="text-sm text-nagare-gray/80 font-light tracking-wide leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
