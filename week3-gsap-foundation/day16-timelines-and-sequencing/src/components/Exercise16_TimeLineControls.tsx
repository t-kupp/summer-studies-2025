import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise16_TimeLineControls() {
  const timeLineRef = useRef<GSAPTimeline>(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(boxRef.current, { x: 200 })
      .to(boxRef.current, { y: 200 })
      .to(boxRef.current, { opacity: 0 });
    timeLineRef.current = tl;
  });

  return (
    <div className="flex flex-col gap-4">
      Exercise16_TimeLineControls
      <div className="border rounded p-4 flex gap-4">
        <button className="border px-2" onClick={() => timeLineRef.current?.play()}>
          Play
        </button>
        <button className="border px-2" onClick={() => timeLineRef.current?.pause()}>
          Pause
        </button>
        <button className="border px-2" onClick={() => timeLineRef.current?.reverse()}>
          Reverse
        </button>
        <button className="border px-2" onClick={() => timeLineRef.current?.restart()}>
          Restart
        </button>
      </div>
      <div ref={boxRef} className="box" />
    </div>
  );
}
