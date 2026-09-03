"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Globe,
  GraduationCap,
  Link2,
  Mail,
  MessageSquare,
  MonitorCheck,
  Network,
  Search,
  Server,
  Share2,
  ShieldCheck,
  Smartphone,
  UserRoundCheck,
  Wrench,
} from "lucide-react";

const siteUrl = "https://connect.ihowlett.com";
const portfolioUrl = "https://www.ihowlett.com";
const resumeUrl = "/doc/wayne-howlett-resume.pdf";
const projectsUrl = "https://www.ihowlett.com/projects";
const contactUrl = "https://www.ihowlett.com/contact";
const emailAddress = "wayne@ihowlett.com";
const textDisplay = "(983) 217-6195";
const smsHref = "sms:+19832176195";
const shareTitle = "Wayne Howlett | Support & Cybersecurity Professional";
const shareText =
  "Connect with Wayne Howlett for technical support, networking, security monitoring, cloud/systems, current resume, and email/text contact.";

type IconType = LucideIcon;

type LinkItem = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
  tracking: string;
  primary?: boolean;
};

type SocialLink = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
  tracking: string;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
  tags: string[];
};

type ProofItem = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
  linkLabel: string;
};

type ExperienceItem = {
  role: string;
  organization: string;
  dates: string;
  technology?: boolean;
};

const identityAreas = [
  "Technical Support",
  "Networking",
  "Security Monitoring",
  "Cloud & Systems",
];

const primaryLinks: LinkItem[] = [
  {
    title: "Main Portfolio",
    description:
      "Technical projects, cybersecurity, networking, development, cloud, and architecture work.",
    href: portfolioUrl,
    icon: Globe,
    primary: true,
    tracking: "portfolio",
  },
  {
    title: "View Resume",
    description: "Open the current technical support and cybersecurity PDF.",
    href: resumeUrl,
    icon: FileText,
    tracking: "resume",
  },
  {
    title: "Projects",
    description: "Hands-on security, networking, cloud, and development work.",
    href: projectsUrl,
    icon: BriefcaseBusiness,
    tracking: "projects",
  },
  {
    title: "Contact",
    description: "Email, text, or chat preferred for professional contact.",
    href: contactUrl,
    icon: Mail,
    tracking: "contact",
  },
];

const socialLinks: SocialLink[] = [
  {
    title: "LinkedIn",
    description: "Professional profile and experience.",
    href: "https://www.linkedin.com/in/wayne-howlett/",
    icon: Link2,
    tracking: "linkedin",
  },
  {
    title: "GitHub",
    description: "Code, technical projects, and repositories.",
    href: "https://github.com/WHowlett",
    icon: GitBranch,
    tracking: "github",
  },
];

const capabilitySummary: Capability[] = [
  {
    title: "IT Support",
    description:
      "Technical support, end-user support, hardware/software troubleshooting, remote troubleshooting, and Microsoft 365.",
    icon: Wrench,
    tags: ["Troubleshooting", "End-user support", "Microsoft 365"],
  },
  {
    title: "Networking & Systems",
    description:
      "Windows, Linux, TCP/IP, DNS, DHCP, subnetting, routing, VLANs, firewalls, ACLs, and virtualized environments.",
    icon: Network,
    tags: ["Windows/Linux", "TCP/IP", "Firewalls"],
  },
  {
    title: "Security Operations",
    description:
      "Wazuh, Splunk, SIEM monitoring, incident response, log analysis, endpoint monitoring, and vulnerability assessment.",
    icon: ShieldCheck,
    tags: ["SIEM", "Incident response", "Log analysis"],
  },
  {
    title: "Cloud & Development",
    description:
      "Cloud security, API/application security, Next.js, React, TypeScript, Python, Docker, and Git/GitHub.",
    icon: Cloud,
    tags: ["Cloud security", "APIs", "Next.js"],
  },
];

const recruiterCapabilities: Capability[] = [
  {
    title: "IT Support & Troubleshooting",
    description:
      "Support workflows, end-user troubleshooting, remote support, hardware/software issues, Microsoft 365, and clear handoffs.",
    icon: Wrench,
    tags: ["Support", "M365", "RCA"],
  },
  {
    title: "Security Operations & SIEM",
    description:
      "Wazuh, Splunk, alert review, log analysis, incident response, endpoint monitoring, and security investigation notes.",
    icon: MonitorCheck,
    tags: ["Wazuh", "Splunk", "IR"],
  },
  {
    title: "Networking & Systems",
    description:
      "TCP/IP, DNS, DHCP, HTTP/HTTPS, subnetting, routing, VLANs, firewalls, ACLs, segmentation, Linux, and Windows.",
    icon: Server,
    tags: ["Linux", "Windows", "Segmentation"],
  },
  {
    title: "Cloud, API & App Security",
    description:
      "Cloud infrastructure, API security, application security, secure remote access, least privilege, and threat modeling.",
    icon: Cloud,
    tags: ["Cloud", "API security", "Least privilege"],
  },
  {
    title: "Software / Web Development",
    description:
      "Next.js, React, React Native, JavaScript, TypeScript, Python, Docker, Git/GitHub, APIs, and connected services.",
    icon: Code2,
    tags: ["React", "TypeScript", "Docker"],
  },
  {
    title: "Documentation & Root Cause",
    description:
      "Requirements gathering, Scrum-based projects, root cause analysis, technical documentation, and mentoring/support.",
    icon: ClipboardCheck,
    tags: ["Documentation", "Scrum", "Mentoring"],
  },
];

const roleFamilies = [
  "IT Support / Help Desk / Technical Support",
  "Security Analyst / SOC / Security Operations",
  "Junior Security Engineer",
  "Network / Systems Support",
  "Cloud / Application / API Security Support",
  "Technical or software support roles",
];

const proofItems: ProofItem[] = [
  {
    title: "Security Monitoring & Cloud Infrastructure",
    description:
      "Cloud-connected Linux, Docker, Wazuh, NextDNS, secure networking, centralized monitoring, distributed endpoints, alert/log analysis, segmentation, and endpoint controls.",
    href: projectsUrl,
    icon: MonitorCheck,
    linkLabel: "View projects",
  },
  {
    title: "iHowlett.com - Web, API & Cloud",
    description:
      "Next.js/TypeScript environment using APIs, Git/GitHub, cloud hosting, DNS, connected services, deployment troubleshooting, and secure web/API design.",
    href: portfolioUrl,
    icon: Globe,
    linkLabel: "View portfolio",
  },
  {
    title: "Security Analysis & Network Architecture",
    description:
      "Wireshark, Splunk, Linux, Nmap, Metasploit, log/network traffic analysis, VLANs, DMZ concepts, firewalls, ACLs, Zero Trust, trust boundaries, and attack-path analysis.",
    href: projectsUrl,
    icon: Search,
    linkLabel: "Explore proof",
  },
  {
    title: "Professional Technology Experience",
    description:
      "Prior IT support, full-stack development, client support, requirements gathering, Scrum-based projects, and technical mentoring/support.",
    href: resumeUrl,
    icon: BriefcaseBusiness,
    linkLabel: "View resume",
  },
];

const experienceItems: ExperienceItem[] = [
  {
    role: "IT & Full Stack Development",
    organization: "Battl Victory Records",
    dates: "May 2022 to November 2022",
    technology: true,
  },
  {
    role: "Full Stack Developer / Scrum Master",
    organization: "Play It Forward Music Foundation",
    dates: "January 2023 to June 2023",
    technology: true,
  },
  {
    role: "Junior Software Developer / Scrum Master",
    organization: "SRJC Multicultural Museum",
    dates: "January 2022 to May 2022",
    technology: true,
  },
  {
    role: "Peer Assisted Learning Specialist",
    organization: "Santa Rosa Junior College",
    dates: "January 2023 to June 2023",
    technology: true,
  },
  {
    role: "Professional Driver",
    organization: "Fresh Freight",
    dates: "August 2023 to Present",
  },
];

const educationItems = [
  "Flatiron School Cybersecurity Engineering - completed 2026",
  "Associate Degree, Full Stack - Santa Rosa Junior College, 2023",
  "Associate Degree, Web & Multimedia - Santa Rosa Junior College, 2023",
  "Arizona State University - Data Science coursework, 2022-2024",
];

const currentFocusItems = [
  "CompTIA CySA+ - in progress / exam upcoming",
  "Security operations, SIEM monitoring, and incident response",
  "Networking/infrastructure, segmentation, and endpoint controls",
  "Cloud, API, and application security",
];

function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
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

function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
      <h2 id={id} className="mt-2 break-words text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h2>
      {children ? <p className="mt-2 max-w-3xl break-words text-sm leading-6 text-slate-300">{children}</p> : null}
    </div>
  );
}

function ExternalLinkIcon() {
  return <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />;
}

function PrimaryActions() {
  return (
    <ScrollReveal>
      <section aria-labelledby="primary-actions">
        <SectionHeading id="primary-actions" eyebrow="Fast path" title="Choose the next step">
          Resume, portfolio, projects, and written contact are kept one tap away for QR sharing and recruiter review.
        </SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2">
          {primaryLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-link={link.tracking}
                className={`group light-sweep tap-lift flex min-h-0 min-w-0 items-start justify-between gap-3 rounded-lg border p-3 text-left shadow-lg shadow-black/15 transition min-[390px]:gap-4 min-[390px]:p-4 sm:min-h-32 ${
                  link.primary
                    ? "border-cyan-200/80 bg-cyan-200 text-slate-950 hover:bg-cyan-100"
                    : "border-white/10 bg-slate-900/76 text-white hover:border-cyan-300/70 hover:bg-slate-900"
                }`}
              >
                <span className="flex min-w-0 gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                      link.primary ? "bg-slate-950/10" : "bg-cyan-300/10"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${link.primary ? "text-slate-950" : "text-cyan-200"}`} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block break-words font-semibold">{link.title}</span>
                    <span className={`mt-1 block text-sm leading-5 ${link.primary ? "text-slate-800" : "text-slate-300"}`}>
                      {link.description}
                    </span>
                  </span>
                </span>
                <ExternalLinkIcon />
              </a>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}

function CapabilityCards({ items }: { items: Capability[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article key={item.title} className="surface-card min-w-0 rounded-lg border border-white/10 bg-slate-900/70 p-3 min-[390px]:p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="break-words font-semibold text-white">{item.title}</h3>
                <p className="mt-2 break-words text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="max-w-full break-words rounded-md border border-cyan-200/15 bg-cyan-200/8 px-2.5 py-1 text-xs font-medium text-cyan-100">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ContactPreference({ compact = false }: { compact?: boolean }) {
  return (
    <ScrollReveal>
      <section
        aria-labelledby={compact ? "recruiter-contact" : "contact-preference"}
        className="rounded-lg border border-cyan-200/18 bg-cyan-200/8 p-3 shadow-lg shadow-black/15 min-[390px]:p-4"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-200 text-slate-950">
            <MessageSquare className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Preferred communication</p>
            <h2 id={compact ? "recruiter-contact" : "contact-preference"} className="mt-2 text-lg font-semibold text-white">
              Email, text, or chat preferred
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Hard of hearing - email, text, or chat preferred. Written communication is preferred over phone calls.
            </p>
            <div className="mt-4 grid gap-2">
              <a
                href={`mailto:${emailAddress}`}
                data-link="email"
                aria-label={`Email Wayne at ${emailAddress}`}
                className="tap-lift flex min-h-12 min-w-0 items-center gap-3 rounded-lg border border-cyan-200/40 bg-slate-950/50 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-slate-950"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-white">Email Wayne</span>
                  <span className="block break-all text-xs font-medium text-cyan-100/85">{emailAddress}</span>
                </span>
              </a>
              <a
                href={smsHref}
                data-link="text"
                aria-label={`Text Wayne at ${textDisplay}`}
                className="tap-lift flex min-h-12 min-w-0 items-center gap-3 rounded-lg border border-cyan-200/40 bg-slate-950/50 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-slate-950"
              >
                <Smartphone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-white">Text Wayne</span>
                  <span className="block break-words text-xs font-medium text-cyan-100/85">{textDisplay}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

function SocialLinks() {
  return (
    <ScrollReveal>
      <section aria-labelledby="social-links">
        <SectionHeading id="social-links" eyebrow="Profiles" title="LinkedIn and GitHub" />
        <div className="profile-link-grid grid gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-link={social.tracking}
                className="group tap-lift light-sweep flex min-h-20 min-w-0 items-center justify-between gap-3 rounded-lg border border-cyan-200/35 bg-slate-900/82 p-3 text-white shadow-lg shadow-black/15 transition hover:border-cyan-200 min-[390px]:min-h-24 min-[390px]:p-4"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/12 text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block whitespace-nowrap font-semibold">{social.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-400">{social.description}</span>
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}

function ShareAndSave({
  onShare,
  shareMessage,
}: {
  onShare: () => void;
  shareMessage: string;
}) {
  return (
    <ScrollReveal>
      <section aria-labelledby="share-save" className="rounded-lg border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-black/15">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Share</p>
        <h2 id="share-save" className="mt-2 text-lg font-semibold text-white">
          QR-friendly contact actions
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2">
          <button
            type="button"
            onClick={onShare}
            data-link="share"
            aria-describedby="share-status"
            className="tap-lift light-sweep flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-200 px-3 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-100"
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
            Share
          </button>
          <a
            href="/wayne-howlett.vcf"
            download
            data-link="save-contact"
            className="tap-lift light-sweep flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cyan-200/45 px-3 py-2 text-center text-sm font-bold text-cyan-100 shadow-lg shadow-black/15 transition hover:border-cyan-200 hover:bg-cyan-200/10"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Save Contact
          </a>
        </div>
        <p id="share-status" role="status" aria-live="polite" aria-atomic="true" className="mt-3 min-h-5 text-sm font-medium text-cyan-100">
          {shareMessage}
        </p>
      </section>
    </ScrollReveal>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="grid gap-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-stretch">
      <div className="surface-hero reveal-up min-w-0 rounded-lg border border-white/10 bg-slate-900/72 p-4 shadow-2xl shadow-black/25 min-[390px]:p-5 sm:p-8 lg:p-10">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-md border border-cyan-200/25 bg-cyan-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
            Connect Hub
          </span>
          <span className="rounded-md border border-emerald-200/25 bg-emerald-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">
            Open to technical opportunities
          </span>
        </div>

        <div className="mt-6 flex min-w-0 items-center gap-3 lg:hidden">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-cyan-200/30 bg-slate-950 shadow-lg shadow-black/25">
            <Image
              src="/profiletemp.jpeg"
              alt="Portrait of Wayne Howlett"
              fill
              priority
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">Wayne Howlett</p>
            <p className="mt-1 text-sm leading-5 text-slate-300">
              Technical support, systems, and security operations.
            </p>
          </div>
        </div>

        <div className="mt-7 max-w-4xl min-[390px]:mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Wayne Howlett</p>
          <h1 id="hero-title" className="mt-3 break-words text-3xl font-bold leading-[1.08] tracking-tight text-white min-[390px]:text-4xl sm:text-5xl lg:text-6xl">
            Support & Cybersecurity Professional
          </h1>
          <p className="mt-4 text-base font-semibold leading-7 text-cyan-100 sm:text-lg">
            {identityAreas.join(" | ")}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            IT and cybersecurity professional combining technical support, software development, networking, cloud infrastructure,
            systems, security operations, troubleshooting, and documentation.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-link="hero-resume"
            className="tap-lift light-sweep inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-200 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-100"
          >
            View Resume
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${emailAddress}`}
            data-link="hero-email"
            className="tap-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cyan-200/45 px-4 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-200/10"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Wayne
          </a>
          <a
            href={smsHref}
            data-link="hero-text"
            className="tap-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cyan-200/45 px-4 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-200/10"
          >
            <Smartphone className="h-4 w-4" aria-hidden="true" />
            Text Wayne
          </a>
        </div>
      </div>

      <aside className="surface-profile reveal-up delay-2 hidden min-w-0 rounded-lg border border-white/10 bg-slate-900/78 p-5 shadow-2xl shadow-black/25 sm:p-6 lg:block">
        <div className="flex items-center justify-between gap-4">
          <div className="relative h-14 w-24 shrink-0">
            <Image
              src="/icon.png"
              alt="Wayne Howlett personal WH logo"
              fill
              priority
              sizes="96px"
              className="object-contain"
            />
          </div>
          <div className="rounded-md border border-cyan-200/20 bg-cyan-200/8 px-3 py-2 text-right text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
            Professional Profile
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-[160px_1fr] lg:grid-cols-1">
          <div className="relative mx-auto aspect-[3/4] w-40 overflow-hidden rounded-lg border border-cyan-200/30 bg-slate-950 shadow-xl shadow-black/30 sm:mx-0 lg:mx-auto lg:w-52">
            <Image
              src="/profiletemp.jpeg"
              alt="Portrait of Wayne Howlett"
              fill
              priority
              sizes="(min-width: 1024px) 208px, 160px"
              className="object-cover"
            />
          </div>
          <div className="grid content-center gap-3">
            <div className="flex min-w-0 items-start gap-3 rounded-lg border border-white/10 bg-slate-950/45 p-3">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
              <p className="break-words text-sm leading-6 text-slate-200">
                Flatiron School Cybersecurity Engineering completed in 2026.
              </p>
            </div>
            <div className="flex min-w-0 items-start gap-3 rounded-lg border border-white/10 bg-slate-950/45 p-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
              <p className="break-words text-sm leading-6 text-slate-200">
                CompTIA CySA+ is the current certification focus, with exam upcoming.
              </p>
            </div>
            <div className="flex min-w-0 items-start gap-3 rounded-lg border border-white/10 bg-slate-950/45 p-3">
              <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
              <p className="break-words text-sm leading-6 text-slate-200">
                Preferred communication: email, text, or chat. Text: {textDisplay}.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

function ViewSwitcher({
  recruiterMode,
  setRecruiterMode,
}: {
  recruiterMode: boolean;
  setRecruiterMode: (value: boolean) => void;
}) {
  return (
    <div className="w-full min-w-0 rounded-lg border border-white/10 bg-slate-950/55 p-1 shadow-lg shadow-black/15" role="group" aria-label="Choose view mode">
      <div className="grid grid-cols-2 gap-1">
        <button
          type="button"
          onClick={() => setRecruiterMode(false)}
          aria-pressed={!recruiterMode}
          className={`min-h-11 min-w-0 rounded-md px-2 py-2 text-sm font-bold transition min-[390px]:px-3 ${
            !recruiterMode ? "bg-cyan-200 text-slate-950 shadow-lg shadow-cyan-950/25" : "text-slate-300 hover:bg-cyan-200/10 hover:text-cyan-100"
          }`}
        >
          Standard View
        </button>
        <button
          type="button"
          onClick={() => setRecruiterMode(true)}
          aria-pressed={recruiterMode}
          className={`min-h-11 min-w-0 rounded-md px-2 py-2 text-sm font-bold transition min-[390px]:px-3 ${
            recruiterMode ? "bg-cyan-200 text-slate-950 shadow-lg shadow-cyan-950/25" : "text-slate-300 hover:bg-cyan-200/10 hover:text-cyan-100"
          }`}
        >
          Recruiter View
        </button>
      </div>
    </div>
  );
}

function SiteHeader({
  recruiterMode,
  setRecruiterMode,
}: {
  recruiterMode: boolean;
  setRecruiterMode: (value: boolean) => void;
}) {
  return (
    <header className="reveal-up flex min-w-0 flex-col gap-3 py-4 min-[390px]:gap-4 sm:flex-row sm:items-center sm:justify-between">
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-cyan-200 focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-slate-950">
        Skip to content
      </a>
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative h-10 w-16 shrink-0">
          <Image src="/icon.png" alt="" fill sizes="64px" className="object-contain" />
        </div>
        <div className="min-w-0">
          <p className="break-words text-sm font-semibold text-white">Wayne Howlett</p>
          <p className="break-words text-xs text-slate-400">Support & Cybersecurity Professional</p>
        </div>
      </div>
      <div className="w-full min-w-0 sm:w-auto sm:min-w-80">
        <ViewSwitcher recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />
      </div>
    </header>
  );
}

function StandardView({
  onShare,
  shareMessage,
}: {
  onShare: () => void;
  shareMessage: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.42fr)]">
      <div className="grid gap-6">
        <PrimaryActions />
        <ScrollReveal>
          <section aria-labelledby="work-with">
            <SectionHeading id="work-with" eyebrow="What I work with" title="Broad technical support, systems, and security capability">
              A concise view for networking and quick sharing. Recruiter View expands the proof and professional experience signal.
            </SectionHeading>
            <CapabilityCards items={capabilitySummary} />
          </section>
        </ScrollReveal>
      </div>
      <div className="grid content-start gap-6">
        <ContactPreference />
        <SocialLinks />
        <ShareAndSave onShare={onShare} shareMessage={shareMessage} />
      </div>
    </div>
  );
}

function RecruiterSnapshot() {
  const signals = [
    "Professional technology experience in IT support, full-stack development, client support, requirements gathering, Scrum projects, and technical mentoring/support.",
    "Current hands-on security environment using Linux servers, Docker, Wazuh, NextDNS, secure networking, centralized monitoring, and distributed endpoints.",
    "Comfortable across support, networking, systems, security operations, cloud/API/application security, and software development contexts.",
  ];

  return (
    <ScrollReveal>
      <section aria-labelledby="recruiter-snapshot" className="rounded-lg border border-cyan-200/20 bg-cyan-200/8 p-5 shadow-lg shadow-black/15 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-200 text-slate-950">
            <UserRoundCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Recruiter snapshot</p>
            <h2 id="recruiter-snapshot" className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Professional technology experience plus current security infrastructure work
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Wayne brings prior professional technical roles together with active hands-on security operations, networking,
              cloud, systems, and development work.
            </p>
          </div>
        </div>
        <ul className="mt-5 grid gap-3">
          {signals.map((signal) => (
            <li key={signal} className="flex gap-3 text-sm leading-6 text-slate-200">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
              <span>{signal}</span>
            </li>
          ))}
        </ul>
      </section>
    </ScrollReveal>
  );
}

function WhereIFit() {
  return (
    <ScrollReveal>
      <section aria-labelledby="where-fit">
        <SectionHeading id="where-fit" eyebrow="Where I fit" title="Role families I can support">
          Broad technical roles where troubleshooting, documentation, systems thinking, and security awareness matter.
        </SectionHeading>
        <div className="grid gap-2">
          {roleFamilies.map((role) => (
            <div key={role} className="flex min-w-0 items-start gap-3 rounded-lg border border-white/10 bg-slate-900/70 p-3 text-sm font-medium leading-6 text-slate-200 shadow-lg shadow-black/10">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" aria-hidden="true" />
              <span className="min-w-0 break-words">{role}</span>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

function ProofSection() {
  return (
    <ScrollReveal>
      <section aria-labelledby="selected-proof">
        <SectionHeading id="selected-proof" eyebrow="Selected proof" title="Evidence across support, systems, security, cloud, and development">
          Recruiter View points to current work without pretending one Wazuh project is the whole story.
        </SectionHeading>
        <div className="grid gap-3 md:grid-cols-2">
          {proofItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="surface-card flex h-full min-w-0 flex-col rounded-lg border border-white/10 bg-slate-900/70 p-3 shadow-lg shadow-black/15 min-[390px]:p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="break-words font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 break-words text-sm leading-6 text-slate-300">{item.description}</p>
                  </div>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-cyan-200/35 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-200/10"
                >
                  {item.linkLabel}
                  <ExternalLinkIcon />
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}

function ExperienceSignal() {
  return (
    <ScrollReveal>
      <section aria-labelledby="experience-signal" className="rounded-lg border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/15 sm:p-6">
        <SectionHeading id="experience-signal" eyebrow="Experience signal" title="Professional technology work is part of the story">
          These entries keep prior professional technical experience visible without turning the Connect page into a full resume.
        </SectionHeading>
        <div className="grid gap-3">
          {experienceItems.map((item) => (
            <article key={`${item.role}-${item.organization}`} className="grid gap-2 border-t border-white/10 pt-3 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
              <div>
                <h3 className="break-words font-semibold text-white">{item.role}</h3>
                <p className="mt-1 break-words text-sm text-slate-300">{item.organization}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                {item.technology ? (
                  <span className="rounded-md border border-cyan-200/20 bg-cyan-200/10 px-2 py-1 text-xs font-semibold text-cyan-100">
                    Technology
                  </span>
                ) : null}
                <span className="text-sm text-slate-400">{item.dates}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

function CurrentFocus() {
  return (
    <ScrollReveal>
      <section aria-labelledby="current-focus" className="rounded-lg border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/15">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
            <BadgeCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Current focus</p>
            <h2 id="current-focus" className="mt-2 text-lg font-semibold text-white">
              Certification and practical technical work
            </h2>
          </div>
        </div>
        <ul className="mt-4 grid gap-2">
          {currentFocusItems.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </ScrollReveal>
  );
}

function Education() {
  return (
    <ScrollReveal>
      <section aria-labelledby="education" className="rounded-lg border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/15">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Education</p>
            <h2 id="education" className="mt-2 text-lg font-semibold text-white">
              Current verified education
            </h2>
          </div>
        </div>
        <ul className="mt-4 grid gap-2">
          {educationItems.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </ScrollReveal>
  );
}

function FastRecruiterPath() {
  return (
    <ScrollReveal>
      <section aria-labelledby="fast-recruiter-path" className="rounded-lg border border-cyan-200/22 bg-cyan-200/8 p-5 shadow-lg shadow-black/15">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Fast recruiter path</p>
        <h2 id="fast-recruiter-path" className="mt-2 text-lg font-semibold text-white">
          Resume, portfolio, contact
        </h2>
        <div className="mt-4 grid gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-link="recruiter-resume"
            className="tap-lift light-sweep inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-200 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-100"
          >
            View Resume
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-link="recruiter-portfolio"
            className="tap-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cyan-200/45 px-4 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-200/10"
          >
            View Portfolio
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={smsHref}
            data-link="recruiter-text"
            className="tap-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-bold text-slate-100 transition hover:border-cyan-200/70 hover:bg-slate-900"
          >
            <Smartphone className="h-4 w-4" aria-hidden="true" />
            Text Wayne
          </a>
        </div>
      </section>
    </ScrollReveal>
  );
}

function RecruiterView({
  onShare,
  shareMessage,
}: {
  onShare: () => void;
  shareMessage: string;
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]">
      <div className="grid gap-6">
        <RecruiterSnapshot />
        <ScrollReveal>
          <section aria-labelledby="capability-groups">
            <SectionHeading id="capability-groups" eyebrow="Capability groups" title="Recruiter-ready summary">
              A broader technology profile across support, security operations, networking, systems, cloud, API/application security, and development.
            </SectionHeading>
            <CapabilityCards items={recruiterCapabilities} />
          </section>
        </ScrollReveal>
        <ProofSection />
        <ExperienceSignal />
      </div>

      <aside className="grid content-start gap-6">
        <CurrentFocus />
        <Education />
        <WhereIFit />
        <ContactPreference compact />
        <FastRecruiterPath />
        <ShareAndSave onShare={onShare} shareMessage={shareMessage} />
      </aside>
    </div>
  );
}

function Footer() {
  return (
    <ScrollReveal>
      <footer className="border-t border-white/10 py-6 text-sm text-slate-400">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="break-words font-semibold text-slate-200">Wayne Howlett</p>
            <p className="mt-1 break-words">Support & Cybersecurity Professional | Technical Support | Networking | Security Monitoring | Cloud & Systems</p>
          </div>
          <p className="text-xs text-slate-500">&copy; 2026 Wayne Howlett</p>
        </div>
      </footer>
    </ScrollReveal>
  );
}

export default function Home() {
  const [shareMessage, setShareMessage] = useState("");
  const [recruiterMode, setRecruiterMode] = useState(false);
  const shareTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (shareTimer.current) {
        window.clearTimeout(shareTimer.current);
      }
    };
  }, []);

  const announceShare = (message: string, persistent = false) => {
    if (shareTimer.current) {
      window.clearTimeout(shareTimer.current);
    }

    setShareMessage(message);

    if (!persistent) {
      shareTimer.current = window.setTimeout(() => setShareMessage(""), 3200);
    }
  };

  const copyConnectLink = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(siteUrl);
        return true;
      } catch {
        // Fall back to the temporary textarea approach below.
      }
    }

    const textarea = document.createElement("textarea");
    textarea.value = siteUrl;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const handleShare = async () => {
    const shareData = { title: shareTitle, text: shareText, url: siteUrl };

    try {
      if (navigator.share) {
        announceShare("Opening share options...");
        await navigator.share(shareData);
        announceShare("Share sheet opened for Wayne's Connect link.");
        return;
      }

      const copied = await copyConnectLink();
      announceShare(copied ? "Connect link copied to clipboard." : `Copy unavailable. URL: ${siteUrl}`, !copied);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        announceShare("Share canceled.");
        return;
      }

      const copied = await copyConnectLink();
      announceShare(copied ? "Share was unavailable, so the link was copied." : `Share and copy were unavailable. URL: ${siteUrl}`, !copied);
    }
  };

  return (
    <main className="site-shell bg-slate-950 text-white">
      <div className="site-backdrop" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] min-[390px]:px-4 sm:px-6 lg:px-8">
        <SiteHeader recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />
        <div id="content" className="grid gap-6">
          <Hero />
          {recruiterMode ? (
            <RecruiterView onShare={handleShare} shareMessage={shareMessage} />
          ) : (
            <StandardView onShare={handleShare} shareMessage={shareMessage} />
          )}
          <Footer />
        </div>
      </div>
    </main>
  );
}
