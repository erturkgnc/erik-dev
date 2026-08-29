import { MessageCircle, Gamepad2, Mail } from "lucide-react";
import { contact, links } from "@/data/portfolio";
import SectionReveal from "./SectionReveal";
import SystemGraphBackground from "./SystemGraphBackground";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-base-border py-24 sm:py-32">
      <SystemGraphBackground />
      <div className="container-page relative">
        <SectionReveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-dim sm:text-base">{contact.body}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={links.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
            <a
              href={`mailto:${links.email}`}
              className="btn-secondary w-full max-w-full sm:w-auto"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="truncate">{links.email}</span>
            </a>
            <a
              href={links.robloxProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <Gamepad2 className="h-4 w-4" />
              Roblox
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
