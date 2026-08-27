import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, GraduationCap, Building2, Globe } from 'lucide-react';
import { links } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Kennesaw Mountain High School DECA — who we are, what DECA is, and how to get involved.',
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          About Us
        </p>
        <h1 className="mt-3 font-headline text-5xl font-bold tracking-tight sm:text-6xl">
          About KMHS DECA
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          KMHS DECA is the Kennesaw Mountain High School chapter of DECA &mdash; an
          international organization that prepares emerging leaders and entrepreneurs
          in marketing, finance, hospitality, and management. Whether you&rsquo;re
          interested in business, looking to earn community service hours, or just
          want a fun club to be part of, there&rsquo;s a place for you here. No matter
          what career field you plan on going into, DECA has something to offer.
        </p>

        {/* School photo */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/school.jpg"
            alt="Kennesaw Mountain High School"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Globe,
              title: 'What is DECA?',
              body: 'A global organization of 322,000+ high school and college members across marketing, finance, hospitality, and management careers.',
            },
            {
              icon: Building2,
              title: 'Our Chapter',
              body: 'The KMHS Mustangs DECA chapter competes, serves the community, and builds real business skills together all year.',
            },
            {
              icon: GraduationCap,
              title: 'Our Advisor',
              body: 'KMHS DECA is led by faculty advisor Paul Goodman, who supports members through the competition season and beyond.',
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chapter group photo */}
        <figure className="mt-12 overflow-hidden rounded-2xl border border-border shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/01-chapter-group.jpg"
            alt="KMHS DECA chapter members at the State Career Development Conference"
            className="w-full"
            loading="lazy"
          />
        </figure>

        {/* Let's talk about DECA video */}
        <div className="mt-14">
          <h2 className="font-headline text-2xl font-bold">Let&rsquo;s talk about DECA</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A quick intro to what DECA is and why members love it.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-black shadow-xl">
            <video className="aspect-video w-full" controls preload="none">
              <source src="/videos/lets-talk-about-deca.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
          <h2 className="font-headline text-2xl font-bold">Ready to join?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Getting involved is easy &mdash; join our GroupMe to hear about meetings and
            events, or explore competition prep to get a head start.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={links.groupMe}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" /> Join our GroupMe
            </a>
            <Link
              href="/compete"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-bold text-primary transition-colors hover:bg-primary/10"
            >
              Competition Prep
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
