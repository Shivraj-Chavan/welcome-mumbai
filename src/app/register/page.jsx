"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const   validateForm = () => {
    const newErrors = {};
    
    // if (!formData.fullName.trim()) {
    //   newErrors.fullName = 'Full name is required';
    // }
    
    // if (!formData.email.trim()) {
    //   newErrors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = 'Email is invalid';
    // }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    // if (!formData.password) {
    //   newErrors.password = 'Password is required';
    // } else if (formData.password.length < 6) {
    //   newErrors.password = 'Password must be at least 6 characters';
    // }
    
    // if (!formData.confirmPassword) {
    //   newErrors.confirmPassword = 'Please confirm your password';
    // } else if (formData.password !== formData.confirmPassword) {
    //   newErrors.confirmPassword = 'Passwords do not match';
    // }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault(); 

  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      setErrors({ api: errorData.message || "Registration failed" });
      return;
    }

    const data = await res.json();
    console.log("Registration success:", data);

    setShowSuccess(true);
    setErrors({});
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
        router.push("/");
    }, 4000);

  } catch (error) {
    console.error("Error registering:", error);
    setErrors({ api: "Something went wrong. Please try again." });
  }
}; 

  return (
    <div className="min-h-screen bg-white py-5">
      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-12 border rounded-xl m-6">
        <div className="bg-white p-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Register
          </h2>
          <p className="text-gray-600 mb-8">
            Join Majhi Mumbai to access local services in your area.
          </p>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
Registration received! Our team will contact you shortly to complete the process.
              </p>
            </div>
          )}

          {/* Registration Form */}
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label 
                htmlFor="fullName" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.fullName 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Enter your full name"
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-sm text-red-600">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.email 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Enter your email address"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  errors.phone 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Enter your phone number"
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>


            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={showSuccess}
              className="w-full py-3 px-6 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {showSuccess ? 'Registered!' : 'Create Account'}
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button className="text-blue-700 hover:text-blue-800 font-medium focus:outline-none focus:underline">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}