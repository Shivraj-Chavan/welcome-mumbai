import React from 'react'

export default function InputFields({label, name, value, onChange, type = "text", required, color = "green"}) {
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
          <span className="text-red-500 !important" aria-hidden="true">
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
        className={`border border-gray-300 rounded-md p-2 outline-none transition duration-150 focus:ring-1 ${ringColorClass}`}
      />
    </div>
  );
}
