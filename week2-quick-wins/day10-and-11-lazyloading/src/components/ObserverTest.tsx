import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

export default function ObserverTest() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const isVisible = useIntersectionObserver(textRef as React.RefObject<HTMLParagraphElement>, {
    rootMargin: "-200px 0px",
  });

  console.log("isVisible:", isVisible);
  return (
    <div className="h-[300vh] relative">
      ObserverTest
      <p
        ref={textRef}
        className={`absolute top-1/2 ${isVisible ? "text-green-500" : "text-red-500"}`}
      >
        TEST
      </p>
    </div>
  );
}
