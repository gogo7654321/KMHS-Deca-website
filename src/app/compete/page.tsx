import type { Metadata } from 'next';
import {
  Rocket,
  BookOpen,
  ListChecks,
  PlayCircle,
  ExternalLink,
  Mail,
  Lock,
} from 'lucide-react';
import { links, clusters } from '@/lib/data';
import { DecaLogo } from '@/components/deca-logo';

export const metadata: Metadata = {
  title: 'Compete',
  description:
    'Competition prep resources for KMHS DECA — DECA+, competitive events, example videos, and vocabulary to use in your role-plays.',
};

const resources = [
  {
    title: 'DECA+ Prep Hub',
    description:
      'Our main competition prep platform — practice tests, role-plays, and performance indicators. Need a login? Contact our advisor if you are competing.',
    href: links.decaPlus,
    cta: 'Open DECA+',
    icon: Rocket,
    featured: true,
  },
  {
    title: 'Competitive Events',
    description:
      'Browse every DECA competitive event across marketing, finance, hospitality, and management to find the one that fits you.',
    href: links.decaEvents,
    cta: 'View Events',
    icon: ListChecks,
  },
  {
    title: 'How to Compete',
    description:
      'Official DECA guidance on the competition process, example videos, and what to expect at each level.',
    href: links.decaCompete,
    cta: 'Learn to Compete',
    icon: PlayCircle,
  },
  {
    title: 'Words to Use in Competition',
    description:
      'A Quizlet set of powerful vocabulary to level up your role-plays and impress the judges.',
    href: links.wordsQuizlet,
    cta: 'Study the Terms',
    icon: BookOpen,
  },
];

export default function CompetePage() {
  return (
    <>
      {/* ICDC stadium banner */}
      <div className="relative h-52 w-full overflow-hidden sm:h-72">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gallery/11-icdc-stadium.jpg"
          alt="DECA International Career Development Conference at Mercedes-Benz Stadium, Atlanta"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container pb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 drop-shadow">
              #DECAICDC · Mercedes-Benz Stadium, Atlanta
            </p>
          </div>
        </div>
      </div>
      <div className="container py-16 md:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* DECA 2026 theme */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/graphics/deca-theme-2026.png"
            alt="DECA 2026 theme: Next Big Thing"
            className="mb-7 w-56 max-w-full drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)] sm:w-72"
          />
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Get Competition Ready
          </p>
        <h1 className="mt-3 font-headline text-5xl font-bold tracking-tight sm:text-6xl">
          Compete with DECA
        </h1>
        <p className="mt-4 text-muted-foreground">
          Everything you need to prepare for region, state, and international
          competition. Bookmark these and put in the reps.
        </p>
      </div>

      {/* DECA+ login callout */}
      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/30 bg-primary/10 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-primary/20 p-3 text-primary">
            <Lock className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-headline text-xl font-bold">DECA+ login credentials</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              If you&rsquo;re participating in competition, email our advisor{' '}
              <span className="font-semibold text-foreground">Paul Goodman</span> for
              your DECA+ login.
            </p>
            <a
              href={`mailto:${links.advisorEmail}?subject=DECA%2B%20Login%20Request`}
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" /> {links.advisorEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Resource cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {resources.map((r) => {
          const Icon = r.icon;
          return (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
                r.featured
                  ? 'border-primary/50 ring-1 ring-primary/20'
                  : 'border-border hover:border-primary/60'
              }`}
            >
              {/* DECA brand watermark */}
              <DecaLogo className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 opacity-[0.07] transition-transform duration-500 group-hover:rotate-12" />
              <div className="relative mb-5 inline-flex rounded-xl bg-gradient-to-br from-primary to-accent p-3.5 text-white shadow-lg shadow-primary/25">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-headline text-2xl font-bold">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-primary">
                {r.cta}
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          );
        })}
      </div>

      {/* Five career clusters */}
      <div className="mt-20">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            The Career Clusters
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            DECA&rsquo;s competitive events and programs span four career clusters &mdash;
            find the path that fits you.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-sm rounded-3xl bg-white p-6 shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/graphics/deca-career-cluster-wheel.png"
            alt="DECA career cluster wheel: Marketing, Business Management & Administration, Finance, Hospitality & Tourism, and Entrepreneurship surrounded by 21st century employability skills"
            className="w-full"
          />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clusters.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-lg font-bold leading-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Competition in action */}
      <div className="mt-20">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            Competition in action
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            A look at DECA&rsquo;s International Career Development Conference (ICDC)
            &mdash; Anaheim, CA 2027.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-border bg-black shadow-2xl">
          <video className="aspect-video w-full" controls preload="none">
            <source src="/videos/icdc-2027-anaheim.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      </div>
    </>
  );
}
