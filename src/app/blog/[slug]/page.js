"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { postsBySlug } from "../../data";

export default function BlogPost() {
  const { slug } = useParams();
  const post = postsBySlug[slug];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const readingTime = useMemo(() => {
    if (!post) return 0;
    const wordCount = post.sections
      .map((section) => section.text)
      .join(" ")
      .trim()
      .split(/\s+/).length;

    return Math.max(1, Math.ceil(wordCount / 200));
  }, [post]);

  if (!post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
        <div>
          <h1 className="text-3xl font-bold">Post not found</h1>
          <Link href="/blog" className="mt-5 inline-flex items-center gap-2 text-slate-300 hover:text-white">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const light = post.light;

  return (
    <main className={`min-h-screen bg-gradient-to-b ${post.gradient} ${light ? "text-slate-950" : "text-white"}`}>
      <div className="fixed left-0 top-0 z-50 h-1 w-full">
        <div
          className="h-full bg-gradient-to-r from-blue-300 via-green-300 to-purple-300 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/blog"
          className={`mb-10 inline-flex items-center gap-2 text-sm font-medium transition ${
            light ? "text-slate-700 hover:text-slate-950" : "text-slate-400 hover:text-white"
          }`}
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <header>
          <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.18em] ${light ? "text-slate-600" : "text-green-300"}`}>
            OnMyRadar
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">{post.title}</h1>
          <p className={`mt-5 ${light ? "text-slate-600" : "text-slate-400"}`}>
            {post.date} / {readingTime} min read
          </p>
        </header>

        {post.image && (
          <div className="relative my-12 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src={post.image}
              alt={`${post.title} featured image`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading} className="rounded-lg p-0 transition md:hover:bg-white/[0.04] md:hover:p-5">
              <div className="mb-4 flex items-center gap-3">
                <span className={`h-6 w-1 rounded-full ${light ? "bg-slate-900" : "bg-white"}`} />
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{section.heading}</h2>
              </div>
              <p className={`whitespace-pre-line text-lg leading-9 ${light ? "text-slate-700" : "text-slate-300"}`}>
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </article>

      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 rounded-full border border-white/15 bg-black/50 p-3 text-white backdrop-blur transition hover:bg-white hover:text-black"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </main>
  );
}
