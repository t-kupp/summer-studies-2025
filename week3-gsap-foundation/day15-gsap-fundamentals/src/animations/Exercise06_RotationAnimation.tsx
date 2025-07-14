import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise06_RotationAnimation() {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.to(boxRef.current, { rotate: 360 });
  });
  return <div className="box" ref={boxRef}></div>;
}
