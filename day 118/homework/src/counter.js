import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const addition = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={addition}>Increment</button>
    </div>
  );
}

export default Counter;