"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  Globe,
  Mail,
  ShieldCheck,
  Terminal,
  Users,
  Code2,
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
    <main className="min-h-screen bg-slate-950 text-white px-5 py-6">
      <section className="mx-auto max-w-md">

        {/* HERO */}
        <div className="text-center">
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-3xl border border-cyan-400/30 shadow-lg">
            <img src="/profiletemp.jpeg" alt="Wayne" className="h-full w-full object-cover" />
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
            <ShieldCheck className="h-3 w-3" /> Open to roles
          </div>

          <h1 className="mt-3 text-2xl font-bold">Wayne Howlett</h1>
          <p className="text-cyan-400 text-sm">Cybersecurity</p>

          <p className="mt-3 text-sm text-slate-300">
            Security Engineering • Detection Engineering • Wazuh SIEM • Cloud & API Security
          </p>
        </div>

        {/* PRIMARY LINKS */}
        <div className="mt-6 grid gap-3">
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                className={`flex items-center justify-between rounded-xl p-4 ${
                  link.primary
                    ? "bg-cyan-400 text-black"
                    : "bg-slate-900 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">{link.title}</p>
                    <p className="text-xs opacity-70">{link.description}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        {/* FOCUS */}
        <div className="mt-6">
          <h2 className="text-sm text-slate-400">Focus</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <span key={f} className="px-3 py-1 text-xs bg-slate-900 rounded-full">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* SOCIAL */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {socialLinks.map((s) => (
            <a key={s.title} href={s.href} target="_blank" className="bg-slate-900 rounded-xl p-3 text-center hover:bg-slate-800">
              {s.title}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button onClick={handleShare} className="bg-cyan-400 text-black rounded-xl py-3 font-semibold">
            Share
          </button>
          <a href="/wayne-howlett.vcf" className="border border-cyan-400 text-cyan-400 rounded-xl py-3 text-center font-semibold">
            Save Contact
          </a>
        </div>

        <a href="mailto:wayne@ihowlett.com" className="block mt-5 text-center text-sm text-slate-400">
          wayne@ihowlett.com
        </a>

      </section>
    </main>
  );
}
