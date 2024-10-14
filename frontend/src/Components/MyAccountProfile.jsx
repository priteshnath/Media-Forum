import React from 'react'

const MyAccountProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-scree">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          {/* Profile Header */}
          <div className="flex items-center mb-4">
            <img
              src="/Photos/Profile.jpeg" // Add a placeholder for the profile picture
              alt="Profile"
              className="rounded-full w-24 h-24 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold">TRIPATHI AVADHKISHOR</h1>
              <p className="text-gray-600">Congratulations Welcome to our Family</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Member
              </button>
            </div>
          </div>

          {/* Referrals and Earnings */}
          <div className="flex justify-between text-center mt-6">
            <div>
              <h2 className="text-lg font-semibold">Referrals</h2>
              <p className="text-2xl">83</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Earnings</h2>
              <p className="text-2xl">12,640.00 INR</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <p className="text-gray-600">Until Senior Sales Officer Rank...</p>
            <div className="bg-gray-300 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }} /> {/* Adjust width based on progress */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default MyAccountProfile