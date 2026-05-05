import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  FileText,
  Globe,
  Mail,
  ShieldCheck,
  Terminal,
  Users,
} from "lucide-react";

const primaryLinks = [
  {
    title: "Main Portfolio",
    description: "View my full cybersecurity portfolio, projects, skills, and resume.",
    href: "https://www.ihowlett.com",
    icon: Globe,
  },
  {
    title: "Resume",
    description: "Review my cybersecurity resume and career overview.",
    href: "https://www.ihowlett.com/resume",
    icon: FileText,
  },
  {
    title: "Projects",
    description: "Explore completed case studies and hands-on security projects.",
    href: "https://www.ihowlett.com/projects",
    icon: BriefcaseBusiness,
  },
  {
    title: "Contact Me",
    description: "Reach out for opportunities, networking, or collaboration.",
    href: "https://www.ihowlett.com/contact",
    icon: Mail,
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/wayne-howlett/",
    icon: ExternalLink,
  },
  {
    title: "GitHub",
    href: "https://github.com/WHowlett",
    icon: ExternalLink,
  },
  {
    title: "X / Twitter",
    href: "https://x.com/waynehowlettsec",
    icon: ExternalLink,
  },
  {
    title: "Facebook",
    href: "https://facebook.com/whowlettsecurity",
    icon: Users,
  },
];

export default function Home() {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Wayne Howlett Cybersecurity",
        url: "https://connect.ihowlett.com",
      });
    } else {
      navigator.clipboard.writeText("https://connect.ihowlett.com");
      alert("Link copied to clipboard");
    }
  };

  return (
    <main className="relative min-h-screen bg-slate-950 px-5 py-8 text-white">
      <section className="mx-auto max-w-md text-center">
        {/* Headshot */}
        <div className="mx-auto h-28 w-28 overflow-hidden rounded-3xl border border-cyan-400/30 shadow-lg">
          <img src="/profiletemp.jpeg" alt="Wayne Howlett" className="h-full w-full object-cover" />
        </div>

        <h1 className="mt-5 text-2xl font-bold">Wayne Howlett</h1>
        <p className="text-cyan-400 text-sm">Cybersecurity</p>

        <p className="mt-4 text-sm text-slate-300">
          Security Engineering • Detection Engineering • Wazuh SIEM • Cloud & API Security
        </p>

        {/* CTA buttons */}
        <div className="mt-6 grid gap-3">
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.title} href={link.href} target="_blank" className="flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3 hover:bg-slate-800">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-cyan-400" />
                  <span>{link.title}</span>
                </div>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        {/* Social row */}
        <div className="mt-6 flex justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.title} href={link.href} target="_blank" className="p-3 rounded-lg bg-slate-900 hover:bg-slate-800">
                <Icon className="h-5 w-5 text-cyan-400" />
              </a>
            );
          })}
        </div>

        {/* Share + vCard */}
        <div className="mt-6 flex gap-3">
          <button onClick={handleShare} className="flex-1 rounded-xl bg-cyan-400 py-3 text-black font-semibold">
            Share
          </button>

          <a href="/wayne-howlett.vcf" className="flex-1 rounded-xl border border-cyan-400 py-3 text-cyan-400 text-center font-semibold">
            Save Contact
          </a>
        </div>
      </section>
    </main>
  );
}
