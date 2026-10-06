"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
} from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.2 7.8 10.7.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.1v3.1c0 .4.2.7.8.6a11.5 11.5 0 0 0 7.8-10.7C23.4 5.8 18.3.7 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/renanpyd",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/limarenanandrade",
    icon: LinkedInIcon,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2EB67D] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2EB67D]" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#A7AFBA]">
              AI • DATA • CLOUD
            </span>
          </div>
        </motion.div>

        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl font-bold tracking-[-0.04em] text-[#F5F7FA] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          RENAN
          <span className="block bg-gradient-to-r from-[#36C5F0] via-[#7C3AED] to-[#E01E5A] bg-clip-text text-transparent">
            DE LIMA ANDRADE
          </span>
        </motion.h1>

        {/* Cargo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <h2 className="text-xl font-medium text-[#F5F7FA] sm:text-2xl md:text-3xl">
            Principal AI &amp; Data Engineer
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#A7AFBA] sm:text-lg">
            Building scalable data platforms, cloud architectures and
            intelligent AI systems for real-world problems.
          </p>
        </motion.div>

        {/* Tech line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-white/40"
        >
          <span>LLMs</span>
          <span className="text-[#36C5F0]">•</span>
          <span>AI Agents</span>
          <span className="text-[#2EB67D]">•</span>
          <span>RAG</span>
          <span className="text-[#E01E5A]">•</span>
          <span>Databricks</span>
          <span className="text-[#7C3AED]">•</span>
          <span>Spark</span>
          <span className="text-[#36C5F0]">•</span>
          <span>Multi-Cloud</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex min-w-52 items-center justify-center gap-2 rounded-full bg-[#F5F7FA] px-7 py-3.5 text-sm font-semibold text-[#0B0D10] transition duration-300 hover:scale-[1.03] hover:bg-white"
          >
            Explore my work

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="/resume/renan-de-lima-andrade.pdf"
            download
            className="group inline-flex min-w-52 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-[#F5F7FA] backdrop-blur-md transition duration-300 hover:border-[#7C3AED]/60 hover:bg-[#7C3AED]/10"
          >
            <Download size={17} />

            Download CV
          </a>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-9 flex items-center justify-center gap-3"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#A7AFBA] transition duration-300 hover:-translate-y-1 hover:border-[#36C5F0]/50 hover:text-[#36C5F0]"
            >
              <Icon size={18} />
            </a>
          ))}

          <a
            href="https://dev.to/renanpyd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DEV Community"
            title="DEV Community"
            className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-2 text-[10px] font-black text-[#A7AFBA] transition duration-300 hover:-translate-y-1 hover:border-[#2EB67D]/50 hover:text-[#2EB67D]"
          >
            DEV
          </a>

          <a
            href="https://www.instagram.com/vacuotecnologia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-2 text-[10px] font-black text-[#A7AFBA] transition duration-300 hover:-translate-y-1 hover:border-[#E01E5A]/50 hover:text-[#E01E5A]"
          >
            IG
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition hover:text-[#36C5F0] md:flex"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  );
}
