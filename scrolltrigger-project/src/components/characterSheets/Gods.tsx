import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface GodsProps {
  charactersTl: GSAPTimeline | null;
}

export default function Gods({ charactersTl }: GodsProps) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!charactersTl) return;
      // bring into viewport
      charactersTl.from(
        sectionRef.current,
        { y: "100%", ease: "none", duration: 1 },
        "<",
      );
    },
    { dependencies: [charactersTl], scope: sectionRef },
  );

  return (
    <section
      className="absolute top-0 left-0 z-10 h-full w-full bg-white"
      ref={sectionRef}
    >
      <div className="w-full"></div>
    </section>
  );
}
