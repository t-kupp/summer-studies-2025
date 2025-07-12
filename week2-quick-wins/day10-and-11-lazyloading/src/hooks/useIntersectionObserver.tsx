import { useEffect, useState } from "react";

export default function useIntersectionObserver<T extends HTMLElement>(
  elementRef: React.RefObject<T>,
  options: IntersectionObserverInit
) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const currentElement = elementRef.current;

    function handleIntersect(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }
    const observer = new IntersectionObserver(handleIntersect, options);

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options]);

  return isVisible;
}
