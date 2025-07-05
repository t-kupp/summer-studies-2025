import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
  validator?: (obj: unknown) => obj is T,
) {
  const [value, setValue] = useState<T>(initialValue); // Always start with initialValue
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage after component mounts (client-side only)
  useEffect(() => {
    try {
      const storedItem = localStorage.getItem(key);
      if (storedItem) {
        const parsed = JSON.parse(storedItem);

        // Use validator if provided
        if (validator && !validator(parsed)) {
          console.warn("Invalid localStorage data, using default");
          return;
        }

        setValue(parsed);
      }
    } catch (error) {
      console.error("Error reading localStorage:", error);
    }
    setIsLoaded(true);
  }, [key, validator]);

  function setStoredValue(newValue: T) {
    setValue(newValue);

    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }

  return [value, setStoredValue, isLoaded] as const;
}
