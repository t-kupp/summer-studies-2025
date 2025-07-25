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
        .to(".intro-container", { y: -100 })
        .to(".intro-brand", { opacity: 0, y: -30 }, "<")
        .from(".hl1", { x: "-80%", scale: 1.15, y: -10, ease: "power1.in" }, "<")
        .from(".hl2", { x: "68%", scale: 1.15, y: 10, ease: "power1.in" }, "<")
        .to(".intro-p", { y: -30, stagger: 0.01 }, "<")
        .to(".intro-p-container", { y: -20 }, "<")
        .to(".ver1", { height: "0px" }, "<")
        .to(".ver2", { height: "0px" }, "<")

        // Phase 2
        .to(".hl1", { y: -250, fontSize: "5vw", ease: "power1.out" })
        .to(".hl2", { y: -250, fontSize: "5vw", ease: "power1.out" }, "<")
        .fromTo(".desc", { y: 300 }, { y: -900, duration: 1.5 }, "<");

      masterTl.add(introTl);
    },
    { dependencies: [masterTl], scope: introRef }
  );

  return (
    <div className="text-center h-screen" ref={introRef}>
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-b from-blue-500 to-red-500">
        <img src={"/a_statue_of_a_woman_with_wings_and_a_plant.png"} alt="" />
      </div>
      <div className="intro-container flex flex-col items-center justify-center h-full">
        <h2 className="intro-brand absolute left-[20vw] top-[20vh] font-bold text-xl">
          brand name
        </h2>
        <h1 className="hl1 text-[8vw]">Upper text</h1>
        <h1 className="hl2 text-[8vw]">Bottom text</h1>
        <div className="intro-p-container absolute left-[15vw] top-[60vh]">
          <div className="overflow-hidden">
            <p className="intro-p">Lorem ipsum dolor sit amet,</p>
          </div>
          <div className="overflow-hidden">
            <p className="intro-p">sed do eiusmod tempor incididunt ut.</p>
          </div>
          <div className="overflow-hidden">
            <p className="intro-p">Ut enim ad minim veniam,</p>
          </div>
          <div className="overflow-hidden">
            <p className="intro-p">laboris nisi ut aliquip.</p>
          </div>
        </div>
        <div className="absolute left-[35vw] bottom-[70vh] overflow-hidden flex justify-end">
          <p style={{ writingMode: "vertical-rl" }} className="ver1 text-nowrap !origin-bottom">
            vertical text one vertical text one
          </p>
        </div>
        <div className="absolute left-[35vw] top-[55vh] overflow-hidden">
          <p style={{ writingMode: "vertical-rl" }} className="ver2 text-nowrap">
            vertical text two vertical text two
          </p>
        </div>
        <p className="desc max-w-4xl !text-lg absolute bottom-0 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum."
        </p>
      </div>
    </div>
  );
}
