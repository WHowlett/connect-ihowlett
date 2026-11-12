"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from "react";
import {
  ArrowDownToLine, ArrowLeft, ArrowUpRight, Code2, Compass, Crosshair,
  GitBranch, Globe2, Link2, Mail, Maximize2, MessageSquareText,
  Minus, Moon, Network, Plus, RotateCcw, ShieldCheck, Sun, X
} from "lucide-react";

type Destination = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  desktop: [number, number];
  mobile: [number, number];
  tone: string;
  href: string;
  cta: string;
  icon: typeof Globe2;
  facts: string[];
};

const HUB = { x: 1000, y: 750 };
const MIN_ZOOM = 0.3;
const MAX_ZOOM = 2.3;
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
const destinations: Destination[] = [
  {
    id: "portfolio", title: "Portfolio", subtitle: "MY DIGITAL WORLD",
    description: "A closer look at what I build, operate, connect, monitor, and secure.",
    desktop: [550, 400], mobile: [700, 510], tone: "teal",
    href: "https://www.ihowlett.com", cta: "Enter portfolio", icon: Globe2,
    facts: ["Engineering", "Infrastructure", "Cybersecurity"]
  },
  {
    id: "github", title: "GitHub", subtitle: "OPEN SOURCE & CODE",
    description: "Projects, experiments, cybersecurity labs, and the code behind the work.",
    desktop: [1510, 400], mobile: [1300, 510], tone: "lavender",
    href: "https://github.com/WHowlett", cta: "Explore repositories", icon: GitBranch,
    facts: ["Repositories", "Source code", "Technical projects"]
  },
  {
    id: "linkedin", title: "LinkedIn", subtitle: "PROFESSIONAL NETWORK",
    description: "Connect professionally and follow my technology and career journey.",
    desktop: [1700, 780], mobile: [1370, 770], tone: "blue",
    href: "https://www.linkedin.com/in/wayne-howlett/", cta: "View LinkedIn", icon: Link2,
    facts: ["Experience", "Professional network", "Articles"]
  },
  {
    id: "resume", title: "Resume", subtitle: "MY EXPERIENCE",
    description: "A current overview of my IT support, security, software, and systems background.",
    desktop: [1480, 1120], mobile: [1240, 1050], tone: "mint",
    href: "/doc/wayne-howlett-resume.pdf", cta: "Open resume PDF", icon: ArrowDownToLine,
    facts: ["Experience", "Education", "Technical skills"]
  },
  {
    id: "contact", title: "Contact", subtitle: "LET'S TALK",
    description: "For professional conversations, written communication is preferred. Email or text is best.",
    desktop: [520, 1120], mobile: [760, 1050], tone: "gold",
    href: "mailto:wayne@ihowlett.com", cta: "Send an email", icon: Mail,
    facts: ["Email", "Text", "Professional inquiries"]
  },
  {
    id: "projects", title: "Projects", subtitle: "THINGS I'VE BUILT",
    description: "Hands-on security investigations, applications, systems, labs, and development work.",
    desktop: [300, 780], mobile: [630, 770], tone: "rose",
    href: "https://www.ihowlett.com/projects", cta: "Explore projects", icon: Code2,
    facts: ["Security labs", "Applications", "Networking"]
  },
  {
    id: "expertise", title: "Expertise", subtitle: "THE BIG PICTURE",
    description: "IT support, systems, networking, security operations, cloud, and full-stack development.",
    desktop: [1000, 180], mobile: [1000, 370], tone: "sky",
    href: "https://www.ihowlett.com", cta: "See my capabilities", icon: ShieldCheck,
    facts: ["IT & networking", "Security operations", "Development"]
  }
];

type View = { zoom: number; x: number; y: number };
type Point = { x: number; y: number };
const scaleFor = (w: number) => (w < 680 ? 0.75 : w < 1100 ? 0.73 : 0.87);
const pointFor = (item: Destination, mobile: boolean) => {
  const [x, y] = mobile ? item.mobile : item.desktop;
  return { x, y };
};

export default function Home() {
  const universe = useRef<HTMLDivElement>(null);
  const pointerMap = useRef(new Map<number, Point>());
  const startGesture = useRef<{
    midpoint: Point; distance: number; view: View; moved: boolean
  } | null>(null);

  const [size, setSize] = useState({ width: 1280, height: 800 });
  const [view, setView] = useState<View>({ zoom: 0.87, x: 0, y: 0 });
  const [selected, setSelected] = useState<string | null>(null);
  const [light, setLight] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);
  const mobile = size.width < 680;
  const active = destinations.find((item) => item.id === selected);
  const semanticDetail = view.zoom >= 0.93;
  const deepDetail = view.zoom >= 1.25;

  const reset = useCallback(() => {
    setView({ zoom: scaleFor(universe.current?.clientWidth ?? size.width), x: 0, y: 0 });
    setSelected(null);
  }, [size.width]);

  useEffect(() => {
    const root = universe.current;
    if (!root) return;
    const resize = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      const height = entry.contentRect.height;
      setSize({ width, height });
      if (!root.dataset.ready) {
        setView({ zoom: scaleFor(width), x: 0, y: 0 });
        root.dataset.ready = "true";
      }
    });
    resize.observe(root);
    return () => resize.disconnect();
  }, []);

  const zoomAt = useCallback((factor: number, clientX?: number, clientY?: number) => {
    const box = universe.current?.getBoundingClientRect();
    const anchorX = box && clientX !== undefined ? clientX - box.left - box.width / 2 : 0;
    const anchorY = box && clientY !== undefined ? clientY - box.top - box.height / 2 : 0;
    setView((v) => {
      const zoom = clamp(v.zoom * factor, MIN_ZOOM, MAX_ZOOM);
      const ratio = zoom / v.zoom;
      return { zoom, x: anchorX - (anchorX - v.x) * ratio, y: anchorY - (anchorY - v.y) * ratio };
    });
  }, []);

  const focus = (item: Destination) => {
    const target = pointFor(item, mobile);
    const zoom = Math.max(1.06, view.zoom);
    setView({
      zoom,
      x: (HUB.x - target.x) * zoom + (mobile ? 0 : -170),
      y: (HUB.y - target.y) * zoom + (mobile ? -65 : 0)
    });
    setSelected(item.id);
  };

  const fitAll = () => {
    const horizontal = mobile ? 1010 : 1930;
    const vertical = mobile ? 1010 : 1390;
    const z = clamp(Math.min((size.width - 24) / horizontal, (size.height - 80) / vertical), MIN_ZOOM, 0.8);
    setView({ zoom: z, x: 0, y: 0 });
    setSelected(null);
  };

  const points = () => [...pointerMap.current.values()];
  const midpoint = (items: Point[]) =>
    ({ x: items.reduce((n, p) => n + p.x, 0) / items.length,
       y: items.reduce((n, p) => n + p.y, 0) / items.length });
  const distance = (items: Point[]) =>
    items.length < 2 ? 1 : Math.hypot(items[0].x - items[1].x, items[0].y - items[1].y);

  const onDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button,a,[data-no-pan]")) return;
    pointerMap.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const all = points();
    startGesture.current = { midpoint: midpoint(all), distance: distance(all), view: { ...view }, moved: false };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerMap.current.has(event.pointerId) || !startGesture.current) return;
    pointerMap.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const all = points();
    const gesture = startGesture.current;
    const middle = midpoint(all);
    const deltaX = middle.x - gesture.midpoint.x;
    const deltaY = middle.y - gesture.midpoint.y;
    if (Math.hypot(deltaX, deltaY) > 3 || all.length > 1) gesture.moved = true;
    if (all.length < 2) {
      setView({ ...gesture.view, x: gesture.view.x + deltaX, y: gesture.view.y + deltaY });
    } else {
      const zoom = clamp(gesture.view.zoom * distance(all) / Math.max(1, gesture.distance), MIN_ZOOM, MAX_ZOOM);
      const rect = universe.current?.getBoundingClientRect();
      if (!rect) return;
      const startX = gesture.midpoint.x - rect.left - rect.width / 2;
      const startY = gesture.midpoint.y - rect.top - rect.height / 2;
      const currentX = middle.x - rect.left - rect.width / 2;
      const currentY = middle.y - rect.top - rect.height / 2;
      const ratio = zoom / gesture.view.zoom;
      setView({
        zoom,
        x: currentX - (startX - gesture.view.x) * ratio,
        y: currentY - (startY - gesture.view.y) * ratio
      });
    }
  };
  const onUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerMap.current.delete(event.pointerId);
    const all = points();
    startGesture.current = all.length
      ? { midpoint: midpoint(all), distance: distance(all), view: { ...view }, moved: false }
      : null;
  };
  const onWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    zoomAt(Math.exp(-event.deltaY * 0.0013), event.clientX, event.clientY);
  };

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest("input, textarea, select")) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "+" || e.key === "=") { e.preventDefault(); zoomAt(1.18); }
      if (e.key === "-") { e.preventDefault(); zoomAt(1 / 1.18); }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [zoomAt]);

  return (
    <main className={light ? "universe light" : "universe"}>
      <div className="world-viewport" ref={universe} aria-label="Explore Wayne Howlett's interactive connection universe"
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp}
        onPointerCancel={onUp} onWheel={onWheel}>
        <div className="world-surface" style={{
          transform: `translate(calc(-50% + ${view.x}px), calc(-50% + ${view.y}px)) scale(${view.zoom})`
        }}>
          <div className="world-grid" aria-hidden="true" />
          <svg className="world-connections" viewBox="0 0 2000 1500" aria-hidden="true">
            <defs>
              <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4cead9" stopOpacity=".65" />
                <stop offset="55%" stopColor="#76a5f6" stopOpacity=".35" />
                <stop offset="100%" stopColor="#bc8cff" stopOpacity=".63" />
              </linearGradient>
            </defs>
            {[250, 430, 630].map((r) => <circle key={r} cx={HUB.x} cy={HUB.y}
              r={r} fill="none" stroke="currentColor" strokeOpacity={r === 250 ? 0.16 : 0.09}
              strokeWidth="1" strokeDasharray={r === 630 ? "4 17" : "3 12"} />)}
            {destinations.map((item) => {
              const p = pointFor(item, mobile);
              const xMid = (HUB.x + p.x) / 2;
              const yMid = (HUB.y + p.y) / 2;
              return <g key={item.id}>
                <path d={`M ${HUB.x} ${HUB.y} Q ${xMid + (p.y - HUB.y) * 0.11} ${yMid - (p.x - HUB.x) * 0.07} ${p.x} ${p.y}`}
                  stroke="url(#connection-gradient)" strokeWidth={selected === item.id ? 3.3 : 1.8}
                  fill="none" strokeDasharray={selected === item.id ? undefined : "5 13"}
                  opacity={selected && selected !== item.id ? 0.26 : 1} />
                <circle cx={p.x} cy={p.y} r={selected === item.id ? 9 : 5} fill="#7be9da" opacity=".75" />
              </g>;
            })}
          </svg>
          <div className="ambient-orbit ambient-orbit-a" aria-hidden="true"/>
          <div className="ambient-orbit ambient-orbit-b" aria-hidden="true"/>

          <button className="identity-core" style={{ left: HUB.x, top: HUB.y }}
            onClick={() => { setSelected(null); setView({ zoom: Math.max(view.zoom, 0.93), x: 0, y: 0 }); }}
            aria-label="Return to Wayne Howlett center">
            <span className="identity-emblem">WH<span>.</span></span>
            <span className="identity-overline">WELCOME TO MY NETWORK</span>
            <span className="identity-name">WAYNE<br/>HOWLETT</span>
            <span className="identity-roles">ENGINEER <i/> DEVELOPER <i/> CYBERSECURITY</span>
            <span className="identity-cta">EXPLORE THE CONNECTIONS <ArrowUpRight size={15}/></span>
          </button>

          {destinations.map((item) => {
            const p = pointFor(item, mobile);
            const Icon = item.icon;
            return <button key={item.id} type="button"
              className={`world-node tone-${item.tone} ${selected === item.id ? "selected" : ""} ${semanticDetail ? "expanded" : ""}`}
              style={{ left: p.x, top: p.y }}
              onClick={() => focus(item)}
              aria-pressed={selected === item.id}
              aria-label={`Explore ${item.title}`}>
              <span className="node-emblem"><Icon size={29} strokeWidth={1.7}/></span>
              <span className="node-meta">
                <span className="node-overline">{item.subtitle}</span>
                <strong>{item.title}</strong>
                {semanticDetail && <span className="node-caption">{item.facts.slice(0, 2).join(" · ")}</span>}
              </span>
              <ArrowUpRight size={18} className="node-arrow" />
              {deepDetail && <span className="node-deep">{item.facts.join("  /  ")}</span>}
            </button>;
          })}
          <span className="world-coordinate coord-a" aria-hidden="true">SECURITY / SYSTEMS / SOFTWARE</span>
          <span className="world-coordinate coord-b" aria-hidden="true">CONNECTED BY CURIOSITY</span>
        </div>
        <div className="screen-grain" aria-hidden="true"/>
      </div>

      <header className="floating-header" data-no-pan>
        <button className="home-brand" onClick={reset} aria-label="Return to center">
          <span className="brand-glyph">W<span>.</span></span>
          <span><strong>WAYNE HOWLETT</strong><small>EXPLORE MY UNIVERSE</small></span>
        </button>
        <div className="header-right">
          <span className="connect-status"><i/> AVAILABLE TO CONNECT</span>
          <button className="header-icon" onClick={() => setLight(!light)}
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}>
            {light ? <Moon size={18}/> : <Sun size={18}/>}
          </button>
          <a className="header-mail" href="mailto:wayne@ihowlett.com"><Mail size={17}/><span>Get in touch</span><ArrowUpRight size={16}/></a>
        </div>
      </header>

      <div className="floating-intro" data-no-pan>
        <span className="intro-kicker"><span/> A WORLD OF CONNECTIONS</span>
        <h1>Explore beyond<br/><em>the ordinary.</em></h1>
        <p>Move through my network. Zoom in to discover more.</p>
      </div>

      <div className="floating-guide" data-no-pan>
        <Compass size={18}/>
        <span><strong>YOUR WORLD, YOUR ROUTE</strong><small>{mobile ? "Drag to explore · pinch to zoom" : "Drag to explore · scroll to zoom"}</small></span>
      </div>

      <div className="floating-zoom" data-no-pan>
        <button title="Zoom in" aria-label="Zoom in" onClick={() => zoomAt(1.24)}><Plus size={19}/></button>
        <button title="Zoom out" aria-label="Zoom out" onClick={() => zoomAt(1 / 1.24)}><Minus size={19}/></button>
        <button title="View entire map" aria-label="View entire map" onClick={fitAll}><Maximize2 size={18}/></button>
        <button title="Return to center" aria-label="Return to center" onClick={reset}><Crosshair size={18}/></button>
        <span>{Math.round(view.zoom * 100)}%</span>
      </div>

      {active && <aside className="destination-sheet" aria-live="polite" data-no-pan>
        <button className="sheet-close" onClick={() => setSelected(null)} aria-label="Close destination"><X size={20}/></button>
        <span className="sheet-eyebrow"><span/> CURRENT DESTINATION</span>
        <div className={`sheet-icon tone-${active.tone}`}><active.icon size={30}/></div>
        <p className="sheet-subtitle">{active.subtitle}</p>
        <h2>{active.title}</h2>
        <p className="sheet-description">{active.description}</p>
        <div className="sheet-tags">{active.facts.map(fact => <span key={fact}>{fact}</span>)}</div>
        <a className="sheet-primary" href={active.href}
          target={active.href.startsWith("https:") || active.id === "resume" ? "_blank" : undefined}
          rel={active.href.startsWith("https:") || active.id === "resume" ? "noopener noreferrer" : undefined}>
          {active.cta} <ArrowUpRight size={18}/>
        </a>
        {active.id === "contact" && <a className="sheet-secondary" href="sms:+19832176195">
          <MessageSquareText size={18}/> Send a text
        </a>}
        <button className="sheet-back" onClick={() => setSelected(null)}><ArrowLeft size={16}/> Back to exploring</button>
      </aside>}

      <nav className="floating-dock" aria-label="Quick links" data-no-pan>
        <a href="https://www.ihowlett.com" target="_blank" rel="noopener noreferrer"><Globe2 size={19}/><span>Portfolio</span></a>
        <a href="/doc/wayne-howlett-resume.pdf" target="_blank" rel="noopener noreferrer"><ArrowDownToLine size={19}/><span>Resume</span></a>
        <a href="https://github.com/WHowlett" target="_blank" rel="noopener noreferrer"><GitBranch size={19}/><span>GitHub</span></a>
        <a href="https://www.linkedin.com/in/wayne-howlett/" target="_blank" rel="noopener noreferrer"><Link2 size={19}/><span>LinkedIn</span></a>
        <a href="mailto:wayne@ihowlett.com"><Mail size={19}/><span>Email</span></a>
      </nav>
      <div className="world-footer" data-no-pan>
        <span>© {new Date().getFullYear()} WAYNE HOWLETT</span>
        <span>AN INTERACTIVE CONNECTION EXPERIENCE <Network size={13}/></span>
      </div>
    </main>
  );
}
