import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise03_BasicFromTo() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(boxRef.current, { x: -100, y: -100 }, { x: 100, y: 100 });
  });
  return <div className="box" ref={boxRef}></div>;
}
