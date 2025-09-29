import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/users.csv');
      const csvText = await response.text();

      const lines = csvText.split('\n');
      const users = lines.slice(1).map(line => {
        const [csvUsername, csvPassword] = line.split(',');
        return { username: csvUsername?.trim(), password: csvPassword?.trim() };
      });

      const validUser = users.find(user =>
        user.username === username && user.password === password
      );

      if (validUser) {
        onLogin(username);
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Failed to authenticate. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Gaming Dashboard Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" disabled={loading} className="login-button">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="demo-credentials">
          <h4>Demo Credentials:</h4>
          <p>Username: admin | Password: admin123</p>
          <p>Username: testuser | Password: password123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;