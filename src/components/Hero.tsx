import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  scrollToSection: (id: string) => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export default function Hero({ onOpenContact, scrollToSection }: HeroProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto generate subtle rising particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        const id = Date.now() + Math.random();
        const newParticle: Particle = {
          id,
          x: Math.random() * 100, // percentage
          y: 90 + Math.random() * 10, // starts near bottom
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.4 + 0.1,
        };
        // Keep particles list clean
        return [...prev.slice(-15), newParticle];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Click handler to generate water ripples
  const handleInteraction = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const clickId = Date.now();
    const rippleParticle: Particle = {
      id: clickId,
      x,
      y,
      size: 40,
      opacity: 0.6,
    };

    setParticles((prev) => [...prev, rippleParticle]);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleInteraction}
      className="relative w-full min-h-screen bg-nagare-black flex items-center justify-center overflow-hidden px-6 py-20 select-none cursor-crosshair"
    >
      {/* Background Cinematic Texture Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1920')`,
            animation: 'zoomSlow 30s infinite alternate ease-in-out'
          }}
          referrerPolicy="no-referrer"
        />
        {/* Soft Radial Gradients for deep lighting */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_#05070A_95%]" />
        <div className="absolute inset-0 bg-radial-[circle_at_20%_30%,_rgba(63,215,255,0.15)_0%,_transparent_60%]" />
        <div className="absolute inset-0 bg-radial-[circle_at_80%_70%,_rgba(24,61,93,0.15)_0%,_transparent_50%]" />
      </div>

      {/* Interactive Flow Grid Particles & Ripple Effects */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => {
          if (p.size === 40) {
            // Ripple effect
            return (
              <motion.div
                key={p.id}
                initial={{ scale: 0, opacity: p.opacity }}
                animate={{ scale: 3.5, opacity: 0 }}
                transition={{ duration: 2.2, ease: [0.1, 0.8, 0.2, 1] }}
                style={{
                  position: 'absolute',
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: '1px solid rgba(63, 215, 255, 0.4)',
                  background: 'radial-gradient(circle, rgba(63,215,255,0.08) 0%, transparent 70%)',
                }}
              />
            );
          } else {
            // Ambient floating fiber node
            return (
              <motion.div
                key={p.id}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '-200px', opacity: [0, p.opacity, p.opacity, 0] }}
                transition={{ duration: 15, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  left: `${p.x}%`,
                  bottom: 0,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  borderRadius: '50%',
                  backgroundColor: '#3FD7FF',
                  boxShadow: '0 0 8px rgba(63,215,255,0.5)',
                }}
              />
            );
          }
        })}
      </div>

      {/* Thin Geometric Alignment Lines (Architectural Grid Overlay) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.04] flex justify-between max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-[1px] h-full bg-nagare-white" />
        <div className="w-[1px] h-full bg-nagare-white hidden md:block" />
        <div className="w-[1px] h-full bg-nagare-white hidden md:block" />
        <div className="w-[1px] h-full bg-nagare-white" />
      </div>

      {/* Main Copy & Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle decorative tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-8 bg-nagare-navy/45 border border-nagare-petrol/30 px-4 py-1.5 rounded-none shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-nagare-cyan animate-pulse" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-nagare-cyan font-mono font-semibold">
            NAGARE • ESTÁNDAR PREMIUM
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.08em] text-nagare-white mb-8 leading-tight max-w-4xl"
        >
          Tecnología que <br className="hidden sm:inline" />
          <span className="font-normal text-nagare-cyan">fluye contigo.</span>
        </motion.h1>

        {/* Hero Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base sm:text-lg md:text-xl font-light text-nagare-gray max-w-2xl leading-relaxed mb-14 tracking-wide"
        >
          Diseñamos soluciones tecnológicas para que puedas enfocarte en lo que realmente importa.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="group w-full sm:w-auto px-8 py-4 bg-nagare-white hover:bg-nagare-cyan text-nagare-black text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 rounded-none cursor-pointer shadow-sm"
          >
            Conocer soluciones
            <ArrowUpRight className="w-4 h-4 text-nagare-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          
          <button
            onClick={onOpenContact}
            className="group w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-nagare-white/5 text-nagare-white border border-nagare-white/30 hover:border-nagare-white text-xs uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer font-semibold"
          >
            Hablemos de tu proyecto
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => scrollToSection('philosophy')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer group"
      >
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-nagare-gray group-hover:text-nagare-cyan transition-colors">
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-nagare-gray group-hover:text-nagare-cyan transition-colors" />
        </motion.div>
      </motion.div>

      {/* Global Style Inject for Keyframes */}
      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1.02) translate(0px, 0px); }
          100% { transform: scale(1.08) translate(-5px, -5px); }
        }
      `}</style>
    </div>
  );
}
