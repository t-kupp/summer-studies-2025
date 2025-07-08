// Component with:
// - useRef to target the input element
// - Button that calls inputRef.current.focus()
// - Basic input field with ref={inputRef}
"use client";

interface CustomInputProps {
  ref?: React.RefObject<HTMLInputElement | null>;
}

export default function CustomInput({ ref }: CustomInputProps) {
  return (
    <div>
      <h1>CustomInput</h1>
      <input type="text" ref={ref} />

      <button
        onClick={() => {
          if (ref && typeof ref === "object") ref.current?.focus();
        }}
      >
        Click
      </button>
    </div>
  );
}
