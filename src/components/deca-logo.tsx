import { cn } from '@/lib/utils';

/**
 * The official DECA diamond mark (white background removed so it sits on any
 * surface). Sized via `className`.
 */
export function DecaLogo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logos/deca-diamond-t.png"
      alt="DECA"
      className={cn('h-9 w-9 object-contain', className)}
    />
  );
}
