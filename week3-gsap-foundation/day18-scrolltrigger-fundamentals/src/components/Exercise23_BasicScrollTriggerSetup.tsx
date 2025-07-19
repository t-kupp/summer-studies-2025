import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Exercise23_BasicScrollTriggerSetup() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 0 },
      { opacity: 1, y: -100, duration: 2, scrollTrigger: boxRef.current }
    );
  });

  return (
    <div className="h-[200vh] flex flex-col">
      <h2>Exercise 23: Basic ScrollTrigger Setup</h2>
      <div className="box mt-auto" ref={boxRef}></div>
    </div>
  );
}

export default Exercise23_BasicScrollTriggerSetup;
