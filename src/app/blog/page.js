"use client";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function BlogPage() {

  // ✅ ONE-TIME typing (navbar)
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

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">

        {/* LEFT */}
        <div className="flex items-center gap-8 flex-1">
          <a href="/" className="text-xl font-bold whitespace-nowrap">
            AJ.
          </a>

          {/* ONE-TIME TYPING */}
          <p className="text-lg tracking-wider text-gray-300 hidden md:block mx-auto whitespace-nowrap">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-gray-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/#about" className="hover:text-white">About</a>
          <a href="/#experience" className="hover:text-white">Experience</a>
          <a href="/#projects" className="hover:text-white">Projects</a>
          <a href="/#contact" className="hover:text-white">Contact</a>
          <a href="/blog" className="text-white">Blog</a>

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

      {/* MAIN */}
      <main className="min-h-screen bg-black text-white px-8 py-24">

        {/* HEADER */}
        <div className="max-w-4xl mx-auto mb-20">

          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/omr-logo.png"
              alt="OnMyRadar Logo"
              className="w-20 h-20 object-contain"
            />

            <h1 className="text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]">
              OnMyRadar
            </h1>
          </div>

          {/* LOOPING BULLET ANIMATION */}
          <p className="text-gray-400 text-2xl text-center">
            <TypeAnimation
              sequence={[
                "Markets",
                1200,
                "Markets • Policy",
                1200,
                "Markets • Policy • Systems",
                1200,
                "Markets • Policy • Systems • Real-World Impact",
                2500,
                "",
                500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>

        </div>

        {/* BLOG POSTS */}
        <div className="max-w-4xl mx-auto space-y-12">

          {/* POST 1 */}
          <div className="group border border-gray-800 rounded-xl p-6 transition duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]">
            <div className="flex items-center gap-3 mb-2">
              <img src="/omr-logo.png" className="w-8 h-8" />
              <p className="text-sm text-gray-500">{"July 29, 2025"}</p>
            </div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-red-400">
              The Creator Crunch: Burnout, Budget Cuts, and the Battle for Relevance
            </h2>
            <p className="text-gray-400 mb-4">
              The creator economy was sold as a path to independence. Mid-2025, the shine is wearing off.
            </p>
            <span className="text-sm group-hover:text-red-400">
              Read More →
            </span>
          </div>

          {/* POST 2 */}
          <div className="group border border-gray-800 rounded-xl p-6 transition duration-300 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]">
            <div className="flex items-center gap-3 mb-2">
              <img src="/omr-logo.png" className="w-8 h-8" />
              <p className="text-sm text-gray-500">{"July 17, 2025"}</p>
            </div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-yellow-300">
              Bitcoin at $120K+: Policy, Politics, and Market Momentum
            </h2>
            <p className="text-gray-400 mb-4">
              Bitcoin crossed a historic threshold, driven by policy and institutional momentum.
            </p>
            <span className="text-sm group-hover:text-yellow-300">
              Read More →
            </span>
          </div>

          {/* POST 3 */}
          <div className="group border border-gray-800 rounded-xl p-6 transition duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <div className="flex items-center gap-3 mb-2">
              <img src="/omr-logo.png" className="w-8 h-8" />
              <p className="text-sm text-gray-500">{"July 7, 2025"}</p>
            </div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400">
              The Tariff Tightrope: Deadlines, Deals, and What Comes Next
            </h2>
            <p className="text-gray-400 mb-4">
              Trade policy is shifting fast, with tariffs becoming strategic tools.
            </p>
            <span className="text-sm group-hover:text-blue-400">
              Read More →
            </span>
          </div>

          {/* POST 4 */}
          <div className="group border border-gray-800 rounded-xl p-6 transition duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <div className="flex items-center gap-3 mb-2">
              <img src="/omr-logo.png" className="w-8 h-8" />
              <p className="text-sm text-gray-500">{"July 1, 2025"}</p>
            </div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-purple-400">
              Welcome to OnMyRadar: The Story Behind the Blog
            </h2>
            <p className="text-gray-400 mb-4">
              The origin story behind the blog and its purpose.
            </p>
            <span className="text-sm group-hover:text-purple-400">
              Read More →
            </span>
          </div>

        </div>

      </main>
    </>
  );
}