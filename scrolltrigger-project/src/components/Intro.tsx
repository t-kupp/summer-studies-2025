import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAPContext } from "../context/GSAPContext";

export default function Intro() {
  const h1Ref = useRef<HTMLImageElement>(null);
  const introRef = useRef(null);
  const [h1Position, setH1Position] = useState({ x: 0, y: 0 });
  const [h1Size, setH1Size] = useState({ x: 0, y: 0 });
  const { masterTl } = useGSAPContext();

  // need position of h1 for reference to position other elements around it
  useEffect(() => {
    function handleResize() {
      if (h1Ref.current) {
        const newPosition = {
          x: h1Ref.current.getBoundingClientRect().x,
          y: h1Ref.current.getBoundingClientRect().y,
        };

        const newSize = {
          x: h1Ref.current.clientWidth,
          y: h1Ref.current.clientHeight,
        };

        setH1Position({
          x: newPosition.x,
          y: newPosition.y,
        });

        setH1Size({
          x: newSize.x,
          y: newSize.y,
        });
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [masterTl, h1Ref]);

  console.log("h1Position:", h1Position);
  console.log("h1Size:", h1Size);

  // add GSAP animations
  useGSAP(
    () => {
      if (!masterTl) return;

      const introTl = gsap.timeline();
      introTl
        // Phase 1
        .to(".intro-container", { y: -200, ease: "power1.in" })
        .to(".intro-brand", { opacity: 0, y: -30 }, "<")
        .to(
          ".hl1",
          {
            x:
              window.innerWidth / 2 -
              h1Position.x -
              (window.innerWidth / 100) * 15,
            y: 50,
            scale: "0.3",
            ease: "power1.in",
          },
          "<",
        )
        .to(
          ".hl2",
          {
            x: -(
              window.innerWidth / 2 -
              h1Position.x -
              (window.innerWidth / 100) * 21
            ),
            y: 0,
            scale: "0.7",
            ease: "power1.in",
          },
          "<",
        )
        .to(".intro-p", { y: -30, stagger: 0.01 }, "<")
        .to(".intro-p-container", { y: -20 }, "<")
        .to(".ver1", { height: "0px" }, "<")
        .to(".ver2", { height: "0px" }, "<")

        // Phase 2
        .to(".hl1", {
          y: -(h1Position.y - h1Size.y - 150),
          scale: "*=0.8",
          ease: "power1.out",
        })
        .to(
          ".hl2",
          {
            y: -(h1Position.y - h1Size.y - 80),
            scale: "*=0.8",
            ease: "power1.out",
          },
          "<",
        )
        .to(".desc", { y: "-100vh", duration: 1.5, ease: "none" }, "<-0.2");

      masterTl.add(introTl);
    },
    { dependencies: [masterTl], scope: introRef },
  );

  console.log("h1position:", h1Position);

  // DOM rendering
  return (
    <div className="h-screen text-center" ref={introRef}>
      {/* background video  */}
      <div className="absolute top-[-10vh] left-[-10vw] h-full w-full bg-gradient-to-b">
        <iframe
          className="h-[120vh] w-[120vw] bg-neutral-700"
          src="https://www.youtube.com/embed/4OiMOHRDs14?autoplay=1&mute=1"
        ></iframe>
      </div>

      {/* intro container  */}
      <div className="intro-container flex h-full flex-col items-center justify-center">
        {/* ghibli logo */}
        <img
          src="/ghibli.png"
          style={{
            top: h1Position.y - h1Size.y * 2,
            left: h1Position.x + h1Size.x / 4,
          }}
          className="intro-brand fixed w-[12vw] opacity-50 invert"
        ></img>

        {/* princess logo container*/}

        <img
          ref={h1Ref}
          src="/princess.svg"
          className="hl1 fixed top-[40vh] left-[5vw] h-[5vw] w-[30vw] invert"
        />

        {/* mononoke logo */}
        <img
          src="/mononoke.svg"
          className="hl2 fixed top-[50vh] right-[5vw] w-[40vw] invert"
        ></img>

        {/* quote text */}
        <div
          style={{
            top: h1Position.y + h1Size.y * 1.5,
            left: h1Position.x + h1Size.x / 4,
          }}
          className="intro-p-container absolute w-[12vw] text-white opacity-70"
        >
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

        {/* vertical text 1 */}
        <div
          style={{
            top: h1Position.y - h1Size.y * 1.3,
            left: h1Position.x + h1Size.x / 1.2,
          }}
          className="absolute -translate-y-1/2 overflow-hidden"
        >
          <p
            style={{ writingMode: "vertical-rl" }}
            className="ver1 font-bold text-nowrap text-white opacity-70"
          >
            スタジオジブリ
          </p>
        </div>

        {/* vertical text 2 */}
        <div
          style={{
            top: h1Position.y + h1Size.y * 1.5,
            left: h1Position.x + h1Size.x / 1.2,
          }}
          className="absolute overflow-hidden"
        >
          <p
            style={{ writingMode: "vertical-rl" }}
            className="ver2 font-bold text-nowrap text-white opacity-70"
          >
            もののけ姫
          </p>
        </div>

        {/* description text */}
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
