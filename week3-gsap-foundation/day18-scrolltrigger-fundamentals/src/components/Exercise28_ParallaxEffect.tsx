import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Exercise28_ParallaxEffect() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(bgRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: bgRef.current,
        scrub: true,
      },
    });
    gsap.to(boxRef1.current, {
      y: -100,
      scrollTrigger: {
        trigger: boxRef1.current,
        scrub: true,
      },
    });
    gsap.to(boxRef2.current, {
      y: -200,
      scrollTrigger: {
        trigger: boxRef2.current,
        scrub: true,
      },
    });
  });

  return (
    <div>
      <h2>Exercise 28: Parallax Effect</h2>
      <div
        className="h-[200vh] bg-gradient-to-bl from-red-500 to-blue-500 w-screen flex items-center justify-center gap-20"
        ref={bgRef}
      >
        <div className="box" ref={boxRef1}></div>
        <div className="box" ref={boxRef2}></div>
      </div>
    </div>
  );
}

export default Exercise28_ParallaxEffect;
