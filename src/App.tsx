import { useEffect, useState } from 'react';
import {AnimatePresence, motion, useScroll, useSpring} from 'motion/react';
import {ArrowDown, ArrowUpRight, AudioLines, Building2, Check, House, LifeBuoy, Menu, Network, ShieldCheck, X, Zap} from 'lucide-react';
import './solutions.css';
import './brand.css';
import './editorial.css';
import './identity.css';
import ContactPage from './ContactPage';

const WA='https://wa.me/525585263040?text=Hola%20NAGARE%2C%20me%20interesa%20una%20asesor%C3%ADa%20para%20mi%20proyecto.';
const solutions=[
  {n:'01',title:'Conectividad',copy:'Redes cableadas y WiFi estables, diseñadas para crecer contigo.',icon:Network,detail:'Creamos la infraestructura que mantiene cada dispositivo conectado con velocidad y estabilidad.',items:['WiFi residencial y empresarial','Cableado estructurado y fibra óptica','Racks, switches y respaldo eléctrico','Diagnóstico y optimización de cobertura']},
  {n:'02',title:'Seguridad',copy:'Videovigilancia y control de acceso integrados, sin complicaciones.',icon:ShieldCheck,detail:'Protegemos personas y espacios con sistemas discretos que puedes consultar y controlar desde cualquier lugar.',items:['Videovigilancia CCTV','Control de acceso','Interfonía y videoporteros','Alarmas, sensores e integración móvil']},
  {n:'03',title:'Experiencias',copy:'Audio, video y automatización que se sienten naturales en cada espacio.',icon:AudioLines,detail:'Integramos entretenimiento, comunicación y automatización en una experiencia sencilla de operar.',items:['Audio distribuido','Salas de juntas y videoconferencia','Pantallas y señalización digital','Automatización e iluminación']},
  {n:'04',title:'Soporte',copy:'Acompañamiento continuo para que la tecnología nunca interrumpa tu operación.',icon:LifeBuoy,detail:'Cuidamos tu inversión después de la instalación y adaptamos el sistema conforme cambian tus necesidades.',items:['Monitoreo y asistencia remota','Mantenimiento preventivo','Atención de incidencias','Actualización y crecimiento del sistema']},
];
const spaces=[
  {title:'Residencial',copy:'Tecnología discreta para vivir con más calma.',icon:House,img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop'},
  {title:'Corporativo',copy:'Infraestructura que mantiene al equipo conectado.',icon:Building2,img:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1200&auto=format&fit=crop'},
  {title:'Hospitalidad',copy:'Experiencias consistentes para huéspedes y operación.',icon:Zap,img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=85&w=1200&auto=format&fit=crop'},
];
const process=['Escuchamos','Diseñamos','Integramos','Acompañamos'];

export default function App(){
 if(window.location.pathname.replace(/\/$/,'')==='/contacto')return <ContactPage/>;
 const [open,setOpen]=useState(false); const [activeSolution,setActiveSolution]=useState(0); const {scrollYProgress}=useScroll(); const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:24});
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open]);
 const go=(id:string)=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
 return <div className="site">
  <motion.div className="progress" style={{scaleX}}/>
  <nav className="nav"><button className="brand" onClick={()=>scrollTo({top:0,behavior:'smooth'})}><b>NAGARE</b><span>INGENIERÍA DE SISTEMAS</span></button>
   <div className="navlinks"><button onClick={()=>go('soluciones')}>Soluciones</button><button onClick={()=>go('proceso')}>Proceso</button><button onClick={()=>go('espacios')}>Espacios</button></div>
   <a className="navcta" href="/contacto">Hablemos <ArrowUpRight/></a><button className="menubtn" onClick={()=>setOpen(!open)} aria-label="Menú">{open?<X/>:<Menu/>}</button>
  </nav>
  {open&&<motion.div className="mobile" initial={{opacity:0}} animate={{opacity:1}}><button onClick={()=>go('soluciones')}>Soluciones</button><button onClick={()=>go('proceso')}>Proceso</button><button onClick={()=>go('espacios')}>Espacios</button><a href="/contacto">Hablemos <ArrowUpRight/></a></motion.div>}

  <main>
   <section className="hero">
    <div className="orb one"/><div className="orb two"/><div className="grid"/><div className="brand-wave" aria-hidden="true"><span/><span/><span/><i/></div>
    <motion.div className="hero-mark" initial={{opacity:0,y:-24,scale:.9}} animate={{opacity:1,y:0,scale:1}} transition={{duration:1,ease:[.16,1,.3,1]}}><div className="mark-glow"/><div className="logo-mark-window"><img src="/nagare-logo.png" alt="Símbolo NAGARE"/></div><span>流れ · FLUIR</span></motion.div>
    <motion.div className="hero-copy" initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:1}}>
     <p className="eyebrow"><i/> INTEGRACIÓN TECNOLÓGICA</p>
     <h1>Tecnología que<br/><em>fluye contigo.</em></h1>
     <p className="lead">Diseñamos espacios conectados, seguros y simples de usar. La ingeniería sucede detrás; tú solo disfrutas el resultado.</p>
     <div className="actions"><button className="primary" onClick={()=>go('soluciones')}>Explorar soluciones <ArrowUpRight/></button><a className="secondary" href={WA} target="_blank" rel="noreferrer">Cuéntanos tu proyecto</a></div>
    </motion.div>
    <button className="scroll" onClick={()=>go('soluciones')}><span>DESCUBRIR</span><ArrowDown/></button>
   </section>

   <section className="statement reveal"><p className="kicker">NUESTRA IDEA</p><h2>La mejor tecnología es la que <em>deja de sentirse</em> como tecnología.</h2><p>Un solo equipo para conectar cada sistema y hacer que todo funcione en armonía.</p></section>

   <section id="soluciones" className="section solutions-flow"><header><div><p className="kicker">LO QUE HACEMOS</p><h2>Cuatro soluciones.<br/>Una sola corriente.</h2></div><p className="sidecopy">Cada sistema se integra al siguiente para que tu espacio responda como un solo ecosistema.</p></header>
    <div className="solution-picker"><p><span>EXPLORA</span> Selecciona una solución para ver sus capacidades</p><nav className="solution-nav" aria-label="Selecciona una solución">{solutions.map((s,i)=>{const Icon=s.icon;return <button key={s.title} className={activeSolution===i?'active':''} aria-pressed={activeSolution===i} onClick={()=>setActiveSolution(i)}><Icon/><span>{s.n}</span><b>{s.title}</b><small>{activeSolution===i?'Mostrando detalles':'Ver solución'}</small></button>})}</nav></div>
    <div className="flow-current" aria-hidden="true"><i/><i/><i/></div>
    <div className="solution-scenes"><AnimatePresence mode="wait">{(()=>{const s=solutions[activeSolution];const Icon=s.icon;const message=encodeURIComponent(`Hola NAGARE, me interesa conocer más sobre ${s.title}.`);return <motion.article className={`solution-scene ${activeSolution%2?'reverse':''}`} key={s.title} initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}} transition={{duration:.5,ease:[.16,1,.3,1]}}>
      <div className="scene-copy"><p className="scene-number">SOLUCIÓN {s.n}</p><Icon/><h3>{s.title}</h3><p>{s.detail}</p><a href={`https://wa.me/525585263040?text=${message}`} target="_blank" rel="noreferrer">Explorar {s.title.toLowerCase()} <ArrowUpRight/></a></div>
      <div className="scene-visual" aria-hidden="true"><span className="visual-orbit"/><span className="visual-core"><Icon/></span><small>{s.copy}</small></div>
      <div className="capability-grid">{s.items.map((item,index)=><motion.div key={item} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.12+index*.07}}><span>0{index+1}</span><Icon/><h4>{item}</h4><p>{['Diseñado a la medida de tu espacio y preparado para crecer contigo.','Integración limpia, estable y sencilla de operar todos los días.','Control centralizado con una experiencia natural para cada usuario.','Acompañamiento experto desde el diseño hasta la operación.'][index]}</p></motion.div>)}</div>
     </motion.article>})()}</AnimatePresence></div>
   </section>

   <section id="proceso" className="section process"><div className="process-copy"><p className="kicker">CÓMO FLUYE</p><h2>De la idea a un sistema que simplemente funciona.</h2><p>Nos ocupamos del recorrido completo. Sin proveedores dispersos ni decisiones técnicas innecesarias.</p><a href={WA} target="_blank" rel="noreferrer">Iniciar conversación <ArrowUpRight/></a></div>
    <div className="steps">{process.map((p,i)=><motion.div key={p} initial={{opacity:.25,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-10%'}} transition={{delay:i*.1}}><span>0{i+1}</span><h3>{p}</h3><Check/></motion.div>)}</div>
   </section>

   <section id="espacios" className="section spaces"><header><div><p className="kicker">DONDE SUCEDE</p><h2>Soluciones que se adaptan al espacio.</h2></div></header><div className="space-grid">{spaces.map((s,i)=>{const Icon=s.icon;return <motion.article key={s.title} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}}><img src={s.img} alt={`Proyecto ${s.title}`}/><div className="shade"/><div className="space-copy"><Icon/><span>0{i+1}</span><h3>{s.title}</h3><p>{s.copy}</p></div></motion.article>})}</div></section>

   <section className="contact"><div className="contact-orb"/><p className="kicker">TU PRÓXIMO ESPACIO</p><h2>Hagamos que la<br/>tecnología <em>fluya.</em></h2><p>Cuéntanos qué quieres resolver. Empezamos con una conversación sencilla.</p><div className="contact-actions"><a href="/contacto">Cuéntanos tu proyecto <ArrowUpRight/></a><a className="contact-whatsapp" href={WA} target="_blank" rel="noreferrer">Hablar por WhatsApp <ArrowUpRight/></a></div></section>
  </main>
  <footer><div className="brand"><b>NAGARE</b><span>INGENIERÍA DE SISTEMAS</span></div><p>Redes · Seguridad · Audio y video · Automatización</p><div><a href="tel:+525585263040">+52 55 8526 3040</a><span>© 2026 NAGARE</span></div></footer>
 </div>
}
