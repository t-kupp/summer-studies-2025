import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAPContext } from "../context/GSAPContext";

export default function Intro() {
  const introRef = useRef(null);
  const { masterTl } = useGSAPContext();

  useGSAP(
    () => {
      console.log("masterTl:", masterTl);
      if (!masterTl) return;

      const introTl = gsap.timeline();
      introTl
        // Phase 1
        .to(".intro-container", { y: -100, ease: "power1.in" })
        .to(".intro-brand", { opacity: 0, y: -30 }, "<")
        .from(".hl1", { x: "-27vw", y: -10, ease: "power1.in" }, "<")
        .from(".hl2", { x: "20vw", y: 10, ease: "power1.in" }, "<")
        .to(".intro-p", { y: -30, stagger: 0.01 }, "<")
        .to(".intro-p-container", { y: -20 }, "<")
        .to(".ver1", { height: "0px" }, "<")
        .to(".ver2", { height: "0px" }, "<")

        // Phase 2
        .to(".hl1", {
          y: -250,
          width: "15vw",
          ease: "power1.out",
        })
        .to(".hl2", { y: -250, width: "40vw", ease: "power1.out" }, "<")
        .to(".desc", { y: "-100vh", duration: 1.5, ease: "none" }, "<-0.2");

      masterTl.add(introTl);
    },
    { dependencies: [masterTl], scope: introRef },
  );

  return (
    <div className="h-screen text-center" ref={introRef}>
      {/* background video  */}
      <div className="absolute top-[-10vh] left-[-10vw] h-full w-full bg-gradient-to-b">
        <iframe
          className="h-[120vh] w-[120vw] bg-neutral-700"
          // src="https://www.youtube.com/embed/4OiMOHRDs14?autoplay=1&mute=1"
        ></iframe>
      </div>
      {/* intro container  */}
      <div className="intro-container flex h-full flex-col items-center justify-center">
        {/* ghibli logo */}
        <img
          src="/ghibli.png"
          className="intro-brand absolute top-[23vh] left-[12vw] w-[10vw] opacity-50 invert"
        ></img>
        {/* princess logo container*/}
        <div className="hl1 relative">
          <img src="/princess.svg" className="w-[35vw] invert" />
        </div>
        {/* mononoke logo */}
        <img src="/mononoke.svg" className="hl2 w-[48vw] invert"></img>
        {/* quote text */}
        <div className="intro-p-container absolute bottom-[45vh] left-[12vw] text-white opacity-70">
          <div className="overflow-hidden">
            <p className="intro-p !text-xs">“You cannot change fate.</p>
          </div>
          <div className="overflow-hidden">
            <p className="intro-p !text-xs">
              However, you can rise to meet it,
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="intro-p !text-xs">if you so choose.”</p>
          </div>
        </div>
        <div className="absolute bottom-[67vh] left-[31vw] flex justify-end overflow-hidden">
          <p
            style={{ writingMode: "vertical-rl" }}
            className="ver1 font-bold text-nowrap text-white opacity-70"
          >
            株式会社スタジオジブリ
          </p>
        </div>
        <div className="absolute top-[48vh] left-[31vw] overflow-hidden">
          <p
            style={{ writingMode: "vertical-rl" }}
            className="ver2 font-bold text-nowrap text-white opacity-70"
          >
            もののけ姫
          </p>
        </div>
        <p className="desc absolute bottom-[-100px] max-w-4xl translate-y-[100%] text-left !text-lg text-white opacity-70">
          In ancient times, the land lay covered in forests, where, from ages
          long past, dwelt the spirits of the gods. Back then, man and beast
          lived in harmony, but as time went by, most of the great forests were
          destroyed. Those that remained were guarded by gigantic beasts who
          owed their allegiances to the Great Forest Spirit. For those were the
          days of gods and of demons...
        </p>
      </div>
    </div>
  );
}
