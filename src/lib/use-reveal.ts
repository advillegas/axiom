"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds an `is-visible` class once the element scrolls into view.
 * Pair with the `.reveal-up` utility in globals.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true);
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options, visible]);

  return ref;
}
