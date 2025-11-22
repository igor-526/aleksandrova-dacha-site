import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type RelatedPost = {
  title: string;
  href: string;
  date: string;
};

export type RelatedPostsProps = {
  posts: RelatedPost[];
  className?: string;
};

export function RelatedPosts({ posts, className }: RelatedPostsProps) {
  return (
    <section className={cn("rounded-3xl bg-[#f0e7cf] p-6", className)}>
      <h2 className="font-serif text-2xl text-[#2f3600]">Похожие материалы</h2>
      <ul className="mt-4 space-y-3 text-sm text-[#4b4d2f]">
        {posts.map((post) => (
          <li
            key={post.href}
            className="flex items-center justify-between gap-4"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#8d784f]">
                {post.date}
              </div>
              <a
                href={post.href}
                className="font-medium text-[#2f3600] hover:underline"
              >
                {post.title}
              </a>
            </div>
            <Button variant="ghost" href={post.href}>
              Читать
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
