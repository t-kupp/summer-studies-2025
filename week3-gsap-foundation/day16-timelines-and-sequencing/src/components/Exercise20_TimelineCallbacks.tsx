import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Exercise20_TimelineCallbacks() {
  const [status, setStatus] = useState("Ready");
  const [progress, setProgress] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<GSAPTimeline>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onStart: () => setStatus("Animation started."),
      onComplete: () => setStatus("Animation finished."),
      onReverseComplete: () => setStatus("Animation reverse finished."),
      onUpdate: () => setProgress(tl.progress()),
      onRepeat: () => setRepeatCount((prev) => prev + 1),
    });
    timelineRef.current = tl;
    if (cardRefs.current[0]) tl.add(createCardFlip(cardRefs.current[0]), 0);
    if (cardRefs.current[1]) tl.add(createCardFlip(cardRefs.current[1]), 0.3);
    if (cardRefs.current[2]) tl.add(createCardFlip(cardRefs.current[2]), 0.6);
    tl.repeat(-1);
    tl.pause();
  });

  function createCardFlip(element: HTMLDivElement) {
    const tl = gsap.timeline();
    tl.to(element, { scale: 0.75 }).to(element, { rotateY: 180 }).to(element, { scale: 1 });
    return tl;
  }

  return (
    <div>
      Exercise20_TimelineCallbacks
      <div className="flex gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-96 w-64 bg-amber-400"
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          ></div>
        ))}
      </div>
      <p>Repeated: {repeatCount}</p>
      <p>{status}</p>
      <progress value={progress} max={1} className="w-full" />
      <div className="border rounded p-4 flex gap-4">
        <button className="border px-2" onClick={() => timelineRef.current?.play()}>
          Play
        </button>
        <button className="border px-2" onClick={() => timelineRef.current?.pause()}>
          Pause
        </button>
        <button className="border px-2" onClick={() => timelineRef.current?.reverse()}>
          Reverse
        </button>
        <button
          className="border px-2"
          onClick={() => {
            timelineRef.current?.restart();
            setRepeatCount(0);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
