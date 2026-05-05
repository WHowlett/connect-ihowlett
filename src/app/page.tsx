"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  FileText,
  Globe,
  Mail,
  ShieldCheck,
  Share2,
} from "lucide-react";

const primaryLinks = [
  {
    title: "Main Portfolio",
    description: "Full cybersecurity portfolio, case studies, and skills.",
    href: "https://www.ihowlett.com",
    icon: Globe,
    primary: true,
    tracking: "portfolio",
  },
  {
    title: "Resume",
    description: "Cybersecurity resume and experience.",
    href: "https://www.ihowlett.com/resume",
    icon: FileText,
    tracking: "resume",
  },
  {
    title: "Projects",
    description: "Hands-on labs and detection engineering work.",
    href: "https://www.ihowlett.com/projects",
    icon: BriefcaseBusiness,
    tracking: "projects",
  },
  {
    title: "Contact",
    description: "Reach out directly for opportunities.",
    href: "https://www.ihowlett.com/contact",
    icon: Mail,
    tracking: "contact",
  },
];

const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/wayne-howlett/", tracking: "linkedin" },
  { title: "GitHub", href: "https://github.com/WHowlett", tracking: "github" },
  { title: "X", href: "https://x.com/waynehowlettsec", tracking: "x" },
  { title: "Facebook", href: "https://facebook.com/whowlettsecurity", tracking: "facebook" },
];

const focusAreas = [
  "Security Engineering",
  "Detection Engineering",
  "Wazuh SIEM",
  "Cloud Security",
  "API Security",
];

const recruiterSignals = [
  "Hands-on lab builder",
  "Evidence-based documentation",
  "SIEM and log analysis practice",
  "Clear written communication",
];

const openRoles = [
  {
    title: "SOC Analyst",
    detail: "A strong fit for alert review, log analysis, triage, SIEM workflows, and hands-on investigation support.",
  },
  {
    title: "Security Analyst",
    detail: "A strong fit for risk review, documentation, security operations support, vulnerability awareness, and evidence-based analysis.",
  },
  {
    title: "Junior Security Engineer",
    detail: "A strong fit for building, testing, documenting, and improving security controls under guidance from experienced teams.",
  },
  {
    title: "Detection Support",
    detail: "A strong fit for Wazuh SIEM work, rule testing, alert validation, log review, and detection-focused lab projects.",
  },
  {
    title: "Cloud Security Support",
    detail: "A strong fit for cloud security learning, secure configuration support, access control review, and cloud-focused documentation.",
  },
  {
    title: "API Security Support",
    detail: "A strong fit for API security learning, endpoint review, authentication awareness, and secure application thinking.",
  },
];

function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [selectedRole, setSelectedRole] = useState(openRoles[0]);
  const [shareMessage, setShareMessage] = useState("");
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const handleShare = async () => {
    const url = "https://connect.ihowlett.com";

    if (navigator.share) {
      await navigator.share({ title: "Wayne Howlett Cybersecurity", url });
      setShareMessage("Shared successfully");
    } else {
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied to clipboard");
    }

    window.setTimeout(() => setShareMessage(""), 2500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061927] px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-white">
      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-slate-950/50 backdrop-blur">
        <div
          className="h-full bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400 shadow-[0_0_18px_rgba(103,232,249,0.8)] transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: "left" }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2a3a] via-[#071826] to-[#020617]" />
        <div
          className="absolute -top-40 left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-300/35 blur-3xl pulse-glow"
          style={{ transform: `translateX(-50%) translateY(${scrollProgress * 24}px) scale(${1 + scrollProgress * 0.05})` }}
        />
        <div
          className="absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/18 blur-3xl pulse-glow"
          style={{ transform: `translateX(-50%) translateY(${scrollProgress * 40}px)` }}
        />
        <div className="absolute top-20 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-sky-200/20 blur-2xl" />
        <div className="absolute top-1/3 -left-32 h-[360px] w-[360px] rounded-full bg-cyan-500/16 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-blue-500/14 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(255,255,255,0.22),transparent_42%),radial-gradient(ellipse_at_50%_8%,rgba(34,211,238,0.24),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(56,189,248,0.12),transparent_34%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950/88" />
      </div>

      <section className="mx-auto max-w-md">
        <header className="reveal-up delay-1 mb-5 rounded-2xl border border-cyan-200/15 bg-slate-900/55 p-4 shadow-xl shadow-black/20 backdrop-blur-xl depth-card">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Connect Hub</p>
              <p className="mt-1 text-xs text-slate-300">Wayne Howlett Cybersecurity</p>
            </div>
            <span className="rounded-full border border-cyan-200/20 bg-slate-950/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
              View Mode
            </span>
          </div>

          <div className="mt-4 rounded-2xl border border-cyan-200/15 bg-slate-950/45 p-1">
            <div className="grid grid-cols-2 gap-1">
              <button
                type="button"
                onClick={() => setRecruiterMode(false)}
                className={`rounded-xl px-3 py-2 text-xs font-bold transition ${!recruiterMode ? "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30" : "text-slate-300 hover:bg-cyan-200/10 hover:text-cyan-100"}`}
              >
                Standard View
              </button>
              <button
                type="button"
                onClick={() => setRecruiterMode(true)}
                className={`rounded-xl px-3 py-2 text-xs font-bold transition ${recruiterMode ? "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30" : "text-slate-300 hover:bg-cyan-200/10 hover:text-cyan-100"}`}
              >
                Recruiter View
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-400">
            {recruiterMode
              ? "Recruiter View highlights fit, proof, resume, and contact actions."
              : "Standard View keeps the page simple for quick sharing and networking."}
          </p>
        </header>

        {recruiterMode && (
          <ScrollReveal className="mb-5">
            <section className="rounded-3xl border border-cyan-200/30 bg-cyan-200/10 p-5 shadow-lg shadow-cyan-950/10 backdrop-blur-xl depth-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Recruiter Snapshot</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Early-career cybersecurity candidate focused on hands-on security engineering, SIEM detection practice, cloud/API security support, and clear technical documentation.
              </p>
              <div className="mt-4 grid gap-2">
                {recruiterSignals.map((signal) => (
                  <div key={signal} className="rounded-2xl border border-cyan-200/15 bg-slate-950/45 px-3 py-2 text-sm font-semibold text-slate-100">
                    {signal}
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        <section className="reveal-up delay-2 relative overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-slate-900/68 p-6 text-center shadow-2xl shadow-cyan-950/25 backdrop-blur-xl depth-card">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/90 to-transparent" />
          <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-200/24 blur-2xl pulse-glow" />
          <div className="absolute left-1/2 top-4 h-32 w-32 -translate-x-1/2 rounded-full bg-white/15 blur-2xl pulse-glow" />

          <div className="relative mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-200/30 bg-slate-950/45 p-2 shadow-2xl shadow-cyan-950/40 ring-4 ring-cyan-200/10 backdrop-blur float-soft">
            <img src="/icon.png" alt="Wayne Howlett Cybersecurity logo" className="max-h-full max-w-full object-contain" />
          </div>

          <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-[2rem] border border-cyan-200/50 bg-slate-950 shadow-2xl shadow-cyan-950/40 ring-4 ring-cyan-200/15">
            <img src="/profiletemp.jpeg" alt="Wayne Howlett" className="h-full w-full object-cover" />
          </div>

          <div className="relative mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-200/12 px-3 py-1 text-xs font-semibold text-cyan-100">
            <ShieldCheck className="h-3.5 w-3.5" /> Open to entry-level roles
          </div>

          <h1 className="relative mt-4 text-3xl font-bold tracking-tight">Wayne Howlett</h1>
          <p className="relative mt-1 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Cybersecurity</p>

          <p className="relative mt-4 text-sm leading-6 text-slate-200">Security Engineering • Detection Engineering • Wazuh SIEM • Cloud & API Security</p>
          <p className="relative mt-3 text-sm leading-6 text-slate-300">Building practical projects, documenting evidence, and growing toward deeper security architecture skills.</p>
        </section>

        <ScrollReveal className="mt-5 grid gap-3">
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" data-link={link.tracking} className={`group tap-lift light-sweep flex items-center justify-between rounded-2xl border p-4 text-left shadow-lg shadow-black/10 transition hover:-translate-y-0.5 ${link.primary ? "border-cyan-200/70 bg-cyan-300 text-slate-950 shadow-cyan-950/40 hover:bg-cyan-200" : "border-cyan-200/10 bg-slate-900/68 backdrop-blur hover:border-cyan-300 hover:bg-slate-900/85"}`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${link.primary ? "bg-slate-950/10" : "bg-cyan-300/10"}`}>
                    <Icon className={`h-5 w-5 ${link.primary ? "text-slate-950" : "text-cyan-300"}`} />
                  </div>
                  <div>
                    <p className="font-bold">{link.title}</p>
                    <p className={`text-xs leading-5 ${link.primary ? "text-slate-800" : "text-slate-300"}`}>{link.description}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            );
          })}
        </ScrollReveal>

        <ScrollReveal className="mt-5">
          <section className="rounded-3xl border border-cyan-200/10 bg-slate-900/62 p-5 shadow-lg shadow-black/10 backdrop-blur-xl tap-lift depth-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Focus</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {focusAreas.map((f) => <span key={f} className="rounded-full border border-cyan-200/12 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-slate-200">{f}</span>)}
            </div>
          </section>
        </ScrollReveal>

        {recruiterMode && (
          <ScrollReveal className="mt-5">
            <section className="rounded-3xl border border-cyan-200/20 bg-slate-900/62 p-5 shadow-lg shadow-black/10 backdrop-blur-xl depth-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Featured Proof</p>
              <h2 className="mt-3 text-lg font-bold text-slate-100">Wazuh Detection Engineering</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Built and validated a custom Wazuh detection workflow for SSH brute-force activity using Kali Linux, Hydra, Linux logs, and rule tuning.
              </p>
              <a href="https://www.ihowlett.com/projects/wazuh-detection-engineering" target="_blank" rel="noopener noreferrer" data-link="featured-project" className="tap-lift light-sweep mt-4 flex items-center justify-center gap-2 rounded-2xl border border-cyan-300 bg-cyan-300 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
                View Featured Project <ArrowUpRight className="h-4 w-4" />
              </a>
            </section>
          </ScrollReveal>
        )}

        <ScrollReveal className="mt-5">
          <section className="rounded-3xl border border-cyan-200/30 bg-cyan-200/10 p-5 shadow-lg shadow-cyan-950/10 backdrop-blur-xl depth-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Open To</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {openRoles.map((role) => {
                const isSelected = selectedRole.title === role.title;
                return (
                  <button key={role.title} type="button" onClick={() => setSelectedRole(role)} data-role={role.title} className={`tap-lift rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm shadow-black/10 transition ${isSelected ? "border-cyan-200 bg-cyan-200 text-slate-950" : "border-cyan-200/25 bg-slate-950/45 text-slate-100 hover:border-cyan-200 hover:bg-cyan-200/10"}`}>
                    {role.title}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 rounded-2xl border border-cyan-200/15 bg-slate-950/45 p-4 text-left">
              <p className="text-sm font-bold text-cyan-200">{selectedRole.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{selectedRole.detail}</p>
            </div>
          </section>
        </ScrollReveal>

        {recruiterMode && (
          <ScrollReveal className="mt-5">
            <section className="rounded-3xl border border-cyan-200/20 bg-cyan-200/10 p-5 shadow-lg shadow-cyan-950/10 backdrop-blur-xl depth-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Fast Recruiter Path</p>
              <div className="mt-3 grid gap-3">
                <a href="https://www.ihowlett.com/resume" target="_blank" rel="noopener noreferrer" data-link="recruiter-resume" className="tap-lift light-sweep rounded-2xl bg-cyan-300 px-4 py-3 text-center text-sm font-bold text-slate-950">Review Resume</a>
                <a href="https://www.ihowlett.com/contact" target="_blank" rel="noopener noreferrer" data-link="recruiter-contact" className="tap-lift light-sweep rounded-2xl border border-cyan-300 px-4 py-3 text-center text-sm font-bold text-cyan-200">Contact Wayne</a>
              </div>
            </section>
          </ScrollReveal>
        )}

        <ScrollReveal className="mt-5 grid grid-cols-2 gap-3">
          {socialLinks.map((s) => <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" data-link={s.tracking} className="tap-lift light-sweep rounded-2xl border border-cyan-200/10 bg-slate-900/68 p-3 text-center text-sm font-semibold text-slate-100 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200 depth-card">{s.title}</a>)}
        </ScrollReveal>

        <ScrollReveal className="mt-5 grid grid-cols-2 gap-3">
          <button onClick={handleShare} data-link="share" className="tap-lift light-sweep flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:-translate-y-0.5 hover:bg-cyan-200">
            <Share2 className="h-4 w-4" /> Share
          </button>
          <a href="/wayne-howlett.vcf" data-link="save-contact" className="tap-lift light-sweep flex items-center justify-center gap-2 rounded-2xl border border-cyan-300 py-3 text-center font-bold text-cyan-200 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-200/10">
            <Download className="h-4 w-4" /> Save
          </a>
        </ScrollReveal>

        {shareMessage && <p className="reveal-up mt-3 text-center text-xs font-semibold text-cyan-200">{shareMessage}</p>}

        <ScrollReveal className="mt-5">
          <a href="mailto:wayne@ihowlett.com" data-link="email" className="tap-lift flex items-center justify-center gap-2 rounded-2xl border border-cyan-200/10 bg-slate-900/62 px-4 py-4 text-sm font-semibold text-slate-200 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:border-cyan-300 hover:text-cyan-200 depth-card">
            <Mail className="h-4 w-4" /> wayne@ihowlett.com
          </a>
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <footer className="rounded-2xl border border-cyan-200/10 bg-slate-900/50 px-4 py-5 text-center text-xs leading-5 text-slate-400 shadow-lg shadow-black/10 backdrop-blur-xl depth-card">
            <p className="font-semibold text-slate-200">Wayne Howlett Cybersecurity</p>
            <p className="mt-1">Built for QR scans, quick sharing, and professional connection.</p>
            <p className="mt-2 text-[11px] text-slate-500">© 2026 Wayne Howlett</p>
          </footer>
        </ScrollReveal>
      </section>
    </main>
  );
}
