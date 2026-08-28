import type { Exec } from '@/lib/data';

export function ExecCard({ exec }: { exec: Exec }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/officers/photos/${exec.slug}.jpg`}
          alt={`${exec.name}, ${exec.role} of KMHS DECA`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/60 to-transparent p-4 pt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-primary drop-shadow">
            {exec.role}
          </p>
          <h3 className="font-headline text-2xl font-bold leading-tight text-white drop-shadow">
            {exec.name}
          </h3>
        </div>
      </div>
      <p className="flex-1 p-6 text-sm leading-relaxed text-muted-foreground">
        {exec.bio}
      </p>
    </article>
  );
}
