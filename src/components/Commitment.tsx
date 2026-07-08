import { motion } from 'motion/react';
import { PROCESS_DATA } from '../data';

export default function Commitment() {
  return (
    <section className="relative w-full py-32 sm:py-48 bg-nagare-black overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-nagare-gray/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Commitment Statement block - Pure and spaciously breathing */}
        <div className="max-w-4xl mb-32 md:mb-48">
          <span className="text-[10px] tracking-[0.6em] font-mono text-nagare-gray/50 uppercase block mb-6 font-semibold">
            • EL ESTÁNDAR DE EJECUCIÓN
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-light text-nagare-white tracking-tight leading-none mb-10">
            Cada detalle <br className="hidden sm:inline" />
            tiene un <span className="font-normal text-nagare-cyan">propósito.</span>
          </h2>
          <p className="font-sans text-xl md:text-2xl font-light text-nagare-gray/80 leading-relaxed tracking-wide max-w-3xl">
            No importa la envergadura o el tamaño de la obra. Cada residencia o espacio de trabajo que intervenimos recibe el mismo rigor estricto de ingeniería, la misma meticulosidad técnica y un respeto absoluto por la limpieza visual.
          </p>
        </div>

        {/* Work Process Diagram Section - Elegant, ultra-fine lines, architectural feel */}
        <div className="border-t border-nagare-gray/10 pt-24 md:pt-36">
          <span className="text-[10px] tracking-[0.6em] font-mono text-nagare-gray/50 uppercase block mb-12 font-semibold">
            • METODOLOGÍA DE INTEGRACIÓN (NUESTRO PROCESO)
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24 relative">
            {PROCESS_DATA.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.8 }}
                className="flex flex-col relative group"
              >
                {/* Horizontal flow line for elegant architectural styling */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-nagare-gray/10 pointer-events-none mb-6" />

                <div className="flex items-center justify-between pt-6 mb-6">
                  <span className="font-mono text-xs text-nagare-cyan tracking-widest font-semibold">
                    FASE // 0{index + 1}
                  </span>
                  
                  {/* Elegant micro connector arrow */}
                  {index < 5 && (
                    <span className="hidden lg:block font-mono text-xs text-nagare-gray/20 font-light tracking-widest">
                      →
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl font-light text-nagare-white tracking-wider mb-4 transition-colors duration-500 group-hover:text-nagare-cyan">
                  {step.title}
                </h3>

                <p className="font-sans text-sm text-nagare-gray/70 leading-relaxed font-light tracking-wide max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Microcopy Quote reflection */}
        <div className="mt-32 pt-12 border-t border-nagare-gray/5 text-center">
          <span className="font-mono text-[10px] tracking-[0.4em] text-nagare-gray/30 uppercase block">
            "Una buena red no llama la atención. Solo permite que todo funcione."
          </span>
        </div>

      </div>
    </section>
  );
}
