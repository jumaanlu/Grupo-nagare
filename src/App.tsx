import {useEffect, useState} from 'react';
import {motion, useScroll, useSpring} from 'motion/react';
import {ArrowUp, ArrowUpRight, AudioLines, Building2, House, Menu, Network, ShieldCheck, X, Zap} from 'lucide-react';
import ContactPage from './ContactPage';
import './solutions.css';
import './brand.css';
import './editorial.css';
import './identity.css';
import './light.css';

const WA='https://wa.me/525585263040?text=Hola%20NAGARE%2C%20me%20interesa%20una%20asesor%C3%ADa%20para%20mi%20proyecto.';
const services=[
 {title:'Conectividad Continua',copy:'Redes WiFi y cableadas diseñadas con grado de ingeniería. Sin puntos ciegos, sin caídas. Infraestructura robusta lista para soportar la operación de hoy y escalar hacia el futuro.',icon:Network},
 {title:'Seguridad Inteligente',copy:'Sistemas de videovigilancia y control de acceso que protegen sin complicar tu día a día. Monitoreo constante, gestión intuitiva y control total en tus manos.',icon:ShieldCheck},
 {title:'Experiencias Integradas',copy:'Audio, video y automatización que se sienten naturales. Unimos los sistemas de tu entorno para crear espacios que responden a tus necesidades con un solo toque.',icon:AudioLines},
];
const spaces=[
 {title:'Residencial',copy:'Tecnología discreta y silenciosa para vivir con absoluta calma.',icon:House,img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1500&auto=format&fit=crop'},
 {title:'Corporativo',copy:'Infraestructura de alto rendimiento que mantiene a tu equipo conectado y productivo.',icon:Building2,img:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1500&auto=format&fit=crop'},
 {title:'Hospitalidad',copy:'Soluciones operativas que garantizan experiencias consistentes y memorables para tus huéspedes.',icon:Zap,img:'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=85&w=1500&auto=format&fit=crop'},
];

export default function App(){
 if(window.location.pathname.replace(/\/$/,'')==='/contacto')return <ContactPage/>;
 const [open,setOpen]=useState(false);const {scrollYProgress}=useScroll();const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:24});
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open]);
 const go=(id:string)=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
 return <div className="light-site">
  <motion.div className="progress" style={{scaleX}}/>
  <nav className="light-nav"><button className="light-brand" onClick={()=>scrollTo({top:0,behavior:'smooth'})}><b>NAGARE</b><span>INGENIERÍA DE SISTEMAS</span></button><div className="light-links"><button onClick={()=>go('filosofia')}>Filosofía</button><button onClick={()=>go('soluciones')}>Soluciones</button><button onClick={()=>go('especialidades')}>Especialidades</button></div><a href="/contacto" className="pink-button small">Hablemos <ArrowUpRight/></a><button className="light-menu" onClick={()=>setOpen(!open)} aria-label="Abrir menú">{open?<X/>:<Menu/>}</button></nav>
  {open&&<motion.div className="light-mobile" initial={{opacity:0}} animate={{opacity:1}}><button onClick={()=>go('filosofia')}>Filosofía</button><button onClick={()=>go('soluciones')}>Soluciones</button><button onClick={()=>go('especialidades')}>Especialidades</button><a href="/contacto">Hablemos</a></motion.div>}
  <main>
   <section className="light-hero"><div className="water-rings" aria-hidden="true"><i/><i/><i/><i/></div><motion.div className="hero-wording" initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.9,ease:[.16,1,.3,1]}}><p className="light-kicker">INTEGRACIÓN TECNOLÓGICA</p><h1>Tecnología que fluye.<br/><em>Sistemas que no fallan.</em></h1><p>Diseñamos e integramos infraestructuras de red, seguridad y automatización que trabajan en perfecta armonía. Tú disfrutas el espacio; nosotros dominamos la complejidad.</p><a href="/contacto" className="pink-button">Hablemos de tu proyecto <ArrowUpRight/></a></motion.div><button className="light-scroll" onClick={()=>go('filosofia')}>Descubre nuestro enfoque <span>↓</span></button></section>
   <section id="filosofia" className="light-philosophy"><motion.p className="light-kicker" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>LA FILOSOFÍA</motion.p><motion.h2 initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>El ciclo perfecto<br/>de la integración.</motion.h2><motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>En Nagare, entendemos que una infraestructura sólida no tiene principio ni fin. Es un ecosistema continuo donde la conectividad, la seguridad y el confort se retroalimentan. Como el agua que encuentra su cauce, adaptamos la tecnología a la arquitectura de tu espacio para que el rendimiento nunca se detenga.</motion.p><motion.i className="growing-line" initial={{scaleY:0}} whileInView={{scaleY:1}} viewport={{once:true,amount:.3}} transition={{duration:1.2}}/></section>
   <section id="soluciones" className="light-services"><header><p className="light-kicker">SOLUCIONES</p><h2>Ingeniería que trabaja<br/>en armonía.</h2></header><div className="service-open-grid">{services.map((s,i)=>{const Icon=s.icon;return <motion.article key={s.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}}><div className="line-icon"><Icon/><span/></div><small>0{i+1}</small><h3>{s.title}</h3><p>{s.copy}</p><a href="/contacto">Explorar solución <ArrowUpRight/></a></motion.article>})}</div></section>
   <section id="especialidades" className="light-specialties"><header><p className="light-kicker">ÁREAS DE ESPECIALIDAD</p><h2>Tecnología adaptada<br/>a cada espacio.</h2></header><div className="specialty-rows">{spaces.map((s,i)=>{const Icon=s.icon;return <motion.article className={i%2?'reverse':''} key={s.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><div className="specialty-image"><img src={s.img} alt={`Espacio ${s.title}`}/><span>0{i+1}</span></div><div className="specialty-copy"><Icon/><p className="light-kicker">{s.title}</p><h3>{s.copy}</h3><a href="/contacto">Diseñar este espacio <ArrowUpRight/></a></div></motion.article>})}</div></section>
   <section className="light-closing"><div className="closing-rings" aria-hidden="true"><i/><i/><i/></div><p className="light-kicker">CERREMOS EL CICLO</p><h2>Hagamos que tu tecnología<br/><em>fluya sin interrupciones.</em></h2><p>Detrás de cada gran espacio, hay una ingeniería impecable. Cuéntanos qué necesitas resolver y diseñemos el ecosistema adecuado.</p><div><a className="pink-button" href={WA} target="_blank" rel="noreferrer">Iniciar conversación <ArrowUpRight/></a><a className="text-action" href="/contacto">Enviar datos del proyecto</a></div></section>
  </main>
  <footer className="light-footer"><div className="light-brand"><b>NAGARE</b><span>INGENIERÍA DE SISTEMAS</span></div><div className="legal"><a href="/contacto">Contacto</a><span>Aviso de privacidad</span><span>© 2026 NAGARE</span></div><button aria-label="Volver arriba" onClick={()=>scrollTo({top:0,behavior:'smooth'})}><ArrowUp/></button></footer>
 </div>
}
