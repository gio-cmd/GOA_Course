import React, { useState, useEffect } from 'react';

function AutoIncrementCounterWithInputTracker() {

  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

 
  useEffect(() => {
    console.log(`Input Value Changed: ${inputValue}`);
  }, [inputValue]); 

  return (
    <div>
      <h2>Counter: {count}</h2>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type something"/>
      <p>You are typing: {inputValue}</p>
    </div>
  );
}

export default AutoIncrementCounterWithInputTracker;