import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise12_RepeatAnimation() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, { y: -100, repeat: -1, yoyo: true });
  });

  return <div className="box" ref={boxRef}></div>;
}
