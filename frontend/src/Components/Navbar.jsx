import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using react-router for navigation

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#343a40] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <span className="text-lg font-bold">KK. Education</span>
                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div className="flex items-center sm:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? (
                                <i className="ri-close-fill ri-lg"></i> // Close icon when the menu is open
                            ) : (
                                <i className="ri-menu-2-line ri-lg"></i> // Menu icon when the menu is closed
                            )}
                        </button>
                    </div>

                    {/* Links Section */}
                    <div className={`hidden sm:flex sm:items-center sm:space-x-4`}>
                        <Link to="/home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Home
                        </Link>
                        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            About
                        </Link>
                        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Contact
                        </Link>
                        <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Links */}
            <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex flex-col space-y-1">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Home
                        </Link>
                        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            About
                        </Link>
                        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Contact
                        </Link>
                        <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
