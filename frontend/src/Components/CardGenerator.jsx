import React, { useEffect, useState } from 'react';

const CardGenerator = () => {
    const [userProfile, setUserProfile] = useState({
        name: '',
        designation: '',
        userMobile: '',
        profilePhoto: '', // Added profilePhoto to state
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserProfile({
                    name: data.name,
                    designation: data.designation,
                    userMobile: data.userMobile,
                    profilePhoto: data.profilePhoto, // Assume the response has a profilePhoto field
                });
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div className="w-[420px] h-[258px] rounded-lg shadow-xl bg-white relative overflow-hidden"
            style={{
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Custom shadow on all sides
            }}
        >
            {/* Header Section */}
            <div className="flex items-center">
                <img
                    src="public/Photos/Logo.jpg"
                    alt="Logo"
                    className="pl-2 w-30 h-20 object-fill" // Logo size remains the same
                />
                <div className='w-full'>
                    <h2 className='text-[18px] pt-2 tracking-wider text-nowrap text-center font-extrabold text-red-600'>
                        <span className='text-[22px]'>D</span>IGITAL <span className='text-[22px]'>I</span>NDIA <span className='text-[22px]'>E</span>DUCATION
                    </h2>
                    <p className='text-center font-bold mt-[-10px]'>
                        wa
                    </p>
                    <h2 className='tracking-wide text-center mt-[-10px] bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-[35px] font-extrabold'>
                        DIGITAL MEDIA
                    </h2>
                </div>
            </div>

            {/* Photo and Info Section */}
            <div className='px-2'>
                <p className="text-[11px] text-red-500 text-center font-bold ">
                    IDENTITY CARD
                </p>
                <div className="flex">
                    <div className='mt-[-15px]'>
                        <img
                            src={userProfile.profilePhoto || 'public/Photos/PersonIcon.jpg'} // Dynamically set the profile photo
                            alt="Profile"
                            className="w-20 h-15 border-[1px] border-gray-500"
                        />
                    </div>

                    <div className="ml-4 text-[12px] font-semibold leading-snug flex-grow">
                        <p>
                            <span className="font-bold">NAME: </span>
                            <span className="font-normal">{userProfile.name || 'Loading...'}</span>
                        </p>
                        <p>
                            <span className="font-bold">DESIGNATION: </span>
                            <span className="font-normal">{userProfile.designation || 'Loading...'}</span>
                        </p>
                        <p>
                            <span className="font-bold">USER MOBILE: </span>
                            <span className="font-normal">{userProfile.userMobile || 'Loading...'}</span>
                        </p>
                        <p>
                            <span className="font-bold">WORKING AREA: </span>
                            <span className="font-normal">ALL INDIA</span>
                        </p>
                    </div>

                    {/* QR Code Section */}
                    <div className="ml-4">
                        <img
                            src="public/Photos/QR.jpg"
                            alt="QR Code"
                            className="w-16 h-16"
                        />
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="left-0 right-0 mt-1">
                <div className="bg-blue-700 mb-[1px] text-white text-center py-1 text-[12px] font-bold">
                    सबका साथ, सबका विकास
                </div>
                <div className="bg-red-600 text-white text-center pt-1 text-[13px] font-medium tracking-wider">
                    www.digitalindiaeducation.co.in
                </div>
                <div className="bg-red-600 text-white text-center pb-3 text-[14px] font-medium tracking-wide">
                    REGISTERED UNDER GOVERNMENT OF INDIA
                </div>
            </div>
        </div>
    );
};

export default CardGenerator;
