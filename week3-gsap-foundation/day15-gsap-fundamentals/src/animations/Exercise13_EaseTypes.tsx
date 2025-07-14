import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Exercise13_EaseTypes() {
  useGSAP(() => {
    gsap.to(".ex-13-box-1", { x: 1000, duration: 2, ease: "bounce.inOut" });
    gsap.to(".ex-13-box-2", { x: 1000, duration: 2, ease: "expo.in" });
    gsap.to(".ex-13-box-3", { x: 1000, duration: 2, ease: "power3" });
  });

  return (
    <>
      <div className="box ex-13-box-1"></div>
      <div className="box ex-13-box-2"></div>
      <div className="box ex-13-box-3"></div>
    </>
  );
}
