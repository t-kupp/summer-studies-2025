import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

function Exercise25_ScrubAnimation() {
  const [progress, setProgress] = useState(0);

  const boxRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.fromTo(
      boxRef.current,
      {
        scale: 1,
        opacity: 0.5,
      },
      {
        scale: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "center 80%",
          end: "center center",
          scrub: true,
          onUpdate: (self) => setProgress(self.progress),
        },
      }
    );
    timelineRef.current = tl;
  });

  return (
    <div>
      <h2>Exercise 25: Scrub Animation</h2>
      <div className="h-[200vh] flex flex-col justify-center">
        <div className="box" ref={boxRef}></div>
      </div>
      <div className="fixed top-1 left-1/2 -translate-x-1/2 p-2">
        Animation progress: {Math.floor(progress * 100)}%
      </div>
    </div>
  );
}

export default Exercise25_ScrubAnimation;
