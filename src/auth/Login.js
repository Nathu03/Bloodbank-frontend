import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate Email
    if (!email) {
      setEmailError('Please enter your email.');
    } else {
      setEmailError('');
    }

    // Validate Password
    if (!password) {
      setPasswordError('Please enter your password.');
    } else {
      setPasswordError('');
    }

    if (!email || !password) {
      return;
    }

    try {
      setError('');
      const response = await axios.post('http://127.0.0.1:8000/api/v1/bloodbank/connect-to-frontend/login', { email, password });
      console.log('Token:', response.data.token);

      // Store the token in local storage or React context for future API calls

      // Redirect to the home page after successful login
      history.push('/home');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="form-input w-full border rounded-lg py-2 px-4 focus:outline-none focus:shadow-outline"
            />
            {emailError && <div className="text-red-500 text-sm mt-1">{emailError}</div>}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-input w-full border rounded-lg py-2 px-4 focus:outline-none focus:shadow-outline"
            />
            {passwordError && <div className="text-red-500 text-sm mt-1">{passwordError}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
