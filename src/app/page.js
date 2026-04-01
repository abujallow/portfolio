"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Users, Briefcase, TrendingUp, Code } from "lucide-react";
import CountUp from "react-countup";
import { Shield, LineChart, Brain, Gauge, GitBranch, Target } from "lucide-react";

export default function Home() {

  // ✅ ADD THIS (typing logic)
  const fullText =
    "Think in systems. Act with precision. Build with intent. Deliver with impact.";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 75);

    return () => clearInterval(interval);
  }, []);

  // ✅ KEEP YOUR EMAIL FUNCTION
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rdf1y8z",
      "template_2em9bla",
      e.target,
      "x3uO77Ckyycga9JaE"
    )
    .then(() => {
      alert("Message sent successfully!");
    }, (error) => {
      alert("Failed to send message, try again.");
      console.log(error);
    });

    e.target.reset();
  };

  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
{/* NAVBAR */}
<nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800 bg-black text-white">
  <div className="flex items-center gap-8 flex-1">
  <h1 className="text-xl font-bold whitespace-nowrap">AJ.</h1>

  <p className="text-lg tracking-wider text-gray-300 hidden md:block mx-auto whitespace-nowrap">
  {displayText}
  <span className="animate-pulse">|</span>
</p>
</div>
  <div className="flex gap-6 text-gray-300">
    
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="hover:text-white"
    >
      Home
    </button>

    <button
      onClick={() => {
        document.getElementById("about").scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="hover:text-white"
    >
      About
    </button>

    <button
      onClick={() => {
        document.getElementById("experience").scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="hover:text-white"
    >
      Experience
    </button>

    <button
      onClick={() => {
        document.getElementById("projects").scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="hover:text-white"
    >
      Projects
    </button>

    <button
      onClick={() => {
        document.getElementById("contact").scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="hover:text-white"
    >
      Contact
    </button>
    <a
  href="/blog"
  className="flex items-center hover:text-white"
>
  Blog
</a>
    {/* ✅ ONLY ADD THIS PART */}
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-white hover:text-black"
    >
      Resume
    </a>

  </div>
</nav>
      {/* HERO SECTION */}
<div className="flex items-center justify-center px-6 py-20">
  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
  className="relative inline-block mb-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-200 to-white blur-2xl opacity-18 rounded-full"></div>

  {/* Name */}
  <h1 className="relative text-5xl md:text-6xl font-bold">
    Abubakr Jallow
  </h1>
</motion.div>

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  <TypeAnimation 
  sequence={[
    "Finance",
    1200,
    "Data Science",
    1200,
    "Risk & Operations",
    1200,
    "Finance • Data Science • Risk & Operations",
    2500, // pause longer on full identity
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity} // ✅ loop forever
  className="text-xl md:text-2xl text-gray-400 mb-6"
/>
</motion.div>
      <motion.p
        className="text-gray-300 text-lg leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        I build data-driven systems for financial decision-making under uncertainty, combining analytics, risk modeling, and real-world impact.
      </motion.p>

      <motion.div
  className="flex items-center gap-4 flex-wrap"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>

  {/* BUTTON GROUP */}
  <div className="flex gap-4">
    <a href="#projects">
      <button className="bg-white text-black px-6 py-3 rounded-lg font-medium transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        View Projects
      </button>
    </a>

    <a href="#contact">
      <button className="border border-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-white hover:text-black hover:scale-105">
        Contact
      </button>
    </a>
  </div>

  {/* ICON GROUP */}
  <div className="flex items-center gap-3 ml-6">

    {/* LINKEDIN */}
    <a
      href="https://www.linkedin.com/in/abubakr1/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border border-white/20 rounded-lg transition duration-300 hover:bg-white hover:text-black hover:scale-105"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2 3.85 0 4.55 2.55 4.55 5.85V24h-4v-7.7c0-1.85-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.1V24h-4V8z"/>
      </svg>
    </a>

    {/* GITHUB */}
    <a
      href="https://github.com/abujallow"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border border-white/20 rounded-lg transition duration-300 hover:bg-white hover:text-black hover:scale-105"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.74 1.27 3.41.97.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.17a11.1 11.1 0 012.92-.39c.99 0 2 .13 2.92.39 2.22-1.48 3.2-1.17 3.2-1.17.64 1.65.24 2.87.12 3.17.75.8 1.2 1.82 1.2 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55C20.71 21.43 24 17.1 24 12 24 5.65 18.35.5 12 .5z"/>
      </svg>
    </a>

  </div>

</motion.div>
    </motion.div>

    {/* RIGHT SIDE */}
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <img
        src="/profile.png"
        alt="Profile"
        className="rounded-2xl w-80 object-cover shadow-[0_0_40px_rgba(255,255,255,0.1)]"
      />
    </motion.div>

  </div>
</div>

      {/* ABOUT SECTION */}
<motion.section
  id="about"
  className="px-8 py-24 border-t border-gray-800"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
    Philosophy & Background
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
    
    {/* LEFT */}
<div className="relative">

  {/* GLOW ORB */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

  <p className="text-green-400 text-xs tracking-widest uppercase mb-4">
    My Leading Philosophy
  </p>

  <motion.p
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
    viewport={{ once: true }}
    className="text-2xl md:text-3xl italic text-gray-200 leading-relaxed"
  >
    "I approach finance and data through risk and uncertainty, building adaptive systems and leading to serve others through decisions that create long-term impact."
  </motion.p>
  {/* FOCUS TAGS */}
<div className="flex flex-wrap justify-center gap-3 mt-6 max-w-md">

  {/* ROW 1 */}
  <span className="flex items-center gap-2 text-xs px-3 py-1 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-white transition duration-300 hover:scale-111">
    <Shield size={14} />
    Risk Modeling
  </span>

  <span className="flex items-center gap-2 text-xs px-3 py-1 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-white transition duration-300 hover:scale-111">
    <LineChart size={14} />
    Financial Systems
  </span>

  <span className="flex items-center gap-2 text-xs px-3 py-1 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-white transition duration-300 hover:scale-111">
    <Brain size={14} />
    Data-Driven Decisions
  </span>

  {/* ROW 2 */}
  <span className="flex items-center gap-2 text-xs px-3 py-1 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-white transition duration-300 hover:scale-111">
    <Gauge size={14} />
    Efficiency
  </span>

  <span className="flex items-center gap-2 text-xs px-3 py-1 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-white transition duration-300 hover:scale-111">
    <GitBranch size={14} />
    Systems Thinking
  </span>

  <span className="flex items-center gap-2 text-xs px-3 py-1 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-white transition duration-300 hover:scale-111">
    <Target size={14} />
    Decision Making
  </span>

</div>
</div>
    {/* RIGHT */}
    <div>
      <p className="text-gray-400 leading-relaxed mb-6">
        I’m currently a sophomore at Canisius University studying Finance and Data Science, with a focus on building practical, data-driven systems within financial markets and operations. My passion lies at the intersection of analytics, backend systems, and decision-making under uncertainty.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Beyond technical work, I’m deeply engaged in campus life, where I’ve developed a strong foundation in servant leadership. I currently serve as President of the Residence Hall Association (RHA) and President of the National Society of Black Engineers (NSBE), while also working as a Resident Assistant.

        <br /><br />

        Through these roles, I focus on empowering others, building strong communities, and creating environments where people can grow. My involvement reflects a broader commitment to leading with purpose, serving others while driving meaningful, lasting impact.
      </p>
    </div>

  </div>

        </motion.section>
       {/* EXPERIENCE SECTION */}
<motion.section
  id="experience"
  className="px-8 py-24 border-t border-gray-800"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-12 text-center">
      Experience
    </h2>

    <div className="space-y-10">

      {/* M&T */}
      <div className="group grid grid-cols-[160px_1fr] gap-10 items-start p-6 rounded-xl transition duration-300 hover:bg-gray-900 hover:scale-[1.01] border border-transparent hover:border-green-500/30">
        <div className="w-40 h-40 bg-gray-900 rounded-lg flex items-center justify-center transition duration-300 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
          <img 
            src="/mt.png" 
            alt="M&T Bank"
            className="max-w-[70%] max-h-[70%] object-contain"
          />
        </div>

        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold transition duration-300 group-hover:text-green-400">
            M&T Bank — Incoming Summer Analyst
          </h3>
          <p className="text-gray-400 text-sm mb-4">Summer 2026</p>

          <ul className="text-gray-400 space-y-2 list-disc list-inside">
            <li>Incoming analyst in Corporate Summer Internship Program (Mortgage Default Servicing – SPOC)</li>
            <li>Focus on financial analysis, client engagement, and data-driven decision-making</li>
          </ul>
        </div>
      </div>

      {/* BUFFALO */}
      <div className="group grid grid-cols-[160px_1fr] gap-10 items-start p-6 rounded-xl transition duration-300 hover:bg-gray-900 hover:scale-[1.01] border border-transparent hover:border-blue-500/30">
        <div className="w-40 h-40 bg-gray-900 rounded-lg flex items-center justify-center transition duration-300 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
          <img 
            src="/buffalo.png" 
            alt="City of Buffalo"
            className="max-w-[70%] max-h-[70%] object-contain"
          />
        </div>

        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold transition duration-300 group-hover:text-blue-400">
            City of Buffalo — Urban Fellows Intern
          </h3>
          <p className="text-gray-400 text-sm mb-4">Summer 2025</p>

          <ul className="text-gray-400 space-y-2 list-disc list-inside">
            <li>Developed operational frameworks serving 20,000+ residents</li>
            <li>Reduced service processing time from 12 days to 2 days</li>
            <li>Built regression models using census data to analyze community trends</li>
          </ul>
        </div>
      </div>

      {/* BOFA */}
      <div className="group grid grid-cols-[160px_1fr] gap-10 items-start p-6 rounded-xl transition duration-300 hover:bg-gray-900 hover:scale-[1.01] border border-transparent hover:border-red-500/30">
        <div className="w-40 h-40 bg-gray-900 rounded-lg flex items-center justify-center transition duration-300 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]">
          <img 
            src="/bofa.png" 
            alt="Bank of America"
            className="max-w-[70%] max-h-[70%] object-contain"
          />
        </div>

        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold transition duration-300 group-hover:text-red-400">
            Bank of America — Student Leader Intern
          </h3>
          <p className="text-gray-400 text-sm mb-4">Summer 2024</p>

          <ul className="text-gray-400 space-y-2 list-disc list-inside">
            <li>Built VBA-based tracking systems contributing to 98% retention rate</li>
            <li>Conducted 13 interviews to assess operational risk and improve reporting</li>
            <li>Supported leadership programming for 70+ participants</li>
          </ul>
        </div>
      </div>

      {/* NORTHLAND */}
<div className="group grid grid-cols-[160px_1fr] gap-10 items-start p-6 rounded-xl transition duration-300 hover:bg-gray-900 hover:scale-[1.01] border border-transparent hover:border-gray-400/20">
  <div className="w-40 h-40 bg-gray-900 rounded-lg flex items-center justify-center transition duration-300 group-hover:shadow-[0_0_25px_rgba(148,163,184,0.3)]">
    <img 
      src="/northland.png" 
      alt="Northland Workforce Training Center"
      className="max-w-[70%] max-h-[70%] object-contain"
    />
  </div>
  <div className="max-w-2xl">
    <h3 className="text-xl font-semibold transition duration-300 group-hover:text-gray-300">
      Northland Workforce Training Center — Operations & Automation Intern
    </h3>
    <p className="text-gray-400 text-sm mb-4">Summer 2023</p>
    <ul className="text-gray-400 space-y-2 list-disc list-inside">
      <li>Automated workflows reducing manual entry by 40% across 250+ fleet database</li>
      <li>Cut processing time from 6 days to 4 days through validation systems</li>
      <li>Improved data accuracy to 95%+ through cross-team collaboration</li>
    </ul>
  </div>
</div>
</div>
</div>
</motion.section>
{/* SKILLS SECTION */}
<motion.section
  id="skills"
  className="px-8 py-24 border-t border-gray-800"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-12 text-center">
      Skills
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* LANGUAGES */}
      <div className="group p-6 rounded-xl bg-gray-900 border border-transparent hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition duration-300 hover:-translate-y-1">
        <h3 className="text-lg font-semibold mb-4 text-center group-hover:text-white">
          Languages
        </h3>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Python</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Java</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">SQL</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Excel</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">VBA</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">JavaScript</span>
        </div>
      </div>

      {/* FRAMEWORKS & TOOLS */}
      <div className="group p-6 rounded-xl bg-gray-900 border border-transparent hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition duration-300 hover:-translate-y-1">
        <h3 className="text-lg font-semibold mb-4 text-center group-hover:text-white">
          Frameworks & Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">FastAPI</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Flask</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Git</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">APIs</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Power BI</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Tableau</span>
        </div>
      </div>

      {/* DATA & ANALYSIS */}
      <div className="group p-6 rounded-xl bg-gray-900 border border-transparent hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition duration-300 hover:-translate-y-1">
        <h3 className="text-lg font-semibold mb-4 text-center group-hover:text-white">
          Data & Analysis
        </h3>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Pandas</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">NumPy</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Scikit-learn</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Data Visualization</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">Financial Modeling</span>
          <span className="border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition">KPI Reporting</span>
        </div>
      </div>

    </div>

  </div>
</motion.section>
{/* PROOF STRIP */}
<motion.section
  className="px-8 py-16 border-t border-gray-800"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
> {/* TOP TICKER ✅ FULL WIDTH */}
<div className="relative overflow-hidden border-b border-gray-800 mb-12">

  {/* LEFT FADE */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />

  {/* RIGHT FADE */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

  <div
    className="flex w-max"
    style={{ animation: "scroll-reverse 30s linear infinite" }}
    
  >

    <div className="flex gap-12 whitespace-nowrap text-gray-400 text-sm leading-none">
      <span>Built regression models using census data</span>
      <span>Reduced service processing time by 80%</span>
      <span>Automated workflows across 250+ records</span>
      <span>Led initiatives impacting 70+ participants</span>
      <span>Developed real-time risk monitoring systems</span>
      <span>Improved data accuracy to 95%+</span>
    </div>

    <div className="flex gap-12 whitespace-nowrap text-gray-400 text-sm leading-none ml-12">
      <span>Built regression models using census data</span>
      <span>Reduced service processing time by 80%</span>
      <span>Automated workflows across 250+ records</span>
      <span>Led initiatives impacting 70+ participants</span>
      <span>Developed real-time risk monitoring systems</span>
      <span>Improved data accuracy to 95%+</span>
    </div>

  </div>

</div>
{/* NOW your container starts */}
  <div className="max-w-5xl mx-auto">
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

      {/* INTERNSHIPS */}
      <div className="group p-8 rounded-xl transition duration-300 hover:bg-gray-900 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]">
        <Briefcase className="mx-auto mb-2 text-gray-400 group-hover:text-white" size={28} />
        <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          <CountUp end={3} duration={3} delay={0} />+
        </p>
        <p className="text-gray-500 text-sm mt-1">Internships</p>
      </div>

      {/* IMPACT */}
      <div className="group p-8 rounded-xl transition duration-300 hover:bg-gray-900 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]">
        <Users className="mx-auto mb-2 text-gray-400 group-hover:text-white" size={28} />
        <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          <CountUp end={20000} duration={3} delay={0.2} separator="," />+
        </p>
        <p className="text-gray-500 text-sm mt-1">Residents Impacted</p>
      </div>

      {/* EFFICIENCY */}
      <div className="group p-8 rounded-xl transition duration-300 hover:bg-gray-900 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]">
        <TrendingUp className="mx-auto mb-2 text-gray-400 group-hover:text-white" size={28} />
        <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          <CountUp end={75} duration={3} delay={0.4} />%
        </p>
        <p className="text-gray-500 text-sm mt-1">Cumulative Efficiency Improvement</p>
      </div>

      {/* PROJECTS */}
      <div className="group p-8 rounded-xl transition duration-300 hover:bg-gray-900 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]">
        <Code className="mx-auto mb-2 text-gray-400 group-hover:text-white" size={28} />
        <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          <CountUp end={4} duration={3} delay={0.6} />+
        </p>
        <p className="text-gray-500 text-sm mt-1">Technical Projects</p>
      </div>

    </div>
  
  </div>
</motion.section>
{/* SCROLLING PROOF TICKER */}
<div className="overflow-hidden mt-12 border-t border-gray-800 pt-6">

  <div className="flex whitespace-nowrap animate-scroll gap-16 text-gray-400 text-sm w-max">

    {/* ORIGINAL */}
    <span>Built regression models using census data</span>
    <span>Reduced service processing time by 80%</span>
    <span>Automated workflows across 250+ records</span>
    <span>Led initiatives impacting 70+ participants</span>
    <span>Developed real-time risk monitoring systems</span>
    <span>Improved data accuracy to 95%+</span>

    {/* DUPLICATE (DO NOT REMOVE — THIS MAKES IT LOOP) */}
    <span>Built regression models using census data</span>
    <span>Reduced service processing time by 80%</span>
    <span>Automated workflows across 250+ records</span>
    <span>Led initiatives impacting 70+ participants</span>
    <span>Developed real-time risk monitoring systems</span>
    <span>Improved data accuracy to 95%+</span>

  </div>

</div>
{/* PROJECTS SECTION */}
<motion.section
  id="projects"
  className="px-8 py-24 border-t border-gray-800"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold mb-12 text-center">
      Projects
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* PROJECT 1 */}
<div className="group bg-gray-900 rounded-xl overflow-hidden transition duration-300 hover:scale-105 border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.12)] scale-[1.02]">
  <div className="overflow-hidden">
    <img src="/credit-risk.png" alt="Credit Risk Model" className="w-full h-40 object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
  </div>

  <div className="p-6">

    <span className="text-xs text-green-400 border border-green-400/30 px-2 py-1 rounded-full mb-3 inline-block">
      Featured
    </span>

    <h3 className="text-xl font-semibold mb-2">Credit Risk Mini-Model</h3>

    <div className="flex gap-2 mb-3">
      <span className="text-xs border border-white/20 px-2 py-1 rounded">Python</span>
      <span className="text-xs border border-white/20 px-2 py-1 rounded">FastAPI</span>
      <span className="text-xs border border-white/20 px-2 py-1 rounded">Machine Learning</span>
    </div>

    <p className="text-gray-400 text-sm mb-4">
      Developed a logistic regression model to predict credit risk and deployed it with FastAPI to serve real-time predictions and support decision-making.
    </p>

    <a href="https://github.com/abujallow/credit-risk-mini" target="_blank" rel="noopener noreferrer" className="inline-block text-white border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black">
      GitHub
    </a>
  </div>
</div>
      {/* PROJECT 2 */}
      <div className="group bg-gray-900 rounded-xl overflow-hidden transition duration-300 hover:scale-105 border border-transparent hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
        <div className="overflow-hidden">
          <img src="/risk-monitoring.png" alt="Risk Monitoring System" className="w-full h-40 object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Risk Monitoring System</h3>

          <div className="flex gap-2 mb-3">
            <span className="text-xs border border-white/20 px-2 py-1 rounded">Python</span>
            <span className="text-xs border border-white/20 px-2 py-1 rounded">Data Analysis</span>
          </div>

          <p className="text-gray-400 text-sm mb-4">
            Built a volatility monitoring system that tracks market conditions and triggers alerts based on predefined risk thresholds.
          </p>

          <a href="https://github.com/abujallow/risk-monitoring-system" target="_blank" rel="noopener noreferrer" className="inline-block text-white border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black">
            GitHub
          </a>
        </div>
      </div>

      {/* PROJECT 3 ✅ NOW INSIDE GRID */}
      <div className="group bg-gray-900 p-6 rounded-xl transition duration-300 hover:scale-105 border border-transparent hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">

        <div className="overflow-hidden mb-4 rounded-lg">
          <img src="/market-dashboard.png" alt="Market Dashboard" className="w-full h-40 object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
        </div>

        <h3 className="text-xl font-semibold mb-2">
          Market Dashboard
        </h3>

        <div className="flex gap-2 mb-3">
          <span className="text-xs border border-white/20 px-2 py-1 rounded">Python</span>
          <span className="text-xs border border-white/20 px-2 py-1 rounded">Flask</span>
          <span className="text-xs border border-white/20 px-2 py-1 rounded">Data Visualization</span>
        </div>

        <p className="text-gray-400 text-sm mb-4">
          Built an interactive financial dashboard using Plotly and yFinance to visualize market trends and support data-driven investment insights.
        </p>

        <a href="https://github.com/abujallow/market-dashboard" target="_blank" rel="noopener noreferrer" className="inline-block text-white border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black">
          GitHub
        </a>
      </div>

    </div> {/* END GRID */}

  </div> {/* END CONTAINER */}

</motion.section> {/* ✅ THIS WAS MISSING */}

<motion.section
  id="contact"
  className="px-8 py-24 border-t border-gray-800"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <div className="max-w-3xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-6">
      Contact
    </h2>

    <p className="text-gray-400 mb-10">
      Open to internships and opportunities in finance, data science, and risk & operations, with a focus on data-driven impact.
    </p>

    <form onSubmit={sendEmail} className="flex flex-col gap-6">

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-3 rounded bg-gray-900 border border-gray-700"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="p-3 rounded bg-gray-900 border border-gray-700"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        className="p-3 rounded bg-gray-900 border border-gray-700"
      />

      <button
        type="submit"
        className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-80"
      >
        Send Message
      </button>

    </form>
    </div>
  </motion.section>
</main>
);
}