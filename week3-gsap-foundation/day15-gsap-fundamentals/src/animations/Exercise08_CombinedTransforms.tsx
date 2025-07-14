import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise08_CombinedTransforms() {
  const boxRef = useRef(null);
  useGSAP(() => {
    gsap.to(boxRef.current, { rotate: 360, scale: 1.5, x: 200, duration: 3 });
  });

  return <div className="box" ref={boxRef}></div>;
}
