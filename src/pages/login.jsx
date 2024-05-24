import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from './users.json';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * The Login component provides a login form for customers and sellers.
 * @component
 * @example
 * return (
 *   <Login />
 * )
 */
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  /**
   * Handles the login process by verifying user credentials.
   * @function
   */
  const handleLogin = () => {
    const users = usersData[userType + 's'];
    const user = users.find(
      user => user.email === email && "pass1234" === password
    );

    if (user) {
      sessionStorage.setItem('user', JSON.stringify({ ...user, userType }));
      navigate('/profile');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container pt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="userType" className="form-label">I am a:</label>
        <select
          id="userType"
          className="form-select"
          value={userType}
          onChange={e => setUserType(e.target.value)}
        >
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
