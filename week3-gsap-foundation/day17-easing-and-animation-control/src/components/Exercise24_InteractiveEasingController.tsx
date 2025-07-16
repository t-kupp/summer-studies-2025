import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Exercise24_InteractiveEasingController() {
  const boxRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline>(null);
  const [ease, setEase] = useState("power1.in");
  const [duration, setDuration] = useState(1);
  const [yoyo, setYoyo] = useState(false);
  const [repeat, setRepeat] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline();
    timelineRef.current = tl;
  });

  function playAnimation() {
    timelineRef.current?.clear();
    timelineRef.current?.set(boxRef.current, { x: 0, overwrite: true });
    timelineRef.current?.to(boxRef.current, { x: 1000, ease, duration, yoyo, repeat });
    timelineRef.current?.restart();
  }

  return (
    <div>
      Exercise24_InteractiveEasingController
      <div ref={boxRef} className="box"></div>
      <div className="flex flex-col">
        <select onChange={(e) => setEase(e.target.value)}>
          <option value="power1.in">power1.in</option>
          <option value="power1.out">power1.out</option>
          <option value="power1.inOut">power1.inOut</option>
          <option value="power2.in">power2.in</option>
          <option value="power2.out">power2.out</option>
          <option value="power2.inOut">power2.inOut</option>
          <option value="power3.in">power3.in</option>
          <option value="power3.out">power3.out</option>
          <option value="power3.inOut">power3.inOut</option>
          <option value="power4.in">power4.in</option>
          <option value="power4.out">power4.out</option>
          <option value="power4.inOut">power4.inOut</option>
          <option value="linear">linear</option>
          <option value="bounce.in">bounce.in</option>
          <option value="bounce.out">bounce.out</option>
          <option value="bounce.inOut">bounce.inOut</option>
          <option value="elastic.in">elastic.in</option>
          <option value="elastic.out">elastic.out</option>
          <option value="elastic.inOut">elastic.inOut</option>
          <option value="back.in">back.in</option>
          <option value="back.out">back.out</option>
          <option value="back.inOut">back.inOut</option>
          <option value="circ.in">circ.in</option>
          <option value="circ.out">circ.out</option>
          <option value="circ.inOut">circ.inOut</option>
          <option value="expo.in">expo.in</option>
          <option value="expo.out">expo.out</option>
          <option value="expo.inOut">expo.inOut</option>
          <option value="sine.in">sine.in</option>
          <option value="sine.out">sine.out</option>
          <option value="sine.inOut">sine.inOut</option>
        </select>
        <label htmlFor="duration">Duration: {duration}</label>{" "}
        <input
          value={duration}
          id="duration"
          type="range"
          min={0.5}
          max={5}
          step={0.1}
          onChange={(e) => setDuration(parseFloat(e.target.value))}
        />
        <div className="flex gap-2">
          <label htmlFor="yoyo">Yoyo</label>
          <input
            checked={yoyo}
            type="checkbox"
            id="yoyo"
            onChange={() => {
              setYoyo((prev) => !prev);
              setRepeat(repeat == 0 ? 1 : 0);
            }}
          />
        </div>
      </div>
      <div>
        <button onClick={playAnimation}>Play</button>
        <button onClick={() => timelineRef.current?.pause()}>Pause</button>
        <button onClick={() => timelineRef.current?.reverse()}>Reverse</button>
      </div>
    </div>
  );
}
