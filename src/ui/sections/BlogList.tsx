import Image from "next/image";
import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  image?: string;
};

export type BlogListProps = {
  posts: BlogPost[];
  className?: string;
};

export function BlogList({ posts, className }: BlogListProps) {
  return (
    <section className={cn("space-y-6", className)}>
      {posts.map((post) => (
        <article
          key={post.href}
          className="grid gap-6 rounded-3xl border border-[#d3c6aa] bg-white p-6 shadow-[0_12px_24px_rgba(56,64,0,0.08)] lg:grid-cols-[0.9fr_1.1fr]"
        >
          {post.image && (
            <div className="relative h-48 overflow-hidden rounded-2xl">
              <Image src={post.image} alt={post.title} fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
            </div>
          )}
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-[#8d784f]">{post.date}</div>
            <h3 className="font-serif text-2xl text-[#2f3600]">{post.title}</h3>
            <p className="text-sm text-[#4b4d2f]">{post.excerpt}</p>
            <Button variant="ghost" href={post.href}>
              Читать далее
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
}
