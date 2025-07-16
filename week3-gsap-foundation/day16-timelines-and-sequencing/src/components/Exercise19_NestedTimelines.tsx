import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise19_NestedTimelines() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (cardRefs.current[0]) tl.add(createCardFlip(cardRefs.current[0]), 0);
    if (cardRefs.current[1]) tl.add(createCardFlip(cardRefs.current[1]), 0.3);
    if (cardRefs.current[2]) tl.add(createCardFlip(cardRefs.current[2]), 0.6);
  });

  function createCardFlip(element: HTMLDivElement) {
    const tl = gsap.timeline();
    tl.to(element, { scale: 0.75 }).to(element, { rotateY: 180 }).to(element, { scale: 1 });
    return tl;
  }

  return (
    <div>
      Exercise19_NestedTimelines
      <div className="flex gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-96 w-64 bg-amber-400"
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
