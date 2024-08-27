import React, { useState } from 'react';

function LimitWarner() {
  const [text, setText] = useState('');
  const characterLimit = 100;
  const warningThreshold = 80;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="character-limit-warning">
      <input type="text" value={text} onChange={handleChange} maxLength={characterLimit} placeholder="Type here..."/>
      <p>
        {text.length}/{characterLimit} characters
      </p>
      {text.length >= warningThreshold && (
        <p style={{color: 'red'}}>Warning: getting close to the limit</p>
      )}
    </div>
  );
}

export default LimitWarner;