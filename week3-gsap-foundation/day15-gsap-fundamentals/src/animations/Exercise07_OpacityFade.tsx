import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise07_OpacityFade() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  });
  return <div className="box" ref={boxRef}></div>;
}
