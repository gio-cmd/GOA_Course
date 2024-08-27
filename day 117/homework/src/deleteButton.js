import React, { useState } from 'react';

function DeleteButton() {
  const [isVisible, setIsVisible] = useState(true);

  const changeParagraph = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Toggle Paragraph Visibility</h1>
      
      <button onClick={changeParagraph}>
        {isVisible ? 'Hide Paragraph' : 'Show Paragraph'}
      </button>
      
      {isVisible && (
        <p>This is a paragraph that can be toggled on and off with a button click.</p>
      )}
    </div>
  );
}

export default DeleteButton;