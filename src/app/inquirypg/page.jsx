"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function InquiryPage() {
  const [inquiryForm, setInquiryForm] = useState({
    email: "",
    name: "",
    phone: "",
    enquiry: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryForm),
      });
      console.log("inquiry",res);
      

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setShowSuccess(true);
      setInquiryForm({
        email: "",
        name: "",
        phone: "",
        enquiry: "",
      });

      setTimeout(() => {
        setShowSuccess(false)
              router.push("/");

      }
        , 3000);
    } catch (error) {
      console.error("Inquiry submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-5">
 
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12 border rounded-xl m-6">
        <div className="bg-white p-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about our services? We'd love to hear from you.
          </p>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
                Thank you for your inquiry! We'll get back to you soon.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleInquirySubmit} className="space-y-6">
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
                id="name"
                name="name"
                value={inquiryForm.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
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
                value={inquiryForm.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
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
                value={inquiryForm.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Inquiry Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Inquiry Message
              </label>
              <textarea
                id="message"
                name="message"
                value={inquiryForm.enquiry}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : showSuccess ? 'Submitted!' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>

 
    </div>
  );
}
