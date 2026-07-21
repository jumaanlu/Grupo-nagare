import {FormEvent, useRef, useState} from 'react';
import {ArrowLeft, ArrowUpRight, Check, Send} from 'lucide-react';
import {motion} from 'motion/react';
import './contact.css';

const WA='https://wa.me/525585263040?text=Hola%20NAGARE%2C%20me%20interesa%20una%20asesor%C3%ADa%20para%20mi%20proyecto.';
const PROJECT='gen-lang-client-0509682900';
const DATABASE='ai-studio-nagare-5f90df3c-65e2-45f6-a7ab-5e76f0eb76b3';
const API_KEY='AIzaSyCxqYiMJ-SZVzz_E-MafaLrjszIWbrCHGQ';

export default function ContactPage(){
 const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
 const [error,setError]=useState('');
 const openedAt=useRef(Date.now());

 const submit=async(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault(); setError('');
  const form=e.currentTarget; const data=new FormData(form);
  if(data.get('website')||Date.now()-openedAt.current<2500)return;
  const name=String(data.get('name')||'').trim();
  const email=String(data.get('email')||'').trim();
  const phone=String(data.get('phone')||'').trim();
  if(!email&&!phone){setError('Comparte al menos un correo o teléfono para poder contactarte.');return}
  setStatus('sending');
  const stringValue=(value:string)=>({stringValue:value.slice(0,1500)});
  const fields={
   name:stringValue(name),company:stringValue(String(data.get('company')||'')),email:stringValue(email),phone:stringValue(phone),
   service:stringValue(String(data.get('service')||'')),preferredContact:stringValue(String(data.get('preferredContact')||'')),
   preferredTime:stringValue(String(data.get('preferredTime')||'')),message:stringValue(String(data.get('message')||'')),
   source:stringValue('gruponagare.com/contacto'),status:stringValue('nuevo'),createdAt:{timestampValue:new Date().toISOString()}
  };
  try{
   const response=await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/${DATABASE}/documents/contactRequests?key=${API_KEY}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({fields})});
   if(!response.ok)throw new Error('No se pudo guardar');
   form.reset();setStatus('success');
  }catch{setStatus('error');setError('No pudimos enviar tus datos en este momento. Puedes escribirnos por WhatsApp.');}
 };

 return <main className="contact-page">
  <div className="contact-flow" aria-hidden="true"><i/><i/><span/></div>
  <nav className="contact-nav"><a href="/" className="contact-brand"><b>NAGARE</b><span>INGENIERÍA DE SISTEMAS</span></a><a href="/" className="back"><ArrowLeft/> Volver al inicio</a></nav>
  <div className="contact-layout">
   <motion.section className="contact-intro" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}}>
    <p className="kicker">INICIEMOS EL FLUJO</p><h1>Cuéntanos qué<br/><em>quieres crear.</em></h1>
    <p>Comparte lo esencial. Nuestro equipo revisará tu proyecto y se pondrá en contacto contigo por el medio que prefieras.</p>
    <div className="privacy-note"><Check/><span>Tus datos se utilizarán únicamente para responder a esta solicitud.</span></div>
    <a className="whatsapp-option" href={WA} target="_blank" rel="noreferrer">¿Prefieres algo inmediato? WhatsApp <ArrowUpRight/></a>
   </motion.section>
   <motion.section className="form-shell" initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{delay:.12}}>
    {status==='success'?<div className="form-success" role="status"><span><Check/></span><p>SOLICITUD RECIBIDA</p><h2>Gracias por contactarnos.</h2><p>Ya tenemos tus datos. Nuestro equipo revisará tu mensaje y te buscará pronto.</p><button onClick={()=>{setStatus('idle');openedAt.current=Date.now()}}>Enviar otra solicitud</button><a href="/">Volver al inicio</a></div>:
    <form onSubmit={submit}>
     <div className="form-heading"><span>01 / DATOS DEL PROYECTO</span><p>Los campos marcados con * son obligatorios.</p></div>
     <label className="full">Nombre completo *<input name="name" autoComplete="name" required maxLength={100}/></label>
     <label>Empresa u organización<input name="company" autoComplete="organization" maxLength={120}/></label>
     <label>Teléfono<input name="phone" type="tel" autoComplete="tel" maxLength={30}/></label>
     <label>Correo electrónico<input name="email" type="email" autoComplete="email" maxLength={150}/></label>
     <label>Servicio de interés<select name="service" defaultValue=""><option value="">Selecciona una opción</option><option>Conectividad</option><option>Seguridad</option><option>Experiencias</option><option>Soporte</option><option>Proyecto integral</option><option>Otro</option></select></label>
     <label>Medio de contacto preferido<select name="preferredContact" defaultValue="Teléfono"><option>Teléfono</option><option>WhatsApp</option><option>Correo electrónico</option></select></label>
     <label>Horario preferido<input name="preferredTime" placeholder="Ej. lunes a viernes, 10 a 14 h" maxLength={100}/></label>
     <label className="full">Cuéntanos sobre tu proyecto *<textarea name="message" required maxLength={1500} rows={5} placeholder="Espacio, necesidad, ubicación y cualquier detalle que consideres importante."/></label>
     <label className="honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off"/></label>
     <label className="consent full"><input type="checkbox" required/><span>Acepto que NAGARE utilice estos datos únicamente para dar seguimiento a mi solicitud. *</span></label>
     {error&&<p className="form-error" role="alert">{error}</p>}
     <button className="submit-contact" disabled={status==='sending'}>{status==='sending'?'Enviando…':<>Enviar solicitud <Send/></>}</button>
    </form>}
   </motion.section>
  </div>
 </main>
}
