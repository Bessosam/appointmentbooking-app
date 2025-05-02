import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // For page navigation

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }

    // Save username to localStorage
    localStorage.setItem('loggedInUser', JSON.stringify({ username }));

    // Redirect to Calendar page
    navigate('/calendar');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Washing Machine Booking</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', width: '250px', marginBottom: '20px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
