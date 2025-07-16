import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Exercise22_TimelineScrubbing() {
  const boxRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline | null>(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({ onUpdate: () => setProgress(tl.progress()) });
    tl.to(boxRef.current, { x: 350 })
      .to(boxRef.current, { rotate: 360 })
      .to(boxRef.current, { scale: 0.5 })
      .to(boxRef.current, { scale: 1 })
      .to(boxRef.current, { x: 700 })
      .to(boxRef.current, { rotate: 720 });
    timelineRef.current = tl;
  });

  return (
    <div>
      Exercise22_TimelineScrubbing
      <div className="box" ref={boxRef}></div>
      <div>
        <progress value={progress} max={1} className="w-full"></progress>
        <input
          max={1}
          min={0}
          step={0.01}
          type="range"
          value={progress}
          className="w-full"
          onChange={(e) => {
            const curProgress = parseFloat(e.target.value);
            setProgress(curProgress);
            timelineRef.current?.progress(curProgress);
            timelineRef.current?.pause();
          }}
        />
        <button onClick={() => timelineRef.current?.play()}>Play</button>
        <button onClick={() => timelineRef.current?.pause()}>Pause</button>
      </div>
    </div>
  );
}
