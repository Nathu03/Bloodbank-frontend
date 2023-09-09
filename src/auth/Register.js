import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Reset errors on each submission attempt
    setErrors({});

    let validationErrors = {};

    // Add validation for 'name'
    if (name.trim() === '') {
      validationErrors.name = ['Name is required'];
    }

    // Add validation for 'email'
    if (email.trim() === '') {
      validationErrors.email = ['Email is required'];
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = ['Invalid email format'];
    }

    // Add validation for 'password'
    if (password.trim() === '') {
      validationErrors.password = ['Password is required'];
    } else if (password.length < 6) {
      validationErrors.password = ['Password must be at least 6 characters long'];
    }

    // Add validation for 'gender'
    if (gender === '') {
      validationErrors.gender = ['Gender is required'];
    }

    // Add validation for 'dateOfBirth'
    if (dateOfBirth === '') {
      validationErrors.dateOfBirth = ['Date of Birth is required'];
    }

    // Add validation for 'address'
    if (address.trim() === '') {
      validationErrors.address = ['Address is required'];
    }

    // Add validation for 'phone'
    if (phone.trim() === '') {
      validationErrors.phone = ['Contact Number is required'];
    }

    // Add validation for 'bloodType'
    if (bloodType === '') {
      validationErrors.bloodType = ['Blood Type is required'];
    }

    if (Object.keys(validationErrors).length > 0) {
      // If there are validation errors, set the errors state and return early
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/bloodbank/connect-to-frontend/register', {
        name,
        email,
        password,
        gender,
        dateOfBirth,
        address,
        phone,
        bloodType,
      });
      console.log('User registered:', response.data.user);
      setIsRegistered(true); // Set the success state to true
      history.push('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error('An error occurred during registration:', error);
      }
    }
  };

  return (
    <div className="flex justify-center px-4 py-3 mb-6">
      <div>
        <h2 className="text-3xl mb-6 font-bold text-center">Register</h2>
        {isRegistered && (
          <div className="bg-green-100 text-green-700 px-4 py-3 mb-6" role="alert">
            Registration successful! You can now log in with your credentials.
          </div>
        )}
        <form className="mx-auto mt-20 max-w-xl sm:mt-20" onSubmit={handleRegister}>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name:
            </label>
            <input
              id="name"
              className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            {errors.name && <div className="text-red-500 mt-1">{errors.name[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email:
            </label>
            <input
              id="email"
              className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            {errors.email && <div className="text-red-500 mt-1">{errors.email[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
              Password:
            </label>
            <input
              id="password"
              className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {errors.password && <div className="text-red-500 mt-1">{errors.password[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="gender" className="block text-sm font-semibold leading-6 text-gray-900">
              Gender:
            </label>
            <select
              id="gender"
              className="form-select border -md w-full"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <div className="text-red-500 mt-1">{errors.gender[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="dateOfBirth" className="block text-sm font-semibold leading-6 text-gray-900">
              Date of Birth:
            </label>
            <input
              id="dateOfBirth"
              className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            {errors.dateOfBirth && <div className="text-red-500 mt-1">{errors.dateOfBirth[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
              Address:
            </label>
            <input
              id="address"
              className="block w-full rounded-md border-0 px-5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <div className="text-red-500 mt-1">{errors.address[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Contact Number:
            </label>
            <input
              id="phone"
              className="form-input border md-2 my-2 me-2 w-full"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <div className="text-red-500 mt-1">{errors.phone[0]}</div>}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 me-2 my-3">
            <label htmlFor="bloodType" className="block text-sm font-semibold leading-6 text-gray-900">
              Blood Type:
            </label>
            <select
              id="bloodType"
              className="form-select border"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {errors.bloodType && <div className="text-red-500 mt-1">{errors.bloodType[0]}</div>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-black px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Register
          </button>


        </form>
      </div>
    </div>
  );
};

export default Register;
