import React, { useState } from 'react';

function titleChanger() {
  const [title, setTitle] = useState("HEllo");


  const handleClick = () => {
    setTitle('gamrjoba');
  };

  return (
    <div>
      <p>{title}</p>
      <button onClick={handleClick}>change title</button>
    </div>
  );
}

export default titleChanger;