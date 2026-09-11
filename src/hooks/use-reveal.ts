import { useEffect } from "react";

/** Adds `.is-visible` to `[data-reveal]` elements as they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}
