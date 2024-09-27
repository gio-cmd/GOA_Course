import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Random Joke Generator!</h1>
      <p className="mb-4">Click the button below to fetch some random jokes!</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        onClick={() => navigate('/jokes')}
      >
        Get Random Jokes
      </button>
    </div>
  );
}

export default HomePage;