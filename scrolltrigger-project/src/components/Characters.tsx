import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { useGSAPContext } from "../context/GSAPContext";
import Ashitaka from "./characterSheets/Ashitaka";
import Gods from "./characterSheets/Gods";
import San from "./characterSheets/San";

export default function Characters() {
  const { masterTl } = useGSAPContext();
  const horizontalSliderRef = useRef(null);
  const charactersRef = useRef(null);
  const [charactersTl, setCharactersTl] = useState<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      console.log("Characters useGSAP running, masterTl:", masterTl);
      if (!masterTl) return;
      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline();

      // bringing the characters container in from the bottom
      timeline.from(charactersRef.current, {
        y: "100vh",
      });

      // image horizontal scroller
      const columns = 5;
      const columnWidthPercent = 40;
      const gap = (columns - 1) * 4;
      const xPercent = columns * columnWidthPercent - 100;
      const xValue = (window.innerWidth * xPercent) / -100 - gap;
      timeline.to(
        horizontalSliderRef.current,
        {
          x: xValue,
          duration: 2,
          ease: "none",
        },
        "+=0.1",
      );

      // Set the state with the timeline
      setCharactersTl(timeline);
      masterTl.add(timeline, "-=0.75");
    },
    { dependencies: [masterTl], scope: charactersRef },
  );

  return (
    <div ref={charactersRef} className="relative h-full w-full bg-black">
      {/* horizontal image slider  */}
      <div
        ref={horizontalSliderRef}
        className="grid h-full grid-cols-[repeat(5,40vw)] grid-rows-1 gap-1 border-4 border-black"
      >
        <div className="relative">
          <p className="font-gfs absolute p-2 !text-lg">Ashitaka アシタカ</p>
          <img
            src="/characters/concept/ashitaka-concept.png"
            className="h-full w-full bg-white object-contain"
            alt=""
          />
        </div>
        <div className="relative">
          <p className="font-gfs absolute p-2 !text-lg">San サン</p>
          <img
            src="/characters/concept/san-concept.png"
            className="h-full w-full bg-white object-contain"
            alt=""
          />
        </div>
        <div className="relative">
          <p className="font-gfs absolute p-2 !text-lg">
            Lady Eboshi エボシ御前
          </p>
          <img
            src="/characters/concept/lady-eboshi-concept.png"
            className="h-full w-full bg-white object-contain"
            alt=""
          />
        </div>
        <div className="relative">
          <p className="font-gfs absolute p-2 !text-lg">Nago ナゴ</p>
          <img
            src="/characters/concept/ashitaka-shooting-concept.png"
            className="h-full w-full bg-white object-contain"
            alt=""
          />
        </div>
        <div className="relative">
          <p className="font-gfs absolute p-2 !text-lg">Kodama コダマ</p>
          <img
            src="/characters/concept/kodama-concept.png"
            className="h-full w-full bg-white object-contain"
            alt=""
          />
        </div>
      </div>
      <Ashitaka charactersTl={charactersTl} />
      <San charactersTl={charactersTl} />
      <Gods charactersTl={charactersTl} />
    </div>
  );
}
