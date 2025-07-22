import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useRef, useState } from "react";
import verticalLoop from "../utils/loop";

export default function ScrollList() {
  const containerRef = useRef(null);
  const [activeLetter, setActiveLetter] = useState("0");

  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Ethan",
    "Fiona",
    "George",
    "Hannah",
    "Ivan",
    "Julia",
  ];

  useGSAP(() => {
    gsap.registerPlugin(Observer);

    const names = gsap.utils.toArray(".names p");

    let activeElement;

    const loop = verticalLoop(names, {
      center: true,
      repeat: -1,
      // onChange: (element) => {
      //   // when the active element changes, this function gets called.
      //   if (activeElement) activeElement.classList.remove("active");
      //   element.classList.add("active");
      //   activeElement = element;
      // },
    });
    const slow = gsap.to(loop, { timeScale: 0, duration: 0.5 });

    Observer.create({
      target: containerRef.current,
      type: "pointer,touch,wheel",
      wheelSpeed: -0.2,
      onChange: (self) => {
        loop.timeScale(Math.abs(self.deltaX) > Math.abs(self.deltaY) ? -self.deltaX : -self.deltaY); // whichever direction is bigger
        slow.invalidate().restart(); // now decelerate
      },
    });
  });

  function handleHover(e) {
    if (e.target.innerText.length > 0) {
      setActiveLetter(e.target.innerText[0]);
    }
  }

  return (
    <div>
      ScrollList
      <div className="flex items-center gap-4">
        <h1 className="!text-[20rem] font-mono">{activeLetter}</h1>
        <div className="w-full border-2 rounded-lg border-white/40 overflow-hidden  ">
          <div ref={containerRef} className="flex flex-col  names px-16 -my-12">
            {[...names].map((name, i) => (
              <p
                className="text-5xl px-4 rounded-lg font-medium select-none cursor-pointer py-1 hover:text-orange-500 transition-colors"
                key={i}
                onMouseEnter={handleHover}
              >
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
