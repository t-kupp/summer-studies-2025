import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise01_BasicTo() {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.to(boxRef.current, { x: 200, duration: 2 });
  });
  return <div ref={boxRef} className="box"></div>;
}
