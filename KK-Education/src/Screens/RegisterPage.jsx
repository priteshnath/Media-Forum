import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';




const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    // Google auth Logic
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate


    // Function to check if the age is 18 or above
    const isAdult = (dob) => {
        const dobDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();
        const monthDifference = today.getMonth() - dobDate.getMonth();

        // If birth date hasn't occurred this year yet, subtract 1 from age
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
            return age - 1 >= 18;
        }

        return age >= 18;
    };

    // Handle form submission
    function onSubmit(data) {
        console.log(data);
        navigate('/home'); // Navigate to HomePage after submission
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-[70%]">
                    <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block mb-1 font-semibold text-start">Full Name <span className='text-red-500'>*</span></label>
                            <input
                                type="text"
                                {...register('fullName', { required: 'Full Name is required' })}
                                placeholder='Enter Full Name'
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            />
                            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="block mb-1 font-semibold text-start">Date of Birth
                                <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="date"
                                {...register('dob', {
                                    required: 'Date of Birth is required',
                                    validate: (value) => isAdult(value) || 'You must be at least 18 years old',
                                })}
                                placeholder='Enter Age'
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            />
                            {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block mb-1 font-semibold text-start">
                                Phone Number<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="text"
                                {...register('phoneNumber', {
                                    required: 'Phone Number is required',
                                    pattern: {
                                        value: /^[6-9]\d{9}$/,
                                        message: 'Phone Number must be 10 digits',
                                    },
                                })}
                                placeholder='Enter Phone Number'
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            />
                            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 font-semibold text-start">
                                Email<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Invalid email format',
                                    },
                                })}
                                placeholder='Enter Email'
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                                autoComplete='email'
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        {/* Pan Card Upload */}
                        {/* <div>
                            <label className="block mb-1 font-semibold text-start">
                                Pan Card Upload<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="file"
                                accept=".pdf, .jpg, .jpeg, .png"
                                {...register('panCard', { required: 'Pan Card upload is required' })}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            />
                            {errors.panCard && <p className="text-red-500">{errors.panCard.message}</p>}
                        </div> */}

                        {/* Aadhar Card Upload */}
                        {/* <div>
                            <label className="block mb-1 font-semibold text-start">
                                Aadhar Card Upload<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="file"
                                accept=".pdf, .jpg, .jpeg, .png"
                                {...register('aadharCard', { required: 'Aadhar Card upload is required' })}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                            />
                            {errors.aadharCard && <p className="text-red-500">{errors.aadharCard.message}</p>}
                        </div> */}

                        {/* Password Field */}
                        <div className="relative">
                            {/* Label for Password */}
                            <label className="block mb-1 font-semibold text-start">
                                Password<span className='text-red-500'>*</span>
                            </label>

                            {/* Input for Password */}
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"} // Toggle between text and password based on the eye icon click
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password must be at least 6 characters' }, // Validation for min length
                                    })}
                                    placeholder="Enter Password"
                                    className="w-full border border-gray-300 p-2 pr-10 rounded focus:outline-none focus:border-blue-500"
                                    autoComplete="new-password"
                                />

                                {/* Eye Icon for Show/Hide Password */}
                                <span
                                    className="absolute right-3 top-2 cursor-pointer" // Positioning the icon at the right of the input
                                    onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
                                >
                                    {showPassword ? (
                                        <i className="ri-eye-line"></i> // Remix icon for eye (show password)
                                    ) : (
                                        <i className="ri-eye-off-line"></i> // Remix icon for eye-off (hide password)
                                    )}
                                </span>
                            </div>

                            {/* Display error for password field */}
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="relative">
                            {/* Label for Confirm Password */}
                            <label className="block mb-1 font-semibold text-start">
                                Confirm Password<span className='text-red-500'>*</span>
                            </label>

                            {/* Input for Confirm Password */}
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"} // Toggle between text and password based on the eye icon click
                                    {...register('confirmPassword', {
                                        required: 'Confirm Password is required',
                                        validate: (value) =>
                                            value === watch('password') || 'Passwords do not match', // Validation to check if passwords match
                                    })}
                                    placeholder="Confirm Password"
                                    className="w-full border border-gray-300 p-2 pr-10 rounded focus:outline-none focus:border-blue-500"
                                    autoComplete="new-password"
                                />

                                {/* Eye Icon for Show/Hide Confirm Password */}
                                <span
                                    className="absolute right-3 top-2 cursor-pointer" // Positioning the icon at the right of the input
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle show/hide confirm password
                                >
                                    {showConfirmPassword ? (
                                        <i className="ri-eye-line"></i> // Remix icon for eye (show confirm password)
                                    ) : (
                                        <i className="ri-eye-off-line"></i> // Remix icon for eye-off (hide confirm password)
                                    )}
                                </span>
                            </div>
                            {/* Display error for confirm password field */}
                            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                        </div>


                        {/* Buttons */}
                        <div className="flex space-x-4 justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                                disabled={isSubmitting}
                                value={isSubmitting ? "Submitting" : "Submit"}
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={() => reset()}
                                className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <hr />
            <button onClick={() => login()}>Sign in with Google 🚀</button>
        </>
    );
};

export default RegisterPage