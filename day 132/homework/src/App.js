import React, { useState } from 'react';
import { useTheme } from './themeContext';
import { useUser } from './UserContext';
import { useLanguage } from './LanguageContext';  // Import LanguageContext

function App() {
  const { theme, toggleTheme } = useTheme();
  const { user, updateUser } = useUser();
  const { language, changeLanguage } = useLanguage();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    updateUser({ name, email });
  };

  return (
    <div className={`App ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <header className="App-header">
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>

        <h2>User Info</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>

        <form onSubmit={handleUpdateUser}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <button type="submit">Update User</button>
        </form>

        <h2>Language: {language}</h2>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Spanish</button>
      </header>
    </div>
  );
}

export default App;