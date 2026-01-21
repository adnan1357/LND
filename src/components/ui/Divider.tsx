import { cn } from './cn';

export interface DividerProps {
  /** Orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
  /** Additional className */
  className?: string;
  /** Optional label to display in the middle of the divider */
  label?: string;
}

export function Divider({ orientation = 'horizontal', className, label }: DividerProps) {
  if (label && orientation === 'horizontal') {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <div className="flex-1 h-px bg-border" />
        <span className="text-caption text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
    );
  }

  if (orientation === 'vertical') {
    return (
      <div
        className={cn('w-px bg-border self-stretch', className)}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  return (
    <hr
      className={cn('border-0 h-px bg-border w-full', className)}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}
