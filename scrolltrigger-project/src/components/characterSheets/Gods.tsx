import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

interface GodsProps {
  charactersTl: GSAPTimeline | null;
}

export default function Gods({ charactersTl }: GodsProps) {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [activeImg, setActiveImg] = useState("");
  const [name, setName] = useState({ en: "", jp: "" });
  const [desc, setDesc] = useState("");

  useGSAP(
    () => {
      if (!charactersTl) return;
      // bring into viewport
      charactersTl.from(
        sectionRef.current,
        { y: "100%", ease: "none", duration: 1 },
        "<",
      );

      // line
      const lineTl = gsap.timeline({
        onUpdate: () => handleProgress(lineTl.progress()),
      });

      // grow line
      lineTl.fromTo(
        lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.5 },
      );

      // move line
      lineTl.to(lineRef.current, {
        left: "revert",
        right: "16px",
        ease: "none",
        duration: 5,
      });

      // shrink line
      lineTl.fromTo(
        lineRef.current,
        { scaleY: 1 },
        { scaleY: 0, duration: 1.5 },
      );
      charactersTl.add(lineTl, ">");
    },
    { dependencies: [charactersTl], scope: sectionRef },
  );

  function handleProgress(progress: number) {
    progress *= 100;
    console.log("progressGHJKGHJK:", progress);

    if (progress > 20.4 && progress < 38.7) {
      setActiveImg("moro");
      setName({ en: "Moro", jp: "モロの君" });
      setDesc(
        "A massive white wolf goddess consumed by rage against humans who destroy the forest, serving as San's adoptive mother and pack leader.",
      );
    } else if (progress > 40.5 && progress < 59.5) {
      setActiveImg("okkoto");
      setName({ en: "Okkoto", jp: "乙事主" });
      setDesc(
        "An ancient boar god whose fury over the forest's destruction transforms him into a demon, following the same tragic path as Nago.",
      );
    } else if (progress > 61 && progress < 80.5) {
      setActiveImg("forest-spirit");
      setName({ en: "Forest Spirit", jp: "シシ神" });
      setDesc(
        "A mystical deer-like deity that controls the cycle of life and death, capable of both healing and destruction through its power over rebirth.",
      );
    } else {
      setActiveImg("");
    }
  }

  return (
    <section
      className="absolute top-0 left-0 z-10 h-full w-full bg-neutral-100"
      ref={sectionRef}
    >
      {/* line  */}
      <div
        ref={lineRef}
        className="absolute left-[16px] z-10 h-full w-0.5 bg-red-600"
      ></div>

      {/* images */}
      <div className="grid h-[65%] w-full grid-cols-3 grid-rows-1 items-center gap-4 px-4 lg:gap-16 lg:px-16">
        <img
          src="/characters/gods/moro.png"
          className={`${activeImg === "moro" ? "scale-105 border-red-600" : "border-black"} h-1/2 w-full border-2 object-cover transition-[scale,border-color] duration-500`}
          alt=""
        />
        <img
          className={`${activeImg === "okkoto" ? "scale-105 border-red-600" : "border-black"} h-1/2 w-full border-2 object-cover transition-[scale,border-color] duration-500`}
          src="/characters/gods/okkoto.png"
          alt=""
        />
        <img
          className={`${activeImg === "forest-spirit" ? "scale-105 border-red-600" : "border-black"} h-1/2 w-full border-2 object-cover transition-[scale,border-color] duration-500`}
          src="/characters/gods/forest-spirit.png"
          alt=""
        />
      </div>

      {/* name and description  */}
      <div className="absolute top-[65%] left-1/2 -translate-x-1/2 text-center">
        <h2 className="text-4xl">{name.jp}</h2>
        <h1 className="font-future mb-2 text-7xl font-bold text-black uppercase">
          {name.en}
        </h1>
        <p className="font-gfs mx-auto max-w-xs !text-base font-bold">{desc}</p>
      </div>
    </section>
  );
}
