import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

interface GSAPContextValues {
  masterTl: GSAPTimeline | undefined;
}

interface GSAPProviderProps {
  children: ReactNode;
  containerRef: RefObject<HTMLDivElement | null>;
}

export const GSAPContext = createContext<GSAPContextValues | undefined>(
  undefined,
);

export default function GSAPProvider({
  children,
  containerRef,
}: GSAPProviderProps) {
  const [masterTl, setMasterTl] = useState<GSAPTimeline>();

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        pin: true,
        start: "center center",
        end: `${window.innerWidth * 2}px`,
      },
    });
    setMasterTl(tl);

    return () => {
      tl.kill();
    };
  }, [containerRef]);

  return (
    <GSAPContext.Provider value={{ masterTl }}>{children}</GSAPContext.Provider>
  );
}

export const useGSAPContext = () => {
  const context = useContext(GSAPContext);
  return context;
};
