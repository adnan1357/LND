import { type ReactNode } from 'react';
import { cn } from './cn';

export interface SectionHeaderProps {
  /** Eyebrow text displayed above the heading */
  eyebrow?: string;
  /** Main heading text */
  heading: ReactNode;
  /** Supporting text below the heading */
  description?: ReactNode;
  /** Alignment of the header content */
  align?: 'left' | 'center';
  /** Additional className for the container */
  className?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = 'left',
  size = 'md',
  className,
}: SectionHeaderProps) {
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  const headingSizes = {
    sm: 'text-h3 sm:text-h2',
    md: 'text-h2 sm:text-h1',
    lg: 'text-h1 sm:text-display',
  };

  const descriptionSizes = {
    sm: 'text-body-sm max-w-xl',
    md: 'text-body max-w-2xl',
    lg: 'text-body sm:text-h5 font-normal max-w-3xl',
  };

  return (
    <div className={cn('mb-8 sm:mb-12', alignmentStyles[align], className)}>
      {eyebrow && (
        <p className="eyebrow mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={cn('text-foreground mb-4', headingSizes[size])}>
        {heading}
      </h2>
      {description && (
        <p className={cn('text-muted-foreground', descriptionSizes[size], align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
}
