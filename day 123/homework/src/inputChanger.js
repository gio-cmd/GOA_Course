import React, { useState, useEffect } from 'react';

function TitleInput() {
  const [title, setTitle] = useState('');

  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    document.title = title;
  }, [title]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && (<input  type="text"  value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Type a new title"/>)}
      <br />

      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Input' : 'Show Input'}
      </button>
    </div>
  );
}

export default TitleInput;