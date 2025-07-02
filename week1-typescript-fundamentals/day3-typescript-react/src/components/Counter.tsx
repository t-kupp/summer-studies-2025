import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleDecrease() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className='flex'>
      <button onClick={handleIncrease} className='border p-4'>
        +
      </button>
      <p className='p-4'>{count}</p>
      <button onClick={handleDecrease} className='border p-4'>
        -
      </button>
    </div>
  );
}
