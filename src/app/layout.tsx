import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FirebaseAnalytics } from '@/components/firebase-analytics';

const SITE_URL = 'https://kmhsdeca.jo3.org';
const DEVELOPER_URL = 'https://github.com/gogo7654321';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'KMHS DECA | Kennesaw Mountain High School',
    template: '%s | KMHS DECA',
  },
  description:
    'Discover Kennesaw Mountain High School DECA (KMHS DECA) in Kennesaw, Georgia. Website designed and developed by Neil Mendpara. Explore our chapter, leadership, competitions, and how to get involved.',
  applicationName: 'KMHS DECA',
  keywords: [
    'KMHS DECA',
    'Kennesaw Mountain High School DECA',
    'Kennesaw Mountain DECA',
    'Kennesaw DECA',
    'Georgia DECA',
    'Cobb County DECA',
    'high school business club',
    'high school marketing competition',
    'Neil Mendpara',
    'Neil Mendpara website designer',
    'Neil Mendpara web developer',
    'KMHS DECA website designer',
  ],
  authors: [{ name: 'Neil Mendpara', url: DEVELOPER_URL }],
  creator: 'Neil Mendpara',
  publisher: 'Kennesaw Mountain High School DECA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'KMHS DECA',
    title: 'KMHS DECA | Kennesaw Mountain High School',
    description:
      'The Kennesaw Mountain High School DECA chapter helps students build business skills, compete, and grow as leaders. Website designed and developed by Neil Mendpara.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KMHS DECA | Kennesaw Mountain High School',
    description:
      'Explore the Kennesaw Mountain High School DECA chapter. Website designed and developed by Neil Mendpara.',
  },
};

// Identify both the chapter site and its credited developer for search engines.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'KMHS DECA',
    alternateName: 'Kennesaw Mountain High School DECA',
    url: SITE_URL,
    description:
      'Official website of the Kennesaw Mountain High School DECA chapter in Kennesaw, Georgia. Designed and developed by Neil Mendpara.',
    creator: { '@id': `${SITE_URL}/#neil-mendpara` },
    publisher: {
      '@type': 'Organization',
      name: 'Kennesaw Mountain High School DECA',
      url: SITE_URL,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#neil-mendpara`,
    name: 'Neil Mendpara',
    url: DEVELOPER_URL,
    jobTitle: 'Website Designer and Developer',
    description:
      'Neil Mendpara designed and developed the Kennesaw Mountain High School DECA (KMHS DECA) website.',
    sameAs: [DEVELOPER_URL],
    knowsAbout: ['Web design', 'Web development', 'Next.js', 'React'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kennesaw Mountain High School DECA',
    alternateName: 'KMHS DECA',
    url: SITE_URL,
    sameAs: ['https://www.instagram.com/kmhs_deca/'],
    parentOrganization: { '@type': 'Organization', name: 'DECA Inc.' },
    areaServed: {
      '@type': 'City',
      name: 'Kennesaw, Georgia',
    },
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
        <FirebaseAnalytics />
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
