import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Exercise10_StaggerAnimation() {
  useGSAP(() => {
    gsap.to(".ex-10-box", { rotate: 720, stagger: 0.2 });
  });

  return (
    <div className="flex">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="box ex-10-box"></div>
      ))}
    </div>
  );
}
