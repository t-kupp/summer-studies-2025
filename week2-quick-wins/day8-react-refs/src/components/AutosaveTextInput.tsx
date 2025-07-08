import { useEffect, useRef, useState } from "react";

export default function AutosaveTextInput() {
  const [input, setInput] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const lastSavedRef = useRef("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (lastSavedRef.current != input) {
        saveToServer(input);
      }
    }, 3000);
  }, [input]);

  // Fake saving to server
  async function saveToServer(content: string) {
    setSaveStatus("Saving...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    lastSavedRef.current = content;
    console.log("Saved to server:", content);
    setSaveStatus("Saved!");
    setTimeout(() => {
      setSaveStatus("");
    }, 1000);
  }

  return (
    <div className="border my-4 p-4 flex flex-col items-start">
      AutosaveTextInput
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        className="border rounded px-1"
      />
      <p>{saveStatus}</p>
    </div>
  );
}
