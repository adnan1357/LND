import { useEffect, useRef, useState, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

// Hook for staggered children animations
export function useStaggeredAnimation<T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean[]] {
  const [containerRef, isContainerVisible] = useScrollAnimation<T>(options);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(itemCount).fill(false));

  useEffect(() => {
    if (isContainerVisible) {
      // Stagger the visibility of each item
      const timers: NodeJS.Timeout[] = [];
      for (let i = 0; i < itemCount; i++) {
        timers.push(
          setTimeout(() => {
            setVisibleItems(prev => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }, i * 100) // 100ms stagger between items
        );
      }
      return () => timers.forEach(clearTimeout);
    }
  }, [isContainerVisible, itemCount]);

  return [containerRef, visibleItems];
}
