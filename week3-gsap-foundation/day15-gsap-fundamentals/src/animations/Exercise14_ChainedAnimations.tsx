import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise14_ChainedAnimations() {
  const boxRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(boxRef.current, { x: 200 })
      .to(boxRef.current, { y: 200 })
      .to(boxRef.current, { opacity: 0 });
  });

  return <div className="box" ref={boxRef}></div>;
}
