"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Network,
  Workflow,
} from "lucide-react";

const domains = [
  {
    number: "01",
    title: "AI Engineering",
    description:
      "Production-oriented intelligent systems combining language models, retrieval, tools and autonomous workflows.",
    icon: BrainCircuit,
    accent: "#7C3AED",
    skills: [
      "Large Language Models",
      "RAG",
      "AI Agents",
      "MCP",
      "Embeddings",
      "Vector Search",
      "Prompt Engineering",
      "Semantic Retrieval",
    ],
  },
  {
    number: "02",
    title: "Data Engineering",
    description:
      "Distributed platforms and pipelines designed for reliability, scale, governance and analytical workloads.",
    icon: Database,
    accent: "#36C5F0",
    skills: [
      "Apache Spark",
      "PySpark",
      "Databricks",
      "Apache Airflow",
      "dbt",
      "Delta Lake",
      "ETL / ELT",
      "Lakehouse",
    ],
  },
  {
    number: "03",
    title: "Cloud & Platform",
    description:
      "Cloud-native engineering across multiple ecosystems, from infrastructure to scalable data services.",
    icon: Cloud,
    accent: "#2EB67D",
    skills: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Oracle Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Linux",
    ],
  },
  {
    number: "04",
    title: "MLOps & Architecture",
    description:
      "Engineering practices for operating data and AI systems reliably throughout their production lifecycle.",
    icon: Network,
    accent: "#E01E5A",
    skills: [
      "MLflow",
      "Observability",
      "CI / CD",
      "Data Quality",
      "Governance",
      "FinOps",
      "System Design",
      "Architecture",
    ],
  },
];

const engineeringStack = [
  "Python",
  "SQL",
  "Spark",
  "Databricks",
  "Airflow",
  "dbt",
  "MLflow",
  "Docker",
  "Kubernetes",
  "Terraform",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Git",
  "GitHub",
  "REST APIs",
];

const principles = [
  {
    icon: GitBranch,
    title: "Architecture first",
    description: "Designing systems around constraints, scale and evolution.",
  },
  {
    icon: Workflow,
    title: "Automate everything",
    description: "Reducing operational friction through engineering.",
  },
  {
    icon: Code2,
    title: "Production mindset",
    description: "Building beyond notebooks, prototypes and isolated demos.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center gap-4"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-[#2EB67D]">
            04
          </span>

          <div className="h-px w-10 bg-white/15" />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Expertise
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-4xl"
        >
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-5xl lg:text-6xl">
            Technology is the tool.
            <span className="block text-white/35">
              Engineering is the discipline.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#A7AFBA] sm:text-lg">
            A technology stack built around scalable data systems,
            production AI, cloud platforms and engineering automation.
          </p>
        </motion.div>

        {/* Domain matrix */}
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] lg:grid-cols-2">
          {domains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <motion.article
                key={domain.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className={[
                  "group relative p-7 sm:p-9",
                  index === 0
                    ? "border-b border-white/10 lg:border-r"
                    : "",
                  index === 1
                    ? "border-b border-white/10"
                    : "",
                  index === 2
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : "",
                ].join(" ")}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-15"
                  style={{ backgroundColor: domain.accent }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]"
                      style={{ color: domain.accent }}
                    >
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white/20">
                      {domain.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                    {domain.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                    {domain.description}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3">
                    {domain.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2.5 text-xs text-white/45 sm:text-sm"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: domain.accent }}
                        />

                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Engineering stack */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-6 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9"
        >
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#36C5F0]">
                Engineering Stack
              </span>

              <h3 className="mt-2 text-lg font-semibold text-white">
                Tools I build with.
              </h3>
            </div>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              Data • AI • Cloud
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {engineeringStack.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.025,
                }}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/40 transition duration-300 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 hover:text-white"
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Engineering principles */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="flex gap-4 rounded-3xl border border-white/[0.07] bg-white/[0.015] p-6"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] text-white/35">
                  <Icon size={16} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white/80">
                    {principle.title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-white/30">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
