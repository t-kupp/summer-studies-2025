import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise04_SetMethod() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.set(boxRef.current, { x: 400 });
  });
  return <div ref={boxRef} className="box"></div>;
}
