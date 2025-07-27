import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAPContext } from "../context/GSAPContext";

export default function Characters() {
  const { masterTl } = useGSAPContext();
  const charactersRef = useRef(null);
  const ashitakaRef = useRef(null);

  useGSAP(
    () => {
      if (!masterTl) return;

      const charactersTl = gsap.timeline();
      charactersTl.from(ashitakaRef.current, {
        y: "100vh",
      });

      masterTl.add(charactersTl);
    },
    { dependencies: [masterTl], scope: charactersRef },
  );
  return (
    <div ref={charactersRef}>
      <div
        ref={ashitakaRef}
        className="absolute top-0 left-0 h-full w-full bg-red-500"
      ></div>
    </div>
  );
}
