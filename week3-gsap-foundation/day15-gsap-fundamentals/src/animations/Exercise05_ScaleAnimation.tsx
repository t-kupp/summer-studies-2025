import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise05_ScaleAnimation() {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(boxRef.current, { scale: 0 }, { scale: 1 });
  });

  return <div className="box" ref={boxRef}></div>;
}
