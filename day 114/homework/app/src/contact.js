import React, { useState } from 'react';

function Contact() {
  const password = 'giorgi123';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); 
    const enteredPassword = e.target.querySelector('input[type="password"]').value;
    const verification = enteredPassword === password;
    setAuthorized(verification);
  }

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );

  const contactInfo = (
    <ul>
      <li>vanishvilig1org2@gmail.com</li>
      <li>595 80 64 76</li>
    </ul>
  );

  return (
    <div id="authorization">
      <h1>{authorized ? 'Contact' : 'Enter the Password'}</h1>
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;
