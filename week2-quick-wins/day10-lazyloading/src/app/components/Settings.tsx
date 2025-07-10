"use client";

export default function Settings() {
  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Settings</h1>
      <div className="space-y-8">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="border-b pb-4">
            <h3 className="font-semibold">Setting Group {i + 1}</h3>
            <div className="mt-2 space-y-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <label key={j} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Option {j + 1}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
