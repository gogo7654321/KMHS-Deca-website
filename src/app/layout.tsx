import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const SITE_URL = 'https://kmhsdeca.org';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'KMHS DECA | Kennesaw Mountain High School DECA',
    template: '%s | KMHS DECA',
  },
  description:
    'The official website of Kennesaw Mountain High School DECA — compete, lead, and grow in marketing, finance, hospitality, and entrepreneurship. Designed and developed by Neil Mendpara.',
  applicationName: 'KMHS DECA',
  keywords: [
    'KMHS DECA',
    'Kennesaw Mountain DECA',
    'Kennesaw Mountain High School DECA',
    'DECA',
    'DECA Georgia',
    'Cobb County DECA',
    'high school marketing club',
    'business club',
    'Neil Mendpara',
    'Neil Mendpara developer',
    'Neil Mendpara Kennesaw Mountain',
    'Neil Mendpara web developer',
  ],
  authors: [{ name: 'Neil Mendpara', url: SITE_URL }],
  creator: 'Neil Mendpara',
  publisher: 'Kennesaw Mountain High School DECA',
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'KMHS DECA',
    title: 'KMHS DECA | Kennesaw Mountain High School DECA',
    description:
      'Compete, lead, and grow with Kennesaw Mountain High School DECA. Whatever career field you plan on going into, DECA has something to offer you.',
    images: [{ url: '/logos/deca-lockup-white.png', width: 1200, height: 630, alt: 'KMHS DECA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KMHS DECA',
    description:
      'The official Kennesaw Mountain High School DECA chapter website. Designed & developed by Neil Mendpara.',
    images: ['/logos/deca-lockup-white.png'],
  },
};

// Structured data — helps search engines connect this site to KMHS DECA and to
// its creator, Neil Mendpara.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KMHS DECA',
    alternateName: 'Kennesaw Mountain High School DECA',
    url: SITE_URL,
    description:
      'Official website of the Kennesaw Mountain High School DECA chapter.',
    creator: { '@type': 'Person', name: 'Neil Mendpara' },
    author: { '@type': 'Person', name: 'Neil Mendpara' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Neil Mendpara',
    url: SITE_URL,
    jobTitle: 'Web Developer',
    description:
      'Neil Mendpara is the web developer who designed and built the Kennesaw Mountain High School DECA website.',
    knowsAbout: ['Web Development', 'DECA', 'Next.js', 'React', 'Marketing'],
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'Kennesaw Mountain High School DECA',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Kennesaw Mountain High School DECA',
    alternateName: 'KMHS DECA',
    url: SITE_URL,
    sameAs: ['https://www.instagram.com/kmhs_deca/'],
    parentOrganization: { '@type': 'Organization', name: 'DECA Inc.' },
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DECA's official typeface is Gotham (secondary: Source Sans Pro).
            Montserrat is the standard web-safe match for Gotham's geometric look;
            Source Sans 3 is DECA's actual secondary face. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`:root{--font-headline:'Montserrat';--font-body:'Source Sans 3';}`}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
