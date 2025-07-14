import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Exercise01_BasicTo() {
  useGSAP(() => {
    gsap.to(".box", { x: 200, duration: 2 });
  });
  return <div className="box relative"></div>;
}
