import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise02_BasicFrom() {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.from(boxRef.current, { x: -200 });
  });
  return <div ref={boxRef} className="box"></div>;
}
