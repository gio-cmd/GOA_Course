import React, { useState } from 'react';
import './ThemeSwitcher.css'; 

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`theme-switcher ${theme}`}>
      <button onClick={changeTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;