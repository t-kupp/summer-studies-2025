import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Exercise24_StartEndPoints() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      boxRef.current,
      { x: 0, opacity: 0.5 },
      {
        x: 200,
        opacity: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none reverse none",
        },
      }
    );
  });

  return (
    <div>
      <div className="h-screen"></div>
      <h2>Exercise 24: Start/End Points</h2>
      <div ref={boxRef} className="box !h-[500px]"></div>
      <div className="h-screen"></div>
    </div>
  );
}

export default Exercise24_StartEndPoints;
