"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine, ArrowUpRight, Code2, Compass,
  GitBranch, Globe2, Link2, Mail, MapPin, MessageSquareText,
  Minus, Plus, RotateCcw, ShieldCheck, X
} from "lucide-react";

type Destination = {
  id: string; title: string; eyebrow: string; description: string;
  x: number; y: number; tone: string; href?: string; action?: string;
  icon: typeof Globe2;
};
const destinations: Destination[] = [
  { id:"portfolio", title:"Portfolio", eyebrow:"EXPLORE", description:"Discover my engineering, security, cloud, and development work.",x:206,y:165,tone:"aqua",href:"https://www.ihowlett.com",icon:Globe2 },
  { id:"github",title:"GitHub",eyebrow:"SOURCE CODE",description:"See repositories, experiments, and the code behind my projects.",x:785,y:152,tone:"purple",href:"https://github.com/WHowlett",icon:GitBranch },
  { id:"linkedin",title:"LinkedIn",eyebrow:"PROFESSIONAL",description:"Connect with me professionally and follow my career journey.",x:865,y:355,tone:"blue",href:"https://www.linkedin.com/in/wayne-howlett/",icon:Link2 },
  { id:"resume",title:"Resume",eyebrow:"MY EXPERIENCE",description:"View my technical support, cybersecurity, and development experience.",x:762,y:582,tone:"mint",href:"/doc/wayne-howlett-resume.pdf",icon:ArrowDownToLine },
  { id:"contact",title:"Contact",eyebrow:"SAY HELLO",description:"Written communication works best: email or text me directly.",x:212,y:562,tone:"amber",href:"mailto:wayne@ihowlett.com",action:"Email me",icon:Mail },
  { id:"projects",title:"Projects",eyebrow:"SELECTED WORK",description:"Explore hands-on labs, apps, infrastructure, and security projects.",x:107,y:358,tone:"pink",href:"https://www.ihowlett.com/projects",icon:Code2 },
  { id:"expertise",title:"Expertise",eyebrow:"WHAT I DO",description:"IT support, systems and networking, security operations, and full-stack development.",x:510,y:70,tone:"blue",href:"https://www.ihowlett.com",icon:ShieldCheck }
];
const CENTER={x:500,y:355};
const MIN=.52, MAX=1.85;
const clamp=(n:number,min:number,max:number)=>Math.max(min,Math.min(max,n));

export default function Home() {
  const viewport=useRef<HTMLDivElement>(null);
  const pointers=useRef(new Map<number,{x:number;y:number}>());
  const gesture=useRef<{x:number;y:number;distance:number;zoom:number;panX:number;panY:number}|null>(null);
  const moved=useRef(false);
  const [size,setSize]=useState({w:1000,h:640});
  const [view,setView]=useState({zoom:.85,x:0,y:0});
  const [selected,setSelected]=useState<string|null>(null);
  const [query,setQuery]=useState("");
  const [searchOpen,setSearchOpen]=useState(false);
  const [light,setLight]=useState(false);
  const active=destinations.find(d=>d.id===selected);
  const fit=useCallback((w:number,h:number)=>clamp(Math.min((w-38)/1100,(h-24)/760,1),MIN,1),[]);
  useEffect(()=>{
    const el=viewport.current;
    if(!el)return;
    const observer=new ResizeObserver(entries=>{
      const rect=entries[0]?.contentRect;
      if(!rect)return;
      setSize({w:rect.width,h:rect.height});
      if(!el.dataset.initialized){
        setView({zoom:fit(rect.width,rect.height),x:0,y:0});
        el.dataset.initialized="true";
      }
    });
    observer.observe(el);
    return()=>observer.disconnect();
  },[fit]);
  const reset=()=>{setView({zoom:fit(size.w,size.h),x:0,y:0});setSelected(null);};
  const adjustZoom=(factor:number,clientX?:number,clientY?:number)=>{
    const rect=viewport.current?.getBoundingClientRect();
    const px=rect&&clientX!==undefined?clientX-rect.left-rect.width/2:0;
    const py=rect&&clientY!==undefined?clientY-rect.top-rect.height/2:0;
    setView(v=>{
      const z=clamp(v.zoom*factor,MIN,MAX), ratio=z/v.zoom;
      return {zoom:z,x:px-(px-v.x)*ratio,y:py-(py-v.y)*ratio};
    });
  };
  const focus=(d:Destination)=>{
    setSelected(d.id);
    setSearchOpen(false);
    setQuery("");
    setView(v=>({...v,x:(CENTER.x-d.x)*v.zoom*.5,y:(CENTER.y-d.y)*v.zoom*.5}));
  };
  const onPointerDown=(event:React.PointerEvent<HTMLDivElement>)=>{
    if(event.pointerType==="mouse"&&event.button!==0)return;
    pointers.current.set(event.pointerId,{x:event.clientX,y:event.clientY});
    moved.current=false;
    if(pointers.current.size===2){
      const [a,b]=Array.from(pointers.current.values());
      const distance=Math.hypot(a.x-b.x,a.y-b.y);
      gesture.current={x:(a.x+b.x)/2,y:(a.y+b.y)/2,distance,zoom:view.zoom,panX:view.x,panY:view.y};
    }
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove=(event:React.PointerEvent<HTMLDivElement>)=>{
    const old=pointers.current.get(event.pointerId);
    if(!old)return;
    pointers.current.set(event.pointerId,{x:event.clientX,y:event.clientY});
    if(Math.hypot(event.clientX-old.x,event.clientY-old.y)>2)moved.current=true;
    if(pointers.current.size===2&&gesture.current){
      const [a,b]=Array.from(pointers.current.values());
      const midpoint={x:(a.x+b.x)/2,y:(a.y+b.y)/2};
      const currentDist=Math.hypot(a.x-b.x,a.y-b.y);
      const g=gesture.current;
      const z=clamp(g.zoom*currentDist/Math.max(1,g.distance),MIN,MAX);
      const rect=viewport.current?.getBoundingClientRect();
      if(!rect)return;
      const startX=g.x-rect.left-rect.width/2,startY=g.y-rect.top-rect.height/2;
      const nowX=midpoint.x-rect.left-rect.width/2,nowY=midpoint.y-rect.top-rect.height/2;
      const scale=z/g.zoom;
      setView({zoom:z,x:nowX-(startX-g.panX)*scale,y:nowY-(startY-g.panY)*scale});
      moved.current=true;
    }else if(pointers.current.size===1){
      setView(v=>({...v,x:v.x+event.clientX-old.x,y:v.y+event.clientY-old.y}));
    }
  };
  const onPointerUp=(event:React.PointerEvent<HTMLDivElement>)=>{
    pointers.current.delete(event.pointerId);
    gesture.current=null;
    if(pointers.current.size===1){
      const one=Array.from(pointers.current.values())[0];
      gesture.current={x:one.x,y:one.y,distance:1,zoom:view.zoom,panX:view.x,panY:view.y};
    }
  };
  const result=destinations.filter(d=>(d.title+" "+d.description).toLowerCase().includes(query.toLowerCase()));
  return (
    <main className={light?"connect-shell light":"connect-shell"}>
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
      <header className="topbar">
        <a className="brand" href="https://www.ihowlett.com" aria-label="Wayne Howlett main website"><span className="brand-mark">W<span>.</span></span><span><strong>WAYNE HOWLETT</strong><small>INTERACTIVE CONNECT</small></span></a>
        <div className="top-actions">
          <span className="live-badge"><i/> OPEN TO CONNECT</span>
          <button className="top-button theme" onClick={()=>setLight(v=>!v)} aria-label={light?"Switch to dark theme":"Switch to light theme"}>{light?"Dark mode":"Light mode"}</button>
          <a className="top-contact" href="mailto:wayne@ihowlett.com"><Mail size={16}/> <span>Get in touch</span><ArrowUpRight size={15}/></a>
        </div>
      </header>
      <section className="hero-intro">
        <div className="intro-overline"><span className="intro-line"/> THE HUMAN BEHIND THE TECHNOLOGY <span className="intro-line"/></div>
        <h1>Let’s <em>connect.</em></h1>
        <p>Explore my world of technology, projects, and ideas. Select a destination, or just wander.</p>
      </section>
      <section className="map-section" aria-label="Interactive connection map">
        <div className="map-header"><span><MapPin size={14}/> CONNECTION MAP <b>/</b> 07 DESTINATIONS</span><span className="map-hint">DRAG TO EXPLORE · SCROLL OR PINCH TO ZOOM</span></div>
        <div
          className="map-viewport" ref={viewport}
          onWheel={e=>{if(e.ctrlKey||Math.abs(e.deltaY)>0){e.preventDefault();adjustZoom(Math.exp(-e.deltaY*.0012),e.clientX,e.clientY);}}}
          onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}
        >
          <div className="map-grid"/>
          <div className="map-stage" style={{transform:"translate(calc(-50% + "+view.x+"px),calc(-50% + "+view.y+"px)) scale("+view.zoom+")"}}>
            <svg className="links-layer" viewBox="0 0 1000 700" aria-hidden="true">
              <defs><linearGradient id="path-grad"><stop offset="0%" stopColor="#4de3d2" stopOpacity=".62"/><stop offset="100%" stopColor="#9681ff" stopOpacity=".46"/></linearGradient></defs>
              {destinations.map(d=><g key={d.id}><path d={"M 500 355 Q "+((500+d.x)/2+((d.y-355)*.12))+" "+((355+d.y)/2-28)+" "+d.x+" "+d.y} fill="none" stroke="url(#path-grad)" strokeWidth={selected===d.id?2.5:1.4} strokeDasharray={selected===d.id?"none":"5 8"} opacity={selected && selected !== d.id ? .35 : 1}/><circle cx={d.x} cy={d.y} r="3" fill="#7fe9ea"/></g>)}
              <circle cx="500" cy="355" r="167" fill="none" stroke="currentColor" strokeOpacity=".12" strokeDasharray="3 12"/>
              <circle cx="500" cy="355" r="235" fill="none" stroke="currentColor" strokeOpacity=".07"/>
              <circle cx="500" cy="355" r="290" fill="none" stroke="currentColor" strokeOpacity=".05"/>
            </svg>
            <div className="center-node" style={{left:CENTER.x,top:CENTER.y}}>
              <div className="center-halo"/><div className="center-icon">WH<span>.</span></div>
              <strong>WAYNE HOWLETT</strong><small>ENGINEER · DEVELOPER · SECURITY</small>
            </div>
            {destinations.map(d=>{
              const Icon=d.icon;
              return <button type="button" key={d.id} onClick={()=>{if(!moved.current)focus(d);moved.current=false;}} className={"map-node tone-"+d.tone+(selected===d.id?" active":"")} style={{left:d.x,top:d.y}} aria-label={"Explore "+d.title} aria-pressed={selected===d.id}>
                <span className="node-icon"><Icon size={23} strokeWidth={1.7}/></span><span className="node-copy"><small>{d.eyebrow}</small><strong>{d.title}</strong></span><ArrowUpRight className="node-arrow" size={16}/>
              </button>;
            })}
          </div>
          <div className="map-tools">
            <button type="button" aria-label="Zoom in" onPointerDown={e=>e.stopPropagation()} onClick={()=>adjustZoom(1.22)}><Plus size={19}/></button>
            <button type="button" aria-label="Zoom out" onPointerDown={e=>e.stopPropagation()} onClick={()=>adjustZoom(1/1.22)}><Minus size={19}/></button>
            <button type="button" aria-label="Reset view" onPointerDown={e=>e.stopPropagation()} onClick={reset}><RotateCcw size={18}/></button>
          </div>
          <div className="zoom-indicator">{Math.round(view.zoom*100)}%</div>
          {active&&<aside className="detail-card" onPointerDown={e=>e.stopPropagation()}>
            <button className="detail-close" onClick={()=>setSelected(null)} aria-label="Close details"><X size={18}/></button>
            <span className="detail-eyebrow">{active.eyebrow}</span><h2>{active.title}</h2><p>{active.description}</p>
            <a href={active.href} target={active.href?.startsWith("http")||active.id==="resume"?"_blank":undefined} rel="noopener noreferrer">{active.action||("Explore "+active.title)} <ArrowUpRight size={16}/></a>
            {active.id==="contact"&&<a className="secondary-action" href="sms:+19832176195"><MessageSquareText size={16}/> Send a text</a>}
          </aside>}
        </div>
        <div className="map-bottom"><span><Compass size={15}/> YOUR NEXT CONNECTION IS ONE CLICK AWAY</span><span>DESIGNED FOR EXPLORATION</span></div>
      </section>
      <nav className="quick-access" aria-label="Quick destinations">
        <div className="quick-title"><span>QUICK ACCESS</span><p>Not into maps? Jump straight to where you need to go.</p></div>
        <div className="quick-links">
          <a href="/doc/wayne-howlett-resume.pdf" target="_blank" rel="noopener noreferrer"><ArrowDownToLine size={17}/> Resume</a>
          <a href="https://github.com/WHowlett" target="_blank" rel="noopener noreferrer"><GitBranch size={17}/> GitHub</a>
          <a href="https://www.linkedin.com/in/wayne-howlett/" target="_blank" rel="noopener noreferrer"><Link2 size={17}/> LinkedIn</a>
          <a href="mailto:wayne@ihowlett.com"><Mail size={17}/> Email</a>
          <a href="sms:+19832176195"><MessageSquareText size={17}/> Text</a>
        </div>
      </nav>
      <footer><span>© {new Date().getFullYear()} WAYNE HOWLETT</span><span>BUILT WITH CURIOSITY AND CODE</span><a href="https://www.ihowlett.com">BACK TO PORTFOLIO <ArrowUpRight size={13}/></a></footer>
    </main>
  );
}
