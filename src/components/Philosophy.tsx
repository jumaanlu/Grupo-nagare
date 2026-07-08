import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section 
      id="philosophy" 
      className="relative w-full py-24 sm:py-32 md:py-48 bg-nagare-black flex items-center overflow-hidden border-t border-b border-nagare-petrol/10"
    >
      {/* Background Zen Ripples Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#3FD7FF" strokeWidth="1" opacity="0.1" />
          <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#3FD7FF" strokeWidth="1" opacity="0.1" />
          <circle cx="50%" cy="50%" r="50%" fill="none" stroke="#3FD7FF" strokeWidth="1" opacity="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Label Indicator Left */}
          <div className="lg:col-span-3 flex lg:flex-col items-start gap-4 lg:gap-8 self-start pt-2">
            <span className="text-[10px] tracking-[0.5em] font-mono text-nagare-cyan uppercase font-semibold">
              • Filosofía
            </span>
            <div className="hidden lg:block w-16 h-[1px] bg-nagare-petrol/30" />
            <span className="text-xs text-nagare-gray/60 tracking-[0.2em] font-mono hidden lg:block">
              El arte de lo invisible
            </span>
          </div>

          {/* Core Text Right */}
          <div className="lg:col-span-9 max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-nagare-white tracking-wide leading-tight mb-12 sm:mb-16"
            >
              La mejor tecnología es aquella de la que{" "}
              <span className="text-nagare-cyan italic font-normal">nunca</span> tienes que preocuparte.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 text-nagare-gray/90 text-base sm:text-lg font-light leading-relaxed tracking-wide"
            >
              <p>
                No vendemos equipos. No vendemos cables, switches, ni cámaras de seguridad. 
                Nuestra verdadera entrega es algo mucho más valioso y difícil de encontrar:{" "}
                <strong className="font-semibold text-nagare-white">la tranquilidad absoluta.</strong>
              </p>
              <p>
                Creemos que un sistema exitoso es aquel que se integra de tal forma a su entorno 
                que termina desapareciendo. Trabajamos bajo la premisa de que usted no debería 
                saber cómo funciona la ingeniería; solo disfrutar de un espacio donde todo, 
                simplemente, funciona de manera impecable.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
