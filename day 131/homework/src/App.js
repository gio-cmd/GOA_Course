import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JokesPage from './components/JokesPage';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jokes" element={<JokesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;