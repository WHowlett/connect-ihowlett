"use client";

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
  },
  {
    title: "Resume",
    description: "Cybersecurity resume and experience.",
    href: "https://www.ihowlett.com/resume",
    icon: FileText,
  },
  {
    title: "Projects",
    description: "Hands-on labs and detection engineering work.",
    href: "https://www.ihowlett.com/projects",
    icon: BriefcaseBusiness,
  },
  {
    title: "Contact",
    description: "Reach out directly for opportunities.",
    href: "https://www.ihowlett.com/contact",
    icon: Mail,
  },
];

const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/wayne-howlett/" },
  { title: "GitHub", href: "https://github.com/WHowlett" },
  { title: "X", href: "https://x.com/waynehowlettsec" },
  { title: "Facebook", href: "https://facebook.com/whowlettsecurity" },
];

const focusAreas = [
  "Security Engineering",
  "Detection Engineering",
  "Wazuh SIEM",
  "Cloud Security",
  "API Security",
];

export default function Home() {
  const handleShare = async () => {
    const url = "https://connect.ihowlett.com";
    if (navigator.share) {
      await navigator.share({ title: "Wayne Howlett Cybersecurity", url });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061927] px-5 py-5 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2a3a] via-[#071826] to-[#020617]" />
        <div className="absolute -top-40 left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-300/35 blur-3xl" />
        <div className="absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/18 blur-3xl" />
        <div className="absolute top-20 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-sky-200/20 blur-2xl" />
        <div className="absolute top-1/3 -left-32 h-[360px] w-[360px] rounded-full bg-cyan-500/16 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-blue-500/14 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.055] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(255,255,255,0.22),transparent_42%),radial-gradient(ellipse_at_50%_8%,rgba(34,211,238,0.24),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(56,189,248,0.12),transparent_34%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950/88" />
      </div>

      <section className="mx-auto max-w-md">
        <header className="mb-5 flex items-center justify-between rounded-2xl border border-cyan-200/15 bg-slate-900/55 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Connect Hub
            </p>
            <p className="mt-1 text-xs text-slate-300">Wayne Howlett Cybersecurity</p>
          </div>
          <a
            href="https://www.ihowlett.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-200/40 bg-cyan-200/15 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
          >
            Portfolio
          </a>
        </header>

        <section className="relative overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-slate-900/68 p-6 text-center shadow-2xl shadow-cyan-950/25 backdrop-blur-xl">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/90 to-transparent" />
          <div className="absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-200/18 blur-2xl" />

          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-3xl border border-cyan-200/50 bg-slate-950 shadow-2xl shadow-cyan-950/40 ring-4 ring-cyan-200/15">
            <img src="/profiletemp.jpeg" alt="Wayne Howlett" className="h-full w-full object-cover" />
          </div>

          <div className="relative mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/35 bg-cyan-200/12 px-3 py-1 text-xs font-semibold text-cyan-100">
            <ShieldCheck className="h-3.5 w-3.5" /> Open to entry-level roles
          </div>

          <h1 className="relative mt-4 text-3xl font-bold tracking-tight">Wayne Howlett</h1>
          <p className="relative mt-1 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Cybersecurity
          </p>

          <p className="relative mt-4 text-sm leading-6 text-slate-200">
            Security Engineering • Detection Engineering • Wazuh SIEM • Cloud & API Security
          </p>
          <p className="relative mt-3 text-sm leading-6 text-slate-300">
            Building practical projects, documenting evidence, and growing toward deeper security architecture skills.
          </p>
        </section>

        <section className="mt-5 grid gap-3">
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between rounded-2xl border p-4 text-left shadow-lg shadow-black/10 transition hover:-translate-y-0.5 ${
                  link.primary
                    ? "border-cyan-200/70 bg-cyan-300 text-slate-950 shadow-cyan-950/40 hover:bg-cyan-200"
                    : "border-cyan-200/10 bg-slate-900/68 backdrop-blur hover:border-cyan-300 hover:bg-slate-900/85"
                }`}
              >
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
        </section>

        <section className="mt-5 rounded-3xl border border-cyan-200/10 bg-slate-900/62 p-5 shadow-lg shadow-black/10 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Focus</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <span key={f} className="rounded-full border border-cyan-200/12 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-slate-200">
                {f}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-cyan-200/30 bg-cyan-200/10 p-5 shadow-lg shadow-cyan-950/10 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Open To</p>
          <p className="mt-2 text-sm leading-6 text-slate-200">
            SOC Analyst, Security Analyst, Junior Security Engineer, detection support, cloud security support, and API security support roles.
          </p>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-cyan-200/10 bg-slate-900/68 p-3 text-center text-sm font-semibold text-slate-100 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
            >
              {s.title}
            </a>
          ))}
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3">
          <button onClick={handleShare} className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-950/40 transition hover:-translate-y-0.5 hover:bg-cyan-200">
            <Share2 className="h-4 w-4" /> Share
          </button>
          <a href="/wayne-howlett.vcf" className="flex items-center justify-center gap-2 rounded-2xl border border-cyan-300 py-3 text-center font-bold text-cyan-200 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-200/10">
            <Download className="h-4 w-4" /> Save
          </a>
        </section>

        <a href="mailto:wayne@ihowlett.com" className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-cyan-200/10 bg-slate-900/62 px-4 py-4 text-sm font-semibold text-slate-200 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:border-cyan-300 hover:text-cyan-200">
          <Mail className="h-4 w-4" /> wayne@ihowlett.com
        </a>

        <footer className="mt-6 rounded-2xl border border-cyan-200/10 bg-slate-900/50 px-4 py-5 text-center text-xs leading-5 text-slate-400 shadow-lg shadow-black/10 backdrop-blur-xl">
          <p className="font-semibold text-slate-200">Wayne Howlett Cybersecurity</p>
          <p className="mt-1">Built for QR scans, quick sharing, and professional connection.</p>
          <p className="mt-2 text-[11px] text-slate-500">© 2026 Wayne Howlett</p>
        </footer>
      </section>
    </main>
  );
}
