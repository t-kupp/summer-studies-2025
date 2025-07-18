import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise27_GestureResponsiveAnimations() {
  const boxRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline>(null);

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.pause();
    tl.to(boxRef.current, { scale: 2 });
    timelineRef.current = tl;
  });

  const rotate = contextSafe(() => {
    gsap.fromTo(boxRef.current, { rotate: 0 }, { rotate: 360 });
  });

  return (
    <div>
      Exercise27_GestureResponsiveAnimations
      <div
        className="box"
        ref={boxRef}
        onMouseEnter={() => timelineRef.current?.play()}
        onMouseLeave={() => timelineRef.current?.reverse()}
        onClick={rotate}
      ></div>
    </div>
  );
}
