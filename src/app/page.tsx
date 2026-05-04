import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  ShieldCheck,
  Terminal,
  Twitter,
  Users,
} from "lucide-react";

const primaryLinks = [
  {
    title: "Main Portfolio",
    description: "View my full cybersecurity portfolio, projects, skills, and resume.",
    href: "https://www.ihowlett.com",
    icon: Globe,
    featured: true,
  },
  {
    title: "Resume",
    description: "Review my cybersecurity resume and career overview.",
    href: "https://www.ihowlett.com/resume",
    icon: FileText,
    featured: true,
  },
  {
    title: "Projects",
    description: "Explore completed case studies and hands-on security projects.",
    href: "https://www.ihowlett.com/projects",
    icon: BriefcaseBusiness,
    featured: true,
  },
  {
    title: "Contact Me",
    description: "Reach out for opportunities, networking, or collaboration.",
    href: "https://www.ihowlett.com/contact",
    icon: Mail,
    featured: true,
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    description: "Professional profile, updates, and networking.",
    href: "https://www.linkedin.com/in/wayne-howlett/",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    description: "Code, portfolio projects, and technical work.",
    href: "https://github.com/WHowlett",
    icon: Github,
  },
  {
    title: "X / Twitter",
    description: "Cybersecurity learning notes and project updates.",
    href: "https://x.com/waynehowlettsec",
    icon: Twitter,
  },
  {
    title: "Facebook Page",
    description: "Professional cybersecurity page and updates.",
    href: "https://facebook.com/whowlettsecurity",
    icon: Users,
  },
];

const focusAreas = [
  "Security Engineering",
  "Detection Engineering",
  "Wazuh SIEM",
  "Cloud Security",
  "API Security",
  "Risk-Based Design",
];

const roleTargets = [
  "SOC Analyst",
  "Security Analyst",
  "Junior Security Engineer",
  "Detection Engineering Support",
  "Cloud Security Support",
  "API Security Support",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-10 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
      </div>

      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col justify-center">
        {/* Top badge */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
          <ShieldCheck className="h-4 w-4" />
          Open to entry-level cybersecurity opportunities
        </div>

        {/* Hero card */}
        <section className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur md:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/30 bg-slate-950 shadow-2xl shadow-cyan-950/40">
              <ShieldCheck className="h-10 w-10 text-cyan-400" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Wayne Howlett Cybersecurity
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Connect with Wayne Howlett
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Early-career cybersecurity professional focused on hands-on
              security engineering, detection engineering, Wazuh SIEM, cloud
              security, API security, and risk-based design.
            </p>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              Building toward deeper security architecture skills through
              practical labs, documented projects, and continuous learning.
            </p>
          </div>

          {/* Focus tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300"
              >
                {area}
              </span>
            ))}
          </div>

          {/* Main links */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {primaryLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-950/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 opacity-0 transition group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>

                      <div>
                        <h2 className="font-bold text-white group-hover:text-cyan-300">
                          {link.title}
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {link.description}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-cyan-400" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Roles section */}
        <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <div className="flex items-start gap-4">
            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 md:flex">
              <Terminal className="h-5 w-5 text-cyan-400" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                What I’m open to
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                I’m looking for opportunities where I can contribute, keep
                learning, and grow with a security-focused team.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {roleTargets.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-cyan-400/20 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social links */}
        <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">
                Professional links
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Follow, connect, or review my technical work across platforms.
              </p>
            </div>

            <Code2 className="hidden h-6 w-6 text-cyan-400 md:block" />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:-translate-y-1 hover:border-cyan-400"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <Icon className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
                      <div>
                        <h3 className="font-bold text-white group-hover:text-cyan-300">
                          {link.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {link.description}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-cyan-400" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Direct email */}
        <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center">
          <h2 className="text-xl font-bold text-white">Prefer email?</h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-300">
            For opportunities, collaboration, or professional networking, email
            is the best direct contact method.
          </p>

          <a
            href="mailto:wayne@ihowlett.com"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            <Mail className="h-5 w-5" />
            wayne@ihowlett.com
          </a>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-slate-500">
          <p>© 2026 Wayne Howlett. Cybersecurity link hub.</p>
          <p className="mt-2">
            Built to connect recruiters, collaborators, and security-focused
            communities to my work.
          </p>
        </footer>
      </section>
    </main>
  );
}