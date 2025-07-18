import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useRef } from "react";

export default function Exercise26_CustomEasingFunction() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("customBezier", "0,1,1,0 ");
    gsap.to(boxRef.current, { x: 800, duration: 1, ease: "customBezier" });
  });

  return (
    <div>
      Exercise26_CustomEasingFunction
      <div className="box" ref={boxRef}></div>
    </div>
  );
}
