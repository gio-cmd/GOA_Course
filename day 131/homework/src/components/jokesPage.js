import React, { useState, useEffect } from 'react';

function JokesPage() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    
    if (data.type === 'single') {
      setJoke(data.joke);
    } else {
      setJoke(`${data.setup} ... ${data.delivery}`);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Here's a Random Joke for You!</h1>
      
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="bg-gray-100 p-6 rounded shadow-lg mb-4">
          <p className="text-lg">{joke}</p>
        </div>
      )}

      <button
        className="bg-green-500 text-white px-4 py-2 rounded shadow"
        onClick={fetchJoke}
      >
        Next Joke
      </button>
    </div>
  );
}

export default JokesPage;