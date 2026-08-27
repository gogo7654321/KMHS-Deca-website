'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { DecaLogo } from '@/components/deca-logo';
import { navLinks, links } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="KMHS DECA home">
          <DecaLogo className="h-10 w-10" />
          <span className="font-headline text-xl font-bold uppercase tracking-tight text-foreground">
            KMHS <span className="text-primary">DECA</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-base font-semibold transition-colors',
                pathname === link.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={links.groupMe}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-bold text-primary-foreground shadow-md shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" /> Join GroupMe
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-md px-3 py-3 text-lg font-semibold transition-colors',
                  pathname === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-secondary'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={links.groupMe}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-4 font-bold text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" /> Join GroupMe
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
