import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import Navbar from '../Components/Navbar';
import { FaUser, FaLock } from 'react-icons/fa'; // Icons for User and Password
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Eye icons
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const LoginPage = () => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState(''); // State to display login errors

  const navigate = useNavigate(); // React Router navigation hook

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle login
  const handleLogin = () => {
    if (username === 'thewebdevs' && password === '12345') {
      // Successful login - navigate to My Account page
      navigate('/accountPage');
    } else {
      // Login failed - display error message
      setError('Invalid username or password.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-sc flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-md w-[50%] max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

          {/* Username Input */}
          <div className="flex items-center border border-gray-300 rounded mb-6 p-2">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border border-gray-300 rounded mb-3 p-2">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <button onClick={togglePasswordVisibility} className="focus:outline-none">
              {showPassword ? <AiFillEye className="text-gray-500" /> : <AiFillEyeInvisible className="text-gray-500" />}
            </button>
          </div>

          {/* Display Error Message */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {/* Forgot Password Link */}
          <div className="text-right mb-4">
            <Link to="/forgotPassword" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white text-lg py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
