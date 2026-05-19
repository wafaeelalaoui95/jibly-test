import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'wordmark' | 'mark';
}

/**
 * Jibly logo — uses the actual brand mark PNG (J fused with airplane).
 *
 * The PNG file lives at /public/logo-mark.png — drop the brand image there.
 * The wordmark variant pairs the mark with "Jibly" in Manrope ExtraBold.
 */
export function Logo({ className = '', size = 'md', variant = 'wordmark' }: LogoProps) {
  const sizes = {
    sm: { mark: 28, text: 'text-[22px]' },
    md: { mark: 36, text: 'text-[26px]' },
    lg: { mark: 56, text: 'text-[40px]' },
  };
  const s = sizes[size];

  if (variant === 'mark') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo-mark.png"
        alt="Jibly"
        width={s.mark}
        height={s.mark}
        className={cn('block', className)}
      />
    );
  }

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.png"
        alt=""
        width={s.mark}
        height={s.mark}
        className="block"
      />
      <span className={cn('font-extrabold tracking-[-0.035em] text-ink-600 leading-none', s.text)}>
        Jibly
      </span>
    </div>
  );
}
