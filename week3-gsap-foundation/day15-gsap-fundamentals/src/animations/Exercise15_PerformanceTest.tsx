import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Exercise15_PerformanceTest() {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (boxRefs.current[0])
      gsap.to(boxRefs.current[0], {
        x: 100,
        rotation: 360,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    if (boxRefs.current[1])
      gsap.to(boxRefs.current[1], {
        y: 50,
        scale: 1.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "bounce.out",
      });
    if (boxRefs.current[2])
      gsap.to(boxRefs.current[2], {
        rotation: 180,
        opacity: 0.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out",
      });
    if (boxRefs.current[3])
      gsap.to(boxRefs.current[3], {
        x: -80,
        y: 30,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "back.inOut",
      });
    if (boxRefs.current[4])
      gsap.to(boxRefs.current[4], {
        scale: 0.8,
        rotation: -90,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    for (let i = 5; i < boxRefs.current.length; i++) {
      if (boxRefs.current[i]) {
        const animationType = i % 4;
        switch (animationType) {
          case 0:
            gsap.to(boxRefs.current[i], {
              x: 50,
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
            });
            break;
          case 1:
            gsap.to(boxRefs.current[i], {
              y: 40,
              duration: 1.8,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
            break;
          case 2:
            gsap.to(boxRefs.current[i], {
              rotation: 90,
              duration: 1.2,
              repeat: -1,
              yoyo: true,
              ease: "back.inOut",
            });
            break;
          case 3:
            gsap.to(boxRefs.current[i], {
              scale: 1.3,
              duration: 1.6,
              repeat: -1,
              yoyo: true,
              ease: "elastic.inOut",
            });
            break;
        }
      }
    }
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Performance Test: 50 Animated Boxes</h2>
      <div className="grid grid-cols-10 gap-2">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="box"
            ref={(el) => {
              boxRefs.current[i] = el;
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
