import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Exercise27_PinElement() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      boxRef.current,
      { opacity: 0.5, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 50%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
          pin: true,
        },
      }
    );
  });

  return (
    <div>
      <h2>Exercise 27: Pin Element</h2>

      <div className="h-[200vh] w-screen flex justify-center items-center bg-gradient-to-bl from-red-600 to-blue-600">
        <div className="box" ref={boxRef}></div>
      </div>
    </div>
  );
}

export default Exercise27_PinElement;
