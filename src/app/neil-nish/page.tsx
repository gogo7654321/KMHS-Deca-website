import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import { Gate } from './gate';

// Hidden page — no indexing, no following, excluded from the sitemap and unlinked.
export const metadata: Metadata = {
  title: 'Protected',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

// The raw HTML is read verbatim from hidden/venosense.html at build time and
// rendered exactly as-is (carbon copy) behind the password gate. To update it,
// just replace that one file — nothing else needs to change.
export default function NeilNishPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'hidden', 'venosense.html'),
    'utf8'
  );
  return <Gate html={html} />;
}
