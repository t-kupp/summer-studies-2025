import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise18_OverlappingAnimations() {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(boxRefs.current[0], { x: 200 })
      .to(boxRefs.current[1], { x: 200 }, "+=0.5") // Starts 0.5s after the previous animation finishes
      .to(boxRefs.current[2], { x: 200 }, 0) // Starts at absolute 0, so at the very start
      .to(boxRefs.current[3], { x: 200 }, "<") // Starts when previous animation starts
      .to(boxRefs.current[4], { x: 200 }, "-=0.2") // Starts 0.2s before the previous animation finishes
      .to(boxRefs.current[5], { x: 200 }, ">"); // Starts when previous animation ends (default)
  });

  return (
    <div>
      Exercise18_OverlappingAnimations
      <div className="flex flex-col gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            className="box flex items-center justify-center text-black font-bold text-2xl"
            key={i}
            ref={(el) => {
              boxRefs.current[i] = el;
            }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
