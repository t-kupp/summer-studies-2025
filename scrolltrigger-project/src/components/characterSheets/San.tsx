import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface SanProps {
  charactersTl: GSAPTimeline | null;
}

export default function San({ charactersTl }: SanProps) {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const art1Ref = useRef(null);

  useGSAP(
    () => {
      if (!charactersTl) return;

      // info container slide in
      charactersTl.from(
        sectionRef.current,
        {
          x: "100%",
          duration: 2,
          filter: "brightness(0)",
          ease: "none",
        },
        "<-0.3",
      );

      // fullscreen art
      charactersTl.from(
        art1Ref.current,
        {
          y: "120%",
          x: "-20vw",
          rotate: 10,
          duration: 1.25,
          ease: "none",
        },
        ">-1.5",
      );

      // move out of frame
      charactersTl.to(sectionRef.current, {
        y: "-100%",
        ease: "none,",
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
        className="absolute top-0 left-0 grid h-full w-full grid-cols-2 grid-rows-1 gap-4 bg-[#B43F3F] p-8"
      >
        <div className="text-white">
          <h1 className="font-gfs mb-1 text-6xl">San</h1>
          <h1 className="mb-4 text-2xl">サン</h1>
          <p className="max-w-xs">
            A fierce human girl raised by the wolf goddess Moro after being
            abandoned as an infant. <br />
            <br />
            She considers herself a wolf and fights alongside the forest spirits
            against human encroachment on their domain. <br />
            <br />
            San wears a white mask and wields spears and daggers, showing no
            mercy to those who threaten the forest she calls home.
          </p>
        </div>
        <img
          className="h-full w-full border-2 border-white object-cover"
          src="/characters/san/san-main.png"
          alt=""
        />
      </div>
      {/* art collage  */}
      <div
        ref={art1Ref}
        className="absolute bottom-8 left-8 h-1/2 w-[calc(50vw-32px*2)] border-2 border-white"
      >
        {/* <p className="font-gfs absolute top-2 right-4 !text-lg text-white">
          Ashitaka on Yakul fighting a demon infested Nago
        </p> */}
        <img
          src="/characters/san/san-demon.png"
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </section>
  );
}
