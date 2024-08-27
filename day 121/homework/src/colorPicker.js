import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#000000');

  const change = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="color-picker">
      <input type="color" value={color} onChange={change} />
      <div
        className="color-preview"
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          marginTop: '10px',
        }}>
      </div>
    </div>
  );
}

export default ColorPicker;