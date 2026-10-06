"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Database,
  Network,
} from "lucide-react";

const expertise = [
  {
    title: "Data Engineering",
    description: "Scalable lakehouse, ETL/ELT and distributed data platforms.",
    icon: Database,
    accent: "#36C5F0",
  },
  {
    title: "AI Engineering",
    description: "LLMs, RAG, AI Agents and intelligent production systems.",
    icon: BrainCircuit,
    accent: "#7C3AED",
  },
  {
    title: "Cloud Architecture",
    description: "Multi-cloud architectures across AWS, Azure, GCP and OCI.",
    icon: Cloud,
    accent: "#2EB67D",
  },
  {
    title: "MLOps & Platforms",
    description: "Observability, governance, deployment and AI lifecycle.",
    icon: Network,
    accent: "#E01E5A",
  },
];

const metrics = [
  {
    value: "12+",
    label: "Years in Technology",
  },
  {
    value: "4",
    label: "Cloud Ecosystems",
  },
  {
    value: "AI",
    label: "Generative AI & Agents",
  },
  {
    value: "DATA",
    label: "Platforms at Scale",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
          <span className="text-xs font-semibold tracking-[0.25em] text-[#36C5F0]">
            01
          </span>

          <div className="h-px w-10 bg-white/15" />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            About
          </span>
        </motion.div>

        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-5xl lg:text-6xl">
              Engineering data.
              <span className="block bg-gradient-to-r from-[#36C5F0] via-[#7C3AED] to-[#E01E5A] bg-clip-text text-transparent">
                Building intelligence.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#A7AFBA] sm:text-lg">
              I design and build scalable data platforms and AI systems,
              connecting data engineering, cloud architecture and generative
              AI to transform complex technical challenges into reliable,
              production-ready solutions.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              My work spans modern lakehouse architectures, distributed data
              processing, LLM applications, RAG, AI agents, MLOps,
              observability and multi-cloud environments.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-sm"
          >
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={[
                  "relative flex min-h-40 flex-col justify-between p-6 sm:p-7",
                  index % 2 === 0 ? "border-r border-white/10" : "",
                  index < 2 ? "border-b border-white/10" : "",
                ].join(" ")}
              >
                <span className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {metric.value}
                </span>

                <span className="max-w-28 text-[10px] font-medium uppercase leading-5 tracking-[0.2em] text-white/35">
                  {metric.label}
                </span>

                <div
                  className={[
                    "absolute right-5 top-5 h-1.5 w-1.5 rounded-full",
                    index === 0
                      ? "bg-[#36C5F0]"
                      : index === 1
                        ? "bg-[#2EB67D]"
                        : index === 2
                          ? "bg-[#7C3AED]"
                          : "bg-[#E01E5A]",
                  ].join(" ")}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Expertise cards */}
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.045]"
              >
                <div
                  className="absolute left-0 top-0 h-px w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                  }}
                />

                <div
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]"
                  style={{ color: item.accent }}
                >
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <h3 className="mt-8 text-base font-semibold text-[#F5F7FA]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Technology strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-y border-white/[0.07] py-6 text-[10px] font-medium uppercase tracking-[0.22em] text-white/30 sm:text-xs"
        >
          <span>Databricks</span>
          <span className="text-[#36C5F0]">•</span>

          <span>Apache Spark</span>
          <span className="text-[#2EB67D]">•</span>

          <span>Python</span>
          <span className="text-[#E01E5A]">•</span>

          <span>Airflow</span>
          <span className="text-[#7C3AED]">•</span>

          <span>DBT</span>
          <span className="text-[#36C5F0]">•</span>

          <span>LLMs</span>
          <span className="text-[#2EB67D]">•</span>

          <span>RAG</span>
          <span className="text-[#E01E5A]">•</span>

          <span>AI Agents</span>
        </motion.div>

      </div>
    </section>
  );
}
