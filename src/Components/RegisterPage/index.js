import React, { useState } from 'react';
import SuccessModal from './modal';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [mobileNumberValid, setMobileNumberValid] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression for mobile number validation
    const mobileNumberRegex = /^[0-9]{10}$/;
    const isMobileNumberValid = mobileNumberRegex.test(mobileNumber);

    if (!isMobileNumberValid) {
      setMobileNumberValid(false);
      return;
    }

    if (password === confirmPassword) {
      // Handle registration logic here
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Mobile Number:', mobileNumber);
      console.log('Password:', password);
      // Reset form and states
      setFullName('');
      setEmail('');
      setMobileNumber('');
      setPassword('');
      setConfirmPassword('');
      setPasswordMatch(true);
      setMobileNumberValid(true);
      setShowModal(true);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
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
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500"
            />
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
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Re-enter Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-green-500 focus:border-green-500"
            />
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
};

export default Register;
