import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  Check, 
  Network, 
  ShieldCheck, 
  Volume2, 
  Server, 
  PhoneCall, 
  LifeBuoy, 
  CheckSquare, 
  Square,
  Sparkles
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [spaceType, setSpaceType] = useState('Oficinas');
  const [selectedSubsystems, setSelectedSubsystems] = useState<string[]>(['Redes', 'Seguridad']);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Toggle selected subsystem
  const toggleSubsystem = (name: string) => {
    if (selectedSubsystems.includes(name)) {
      setSelectedSubsystems(selectedSubsystems.filter(s => s !== name));
    } else {
      setSelectedSubsystems([...selectedSubsystems, name]);
    }
  };

  const spaces = [
    'Oficinas',
    'Residencial',
    'Restaurantes',
    'Corporativos',
    'Consultorios',
    'Hoteles',
    'Clubes Deportivos'
  ];

  const subsystems = [
    { name: 'Redes', label: 'WiFi & Cableado', icon: <Network className="w-4 h-4" /> },
    { name: 'Seguridad', label: 'CCTV & Accesos', icon: <ShieldCheck className="w-4 h-4" /> },
    { name: 'Audio & Video', label: 'Audio & Pantallas', icon: <Volume2 className="w-4 h-4" /> },
    { name: 'Infraestructura', label: 'Servidores & UPS', icon: <Server className="w-4 h-4" /> },
    { name: 'Comunicación', label: 'Telefonía & IP', icon: <PhoneCall className="w-4 h-4" /> },
    { name: 'Soporte', label: 'Monitoreo 24/7', icon: <LifeBuoy className="w-4 h-4" /> }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    // Simulate high-end calculations
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSpaceType('Oficinas');
    setSelectedSubsystems(['Redes', 'Seguridad']);
    setAdditionalNotes('');
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Dark Backing Blur Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-nagare-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-nagare-black border border-nagare-gray/10 w-full max-w-5xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden z-10 rounded-sm"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-nagare-gray/40 hover:text-nagare-white transition-colors duration-300 z-30 p-1 cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* LEFT COLUMN: System Configurator Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-nagare-gray/10 overflow-y-auto max-h-[85vh] lg:max-h-[90vh] bg-transparent">
            <span className="text-[10px] tracking-[0.5em] font-mono text-nagare-gray/40 uppercase block mb-3 font-semibold">
              • CONFIGURADOR DE SOLUCIÓN
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light text-nagare-white tracking-wide mb-8">
              Diseñemos tu espacio
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Contact Data */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-[0.2em] text-nagare-gray/40 font-semibold">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Alejandro Torres"
                      className="w-full bg-nagare-black border border-nagare-gray/10 px-4 py-3 text-sm text-nagare-white placeholder-nagare-gray/20 focus:border-nagare-cyan focus:outline-none transition-colors rounded-none"
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-[0.2em] text-nagare-gray/40 font-semibold">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="correo@empresa.com"
                      className="w-full bg-nagare-black border border-nagare-gray/10 px-4 py-3 text-sm text-nagare-white placeholder-nagare-gray/20 focus:border-nagare-cyan focus:outline-none transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-[0.2em] text-nagare-gray/40 font-semibold">Teléfono o WhatsApp</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+52 55 1234 5678"
                      className="w-full bg-nagare-black border border-nagare-gray/10 px-4 py-3 text-sm text-nagare-white placeholder-nagare-gray/20 focus:border-nagare-cyan focus:outline-none transition-colors rounded-none"
                    />
                  </div>

                  {/* Space Selection */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase font-mono tracking-[0.2em] text-nagare-gray/40 font-semibold">Tipo de Inmueble</label>
                    <select
                      value={spaceType}
                      onChange={(e) => setSpaceType(e.target.value)}
                      className="w-full bg-nagare-black border border-nagare-gray/10 px-4 py-3 text-sm text-nagare-white focus:border-nagare-cyan focus:outline-none transition-colors rounded-none appearance-none cursor-pointer"
                    >
                      {spaces.map((s) => (
                        <option key={s} value={s} className="bg-nagare-black text-nagare-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subsystems Multiselect */}
                <div className="flex flex-col space-y-3 pt-2">
                  <label className="text-[10px] uppercase font-mono tracking-[0.2em] text-nagare-gray/40 font-semibold">
                    Sistemas requeridos (Selecciona los necesarios)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {subsystems.map((sub) => {
                      const isSelected = selectedSubsystems.includes(sub.name);
                      return (
                        <button
                          key={sub.name}
                          type="button"
                          onClick={() => toggleSubsystem(sub.name)}
                          className={`flex items-center gap-3 p-3.5 border transition-all duration-300 text-left rounded-none cursor-pointer ${
                            isSelected 
                              ? 'bg-nagare-black border-nagare-cyan text-nagare-white font-semibold' 
                              : 'bg-transparent border-nagare-gray/10 text-nagare-gray/60 hover:border-nagare-cyan/40 hover:text-nagare-white'
                          }`}
                        >
                          <div className={`p-1 border ${isSelected ? 'border-nagare-cyan bg-nagare-black' : 'border-nagare-gray/10'}`}>
                            {React.cloneElement(sub.icon, { className: `w-4 h-4 ${isSelected ? 'text-nagare-cyan' : 'text-nagare-gray/40'}` })}
                          </div>
                          <span className="text-xs tracking-wider">{sub.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] uppercase font-mono tracking-[0.2em] text-nagare-gray/40 font-semibold">Mensaje o especificaciones adicionales</label>
                  <textarea
                    rows={3}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Descríbenos brevemente los detalles particulares o dimensiones del espacio..."
                    className="w-full bg-nagare-black border border-nagare-gray/10 px-4 py-3 text-sm text-nagare-white placeholder-nagare-gray/20 focus:border-nagare-cyan focus:outline-none transition-colors rounded-none resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-nagare-white hover:bg-nagare-cyan text-nagare-black font-semibold text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 flex items-center justify-center gap-3 rounded-none disabled:opacity-50 disabled:cursor-wait cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-nagare-black border-t-transparent animate-spin" />
                      COMPILANDO SISTEMA...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SOLICITAR ASESORÍA TÉCNICA
                    </>
                  )}
                </button>

                <p className="text-[9px] text-center text-nagare-gray/30 tracking-wider">
                  Al enviar, acepta nuestro Aviso de Privacidad. Sus datos permanecen estrictamente confidenciales.
                </p>

              </form>
            ) : (
              // Success Statement Page
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center justify-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full border-2 border-nagare-cyan flex items-center justify-center mb-2 bg-transparent">
                  <Check className="w-8 h-8 text-nagare-cyan" />
                </div>
                
                <h3 className="font-display text-2xl font-light text-nagare-white tracking-widest">
                  Ecosistema Compilado
                </h3>
                
                <p className="font-sans text-sm text-nagare-gray/85 font-light max-w-md leading-relaxed tracking-wide">
                  Gracias, <strong className="font-semibold text-nagare-white">{name}</strong>. Hemos recibido exitosamente sus requerimientos para <strong className="font-semibold text-nagare-white">{spaceType}</strong>. 
                </p>
                <p className="font-sans text-xs text-nagare-gray/50 font-mono tracking-wider max-w-sm">
                  Dossier preliminar registrado bajo el ID: #{Math.floor(100000 + Math.random() * 900000)}. 
                  Un ingeniero especialista le contactará en menos de 24 horas hábiles.
                </p>

                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-nagare-white hover:bg-nagare-cyan text-nagare-black font-semibold text-xs uppercase tracking-[0.2em] transition-colors duration-300 rounded-none cursor-pointer"
                >
                  Regresar al sitio
                </button>
              </motion.div>
            )}
          </div>

          {/* RIGHT COLUMN: Interactive Blueprint Generator */}
          <div className="lg:col-span-5 bg-nagare-black/30 p-8 sm:p-12 flex flex-col justify-between overflow-hidden relative">
            
            {/* Fine architectural axis lines */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-nagare-gray/10 pointer-events-none" />
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-nagare-gray/10 pointer-events-none" />

            <div>
              <span className="text-[10px] tracking-[0.5em] font-mono text-nagare-gray/40 uppercase block mb-3 font-semibold">
                • VISTA DE ESQUEMA REAL
              </span>
              <h3 className="font-display text-lg font-light text-nagare-white tracking-wider mb-6">
                Sistemas en {spaceType}
              </h3>
            </div>

            {/* Interactive Wiring Grid */}
            <div className="my-8 py-8 border-y border-nagare-gray/10 relative flex items-center justify-center min-h-[260px] max-h-[300px]">
              
              {/* Connected schematic items */}
              <div className="relative w-full aspect-square max-w-[240px]">
                
                {/* Center Core Controller Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-nagare-black border border-nagare-cyan flex flex-col items-center justify-center z-20 shadow-md">
                  <span className="text-[8px] font-mono tracking-widest text-nagare-cyan font-bold">NAGARE</span>
                  <span className="text-[7px] font-mono text-nagare-cyan/50 font-semibold">CORE</span>
                </div>

                {/* Subsystem nodes arranged circularly */}
                {subsystems.map((sub, idx) => {
                  const angle = (idx * (360 / subsystems.length)) * (Math.PI / 180);
                  const radius = 90; // pixels radius
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  const isSelected = selectedSubsystems.includes(sub.name);

                  return (
                    <div key={sub.name}>
                      {/* Link line to core */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
                        <line
                          x1="120"
                          y1="120"
                          x2={120 + x}
                          y2={120 + y}
                          stroke={isSelected ? '#3FD7FF' : 'rgba(255,255,255,0.05)'}
                          strokeWidth={isSelected ? '1.5' : '1'}
                          strokeDasharray={isSelected ? '0' : '3 3'}
                          className="transition-all duration-500"
                        />
                      </svg>

                      {/* Node circle */}
                      <div
                        style={{
                          transform: 'translate(-50%, -50%)',
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                        }}
                        className={`absolute w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 z-20 ${
                          isSelected 
                            ? 'bg-nagare-black border-nagare-cyan text-nagare-cyan shadow-md' 
                            : 'bg-nagare-black border-nagare-gray/10 text-nagare-gray/40'
                        }`}
                      >
                        {React.cloneElement(sub.icon, { className: 'w-4 h-4' })}
                        
                        {/* Node Label tooltip */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-nagare-black border border-nagare-gray/10 px-1.5 py-0.5 rounded-none whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity shadow-sm">
                          <span className="text-[7px] font-mono tracking-[0.2em] text-nagare-cyan uppercase font-semibold">
                            {sub.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>

            </div>

            {/* Quick summary panel */}
            <div className="bg-nagare-black border border-nagare-gray/10 p-5 font-mono text-[10px] text-nagare-gray/50 space-y-1.5 shadow-sm">
              <div className="flex justify-between border-b border-nagare-gray/10 pb-1.5 text-nagare-gray/40 font-semibold">
                <span>PARÁMETRO</span>
                <span>VALOR SELECCIONADO</span>
              </div>
              <div className="flex justify-between">
                <span>ESPACIO:</span>
                <span className="text-nagare-white font-semibold">{spaceType.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span>NÚCLEOS ACTIVOS:</span>
                <span className="text-nagare-cyan font-semibold">{selectedSubsystems.length} subsistemas</span>
              </div>
              <div className="flex justify-between">
                <span>FIBRA_BACKBONE:</span>
                <span className="text-nagare-white font-semibold">{selectedSubsystems.includes('Redes') ? 'ACTIVA (10 Gbps)' : 'STANDBY'}</span>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
