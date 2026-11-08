'use client';

import { useEffect, useState } from 'react';

export function Gate({ html }: { html: string }) {
  const [src, setSrc] = useState('');

  // Render the raw HTML from a blob URL (full, self-contained doc).
  // A copy-protection snippet is injected at render time only — the source file
  // hidden/venosense.html stays an untouched carbon copy.
  useEffect(() => {
    const PROTECT = `
<style id="np-protect">
  html, body, * {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    -webkit-touch-callout: none !important;
  }
  img, a, video { -webkit-user-drag: none !important; user-drag: none !important; }
</style>
<script>(function(){
  var stop = function(e){ e.preventDefault(); e.stopPropagation(); return false; };
  ['contextmenu','copy','cut','dragstart','selectstart'].forEach(function(ev){
    document.addEventListener(ev, stop, { capture: true });
  });
  document.addEventListener('keydown', function(e){
    var k = (e.key || '').toLowerCase();
    if ((e.ctrlKey || e.metaKey) && ['c','x','a','s','p','u'].indexOf(k) !== -1) {
      e.preventDefault(); e.stopPropagation(); return false;
    }
  }, { capture: true });
})();</script>`;
    const guarded = html.includes('</body>')
      ? html.replace('</body>', `${PROTECT}</body>`)
      : html + PROTECT;
    const blob = new Blob([guarded], { type: 'text/html' });
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
