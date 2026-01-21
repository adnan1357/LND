import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from './cn';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = [
      'inline-flex items-center font-medium',
      'transition-colors duration-200',
    ].join(' ');

    const variants = {
      default: 'bg-surface-2 text-muted-foreground border border-border',
      primary: 'bg-primary/10 text-primary border border-primary/20',
      secondary: 'bg-muted text-foreground border border-border',
      outline: 'bg-transparent text-foreground border border-border',
      success: 'bg-success/10 text-success border border-success/20',
      warning: 'bg-warning/10 text-warning border border-warning/20',
      error: 'bg-error/10 text-error border border-error/20',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-caption rounded',
      md: 'px-2.5 py-1 text-caption rounded-md',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
