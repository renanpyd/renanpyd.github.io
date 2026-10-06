"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  {
    label: "About",
    href: "#about",
    id: "about",
    accent: "#36C5F0",
  },
  {
    label: "Experience",
    href: "#experience",
    id: "experience",
    accent: "#7C3AED",
  },
  {
    label: "Projects",
    href: "#projects",
    id: "projects",
    accent: "#E01E5A",
  },
  {
    label: "Skills",
    href: "#skills",
    id: "skills",
    accent: "#2EB67D",
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
    accent: "#E01E5A",
  },
];

function GitHubIcon({ size = 17 }: { size?: number }) {
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];

      const viewportReference =
        window.innerHeight * 0.32;

      let currentSection = "home";

      for (const id of sections) {
        const element =
          document.getElementById(id);

        if (!element) continue;

        const rect =
          element.getBoundingClientRect();

        if (rect.top <= viewportReference) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: "easeOut",
        }}
        className={[
          "fixed left-0 right-0 z-50 px-4 transition-all duration-500",
          scrolled ? "top-3" : "top-5",
        ].join(" ")}
      >
        <nav
          className={[
            "mx-auto flex items-center justify-between rounded-full border px-3 shadow-2xl backdrop-blur-2xl transition-all duration-500 sm:px-5",
            scrolled
              ? "h-12 max-w-[900px] border-white/[0.12] bg-[#0B0D10]/88 shadow-black/40"
              : "h-14 max-w-5xl border-white/10 bg-[#0B0D10]/65 shadow-black/20",
          ].join(" ")}
        >
          {/* Logo */}
          <a
            href="#home"
            aria-label="Back to home"
            className="group flex items-center gap-2"
          >
            <span
              className={[
                "flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-500",
                scrolled
                  ? "h-7 w-7"
                  : "h-8 w-8",
              ].join(" ")}
            >
              <span className="bg-gradient-to-br from-[#36C5F0] via-[#7C3AED] to-[#E01E5A] bg-clip-text text-xs font-black text-transparent">
                RA
              </span>
            </span>

            <span className="hidden text-xs font-semibold tracking-[0.18em] text-white/60 transition group-hover:text-white sm:block">
              RENAN
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active =
                activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={
                    active
                      ? "page"
                      : undefined
                  }
                  className={[
                    "relative flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium transition duration-300",
                    active
                      ? "bg-white/[0.055] text-white"
                      : "text-white/45 hover:bg-white/[0.04] hover:text-white/80",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300",
                      active
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0",
                    ].join(" ")}
                    style={{
                      backgroundColor: item.accent,
                      boxShadow: `0 0 10px ${item.accent}`,
                    }}
                  />

                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/renanpyd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={[
                "flex items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-[#36C5F0]/40 hover:bg-[#36C5F0]/10 hover:text-[#36C5F0]",
                scrolled
                  ? "h-8 w-8"
                  : "h-9 w-9",
              ].join(" ")}
            >
              <GitHubIcon />
            </a>

            <a
              href="#contact"
              className={[
                "group flex items-center gap-1.5 rounded-full bg-white font-semibold text-[#0B0D10] transition-all duration-300 hover:scale-[1.03]",
                scrolled
                  ? "h-8 px-3.5 text-[11px]"
                  : "h-9 px-4 text-xs",
              ].join(" ")}
            >
              Let&apos;s talk

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen(
                (current) => !current
              )
            }
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/[0.06] md:hidden"
          >
            {mobileOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed left-4 right-4 top-[76px] z-40 overflow-hidden rounded-3xl border border-white/10 bg-[#0B0D10]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => {
                const active =
                  activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={
                      closeMobileMenu
                    }
                    className={[
                      "group flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm transition",
                      active
                        ? "bg-white/[0.06] text-white"
                        : "text-white/60 hover:bg-white/[0.05] hover:text-white",
                    ].join(" ")}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor:
                            item.accent,
                          opacity: active
                            ? 1
                            : 0.4,
                          boxShadow: active
                            ? `0 0 10px ${item.accent}`
                            : "none",
                        }}
                      />

                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="opacity-30 transition group-hover:opacity-100"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-2 border-t border-white/10 pt-3">
              <a
                href="https://github.com/renanpyd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <GitHubIcon />
                  GitHub
                </span>

                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
