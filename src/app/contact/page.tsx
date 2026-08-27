import type { Metadata } from 'next';
import { MessageCircle, Mail, Rocket } from 'lucide-react';
import { InstagramIcon, TikTokIcon } from '@/components/social-icons';
import { links } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Kennesaw Mountain High School DECA — Instagram, GroupMe, and our advisor.',
};

const channels = [
  {
    icon: InstagramIcon,
    title: 'Instagram',
    detail: '@kmhs_deca',
    description: 'Follow us for announcements, meeting reminders, and chapter highlights.',
    href: links.instagram,
    cta: 'Follow @kmhs_deca',
  },
  {
    icon: TikTokIcon,
    title: 'TikTok',
    detail: '@deca.kmhs',
    description: 'Follow along for behind-the-scenes moments and chapter fun.',
    href: links.tiktok,
    cta: 'Follow @deca.kmhs',
  },
  {
    icon: MessageCircle,
    title: 'GroupMe',
    detail: 'KMHS DECA Group',
    description: 'Our main hub for members — meeting info, events, and quick updates.',
    href: links.groupMe,
    cta: 'Join the GroupMe',
  },
  {
    icon: Mail,
    title: 'Advisor',
    detail: 'Paul Goodman',
    description:
      'Faculty advisor. Email for DECA+ competition logins or chapter questions.',
    href: `mailto:${links.advisorEmail}`,
    cta: links.advisorEmail,
  },
  {
    icon: Rocket,
    title: 'DECA+ Prep Hub',
    detail: 'decaplus.org',
    description:
      'Our competition prep platform. Email the advisor for a login if you are competing.',
    href: links.decaPlus,
    cta: 'Open DECA+',
  },
];

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Get in Touch
        </p>
        <h1 className="mt-3 font-headline text-5xl font-bold tracking-tight sm:text-6xl">
          Contact KMHS DECA
        </h1>
        <p className="mt-4 text-muted-foreground">
          Have a question or want to get involved? Reach us through any of these &mdash;
          the fastest way in is our GroupMe.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
        {channels.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-headline text-2xl font-bold">{c.title}</h3>
              <p className="text-sm font-semibold text-primary">{c.detail}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <span className="mt-5 font-bold text-primary group-hover:underline">
                {c.cta}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
