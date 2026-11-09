'use client';

import { useEffect, useState } from 'react';

export function Gate({ html }: { html: string }) {
  const [src, setSrc] = useState('');

  // Render the raw HTML from a blob URL (full, self-contained doc).
  useEffect(() => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    setSrc(url);
    return () => URL.revokeObjectURL(url);
  }, [html]);

  return src ? (
    <iframe
      src={src}
      title="Venosense"
      className="fixed inset-0 z-[100] h-full w-full border-0 bg-white"
    />
  ) : null;
}
