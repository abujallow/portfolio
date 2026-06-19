"use client";

import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowUpRight,
  BadgeCheck,
  Brain,
  Briefcase,
  Code,
  DollarSign,
  Gauge,
  Github,
  GitBranch,
  Linkedin,
  LineChart,
  Mail,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import SiteNav from "./components/SiteNav";
import {
  experiences,
  focusTags,
  leadershipRoles,
  opportunityAreas,
  philosophy,
  projects,
  proofHighlights,
  proofMetrics,
  skillGroups,
} from "./data";

const focusIcons = [Shield, LineChart, Brain, Gauge, GitBranch, Target];
const metricIcons = [Briefcase, Users, TrendingUp, Code, DollarSign];

const accentStyles = {
  green: {
    border: "hover:border-green-400/35",
    text: "group-hover:text-green-300",
    shadow: "group-hover:shadow-[0_0_28px_rgba(74,222,128,0.22)]",
  },
  blue: {
    border: "hover:border-blue-400/35",
    text: "group-hover:text-blue-300",
    shadow: "group-hover:shadow-[0_0_28px_rgba(96,165,250,0.22)]",
  },
  red: {
    border: "hover:border-red-400/35",
    text: "group-hover:text-red-300",
    shadow: "group-hover:shadow-[0_0_28px_rgba(248,113,113,0.2)]",
  },
  slate: {
    border: "hover:border-slate-300/25",
    text: "group-hover:text-slate-200",
    shadow: "group-hover:shadow-[0_0_28px_rgba(148,163,184,0.16)]",
  },
};

export default function Home() {
  const [formStatus, setFormStatus] = useState({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setFormStatus({ type: "idle", message: "" });

    try {
      await emailjs.sendForm(
        "service_rdf1y8z",
        "template_2em9bla",
        event.currentTarget,
        "x3uO77Ckyycga9JaE"
      );
      event.currentTarget.reset();
      setFormStatus({
        type: "success",
        message: "Thanks. Your message was sent successfully.",
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again or reach out on LinkedIn.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main id="top" className="min-h-screen bg-black text-white">
      <SiteNav active="home" />

      <section className="section-shell grid gap-12 py-18 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-4">Finance / Data Science / Risk & Operations</p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Abubakr Jallow
          </h1>

          <TypeAnimation
            sequence={[
              "Building financial systems with practical data science.",
              1800,
              "Turning uncertainty into measurable decision support.",
              1800,
              philosophy,
              2600,
            ]}
            wrapper="p"
            speed={52}
            repeat={Infinity}
            className="mt-6 min-h-16 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl"
          />

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            I build data-driven systems for financial decision-making under uncertainty, combining
            analytics, risk modeling, and real-world operational impact.
          </p>

          <div className="mt-6 max-w-2xl rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <p className="text-sm leading-6 text-slate-300">
              Exploring internship opportunities across finance, data analytics, risk, operations,
              technology, financial services, and business analytics.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {opportunityAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-medium text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="rounded-md bg-white px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-white/70 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/abubakr1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Abubakr Jallow on LinkedIn"
              className="rounded-md border border-white/15 p-3 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/abujallow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Abubakr Jallow on GitHub"
              className="rounded-md border border-white/15 p-3 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-3xl border border-white/10 bg-white/[0.03]" />
          <Image
            src="/Canisius_Headshots-155.jpg"
            alt="Portrait of Abubakr Jallow"
            width={720}
            height={900}
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
          />
          <div className="relative mt-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
            <span className="font-semibold text-white">Junior-year focus:</span> finance, data
            science, risk, operations, and measurable service.
          </div>
        </motion.div>
      </section>

      <Section id="about" eyebrow="Background" title="Philosophy & Background">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <blockquote className="text-2xl italic leading-relaxed text-slate-100 md:text-3xl">
              &quot;I approach finance and data through risk and uncertainty, building adaptive
              systems and leading to serve others through decisions that create long-term impact.&quot;
            </blockquote>
            <div className="mt-7 flex flex-wrap gap-2">
              {focusTags.map((tag, index) => {
                const Icon = focusIcons[index];
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-white/40 hover:text-white"
                  >
                    <Icon size={14} />
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              I am a student at Canisius University studying Finance and Data Science, focused on
              building practical, data-driven systems within financial markets, operations, and risk
              management.
            </p>
            <p>
              Beyond technical work, I am deeply engaged in campus life, where I have developed a
              strong foundation in servant leadership. I currently serve as President of the
              Residence Hall Association, Executive Vice President of Alpha Kappa Psi, Resident
              Assistant, and Teaching Assistant for both Macroeconomics and Microeconomics.
            </p>
          <p>
            Through these roles, I focus on empowering others, building strong communities, and
            creating environments where people can grow.
          </p>
        </div>
      </div>
    </Section>

      <Section id="experience" eyebrow="Professional Proof" title="Experience">
        <div className="space-y-5">
          {experiences.map((experience) => {
            const accent = accentStyles[experience.accent];
            return (
              <article
                key={experience.company}
                className={`group grid gap-6 rounded-lg border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.045] ${accent.border} md:grid-cols-[8rem_1fr] md:p-6`}
              >
                <div
                  className={`flex h-28 w-28 items-center justify-center rounded-lg bg-white/[0.04] p-4 transition ${accent.shadow} md:h-32 md:w-32`}
                >
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={128}
                    height={128}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className={`text-xl font-semibold transition ${accent.text}`}>
                      {experience.company} - {experience.role}
                    </h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                      {experience.date}
                    </span>
                  </div>
                  <ul className="mt-4 grid gap-2 text-slate-400">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <BadgeCheck className="mt-1 shrink-0 text-green-300" size={16} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="leadership" eyebrow="Campus Impact" title="Leadership">
        <div className="grid gap-5 md:grid-cols-2">
          {leadershipRoles.map((role) => (
            <article key={`${role.title}-${role.organization}`} className="rounded-lg border border-white/10 bg-white/[0.025] p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                  <p className="mt-1 text-sm font-medium text-green-300">{role.organization}</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                  Leadership
                </span>
              </div>
              <p className="mt-4 leading-7 text-slate-400">{role.context}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                <span className="font-semibold text-white">Signal:</span> {role.proof}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Capabilities" title="Skills">
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 px-2.5 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-white/10 py-14">
        <div className="relative overflow-hidden border-y border-white/10 py-4">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />
          <div className="animate-scroll flex w-max gap-12 text-sm text-slate-400">
            {[...proofHighlights, ...proofHighlights].map((highlight, index) => (
              <span key={`${highlight}-${index}`}>{highlight}</span>
            ))}
          </div>
        </div>

        <div className="section-shell mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {proofMetrics.map((metric, index) => {
            const Icon = metricIcons[index];
            const numeric = metric.value.replace(/[^0-9]/g, "");
            return (
              <article key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
                <Icon className="mb-3 text-slate-400" size={22} />
                <p className="text-3xl font-bold tracking-tight">
                  {numeric ? (
                    <>
                      {metric.value.startsWith("$") && "$"}
                      <CountUp end={Number(numeric)} duration={2.4} separator="," />
                      {metric.value.endsWith("+") && "+"}
                      {metric.value.endsWith("%") && "%"}
                    </>
                  ) : (
                    metric.value
                  )}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">{metric.label}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{metric.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <Section id="projects" eyebrow="Selected Work" title="Projects">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group flex h-full flex-col overflow-hidden rounded-lg border bg-white/[0.025] transition hover:-translate-y-1 hover:bg-white/[0.045] ${
                project.featured ? "border-green-300/35" : "border-white/10 hover:border-white/25"
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  {project.featured && (
                    <span className="rounded-full border border-green-300/30 px-2.5 py-1 text-xs font-medium text-green-300">
                      Featured
                    </span>
                  )}
                  <span className="text-xs text-slate-500">{project.tags[0]}</span>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">{project.description}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  <span className="font-semibold text-white">Why it matters:</span> {project.impact}
                </p>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-400">
                  {project.proof.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-white/40 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
                >
                  GitHub <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Next Step" title="Contact">
        <div className="mx-auto max-w-3xl">
          <p className="mx-auto mb-9 max-w-2xl text-center leading-7 text-slate-400">
            Open to internships and opportunities across finance, data analytics, risk,
            operations, technology, financial services, and business analytics.
          </p>
          <div className="mb-5 text-center">
            <a
              href="https://www.linkedin.com/in/abubakr1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white hover:text-black"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>
          <form onSubmit={sendEmail} className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.025] p-5 md:p-6">
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Name
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="rounded-md border border-white/10 bg-black px-3 py-3 text-white placeholder:text-slate-600"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="rounded-md border border-white/10 bg-black px-3 py-3 text-white placeholder:text-slate-600"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="resize-y rounded-md border border-white/10 bg-black px-3 py-3 text-white placeholder:text-slate-600"
                placeholder="Tell me what you are working on."
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-black transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Mail size={18} />
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {formStatus.message && (
                <p
                  role="status"
                  className={`text-sm ${
                    formStatus.type === "success" ? "text-green-300" : "text-red-300"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </Section>
    </main>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <motion.section
      id={id}
      className="border-t border-white/10 py-20 md:py-24"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="section-shell">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </motion.section>
  );
}
