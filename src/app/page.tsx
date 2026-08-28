import Link from 'next/link';
import { ArrowRight, MessageCircle, Trophy, ChevronDown, CalendarDays } from 'lucide-react';
import { benefits, links, nextMeeting } from '@/lib/data';
import { DecaLogo } from '@/components/deca-logo';
import { InstagramIcon } from '@/components/social-icons';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero — full-bleed landing video with the title in the bottom third */}
      <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden">
        {/* promo video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* scrims + DECA-blue glow */}
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/85 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-[72%] h-[380px] w-[680px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[130px]" />

        <div className="container relative z-10 flex flex-col items-center pb-[14vh] text-center md:pb-[12vh]">
          <p className="animate-fade-up text-xs font-bold uppercase tracking-[0.35em] text-primary sm:text-sm">
            Kennesaw Mountain Mustangs
          </p>
          <h1 className="animate-fade-up mt-4 font-headline text-6xl font-bold leading-[0.85] tracking-tight text-white drop-shadow-[0_6px_40px_rgba(0,0,0,0.6)] [animation-delay:100ms] sm:text-8xl md:text-[9.5rem] md:leading-[0.82]">
            KMHS{' '}
            <span className="bg-gradient-to-br from-sky-200 via-primary to-primary bg-clip-text text-transparent">
              DECA
            </span>
          </h1>
          <p className="animate-fade-up mt-4 font-headline text-2xl font-semibold tracking-wide text-white/90 [animation-delay:200ms] sm:text-4xl">
            Compete. Lead. Grow.
          </p>
          <div className="animate-fade-up mt-9 flex flex-col gap-4 [animation-delay:300ms] sm:flex-row">
            <a
              href={links.groupMe}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/40 transition-all hover:scale-[1.03] hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" /> Join our GroupMe
            </a>
            <Link
              href="/compete"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-7 py-3.5 text-lg font-bold text-white backdrop-blur-sm transition-all hover:scale-[1.03] hover:bg-white/20"
            >
              <Trophy className="h-5 w-5" /> Explore Competition
            </Link>
          </div>
        </div>

        {/* scroll cue */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center">
          <ChevronDown className="h-6 w-6 animate-bounce text-white/60" />
        </div>
      </section>

      {/* Intro band */}
      <section className="border-b border-border/70 bg-secondary/20 py-14">
        <div className="container">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Whether you&rsquo;re into business, chasing community service hours, or just
            looking for a fun club to join &mdash;{' '}
            <span className="font-semibold text-foreground">DECA is for you.</span> No
            matter what career field you&rsquo;re headed toward, DECA has something to
            offer.
          </p>
        </div>
      </section>

      {/* Next meeting */}
      <section className="border-b border-border/70 py-8">
        <div className="container">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Next Meeting
              </p>
              <p className="font-headline text-lg font-bold">{nextMeeting.label}</p>
              <p className="text-sm text-muted-foreground">{nextMeeting.detail}</p>
            </div>
            <a
              href={links.groupMe}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" /> GroupMe
            </a>
          </div>
        </div>
      </section>

      {/* Chapter feature */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Kennesaw Mountain Mustangs
            </p>
            <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              One chapter. One diamond.
            </h2>
          </div>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/chapter-feature.jpg"
              alt="KMHS DECA members throwing the diamond at a conference"
              className="w-full"
              loading="lazy"
            />
          </div>
          <p className="mx-auto mt-3 max-w-5xl text-center text-[11px] italic text-muted-foreground/50">
            Neil was supposed to be in this picture &mdash; he left right before it was taken.
          </p>
        </div>
      </section>

      {/* Meet the team */}
      <section className="pb-16 md:pb-24">
        <div className="container relative flex flex-col items-center overflow-hidden rounded-3xl border border-border px-6 py-20 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/backgrounds/atlanta-night.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Meet the team behind KMHS DECA
            </h2>
            <p className="mt-4 max-w-2xl text-white/75">
              Our student leadership board runs meetings, plans events, and helps every
              member get competition-ready.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/leadership"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Meet the Leadership
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-lg font-bold text-primary transition-colors hover:bg-primary/10"
              >
                <InstagramIcon className="h-5 w-5" /> @kmhs_deca
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why DECA */}
      <section className="border-y border-border/70 py-20 md:py-28">
        <div className="container">
          <div className="mb-14 text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Why Join DECA?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              DECA prepares emerging leaders and entrepreneurs in marketing, finance,
              hospitality, and management &mdash; here&rsquo;s what&rsquo;s in it for you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="mb-5 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-headline text-xl font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compete strip */}
      <section className="border-b border-border/70 bg-secondary/20 py-20 md:py-28">
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Get Competition Ready
            </p>
            <h2 className="mt-3 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Take your skills to region, state &amp; ICDC
            </h2>
            <p className="mt-4 text-muted-foreground">
              From role-plays to written events, our chapter competes across marketing,
              finance, hospitality, and management. We&rsquo;ll help you prep with the
              right tools, practice, and a team behind you.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/compete"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Prep for Competition
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={links.decaPlus}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-bold text-foreground transition-colors hover:border-primary/60"
              >
                DECA+ Prep Hub
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { n: '322K+', l: 'Members Worldwide' },
                { n: '4,700+', l: 'Chapters' },
                { n: '4', l: 'Career Clusters' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-headline text-3xl font-bold text-primary sm:text-4xl">
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
              <p className="text-sm text-muted-foreground">
                New members welcome &mdash; no experience needed. Join the GroupMe and
                come to a meeting!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA — animated DECA cluster background */}
      <section className="relative overflow-hidden border-t border-border/70">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/cluster-bg-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/cluster-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/50" />
        <div className="container relative z-10 py-24 text-center md:py-32">
          <DecaLogo className="mx-auto mb-6 h-12 w-12 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]" />
          <h2 className="font-headline text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] sm:text-5xl">
            Ready to join KMHS DECA?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-medium text-white/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)]">
            No experience needed &mdash; hop in the GroupMe, come to a meeting, and be
            part of the next big thing.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={links.groupMe}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-[1.03] hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" /> Join our GroupMe
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-7 py-3.5 text-lg font-bold text-primary transition-colors hover:bg-primary/10"
            >
              <InstagramIcon className="h-5 w-5" /> @kmhs_deca
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
