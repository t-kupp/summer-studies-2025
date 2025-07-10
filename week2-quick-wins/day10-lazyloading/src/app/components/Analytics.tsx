"use client";

import { useEffect, useState } from "react";

export default function Analytics() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    // Simulate heavy data processing
    const heavyData = Array.from({ length: 10000 }, () => Math.random() * 100);
    setData(heavyData);
  }, []);

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Analytics Dashboard</h1>
      <p className="mb-4">Processing {data.length} data points</p>
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="rounded border bg-white p-4 shadow">
            <h3>Chart {i + 1}</h3>
            <div className="mt-2 h-32 rounded bg-blue-100"></div>
            <p className="mt-2 text-sm text-gray-600">
              Avg:{" "}
              {data.length > 0
                ? (data.slice(i * 200, (i + 1) * 200).reduce((a, b) => a + b, 0) / 200).toFixed(2)
                : 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
