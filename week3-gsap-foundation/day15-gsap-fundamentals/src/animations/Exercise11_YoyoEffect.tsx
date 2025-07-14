import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise11_YoyoEffect() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, { x: 200, yoyo: true, repeat: 3 });
  });

  return <div className="box" ref={boxRef}></div>;
}
