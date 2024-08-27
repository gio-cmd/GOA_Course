import React, { useState } from 'react';

function Toggle() {
  const [hello, setIsHello] = useState(true);

  const changeParagraph = () => {
    setIsHello(!hello);
  };

  return (
    <div>
      <h1>hello or good bye</h1>
      
      <button onClick={changeParagraph}>
        {hello ? 'hello' : 'good bye'}
      </button>
      
    </div>
  );
}

export default Toggle;