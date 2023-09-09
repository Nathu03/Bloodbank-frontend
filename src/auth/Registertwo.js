import axios from 'axios';
import React, { useState } from 'react';

const RegisterForm = () => {
  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    error_list: {},
  });

  const handleInput = (e) => {
    e.persist();
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };

  //  axios.get('/sanctum/csrf-cookie').then(() => {
      axios.post('http://127.0.0.1:8000/api/register', data).then((res) => {
        if (res.data.status === 200) {
          // Handle successful registration here
        } else {+
          setRegisterInput({ ...registerInput, error_list: res.data.validation_errors });
        }
      });
    // });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={registerSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={registerInput.name}
            name="name"
            type="text"
            placeholder="name"
          />
          <span style={{ color: 'red' }}>{registerInput.error_list.name}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={registerInput.email}
            name="email"
            id="email"
            type="email"
            placeholder="Email"
          />
          <span style={{ color: 'red' }}>{registerInput.error_list.email}</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleInput}
            value={registerInput.password}
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
          <span style={{ color: 'red' }}>{registerInput.error_list.password}</span>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
