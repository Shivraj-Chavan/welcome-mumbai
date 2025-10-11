// "use client";

// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';

// export default function RegistrationPage() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [showSuccess, setShowSuccess] = useState(false);
//   const router = useRouter();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error for this field when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const   validateForm = () => {
//     const newErrors = {};
    
//     // if (!formData.fullName.trim()) {
//     //   newErrors.fullName = 'Full name is required';
//     // }
    
//     // if (!formData.email.trim()) {
//     //   newErrors.email = 'Email is required';
//     // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//     //   newErrors.email = 'Email is invalid';
//     // }
    
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     }
    
//     // if (!formData.password) {
//     //   newErrors.password = 'Password is required';
//     // } else if (formData.password.length < 6) {
//     //   newErrors.password = 'Password must be at least 6 characters';
//     // }
    
//     // if (!formData.confirmPassword) {
//     //   newErrors.confirmPassword = 'Please confirm your password';
//     // } else if (formData.password !== formData.confirmPassword) {
//     //   newErrors.confirmPassword = 'Passwords do not match';
//     // }
    
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault(); 

//   const validationErrors = validateForm();
//   if (Object.keys(validationErrors).length > 0) {
//     setErrors(validationErrors);
//     return;
//   }

//   try {
//     const res = await fetch("/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!res.ok) {
//       const errorData = await res.json();
//       setErrors({ api: errorData.message || "Registration failed" });
//       return;
//     }

//     const data = await res.json();
//     console.log("Registration success:", data);

//     setShowSuccess(true);
//     setErrors({});
    
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setShowSuccess(false);
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         password: "",
//         confirmPassword: "",
//       });
//         router.push("/");
//     }, 4000);

//   } catch (error) {
//     console.error("Error registering:", error);
//     setErrors({ api: "Something went wrong. Please try again." });
//   }
// }; 

//   return (
//     <div className="min-h-screen bg-white py-5">
//       {/* Main Content */}
//       <div className="max-w-md mx-auto px-4 py-12 border rounded-xl m-6">
//         <div className="bg-white p-2">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//             Register
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Join Majhi Mumbai to access local services in your area.
//           </p>

//           {/* Success Message */}
//           {showSuccess && (
//             <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//               <p className="text-green-800 font-medium">
//               Registration received! Our team will contact you shortly to complete the process.
//               </p>
//             </div>
//           )}

//           {/* Registration Form */}
//           <div className="space-y-6">
//             {/* Full Name */}
//             <div>
//               <label 
//                 htmlFor="fullName" 
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 className={`w-full text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
//                   errors.fullName 
//                     ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
//                     : 'border-gray-300 focus:border-blue-500'
//                 }`}
//                 placeholder="Enter your full name"
//                 aria-describedby={errors.fullName ? 'fullName-error' : undefined}
//               />
//               {errors.fullName && (
//                 <p id="fullName-error" className="mt-1 text-sm text-red-600">
//                   {errors.fullName}
//                 </p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label 
//                 htmlFor="email" 
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className={`w-full text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
//                   errors.email 
//                     ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
//                     : 'border-gray-300 focus:border-blue-500'
//                 }`}
//                 placeholder="Enter your email address"
//                 aria-describedby={errors.email ? 'email-error' : undefined}
//               />
//               {errors.email && (
//                 <p id="email-error" className="mt-1 text-sm text-red-600">
//                   {errors.email}
//                 </p>
//               )}
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label 
//                 htmlFor="phone" 
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className={`w-full text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
//                   errors.phone 
//                     ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
//                     : 'border-gray-300 focus:border-blue-500'
//                 }`}
//                 placeholder="Enter your phone number"
//                 aria-describedby={errors.phone ? 'phone-error' : undefined}
//               />
//               {errors.phone && (
//                 <p id="phone-error" className="mt-1 text-sm text-red-600">
//                   {errors.phone}
//                 </p>
//               )}
//             </div>


//             {/* Submit Button */}
//             <button
//               type="button"
//               onClick={handleSubmit}
//               disabled={showSuccess}
//               className="w-full py-3 px-6 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {showSuccess ? 'Registered!' : 'Create Account'}
//             </button>
//           </div>

//           {/* Login Link */}
//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{' '}
//               <button className="text-blue-700 hover:text-blue-800 font-medium focus:outline-none focus:underline">
//                 Sign in
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import PlanPopup from "@/app/components/registerform/PlanPopup"
import FeaturesPopup from "@/app/components/registerform/FeaturesPopup"

// CheckBoxes
  const CheckBoxes = ({ label, options, selected, onChange, required }) => (
    <div className="mb-4">
      <label  className="text-gray-700 font-medium font-serif">
        {label}{" "}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={option}
              checked={selected.includes(option)}
              onChange={(e) => onChange(e)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  // InputFields
  const InputFields = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    required,
    color = "green",
    pattern,
    title
  }) => {
    const colorClasses = {
      green: "focus:ring-green-500 focus:border-green-500",
      orange: "focus:ring-orange-500 focus:border-orange-500",
      blue: "focus:ring-blue-500 focus:border-blue-500",
    };
    const ringColorClass = colorClasses[color] || "";
    return (
      <div className="flex flex-col mb-4">
       <label htmlFor={name} className="text-gray-700 font-medium font-serif">
        {label}{" "}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
                  title={title}

        pattern={pattern}
          className={`border border-gray-300 rounded-md p-2 outline-none transition duration-150 focus:ring-1 ${ringColorClass}`}
        />
      </div>
    );
  };

  // Headers
  const Headers = ({ title }) => (
    <h2 className="text-xl font-semibold mt-6 mb-4 border-b pb-2 font-serif">
      {title}
    </h2>
  );

export default function RegistrationForm() {
  const [companyType, setCompanyType] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
   const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const [showPlans, setShowPlans] = useState(false);
const [selectedPlan, setSelectedPlan] = useState(null);

  const [formData, setFormData] = useState({
    personName: "",
    companyName: "",
    address: "",
    pinCode: "",
    location: "",
    gst: "",
    telephone: "",
    fax: "",
    mobile: "",
    whatsapp: "",
    email: "",
    website: "",
    nature: "",
    category: "",
    subCategory: "",
    workingDays: "",
    closedDays: "",
  });

  const handleInputChange = (e) => {
  const { name, value } = e.target;

  // Define digit-only fields
  const phoneFields = ["mobile", "whatsapp", "telephone"];
  const pinField = "pinCode";

  if (phoneFields.includes(name)) {
    // Allow only digits, max 10
    const onlyNumbers = value.replace(/\D/g, "");
    if (onlyNumbers.length <= 10) {
      setFormData((prev) => ({ ...prev, [name]: onlyNumbers }));
    }
    return;
  }

  if (name === pinField) {
    // Allow only digits, max 6
    const onlyNumbers = value.replace(/\D/g, "");
    if (onlyNumbers.length <= 6) {
      setFormData((prev) => ({ ...prev, [name]: onlyNumbers }));
    }
    return;
  }

  // Default case: allow normal text
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCompanyType(
      checked ? [...companyType, value] : companyType.filter((item) => item !== value)
    );
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, companyType }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit registration");
    }
    setLoading(false)
    // alert("Registration submitted successfully!");

    setShowSuccess(true);
    setShowPlans(true); // open the plans popup

     setShowPopup(true);
    // Reset form fields after success
    setFormData({
      personName: "",
      companyName: "",
      address: "",
      pinCode: "",
      location: "",
      gst: "",
      telephone: "",
      fax: "",
      mobile: "",
      whatsapp: "",
      email: "",
      website: "",
      nature: "",
      category: "",
      subCategory: "",
      workingDays: "",
      closedDays: "",
    });
    setCompanyType([]);

    setTimeout(() => {
      setShowSuccess(false);
 
    }, 3000);
  } catch (error) {
    console.error("Registration submission error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

// WhatsApp notification
const sendWhatsAppMessage = (plan, messageType) => {
  const phoneNumber = "919619363738";
  let message = "";
  if (messageType === "success") {
    message = `✅ Payment successful for ${plan.name} plan (₹${plan.price}). Welcome aboard!`;
  } else if (messageType === "pending") {
    message = `⚠️ You selected ${plan.name} plan (₹${plan.price}). Complete payment to unlock advanced features.`;
  }
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
  return (
    <>
    
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 shadow-xl rounded bg-orange-50 m-7 mt-25"
    >
      <h1 className="text-center text-3xl font-semibold font-serif m-4">
        Registration Form
      </h1>

      {/* Type of Company */}
      <Headers title="Details" />
      <CheckBoxes
        label="Type of Company"
        options={[
          "Proprietorship",
          "Partnership",
          "LLP",
          "Public LTD",
          "HUF",
          "Other",
        ]}
        selected={companyType}
        onChange={handleCheckboxChange}
      />

      {/* Person & Company Name */}
      <div className="grid grid-cols-2 gap-4 my-4">
       
        <InputFields
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          required
        />

         <InputFields
          label="Person Name "
          name="personName"
          value={formData.personName}
          onChange={handleInputChange}
        />
      </div>

      <InputFields
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
        <InputFields
          label="Pin Code"
          name="pinCode"
          type="text"
          value={formData.pinCode}
          onChange={handleInputChange}
        />
        <InputFields
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />
        <InputFields
          label="GST No."
          name="gst"
          value={formData.gst}
          onChange={handleInputChange}
        />
        <InputFields
          label="Telephone No."
          name="telephone"
          value={formData.telephone}
          onChange={handleInputChange}
        />
        <InputFields
          label="FAX No."
          name="fax"
          value={formData.fax}
          onChange={handleInputChange}
        />
        <InputFields
          label="Mobile No."
          name="mobile"
          type="tel"
          value={formData.mobile}
            pattern="\d{10}"
  title="Please enter a valid 10-digit mobile number"
          onChange={handleInputChange}
          required
        />
     
        <InputFields
          label="WhatsApp No."
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleInputChange}
        />
        <InputFields
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputFields
          label="Website"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
        />
      </div>

      {/* Nature of Business */}
      <Headers title="Nature of Bussiness" />
      <InputFields
        label="Nature of Business"
        name="nature"
        value={formData.nature}
        onChange={handleInputChange}
      />

      <div className="grid grid-cols-2 gap-4 my-4">
        <InputFields
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <InputFields
          label="Sub Category"
          name="subCategory"
          value={formData.subCategory}
          onChange={handleInputChange}
        />
      </div>

      {/* Working Days */}
      <div className="grid grid-cols-2 gap-4 my-4">
        <InputFields
          label="Working Days"
          name="workingDays"
          value={formData.workingDays}
          onChange={handleInputChange}
        />
        <InputFields
          label="Closed Days"
          name="closedDays"
          value={formData.closedDays}
          onChange={handleInputChange}
        />
      </div>

      {/* Submit */}
    <div className="flex flex-col justify-center items-center text-center py-3">
  <button
    type="submit"
    disabled={loading}
    className={`text-center border-2 border-green-500 text-lg font-semibold px-6 py-2 items-center rounded-2xl transition hover:scale-y-105 
      ${loading 
        ? "bg-green-500 text-white cursor-not-allowed opacity-80" 
        : "bg-white text-black hover:bg-green-500 hover:text-white"
      }`}
  >
    {loading ? (
      <div className="flex items-center gap-2">
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        Loading...
      </div>
    ) : (
      "Next"
    )}
  </button>
</div>

    
      
    </form>

         
        <FeaturesPopup
      open={showPopup}
      onClose={() => setShowPopup(false)}
      onSelectPlan={(plan) => sendWhatsAppMessage(plan)}
    />

    </>

  );
}

// import React from 'react'

// export default function Register() {
//   return (
//     <div>Register page</div>
//   )
// }
