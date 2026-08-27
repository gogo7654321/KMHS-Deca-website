import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container flex min-h-[75vh] flex-col items-center justify-center py-20 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/gallery/12-conference-portrait.jpg"
        alt="A KMHS DECA member who also can't find this page"
        className="mb-8 w-44 -rotate-3 rounded-2xl border border-border object-cover shadow-2xl shadow-primary/10"
      />
      <p className="font-headline text-7xl font-bold text-primary">404</p>
      <h1 className="mt-2 font-headline text-2xl font-bold tracking-tight sm:text-3xl">
        This page didn&rsquo;t make finals.
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        We searched everywhere &mdash; even asked Neil &mdash; but the page you&rsquo;re
        looking for doesn&rsquo;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <ArrowLeft className="h-5 w-5" /> Back to home
      </Link>
    </div>
  );
}
