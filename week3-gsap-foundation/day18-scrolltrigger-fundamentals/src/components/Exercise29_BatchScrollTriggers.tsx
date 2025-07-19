import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Exercise29_BatchScrollTriggers() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch(".batch-box", {
      onEnter: (elements) =>
        gsap.to(elements, { opacity: 0.5, x: 100, duration: 0.5, ease: "power3" }),
      onLeave: (elements) => gsap.to(elements, { opacity: 1, x: 0, duration: 0.5, ease: "power3" }),
      onEnterBack: (elements) =>
        gsap.to(elements, { opacity: 0.5, x: 100, duration: 0.5, ease: "power3" }),
      onLeaveBack: (elements) =>
        gsap.to(elements, { opacity: 1, x: 0, duration: 0.5, ease: "power3" }),
      start: "top center",
      end: "bottom center",
    });
  });

  return (
    <div>
      <h2>Exercise 29: Batch ScrollTriggers</h2>
      <div ref={containerRef} className="flex flex-col gap-4 h-[300vh] justify-center">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="box batch-box"></div>
        ))}
      </div>
    </div>
  );
}

export default Exercise29_BatchScrollTriggers;
