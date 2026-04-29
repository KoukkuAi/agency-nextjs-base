'use client';
// components/ui/BlogGrid.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — 3-col image card blog grid. Cover image, category badge, author.
// Adapted: data-driven, primaryColor category badges, FadeInStagger, Balancer, cn().
// Best for: blogin etusivu, resurssikeskus, asiakastarinat-lista.
//
// Usage:
//   import { BlogGrid } from '@/components/ui';
//
//   <BlogGrid
//     headline="Blogista"
//     subheadline="Opi kasvattamaan liiketoimintaasi asiantuntijavinkeillä."
//     primaryColor="#4F46E5"
//     posts={[
//       {
//         id: 1, title: 'Konversio-optimointi', href: '#',
//         description: 'Kuvaus...', imageUrl: '/blog/img1.jpg',
//         date: '16.3.2024', datetime: '2024-03-16',
//         category: { title: 'Markkinointi', href: '#' },
//         author: { name: 'Matti V.', role: 'Toimitusjohtaja', href: '#', imageUrl: '/avatars/matti.jpg' },
//       },
//       ...
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface BlogAuthor {
  name: string;
  role: string;
  href: string;
  imageUrl: string;
}

interface BlogPost {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
  datetime: string;
  category: { title: string; href: string };
  author: BlogAuthor;
}

interface BlogGridProps {
  headline?: string;
  subheadline?: string;
  primaryColor?: string;
  posts: BlogPost[];
  className?: string;
}

export function BlogGrid({
  headline,
  subheadline,
  primaryColor = '#4F46E5',
  posts,
  className,
}: BlogGridProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        {(headline || subheadline) && (
          <FadeIn className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
            {headline && (
              <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
                <Balancer>{headline}</Balancer>
              </h2>
            )}
            {subheadline && (
              <p className="mt-2 text-lg leading-8 text-zinc-600">{subheadline}</p>
            )}
          </FadeIn>
        )}

        {/* 3-col grid */}
        <FadeInStagger className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <FadeIn key={post.id}>
              <article className="flex flex-col items-start justify-between">

                {/* Cover image */}
                <div className="relative w-full">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="aspect-video w-full rounded-2xl bg-zinc-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
                </div>

                <div className="flex max-w-xl grow flex-col justify-between">
                  {/* Date + category */}
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-zinc-500">{post.date}</time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full px-3 py-1.5 font-medium transition-colors duration-200"
                      style={{
                        backgroundColor: `${primaryColor}15`,
                        color: primaryColor,
                      }}
                    >
                      {post.category.title}
                    </a>
                  </div>

                  {/* Title + excerpt */}
                  <div className="group relative grow">
                    <h3 className="mt-3 text-lg font-semibold text-zinc-950 group-hover:text-zinc-600 transition-colors duration-200">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600">{post.description}</p>
                  </div>

                  {/* Author */}
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      alt={post.author.name}
                      src={post.author.imageUrl}
                      className="size-10 rounded-full bg-zinc-100 object-cover"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-zinc-950">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-zinc-600">{post.author.role}</p>
                    </div>
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
