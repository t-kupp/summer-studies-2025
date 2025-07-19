import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

function Exercise32_ProgressBasedAnimation() {
  const [progress, setProgress] = useState(0);
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      },
    });
  });

  return (
    <div ref={wrapperRef}>
      <h2>Exercise 32: Progress-based Animation</h2>
      <progress
        value={progress}
        max={1}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 w-lg border rounded"
      ></progress>
      <section className="h-[200vh]" ref={sectionRef}></section>
    </div>
  );
}

export default Exercise32_ProgressBasedAnimation;
