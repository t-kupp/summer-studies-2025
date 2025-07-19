import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

function Exercise26_ToggleActions() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      boxRef1.current,
      { opacity: 0.5, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: boxRef1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      boxRef2.current,
      { opacity: 0.5, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: boxRef2.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      boxRef3.current,
      { opacity: 0.5, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: boxRef3.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play pause resume reverse",
        },
      }
    );
  });

  return (
    <div>
      <div className="h-screen"></div>
      <h2>Exercise 26: Toggle Actions</h2>
      <div className="flex gap-16 py-32">
        <div>
          <p>"play none none none"</p>
          <div className="box" ref={boxRef1}></div>
        </div>
        <div>
          <p>"play reverse play reverse"</p>
          <div className="box" ref={boxRef2}></div>
        </div>
        <div>
          <p>"play pause resume reverse"</p>
          <div className="box" ref={boxRef3}></div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export default Exercise26_ToggleActions;
