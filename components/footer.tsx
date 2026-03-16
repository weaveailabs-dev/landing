import Image from "next/image";
import Link from "next/link";
import { footerSections } from "@/lib/site-content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <Image
              src="/weaveAILogo.png"
              alt="WeaveAI"
              width={180}
              height={48}
              className="h-10 w-auto rounded-lg object-contain"
            />
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Production-grade AI agents and RAG systems for teams that need
              grounded answers, visible behavior, and clean deployment paths.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-slate-400">
          <p>
            &copy; {currentYear} WeaveAI. Built like an engineering team, not an
            ad campaign.
          </p>
        </div>
      </div>
    </footer>
  );
}
