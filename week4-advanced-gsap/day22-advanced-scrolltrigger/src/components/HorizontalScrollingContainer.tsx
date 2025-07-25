import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function HorizontalScrollingContainer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;
    const horizontalDistance = sectionRef.current?.offsetWidth - window.innerWidth;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        start: "center center",
        end: `+=${horizontalDistance}px`,
      },
    });

    if (!sectionRef.current) return;
    tl.to(sectionRef.current, {
      translateX: -(sectionRef.current.offsetWidth - window.innerWidth),
      ease: "none",
    });
  });

  return (
    <>
      <div className="h-[50vh]">
        <h1>HELLO</h1>
      </div>
      <div ref={containerRef} className="w-full">
        <div className=" w-full overflow-x-hidden">
          <section ref={sectionRef} className="w-fit flex pr-4 gap-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="border border-orange-500 rounded h-96 w-64 bg-neutral-700 text-orange-500 !text-[5rem] flex items-center justify-center"
              >
                {i + 1}
              </div>
            ))}
          </section>
        </div>
      </div>
      <div className="h-[50vh] flex flex-col justify-end">
        <h1>BYE</h1>
      </div>
    </>
  );
}
