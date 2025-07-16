import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise23_EasingShowcase() {
  const boxes = [
    { ease: "power1.in" },
    { ease: "power1.out" },
    { ease: "power1.inOut" },
    { ease: "power2.in" },
    { ease: "power2.out" },
    { ease: "power2.inOut" },
    { ease: "power3.in" },
    { ease: "power3.out" },
    { ease: "power3.inOut" },
    { ease: "power4.in" },
    { ease: "power4.out" },
    { ease: "power4.inOut" },
    { ease: "bounce.in" },
    { ease: "bounce.out" },
    { ease: "bounce.inOut" },
    { ease: "elastic.in" },
    { ease: "elastic.out" },
    { ease: "elastic.inOut" },
    { ease: "back.in" },
    { ease: "back.out" },
    { ease: "back.inOut" },
  ];
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { contextSafe } = useGSAP();

  const playAnimation = contextSafe((i: number, ease: string) => {
    const tl = gsap.timeline();
    tl.set(boxRefs.current[i], { x: 0, overwrite: true })
      .to(boxRefs.current[i], {
        x: 900,
        ease,
        duration: 2,
      })
      .set(boxRefs.current[i], { x: 0, delay: 1 });
  });

  return (
    <div className="flex flex-col gap-4">
      {boxes.map((box, i) => (
        <div key={i} className="w-[1032px] border p-4 rounded flex flex-col gap-2 items-start">
          <p className="font-bold text-xl">{box.ease}</p>
          <div
            className="box"
            ref={(el) => {
              boxRefs.current[i] = el;
            }}
          ></div>
          <button onClick={() => playAnimation(i, box.ease)}>Play</button>
        </div>
      ))}
    </div>
  );
}
