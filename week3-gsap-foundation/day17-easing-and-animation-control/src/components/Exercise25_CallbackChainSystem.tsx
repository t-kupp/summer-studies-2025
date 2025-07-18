import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Exercise25_CallbackChainSystem() {
  const boxRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline>(null);
  const [animationState, setAnimationState] = useState("Click play to start the animation.");

  useEffect(() => {
    console.log("timelineRef.current?.ref:", timelineRef.current?.ref);
  }, [timelineRef]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(boxRef.current, {
      y: -200,
      onStart: () => setAnimationState("Moving up"),
      onReverseComplete: () => setAnimationState("Reverse complete"),
    })
      .to(boxRef.current, { x: 200, onStart: () => setAnimationState("Moving right") })
      .to(boxRef.current, { y: 0, onStart: () => setAnimationState("Moving down") })
      .to(boxRef.current, {
        x: 0,
        onStart: () => setAnimationState("Moving left"),
        onComplete: () => setAnimationState("Animation complete"),
      });

    timelineRef.current = tl;
    timelineRef.current.pause();
  });

  return (
    <div>
      Exercise25_CallbackChainSystem
      <div className="box" ref={boxRef} />
      {animationState}
      <div>
        <button onClick={() => timelineRef.current?.play()}>Play</button>
        <button onClick={() => timelineRef.current?.pause()}>Pause</button>
        <button
          onClick={() => {
            timelineRef.current?.reverse();
            setAnimationState("Reversing...");
          }}
        >
          Reverse
        </button>
        <button onClick={() => timelineRef.current?.restart()}>Restart</button>
      </div>
    </div>
  );
}
