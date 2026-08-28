import type { Metadata } from 'next';
import { execs, links } from '@/lib/data';
import { ExecCard } from '@/components/exec-card';
import { InstagramIcon } from '@/components/social-icons';

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Meet the student leadership board of Kennesaw Mountain High School DECA.',
};

export default function LeadershipPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Our Chapter
        </p>
        <h1 className="mt-3 font-headline text-5xl font-bold tracking-tight sm:text-6xl">
          Meet the Team
        </h1>
        <p className="mt-4 text-muted-foreground">
          The students leading KMHS DECA this year. Come find any of us at a meeting,
          or reach out on Instagram.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {execs.map((exec) => (
          <ExecCard key={exec.slug} exec={exec} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-bold text-primary transition-colors hover:bg-primary/10"
        >
          <InstagramIcon className="h-5 w-5" /> Follow @kmhs_deca
        </a>
      </div>
    </div>
  );
}
