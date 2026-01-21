import { type ReactNode } from 'react';
import { cn } from './cn';

export interface MetricStatProps {
  /** The main metric value (e.g., "£85m+", "10+", "100%") */
  value: string;
  /** Label describing the metric */
  label: string;
  /** Optional delta indicator (e.g., "+12%") */
  delta?: string;
  /** Whether the delta is positive, negative, or neutral */
  deltaType?: 'positive' | 'negative' | 'neutral';
  /** Optional footnote or supporting text */
  footnote?: ReactNode;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional className */
  className?: string;
}

export function MetricStat({
  value,
  label,
  delta,
  deltaType = 'neutral',
  footnote,
  size = 'md',
  className,
}: MetricStatProps) {
  const valueSizes = {
    sm: 'text-h3',
    md: 'text-h1',
    lg: 'text-display',
  };

  const labelSizes = {
    sm: 'text-caption',
    md: 'text-body-sm',
    lg: 'text-body',
  };

  const deltaColors = {
    positive: 'text-success',
    negative: 'text-error',
    neutral: 'text-muted-foreground',
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex items-baseline gap-2">
        <span className={cn('metric-value text-primary', valueSizes[size])}>
          {value}
        </span>
        {delta && (
          <span className={cn('text-caption font-medium', deltaColors[deltaType])}>
            {delta}
          </span>
        )}
      </div>
      <span className={cn('text-muted-foreground mt-1', labelSizes[size])}>
        {label}
      </span>
      {footnote && (
        <span className="text-caption text-muted-foreground/70 mt-2">
          {footnote}
        </span>
      )}
    </div>
  );
}

// Variant for displaying multiple metrics in a row
export interface MetricGridProps {
  metrics: MetricStatProps[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function MetricGrid({ metrics, columns = 3, className }: MetricGridProps) {
  const columnStyles = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-6 sm:gap-8', columnStyles[columns], className)}>
      {metrics.map((metric, index) => (
        <MetricStat key={index} {...metric} />
      ))}
    </div>
  );
}
