import { useEffect, useState } from 'react';
import {AnimatePresence, motion, useScroll, useSpring} from 'motion/react';
import {ArrowDown, ArrowUpRight, Building2, Check, House, Menu, X, Zap} from 'lucide-react';
import './solutions.css';
import './brand.css';
import './editorial.css';
import './identity.css';
import ContactPage from './ContactPage';
import {SolutionDetail,SolutionsIndex} from './SolutionsPages';
import {solutions} from './solutionData';

const WA='https://wa.me/525585263040?text=Hola%20NAGARE%2C%20me%20interesa%20una%20asesor%C3%ADa%20para%20mi%20proyecto.';
const spaces=[
  {title:'Residencial',copy:'Tecnología discreta para vivir con más calma.',icon:House,img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop'},
  {title:'Corporativo',copy:'Infraestructura que mantiene al equipo conectado.',icon:Building2,img:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1200&auto=format&fit=crop'},
  {title:'Hospitalidad',copy:'Experiencias consistentes para huéspedes y operación.',icon:Zap,img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=85&w=1200&auto=format&fit=crop'},
];
const process=['Escuchamos','Diseñamos','Integramos','Acompañamos'];

export default function App(){
 if(window.location.pathname.replace(/\/$/,'')==='/contacto')return <ContactPage/>;
 const route=window.location.pathname.replace(/\/$/,'');
 if(route==='/soluciones')return <SolutionsIndex/>;
 const selected=solutions.find(s=>route===`/soluciones/${s.slug}`);
 if(selected)return <SolutionDetail solution={selected}/>;
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

   <section id="soluciones" className="section solutions-flow"><header><div><p className="kicker">LO QUE HACEMOS</p><h2>Elige una corriente.<br/>Descubre hasta dónde llega.</h2></div><p className="sidecopy">Cuatro especialidades conectadas. Selecciona una para abrir su recorrido completo.</p></header>
    {(()=>{const s=solutions[activeSolution];const Icon=s.icon;return <div className={`solution-gateway theme-${s.slug}`}>
      <nav className="solution-route" aria-label="Elige una solución">
       <p><span>01</span> ELIGE QUÉ QUIERES HACER FLUIR</p>
       <div>{solutions.map((item,i)=>{const ItemIcon=item.icon;const active=activeSolution===i;return <button key={item.slug} className={active?'active':''} aria-pressed={active} aria-controls="solution-focus" onClick={()=>setActiveSolution(i)}>{active&&<motion.i layoutId="solution-route-active"/>}<span>{item.n}</span><ItemIcon/><b>{item.title}</b><small>{active?'Ahora viendo':'Seleccionar'}</small></button>})}</div>
      </nav>
      <div className="gateway-current" aria-hidden="true"><i/><i/><i/><i/></div>
      <AnimatePresence mode="wait"><motion.article id="solution-focus" className="gateway-scene" key={s.slug} aria-live="polite" initial={{opacity:0,x:38,filter:'blur(8px)'}} animate={{opacity:1,x:0,filter:'blur(0px)'}} exit={{opacity:0,x:-28,filter:'blur(6px)'}} transition={{duration:.58,ease:[.16,1,.3,1]}}>
       <div className="gateway-copy"><p className="scene-number">CORRIENTE {s.n}</p><Icon/><h3>{s.title}</h3><p>{s.copy}</p><a className="gateway-cta" href={`/soluciones/${s.slug}`}><span><b>Explorar {s.title.toLowerCase()}</b><small>Ver alcance, opciones y preguntas</small></span><ArrowUpRight/></a></div>
       <a className="gateway-portal" href={`/soluciones/${s.slug}`} aria-label={`Abrir la solución ${s.title}`}>
        <span className="portal-ring ring-one"/><span className="portal-ring ring-two"/><span className="portal-ring ring-three"/>
        <span className="portal-trace trace-one"/><span className="portal-trace trace-two"/>
        <span className="portal-core"><Icon/></span><span className="portal-label">ENTRAR A {s.title.toUpperCase()} <ArrowUpRight/></span>
       </a>
      </motion.article></AnimatePresence>
      <p className="gateway-hint"><span/> Selecciona una especialidad arriba. Solo mostramos el punto de entrada; el detalle vive en su propia página.</p>
     </div>})()}
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
