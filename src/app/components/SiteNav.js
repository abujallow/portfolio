"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { philosophy } from "../data";

const navItems = [
  { label: "About", hash: "about" },
  { label: "Experience", hash: "experience" },
  { label: "Projects", hash: "projects" },
  { label: "Contact", hash: "contact" },
];

export default function SiteNav({ active = "home" }) {
  const [open, setOpen] = useState(false);
  const homePrefix = active === "home" ? "" : "/";

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 glass-nav">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 text-white md:px-8">
        <div className="flex min-w-0 items-center gap-5">
          <Link href="/" className="text-xl font-bold tracking-tight" aria-label="Abubakr Jallow home">
            AJ.
          </Link>
          <p className="hidden max-w-[44rem] truncate text-sm tracking-wide text-slate-300 lg:block">
            {philosophy}
          </p>
        </div>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <Link href="/" className={active === "home" ? "text-white" : "transition hover:text-white"}>
            Home
          </Link>
          {navItems.map((item) => (
            <Link key={item.hash} href={`${homePrefix}#${item.hash}`} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/blog" className={active === "blog" ? "text-white" : "transition hover:text-white"}>
            Blog
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/70 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-white/15 p-2 text-slate-200 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-5 pb-5 text-sm font-medium text-slate-300 md:hidden">
          <div className="grid gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="py-1 text-white">
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.hash}
                href={`${homePrefix}#${item.hash}`}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/blog" onClick={() => setOpen(false)} className="py-1">
              Blog
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit rounded-md border border-white/70 px-4 py-2 text-white"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
