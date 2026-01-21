/**
 * Utility function for conditionally joining class names
 * Minimal implementation without external dependencies
 */
type ClassValue = string | boolean | undefined | null | number | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  
  for (const input of inputs) {
    if (!input && input !== 0) continue;
    if (typeof input === 'number') continue; // Skip numbers
    
    if (typeof input === 'string') {
      classes.push(input);
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) classes.push(nested);
    }
  }
  
  return classes.join(' ');
}
