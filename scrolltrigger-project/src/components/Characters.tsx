import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAPContext } from "../context/GSAPContext";

export default function Characters() {
  const { masterTl } = useGSAPContext();
  const charactersRef = useRef(null);
  const ashitakaImagesRef = useRef(null);
  const ashitakaInfoRef = useRef(null);

  useGSAP(
    () => {
      if (!masterTl) return;
      gsap.registerPlugin(ScrollTrigger);

      const charactersTl = gsap.timeline();

      // bringing the characters container in from the bottom
      charactersTl.from(charactersRef.current, {
        y: "100vh",
      });

      // image horizontal scroller
      const columns = 5;
      const columnWidthPercent = 40;
      const gap = (columns - 1) * 4;
      const xPercent = columns * columnWidthPercent - 100;
      const xValue = (window.innerWidth * xPercent) / -100 - gap;
      charactersTl.to(
        ashitakaImagesRef.current,
        {
          x: xValue,
          duration: 2,
          ease: "none",
        },
        "+=0.1",
      );

      // info container
      charactersTl.from(ashitakaInfoRef.current, {
        y: "120vh",
        x: "-20vw",
        rotate: 10,
        duration: 1.5,
      });

      masterTl.add(charactersTl, "-=0.75");
    },
    { dependencies: [masterTl], scope: charactersRef },
  );

  return (
    <div ref={charactersRef} className="relative h-full w-full">
      <section className="relative h-full bg-black">
        {/* images container  */}
        <div
          ref={ashitakaImagesRef}
          className="grid h-full grid-cols-[repeat(5,40vw)] grid-rows-1 gap-1 border-4 border-black"
        >
          <div className="relative">
            <p className="font-gfs absolute p-2 !text-lg">Ashitaka アシタカ</p>
            <img
              src="/characters/ashitaka-concept.png"
              className="h-full w-full bg-white object-contain"
              alt=""
            />
          </div>
          <div className="relative">
            <p className="font-gfs absolute p-2 !text-lg">San サン</p>
            <img
              src="/characters/san-concept.png"
              className="h-full w-full bg-white object-contain"
              alt=""
            />
          </div>
          <div className="relative">
            <p className="font-gfs absolute p-2 !text-lg">
              Lady Eboshi エボシ御前
            </p>
            <img
              src="/characters/lady-eboshi-concept.png"
              className="h-full w-full bg-white object-contain"
              alt=""
            />
          </div>
          <div className="relative">
            <p className="font-gfs absolute p-2 !text-lg">Nago ナゴ</p>
            <img
              src="/characters/ashitaka-shooting-concept.png"
              className="h-full w-full bg-white object-contain"
              alt=""
            />
          </div>
          <div className="relative">
            <p className="font-gfs absolute p-2 !text-lg">Kodama コダマ</p>
            <img
              src="/characters/kodama-concept.png"
              className="h-full w-full bg-white object-contain"
              alt=""
            />
          </div>
        </div>
        {/* info container */}
        <div
          ref={ashitakaInfoRef}
          className="absolute top-0 left-0 z-10 grid h-full w-full grid-cols-2 gap-4 bg-[#1B3C53] p-8"
        >
          <div className="text-white">
            <h1 className="font-gfs mb-1 text-6xl">Ashitaka</h1>
            <h1 className="mb-4 text-2xl">アシタカ</h1>
            <p className="max-w-xs">
              A young warrior prince from the Emishi clan who becomes cursed
              after killing a demon boar that attacked his village.
              <br /> <br />
              The curse manifests as a spreading mark on his arm that gives him
              supernatural strength but will eventually kill him.
              <br /> <br />
              He rides Yakul, a red elk that serves as both his loyal mount and
              companion
            </p>
          </div>
          <img
            className="h-full w-full border-2 border-white object-cover"
            src="/characters/ashitaka-main.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
