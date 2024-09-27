import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './themeContext';
import { UserProvider } from './UserContext';
import { LanguageProvider } from './LanguageContext';  // Import LanguageProvider

ReactDOM.render(
  <LanguageProvider>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </LanguageProvider>,
  document.getElementById('root')
);