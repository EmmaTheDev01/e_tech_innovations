'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const selector = '.scroll-reveal, .scroll-reveal-stagger, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, section:not(#hero):not(.no-scroll-reveal)';

    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const elements = document.querySelectorAll<HTMLElement>(selector);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            } else {
              // Smooth fade out when scrolled out of view
              entry.target.classList.remove('is-visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => {
        if (el.tagName.toLowerCase() === 'section' && !el.classList.contains('scroll-reveal')) {
          el.classList.add('scroll-reveal');
        }

        const rect = el.getBoundingClientRect();
        // If already in the viewport on load, mark visible
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
        observer?.observe(el);
      });
    };

    const timer = setTimeout(() => {
      setupObserver();
    }, 60);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
