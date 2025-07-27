import { useRef } from "react";
import Characters from "./components/Characters";
import Intro from "./components/Intro";
import GSAPProvider from "./context/GSAPContext";

function App() {
  const containerRef = useRef(null);
  return (
    <GSAPProvider containerRef={containerRef}>
      {/* <div className="fixed top-0 left-0 z-50 h-screen w-screen">
        <div className="absolute left-1/2 h-screen w-0.5 bg-black"></div>
      </div> */}
      <div className="absolute h-screen w-screen" ref={containerRef}>
        <div className="relative top-0 left-0 h-full w-full">
          <Intro />
          <Characters />
        </div>
      </div>
    </GSAPProvider>
  );
}

export default App;
