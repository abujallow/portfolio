import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteNav from "../components/SiteNav";
import { blogPosts } from "../data";

const accentStyles = {
  blue: "hover:border-blue-400/50 group-hover:text-blue-300",
  yellow: "hover:border-yellow-300/50 group-hover:text-yellow-200",
  amber: "hover:border-amber-500/50 group-hover:text-amber-300",
  cream: "hover:border-stone-200/60 group-hover:text-stone-200",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteNav active="blog" />

      <section className="section-shell py-18 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Image src="/omr-logo.png" alt="OnMyRadar logo" width={72} height={72} className="h-16 w-16 object-contain" />
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">OnMyRadar</h1>
          </div>
          <p className="mx-auto max-w-2xl text-xl leading-8 text-slate-400">
            Markets, policy, systems, and the real-world impact behind the headlines.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-5">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article
                className={`rounded-lg border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.045] ${
                  accentStyles[post.accent]
                } md:p-6`}
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <Image src="/omr-logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white transition md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-slate-400">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition">
                  Read more <ArrowRight size={16} />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
