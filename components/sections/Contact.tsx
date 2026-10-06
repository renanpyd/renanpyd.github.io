"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

const contactMethods = [
  {
    label: "EMAIL",
    value: "renan.pyd@gmail.com",
    href: "mailto:renan.pyd@gmail.com",
    icon: Mail,
    accent: "#36C5F0",
    description: "Send me an email",
  },
  {
    label: "PHONE",
    value: "+55 (11) 91732-1380",
    href: "tel:+5511917321380",
    icon: Phone,
    accent: "#7C3AED",
    description: "Call me directly",
  },
  {
    label: "WHATSAPP",
    value: "Start a conversation",
    href: "https://wa.me/5511917321380",
    icon: MessageCircle,
    accent: "#2EB67D",
    description: "+55 (11) 91732-1380",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/limarenanandrade",
    accent: "#36C5F0",
  },
  {
    label: "GitHub",
    href: "https://github.com/renanpyd",
    accent: "#7C3AED",
  },
  {
    label: "DEV",
    href: "https://dev.to/renanpyd",
    accent: "#2EB67D",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vacuotecnologia/",
    accent: "#E01E5A",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 pb-10 pt-28 sm:px-8 lg:px-12 lg:pt-36"
    >
      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="font-mono text-xs font-semibold tracking-[0.24em] text-[#E01E5A]">
            05
          </span>

          <span className="h-px w-8 bg-[#E01E5A]/50" />

          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Contact
          </span>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="mb-5 text-sm font-medium text-white/45 sm:text-base">
            Have a complex problem?
          </p>

          <h2 className="text-[clamp(3rem,9vw,8rem)] font-black leading-[0.82] tracking-[-0.07em] text-white">
            LET&apos;S BUILD
          </h2>

          <h2 className="text-[clamp(3rem,9vw,8rem)] font-black leading-[0.82] tracking-[-0.07em] text-white">
            SOMETHING
          </h2>

          <a
            href="mailto:renan.pyd@gmail.com"
            className="group inline-flex items-end gap-3"
          >
            <h2 className="bg-gradient-to-r from-[#36C5F0] via-[#7C3AED] to-[#E01E5A] bg-clip-text text-[clamp(3rem,9vw,8rem)] font-black leading-[0.9] tracking-[-0.07em] text-transparent">
              INTELLIGENT.
            </h2>

            <ArrowUpRight
              className="mb-[0.08em] shrink-0 text-[#E01E5A] transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2"
              size={48}
              strokeWidth={1.5}
            />
          </a>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-white/30 sm:text-sm">
            Data Platforms
            <span className="mx-3 text-[#36C5F0]">•</span>
            AI Systems
            <span className="mx-3 text-[#7C3AED]">•</span>
            Cloud Architecture
            <span className="mx-3 text-[#2EB67D]">•</span>
            Engineering
          </p>
        </motion.div>

        {/* Direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Direct contact
            </span>

            <span className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={
                    method.label === "WHATSAPP"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    method.label === "WHATSAPP"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.045]"
                >
                  {/* Card glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{
                      backgroundColor: method.accent,
                    }}
                  />

                  <div className="relative">
                    <div className="mb-8 flex items-start justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                        style={{
                          color: method.accent,
                          borderColor: `${method.accent}35`,
                          backgroundColor: `${method.accent}10`,
                        }}
                      >
                        <Icon size={19} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                      />
                    </div>

                    <p
                      className="mb-2 font-mono text-[10px] font-semibold tracking-[0.2em]"
                      style={{ color: method.accent }}
                    >
                      {method.label}
                    </p>

                    <p className="break-words text-base font-semibold text-white/90">
                      {method.value}
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                      {method.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-sm font-medium text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.15] hover:bg-white/[0.045] hover:text-white"
            >
              <span className="flex items-center gap-3">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: social.accent,
                    boxShadow: `0 0 10px ${social.accent}`,
                  }}
                />

                {social.label}
              </span>

              <ExternalLink
                size={14}
                className="text-white/20 transition-all duration-300 group-hover:text-white/70"
              />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/[0.08] pt-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                <span className="bg-gradient-to-br from-[#36C5F0] via-[#7C3AED] to-[#E01E5A] bg-clip-text text-sm font-black text-transparent">
                  RA
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold text-white/80">
                  Renan de Lima Andrade
                </p>

                <p className="mt-0.5 text-xs text-white/30">
                  Principal AI &amp; Data Engineer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="hidden text-xs text-white/25 sm:block">
                Built with Next.js • TypeScript
              </p>

              <a
                href="#home"
                aria-label="Back to top"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#36C5F0]/30 hover:bg-[#36C5F0]/10 hover:text-[#36C5F0]"
              >
                <ArrowUp size={16} />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Renan de Lima Andrade
            </p>

            <p>
              Data
              <span className="mx-2 text-[#36C5F0]/50">•</span>
              AI
              <span className="mx-2 text-[#7C3AED]/50">•</span>
              Cloud
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
