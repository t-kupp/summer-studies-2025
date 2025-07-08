"use client";

import AutosaveTextInput from "@/components/AutosaveTextInput";
import ToggleableSection, { ToggleAbleSectionRef } from "@/components/ToggleableSection";
import { useRef } from "react";

export default function Home() {
  const childRef = useRef<ToggleAbleSectionRef>(null);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="border p-4 flex flex-col gap-2 items-start">
        Parent
        <button onClick={() => childRef.current?.show()} className="border px-2">
          Show
        </button>
        <button onClick={() => childRef.current?.hide()} className="border px-2">
          Hide
        </button>
        <button onClick={() => childRef.current?.toggle()} className="border px-2">
          Toggle
        </button>
        <button
          className="border px-2"
          onClick={() =>
            alert(childRef.current?.isVisible() ? "Section is visible." : "Section is hidden.")
          }
        >
          Section visible?
        </button>
        <ToggleableSection ref={childRef} />
      </div>
      <AutosaveTextInput />
    </div>
  );
}
