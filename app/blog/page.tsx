import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing on reliable RAG systems, AI agents, evaluation, retrieval, and production observability.",
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="section-shell section-space">
        <SectionHeading
          eyebrow="Blog"
          title="Notes from building production AI systems."
          description="Architecture, evals, observability, retrieval, and operating patterns for teams shipping agents and RAG systems."
          titleTag="h1"
        />
      </section>

      <section className="section-shell pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="surface-card page-grid block p-7 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/25"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span>{formatDate(post.publishedAt)}</span>
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl tracking-[-0.04em] text-white">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {post.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-100">
                Read article
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
