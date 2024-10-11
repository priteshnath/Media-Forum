import React, { useState } from 'react';

const Admin = () => {
  // Sample user data
  const users = [
    {
      firstName: 'Pritesh',
      lastName: 'Nath',
      streetAddress: '410,10 Dwarka Apartment',
      town: 'Ahmedabad',
      state: 'Andhra Pradesh',
      pincode: '380024',
      phone: '9509416349',
      email: 'priteshxtech@gmail.com',
      nomineeName: 'Raj',
      sponsorId: '123456',
      vigilanceOfficer: 'Officer Name',
      accountUsername: 'priteshxtech@gmail.com',
      password: '123456', // This should be hashed in the backend
    },
    // Add more user objects if needed
  ];

  // State for theme toggle
  const [darkMode, setDarkMode] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        {/* Left Side of Navbar (Logo or Links) */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl text-white font-bold">Admin Panel</h1>
        </div>

        {/* Right Side of Navbar (Theme Toggle) */}
        <div>
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <i className={`ri-${darkMode ? 'sun-line' : 'moon-line'}`}></i>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        {/* User Management Table */}
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <div className="overflow-x-auto">
          <table className={`min-w-full border-collapse ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <thead>
              <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <th className="border border-gray-300 p-2">First Name</th>
                <th className="border border-gray-300 p-2">Last Name</th>
                <th className="border border-gray-300 p-2">Street Address</th>
                <th className="border border-gray-300 p-2">Town</th>
                <th className="border border-gray-300 p-2">State</th>
                <th className="border border-gray-300 p-2">Pincode</th>
                <th className="border border-gray-300 p-2">Phone</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Nominee Name</th>
                <th className="border border-gray-300 p-2">Sponsor ID</th>
                <th className="border border-gray-300 p-2">Vigilance Officer</th>
                <th className="border border-gray-300 p-2">Account Username</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className={`hover:bg-${darkMode ? 'gray-800' : 'gray-100'}`}>
                  <td className="border border-gray-300 p-2">{user.firstName}</td>
                  <td className="border border-gray-300 p-2">{user.lastName}</td>
                  <td className="border border-gray-300 p-2">{user.streetAddress}</td>
                  <td className="border border-gray-300 p-2">{user.town}</td>
                  <td className="border border-gray-300 p-2">{user.state}</td>
                  <td className="border border-gray-300 p-2">{user.pincode}</td>
                  <td className="border border-gray-300 p-2">{user.phone}</td>
                  <td className="border border-gray-300 p-2">{user.email}</td>
                  <td className="border border-gray-300 p-2">{user.nomineeName}</td>
                  <td className="border border-gray-300 p-2">{user.sponsorId}</td>
                  <td className="border border-gray-300 p-2">{user.vigilanceOfficer}</td>
                  <td className="border border-gray-300 p-2">{user.accountUsername}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
