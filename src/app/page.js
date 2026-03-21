"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
<nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
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
    ]}
    wrapper="h2"
    speed={60}
    repeat={0} // 🚨 key: stops looping
    className="text-xl md:text-2xl text-gray-400 mb-6"
  />
</motion.div>
      <motion.p
        className="text-gray-300 text-lg leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        I’m a Finance and Data Science student passionate about risk, 
        financial systems, and building data-driven solutions. 
        I focus on combining analytical thinking with real-world impact.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a href="#projects">
  <button className="bg-white text-black px-6 py-3 rounded-lg font-medium transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
    View Projects
  </button>
</a>

        <a href="#contact">
  <button className="border border-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:scale-105 hover:bg-white hover:text-black">
    Contact
  </button>
</a>
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
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* LEFT */}
          <div>
            <h2 className="text-sm text-green-400 tracking-widest mb-4">
                  MY LEADING PHILOSOPHY
            </h2>

            <p className="text-2xl md:text-3xl italic text-gray-300 leading-relaxed">
              "I approach finance and data through risk and uncertainty, building adaptive systems and leading to serve others through decisions that create long-term impact."
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              I’m currently a sophomore at Canisius University studying Finance and Data Science, with a focus on building practical, data-driven systems within financial markets and operations. My passion lies at the intersection of analytics, backend systems, and decision-making under uncertainty.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Beyond technical work, I’m deeply engaged in campus life, where I’ve developed a strong foundation in servant leadership. I currently serve as President of the Residence Hall Association (RHA) and President of the National Society of Black Engineers (NSBE), while also working as a Resident Assistant.

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
      <div className="group bg-gray-900 rounded-xl overflow-hidden transition duration-300 hover:scale-105 border border-transparent hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
        <div className="overflow-hidden">
          <img src="/credit-risk.png" alt="Credit Risk Model" className="w-full h-40 object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Credit Risk Mini-Model</h3>

          <div className="flex gap-2 mb-3">
            <span className="text-xs border border-white/20 px-2 py-1 rounded">Python</span>
            <span className="text-xs border border-white/20 px-2 py-1 rounded">FastAPI</span>
            <span className="text-xs border border-white/20 px-2 py-1 rounded">Machine Learning</span>
          </div>

          <p className="text-gray-400 text-sm mb-4">
            Built a logistic regression pipeline and deployed it using FastAPI.
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
            Built a volatility monitoring system with alerts.
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
          Interactive dashboard using Plotly + yFinance.
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
      I'm always open to opportunities, collaborations, and conversations.
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