import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { siteUrl } from "@/lib/site-content";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      url: `${siteUrl}/blog/${post.slug}`,
      title: `${post.title} | WeaveAI`,
      description: post.description,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-shell section-space">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>{formatDate(post.publishedAt)}</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>{post.readingTime}</span>
          </div>
          <h1 className="font-display text-5xl tracking-[-0.05em] text-white sm:text-6xl">
            {post.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            {post.description}
          </p>
        </div>

        <div className="prose-weave mt-12">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-5">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
