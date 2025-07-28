import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface AshitakaProps {
  charactersTl: GSAPTimeline | null;
}

export default function Ashitaka({ charactersTl }: AshitakaProps) {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const art1Ref = useRef(null);

  useGSAP(
    () => {
      if (!charactersTl) return;

      // info container
      charactersTl.from(sectionRef.current, {
        y: "120vh",
        x: "-20vw",
        rotate: 10,
        duration: 1.5,
      });

      // fullscreen art
      charactersTl.from(
        art1Ref.current,
        {
          y: "120vh",
          x: "-20vw",
          rotate: 10,
          duration: 1.5,
        },
        ">-0.5",
      );

      //move out of frame
      charactersTl.to(sectionRef.current, {
        x: "-100%",
        filter: "brightness(0)",
        ease: "none",
        duration: 2,
      });
    },
    { dependencies: [charactersTl], scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="absolute top-0 left-0 h-full w-full brightness-100"
    >
      {/* info container */}
      <div
        ref={infoRef}
        className="absolute top-0 left-0 grid h-full w-full grid-cols-2 grid-rows-1 gap-4 bg-[#1B3C53] p-8"
      >
        <div className="text-white">
          <h1 className="font-gfs mb-1 text-6xl">Ashitaka</h1>
          <h1 className="mb-4 text-2xl">アシタカ</h1>
          <p className="max-w-xs">
            A young warrior prince from the Emishi clan who becomes cursed after
            killing a demon boar that attacked his village.
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
          src="/characters/ashitaka/ashitaka-main.png"
          alt=""
        />
      </div>
      {/* art collage  */}
      <div
        ref={art1Ref}
        className="absolute top-0 right-0 h-full w-[calc(100%-320px-32px*2)] border-2 border-white"
      >
        {/* <p className="font-gfs absolute top-2 right-4 !text-lg text-white">
          Ashitaka on Yakul fighting a demon infested Nago
        </p> */}
        <img
          src="/characters/ashitaka/ashitaka-fight.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </section>
  );
}
