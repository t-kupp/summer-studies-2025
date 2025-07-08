import { useImperativeHandle, useRef } from "react";

export interface FocusableCardRef {
  focusInput: () => void;
}

interface FocusableCardProps {
  children: React.ReactNode;
  ref?: React.RefObject<FocusableCardRef | null>;
}

export default function FocusableCard({ children, ref }: FocusableCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <div className="flex flex-col items-start">
      <h1>FocusableCard</h1>
      <input ref={inputRef} type="text" className="border" />
      <button onClick={() => inputRef.current?.focus()}>Child button</button>
      {children}
    </div>
  );
}
