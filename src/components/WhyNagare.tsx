import { motion } from 'motion/react';
import { PRINCIPLES_DATA } from '../data';

export default function WhyNagare() {
  return (
    <section 
      id="principles" 
      className="relative w-full py-32 sm:py-48 bg-nagare-black overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with generous negative space and dramatic typography */}
        <div className="flex flex-col mb-24 md:mb-36">
          <span className="text-[10px] tracking-[0.6em] font-mono text-nagare-gray/50 uppercase mb-6 font-semibold block">
            • NUESTROS PRINCIPIOS
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-light text-nagare-white tracking-tight leading-none mb-8">
            La ingeniería del <span className="font-normal text-nagare-cyan">silencio.</span>
          </h2>
          <p className="font-sans text-lg text-nagare-gray/70 max-w-2xl tracking-wide font-light leading-relaxed">
            No medimos nuestro valor en estadísticas comerciales o volumen de ventas. Lo medimos en la rigidez de nuestros estándares técnicos, el orden estricto de nuestra ingeniería y la armonía visual de nuestros resultados.
          </p>
        </div>

        {/* Principles Grid - Pure open space with fine line dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 lg:gap-x-16">
          {PRINCIPLES_DATA.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
              className="flex flex-col relative py-4 group"
            >
              {/* Discrete Monochromatic numbering instead of heavy icon boxes */}
              <div className="font-mono text-xs text-nagare-gray/30 tracking-widest uppercase mb-6 select-none font-semibold">
                PRINCIPIO // 0{index + 1}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl font-light text-nagare-white tracking-wide mb-4 group-hover:text-nagare-cyan transition-colors duration-500">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-nagare-gray/70 leading-relaxed font-light tracking-wide max-w-sm">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subtle reflection block under principles */}
        <div className="mt-24 pt-12 border-t border-nagare-gray/5 text-center">
          <p className="font-mono text-[10px] text-nagare-gray/30 uppercase tracking-[0.4em] select-none">
            "El orden también es parte de la ingeniería."
          </p>
        </div>

      </div>
    </section>
  );
}
