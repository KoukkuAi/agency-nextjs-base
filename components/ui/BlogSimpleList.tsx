'use client';
// components/ui/BlogSimpleList.tsx — 3-col no-image blog list, border-top separator.
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface BlogAuthor { name: string; role: string; href: string; imageUrl: string; }
interface SimplePost {
  id: number; title: string; href: string; description: string;
  date: string; datetime: string;
  category: { title: string; href: string };
  author: BlogAuthor;
}
interface BlogSimpleListProps {
  headline?: string; subheadline?: string; primaryColor?: string;
  posts: SimplePost[]; className?: string;
}

export function BlogSimpleList({ headline, subheadline, primaryColor = '#4F46E5', posts, className }: BlogSimpleListProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(headline || subheadline) && (
          <FadeIn className="mx-auto max-w-2xl lg:mx-0">
            {headline && <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl"><Balancer>{headline}</Balancer></h2>}
            {subheadline && <p className="mt-2 text-lg leading-8 text-zinc-600">{subheadline}</p>}
          </FadeIn>
        )}
        <FadeInStagger className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-zinc-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <FadeIn key={post.id}>
              <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-zinc-500">{post.date}</time>
                  <a href={post.category.href} className="relative z-10 rounded-full px-3 py-1.5 font-medium transition-colors duration-200" style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}>
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg font-semibold text-zinc-950 group-hover:text-zinc-600 transition-colors duration-200">
                    <a href={post.href}><span className="absolute inset-0" />{post.title}</a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt={post.author.name} src={post.author.imageUrl} className="size-10 rounded-full bg-zinc-50 object-cover" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-zinc-950"><a href={post.author.href}><span className="absolute inset-0" />{post.author.name}</a></p>
                    <p className="text-zinc-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
}
