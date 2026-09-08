'use client';

import { useEffect, useState } from 'react';

const PASSWORD = 'nomotivation';

export function Gate({ html }: { html: string }) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [src, setSrc] = useState('');

  // Once unlocked, render the raw HTML from a blob URL (full, self-contained doc).
  // A copy-protection snippet is injected AT RENDER TIME only — the source file
  // hidden/venosense.html stays an untouched carbon copy.
  useEffect(() => {
    if (!unlocked) return;
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
  }, [unlocked, html]);

  if (unlocked) {
    return src ? (
      <iframe
        src={src}
        title="Venosense"
        className="fixed inset-0 z-[100] h-full w-full border-0 bg-white"
      />
    ) : null;
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value === PASSWORD) {
            setUnlocked(true);
          } else {
            setError(true);
          }
        }}
        className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center shadow-2xl"
      >
        <h1 className="font-headline text-2xl font-bold">Protected page</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the password to continue.
        </p>
        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          aria-label="Password"
          className="mt-5 w-full rounded-lg border border-input bg-background px-4 py-3 text-center outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
        {error && (
          <p className="mt-3 text-sm text-red-400">Incorrect password.</p>
        )}
        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
