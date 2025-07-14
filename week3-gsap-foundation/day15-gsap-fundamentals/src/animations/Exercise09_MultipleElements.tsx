import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Exercise09_MultipleElements() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".ex-09-box-1", { y: -100 }, "+=0.2")
      .to(".ex-09-box-2", { y: -100 }, "<")
      .to(".ex-09-box-3", { y: -100 }, "+=1")
      .to(".ex-09-box-4", { y: -100 })
      .to(".ex-09-box-5", { y: -100 });
  });

  return (
    <div className="flex">
      <div className="box ex-09-box-1"></div>
      <div className="box ex-09-box-2"></div>
      <div className="box ex-09-box-3"></div>
      <div className="box ex-09-box-4"></div>
      <div className="box ex-09-box-5"></div>
    </div>
  );
}
