"use client";

import NewRunForm from "./components/NewRunForm";
import useNuzlockeRun from "./hooks/useNuzlockeRun";

export default function Home() {
  const { initializeRun } = useNuzlockeRun();

  return (
    <div>
      <NewRunForm initializeRun={initializeRun} />
      <div className="w-full border-b py-4"></div>
    </div>
  );
}
