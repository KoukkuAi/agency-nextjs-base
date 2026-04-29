'use client';
// components/ui/BlogFeatured.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Featured post (left) + compact post list (right), no images.
// Adapted: data-driven, primaryColor "continue reading" links, FadeIn, cn().
// Best for: etusivu bloginäkymä, lehdistötiedote-yläosa.
//
// Usage:
//   import { BlogFeatured } from '@/components/ui';
//
//   <BlogFeatured
//     primaryColor="#4F46E5"
//     featured={{
//       title: 'Yritys kasvoi 300% – näin teimme sen',
//       href: '/blogi/kasvu',
//       description: 'Kuvaus artikkelista...',
//       date: '16.3.2024',
//       datetime: '2024-03-16',
//       author: { name: 'Matti V.', href: '#', imageUrl: '/avatars/matti.jpg' },
//     }}
//     posts={[
//       { id: 2, title: 'SEO-vinkit 2024', href: '#', description: '...', date: '10.3.2024', datetime: '2024-03-10',
//         author: { name: 'Liisa M.', href: '#', imageUrl: '/avatars/liisa.jpg' } },
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface BlogAuthor {
  name: string;
  href: string;
  imageUrl: string;
}

interface FeaturedPost {
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  author: BlogAuthor;
}

interface CompactPost {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  author: BlogAuthor;
}

interface BlogFeaturedProps {
  featured: FeaturedPost;
  posts: CompactPost[];
  primaryColor?: string;
  className?: string;
}

export function BlogFeatured({
  featured,
  posts,
  primaryColor = '#4F46E5',
  className,
}: BlogFeaturedProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">

        {/* Featured post */}
        <FadeIn>
          <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
            <time dateTime={featured.datetime} className="block text-sm text-zinc-600">
              {featured.date}
            </time>
            <h2
              id="featured-post"
              className="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl"
            >
              {featured.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">{featured.description}</p>
            <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
              <div className="flex">
                <a
                  href={featured.href}
                  aria-describedby="featured-post"
                  className="text-sm font-semibold hover:opacity-70 transition-opacity duration-200"
                  style={{ color: primaryColor }}
                >
                  Lue lisää <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div className="flex border-t border-zinc-900/10 pt-8 lg:border-t lg:pt-8">
                <a
                  href={featured.author.href}
                  className="flex gap-x-2.5 text-sm font-semibold text-zinc-950"
                >
                  <img
                    alt={featured.author.name}
                    src={featured.author.imageUrl}
                    className="size-6 flex-none rounded-full bg-zinc-100 object-cover"
                  />
                  {featured.author.name}
                </a>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Compact post list */}
        <FadeIn delay={0.1}>
          <div className="mx-auto w-full max-w-2xl border-t border-zinc-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div className="-my-12 divide-y divide-zinc-900/10">
              {posts.map((post) => (
                <article key={post.id} className="py-12">
                  <div className="group relative max-w-xl">
                    <time dateTime={post.datetime} className="block text-sm text-zinc-600">
                      {post.date}
                    </time>
                    <h2 className="mt-2 text-lg font-semibold text-zinc-950 group-hover:text-zinc-600 transition-colors duration-200">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-zinc-600">{post.description}</p>
                  </div>
                  <div className="mt-4 flex">
                    <a
                      href={post.author.href}
                      className="relative flex gap-x-2.5 text-sm font-semibold text-zinc-950"
                    >
                      <img
                        alt={post.author.name}
                        src={post.author.imageUrl}
                        className="size-6 flex-none rounded-full bg-zinc-100 object-cover"
                      />
                      {post.author.name}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
