"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  BrainCircuit,
  Database,
  GitBranch,
  HeartPulse,
  Network,
  Workflow,
} from "lucide-react";

function GitHubIcon({
  size = 16,
}: {
  size?: number;
}) {
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

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  accent: string;
  icon: typeof Bot;
};

const projects: Project[] = [
  {
    number: "02",
    category: "DATA ENGINEERING",
    title: "Modern Enterprise Data Lakehouse",
    description:
      "Enterprise-grade blueprint for scalable Data Lakehouse and Data Mesh architectures, combining distributed PySpark pipelines, Medallion Architecture, dbt quality gates, Terraform and governance patterns.",
    technologies: [
      "PySpark",
      "Data Lakehouse",
      "Data Mesh",
      "dbt",
      "Terraform",
      "Medallion",
      "SCD Type II",
      "IAM",
    ],
    github:
      "https://github.com/renanpyd/modern-data-lakehouse-blueprint",
    accent: "#36C5F0",
    icon: Database,
  },
  {
    number: "03",
    category: "MLOPS",
    title: "MLOps End-to-End Pipeline",
    description:
      "End-to-end MLOps architecture automating the machine learning lifecycle from data ingestion and feature engineering to experiment tracking, deployment-oriented workflows, validation and production monitoring foundations.",
    technologies: [
      "Python",
      "Airflow",
      "Prefect",
      "MLflow",
      "Docker",
      "PySpark",
      "Great Expectations",
      "Pydantic",
    ],
    github:
      "https://github.com/renanpyd/mlops-end-to-end-pipeline",
    accent: "#2EB67D",
    icon: Workflow,
  },
  {
    number: "04",
    category: "HEALTH TECH • INNOVATION",
    title: "EHS4.0 — InovaTech",
    description:
      "Hackathon solution focused on remote patient monitoring across the healthcare journey, connecting patient follow-up, vital-sign data, IoT devices and health information into a continuous care concept.",
    technologies: [
      "Health Tech",
      "IoT",
      "Remote Monitoring",
      "Patient Journey",
      "Figma",
    ],
    github:
      "https://github.com/renanpyd/EHS4.0---InovaTech",
    accent: "#E01E5A",
    icon: HeartPulse,
  },
];

const architectureNodes = [
  {
    label: "Agents",
    icon: Bot,
    position:
      "left-[4%] top-[13%] sm:left-[8%] sm:top-[12%]",
    accent: "#36C5F0",
  },
  {
    label: "RAG",
    icon: Database,
    position:
      "right-[4%] top-[13%] sm:right-[8%] sm:top-[12%]",
    accent: "#7C3AED",
  },
  {
    label: "Memory",
    icon: BrainCircuit,
    position:
      "bottom-[13%] left-[4%] sm:bottom-[12%] sm:left-[8%]",
    accent: "#2EB67D",
  },
  {
    label: "APIs",
    icon: Network,
    position:
      "bottom-[13%] right-[4%] sm:bottom-[12%] sm:right-[8%]",
    accent: "#E01E5A",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.24em] text-[#E01E5A]">
              03
            </span>

            <span className="h-px w-8 bg-[#E01E5A]/50" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              Projects
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Selected systems.
            <br />

            <span className="bg-gradient-to-r from-[#36C5F0] via-[#7C3AED] to-[#E01E5A] bg-clip-text text-transparent">
              Built beyond the demo.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            Engineering projects spanning intelligent agents,
            enterprise data platforms, MLOps and technology-driven
            innovation.
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-[110px] transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
            {/* Content */}
            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11">
              <div>
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#7C3AED]/25 bg-[#7C3AED]/10 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] text-[#A78BFA]">
                    01 • FEATURED
                  </span>

                  <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                    AI Engineering
                  </span>
                </div>

                <h3 className="max-w-xl text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  Enterprise AI
                  <br />
                  Agent Platform
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                  Enterprise platform for building, orchestrating and
                  monitoring intelligent AI agents, with multi-agent
                  collaboration, semantic search, RAG, contextual
                  memory, API integrations and auditable execution.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "FastAPI",
                    "LangChain",
                    "CrewAI",
                    "LlamaIndex",
                    "RAG",
                    "Vector DB",
                    "Ollama",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/45"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/renanpyd/enterprise-ai-agent-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#0B0D10] transition-all duration-300 hover:scale-[1.03]"
                >
                  <GitHubIcon size={16} />

                  View repository

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </a>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#2EB67D]/20 bg-[#2EB67D]/[0.07] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2EB67D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2EB67D] shadow-[0_0_8px_#2EB67D]" />
                  Public repository
                </span>
              </div>
            </div>

            {/* Architecture visualization */}
            <div className="relative min-h-[390px] overflow-hidden border-t border-white/[0.07] bg-black/10 lg:min-h-[520px] lg:border-l lg:border-t-0">
              {/* Grid */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Rings */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7C3AED]/15" />
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#36C5F0]/10" />

              {/* Connection lines */}
              <div className="absolute left-[19%] top-[24%] h-px w-[30%] origin-left rotate-[24deg] bg-gradient-to-r from-[#36C5F0]/40 to-[#7C3AED]/10" />

              <div className="absolute right-[19%] top-[24%] h-px w-[30%] origin-right -rotate-[24deg] bg-gradient-to-l from-[#7C3AED]/40 to-[#7C3AED]/10" />

              <div className="absolute bottom-[24%] left-[19%] h-px w-[30%] origin-left -rotate-[24deg] bg-gradient-to-r from-[#2EB67D]/40 to-[#7C3AED]/10" />

              <div className="absolute bottom-[24%] right-[19%] h-px w-[30%] origin-right rotate-[24deg] bg-gradient-to-l from-[#E01E5A]/40 to-[#7C3AED]/10" />

              {/* Center */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 25px rgba(124,58,237,0.10)",
                    "0 0 55px rgba(124,58,237,0.25)",
                    "0 0 25px rgba(124,58,237,0.10)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 backdrop-blur-xl"
              >
                <Boxes
                  size={26}
                  className="text-[#A78BFA]"
                />

                <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Orchestrator
                </span>
              </motion.div>

              {/* Nodes */}
              {architectureNodes.map((node, index) => {
                const Icon = node.icon;

                return (
                  <motion.div
                    key={node.label}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.35,
                    }}
                    className={`absolute ${node.position}`}
                  >
                    <div className="flex min-w-[100px] flex-col items-center rounded-2xl border border-white/[0.08] bg-[#0B0D10]/80 px-4 py-4 backdrop-blur-xl">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl border"
                        style={{
                          color: node.accent,
                          borderColor: `${node.accent}35`,
                          backgroundColor: `${node.accent}10`,
                        }}
                      >
                        <Icon size={17} />
                      </div>

                      <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                        {node.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Multi-Agent Architecture
              </div>
            </div>
          </div>
        </motion.article>

        {/* Data + MLOps projects */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.022] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.035] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-20"
                  style={{
                    backgroundColor: project.accent,
                  }}
                />

                <div className="relative">
                  <div className="mb-8 flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}35`,
                        backgroundColor: `${project.accent}10`,
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span className="font-mono text-xs text-white/20">
                      {project.number}
                    </span>
                  </div>

                  <p
                    className="mb-3 font-mono text-[10px] font-semibold tracking-[0.18em]"
                    style={{
                      color: project.accent,
                    }}
                  >
                    {project.category}
                  </p>

                  <h3 className="max-w-md text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/45">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] text-white/40"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <GitHubIcon size={15} />

                    View repository

                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Innovation project */}
        {projects.slice(2).map((project) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="group relative mt-5 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.035] sm:p-8"
            >
              <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border"
                  style={{
                    color: project.accent,
                    borderColor: `${project.accent}35`,
                    backgroundColor: `${project.accent}10`,
                  }}
                >
                  <Icon size={21} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p
                      className="font-mono text-[10px] font-semibold tracking-[0.18em]"
                      style={{
                        color: project.accent,
                      }}
                    >
                      {project.category}
                    </p>

                    <span className="font-mono text-[10px] text-white/20">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold tracking-[-0.035em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-white/45">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] text-white/40"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} repository`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:scale-105 hover:border-[#E01E5A]/30 hover:bg-[#E01E5A]/10 hover:text-[#E01E5A]"
                >
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          );
        })}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-5 rounded-3xl border border-white/[0.07] bg-white/[0.018] px-6 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55">
              <GitBranch size={17} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white/75">
                More engineering work on GitHub
              </p>

              <p className="mt-1 text-xs text-white/30">
                New projects, experiments and architecture blueprints.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/renanpyd"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-white/55 transition-colors duration-300 hover:text-white"
          >
            <GitHubIcon size={15} />

            Explore GitHub

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
