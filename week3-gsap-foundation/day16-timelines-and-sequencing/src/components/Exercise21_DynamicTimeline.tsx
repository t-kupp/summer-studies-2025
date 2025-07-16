import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Exercise21_DynamicTimeline() {
  const [animations, setAnimations] = useState<{ id: string; type: string }[]>([]);
  const timelineRef = useRef<GSAPTimeline>(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    timelineRef.current = tl;
  });

  function addMoveAnimation() {
    const animation = gsap.to(boxRef.current, { x: 200 });
    timelineRef.current?.add(animation);
    setAnimations((prev) => [...prev, { id: crypto.randomUUID(), type: "Move" }]);
  }

  function addRotateAnimation() {
    const animation = gsap.to(boxRef.current, { rotate: 360 });
    timelineRef.current?.add(animation);
    setAnimations((prev) => [...prev, { id: crypto.randomUUID(), type: "Rotate" }]); // ADD THIS
  }

  function removeAnimation(index: number) {
    const gsapAnimations = timelineRef.current?.getChildren();
    if (gsapAnimations && gsapAnimations[index]) {
      timelineRef.current?.remove(gsapAnimations[index]);
      setAnimations((prev) => prev.filter((_, i) => i !== index));
    }
  }

  function clearAnimations() {
    timelineRef.current?.clear();
    setAnimations([]);
  }

  return (
    <div>
      Exercise21_DynamicTimeline
      <div className="box" ref={boxRef} />
      <div className="flex border rounded p-4">
        <button onClick={addMoveAnimation}>Add move</button>
        <button onClick={addRotateAnimation}>Add rotate</button>
        <button onClick={() => removeAnimation(0)}>Remove first</button>
        <button onClick={clearAnimations}>Clear</button>
      </div>
      {animations?.map((animation) => (
        <p key={animation.id}>{animation.type}</p>
      ))}
    </div>
  );
}
