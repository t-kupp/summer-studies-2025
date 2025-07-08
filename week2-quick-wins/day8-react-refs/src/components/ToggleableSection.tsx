import { useEffect, useImperativeHandle, useRef, useState } from "react";

export interface ToggleAbleSectionRef {
  show: () => void;
  hide: () => void;
  toggle: () => void;
  isVisible: () => void;
}

interface ToggleableSectionProps {
  ref?: React.RefObject<ToggleAbleSectionRef | null>;
}

export default function ToggleableSection({ ref }: ToggleableSectionProps) {
  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    show: () => setShow(true),
    hide: () => setShow(false),
    toggle: () => setShow((prev) => !prev),
    isVisible: () => show,
  }));

  useEffect(() => {
    if (show) inputRef.current?.focus();
  }, [show]);

  return (
    <div className="flex flex-col items-start gap-2 border p-2 w-fit">
      Child
      {show && (
        <div>
          <p>This is some example text</p>
          <input ref={inputRef} className="border" type="text" />
        </div>
      )}
      <button className="border px-2" onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
