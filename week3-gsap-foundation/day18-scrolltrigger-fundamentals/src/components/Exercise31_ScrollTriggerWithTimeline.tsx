import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

function Exercise31_ScrollTriggerWithTimeline() {
  const boxesRef = useRef(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const headerSplit = SplitText.create(headerRef.current);

      gsap.registerPlugin(ScrollTrigger, SplitText);
      const tl = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: "top center" },
      });

      tl.from(containerRef.current, { opacity: 0 });

      tl.fromTo(
        headerSplit.chars,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.05, ease: "expo.inOut" }
      );
      tl.from(".box", { opacity: 0, scale: 0.5, stagger: 0.2 }, "-=0.2");
      tl.to(containerRef.current, { backgroundColor: "red" });
    },
    { scope: containerRef }
  );

  return (
    <div className="h-[200vh] flex flex-col items-center justify-center">
      <h2>Exercise 31: ScrollTrigger with Timeline</h2>
      <div
        style={{ backgroundColor: "gray" }}
        className=" w-screen flex flex-col items-center gap-10 py-32 justify-center"
        ref={containerRef}
      >
        <h1 ref={headerRef}>This is a header</h1>
        <div ref={boxesRef} className="flex gap-10">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}

export default Exercise31_ScrollTriggerWithTimeline;
