"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "MAR 2026 — OCT 2026",
    company: "Nexus Tech",
    role: "Data & AI Engineer",
    description:
      "Designed and implemented an AWS Data Lakehouse consolidating transactional PostgreSQL data, CRM systems, application logs and partner files into a governed analytical platform, eliminating direct analytical queries against the production database.",
    highlights: [
      "CDC ingestion with AWS DMS and batch pipelines with AWS Glue",
      "Bronze, Silver & Gold architecture with Databricks and Delta Lake",
      "Dimensional modeling for transactions, customers and products",
      "Data quality, governance, observability and incident runbooks",
    ],
    technologies: [
      "AWS",
      "AWS DMS",
      "AWS Glue",
      "Amazon S3",
      "Databricks",
      "Delta Lake",
      "Airflow",
      "Great Expectations",
      "Athena",
      "Power BI",
      "Unity Catalog",
      "Prometheus",
      "Grafana",
      "PagerDuty",
    ],
    result:
      "Reports that previously took hours were reduced to minutes, while direct analytical queries against the production database were eliminated and business metrics became consistent across teams.",
    accent: "#36C5F0",
  },
  {
    period: "JAN 2025 — FEB 2026",
    company: "IBM",
    role: "Senior AI & Data Engineer",
    description:
      "Modernized the data architecture of a digital retail company, building a scalable Data Warehouse and preparing the platform for Machine Learning initiatives across ERP, CRM, e-commerce and payment data.",
    highlights: [
      "Medallion architecture with distributed Spark processing",
      "Kimball dimensional modeling and SCD Type II",
      "Feature engineering and ML lifecycle integration with MLflow",
      "AI agents and workflow automation with n8n",
    ],
    technologies: [
      "Spark",
      "Python",
      "Airflow",
      "dbt",
      "MLflow",
      "Streamlit",
      "n8n",
      "Data Warehouse",
      "Kimball",
      "SCD Type II",
    ],
    result:
      "Reduced report generation time by 65% and direct queries against the transactional database by 40%.",
    accent: "#7C3AED",
  },
  {
    period: "DEC 2022 — JAN 2025",
    company: "Nexus Tech IT",
    role: "Data Engineer / Consultant",
    description:
      "Designed and implemented an AWS Data Lakehouse for financial data processing, focused on scalability, data quality, security, governance and regulatory compliance.",
    highlights: [
      "Medallion architecture on Amazon S3 with distributed Spark processing",
      "ETL and metadata cataloging with AWS Glue and Athena",
      "Airflow orchestration with SLA monitoring and failure handling",
      "Security, governance and LGPD-oriented access controls",
    ],
    technologies: [
      "AWS",
      "Amazon S3",
      "Amazon EMR",
      "Apache Spark",
      "AWS Glue",
      "Athena",
      "Airflow",
      "Lambda",
      "EventBridge",
      "CloudWatch",
      "Lake Formation",
      "IAM",
      "AWS KMS",
      "MLflow",
    ],
    result:
      "Established a governed and observable analytical foundation for financial workloads, integrating engineering and ML lifecycle practices.",
    accent: "#2EB67D",
  },
  {
    period: "JUL 2021 — NOV 2022",
    company: "Global Hitss · Claro",
    role: "Senior Data Engineer",
    description:
      "Improved Claro's data architecture supporting marketing campaigns in a hybrid environment with batch and streaming workloads, while developing NLP capabilities for customer satisfaction analysis.",
    highlights: [
      "Batch and streaming data engineering with Spark",
      "Integration with Amazon Kinesis and S3",
      "NLP for customer satisfaction analysis with NLTK and spaCy",
      "Migration toward serverless architectures for cost reduction",
    ],
    technologies: [
      "AWS",
      "Spark",
      "Kinesis",
      "Amazon S3",
      "Python",
      "NLTK",
      "spaCy",
      "MLflow",
      "AWS Glue",
      "DataBrew",
      "Streamlit",
    ],
    result:
      "Combined distributed data processing, NLP and cloud modernization to support marketing analytics and customer intelligence.",
    accent: "#E01E5A",
  },
  {
    period: "MAY 2019 — JUL 2021",
    company: "Magna Sistemas · São Paulo State Department of Education",
    role: "Data Engineer",
    description:
      "Developed a Machine Learning solution for predicting school dropout, integrating legacy sources, data collection processes and analytical Data Marts in an Azure-based environment.",
    highlights: [
      "Machine Learning model for school dropout prediction",
      "Legacy data integration, data collection and Data Marts",
      "Feature engineering and experiment tracking with MLflow",
      "Interactive educational analytics with Power BI and Streamlit",
    ],
    technologies: [
      "Azure",
      "Azure Data Factory",
      "Azure Synapse",
      "SQL Server",
      "Spark",
      "Python",
      "MLflow",
      "Power BI",
      "Streamlit",
    ],
    result:
      "Delivered analytical tools and educational indicators used to support executive-level decision-making and meetings with the State Secretary of Education.",
    accent: "#36C5F0",
  },
  {
    period: "FEB 2016 — FEB 2019",
    company: "Data Self",
    role: "Mid-Level Data Engineer",
    description:
      "Professional experience in data engineering, contributing to the evolution of a career increasingly focused on data platforms, analytics and scalable processing.",
    highlights: [],
    technologies: [],
    result: "",
    accent: "#7C3AED",
  },
  {
    period: "MAY 2014 — APR 2016",
    company: "CSU Cardsystem",
    role: "BI / Big Data Analyst",
    description:
      "Worked with Business Intelligence and Big Data during the transition from traditional analytical environments toward modern data engineering.",
    highlights: [],
    technologies: [],
    result: "",
    accent: "#2EB67D",
  },
  {
    period: "MAY 2011 — JUN 2013",
    company: "Telemidia & Technology International",
    role: "Voice Recognition Developer",
    description:
      "Early professional experience in voice recognition development, establishing the software and AI foundations that would later converge with data engineering and intelligent systems.",
    highlights: [],
    technologies: [],
    result: "",
    accent: "#E01E5A",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          <span className="text-xs font-semibold tracking-[0.25em] text-[#7C3AED]">
            02
          </span>

          <div className="h-px w-10 bg-white/15" />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Experience
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-4xl"
        >
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#F5F7FA] sm:text-5xl lg:text-6xl">
            From voice &amp; data foundations
            <span className="block text-white/35">
              to intelligent systems.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#A7AFBA] sm:text-lg">
            A technology career evolving through software, Business
            Intelligence, Big Data, cloud data engineering and Machine
            Learning into scalable Data &amp; AI platforms.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[191px]" />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{
              duration: 1.6,
              ease: "easeOut",
            }}
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-[#36C5F0] via-[#7C3AED] to-[#E01E5A] md:left-[191px]"
          />

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.04, 0.2),
                }}
                className="relative grid gap-6 pl-10 md:grid-cols-[160px_1fr] md:gap-16 md:pl-0"
              >
                {/* Period */}
                <div className="pt-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30 sm:text-xs">
                    {experience.period}
                  </span>
                </div>

                {/* Timeline node */}
                <div
                  className="absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-[4px] border-[#0B0D10] md:left-[184px]"
                  style={{
                    backgroundColor: experience.accent,
                    boxShadow: `0 0 20px ${experience.accent}55`,
                  }}
                />

                {/* Experience card */}
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition duration-300 hover:border-white/15 hover:bg-white/[0.04] sm:p-8">
                  <div
                    className="absolute left-0 top-0 h-px w-full opacity-40"
                    style={{
                      background: `linear-gradient(90deg, ${experience.accent}, transparent 60%)`,
                    }}
                  />

                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                    <div>
                      <p
                        className="mb-2 text-xs font-semibold uppercase tracking-[0.18em]"
                        style={{ color: experience.accent }}
                      >
                        {experience.company}
                      </p>

                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#F5F7FA] sm:text-2xl">
                        {experience.role}
                      </h3>
                    </div>

                    <div
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/35 transition duration-300 group-hover:text-white"
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-white/45 sm:text-base">
                    {experience.description}
                  </p>

                  {experience.highlights.length > 0 && (
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {experience.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 text-xs leading-6 text-white/45 sm:text-sm"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{
                              backgroundColor: experience.accent,
                            }}
                          />

                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {experience.result && (
                    <div className="mt-7 rounded-2xl border border-white/[0.07] bg-black/15 p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{
                            backgroundColor: experience.accent,
                            boxShadow: `0 0 12px ${experience.accent}`,
                          }}
                        />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                          Impact
                        </span>
                      </div>

                      <p className="mt-3 text-xs leading-6 text-white/45 sm:text-sm">
                        {experience.result}
                      </p>
                    </div>
                  )}

                  {experience.technologies.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.07] pt-6">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35 transition duration-300 hover:border-white/15 hover:text-white/70"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
