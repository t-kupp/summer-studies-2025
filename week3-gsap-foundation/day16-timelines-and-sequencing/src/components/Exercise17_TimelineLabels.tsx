import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Exercise17_TimelineLabels() {
  const boxRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline>(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({ onUpdate: () => setProgress(tl.progress()) });
    tl.addLabel("start")
      .to(boxRef.current, { x: 200 }, "moveRight")
      .to(boxRef.current, { y: 200 }, "moveDown")
      .to(boxRef.current, { opacity: 0 }, "fadeOut");
    timelineRef.current = tl;
  });

  function handleSeekTo(label: string) {
    timelineRef.current?.seek(label);
  }

  return (
    <div>
      Exercise17_TimelineLabels
      <div ref={boxRef} className="box" />
      <div>
        <progress className="w-full" max={1} value={progress}></progress>
        <div className="border rounded p-4 flex gap-4">
          <button className="border px-2" onClick={() => handleSeekTo("start")}>
            Start
          </button>
          <button className="border px-2" onClick={() => handleSeekTo("moveRight")}>
            Move right
          </button>
          <button className="border px-2" onClick={() => handleSeekTo("moveDown")}>
            Move down
          </button>
          <button className="border px-2" onClick={() => handleSeekTo("fadeOut")}>
            Fade
          </button>
        </div>
      </div>
    </div>
  );
}
