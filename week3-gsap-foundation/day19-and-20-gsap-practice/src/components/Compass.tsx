// Has nothing to do with GSAP, but wanted to try to build this

import { useEffect, useRef, useState } from "react";

export default function Compass() {
  const compassRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!compassRef.current) return;

      const compassRect = compassRef.current.getBoundingClientRect();
      const compassCenterX = compassRect.left + compassRect.width / 2;
      const compassCenterY = compassRect.top + compassRect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const dx = mouseX - compassCenterX;
      const dy = mouseY - compassCenterY;

      let angle = Math.atan2(dy, dx) * (180 / Math.PI);

      angle += 60; // Adjust for initial SVG orientation

      setRotation(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-[orange] font-bold uppercase !text-[8rem] mb-8">Compass</h1>
      <div
        ref={compassRef}
        className="h-64 w-64 mx-auto"
        style={{
          position: "relative",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 356 356"
          style={{
            width: "100%",
            height: "100%",
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center",
          }}
        >
          <circle
            fill="none"
            stroke="orange"
            strokeWidth="1rem"
            cx="178"
            cy="178"
            r="169.973"
          ></circle>
          <path
            className="arrow"
            fill="none"
            stroke="orange"
            strokeWidth="1rem"
            d="m193.434 238.044-74.791-43.181 99.148-85.369z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
