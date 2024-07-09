import React, { useState } from 'react';
import SuccessModal from './modal';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumberValid, setMobileNumberValid] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailExists, setEmailExists] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showReEnter, setShowReEnter] = useState(false)

  const handleEmailBlur = async () => {
    const response = await fetch('http://localhost:5500/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      setEmailExists(data.exists);
    } else {
      setEmailExists(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordMatch(password === confirmPassword);
    setMobileNumberValid(/^\d{10}$/.test(mobileNumber));

    if (passwordMatch && mobileNumberValid && !emailExists) {
      const response = await fetch('http://localhost:5500/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, mobileNumber, password }),
      });

      if (response.ok) {
        setShowModal(true);
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleSetShowReEnter = ()=>{
    setShowReEnter(!showReEnter);
  }

  return (
    <div className="flex items-center justify-center pt-20 bg-gray-100 overflow-auto" style={{height:"82vh"}}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white  rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              required
              className={`w-full px-3 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500 ${emailExists ? 'border-red-500' : ''}`}
            />
            {emailExists && (
              <p className="text-sm text-red-500">Email already exists</p>
            )}
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              className={`w-full px-3 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500 ${!mobileNumberValid ? 'border-red-500' : ''}`}
            />
            {!mobileNumberValid && (
              <p className="text-sm text-red-500">Please enter a valid 10-digit mobile number</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Re-enter Password
            </label>
            <div className="relative">
              <input
                type={showReEnter ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500"
              />
              <button
                type="button"
                onClick={toggleSetShowReEnter}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              >
                {showReEnter ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {!passwordMatch && (
            <p className="text-sm text-red-500">Passwords do not match</p>
          )}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <SuccessModal showModal={showModal} />
    </div>
  );
}

export default Register;
