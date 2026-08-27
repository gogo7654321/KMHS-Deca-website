import Link from 'next/link';
import { MessageCircle, Mail } from 'lucide-react';
import { DecaLogo } from '@/components/deca-logo';
import { InstagramIcon, TikTokIcon } from '@/components/social-icons';
import { navLinks, links } from '@/lib/data';

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border/70">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/backgrounds/footer-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-background/90" />
      <div className="container relative z-10 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <DecaLogo className="h-9 w-9" />
              <span className="font-headline text-lg font-bold uppercase tracking-tight">
                KMHS <span className="text-primary">DECA</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Kennesaw Mountain High School&rsquo;s DECA chapter — preparing emerging
              leaders and entrepreneurs in marketing, finance, hospitality, and
              management.
            </p>
          </div>

          <div>
            <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-foreground">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-foreground">
              Connect
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <InstagramIcon className="h-4 w-4" /> @kmhs_deca
                </a>
              </li>
              <li>
                <a
                  href={links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <TikTokIcon className="h-4 w-4" /> @deca.kmhs
                </a>
              </li>
              <li>
                <a
                  href={links.groupMe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" /> Join our GroupMe
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${links.advisorEmail}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> {links.advisorEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kennesaw Mountain High School DECA. Advisor:
            Paul Goodman.
          </p>
          <p>
            Website designed &amp; developed by{' '}
            <span className="font-semibold text-foreground/80">Neil Mendpara</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
