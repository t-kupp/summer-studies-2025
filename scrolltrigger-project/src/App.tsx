import { useRef } from "react";
import Intro from "./components/Intro";
import GSAPProvider from "./context/GSAPContext";

function App() {
  const containerRef = useRef(null);
  return (
    <GSAPProvider containerRef={containerRef}>
      <div className="w-full h-full" ref={containerRef}>
        <Intro />
      </div>
    </GSAPProvider>
  );
}

export default App;
