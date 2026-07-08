import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Network, ShieldCheck, Cpu } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ onOpenContact, scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Filosofía', id: 'philosophy' },
    { name: 'Principios', id: 'principles' },
    { name: 'Servicios', id: 'services' },
    { name: 'Escenarios', id: 'scenarios' },
    { name: 'Centro de Soluciones', id: 'solutions-center' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-nagare-black/80 backdrop-blur-xl border-b border-nagare-gray/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand Layout */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group cursor-pointer flex flex-col items-start select-none"
          >
            <span className="font-display text-2xl font-light tracking-[0.25em] text-nagare-white group-hover:text-nagare-cyan transition-colors duration-300">
              NAGARE
            </span>
            <span className="text-[9px] uppercase tracking-[0.45em] text-nagare-gray/40 -mt-0.5 font-mono font-medium">
              INGENIERÍA DE SISTEMAS
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-xs font-sans font-medium text-nagare-gray/75 hover:text-nagare-white tracking-[0.2em] uppercase transition-colors duration-300 relative py-2 group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-nagare-cyan transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 overflow-hidden border border-nagare-white/10 hover:border-nagare-cyan bg-transparent px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-nagare-white hover:text-nagare-cyan transition-all duration-300 rounded-none cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-semibold">
                Iniciar Proyecto
                <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-nagare-white hover:text-nagare-cyan transition-colors p-1 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-nagare-black/98 backdrop-blur-2xl pt-28 px-8 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-left font-display text-2xl tracking-wider text-nagare-white hover:text-nagare-cyan transition-colors py-2"
                >
                  {link.name}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="pt-6 border-t border-nagare-petrol/20"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex justify-between items-center text-left py-4 text-nagare-cyan uppercase tracking-widest text-sm font-semibold border-b border-nagare-cyan/20"
                >
                  <span>Hablemos de tu proyecto</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            <div className="text-center">
              <span className="font-display text-xs tracking-[0.3em] text-nagare-cyan/50">
                NAGARE © 2026
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
