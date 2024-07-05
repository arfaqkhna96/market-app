import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import LoginSuccessModal from './modal';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setShowModal(true);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-dvh" >
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className='flex items-center gap-3'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            <FaUser className='text-2xl'/>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder='Enter  your username'
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className='flex items-center gap-3'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            <MdPassword className='text-2xl'/>
            </label>
            <input
              type="password"
              id="password"
              placeholder='Enter your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <LoginSuccessModal showModal={showModal} />
    </div>
  );
};

export default Login;
